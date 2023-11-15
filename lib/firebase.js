import getConfig from "next/config";
import { initializeApp } from 'firebase/app';
// import { collection, getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const { publicRuntimeConfig } = getConfig();
// export const COLLECTION_NAME = 'moneyLists';

const firebaseConfig = {
  apiKey: publicRuntimeConfig.API_KEY,
  authDomain: "pocket-journal-6666.firebaseapp.com",
  projectId: "pocket-journal-6666",
  storageBucket: "pocket-journal-6666.appspot.com",
  messagingSenderId: "785332897394",
  appId: publicRuntimeConfig.APP_ID
};

const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
export const auth = getAuth(app);

// export const MoneyListsDocRef = collection(
//     db,
//     COLLECTION_NAME,
// );