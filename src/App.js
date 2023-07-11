import "./App.css";
import About from "./components/about/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/skills/Skills";
import Tool from "./components/Tool/Tool";
import GitHub_Calendar from "./components/GitHub_Calendar/GitHub_Calendar";
// import projects from "./components/projects/projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Projects from "./components/projects/projects";

function App() {
    return (
        <>
            <Header/>
            <main className="main">
                <Home/>
                <About/>
                <Skills/>
                <Tool/>
                <GitHub_Calendar/>
                <Projects/>
                <Contact/>
            </main>
            <Footer/>
            <ScrollUp/>
        </>
    );
}

export default App;
