import { Component } from 'react';
import './App.scss';
import CardList from './components/CardList/CardList';

class App extends Component {
	state = {
		cards: [
			{
				title: 'Нямушка'
			},
			{
				title: 'Нямушка'
			},
			{
				title: 'Нямушка'
			}
		]
	}

	render() {
		return (
			<div className="app">
				<div className="app__title title">Ты сегодня покормил кота?</div>
				<CardList cards={this.state.cards}/>
			</div>
		)
	}
}

export default App;
