const { app, Tray, Menu } = require("electron");

let tray = null;

app.whenReady().then(() => {
  tray = new Tray("./assets/icons/monitor.ico");

  const contextMenu = Menu.buildFromTemplate([
    { label: "vdName1", type: "radio" },
    { label: "vdName2", type: "radio" },
    { label: "vdName3", type: "radio", checked: true },
    { label: "vdName4", type: "radio" },
    { type: "separator" },
    { label: "Exit", role: "quit" },
  ]);

  tray.setToolTip("vdNameCurrent");
  tray.setContextMenu(contextMenu);
});
