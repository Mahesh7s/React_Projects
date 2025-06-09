let base = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"

async function fetchData(){
let res = await fetch(base);
		let data = await res.json();
		let main = await fetch(data.url)
		console.log(await main.json())
}
fetchData()


