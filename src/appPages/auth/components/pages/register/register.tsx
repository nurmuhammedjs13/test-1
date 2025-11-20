"use client";

import React, { useState } from "react";
import style from "./register.module.scss";

function Register() {
    const [show, setShow] = useState(false);

    return (
        <section className={style.content}>
            <div className={style.header}>
                <button className={style.buttonText}>Ввойти</button>
            </div>
            <div className={style.body}>
                <h2 className={style.title}>Регистрация</h2>
                <div className={style.inputs}>
                    <div className={style.nameInputBlock}>
                        <h2 className={style.inputText}>Имя</h2>
                        <input
                            type="text"
                            placeholder="Имя"
                            className={style.input}
                        />
                    </div>
                    <div className={style.emailInputBlock}>
                        <h2 className={style.inputText}>Почта</h2>
                        <input
                            type="email"
                            placeholder="Введите свою почту"
                            className={style.input}
                        />
                    </div>
                    <div className={style.passwordInputBlock}>
                        <h2 className={style.inputText}>Пароль*</h2>

                        <div className={style.inputWrapper}>
                            <input
                                type={show ? "text" : "password"}
                                placeholder="Введите свой пароль"
                                className={style.inputPassword}
                            />

                            <button
                                type="button"
                                onClick={() => setShow((prev) => !prev)}
                                className={style.eyeBtn}
                            >
                                {show ? "×" : "✓"}
                            </button>
                        </div>
                    </div>
                    <div className={style.checkBoxBlock}>
                        <input
                            className={style.checkBoxInput}
                            type="checkbox"
                            placeholder="checkBox    "
                        />
                        <h2 className={style.checkBoxText}>
                            Согласен с Условиями
                        </h2>
                    </div>
                </div>
                <div className={style.buttons}>
                    <button className={style.mainButton}>Регистрация</button>
                </div>
            </div>
        </section>
    );
}

export default Register;
