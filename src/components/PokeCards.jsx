import { useEffect, useState } from 'react'
import '../styles/pokeCardsStyle.css'

function PokeCards(props) {
	const pokeName = props.pokeName
	const [pokeData, setPokeData] = useState(null)

	// Fetching datas for cards (image, weight , height)
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${pokeName}`,
					{ mode: 'cors' }
				)
				const pokeResponse = await response.json()

				// Set the fetched data to the pokeData state
				setPokeData(pokeResponse)
			} catch (err) {
				console.log('Cannot fetch Pokemon data, ' + err)
			}
		}

		fetchData()
	}, [pokeName])

	return (
		<>
			{pokeData ? (
				<div id={pokeName}>
					<div>
						<div className="cards">
								{/* Display the Pokemon image */}
								<img
									src={pokeData.sprites.front_default}
									alt={`${pokeName} sprite`}
								/>
							<div className="card-content">
								<h4>{pokeName.toUpperCase()}</h4>
								{/* Display other information about the Pokemon */}
								<p>Height: {pokeData.height}</p>
								<p>Weight: {pokeData.weight / 10}kg</p>
							</div>
						</div>
					</div>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</>
	)
}

export default PokeCards
