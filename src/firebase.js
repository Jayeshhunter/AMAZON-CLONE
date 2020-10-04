const { fireEvent } = require("@testing-library/react");

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
