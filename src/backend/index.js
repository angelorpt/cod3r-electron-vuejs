import { ipcMain } from "electron";
import getRowsFromPaths from "./pathsToRows";

ipcMain.on("process-subtitles", async (event, paths) => {
  console.log("paths", paths);
  try {
    const rows = await getRowsFromPaths(paths);
    console.log("rows", rows);
  } catch (error) {
    console.log(error);
  }

  event.reply("process-subtitles", [
    { name: "Hi", amount: 246 },
    { name: "You", amount: 321 },
  ]);
});
