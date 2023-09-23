import React from "react";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";
import { useAppSelector } from "../store/hooks";

const RequireAuth: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const authTokens = useAppSelector(
    (state: RootState) => state.auth.authTokens
  );

  return authTokens ? <>{element}</> : <Navigate to="/login" replace />;
};

export default RequireAuth;
