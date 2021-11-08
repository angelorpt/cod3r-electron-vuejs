// const { ipcMain } = require("electron");
import { ipcMain } from "electron";

ipcMain.on("blabla", (event, arg) => {
  console.log(arg);

  event.reply("pong", "pong");
});
