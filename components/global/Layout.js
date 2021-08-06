import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';

import { ThemeProvider } from 'hooks/useDarkMode';
import UseToggler from 'hooks/useToggler'

export default function Layout({ children }) {
    return (
        <div className="bg-white dark:bg-gray-800">
            <Header />
            <main className="flex-wrap min-h-screen">
                {children}
            </main>
            <Footer />
        </div>
    )
}
