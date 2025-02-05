import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [themeText, setThemeText] = useState("🌙");
    const { theme, setTheme, toggleTheme } = useTheme();

    const handleThemeChange = (e) => {
        toggleTheme();

        if (e.target.checked) {
            setThemeText("🌞");
            localStorage.setItem("theme", "dark-theme");
            localStorage.setItem("themeText", "🌞");
        } else {
            setThemeText("🌙");
            localStorage.setItem("theme", "light-theme");
            localStorage.setItem("themeText", "🌙");
        }
    }

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        const themeText = localStorage.getItem("themeText");
        if (theme && themeText) {
            setTheme(theme);
            setThemeText(themeText);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme]);

    return <nav className={theme}>
        <ul>
            <li><a className={theme} href="/home">Home</a></li>
            <li><a className={theme} href="/products">Products</a></li>
            <li><a className={theme} href="/explore">Explore</a></li>
            <li><a className={theme} href="/about">About Us</a></li>
        </ul>
        <div className="d-flex p-2 gap-2 justify-content-center align-content-center">
            <input hidden onChange={handleThemeChange} type="checkbox" id="themeButton" />
            <label htmlFor="themeButton">{themeText}</label>
        </div>
    </nav>
}

export default NavBar;