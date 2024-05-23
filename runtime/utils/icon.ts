// TODO - icons should become their own module w/ a utility that generates types from all available icon sets from iconify
const icons = {
  nav: "i-fa6-solid-bars",
  create: "i-fa6-solid-plus",
  close: "i-fa6-solid-xmark",
  reload: "i-fa6-solid-rotate-left",
  edit: "i-fa6-solid-pen",
  more: "i-fa6-solid-ellipsis",
  info: "i-fa6-solid-circle-info",
  help: "i-fa6-solid-circle-question",
  error: "i-fa6-solid-triangle-exclamation",
  alert: "i-fa6-solid-circle-exclamation",
  down: "i-fa6-solid-chevron-down",
  up: "i-fa6-solid-chevron-up",
  right: "i-fa6-solid-chevron-right",
  left: "i-fa6-solid-chevron-left",
  dropdown: "i-fa6-solid-angle-down",
  copy: "i-fa6-solid-copy",
  share: "i-fa6-solid-share-all",
  open: "i-fa6-solid-arrow-up-right-from-square",
  link: "i-fa6-solid-link",
  export: "i-fa6-solid-cloud-arrow-down",
  import: "i-fa6-solid-cloud-arrow-up",
  bookmark: "i-fa6-solid-bookmark",
  delete: "i-fa6-solid-trash",
  calendar: "i-fa6-solid-calendar",
  time: "i-fa6-solid-clock",
  clear: "i-fa6-solid-circle-xmark",
  search: "i-fa6-solid-magnifying-glass",
  filter: "i-fa6-solid-filter",
  sort: "i-fa6-solid-sort",
  sortUp: "i-fa6-solid-sort-up",
  sortDown: "i-fa6-solid-sort-down",
  expand: "i-fa6-solid-expand",
  collapse: "i-fa6-solid-compress",
  theme: "i-fa6-solid-circle-half-stroke",
  sun: "i-fa6-solid-sun",
  moon: "i-fa6-solid-moon",
  language: "i-fa6-solid-language",
  accessibility: "i-fa6-solid-universal-access",
  check: "i-fa6-solid-check",
  send: "i-fa6-solid-paper-plane",
  next: "i-fa6-solid-arrow-right",
  previous: "i-fa6-solid-arrow-left",
  first: "i-fa6-solid-arrow-left-long",
  last: "i-fa6-solid-arrow-right-long",
  logout: "i-fa6-solid-door-open",
  example: "i-fa6-solid-rocket"
  // TODO: add more icons here...
};

export type IconAlias = keyof typeof icons;

export function useIcon(alias: IconAlias) {
  return icons[alias];
}
