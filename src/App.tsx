import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { Banner } from "./components/banner";
import { Slider } from "./components/slider";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

const App = () => {
    return (
        <div className="App w-full h-full">
            <Header />
            <Navbar />
            <Banner />
            <Slider />
            <Content />
            <Footer />
        </div>
    );
};

export default App;
