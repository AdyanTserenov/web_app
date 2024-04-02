import React from "react";
import {LoginForm} from "@userfront/toolkit/react";
import {Link} from "react-router-dom";

export default function Login() {
    return ( <div className="auth">
            <LoginForm theme={{"colors":{"light":"#ffffff","dark":"#fecb3e","accent":"#13a0ff","lightBackground":"#fdfdfd","darkBackground":"#000000"},"colorScheme":"light","fontFamily":"Avenir, Helvetica, Arial, sans-serif","size":"default","extras":{"rounded":true,"hideSecuredMessage":false}}} />
            <Link to={"/reset"} style={{textDecoration: 'None', color: "#fffaf1"}}>
                <button className="reset-button">Сбросить пароль</button>
            </Link>
    </div>
    )
}
