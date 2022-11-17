import React, { useEffect, useRef } from 'react'
import Wavesurfer from "wavesurfer.js";

export default function Index(props: any) {
 
  const waveform = useRef(null); 
   
  useEffect(() => { 
    // Check if wavesurfer object is already created.
    if (!waveform.current) { 
      waveform.current = Wavesurfer.create({
        container: "#waveform",
        waveColor: "#8369F4",
        barGap: 2,
        barWidth: 3,
        barRadius: 3,
        cursorWidth: 3,
        cursorColor: "#8369F4",
      });
      // Load audio from a remote url. 
      waveform.current.load("/song.mp3");  
    }
  }, []);

  const playAudio = () => {
    // Check if the audio is already playing
    if (waveform.current.isPlaying()) {
      waveform.current.pause();
    } else {
      waveform.current.play();
    }
  };  

  useEffect(() => {
    props.play(waveform.current)
  }, [props.play])
  

  return (
    <div>
      <div id="waveform" /> 
    </div>
  )
}
