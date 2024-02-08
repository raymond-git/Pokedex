import { useEffect, useState } from "react";
import { fetchAllPokemon } from "./api"
import { fetchPokemonImages } from "./api"

const PokedexList = () => {

    const [allPokemon, setAllPokemon] = useState([]);

    useEffect(() => {
        async function getAllPokemon() {
            try {
                const response = await fetchAllPokemon();
                setAllPokemon(response.results);
                // console.log(response.results)
            } catch (error) {
                console.error('Error Fetching Pokemon Data')
            }
        }
        getAllPokemon();
    }, [])

    // useEffect(() => {
    //     async function getAllImages() {
    //         try {
    //             const response = await fetchPokemonImages();
    //             setAllPokemonImages(response.results);
    //             console.log(response.results);
    //         } catch (error) {
    //             console.error('Error Fetching Pokemon Data')
    //         }
    //     }
    //     getAllImage();
    // }, [])


    console.log(fetchAllPokemon);
    return (
        <div>
            {/* Navbar */}
            <nav className="pt-4 bg-black">
                <a className="navbar-brand" href="">
                    <img src="PokemonLogo.png" width="150" height="160" alt="Pokemon Logo" />
                </a>
            </nav>

            {/* Search Bar */}
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><img src="Pokeball.png" width="30" height="50" alt="Pokeball"></img></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Search Pokemon" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </form>
            </nav>

            <div className='flex justify-evenly'>
                <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    {allPokemon.map((pokemon, _id) => (
                        <div key={_id}>
                            <div className="ecommerce_border_color rounded-xl lg-shadow w-full h-full flex flex-col justify-between p-12">
                                <img className="w-28 h-28 lg:w-32 lg:h-32 mx-auto" src={pokemon.sprites} alt="product"></img>
                                <h1 className="text-base md:text-xl mt-10">Bed Rooms: 2 | 2 Floors | 2810 Sqft House on Sale </h1>
                                <p className="mobile-responsive-fontprice-product robotoFont font-bold text-base md:text-lg pt-4 price-color">{pokemon.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PokedexList;

