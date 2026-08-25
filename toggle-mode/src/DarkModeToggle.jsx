import { useEffect, useState } from "react";

function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    return (
        <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded bg-gray-200 text-gray-700 dark:bg-gray-900 dark:text-white">
            Dark Mode
        </button>
    );
}

export default DarkModeToggle;