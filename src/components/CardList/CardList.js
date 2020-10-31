import Card from "../Card/Card"
import './CardList.scss'

const CardList = ({cards, changeCardSelected}) => {
	return (
		<div className="app__card-list card-list">
			{
				cards.map((card, index) => (
					<Card card={card} key={index} index={index} changeSelected={changeCardSelected}/>
				))
			}
		</div>
	)
}

export default CardList