import { ipcMain } from "electron";
import getRowsFromPaths from "./pathsToRows";
import prepareData from "./prepareData";
import groupWords from "./groupWords";

ipcMain.on("process-subtitles", async (event, paths) => {
  try {
    const rows = await getRowsFromPaths(paths);
    const words = await prepareData(rows);
    const wordsList = await groupWords(words);

    event.reply("process-subtitles", wordsList);
  } catch (error) {
    console.log(error);
  }
});
