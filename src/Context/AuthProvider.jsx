import React, { useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebsae.config";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  //=============================== Watcher ===============================
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => unsubscribed;
  }, []);

  //=============================== Google Sign In ===============================
  const ProviderGoogleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  //=============================== Sign Out ===============================
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  //=============================== Sign Out ===============================

  //=============================== Register ===============================

  const providerRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //=============================== Login ===============================
  const providerLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //=============================== update ===============================
  const updateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  //=============================== Veryfy Email ===========================

  const veryfyEmail = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };

  const authInfo = {
    user,
    ProviderGoogleLogin,
    logOut,
    providerLogin,
    providerRegister,
    loading,
    setLoading,
    updateUserProfile,
    veryfyEmail,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;