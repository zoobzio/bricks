import { defineComponentUI } from "~/modules/ui/config";

export default defineComponentUI({
  base: "block",
  variants: {
    size: {
      large: "size-sizing-icon-l",
      medium: "size-sizing-icon-m",
      small: "size-sizing-icon-s",
    },
  },
});
