import {useState} from 'react';
import Start from "./components/Start";
import Scene1 from "./components/Scene1";


function App() {

  const [scene, setScene] = useState(0)

  console.log(scene)

  const nextScene = () => {
    setScene(prevScene => prevScene + 1)
  }
  
  return (
    <div className="flex flex-row justify-center h-screen bg-orange-50 p-4 w-screen font-mono">
      {scene === 0 && <Start sceneChange={nextScene} />}
      {scene === 1 && <Scene1 />}
    </div>
  )
}
export default App;
