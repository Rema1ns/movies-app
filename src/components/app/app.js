import React, {Component} from 'react'

import './app.css'
import Movie from '../Item/movie'
import GetApiMovies from '../../api-services/api-services'
import ErrorIndicator from '../error-indicator/error-indicator'
import Spinner from '../../components/spinner/spinner'
import SearchForm from '../search-form/search-form'

export default class App extends Component {
  //============================================================  СОСТОЯНИЯ  =====>

  state = {
    movies: [],
    loading: true,
    error: false,
    search: '',
  }

  //==============================================================  ОШИБКА  =====>

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    })
  }
  //=======================================================  загрузка данных  =====>

  updateMovie(e) {
    GetApiMovies(e)
      .then((res) => res.results)
      .then((results) => {
        this.setState({
          movies: results,
          loading: false,
        })
      })
      .catch(this.onError)
  }
  //=======================================================  поиск фильмов  =====>

  componentDidMount() {
    this.updateMovie()
  }

  searchMovie = (e) => {
    this.setState({search: e})
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.updateMovie(this.state.search)
    }
  }

  //==============================================================  RENDER  =====>
  render() {
    const {movies, loading, error} = this.state
    console.log(movies)

    const errorMessage = error ? <ErrorIndicator /> : null

    if (loading) {
      return <Spinner />
    }

    return (
      <section>
        <SearchForm searchMovie={this.searchMovie} />
        {errorMessage}
        <div className="movies">
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                poster={movie.poster_path}
                release={movie.release_date}
                overview={movie.overview}
                genres={movie.genre_ids}
                title={movie.title}
              />
            )
          })}
        </div>
      </section>
    )
  }
}
