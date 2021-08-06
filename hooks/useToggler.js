import React from 'react';
import { ThemeContext } from 'hooks/useDarkMode';

import {
    SunIcon,
    MoonIcon
} from '@heroicons/react/outline';

const useToggler = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <button className="fixed right-10 w-12 h-12 bg-gray-800 dark:bg-white flex items-center justify-center rounded-full z-40 outline-none">
            {theme === 'dark' ? (
                <SunIcon
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-white dark:text-gray-800 w-7 h-7 cursor-pointer"
                />
            ) : (
                <MoonIcon
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-white dark:text-gray-800 w-6 h-6 cursor-pointer"
                />
            )}
        </button>
    )
}

export default useToggler;