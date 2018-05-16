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
		this.state.friends.find((character, i) => {
			if(character.id===id){
				if(friends[i].count===0){
					friends[i].count = friends[i].count + 1;
					this.setState({score: this.state.score + 1});
					this.state.friends.sort(()=> Math.random - 0.5)
					return true;
				}
			}else{
				this.gameOver()
			}
		})
	}

	gameOver = id =>{
		if (this.state.score > this.state.highscore) {
	      this.setState({highscore: this.state.score}, function() {
	        console.log(this.state.highscore);
	      });
	    }
	    this.state.friends.forEach(friend => {
	      friend.count = 0;
	    });
	    alert(`Game Over :( \nscore: ${this.state.score}`);
	    this.setState({score: 0});
	    return true;
	}

	render(){
		return(
		<Wrapper>
		<Title score={this.state.score} highscore={this.state.score}>Clicky Game</Title>
		{friends.map(friend =>{
			return (
				
					<Character
						scoreIncrement={this.scoreIncrement}
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
