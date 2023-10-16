import { useEffect, useState } from "react";
import "../App.css";

import {
  volumeHighSvg,
  volumeMediumSvg,
  volumeLowSvg,
  volumeOffSvg,
} from "../svg";

function VolumeComponent() {
  const [volume, setVolume] = useState(0);
  const [color, setColor] = useState("#555");
  const [mySvg, setMySvg] = useState(volumeOffSvg);

  const changColorAndSvg = () => {
    setColor(volume < 10 ? "#555" : volume >= 15 ? "red" : "orange");
    setMySvg(
      volume === 0
        ? volumeOffSvg
        : volume < 10 && volume > 0
        ? volumeLowSvg
        : volume < 15
        ? volumeMediumSvg
        : volumeHighSvg
    );
  };

  useEffect(() => {
    if (volume) {
      changColorAndSvg()
    }
  },[volume])



  const handleInc = () => {
    if (volume < 20) {
      setVolume(volume + 1);
    }
  };

  const handleDec = () => {
    if (volume > 0) {
      setVolume(volume - 1);
    }
  
  };
  return (
    <div id="card_volume">
      <div>
        <h1 style={{ color: color }} id="volume">
          {volume}
        </h1>
        <svg style={{ color: color }}>{mySvg}</svg>
      </div>
      <div>
        <button className="btn btn_inc" onClick={() => handleInc()}>
          +
        </button>
        <button className="btn btn_dec" onClick={() => handleDec()}>
          -
        </button>
      </div>
    </div>
  );
}

export default VolumeComponent;
