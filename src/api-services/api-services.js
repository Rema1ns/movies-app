export default class getApiMovies {
  api =
    'https://api.themoviedb.org/3/searchk/movie?' +
    'api_key=cd3a4160aba481d18bbd0bc93b89a0c8&language=en-US&query=' +
    'robot' +
    '&page=1&include_adult=false'

  async getResource(url) {
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error(`ошибка в ${url}`)
    }

    return await res.json()
  }

  async getMovies() {
    const res = await this.getResource(this.api)
    return res.results
  }
}
