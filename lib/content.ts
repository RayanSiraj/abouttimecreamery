export type CateringPackage = {
  name: string;
  details: string[];
  price: string;
  upsell?: string;
};

export const cateringPackages: CateringPackage[] = [
  {
    name: "Scoops Only",
    details: [
      "1 or 2 scoops per person",
      "10–15 flavors, including dairy-free options",
    ],
    price:
      "Starting at $500 (plus tax & gratuity, subject to final guest count)",
  },
  {
    name: "Classic Delights",
    details: [
      "A choice of a 2-scoop cup, hot fudge sundae, milkshake, or chocolate chip cookie sandwich",
    ],
    price:
      "Starting at $600 (plus tax & gratuity, subject to final guest count)",
  },
  {
    name: "Ultimate Indulgence",
    details: [
      "Includes Classic Delights, plus: ice cream nachos, a brownie or banana split sundae, and soda floats",
    ],
    price:
      "Starting at $700 (plus tax & gratuity, subject to final guest count)",
  },
  {
    name: "Signature Stuffed Potato Menu",
    details: ["Guests choose from 10 of our signature stuffed potatoes"],
    price:
      "Starting at $750 (plus tax & gratuity, subject to final guest count)",
    upsell:
      "Make it a sweet ending — add the Scoops Only package for $6 per person.",
  },
];

export type StuffedPotato = {
  number: number;
  name: string;
  toppings: string;
};

// Transcribed from the client's official combined menu graphic.
export const stuffedPotatoes: StuffedPotato[] = [
  {
    number: 1,
    name: "Classic Jacket",
    toppings: "Butter, sour cream, cheese, bacon, chives",
  },
  {
    number: 2,
    name: "Bacon Cheeseburger",
    toppings: "Butter, cheese, ground beef, bacon, tomato, onion",
  },
  {
    number: 3,
    name: "Chicken Bacon Ranch",
    toppings: "Butter, cheese, chicken, bacon, ranch",
  },
  {
    number: 4,
    name: "Chili Cheese",
    toppings: "Butter, cheese, chili, red onion, sour cream, chives",
  },
  {
    number: 5,
    name: "Broccoli Cheese",
    toppings: "Butter, sour cream, cheese, broccoli, chives",
  },
  {
    number: 6,
    name: "Taco — Chicken or Beef",
    toppings:
      "Butter, meat, cheese, taco seasoning, tomato, onion, jalapenos, sour cream, chives",
  },
  {
    number: 7,
    name: "BBQ Pulled Pork",
    toppings: "Butter, cheese, pulled pork, BBQ sauce, sour cream, chives",
  },
  {
    number: 8,
    name: "Garlic Parmesan Chicken",
    toppings:
      "Butter, sour cream, cheese, garlic parmesan chicken, red onion, chives",
  },
];

export const potatoBases = ["Baked", "Sweet", "Tater tots", "Mashed (+1)"];

export const creameryTreats: { name: string; note: string }[] = [
  { name: "Ice Cream", note: "Premium scoops in a cup or cone" },
  { name: "Milkshakes", note: "Hand-spun and thick" },
  { name: "Floats", note: "Soda meets a scoop" },
  { name: "Sundaes", note: "Piled high with toppings" },
  { name: "Ice Cream Nachos", note: "A shareable sweet twist" },
  { name: "Cookie Sandwich", note: "Ice cream between cookies" },
];

export type Drink = {
  name: string;
  note: string;
};

// Transcribed from the client's Frozen Refresher graphic.
export const frozenRefresher = {
  flavors: ["Raspberry", "Blackberry", "Mango", "Strawberry", "Lemonade"],
  sizes: [
    { size: "Small", ounces: "12 oz", price: "$6.75" },
    { size: "Medium", ounces: "16 oz", price: "$7.75" },
    { size: "Large", ounces: "20 oz", price: "$8.75" },
  ],
};

// Transcribed from the client's Dirty Sodas graphic.
export const dirtySodas = {
  bestSellers: [
    { name: "Dirty Coke", note: "Coke + vanilla cream" },
    { name: "Pink Drink", note: "Sprite + coconut cream + raspberry" },
    { name: "Creamsicle", note: "Orange soda + vanilla cream" },
  ] satisfies Drink[],
  more: [
    "Toasted Marshmallow Root Beer",
    "Zero Raspberry Coke",
    "Diet Vanilla Cherry",
    "Orange Berry Cream",
  ],
  price: "$8",
  addOns: ["Add cream +$.75", "Add a premium drink, save $2+"],
};

export type GalleryPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/images/scoops-cups-truck.jpg",
    alt: "Two pink cups of ice cream in front of the About Time Creamery truck at an event",
    width: 1024,
    height: 823,
  },
  {
    src: "/images/potato-loaded.jpg",
    alt: "A loaded stuffed potato topped with cheese, bacon, sour cream, and green onions",
    width: 1024,
    height: 681,
  },
  {
    src: "/images/toddler-icecream.jpg",
    alt: "A toddler in a tie-dye dress eating ice cream beside the truck",
    width: 745,
    height: 1024,
  },
  {
    src: "/images/vanilla-swirl-cup.jpg",
    alt: "A hand holding a pink swirl cup filled with scoops of vanilla ice cream",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/window-handoff.jpg",
    alt: "An owner smiling as she hands a drink through the truck service window",
    width: 1024,
    height: 699,
  },
  {
    src: "/images/owners-window-menu.jpg",
    alt: "Cristie and Keith at the service window with the menu boards visible",
    width: 1024,
    height: 681,
  },
];
