import React from 'react';
import "./Character.css";

const Character = props => (
	<div className="card" onClick={()=> props.scoreIncrement(props.id)}>
		<div className="img-container">
			<img alt={props.name} src={props.image}/>
		</div>
	</div>
)

export default Character;