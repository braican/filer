import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import config from './config';

firebase.initializeApp(config);

// Basics
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// Auth methods
const authProvider = new firebase.auth.GoogleAuthProvider();

// Collections
const usersCollection = db.collection('users');

export { db, auth, currentUser, authProvider, usersCollection };
