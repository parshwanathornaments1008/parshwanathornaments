export interface Product {
  id: string;
  name: string;
  category: 'god-goddess' | 'utensils' | 'anklets' | 'bacha-payal' | 'kada-payal';
  image: string;
  price: string;
  height?: string;
  weight?: string;
  description: string;
}

export const silverProducts: Product[] = [
  // God & Goddess Statues
  {
    id: "god-1",
    name: "Lord Ganesha Silver Idol",
    category: "god-goddess",
    image: "/placeholder.svg",
    price: "₹8,500",
    height: "15cm",
    weight: "250g",
    description: "Exquisitely crafted pure silver Ganesha idol with intricate detailing. Perfect for puja and home décor."
  },
  {
    id: "god-2",
    name: "Goddess Lakshmi Statue",
    category: "god-goddess",
    image: "/placeholder.svg",
    price: "₹12,000",
    height: "18cm",
    weight: "350g",
    description: "Beautiful silver statue of Goddess Lakshmi, symbolizing wealth and prosperity."
  },
  {
    id: "god-3",
    name: "Radha Krishna Silver Murti",
    category: "god-goddess",
    image: "/placeholder.svg",
    price: "₹15,500",
    height: "20cm",
    weight: "400g",
    description: "Divine Radha Krishna pair in sterling silver with traditional craftsmanship."
  },
  {
    id: "god-4",
    name: "Lord Shiva Lingam",
    category: "god-goddess",
    image: "/placeholder.svg",
    price: "₹7,200",
    height: "12cm",
    weight: "200g",
    description: "Sacred silver Shiva Lingam for worship and meditation."
  },
  {
    id: "god-5",
    name: "Hanuman Ji Silver Idol",
    category: "god-goddess",
    image: "/placeholder.svg",
    price: "₹9,800",
    height: "16cm",
    weight: "280g",
    description: "Powerful silver Hanuman idol with detailed features and traditional design."
  },
  
  // Silver Utensils
  {
    id: "utensil-1",
    name: "Silver Dinner Plate Set",
    category: "utensils",
    image: "/placeholder.svg",
    price: "₹45,000",
    weight: "800g",
    description: "Premium set of 6 silver dinner plates with elegant borders, perfect for special occasions."
  },
  {
    id: "utensil-2",
    name: "Silver Water Glass",
    category: "utensils",
    image: "/placeholder.svg",
    price: "₹6,500",
    height: "10cm",
    weight: "120g",
    description: "Traditional silver glass with health benefits, ideal for drinking water."
  },
  {
    id: "utensil-3",
    name: "Silver Bowl Set",
    category: "utensils",
    image: "/placeholder.svg",
    price: "₹28,000",
    weight: "600g",
    description: "Set of 4 silver bowls with intricate engravings for serving."
  },
  {
    id: "utensil-4",
    name: "Silver Spoon Collection",
    category: "utensils",
    image: "/placeholder.svg",
    price: "₹12,000",
    weight: "200g",
    description: "Set of 6 elegant silver spoons with decorative handles."
  },
  {
    id: "utensil-5",
    name: "Silver Puja Thali",
    category: "utensils",
    image: "/placeholder.svg",
    price: "₹18,500",
    weight: "350g",
    description: "Complete silver puja thali set with all essential items for worship."
  },
  
  // Silver Anklets
  {
    id: "anklet-1",
    name: "Traditional Silver Payal",
    category: "anklets",
    image: "/placeholder.svg",
    price: "₹5,200",
    weight: "45g",
    description: "Classic silver anklet with melodious ghungroo bells, perfect for daily wear."
  },
  {
    id: "anklet-2",
    name: "Designer Floral Anklet",
    category: "anklets",
    image: "/placeholder.svg",
    price: "₹6,800",
    weight: "52g",
    description: "Elegant floral pattern silver anklet with intricate craftsmanship."
  },
  {
    id: "anklet-3",
    name: "Ethnic Oxidized Payal",
    category: "anklets",
    image: "/placeholder.svg",
    price: "₹4,500",
    weight: "38g",
    description: "Oxidized silver anklet with traditional tribal patterns."
  },
  {
    id: "anklet-4",
    name: "Bridal Silver Anklet",
    category: "anklets",
    image: "/placeholder.svg",
    price: "₹8,900",
    weight: "65g",
    description: "Ornate bridal anklet with pearl and silver bead detailing."
  },
  {
    id: "anklet-5",
    name: "Minimalist Chain Payal",
    category: "anklets",
    image: "/placeholder.svg",
    price: "₹3,800",
    weight: "28g",
    description: "Simple and elegant silver chain anklet for modern style."
  },
  
  // Silver Bacha Payal
  {
    id: "bacha-1",
    name: "Baby's First Payal",
    category: "bacha-payal",
    image: "/placeholder.svg",
    price: "₹2,200",
    weight: "15g",
    description: "Delicate silver anklet for infants with soft bells and adjustable size."
  },
  {
    id: "bacha-2",
    name: "Cute Butterfly Bacha Payal",
    category: "bacha-payal",
    image: "/placeholder.svg",
    price: "₹2,800",
    weight: "18g",
    description: "Adorable butterfly design silver anklet for toddlers."
  },
  {
    id: "bacha-3",
    name: "Traditional Nazariya Payal",
    category: "bacha-payal",
    image: "/placeholder.svg",
    price: "₹2,500",
    weight: "16g",
    description: "Silver anklet with protective evil eye charm for children."
  },
  {
    id: "bacha-4",
    name: "Peacock Design Baby Payal",
    category: "bacha-payal",
    image: "/placeholder.svg",
    price: "₹3,200",
    weight: "20g",
    description: "Beautiful peacock motif silver anklet for kids."
  },
  {
    id: "bacha-5",
    name: "Adjustable Baby Anklet Set",
    category: "bacha-payal",
    image: "/placeholder.svg",
    price: "₹4,000",
    weight: "25g",
    description: "Pair of adjustable silver anklets for growing children."
  },
  
  // Silver Kada Payal
  {
    id: "kada-1",
    name: "Heavy Kada Payal",
    category: "kada-payal",
    image: "/placeholder.svg",
    price: "₹12,500",
    weight: "95g",
    description: "Thick silver kada style payal with traditional engravings."
  },
  {
    id: "kada-2",
    name: "Rajasthani Kada Anklet",
    category: "kada-payal",
    image: "/placeholder.svg",
    price: "₹14,800",
    weight: "110g",
    description: "Authentic Rajasthani style heavy kada payal with mirror work."
  },
  {
    id: "kada-3",
    name: "Temple Design Kada",
    category: "kada-payal",
    image: "/placeholder.svg",
    price: "₹16,200",
    weight: "120g",
    description: "Exquisite temple art inspired kada payal in pure silver."
  },
  {
    id: "kada-4",
    name: "Antique Finish Kada Payal",
    category: "kada-payal",
    image: "/placeholder.svg",
    price: "₹13,900",
    weight: "100g",
    description: "Vintage look kada payal with oxidized finish and detailed patterns."
  },
  {
    id: "kada-5",
    name: "Designer Kada Set",
    category: "kada-payal",
    image: "/placeholder.svg",
    price: "₹18,500",
    weight: "130g",
    description: "Pair of contemporary design kada payal for special occasions."
  },
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'god-goddess', name: 'God & Goddess Statues' },
  { id: 'utensils', name: 'Silver Utensils' },
  { id: 'anklets', name: 'Silver Anklets' },
  { id: 'bacha-payal', name: 'Silver Bacha Payal' },
  { id: 'kada-payal', name: 'Silver Kada Payal' },
];
