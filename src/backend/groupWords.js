export default (words) => {
  return new Promise((resolve, reject) => {
    try {
      // ['ana', 'ana', 'ana', 'bia', 'bia']
      // { ana: 3, bia: 2 }

      const groupedWords = words.reduce(agroupWords, {});
      const groupedWordsArray = Object.keys(groupedWords)
        .map((key) => ({
          name: key,
          amount: groupedWords[key],
        }))
        .sort((a, b) => b.amount - a.amount);

      resolve(groupedWordsArray);
    } catch (error) {
      reject(error);
    }
  });
};

const agroupWords = (obj, word) => {
  if (obj[word]) {
    obj[word] = obj[word] + 1;
  } else {
    obj[word] = 1;
  }
  return obj;
};
