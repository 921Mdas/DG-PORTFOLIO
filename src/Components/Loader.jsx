import { useProgress, Html } from "@react-three/drei";

const LoadingBooth = () => {
  const { progress } = useProgress();
  return <Html>{progress} % Loaded</Html>;
};

export default LoadingBooth;
