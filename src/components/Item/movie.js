import React from "react";
import './item.css'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import {enGB} from "date-fns/locale";


function Movie({ title, overview, poster, release, genres}) {


  //============================================= формат даты ====>
  function formatDateRelease (date) {
    if (date === '') {
      return 'в ебучей апи нету даты'
    }
    let newArray = []
    let arr = date.split('-')
    for (let i = 0; i < arr.length; i++) {
      newArray.push(Math.floor(arr[i]))
    }
    return format(new Date([...newArray]), 'MMMM dd, yyyy', { locale: enGB })
  }
  const formatDate = formatDateRelease(release)

  //============================================= обрезание строки ====>
  function shortTxt (text) {
    if (text.length > 150) {
      const txt =  text.slice(0, 150)
      let arrTxt = txt.split(' ')
      let arrAnswer = []
      for (let i = 0; i < arrTxt.length; i++) {
        if (arrTxt[i] === arrTxt[arrTxt.length -1]){
          arrAnswer.push('...')
        } else {
          arrAnswer.push(arrTxt[i] + ' ')
        }
      }
        return arrAnswer
      }
    return text
  }
  const summary = shortTxt(overview)


  let image = `https://image.tmdb.org/t/p/original${poster}`;
  if (poster === null) {
    image = 'https://image.tmdb.org/t/p/original/dJ52jV7HlJ9hB8kdBOnj01DllBA.jpg'
  }

  return(
    <div className='movie'>
      <img
        className='movie__poster'
        src={image} alt={title}/>
      <div className='movie__column'>
        <h1 className='movie__title'>{title}</h1>
        <h3 className='movie__release'>{formatDate}</h3>
        <h5 className='movie__genres'>genres</h5>
        <p className='movie__overview'>{summary}</p>
      </div>
    </div>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired
}


export default Movie;