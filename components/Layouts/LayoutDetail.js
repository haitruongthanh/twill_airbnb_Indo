import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";

import { ThemeProvider } from "@/hooks/useDarkMode";
import UseToggler from "@/hooks/useToggler";

export default function Layout({ children, placeholder }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <Header isNavbarClean placeholder={placeholder} />
      <ThemeProvider>
        <main className="flex-wrap min-h-screen">{children}</main>
        <UseToggler />
      </ThemeProvider>
      <Footer />
    </div>
  );
}
