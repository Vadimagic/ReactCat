import CardBlock from "../CardBlock/CardBlock"
import './CardList.scss'

const CardList = ({cards, changeCardSelected, mouseLeaveSelected}) => {
	return (
		<div className="app__card-list card-list">
			{
				cards.map((card, index) => (
					<CardBlock card={card} key={index} index={index} changeSelected={changeCardSelected} mouseLeave={mouseLeaveSelected}/>
				))
			}
		</div>
	)
}

export default CardList