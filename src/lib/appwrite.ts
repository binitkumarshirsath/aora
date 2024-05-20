import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from "react-native-appwrite";

const appwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_ENDPOINT,
  platform: process.env.EXPO_PUBLIC_PLATFORM,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageId: process.env.EXPO_PUBLIC_STORAGE_ID,
  databaseId: process.env.EXPO_PUBLIC_DATABASE_ID,
  userCollectionId: process.env.EXPO_PUBLIC_USER_COLLECTION_ID,
  videoCollectionId: process.env.EXPO_PUBLIC_VIDEO_COLLECTION_ID,
};

if (
  !appwriteConfig.endpoint ||
  !appwriteConfig.platform ||
  !appwriteConfig.projectId ||
  !appwriteConfig.storageId ||
  !appwriteConfig.databaseId ||
  !appwriteConfig.userCollectionId ||
  !appwriteConfig.videoCollectionId
) {
  throw new Error("Env vars not loaded.");
}

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatar = new Avatars(client);
const database = new Databases(client);
// Register User

export const createUser = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    //creates user in auth section
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw new Error("Account not created");

    const avatarUrl = avatar.getInitials(username);
    //create new user in db
    const newUser = await database.createDocument(
      appwriteConfig.databaseId!,
      appwriteConfig.userCollectionId!,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );
    // await signInUser(email, password);
    return newUser;
  } catch (err) {
    throw err;
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    const session = account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw error;
  }
};

export const getAccount = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;
    return currentAccount;
  } catch (error) {
    console.error(error);
  }
};
export const getCurrentUser = async () => {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw new Error("Account not found");
    const currentUser = await database.listDocuments(
      appwriteConfig.databaseId!,
      appwriteConfig.userCollectionId!,
      [Query.equal("accountId", currentAccount.$id)]
    );

    return currentUser.documents[0];
  } catch (err) {
    console.error(err);
  } finally {
  }
};
