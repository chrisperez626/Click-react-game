import React from 'react';
import Character from './components/Character/';
import Wrapper from "./components/Wrapper";
import friends from './friends.json';

class App extends React.Component {
	state = {
		friends,
	};

	render(){
		return(
		<Wrapper>
		{friends.map(friend =>{
			return (
				
					<Character
						key={friend.id}
						id={friend.id}
						name={friend.name}
				        image={friend.image}
	        		/>)
	        
		})}
		</Wrapper>
		)
	};
}

export default App;
