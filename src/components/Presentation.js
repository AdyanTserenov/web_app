import React from "react";
import {Link} from "react-router-dom";

export default function Presentation() {
    return (
        <div className="presentation">
            <Link to="/registration" style={{textDecoration: 'None', color: "#222"}}>
                <button className="reg">
                    Регистрация
                </button>
            </Link>
            <Link to="/login" style={{textDecoration: 'None', color: "#fffaf1"}}>
                <button className="log">
                    Вход
                </button>
            </Link>
        </div>
    )
}
