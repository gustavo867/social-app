import React, { createContext } from "react";

import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../config/firebase";

interface User {
  email: string;
  password: string;
  username: string;
  profilePhoto: string;
}

export interface Firebase {
  getCurrentUser: () => firebase.User | null;
  createUser: (
    user: User
  ) => Promise<
    | {
        profilePhotoUrl: string;
        uid: string;
        email: string;
        password: string;
        username: string;
        profilePhoto: string;
      }
    | undefined
  >;
  uploadProfilePhoto: (uri: string) => Promise<string>;
  getBlob: (uri: string) => Promise<unknown>;
  getUserInfo: (
    uid: string
  ) => Promise<firebase.firestore.DocumentData | undefined>;
  logOut: () => Promise<boolean>;
}

const FirebaseContext = createContext(null);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const Firebase: Firebase = {
  getCurrentUser: () => {
    return firebase.auth().currentUser;
  },

  createUser: async (user: User) => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);

      const uid = Firebase.getCurrentUser()!.uid;

      let profilePhotoUrl = "default";

      await db.collection("users").doc(uid).set({
        username: user.username,
        email: user.email,
        profilePhotoUrl,
      });

      profilePhotoUrl = await Firebase.uploadProfilePhoto(user.profilePhoto);

      delete user.password;

      return { ...user, profilePhotoUrl, uid };
    } catch (error) {
      console.log("Error @createUser", error.message);
    }
  },

  uploadProfilePhoto: async (uri: string) => {
    const uid = Firebase.getCurrentUser()!.uid;

    try {
      const photo: any = await Firebase.getBlob(uri);

      const imageRef = firebase.storage().ref("profilePhoto").child(uid);
      await imageRef.put(photo);

      const url = await imageRef.getDownloadURL();

      await db.collection("users").doc(uid).update({
        profilePhotoUrl: url,
      });

      return url;
    } catch (error) {
      console.log("Error @uploadProfilePhoto", error);
    }
  },

  getBlob: async (uri: string) => {
    return await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.onload = () => {
        resolve(xhr.response);
      };

      xhr.onerror = () => {
        reject(new TypeError("Network request failed."));
      };

      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
  },

  getUserInfo: async (uid: string) => {
    try {
      const user = await db.collection("users").doc(uid).get();

      if (user.exists) {
        return user.data();
      }
    } catch (error) {
      console.log("Error @getUserInfo:", error);
    }
  },

  logOut: async () => {
    try {
      await firebase.auth().signOut();

      return true;
    } catch (error) {
      console.log("Error @logOut:", error);
    }

    return false;
  },
};

const FirebaseProvider = ({ ...props }) => {
  return (
    <FirebaseContext.Provider value={Firebase}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext, FirebaseProvider };
