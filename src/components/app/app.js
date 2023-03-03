import React, {Component} from 'react'
import {Spin} from 'antd'
import {Offline, Online} from 'react-detect-offline'

import './app.css'
import Movie from '../Item/movie'
import getApiMovies from '../../api-services/api-services'
import ErrorIndicator from '../error/error'

export default class App extends Component {
  constructor() {
    super()
    this.updateMovie()
  }

  state = {
    movies: [],
    loading: true,
    error: false,
  }

  getApiMovies = new getApiMovies()

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    })
  }

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
      return <Spin className="example" />
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
          <ErrorIndicator />
        </Offline>
      </section>
    )
  }
}
