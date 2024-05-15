import { defineEnums } from "@zoobzio/bricks";

export default defineEnums({
  fruit: ["Apple", "Banana", "Lemon"],
  veggies: ["Carrot", "Broccoli", "Okra"],
  numbers: [5, 10, 15, 20],
} as const);
