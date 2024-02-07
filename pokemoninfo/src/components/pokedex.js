const Pokedex = () => {
    return (
        <div className="bg-black h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <img className="h-24 w-full sm:h-32 sm:w-full md:h-40 md:w-full lg:h-48 lg:w-full object-scale-down" src="PokemonLogo.png" alt="Pokemon Logo"></img>
                <div className="w-24 h-24 md:w-30 md:h-30 lg:w-40 lg:h-40">
                    <img className="pokeball object-scale-down" src="Pokeball.png"></img>
                </div>
                <h1 className="text-2xl curve-text text-white sm:text-3xl md:text-4xl lg:text-5xl mt-4">Gotta catch'em all</h1>
            </div>
            <img className="hidden md:block lg:block absolute md:bottom-10 md:right-10 lg:bottom-10 lg:right-10 object-scale-down" src="Charizard.png"></img>
        </div>
    )
}

export default Pokedex;