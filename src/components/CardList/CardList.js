import Card from "../Card/Card"

const CardList = ({cards}) => {
	return (
		<div className="card__card-list card-list">
			{
				cards.map((card, index) => (
					<Card card={card} key={index}/>
				))
			}
		</div>
	)
}

export default CardList