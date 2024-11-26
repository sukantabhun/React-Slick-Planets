import Slider from 'react-slick'
import './index.css'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slideslToScroll: 1,
  }

  return (
    <div className="slider-container">
      <h1 className="slider-heading">PLANETS</h1>
      <div className="slider-internal" data-testid="planets">
        <Slider {...settings}>
          {planetsList.map(item => (
            <PlanetItem itemData={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
