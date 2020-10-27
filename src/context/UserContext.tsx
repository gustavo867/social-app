import React, { useState, createContext } from "react";

const UserContext = createContext([{}, () => {}]);

export interface UserInfo {
  username: string;
  email: string;
  uid: string;
  isLoggedIn: string;
  profilePhotoUrl: string;
}

const UserProvider: React.FC = ({ ...props }) => {
  const [state, setState] = useState({
    username: "",
    email: "",
    uid: "",
    isLoggedIn: null,
    profilePhotoUrl: "default",
  });

  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
