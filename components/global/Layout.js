import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';

export default function Layout({ children }) {
    return (
        <div className="bg-gray-50 dark:bg-gray-800 antialiased">
            <Header />
            <main className="container mx-auto flex-wrap min-h-screen px-4">
                {children}
            </main>
            <Footer />
        </div>
    )
}
