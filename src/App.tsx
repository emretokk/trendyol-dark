import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { Content } from "./components/content";

const App = () => {
    return (
        <div className="App w-full h-full">
            <Header />
            <Navbar />
            <Content />
        </div>
    );
};

export default App;
