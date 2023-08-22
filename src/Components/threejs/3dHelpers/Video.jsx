import { VideoTexture } from "three";
import { useState, useEffect } from "react";
import * as THREE from "three";
import dreivid from "../../../assets/video/abb.mp4";
const VideoWrap = props => {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: dreivid,
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);
  return (
    <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
  );
};

export default VideoWrap;
