import Icon from './Icon'

function CategoryCard({ category, language, isActive, onSelect, placeCount, placesLabel }) {
  const content = category[language]
  return (
    <button className={`category-card${isActive ? ' active' : ''}`} type="button" onClick={() => onSelect(category.id)} aria-pressed={isActive}>
      <span className="category-icon"><Icon name={category.icon} /></span>
      <span className="category-copy"><strong>{content.name}</strong><small>{content.description}</small><em>{placeCount} {placesLabel}</em></span>
      <span className="category-arrow"><Icon name="arrow" /></span>
    </button>
  )
}

export default CategoryCard
