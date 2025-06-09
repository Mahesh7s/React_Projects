import {cretaeSlice,createAsyncThunk} from "@reduxjs/toolkit"
let base = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"

const pokemonSlice = createAsyncThunk(
	"slicers/fetchPokemon",
	async()=>{
		let res = await fetch(base);
		let data = await res.json();
		let main = await fetch(data.url)
		console.log(await main.json())
	}
)