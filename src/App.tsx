import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { Banner } from "./components/banner";
import { SliderSection } from "./components/slidersection";
import { Content } from "./components/content";
import { Footer } from "./components/footer";
import { useEffect, useState } from "react";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((darkMode) => !darkMode);
        darkMode === true
            ? (localStorage.theme = "dark")
            : (localStorage.theme = "light");
    };

    if (localStorage.theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    return (
        <div className="App w-full h-fit dark:bg-black dark:bg-opacity-90">
            <Header toggleDark={toggleDarkMode} />
            <Navbar />
            <Banner />
            <SliderSection />
            <Content />
            <Footer />
        </div>
    );
};

export default App;
