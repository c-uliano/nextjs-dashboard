import "@/app/ui/global.css"; // * IMPORT ONCE HERE, AT HIGHEST LEVEL, FOR USE THROUGHOUT ENTIRE APP
import { inter } from "@/app/ui/fonts"; // ? WHY WOULD YOU DO THIS INSTEAD OF APPLYING A FONT VIA CSS? JUST TO AVOID LAYOUT SHIFT?

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
