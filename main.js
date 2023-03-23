const { app, BrowserWindow, Tray, Menu } = require("electron");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadFile("index.html");
};

let tray = null;

app.whenReady().then(() => {
  createWindow();

  tray = new Tray("./assets/icons/monitor.ico");

  const contextMenu = Menu.buildFromTemplate([
    { label: "vdName1", type: "radio" },
    { label: "vdName2", type: "radio" },
    { label: "vdName3", type: "radio", checked: true },
    { label: "vdName4", type: "radio" },
  ]);

  tray.setToolTip("This is my application.");
  tray.setContextMenu(contextMenu);

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
