"use client";

import "./global.scss";
import LayoutClient from "./components/LayoutClient";
import { Provider } from "react-redux";
import { store } from "../src/redux/store"; // путь к твоему store

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Provider store={store}>
                    <LayoutClient>{children}</LayoutClient>
                </Provider>
            </body>
        </html>
    );
}
