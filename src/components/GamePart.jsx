
import PokeCards from "./PokeCards";
import '../styles/gamePartStyle.css';

function GamePart() {
  const pokeArry = ['pikachu', 'dragonite', 'magikarp', 'arceus', 'mew'];

  return (
    <>
      <div className="cards-container">
        {pokeArry.map((name, index) => (
          <div key={index}><PokeCards pokeName={name} /></div>
        ))}
      </div>
    </>
  );
}

export default GamePart;
