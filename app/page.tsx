import "./global.scss";
import LayoutClient from "./components/LayoutClient";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {/* LayoutClient теперь оборачивает все страницы */}
                <LayoutClient>{children}</LayoutClient>
            </body>
        </html>
    );
}
