import { Inter } from "next/font/google";
import "./globals.css";
import ConfigProvider from 'antd';
import ruRU from 'antd/locale/ru_RU';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IThub | Admin",
  description: "Админ панель для администрации",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
