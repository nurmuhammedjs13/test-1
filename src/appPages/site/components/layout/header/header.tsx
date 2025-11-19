"use client";

import React from "react";
import style from "./header.module.scss";
import { useHeaderStore } from "@/stores/useHeaderStore";

const Links = [
    {
        name: "Главная",
        href: "/",
    },
];
function Header() {
    const { isOpenProfileMenu, setIsOpenProfileMenu } = useHeaderStore();

    return <div>header</div>;
}

export default Header;
