import GamePart from './components/GamePart';
import './styles/App.css'

function App(){
  return (
    <>
      <h3 className="header-text">Pokemon Card Game</h3>
        
      <div className="main-content-part">
        <GamePart />
      </div>
    </>
  )
}

export default App;