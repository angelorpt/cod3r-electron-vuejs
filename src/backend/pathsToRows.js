import fs from "fs";

export default (paths) => {
  return new Promise((resolve, reject) => {
    try {
      const rows = paths
        .map((path) => fs.readFileSync(path, "utf-8").toString("utf-8"))
        .reduce((fullText, fileText) => `${fullText}\n${fileText}`)
        .split("\n");
      resolve(rows);
    } catch (error) {
      reject(error);
    }
  });
};
