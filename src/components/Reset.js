import React from "react";
import {PasswordResetForm } from "@userfront/toolkit/react";

export default function Reset() {
    return ( <div className="auth">
            <PasswordResetForm theme={{"colors":{"light":"#ffffff","dark":"#fecb3e","accent":"#13a0ff","lightBackground":"#fdfdfd","darkBackground":"#000000"},"colorScheme":"light","fontFamily":"Avenir, Helvetica, Arial, sans-serif","size":"default","extras":{"rounded":true,"hideSecuredMessage":false}}} />
        </div>
    )
}
