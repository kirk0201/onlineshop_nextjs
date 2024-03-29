import { Inter } from "next/font/google";
import "./globals.css";
import CenterMenu from "@/components/header/centermenu";
import TopMenu from "@/components/header/topmenu";
import BottomMenu from "@/components/header/bottommenu";
import Line from "@/components/line";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title className="test">Store</title>
      </head>
      <body>
        <div>
          <header className="mb-5">
            <div>
              <TopMenu />
            </div>
            <div className="relative w-[1200px] m-auto bg-slate-600">
              <CenterMenu />
              <BottomMenu />
            </div>
            <Line />
          </header>
          {/* <div className="w-[1366px] m-auto bg-slate-600">{children}</div> */}
          <div className="bg-slate-600 ">{children}</div>
          <footer>
            <div>footer</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
