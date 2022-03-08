import { Canvas } from "@react-three/fiber";
import './styles.css';

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}
function App() {
  return <Canvas><Box /></Canvas>
}

export default App;
