import './index.css'

const PlanetItem = props => {
  const {itemData} = props
  const {name, imageUrl, description} = itemData

  return (
    <div testid="planets" className="item-container">
      <img src={imageUrl} alt={`planet ${name}`} className="item-image" />
      <h1 className="item-heading">{name}</h1>
      <p className="item-description">{description}</p>
    </div>
  )
}

export default PlanetItem
