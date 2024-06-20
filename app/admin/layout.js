import { Inter } from "next/font/google";
import "../globals.css";
import HeaderAdmin from "@/components/ui/HeaderAdmin";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "IThub | Админ",
    description: "Админ панель для Ithub",
};

export default function AdminLayout({ children }) {

    return (

        <div className="flex">
            <HeaderAdmin />
            <div className="mx-auto">{children}</div>
        </div>
    );
}
