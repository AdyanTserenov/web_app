import React from "react";
import {Navigate, useLocation} from "react-router-dom";
import Userfront from "@userfront/toolkit/react";

export default function RequireAuth({children}) {
    let location = useLocation();
    if (!Userfront.tokens.accessToken) {
        return <Navigate to="../login" state={{ from: location }} replace />;
    }
    return children;
}
