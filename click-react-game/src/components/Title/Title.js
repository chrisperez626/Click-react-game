import React from 'react';
import './Title.css'

const Title = props => {
	return(
	<div className="header">
    <div className="title">Clicky Game</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>)
}

export default Title;