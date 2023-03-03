import React, {Component} from 'react'
import {Offline, Online} from 'react-detect-offline'

import './app.css'
import Movie from '../Item/movie'
import getApiMovies from '../../api-services/api-services'
import ErrorIndicator from '../error-indicator/error-indicator'
import ErrorNetwork from '../error-network/error-network'
import Spinner from '../../components/spinner/spinner'

export default class App extends Component {
  constructor() {
    super()
    this.updateMovie()
  }
  //============================================================  СОСТОЯНИЯ  =====>

  state = {
    movies: [],
    loading: true,
    error: false,
  }

  //==============================================================  ОШИБКА  =====>

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    })
  }
  //=======================================================  загрузка данных  =====>

  getApiMovies = new getApiMovies()

  updateMovie() {
    this.getApiMovies
      .getMovies()
      .then((results) => {
        this.setState({
          movies: results,
          loading: false,
        })
      })
      .catch(this.onError)
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
        <Online>
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
        </Online>
        <Offline>
          <ErrorNetwork />
        </Offline>
      </section>
    )
  }
}
