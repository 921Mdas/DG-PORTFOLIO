export const FlatSurface = ({ x, y, r }) => {
  return (
    <mesh rotation={r}>
      <planeGeometry args={[x, y, 1, 1]} />;
    </mesh>
  );
};
