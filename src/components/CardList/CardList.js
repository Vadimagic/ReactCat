const CardList = ({cards}) => {
	return (
		<div className="card__card-list card-list">
			{
				cards.map((card, index) => {
					<div key={card + index}></div>
				})
			}
		</div>
	)
}

export default CardList