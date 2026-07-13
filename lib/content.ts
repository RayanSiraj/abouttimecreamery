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
