const { app, Tray, Menu, globalShortcut } = require("electron");

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

  globalShortcut.register("Control+Command+Tab", () => {
    tray.displayBalloon({
      title: "Display",
      content: "You are on display vdNameCurrent",
    });
  });

  const { Desktops } = require("windows-api-classes");
  const desktops = new Desktops();

  const currentDesktop = desktops.current;

  console.log(`Current virtual desktop: ${currentDesktop.name}`);

  tray.setToolTip("vdNameCurrent");
  tray.setContextMenu(contextMenu);
});
