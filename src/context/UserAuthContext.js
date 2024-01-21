import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { getUser } from "../services/user.service";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      const info = await getUser();

      setLoading(false);

      if (currentUser) {
        setUser(currentUser);
        setUserInfo(info);
        setIsLogged(true);
      }

      setLoading(false);
    });
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [user, isLogged]);

  return (
    <userAuthContext.Provider
      value={{ user, loading, isLogged, userInfo, setIsLogged }}
    >
      {!loading && children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
