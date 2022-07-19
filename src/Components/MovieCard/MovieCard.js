import React from 'react'

const MovieCard = ({el,deleteMovie}) => {

  return (
    <div>
     
    <div className="wrapper">
    <div className="main_card">
      <div className="card_left">
        <div className="card_datails">
          <h1>{el.title}</h1> <rating ratingValue={el.rating} readonly="true"/>
          <div className="caroline">
            <p className="PG">PG - 13</p>
            <p className="year">2009</p>
            <p className="genre">carton </p>
            <p className="time">1h 36m</p>
          </div>
          <p className="disc">{el.description}</p>
         
          <div className="social-btn">
            <button  onClick={()=>deleteMovie(el.id)}>
                                    <i className="fas fa-play" /> Delete movie
                                </button>
                                </div>

        </div>
      </div>
      <div className="card_right">
        <div className="img_container">
        <img src={el.posterUrl} className="poster" alt="" />       
         </div>
        <div className="play_btn">

        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default MovieCard