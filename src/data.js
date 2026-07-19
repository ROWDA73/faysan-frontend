// src/data.js

export const products = [
  {
    id: 1,
    name: "Oud Supreme",
    price: 120,
    image: "/images/oud.jpg", // Hubi in sawirku uu ku jiro galka public/images
    description: "Ud tayo sare leh oo soo jiidasho leh."
  },
  {
    id: 2,
    name: "Silk Evening Gown",
    price: 180,
    image: "/images/gown.jpg",
    description: "Dharka fiidkii oo aad u qurux badan."
  },
  {
    id: 3,
    name: "Velvet Matte Lipstick",
    price: 45,
    image: "/images/lipstick.jpg",
    description: "Midab qurux badan oo waara."
  },
  {
    id: 4,
    name: "String",
    price: 0,
    image: "/images/string.jpg",
    description: "Qalabka casriga ah."
  }
];
// ... products array-gaaga ayaa halkan ku jira

export const categories = [
  { id: 1, title: 'PERFUMES', desc: 'Luxury fragrances that define you.' },
  { id: 2, title: 'FASHION', desc: 'Elegant styles for every occasion.' },
  { id: 3, title: 'COSMETICS', desc: 'Premium beauty for timeless glow.' }
];