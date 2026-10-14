const mapsUrl = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const placeImages = {
  1: "/images/places/pho-ha-noi.jpg",
  2: "/images/places/bundaumamtom.jpg",
  3: "/images/places/com-tam-sa-bi-chuong.jpg",
  4: "/images/places/ngo-thai.jpg",
  5: "/images/places/banh-canh-ca-loc-tran.jpg",
  6: "/images/places/laundpro.png",
  7: "/images/places/giat-say-ca-heo.png",
  8: "/images/places/eximbank.png",
  9: "/images/places/MSB.jpg",
  10: "/images/places/bac-a-bank.png",
  11: "/images/places/thaocamvien.jpg",
  12: "/images/places/landmark-81.jpg",
  13: "/images/places/dau-homemade.avif",
  14: "/images/places/independence-palace.webp",
  15: "/images/places/notre-dame.jpg",
  16: "/images/places/ben-thanh-market.jpg",
  17: "/images/places/dam-sen-water-park.jpg",
  18: "/images/places/tan-dinh-church.png",
  19: "/images/places/tam-oi-spa.jpg",
  20: "/images/places/lua-spa.png",
  21: "/images/places/logo_spa_viet_to.png",
  22: "/images/places/mo-rua.jpg",
  23: "/images/places/banh-mi-huynh-hoa.jpg",
  24: "/images/places/yue-dian.jpg",
  25: "/images/places/k-pub.jpg",
  26: "/images/places/nguyen-hue-walking-street.jpg",
  27: "/images/places/bui-vien-walking-street.jpg",
};

export const categories = [
  {
    id: "food",
    icon: "food",
    en: {
      name: "Food & Restaurants",
      shortName: "Food",
      description: "Vietnamese favourites and nearby local dishes",
    },
    vi: {
      name: "Quán ăn",
      shortName: "Ăn uống",
      description: "Món Việt và các quán ăn địa phương gần khách sạn",
    },
  },
  {
    id: "laundry",
    icon: "laundry",
    en: {
      name: "Laundry Services",
      shortName: "Laundry",
      description: "Wash and dry services near the hotel",
    },
    vi: {
      name: "Tiệm giặt đồ",
      shortName: "Giặt đồ",
      description: "Dịch vụ giặt sấy gần khách sạn",
    },
  },
  {
    id: "exchange",
    icon: "exchange",
    en: {
      name: "Currency Exchange",
      shortName: "Exchange",
      description: "Banks and counters offering foreign exchange",
    },
    vi: {
      name: "Đổi tiền",
      shortName: "Đổi tiền",
      description: "Ngân hàng và điểm có dịch vụ đổi ngoại tệ",
    },
  },
  {
    id: "attraction",
    icon: "attraction",
    en: {
      name: "Things to Do",
      shortName: "Attraction",
      description: "Popular sights, culture and entertainment",
    },
    vi: {
      name: "Vui chơi & Du lịch",
      shortName: "Tham quan",
      description: "Điểm tham quan, văn hóa và giải trí nổi bật",
    },
  },
  {
    id: "massage",
    icon: "massage",
    en: {
      name: "Massage & Spa",
      shortName: "Spa",
      description: "Nearby places to relax and recharge",
    },
    vi: {
      name: "Mát xa & Spa",
      shortName: "Spa",
      description: "Địa điểm thư giãn và chăm sóc cơ thể gần đây",
    },
  },
];

