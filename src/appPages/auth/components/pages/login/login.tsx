"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import style from "./login.module.scss";
import background from "../../../../../assets/backgroundImages/loginBackground.svg";
import Image from "next/image";
import googleIcon from "../../../../../assets/icons/googleIcon.svg";
import facebookIcon from "../../../../../assets/icons/facebookIcon.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const users = useSelector((state: RootState) => state.user.users);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { [key: string]: string } = {};

        if (!email.trim()) {
            newErrors.email = "Введите почту";
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = "Неверный формат почты";
        }

        if (!password) {
            newErrors.password = "Введите пароль";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const existingUser = users.find((u) => u.email === email);

        if (!existingUser) {
            newErrors.email = "Пользователь с таким email не найден";
        } else if (existingUser.password !== password) {
            newErrors.password = "Неверный пароль";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Успешный вход:", existingUser);

            localStorage.setItem("currentUser", JSON.stringify(existingUser));

            setEmail("");
            setPassword("");

            router.push("/home");
        }
    };

    return (
        <section className={style.content}>
            <Image
                src={background}
                className={style.background}
                alt="login background"
            />
            <div className={style.loginContent}>
                <h2 className={style.title}>Добро пожаловать</h2>
                <form onSubmit={handleSubmit} className={style.form}>
                    <input
                        placeholder="Почта"
                        type="email"
                        className={style.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                        <p className={style.error}>{errors.email}</p>
                    )}

                    <div className={style.passwordInputBlock}>
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

                    <button type="submit" className={style.mainButton}>
                        Войти
                    </button>
                </form>

                <h2 className={style.registerText}>
                    У вас нет аккаунта?{" "}
                    <Link className={style.registerLink} href="/register">
                        Регистрация
                    </Link>
                </h2>

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
        </section>
    );
}
