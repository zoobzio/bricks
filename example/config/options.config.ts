import { defineOptions } from "bricks";

export default defineOptions({
  example: [
    {
      key: 1,
      label: "One",
    },
    {
      key: 2,
      label: "Two",
    },
    {
      key: 3,
      label: "Three",
    },
  ],
} as const);
