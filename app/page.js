import { NextAuthOptions } from "@/config";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function MainPage() {
  const session = await getServerSession(NextAuthOptions);

  if (!session || !session.user) {
    redirect('/login');
  }

  const { role } = session.user;

  if (role === 'admin') {
    redirect('/admin');
  } else if (role === 'user') {
    redirect('/user');
  }

  // Если роль не определена
  return redirect('/login');
}