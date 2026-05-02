import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    DEFAULT: '#1F7A4C',
                    50: '#F0F9F4',
                    100: '#DCF8E9',
                    200: '#A7F0C9',
                    300: '#6FE8A9',
                    400: '#3FE089',
                    500: '#1F7A4C',
                    600: '#1A6B42',
                    700: '#155C38',
                    800: '#104D2E',
                    900: '#0B3E24',
                },
                secondary: {
                    DEFAULT: '#F8FAFC', /* Changed from #F5F7F6 to slightly warmer */
                    50: '#FFFFFF',
                    100: '#F1F5F9',
                    200: '#E2E8F0',
                },
                accent: '#D1FAE5',
                /* Add a slightly darker gray for better text contrast */
                'gray-dark': '#1E293B',
                'gray-light': '#64748B',
                'gray-lighter': '#94A3B8',
            },
            fontSize: {
                h1: ['32px', { lineHeight: '1.2', fontWeight: '600' }],
                h2: ['24px', { lineHeight: '1.3', fontWeight: '600' }],
                h3: ['20px', { lineHeight: '1.4', fontWeight: '600' }],
                body: ['14px', { lineHeight: '1.6', fontWeight: '400' }],
                'lg': ['18px', { lineHeight: '1.6', fontWeight: '500' }],
            },
            boxShadow: {
                card: '0 2px 6px rgba(0,0,0,0.05)', /* Increased shadow */
                'card-hover': '0 8px 20px rgba(0,0,0,0.1)', /* Increased hover shadow */
                'card-deep': '0 12px 24px -4px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
            },
            borderRadius: {
                card: '16px',
            },
            spacing: {
                '18': '72px',
                '22': '88px',
            },
        },
    },

    plugins: [forms],
};