import { createRoot } from "react-dom/client";
import { IMessage } from "@pages/background/types";
import "./style.css";
import Dialog from "../dialog/Dialog";

// Handle messages from web page
window.addEventListener(
  "message",
  async (event) => {
    // Accept messages only from same window
    if (event.source !== window) {
      return;
    }
    console.log("Content script received from web page: " + event.data.type);
    if (event.data.type) {
      switch (event.data.type) {
        case "initAuth":
          // const manifest = chrome.runtime.getManifest();
          const loginBtn = document.getElementById("login-btn");
          const { data } = await chrome.runtime.sendMessage<IMessage<void>>({
            type: "authentication",
            subtype: "check-agent-connection",
          });
          if (loginBtn) {
            const tabSigninResp = await chrome.runtime.sendMessage<
              IMessage<void>
            >({
              type: "fetch-resource",
              subtype: "tab-signin",
            });
            insertReactComponent({
              ...data,
              signins: tabSigninResp?.data?.signins,
            });
          } else {
            removeAlertComponent();
          }
          break;
        case "isUnlocked":
          break;
      }
    }
  },
  false
);

// Handle messages from background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log(sender);
  if (sender.origin === "chrome-extension://" + chrome.runtime.id) {
    // handle messages from Popup
    console.log("Message received from browser extension pupup: " + message);
    // sendResponse({ resp: "received" });
  }
});

function insertReactComponent(data: any) {
  console.log("inserting react component");
  const div = document.createElement("div");
  div.id = "__root";
  document.body.appendChild(div);

  const rootContainer = document.querySelector("#__root");
  const root = createRoot(rootContainer!);
  root.render(
    <Dialog
      isConnected={data.isConnected}
      tab={data?.meta?.tab}
      signins={data.signins}
    />
  );
}

function removeAlertComponent() {
  const element = document.getElementById("__root");
  if (element) element.remove();
}
