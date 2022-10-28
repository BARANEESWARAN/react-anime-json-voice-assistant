import React from "react"
import './header.css'
import anime from 'animejs/lib/anime.es.js';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { AiFillAudio } from "react-icons/ai";


import Letterize from "https://cdn.skypack.dev/letterizejs@2.0.0";

import { useState, useEffect,useRef } from 'react'





function Header({newinput,voiceinput}){
  const [Apiname,setApiname]=useState({data:""})
  console.log(voiceinput,"voiceinpu")
  const commands = [
    {
      command: "open *",
      callback: (website) => {
        window.open("http://" + website.split(" ").join(""));
      },
    },
    {
      command: "change background colour to *",
      callback: (color) => {
        document.body.style.background = color;
      },
    },
    {
      command: "reset",
      callback: () => {
        handleReset();
      },
    },
    ,
    {
      // command: "reset background colour",
      // callback: () => {
      //   document.body.style.background = `rgba(0, 0, 0, 0.8)`;
      // },
      command: "change background colour to *",
      callback: (color) => {
        document.body.style.background = color;
      }
      
    },

    {
      command: "reset background colour",
      callback: () => {
        document.body.style.background = ` rgb(255, 255, 255)`;
      }


      
    },
    
    
  ];
  
  
  // const [isListening, setIsListening] = useState(false)
  // const [note, setNote] = useState(null)
  // useEffect(() => {
  //   handleListen()
  // }, [isListening])

  // const handleListen = () => {
  //   if (isListening) {
  //     mic.start()
  //     mic.onend = () => {
  //       console.log('continue..')
  //       mic.start()
  //     }
  //   } else {
  //     mic.stop()
  //     mic.onend = () => {
  //       console.log('Stopped Mic on Click')
  //     }
  //   }
  //   mic.onstart = () => {
  //     console.log('Mics on')
  //   }

  //   mic.onresult = event => {
  //     const transcript = Array.from(event.results)
  //       .map(result => result[0])
  //       .map(result => result.transcript)
  //       .join('')
  //     console.log(transcript)
  //     setNote(transcript)
  //     mic.onerror = event => {
  //       console.log(event.error)
  //     }
  //   }
  // }
  useEffect(() => {
    const test = new Letterize({
      targets: "#animateMe"
    });
    // console.log("anime")

    var animation = anime.timeline({
      targets: test.listAll,
      delay: anime.stagger(50),
      loop: true
    });

    animation
      .add({
        translateY: -10
      })
      .add({
        translateY: 0
      });
  })
  
useEffect(()=>{
  if(voiceinput!=""){
    setApiname({data:voiceinput})

    

  }

},[voiceinput])


  function handleinputChange(e) {
    

    e.preventDefault();

    setApiname( { ...Apiname,data: e.target.value} )
    
    console.log(Apiname.data,"cccc")
    
}

  function handleFormSubmit(e) {
    e.preventDefault();


    newinput(Apiname.data)
    console.log(Apiname.data,"dddd")
 
    setApiname({ data: "" 
       
    })
 
  
}

const { transcript, resetTranscript } = useSpeechRecognition({ commands });
const [isListening, setIsListening] = useState(false);
const microphoneRef = useRef(null);
if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
  return (
    <div className="mircophone-container">
      Browser is not Support Speech Recognition.
    </div>
  );
}
const handleListing = () => {
  setIsListening(true);
  // microphoneRef.current.classList.add("listening");
  SpeechRecognition.startListening({
    continuous: true,
  });
};
const stopHandle = () => {
  setIsListening(false);
  // microphoneRef.current.classList.remove("listening");
  SpeechRecognition.stopListening();
};
const handleReset = () => {
  stopHandle();
  resetTranscript();
};

 

return(


<div className="main">
  <div className="navbar">
    <div className="icon">
      <p className="logo" id="animateMe"  > BaraNi News</p>
    </div>
    <div className="menu">
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">SERVICE</a></li>
        <li><a href="#">DESIGN</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </div>
    <div className="search">
      <input className="srch"  value={Apiname.data}  type="search" name placeholder="Type To text " onChange={handleinputChange}/>
      <a href="#"> <button className="btn" onClick={handleFormSubmit}>Search</button></a>
 
     
    </div>
  </div> 
  {/* {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
  <button onClick={() => setIsListening(prevState => !prevState)}>
            Start/Stop
          </button>
          <h1>{note}</h1> */}
             <div className="microphone-wrapper">
      <div className="mircophone-container">
        <div
          className="microphone-icon-container"
          ref={microphoneRef}
          onClick={handleListing}
          style={{position:'relative',color:'white',width: '41px',height: '18px',float:'right',right:'189px',fontSize:'10px',bottom: '40px'}}>
  <AiFillAudio style={{width:"25px",height:"18px",position:"relative",bottom:"10px",right:"10px",cursor:"pointer"}}/>
        </div>
        <div className="microphone-status">
          {/* {isListening ? "Listening........." : "Click to start Listening"} */}
        </div>
        {isListening && (
          <button className="microphone-stop btn" onClick={stopHandle} style={{position:'relative',width: '41px',height: '18px',float:'right',right:'163px',fontSize:'10px',bottom: '35px'}}>
            Stop
          </button>
        )}
      </div>
      {transcript && (
        <div className="microphone-result-container">
          <div className="microphone-result-text">{transcript}</div>
          <button className="microphone-reset btn" onClick={handleReset} style={{position:'relative',width: '41px',height: '18px',float:'right',right:'238px',fontSize:'10px',bottom: '57px'}}>
            Reset
          </button>
        </div>
      )}
    </div>
        
</div>




)
   







}
export default Header