// Source: Urban B front desk Google Sheet, gid=0. Last imported October 2026.
export const places = [
  {
    id: 1,
    category: "food",
    name: "Phở Hà Nội",
    address: "111 Trần Nguyên Đán, P. Gia Định, TP.HCM",
    hours: { en: "06:00–21:30", vi: "06:00–21:30" },
    description: {
      en: "A nearby spot for traditional Hanoi-style phở.",
      vi: "Quán phở Hà Nội gần khách sạn.",
    },
    mapsUrl: mapsUrl("Phở Hà Nội 111 Trần Nguyên Đán Gia Định TP.HCM"),
  },
  {
    id: 2,
    category: "food",
    name: "Đậu Homemade",
    address: "25 Phan Xích Long, P. Gia Định, TP.HCM",

    hours: { en: "10:00–21:30", vi: "10:00–21:30" },
    description: {
      en: "Vietnamese rice vermicelli with fried tofu and shrimp paste.",
      vi: "Quán bún đậu mắm tôm trên đường Phan Xích Long.",
    },
    mapsUrl: mapsUrl("Đậu Homemade 25 Phan Xích Long Gia Định TP.HCM"),
  },
  {
    id: 3,
    category: "food",
    name: "Cơm Tấm Sà Bì Chưởng",
    address: "160 Phan Xích Long, P. Cầu Kiệu, TP.HCM",

    description: {
      en: "A popular local choice for Vietnamese broken rice.",
      vi: "Quán cơm tấm Việt Nam trên đường Phan Xích Long.",
    },
    mapsUrl: mapsUrl("Cơm Tấm Sà Bì Chưởng 160 Phan Xích Long TP.HCM"),
  },
  {
    id: 4,
    category: "food",
    name: "Ngõ Thái",
    address: "126/6 Phan Xích Long, P. Gia Định, TP.HCM",

    hours: { en: "16:00–22:00", vi: "16:00–22:00" },
    description: {
      en: "A nearby restaurant serving Thai dishes.",
      vi: "Quán món Thái gần khách sạn.",
    },
    mapsUrl: mapsUrl("Ngõ Thái 126/6 Phan Xích Long Gia Định TP.HCM"),
  },
  {
    id: 5,
    category: "food",
    name: "Bánh Canh Cá Lóc Trần",
    address: "179 Vạn Kiếp, P. Gia Định, TP.HCM",

    hours: { en: "06:00–22:00", vi: "06:00–22:00" },
    description: {
      en: "Vietnamese thick noodle soup served with snakehead fish.",
      vi: "Quán bánh canh cá lóc trên đường Vạn Kiếp.",
    },
    mapsUrl: mapsUrl("Bánh Canh Cá Lóc Trần 179 Vạn Kiếp Gia Định TP.HCM"),
  },
  {
    id: 22,
    category: "food",
    name: "Nhà hàng Mô Rứa",
    address: "45 Phan Xích Long, P. Cầu Kiệu, TP.HCM",
    hours: { en: "08:00–22:00", vi: "08:00–22:00" },
    description: {
      en: "A nearby restaurant serving Central Vietnamese specialities.",
      vi: "Nhà hàng món miền Trung gần khách sạn.",
    },
    mapsUrl: mapsUrl("Nhà hàng Mô Rứa 45 Phan Xích Long Cầu Kiệu TP.HCM"),
  },
  {
    id: 23,
    category: "food",
    name: "Bánh mì Huỳnh Hoa",
    address: "220 Phan Xích Long, P. Cầu Kiệu, TP.HCM",
    hours: { en: "06:00–22:00", vi: "06:00–22:00" },
    description: {
      en: "Vietnamese bánh mì with generous savoury fillings.",
      vi: "Bánh mì Việt Nam với phần nhân đầy đặn.",
    },
    mapsUrl: mapsUrl("Bánh mì Huỳnh Hoa 220 Phan Xích Long Cầu Kiệu TP.HCM"),
  },
  {
    id: 24,
    category: "food",
    name: "粵點 Yue Dian – Nhà hàng Quảng Đông & Dimsum",
    address: "93 Hoa Lan, P. Cầu Kiệu, TP.HCM",
    hours: { en: "11:30–22:00", vi: "11:30–22:00" },
    description: {
      en: "Cantonese cuisine and dim sum in the Phan Xích Long area.",
      vi: "Nhà hàng món Quảng Đông và dimsum trong khu Phan Xích Long.",
    },
    mapsUrl: mapsUrl("Yue Dian Nhà hàng Quảng Đông Dimsum 93 Hoa Lan TP.HCM"),
  },
  {
    id: 25,
    category: "food",
    name: "K-Pub Phan Xích Long",
    address: "133 Phan Xích Long, P. Cầu Kiệu, TP.HCM",
    hours: { en: "11:00–22:00", vi: "11:00–22:00" },
    description: {
      en: "Korean barbecue restaurant on Phan Xích Long Street.",
      vi: "Nhà hàng thịt nướng Hàn Quốc trên đường Phan Xích Long.",
    },
    mapsUrl: mapsUrl("K-Pub 133 Phan Xích Long Cầu Kiệu TP.HCM"),
  },

  {
    id: 6,
    category: "laundry",
    name: "Giặt Sấy LaundPro",
    address: "27 Vũ Huy Tấn, P. Gia Định, TP.HCM",
    hours: { en: "07:00–22:30", vi: "07:00–22:30" },
    description: {
      en: "Convenient wash and dry service near the hotel.",
      vi: "Dịch vụ giặt sấy gần khách sạn.",
    },
    mapsUrl: mapsUrl("Giặt Sấy LaundPro 27 Vũ Huy Tấn Gia Định TP.HCM"),
  },
  {
    id: 7,
    category: "laundry",
    name: "Giặt Sấy Cá Heo",
    address: "44 Vũ Huy Tấn, P. Gia Định, TP.HCM",
    hours: { en: "07:00–22:00", vi: "07:00–22:00" },
    description: {
      en: "A nearby option for everyday laundry service.",
      vi: "Một lựa chọn giặt sấy khác trên đường Vũ Huy Tấn.",
    },
    mapsUrl: mapsUrl("Giặt Sấy Cá Heo 44 Vũ Huy Tấn Gia Định TP.HCM"),
  },

  {
    id: 8,
    category: "exchange",
    name: "Eximbank Phan Xích Long",
    address: "5 Phan Xích Long, P. Cầu Kiệu, TP.HCM",
    hours: { en: "Mon–Sat · 08:00–17:00", vi: "Thứ 2–Thứ 7 · 08:00–17:00" },
    description: {
      en: "Eximbank transaction office with an ATM and exchange services.",
      vi: "Phòng giao dịch Eximbank có ATM và dịch vụ đổi ngoại tệ.",
    },
    mapsUrl: mapsUrl(
      "ATM Eximbank Phòng Giao Dịch Phan Xích Long 5 Phan Xích Long TP.HCM",
    ),
  },
  {
    id: 9,
    category: "exchange",
    name: "MSB Đinh Tiên Hoàng",
    address: "123 Lê Văn Duyệt, P. Gia Định, TP.HCM",
    hours: {
      en: "Mon–Fri · 08:00–12:00, 13:00–17:00 · Sat morning",
      vi: "Thứ 2–Thứ 6 · 08:00–12:00, 13:00–17:00 · Sáng Thứ 7",
    },
    description: {
      en: "Bank branch reported to provide foreign exchange services.",
      vi: "Chi nhánh ngân hàng được ghi nhận có dịch vụ đổi ngoại tệ.",
    },
    mapsUrl: mapsUrl("MSB Đinh Tiên Hoàng 123 Lê Văn Duyệt Gia Định TP.HCM"),
  },
  {
    id: 10,
    category: "exchange",
    name: "Bac A Bank",
    address: "36A Phan Đăng Lưu, TP.HCM",
    hours: {
      en: "Mon–Fri · 08:00–17:00 · Sat 08:00–12:00",
      vi: "Thứ 2–Thứ 6 · 08:00–17:00 · Thứ 7 08:00–12:00",
    },
    description: {
      en: "Bank branch reported to provide foreign exchange services.",
      vi: "Chi nhánh ngân hàng được ghi nhận có dịch vụ đổi ngoại tệ.",
    },
    mapsUrl: mapsUrl("Ngân Hàng TMCP Bắc Á 36A Phan Đăng Lưu TP.HCM"),
  },

  {
    id: 11,
    category: "attraction",
    name: "Thảo Cầm Viên Sài Gòn",
    address: "2 Nguyễn Bỉnh Khiêm, TP.HCM",
    hours: { en: "07:00–18:30", vi: "07:00–18:30" },
    description: {
      en: "A historic zoo and green park close to the city centre.",
      vi: "Vườn thú kết hợp công viên xanh khá gần khu khách sạn.",
    },
    mapsUrl: mapsUrl("Thảo Cầm Viên Sài Gòn 2 Nguyễn Bỉnh Khiêm TP.HCM"),
  },
  {
    id: 12,
    category: "attraction",
    name: "Landmark 81",
    address: "720A Điện Biên Phủ, TP.HCM",
    description: {
      en: "City views, dining, shopping and photo opportunities.",
      vi: "Phù hợp ngắm thành phố, ăn uống, mua sắm và chụp ảnh.",
    },
    mapsUrl: mapsUrl("Landmark 81 720A Điện Biên Phủ TP.HCM"),
  },
  {
    id: 13,
    category: "attraction",
    name: "War Remnants Museum",
    address: "Open Google Maps for the exact address",
    addressVi: "Mở Google Maps để xem địa chỉ chính xác",
    hours: { en: "07:30–17:30", vi: "07:30–17:30" },
    description: {
      en: "One of Ho Chi Minh City’s best-known historical museums.",
      vi: "Bảo tàng Chứng tích Chiến tranh, một điểm tham quan lịch sử nổi bật.",
    },
    mapsUrl: mapsUrl("Bảo tàng Chứng tích Chiến tranh TP.HCM"),
  },
  {
    id: 14,
    category: "attraction",
    name: "Independence Palace",
    address: "Open Google Maps for the exact address",
    addressVi: "Mở Google Maps để xem địa chỉ chính xác",
    description: {
      en: "A famous historic landmark in central Ho Chi Minh City.",
      vi: "Dinh Độc Lập, địa điểm lịch sử nổi tiếng ở trung tâm TP.HCM.",
    },
    mapsUrl: mapsUrl("Dinh Độc Lập TP.HCM"),
  },
  {
    id: 15,
    category: "attraction",
    name: "Notre-Dame Cathedral Basilica of Saigon",
    address: "Công trường Công xã Paris, District 1, TP.HCM",
    description: {
      en: "A well-known cathedral and architectural landmark in District 1.",
      vi: "Nhà thờ Đức Bà, công trình kiến trúc nổi tiếng tại Quận 1.",
    },
    mapsUrl: mapsUrl("Nhà thờ Đức Bà Công trường Công xã Paris TP.HCM"),
  },
  {
    id: 16,
    category: "attraction",
    name: "Bến Thành Market",
    address: "Open Google Maps for the exact address",
    addressVi: "Mở Google Maps để xem địa chỉ chính xác",
    description: {
      en: "A familiar stop for international visitors, sightseeing and souvenirs.",
      vi: "Điểm quen thuộc với khách quốc tế, phù hợp tham quan và mua quà.",
    },
    mapsUrl: mapsUrl("Chợ Bến Thành TP.HCM"),
  },
  {
    id: 17,
    category: "attraction",
    name: "Đầm Sen Water Park",
    address: "Open Google Maps for the exact address",
    addressVi: "Mở Google Maps để xem địa chỉ chính xác",
    description: {
      en: "Farther from the hotel and best suited to a longer day out.",
      vi: "Xa khách sạn hơn, phù hợp nếu muốn dành nhiều thời gian vui chơi.",
    },
    mapsUrl: mapsUrl("Công Viên Nước Đầm Sen TP.HCM"),
  },
  {
    id: 18,
    category: "attraction",
    name: "Tân Định Church",
    address: "289 Hai Bà Trưng, TP.HCM",
    description: {
      en: "The city’s famous pink church and a popular photo stop.",
      vi: "Nhà thờ màu hồng nổi tiếng tại TP.HCM.",
    },
    mapsUrl: mapsUrl("Nhà thờ Tân Định 289 Hai Bà Trưng TP.HCM"),
  },
  {
    id: 26,
    category: "attraction",
    name: "Nguyễn Huệ Walking Street",
    address: "Nguyễn Huệ, District 1, TP.HCM",
    addressVi: "Đường Nguyễn Huệ, Quận 1, TP.HCM",
    hours: { en: "Open all day", vi: "Mở cửa cả ngày" },
    description: {
      en: "A central pedestrian boulevard with city views and evening activity.",
      vi: "Phố đi bộ trung tâm, phù hợp dạo phố và ngắm thành phố về đêm.",
    },
    mapsUrl: mapsUrl("Phố đi bộ Nguyễn Huệ TP.HCM"),
  },
  {
    id: 27,
    category: "attraction",
    name: "Bùi Viện Walking Street",
    address: "Bùi Viện, Phạm Ngũ Lão, District 1, TP.HCM",
    addressVi: "Đường Bùi Viện, P. Phạm Ngũ Lão, Quận 1, TP.HCM",
    hours: { en: "Open all day", vi: "Mở cửa cả ngày" },
    description: {
      en: "A lively pedestrian street known for nightlife, food and entertainment.",
      vi: "Phố đi bộ sôi động với nhiều lựa chọn ăn uống và giải trí về đêm.",
    },
    mapsUrl: mapsUrl("Phố đi bộ Bùi Viện TP.HCM"),
  },

  {
    id: 19,
    category: "massage",
    name: "Tấm Ơi Spa Phú Nhuận",
    address: "238 Phan Xích Long, TP.HCM",
    hours: { en: "Daily · 09:30–21:30", vi: "Hằng ngày · 09:30–21:30" },
    description: {
      en: "A nearby spa for massage and relaxation.",
      vi: "Spa gần khách sạn dành cho mát xa và thư giãn.",
    },
    mapsUrl: mapsUrl("Tấm Ơi Spa 238 Phan Xích Long TP.HCM"),
  },
  {
    id: 20,
    category: "massage",
    name: "Lụa Spa Hoa Lan",
    address: "106 Hoa Lan, Phú Nhuận, TP.HCM",
    hours: { en: "About 09:00–19:00", vi: "Khoảng 09:00–19:00" },
    description: {
      en: "A spa in the Phan Xích Long area.",
      vi: "Spa trong khu vực Phan Xích Long.",
    },
    mapsUrl: mapsUrl("Lụa Spa Hoa Lan 106 Hoa Lan Phú Nhuận TP.HCM"),
  },
  {
    id: 21,
    category: "massage",
    name: "Spa Việt",
    address: "79/1 Trần Huy Liệu, TP.HCM",
    hours: { en: "About 09:00–21:00", vi: "Khoảng 09:00–21:00" },
    description: {
      en: "A nearby option for massage and spa services.",
      vi: "Một lựa chọn mát xa và chăm sóc cơ thể gần khách sạn.",
    },
    mapsUrl: mapsUrl("Spa Việt 79/1 Trần Huy Liệu TP.HCM"),
  },
];
