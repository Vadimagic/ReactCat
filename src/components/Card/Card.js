import './Card.scss'

const Card = ({card}) => {
	return (
		<div className="card-list__card-block card-block">
			<div className="card">
				<div className="pretitle">{card.pretitle}</div>
				<div className="card__title">{card.title}</div>
				<div className="card__taste">{card.taste}</div>
				{
					card.presents.map((present, index) => (
						<div className="card__present" key={index}>{present}</div>
					))
				}
				<div className="card__circle">
					<div className="card__weight">{card.weight}</div>
					<div className="card__unit">{card.unit}</div>
				</div>
			</div>
			<div className="description">{card.description}</div>
		</div>
	)
}

export default Card