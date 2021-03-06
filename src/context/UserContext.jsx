import { set } from "date-fns";
import { createContext, useState } from "react"; 

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || {}
    );

    const [isAuth, setIsAuth] = useState(
        JSON.parse(localStorage.getItem("isAuth")) || false
    );

    const saveUser = (user) => {
        localStorage.getItem("user",JSON.stringify(user));
        localStorage.getItem("isAuth",JSON.stringify(true));
        setUser(user);
        setIsAuth(true);
    };

    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("isAuth")
        setUser({});
        setIsAuth(false);
    };

    return(
        <UserContext.Provider
        value={{user,isAuth,saveUser,logout}}
        >
            {children}
        </UserContext.Provider>
    );
};

