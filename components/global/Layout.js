import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';

import { ThemeProvider } from '@/hooks/useDarkMode';
import UseToggler from '@/hooks/useToggler';

export default function Layout({ children }) {
    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <Header isNavbarInteractive />
            <ThemeProvider>
                <main className="flex-wrap min-h-screen">
                    {children}
                </main>
                <UseToggler />
            </ThemeProvider>
            <Footer />
        </div>
    )
}
