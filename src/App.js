import UpdateDetails from "./page"
  

import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
// import { AiFillAudio } from "react-icons/ai";
import Home from './home';
import Dash from "./Components/Dashboard/Dash";
import Header from "./Components/Dashboard/header";
import About from './about'
import { useRef, useState } from "react";
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function App() {
  const [New,setNew]=useState("everything")
  // const commands = [
  //   {
  //     command: "open *",
  //     callback: (website) => {
  //       window.open("http://" + website.split(" ").join(""));
  //     },
  //   },
  //   {
  //     command: "change background colour to *",
  //     callback: (color) => {
  //       document.body.style.background = color;
  //     },
  //   },
  //   {
  //     command: "reset",
  //     callback: () => {
  //       handleReset();
  //     },
  //   },
  //   ,
  //   {
  //     command: "reset background colour",
  //     callback: () => {
  //       document.body.style.background = `rgba(0, 0, 0, 0.8)`;
  //     },
  //   },
  // ];
  // const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  // const [isListening, setIsListening] = useState(false);
  // const microphoneRef = useRef(null);
  // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
  //   return (
  //     <div className="mircophone-container">
  //       Browser is not Support Speech Recognition.
  //     </div>
  //   );
  // }
  // const handleListing = () => {
  //   setIsListening(true);
  //   // microphoneRef.current.classList.add("listening");
  //   SpeechRecognition.startListening({
  //     continuous: true,
  //   });
  // };
  // const stopHandle = () => {
  //   setIsListening(false);
  //   // microphoneRef.current.classList.remove("listening");
  //   SpeechRecognition.stopListening();
  // };
  // const handleReset = () => {
  //   stopHandle();
  //   resetTranscript();
  // };
   return (
    <div className="hi">
       <Header newinput={setNew}
       
        />
       <br></br><br></br>
       {/* <Home values={New}/> */}
       <br></br>
    
    <Home values={New}/>
    </div>
   
    // <BrowserRouter>
    // <div>
    //   {/* <header>
    //     <Link to='/'>Home</Link>{' '}
    //     <Link to='/about'>About</Link>{' '}
    //     <Link to='/login'>Login</Link>
    //   </header> */}
    //    <Header newinput={setNew}/>
     
    

 
    //   <header>
    //     <Link to='/'>Home</Link>{' '}
   
    //     <Link to='/home'>home</Link>
    //     <Link to='/news'>News</Link>{' '}
    //   </header>
    //   <main>
    //   <Routes>
    //   <Route exact path="/home" element={<Dash/>}></Route>
      
    //     <Route path="/news" element={<Home values={New}/>} ></Route>
      
   
    // </Routes>
    // </main>


    //      {/* <Dash/>     */}
    //      </div>
    //      </BrowserRouter> 
  );
}

export default App;
