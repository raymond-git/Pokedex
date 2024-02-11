import { useEffect, useState } from "react";
import { fetchAllPokemon } from "./api"
import { fetchSinglePokemon } from "./api";

const PokedexList = () => {

    const [allPokemon, setAllPokemon] = useState([]);
    const [singlePokemon, setSinglePokemon] = useState([]);
    const [userInput, setUserInput] = useState([]);
    const [handleTrue, setHandleTrue] = useState(false); 

    useEffect(() => {
        async function getAllPokemon() {
            try {
                const response = await fetchAllPokemon();
                const pokemons = response.results;
                const PokemonUrls = pokemons.map(pokemon => pokemon.url);
                const response2 = await Promise.all(PokemonUrls.map(url => fetch(url)));
                const data = await Promise.all(response2.map(response => response.json()));
                setAllPokemon(data);
            } catch (error) {
                console.error('Error Fetching Pokemon Data')
            }
        }
        getAllPokemon();
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const pokemonName = userInput;
            const pokemonData = await fetchSinglePokemon(pokemonName);
            setSinglePokemon(pokemonData);
            setHandleTrue(true);
        } catch (error) {
            console.log("Error handling Pokémon data:", error);
        }
    }

    async function handleChange(event) {
        setUserInput(event.target.value);
    }

    async function handleClearUser() {
        if (userInput.length === 0) {
            setHandleTrue(false);
            setSinglePokemon(allPokemon); // Reset singlePokemon state to the original list of all Pokémon
        }
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="pt-4 bg-black">
                <a className="navbar-brand">
                    <img src="PokemonLogo.png" width="150" height="160" alt="Pokemon Logo" />
                </a>
            </nav>

            {/* Search Bar */}
            <nav className="navbar navbar-light bg-light">
                <form onSubmit={handleSubmit} className="form-inline">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="pokeball"><img src="Pokeball.png" width="30" height="50" alt="Pokeball"></img></span>
                        </div>
                        <input
                            onChange={handleChange}
                            value={userInput}
                            id="pokemonresults"
                            type="text"
                            placeholder="Search Pokemon"
                            className="form-control"
                            onKeyUp={handleClearUser} />
                    </div>
                </form>
            </nav>

            {!handleTrue ? ( // Render allPokemon if handleTrue is false
                <div className='flex justify-evenly'>
                    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {allPokemon.map((pokemon, _id) => (
                            <div key={_id}>
                                <div className="ecommerce_border_color rounded-xl lg-shadow w-full h-full flex flex-col justify-between p-12">
                                    <p>{pokemon.id}</p>
                                    <img className="w-28 h-28 lg:w-72 lg:h-52 mx-auto" src={pokemon.sprites.other.dream_world.front_default} alt="pokemon" />
                                    <h1 className="text-base md:text-xl mt-10">Bed Rooms: 2 | 2 Floors | 2810 Sqft House on Sale </h1>
                                    <p className="mobile-responsive-fontprice-product robotoFont font-bold text-base md:text-lg pt-4 price-color">{pokemon.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : ( // Render single Pokémon if handleTrue is true
                <div className='flex justify-evenly'>
                    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <div className="ecommerce_border_color rounded-xl lg-shadow w-full h-full flex flex-col justify-between p-12">
                                <p>{singlePokemon.id}</p>
                                <img className="w-28 h-28 lg:w-72 lg:h-52 mx-auto" src={singlePokemon?.sprites?.other.dream_world.front_default} alt="individual-pokemon" />
                                <h1 className="text-base md:text-xl mt-10">Bed Rooms: 2 | 2 Floors | 2810 Sqft House on Sale </h1>
                                <p className="mobile-responsive-fontprice-product robotoFont font-bold text-base md:text-lg pt-4 price-color">{singlePokemon.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PokedexList;

