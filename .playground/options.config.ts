import { defineOptions } from "@zoobzio/bricks";

export default defineOptions({
  example: [
    {
      key: "one",
      label: "Option 1",
    },
    {
      key: "two",
      label: "Option 2",
    },
  ],
} as const);
