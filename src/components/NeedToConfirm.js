import React from "react";
import { FaEnvelope } from "react-icons/fa";

export default function NeedToConfirm() {
    return (
        <p className="confirm">
            Письмо для подтверждения регистрации отправлено Вам на почту! <FaEnvelope className="need-to-confirm"/>
        </p>
    )
}
