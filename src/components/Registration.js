import React, {useState} from "react";
import axios from "axios";

export default function Registration() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleInputChange = (event) => {
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
        if (values.firstName && values.lastName && values.email) {
            setValid(true);
        }
        setSubmitted(true);
        axios.post("https://api.dev.kodlmsh.ru/api/users/registration", {
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            password: values.password
        })
            .then((response) => console.log(response.data))
            .then((error) => console.log(error));
    };

    return (<div className="auth">
            <form className="register-form" onSubmit={handleSubmit}>
                {submitted && valid && (
                    <div className="success-message">
                        <div> Регистрация прошла успешно! </div>
                    </div>
                )}
                {!valid && (
                    <input
                        className="form-field"
                        type="text"
                        placeholder="Имя"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleInputChange}
                    />
                )}

                {submitted && !values.firstName && (
                    <span id="first-name-error">Пожалуйста, введите имя пользователя</span>

                )}

                {!valid && (
                    <input
                        className="form-field"
                        type="text"
                        placeholder="Фамилия"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleInputChange}
                    />
                )}

                {submitted && !values.lastName && (
                    <span id="last-name-error">Пожалуйста, введите фамилию пользователя</span>
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
                    <span id="password-error">Пожалуйста, придумайте пароль</span>
                )}

                {!valid && (
                    <button className="form-field" type="submit">
                        Зарегистрироваться
                    </button>
                )}
            </form>
        </div>
    )
}
