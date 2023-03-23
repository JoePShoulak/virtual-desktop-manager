const { app, Tray, Menu, globalShortcut } = require("electron");

let tray = null;

const radio = (label, checked = false) => ({ label, checked, type: "radio" });

app.whenReady().then(() => {
  tray = new Tray("./assets/icons/monitor.ico");

  const contextMenu = Menu.buildFromTemplate([
    radio("vdName1"),
    radio("vdName2"),
    radio("vdName3"),
    radio("vdName4", true),
    { type: "separator" },
    { label: "Exit", role: "quit" },
  ]);

  const notifBalloon = {
    title: "Display",
    content: "You are on display vdNameCurrent",
  };

  globalShortcut.register("Control+Command+Tab", () =>
    tray.displayBalloon(notifBalloon)
  );

  tray.setToolTip("vdNameCurrent");
  tray.setContextMenu(contextMenu);
});
