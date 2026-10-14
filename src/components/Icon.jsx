const paths = {
  food: 'M5 3v7M8 3v7M3 3v5c0 2 7 2 7 0V3M16 3v18M16 3c4 2 4 9 0 10',
  exchange: 'M7 7h11l-3-3m3 3-3 3M17 17H6l3 3m-3-3 3-3',
  parking: 'M6 21V3h7a5 5 0 0 1 0 10H6m0-5h7a2 2 0 0 0 0-4H6',
  store: 'M3 10 5 3h14l2 7M5 10v11h14V10M9 21v-6h6v6M3 10c0 3 4 3 4 0 0 3 4 3 4 0 0 3 4 3 4 0',
  laundry: 'M4 3h16v18H4zM8 7h.01M12 7h.01M8 14a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z',
  attraction: 'M3 21h18M5 21V9l7-6 7 6v12M9 21v-6h6v6M8 10h.01M16 10h.01',
  massage: 'M12 3c-1 3-4 4-4 7a4 4 0 0 0 8 0c0-3-3-4-4-7ZM5 21c0-5 3-8 7-8s7 3 7 8M8 17h8',
  pin: 'M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0ZM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z',
  arrow: 'm9 18 6-6-6-6',
  location: 'M12 21s7-6.2 7-12A7 7 0 0 0 5 9c0 5.8 7 12 7 12ZM12 6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z',
  sun: 'M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.41M17.66 6.34l1.41-1.41M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
  moon: 'M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z',
  clock: 'M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
}

function Icon({ name }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={paths[name]} /></svg>
}

export default Icon
