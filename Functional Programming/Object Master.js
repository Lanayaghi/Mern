const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
    console.log(bListPkmn);

    const div = pokémon.filter( p => p.id % 3 == 0);
    console.log(div);

    const fire = pokémon.filter( p => p.types == "fire");
    console.log(fire);

    const type = pokémon.filter(p => p.types.length > 1);
    console.log(type);

    const namepokemon = pokémon.map( p => p.name);
    console.log(namepokemon);

    const greater = pokémon.filter ( p => p.id > 99);
    const than = greater.map ( p => p.name );
    console.log(than);

   const naming = pokémon.filter ( p => p.types == "poison");
   const typename = naming.map ( p => p.name);
   console.log(typename);

   const lana = pokémon.filter( p=> p.types[1]=="flying" ).map( p=> p.types[0] );
   console.log(lana);
   
   const count = pokémon.filter (p=> p.types == "normal").length;
   console.log(count);