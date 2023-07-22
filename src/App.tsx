import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { Banner } from "./components/banner";
import { SliderSection } from "./components/slidersection";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

const App = () => {
    return (
        <div className="App w-full h-full">
            <Header />
            <Navbar />
            <Banner />
            <SliderSection />
            <Content />
            <Footer />
        </div>
    );
};

export default App;
