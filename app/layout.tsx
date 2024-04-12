import Link from "next/link";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const NotoSans = Noto_Sans_KR({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={NotoSans.className}
                suppressHydrationWarning={true}
            >
                <header className="flex flex-row justify-between items-center w-[100%] h-[80px] border-b-[#bec4cd] border-b-[1px] px-[40px]">
                    <img
                        src="/images/logo.png"
                        alt="logo"
                        className="rounded-full"
                        width={50}
                        height={50}
                    />
                    <div className="flex flex-row items-center">
                        <Link
                            href={"/"}
                            className="font-bold text-[20px] mr-[20px]"
                        >
                            Career
                        </Link>
                        <Link
                            href={"/portfolio"}
                            className="font-bold text-[20px]"
                        >
                            Portfolio
                        </Link>
                    </div>
                </header>
                {children}
            </body>
        </html>
    );
}
