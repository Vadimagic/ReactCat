import Card from '../Card/Card'
import Description from '../Description/Description'
import './CardBlock.scss'

const CardBlock = ({card, changeSelected, mouseLeave, index}) => {
	return (
		<div 
			className="card-list__card-block card-block" 
			onMouseLeave={() => card.selected && !card.selectedMouse ? mouseLeave(index) : null}
		>
			<Card card={card} changeSelected={changeSelected} index={index}/>
			<Description card={card} changeSelected={changeSelected} index={index}/>
		</div>
	)
}

export default CardBlock