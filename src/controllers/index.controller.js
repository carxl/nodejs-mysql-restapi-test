export const getIndex = (req, res) => {
  res.sendFile("index.html", { root: "./src/templates" });
};
