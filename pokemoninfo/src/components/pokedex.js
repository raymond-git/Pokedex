const Pokedex = () => {
    return (
        <div className=" bg-black h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <img className="h-24 w-full sm:h-32 sm:w-full md:h-40 md:w-full lg:h-48 lg:w-full object-scale-down" src="PokemonLogo.png"  alt="Pokemon Logo"></img>
                <div className="w-40 h-40">
                    <img className="pokeball object-scale-down" src="Pokeball.png"></img>
                </div>
                <h1 className="text-2xl curve-text text-white sm:text-3xl md:text-4xl lg:text-5xl mt-4">Gotta catch'em all</h1>
            </div>
            <img className="charizard absolute bottom-10 right-10 object-scale-down" src="Charizard.png"></img>
        </div>
    )
}

export default Pokedex;