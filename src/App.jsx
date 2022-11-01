import {useState} from 'react';
import Start from "./components/Start";
import Scene1 from "./components/Scene1";
import Nav from "./components/Nav";


function App() {

  const [scene, setScene] = useState(0)

  const nextScene = () => {
    setScene(prevScene => prevScene + 1)
  }

  return (
    <div className='h-screen'>
      <Nav scene={scene} />
      <div className="flex flex-row justify-center h-5/6 p-4 bg-orange-50 font-mono">
        {scene === 0 && <Start sceneChange={nextScene} />}
        {scene === 1 && <Scene1 />}
      </div>
    </div>

  )
}
export default App;
