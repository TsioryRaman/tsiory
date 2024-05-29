export const getNameId = (name: String) =>
  "nav-" +
  (name.split(" ").length >= 2
    ? (name.split(" ")[1] as string)
    : (name as string));
