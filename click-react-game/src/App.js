import React from 'react';
import Character from './components/Character/';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friends from './friends.json';

class App extends React.Component {
	state = {
		friends,
		score: 0,
		highscore: 0
	};

	scoreIncrement = id =>{
		this.state.friends.find((character, i) =>{
			if(character.id===id){
				if(friends[i].count===0){
					friends[i].count = friends[i].count + 1;
					this.setState({score: this.state.score + 1});
					
				}
			}
		})
	}

	render(){
		return(
		<Wrapper>
		<Title></Title>
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
