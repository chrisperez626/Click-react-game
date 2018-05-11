import React from 'react';
import "./Character.css";

const Character = props => (
	<div className="card">
		<div className="img-container">
			<img alt="" src={props.image}/>
		</div>
	</div>
)

export default Character;