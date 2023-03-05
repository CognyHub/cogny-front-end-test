import { useContext } from "react";
import {AuthContext} from "../contexts/authContext";

function useAuth() {
  const context = useContext(AuthContext);

  return context;
};

export default useAuth;

