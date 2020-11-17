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
				weight: '0,5',
				unit: 'КГ',
				descriptionSelected: 'Печень утки разварная с артишоками.',
				descriptionDisabled: 'Печалька, с фуа-гра закончился.',
				disabled: false,
				selected: false,
				selectedMouse: false
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
				disabled: false,
				selected: true,
				selectedMouse: true
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
				disabled: true,
				selected: false,
				selectedMouse: false
			}
		]
	}

	render() {
		const changeCardSelectedHandler = index => {
			const stateCopy = {...this.state}
			stateCopy.cards[index].selected = !this.state.cards[index].selected

			if (!stateCopy.cards[index].selected) {
				stateCopy.cards[index].selectedMouse = false
			}

			this.setState(stateCopy)
		}

		const mouseLeaveSelectedHandler = index => {
			const stateCopy = {...this.state}
			stateCopy.cards[index].selectedMouse = true

			this.setState(stateCopy)
		}

		return (
			<div className="app">
				<div className="app__title title">Ты сегодня покормил кота?</div>
				<CardList cards={this.state.cards} changeCardSelected={changeCardSelectedHandler} mouseLeaveSelected={mouseLeaveSelectedHandler}/>
			</div>
		)
	}
}

export default App;
