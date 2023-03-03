import React from 'react'
import './item.css'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

function Movie({title, overview, poster, release}) {
  //============================================= формат даты ========>
  const defaultRelease = 'в ебучей апи нету даты'
  const formatDate = () => {
    return format(new Date(release), 'MMMM dd, yyyy')
  }

  //============================================= обрезание строки ====>
  function shortTxt(text) {
    if (text.length > 200) {
      let arrTxt = text.slice(0, 200).split(' ')
      arrTxt.pop()
      return [arrTxt.map((el) => el + ' '), '...']
    }
    return text
  }
  const summary = shortTxt(overview)
  //================================================= ПОСТЕРЫ =========>

  let image = `https://image.tmdb.org/t/p/original${poster}`
  if (poster === null) {
    image = 'https://image.tmdb.org/t/p/original//uc4RAVW1T3T29h6OQdr7zu4Blui.jpg'
  }
  //================================================= ретерн =========>

  return (
    <div className="movie">
      <img className="movie__poster" src={image} alt={title} />
      <div className="movie__column">
        <h1 className="movie__title">{title}</h1>
        <h3 className="movie__release">{release === '' ? defaultRelease : formatDate()}</h3>
        <h5 className="movie__genres">genres</h5>
        <p className="movie__overview">{summary}</p>
      </div>
    </div>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
}

export default Movie
