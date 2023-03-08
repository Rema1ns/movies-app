import React, {Component} from 'react'

import './app.css'
import Movie from '../Item/movie'
import GetApiMovies from '../../api-services/api-services'
import ErrorIndicator from '../error-indicator/error-indicator'
import Spinner from '../../components/spinner/spinner'
import SearchForm from '../search-form/search-form'
import SearchNotResult from '../search-not-result/search-not-result'
import Paginati0n from '../pagination/pagination'

export default class App extends Component {
  //============================================================  СОСТОЯНИЯ  =====>

  state = {
    movies: [],
    loading: true,
    error: false,
    search: '',
    page: '1',
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
          error: false,
        })
      })
      .catch(this.onError)
  }
  //===========================================================  страница  =====>

  pageNumber = (e) => {
    this.setState({
      page: e,
    })
  }

  //=======================================================  поиск фильмов  =====>

  componentDidMount() {
    this.updateMovie()
  }

  searchMovie = (e) => {
    this.setState({
      search: e,
      loading: true,
    })
  }

  //=======================================================  обновление фильмов  =====>

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search || prevState.page !== this.state.page) {
      this.updateMovie(this.state.search)
    }
  }

  //==============================================================  RENDER  =====>
  render() {
    const {movies, loading, error} = this.state

    const errorMessage = error ? <ErrorIndicator /> : null

    if (loading) {
      return <Spinner />
    }

    const startIndex = 6 * (this.state.page - 1)

    const searchNotResult = movies.length === 0 && this.state.search.length !== 0 ? <SearchNotResult /> : null
    const showPagination = movies.length !== 0 ? <Paginati0n pageNumber={this.pageNumber} /> : null

    return (
      <section>
        <SearchForm searchMovie={this.searchMovie} />
        {errorMessage}
        <div className="movies">
          {movies
            .map((movie) => {
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
            })
            .slice(startIndex, 6 + startIndex)}
        </div>
        <div
          style={{
            width: '280px',
            margin: '0px auto',
          }}
        >
          {searchNotResult}
          {showPagination}
        </div>
      </section>
    )
  }
}
