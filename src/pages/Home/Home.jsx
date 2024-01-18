import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/firebase.config";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";

const Home = () => {
  // const [user, loading, error] = useAuthState(auth);
  const usersCollectionRef = collection(db, "users");
  const [userData, setUserData] = useState({});

  const { user } = useUserAuth();
  console.log(user);

  // useEffect(() => {
  //   const getUserData = async () => {
  //     if (auth?.currentUser?.uid) {
  //       const q = query(
  //         usersCollectionRef,
  //         where("userId", "==", auth.currentUser.uid),
  //         limit(1)
  //       );

  //       const snapshot = await getDocs(q).catch((e) => console.log(e));
  //       const data = snapshot.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));

  //       console.log(data);

  //       setUserData(data[0]);
  //     }
  //   };
  //   getUserData();
  // }, []);

  return (
    <div className="container text-center">
      {/* <h2>{user && user.uid}</h2>
      <h1>{userData.fullname}</h1> */}
      <h2>{user && user.uid}</h2>
      {/* <h1>{userData.fullname}</h1> */}
    </div>
  );
};

export default Home;
