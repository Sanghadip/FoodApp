import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyANKRpMPE7Z-NxnKjTyVaWjeCmdItmJdLg",

  authDomain: "restaurantapp-6e577.firebaseapp.com",

  databaseURL: "https://restaurantapp-6e577-default-rtdb.firebaseio.com",

  projectId: "restaurantapp-6e577",

  storageBucket: "restaurantapp-6e577.appspot.com",

  messagingSenderId: "526296826071",

  appId: "1:526296826071:web:7be28943d1c4ed4a8e7092"

};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
