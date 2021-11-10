export default (rows) => {
  return new Promise((resolve, reject) => {
    try {
      const words = rows
        .filter(filterValidRow)
        .map((row) => removePunctuation(row))
        .map((row) => removeTags(row))
        .reduce(mergeRow)
        .split(" ")
        .map((word) => word.toLowerCase())
        .map((word) => word.replace('"', ""));

      resolve(words);
    } catch (error) {
      reject(error);
    }
  });
};

const filterValidRow = (row) => {
  const notNumber = !parseInt(row.trim());
  const notEmpty = row.trim() !== "";
  const notInterval = !row.includes("-->");
  return notNumber && notEmpty && notInterval;
};

const removePunctuation = (row) => row.replace(/[,?!.-]/g, "");

const removeTags = (row) => row.replace(/(<[^>]+)>/gi, "").trim();

const mergeRow = (fullText, row) => `${fullText} ${row}`;
