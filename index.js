const BASE_URL  = "https://ghibliapi.vercel.app"
const endpoints = {
    films:"/films"
}
const moviesDiv = document.querySelector(".movies")
async function getMovies (){
    const response = await fetch (BASE_URL + endpoints.films)
    const movies = await response.json()
    console.log(movies);
    showMovies(movies)
    
}
getMovies()

function showMovies (list = []){
    moviesDiv.innerHTML = "" 
    for (const m of list) {
        moviesDiv.innerHTML +=`
        <div class="w-[320px] rounded overflow-hidden shadow-lg">
  <img class="w-full rounded-[15px]" src="${m.image}" alt="Sunset in the mountains">
  <div class="px-6 py-4 relative">
    <div class="font-bold text-xl mb-2">${m.title} (${m.release_date})</div>
    <p class="text-gray-700 text-base line-clamp-4">
      ${m.description}
    </p>
    <span class="inline-flex justify-center items-center w-[45px] h-[35px] border-[2px] border-[green] rounded-full bg-[black] text-[white] font-bold absolute top-[-22px] right-5">${m.rt_score/10}</span>
  </div>
</div>`
    }
}

