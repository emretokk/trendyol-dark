import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { Content } from "./components/content";
import { Banner } from "./components/banner";

const App = () => {
    return (
        <div className="App w-full h-full">
            <Header />
            <Navbar />
            <Banner />
            <Content />
        </div>
    );
};

export default App;
