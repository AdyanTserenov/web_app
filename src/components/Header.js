import React from "react";
import {Link} from "react-router-dom";

export default function Header() {

    return (
        <header>
            <div className="border">
                <div className="image"></div>
                <span className="logo">Көдлмш</span>
                <ul className="nav">
                    <li>
                        <Link to="/" style={{textDecoration: 'None', color: "#222"}}>
                            Главная
                        </Link>
                    </li>
                    <li className="Link">
                        <Link to="/table" style={{textDecoration: 'None', color: "#222"}}>
                            Доска объявлений
                        </Link>
                        </li>
                    <li>
                        <Link to="dashboard/my" style={{textDecoration: 'None', color: "#222"}}>
                            Мои объявления
                        </Link>
                        </li>
                    <li>
                        <Link to="dashboard/profile" style={{textDecoration: 'None', color: "#222"}}>
                            Личный кабинет
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
