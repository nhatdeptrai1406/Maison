import { useEffect, useMemo, useState } from 'react'
import CategoryCard from './components/CategoryCard'
import PlaceCard from './components/PlaceCard'
import Icon from './components/Icon'
import { categories, placeImages, places } from './data/places'
import './App.css'

const translations = {
  en: {
    guide: 'Local guide', welcome: 'Welcome to Urban B', title: 'Everything you need, just around the corner.',
    intro: 'A simple local guide to help you eat well, find laundry and exchange services, explore the city, and relax near the hotel.',
    explore: 'Explore nearby places', neighbourhood: 'Explore the neighbourhood', looking: 'What are you looking for?',
    choose: 'Choose a category to see our nearby suggestions.', nearby: 'Nearby recommendations', places: 'places',
    demoTitle: 'Good to know', demoText: 'Opening hours may change. Please call ahead to confirm before visiting.',
    maps: 'Open in Google Maps', needHelp: 'Need a hand?', happy: 'We are happy to help.',
    helpText: 'For directions, reservations or translation, please visit our front desk.', back: 'Back to top',
    footer: 'Your local guide, curated by the front desk.', language: 'Choose language', lightMode: 'Use light mode', darkMode: 'Use dark mode',
  },
  vi: {
    guide: 'Cẩm nang địa phương', welcome: 'Chào mừng đến Urban B', title: 'Mọi tiện ích bạn cần đều ở ngay gần đây.',
    intro: 'Cẩm nang giúp bạn tìm nơi ăn uống, giặt đồ, đổi tiền, khám phá thành phố và thư giãn gần khách sạn.',
    explore: 'Khám phá địa điểm gần đây', neighbourhood: 'Khám phá khu vực xung quanh', looking: 'Bạn đang tìm gì?',
    choose: 'Chọn một danh mục để xem các gợi ý gần khách sạn.', nearby: 'Địa điểm được gợi ý', places: 'địa điểm',
    demoTitle: 'Thông tin cần biết', demoText: 'Giờ mở cửa có thể thay đổi. Vui lòng gọi trước để xác nhận trước khi đến.',
    maps: 'Mở bằng Google Maps', needHelp: 'Bạn cần hỗ trợ?', happy: 'Chúng tôi luôn sẵn lòng giúp đỡ.',
    helpText: 'Để được chỉ đường, đặt chỗ hoặc hỗ trợ phiên dịch, vui lòng liên hệ quầy lễ tân.', back: 'Về đầu trang',
    footer: 'Cẩm nang địa phương được chọn lọc bởi đội ngũ lễ tân.', language: 'Chọn ngôn ngữ', lightMode: 'Dùng giao diện sáng', darkMode: 'Dùng giao diện tối',
  },
}

function App() {
  const [activeCategory, setActiveCategory] = useState('food')
  const [language, setLanguage] = useState('en')
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('urbanb-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const t = translations[language]
  const selectedCategory = categories.find((category) => category.id === activeCategory)
  const visiblePlaces = useMemo(() => places.filter((place) => place.category === activeCategory), [activeCategory])

  useEffect(() => { document.documentElement.lang = language }, [language])
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('urbanb-theme', theme)
  }, [theme])

  const selectCategory = (categoryId) => {
    setActiveCategory(categoryId)
    window.requestAnimationFrame(() => document.querySelector('#places')?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }

  return (
    <main key={language} translate="no">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Urban B Hotel home"><span className="brand-mark">UB</span><span>Urban B<small>Hotel & Stay</small></span></a>
        <div className="header-actions"><span className="header-label">{t.guide}</span><button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={theme === 'light' ? t.darkMode : t.lightMode} title={theme === 'light' ? t.darkMode : t.lightMode}><Icon name={theme === 'light' ? 'moon' : 'sun'} /></button><div className="language-switcher" role="group" aria-label={t.language}><button type="button" className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button><button type="button" className={language === 'vi' ? 'active' : ''} onClick={() => setLanguage('vi')} aria-pressed={language === 'vi'}>VI</button></div></div>
      </header>

      <section className="hero" id="top">
        <div className="hero__content"><p className="eyebrow">{t.welcome}</p><h1>{t.title}</h1><p className="hero__intro">{t.intro}</p><a href="#categories" className="hero__link">{t.explore} <Icon name="arrow" /></a></div>
        <div className="hero__art" aria-hidden="true"><span className="sun" /><span className="building building--back" /><span className="building building--front"><i /><i /><i /><i /></span><span className="awning" /><span className="tree"><i /><b /></span><span className="street" /></div>
      </section>

      <section className="categories-section" id="categories">
        <div className="section-heading"><div><p className="eyebrow">{t.neighbourhood}</p><h2>{t.looking}</h2></div><p>{t.choose}</p></div>
        <div className="categories-grid">{categories.map((category) => <CategoryCard key={category.id} category={category} language={language} isActive={category.id === activeCategory} onSelect={selectCategory} placeCount={places.filter((place) => place.category === category.id).length} placesLabel={t.places} />)}</div>
      </section>

      <section className="places-section" id="places">
        <div className="places-heading"><div><p className="eyebrow">{t.nearby}</p><h2>{selectedCategory[language].name}</h2></div><span>{visiblePlaces.length} {t.places}</span></div>
        <div className="demo-notice"><strong>{t.demoTitle}</strong><span>{t.demoText}</span></div>
        <div className="places-grid">{visiblePlaces.map((place) => <PlaceCard key={place.id} place={place} image={placeImages[place.id]} category={selectedCategory} language={language} mapsLabel={t.maps} />)}</div>
      </section>

      <section className="help-section"><div><p className="eyebrow">{t.needHelp}</p><h2>{t.happy}</h2><p>{t.helpText}</p></div><a href="#top">{t.back} <Icon name="arrow" /></a></section>
      <footer><div className="brand brand--footer"><span className="brand-mark">UB</span><span>Urban B<small>Hotel & Stay</small></span></div><p>{t.footer}</p></footer>
    </main>
  )
}

export default App
