import React from "react";
import { FaCheck } from "react-icons/fa";

export default function Confirm() {
    return (
        <p className="confirm">
            Вы успешно зарегистрированы! <FaCheck className="check"/>
        </p>
    )
}
