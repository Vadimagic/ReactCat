import './Description.scss'

const Description = ({card, changeSelected, index}) => {
	return (
		<span className={`description ${card.disabled ? 'description_disabled' : card.selected ? '' : 'description_bold'}`}>
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
		</span>
	)
}

export default Description;