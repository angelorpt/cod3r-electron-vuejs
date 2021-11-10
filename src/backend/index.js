import { ipcMain } from "electron";
import getRowsFromPaths from "./pathsToRows";
import prepareData from "./prepareData";

ipcMain.on("process-subtitles", async (event, paths) => {
  console.log("paths", paths);
  try {
    const rows = await getRowsFromPaths(paths);
    const words = await prepareData(rows);
    console.log("words", words);
  } catch (error) {
    console.log(error);
  }

  event.reply("process-subtitles", [
    { name: "Hi", amount: 246 },
    { name: "You", amount: 321 },
  ]);
});
