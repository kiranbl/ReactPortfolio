import {useState} from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import LineGradient from "./components/LineGradient";
import MySkills from './scenes/MySkills';
import Qualification from './scenes/Qualification';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';
function App() {

  const [selectedPage,setSelectedPage] =  useState("Home");
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");


  return (
    <div className="App bg-light-cream">
      <Navbar selectedPage={selectedPage} setSelectedPage = {setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        <DotGroup
        selectedPage ={selectedPage}
        setSelectedPage = {setSelectedPage}
        />
        <Landing setselectedPage={setSelectedPage}/>
      </div>
      <LineGradient/>

      <div className="w-5/6 mx-auto md:h-full">
      <MySkills
      />
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
      <Qualification/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
      <Projects/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
      <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
