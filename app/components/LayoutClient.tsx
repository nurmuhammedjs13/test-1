"use client";
import { ReactNode } from "react";

interface LayoutClientProps {
    children?: ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "grey" }}>
            {children}
        </div>
    );
}
