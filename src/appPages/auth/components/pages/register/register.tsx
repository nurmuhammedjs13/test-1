"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { registerUser } from "../../../../../redux/userSlice";
import { RootState, AppDispatch } from "../../../../../redux/store";
import googleIcon from "../../../../../assets/icons/googleIcon.svg";
import facebookIcon from "../../../../../assets/icons/facebookIcon.svg";
import style from "./register.module.scss";
import Image from "next/image";

export default function Register() {
    const dispatch = useDispatch<AppDispatch>();
    const users = useSelector((state: RootState) => state.user.users);
    const router = useRouter();

    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { [key: string]: string } = {};

        if (!name.trim()) {
            newErrors.name = "Введите имя";
        }

        if (!email.trim()) {
            newErrors.email = "Введите почту";
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = "Неверный формат почты";
        }

        if (!password) {
            newErrors.password = "Введите пароль";
        } else if (password.length < 6) {
            newErrors.password = "Пароль должен быть минимум 6 символов";
        }

        if (!agree) {
            newErrors.agree = "Необходимо согласиться с условиями";
        }

        const existingUser = users.find((u) => u.email === email);
        if (existingUser) {
            newErrors.email = "Пользователь с таким email уже существует";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            dispatch(registerUser({ name, email, password }));
            console.log("Успешная регистрация:", { name, email });
            router.push("/home");
        }
    };

    return (
        <section className={style.content}>
            <div className={style.header}>
                <button
                    className={style.buttonText}
                    onClick={() => router.push("/login")}
                >
                    Войти
                </button>
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && (
                            <p className={style.error}>{errors.name}</p>
                        )}
                    </div>

                    <div className={style.emailInputBlock}>
                        <h2 className={style.inputText}>Почта</h2>
                        <input
                            type="email"
                            placeholder="Введите свою почту"
                            className={style.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && (
                            <p className={style.error}>{errors.email}</p>
                        )}
                    </div>

                    <div className={style.passwordInputBlock}>
                        <h2 className={style.inputText}>Пароль*</h2>
                        <div className={style.inputWrapper}>
                            <input
                                type={show ? "text" : "password"}
                                placeholder="Введите свой пароль"
                                className={style.inputPassword}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => setShow((prev) => !prev)}
                                className={style.eyeBtn}
                            >
                                {show ? "✓" : "✕"}
                            </button>
                        </div>
                        {errors.password && (
                            <p className={style.error}>{errors.password}</p>
                        )}
                    </div>

                    <div className={style.checkBoxBlock}>
                        <input
                            className={style.checkBoxInput}
                            type="checkbox"
                            placeholder="checkbox"
                            checked={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                        />
                        <h2 className={style.checkBoxText}>
                            Согласен с Условиями
                        </h2>
                        {errors.agree && (
                            <p className={style.error}>{errors.agree}</p>
                        )}
                    </div>
                </div>

                <div className={style.buttons}>
                    <button className={style.mainButton} onClick={handleSubmit}>
                        Регистрация
                    </button>

                    <div className={style.divider}>
                        <span>Или</span>
                    </div>

                    <div className={style.loginButtons}>
                        <button className={style.loginButton}>
                            <Image
                                src={googleIcon}
                                alt="login with google"
                                className={style.icon}
                            />
                            Google
                        </button>
                        <button className={style.loginButton}>
                            <Image
                                src={facebookIcon}
                                alt="login with facebook"
                                className={style.icon}
                            />
                            Facebook
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
