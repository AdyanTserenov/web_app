import React, {useState} from "react";
import axios from "axios";

export default function Login() {

    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (event) => {
        /* event.persist(); NO LONGER USED IN v.17*/
        event.preventDefault();

        const { name, value } = event.target;
        setValues((values) => ({
            ...values,
            [name]: value
        }));
    };

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.email && values.password) {
            setValid(true);
        }
        setSubmitted(true);
        axios.post("https://api.dev.kodlmsh.ru/api/auth/jwt/create/", {
            username: values.email,
            password: values.password
        })
            .then((access) => {
                console.log(access.data.access)
                localStorage.setItem("auth_token", access.data.access)})
            .catch((refresh) => console.log(refresh));
    };

    return (<div className="auth">
            <form className="register-form" onSubmit={handleSubmit}>
                {submitted && valid && (
                    <div className="success-message">
                        <div> Авторизация прошла успешно! </div>
                    </div>
                )}

                {!valid && (
                    <input
                        className="form-field"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                )}

                {submitted && !values.email && (
                    <span id="email-error">Пожалуйста, введите почту</span>
                )}

                {!valid && (
                    <input
                        className="form-field"
                        type="password"
                        placeholder="Пароль"
                        name="password"
                        value={values.password}
                        onChange={handleInputChange}
                    />
                )}

                {submitted && !values.password && (
                    <span id="password-error">Пожалуйста, введите пароль</span>
                )}

                {!valid && (
                    <button className="form-field" type="submit">
                        Войти
                    </button>
                )}
            </form>
        </div>
    )
}
