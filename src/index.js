import React, {Component} from "react";
import ReactDOM from 'react-dom';

import './index.css'
import Movie from "./components/Item/movie";
import axios from "axios";


class App extends Component {

  state = {
    movies: []
  }

  api = 'https://api.themoviedb.org/3/search/movie?' +
    'api_key=cd3a4160aba481d18bbd0bc93b89a0c8&language=en-US&query=' +
    'return' +
    '&page=1&include_adult=false';

  getMovies = async () => {
    const {data: { results }} = await axios(this.api)
    console.log(results)
    this.setState({ movies: results })
  }

  componentDidMount() {
    this.getMovies()
  }
//==============================================================  RENDER  =====>
  render() {
    const { movies } = this.state;

    return (
      <section>
        <div className='movies'>
          {movies.map((movie) => {
            return <Movie
              key={movie.id}
              poster={movie.poster_path}
              release={movie.release_date}
              overview={movie.overview}
              genres={movie.genre_ids}
              title={movie.title}/>
            }
          )}
        </div>
      </section>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('root'));