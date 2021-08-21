import React from 'react';
import { ThemeContext } from '@/hooks/useDarkMode';

import { SunIcon } from '@heroicons/react/outline';
import { SunIcon as SunDarkIcon } from '@heroicons/react/solid';

const useToggler = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <button className="button-dark-mode">
            {theme === "dark" ?
                <SunDarkIcon
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-white dark:text-gray-800 w-7 h-7 cursor-pointer"
                />
                :
                <SunIcon
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-white dark:text-gray-800 w-7 h-7 cursor-pointer"
                />
            }
        </button>
    )
}

export default useToggler;