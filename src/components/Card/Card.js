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
				<div className="card__pretitle">{card.pretitle}</div>
				<div className="card__title">{card.title}</div>
				<div className="card__taste">{card.taste}</div>
				{
					card.presents.map((present, index) => (
						<div className="card__present" key={index}>{present}</div>
					))
				}
				<div className={`card__circle`}>
					<div className="card__weight">{card.weight}</div>
					<div className="card__unit">{card.unit}</div>
				</div>
			</div>
			<div className={`description ${card.disabled ? 'description_disabled' : ''}`}>
				{
					card.disabled
					? card.descriptionDisabled
					: card.selected
						? card.descriptionSelected
						: <>
							Чего сидишь? Порадуй котэ,&nbsp;
							<span className="description__buy">
								<span className="description__click" onClick={() => changeSelected(index)}>купи</span>.
							</span>
						</>
				}
			</div>
		</div>
	)
}

export default Card