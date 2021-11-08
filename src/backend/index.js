import { ipcMain } from "electron";

ipcMain.on("process-subtitles", (event, paths) => {
  console.log(paths);
  event.reply("process-subtitles", [
    { name: "Hi", amount: 246 },
    { name: "You", amount: 321 },
    { name: "He", amount: 245 },
    { name: "She", amount: 123 },
    { name: "It", amount: 567 },
    { name: "It", amount: 567 },
    { name: "Içlkjfklçsdt", amount: 567 },
    { name: "It", amount: 567 },
    { name: "It", amount: 567 },
    { name: "It", amount: 567 },
    { name: "rewrew", amount: 567 },
    { name: "It", amount: 567 },
    { name: "It", amount: 567 },
    { name: "Içlkjfklçsdt", amount: 567 },
    { name: "It", amount: 567 },
    { name: "It", amount: 567 },
    { name: "It", amount: 567 },
    { name: "rewrew", amount: 567 },
    { name: "It", amount: 567 },
    { name: "It", amount: 567 },
    { name: "It", amount: 567 },
  ]);
});
