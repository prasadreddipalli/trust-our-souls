import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { login } from '../services';


export const saveUserToLocalStorage = (userData) => {
  localStorage.setItem('user', JSON.stringify(userData));
};

export const getUserFromLocalStorage = () => {
  const userData = localStorage.getItem('user');
  return userData ? JSON.parse(userData) : null;
};

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  /*console.log("google user " + JSON.stringify(user));
 
  try {
    const resp =   await loginUser(user);
    console.log("db user " + JSON.stringify(resp));
 
    saveUserToLocalStorage(resp);
   
  } catch (error) {
    saveUserToLocalStorage([]);
  }*/
   return addUserToDB(user);

};

export const addUserToDB = async (user) => {

  console.log("google user " + JSON.stringify(user));
 
  try {
    const resp =   await loginUser(user);
    console.log("db user " + JSON.stringify(resp));
 
    saveUserToLocalStorage(resp);
   
  } catch (error) {
    saveUserToLocalStorage([]);
  }
}


export const  loginUser=(user) => 
  login(user).then(userData => {
    console.log("loginUser .."+ userData);
   return userData;
  })
  .catch(error => {
    return error;
  });


export const doSignOut = () => {
  localStorage.removeItem('user');
  return auth.signOut();
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
