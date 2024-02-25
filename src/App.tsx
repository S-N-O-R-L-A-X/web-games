import './App.css';
import RufflePlayer from './Components/RufflePlayer';
import CollectStar from './games/phaser/CollectStar/CollectStar';
import Hello from './games/phaser/HelloWorld/HelloWorld';
function App() {
  return (
    <>
      <CollectStar/>
      {/* <RufflePlayer address='./assets/zombie3.swf'/> */}
    </>
  )
}

export default App
