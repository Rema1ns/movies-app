export default function GetApiMovies(searchProps = '') {
  const res = fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=cd3a4160aba481d18bbd0bc93b89a0c8&language=en-US&query=${searchProps}&page=1&include_adult=false`
  )
  const results = res.then((res) => res.json())
  return results
}
