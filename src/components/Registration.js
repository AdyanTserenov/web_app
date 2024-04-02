import React from "react";
import {SignupForm} from "@userfront/toolkit/react";
import {Navigate, useLocation} from "react-router-dom";

export default function Registration() {
    let location = useLocation();
    return ( <div className="auth">
        <SignupForm theme={{"colors":{"light":"#ffffff","dark":"#fecb3e","accent":"#13a0ff","lightBackground":"#fdfdfd","darkBackground":"#000000"},"colorScheme":"light","fontFamily":"Avenir, Helvetica, Arial, sans-serif","size":"default","extras":{"rounded":true,"hideSecuredMessage":false}}} />
        </div>
    )
}
