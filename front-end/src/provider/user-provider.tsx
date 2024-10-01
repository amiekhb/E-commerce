import { useState } from "react";
import { createContext } from "vm";

interface IUser {
  firstname: string;
  email: string;
}

interface IContext{
    user:IUser|null;
    setUser:React.Dispatch<React.SetStateActionFunction;
}

const UseContext = createContext();

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser></IUser>|(null);
};
