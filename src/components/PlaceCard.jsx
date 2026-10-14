import Icon from './Icon'

function PlaceCard({ place, image, category, language, mapsLabel }) {
  const address = language === 'vi' && place.addressVi ? place.addressVi : place.address
  return (
    <article className="place-card">
      {image && <img className="place-card__image" src={image} alt={place.name} loading="lazy" />}
      <div className="place-card__content">
        <div className="place-card__top"><span className="place-card__icon"><Icon name={category.icon} /></span><div><span className="place-card__category">{category[language].shortName}</span><h3>{place.name}</h3></div></div>
        <div className="place-card__details">
          <p className="place-card__address"><Icon name="location" />{address}</p>
          {place.hours && <p className="place-card__hours"><Icon name="clock" />{place.hours[language]}</p>}
        </div>
        <p className="place-card__description">{place.description[language]}</p>
        <a className="maps-button" href={place.mapsUrl} target="_blank" rel="noreferrer"><Icon name="pin" />{mapsLabel}</a>
      </div>
    </article>
  )
}

export default PlaceCard
