import './App.scss';
import CardList from './components/CardList/CardList';

function App() {
	return (
		<div className="app">
			<div className="app__title title">Ты сегодня покормил кота?</div>
			<CardList/>
		</div>
	);
}

export default App;
