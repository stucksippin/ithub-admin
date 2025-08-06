import { NextResponse } from 'next/server';
import withAuth from 'next-auth/middleware';

export default withAuth(function middleware(req) {
    // Пропускаем логин страницу
    if (req.nextUrl.pathname === '/login') {
        return;
    }

    // Проверка для админских роутов
    if (req.nextUrl.pathname.startsWith('/admin') && req.nextauth.token.role !== 'admin') {
        return NextResponse.redirect(new URL('/', req.url));
    }

    // Проверка для пользовательских роутов
    if (req.nextUrl.pathname.startsWith('/user') && req.nextauth.token.role !== 'user' && req.nextauth.token.role !== 'admin') {
        return NextResponse.redirect(new URL('/', req.url));
    }
});

export const config = {
    matcher: ['/', '/user/:path*', '/admin/:path*']
};