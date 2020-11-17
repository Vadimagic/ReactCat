import Description from '../Description/Description'
import './Card.scss'

const Card = ({card, changeSelected, mouseLeave, index}) => {
	return (
		<div 
			className="card-list__card-block card-block" 
			onMouseLeave={() => card.selected && !card.selectedMouse ? mouseLeave(index) : null}
		>
			<div 
				className={
					`card-block__card card 
					${card.selected ? 'card_selected' : 'card_default'} 
					${card.disabled ? 'card_disabled' : ''} 
					${card.selectedMouse ? 'card_selected-mouseleave' : ''}`
				}
				onClick={() => card.disabled || changeSelected(index)}
			>
				<span className="card__pretitle">{card.pretitle}</span>
				<h3 className="card__title">{card.title}</h3>
				<span className="card__taste">{card.taste}</span>
				{
					card.presents.map((present, index) => (
						<span className="card__present" key={index}>{present}</span>
					))
				}
				<div className={`card__circle`}>
					<span className="card__weight">{card.weight}</span>
					<span className="card__unit">{card.unit}</span>
				</div>
			</div>
			<Description card={card} changeSelected={changeSelected} index={index}/>
		</div>
	)
}

export default Card