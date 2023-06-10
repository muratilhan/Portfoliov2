import './App.css';
import Intoduction from './introduction/Intoduction';
import Projects from './projects/Projects';
import Nav from './nav/Nav';
import SkillsAndTechs from './skill&Tech/SkillsAndTechs';
import Contact from './contact/Contact';
import PopUp from './pop-up/PopUp';
import { useState } from 'react';

function App() {

  const [modal, setModal] = useState(false);
  const [imgSource, setImgSource] = useState("");
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) return <PopUp imgSource={imgSource} toggleModal={()=>toggleModal()}></PopUp>


  return (
    <div className="App">
        <Nav></Nav>
        <Intoduction ></Intoduction>
        <Projects setImgSource={setImgSource} toggleModal={toggleModal}></Projects>
        <SkillsAndTechs></SkillsAndTechs>
        <Contact></Contact>
    </div>
  );
}

export default App;
