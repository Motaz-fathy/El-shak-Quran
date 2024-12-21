import { createContext, useContext } from "react";

export const authContext = createContext()

const useAuth = () => useContext(authContext)

export default useAuth