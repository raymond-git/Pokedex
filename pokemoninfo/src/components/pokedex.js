const Pokedex = () => {
    return (
        <div className=" bg-black h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                    <img className="object-scale-down" src="PokemonLogo.png"></img>
                <div className="w-40 h-40">
                    <img className="object-scale-down" src="Pokeball.png"></img>
                </div>
               
                    <h1 className="curve-text text-white text-7xl mt-4">Gotta catch'em all Bitches</h1>
               



            </div>
            <img className="absolute bottom-10 right-10 object-scale-down" src="Charizard.png"></img>
        </div>
    )
}

export default Pokedex;