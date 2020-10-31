import { Component } from 'react';
import './App.scss';
import CardList from './components/CardList/CardList';

class App extends Component {
	state = {
		cards: [
			{
				pretitle: 'Сказочное заморское яство',
				title: 'Нямушка',
				taste: 'с фуа-гра',
				presents: [
					'10 порций',
					'мышь в подарок'
				],
				weight: 0.5,
				unit: 'КГ',
				descriptionSelected: 'Печень утки разварная с артишоками.',
				descriptionDisabled: 'Печалька, с фуа-гра закончился.',
				selected: false,
				disabled: false
			},
			{
				pretitle: 'Сказочное заморское яство',
				title: 'Нямушка',
				taste: 'с рыбой',
				presents: [
					'40 порций',
					'2 мыши в подарок'
				],
				weight: 2,
				unit: 'КГ',
				descriptionSelected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
				descriptionDisabled: 'Печалька, с рыбой закончился.',
				selected: true,
				disabled: false
			},
			{
				pretitle: 'Сказочное заморское яство', 
				title: 'Нямушка',
				taste: 'с курой',
				presents: [
					'100 порций',
					'5 мышей в подарок',
					'заказчик доволен'
				],
				weight: 5,
				unit: 'КГ',
				descriptionSelected: 'Филе из цыплят с трюфелями в бульоне.',
				descriptionDisabled: 'Печалька, с рыбой закончился.',
				selected: false,
				disabled: true
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
