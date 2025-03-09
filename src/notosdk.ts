import { NotofoxConfig } from "./lib/model";

(function (window: any, document: any) {
  class Notofox {
    // Points to your self-contained UMD that has React built in
    private widgetSrc: string =
      "https://raw.githack.com/chinnuu05/notowidgets/master/TestWidgetV10.js";

    constructor() {
      console.log("[+] Notofox SDK initialized.");
    }

    public initialize(config: NotofoxConfig): void {
      console.log("[+] Initializing widget with config:", config);
      this.loadWidgetScript(config);
    }

    private loadWidgetScript(config: NotofoxConfig): void {
      console.log(`[+] Loading widget script: ${this.widgetSrc}`);
      this.loadScript(this.widgetSrc, () => {
        console.log("[+] Widget script loaded.");
        // Wait for the global to appear
        this.waitForWidget(() => {
          console.log("[+] NotofoxWidget available, calling init()");
          window.NotofoxWidget.init(config);
        });
      });
    }

    private loadScript(src: string, callback: () => void): void {
      if (document.querySelector(`script[src="${src}"]`)) {
        console.log(`[!] Script ${src} already loaded.`);
        callback();
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.type = "text/javascript";
      script.onload = callback;
      script.onerror = () => console.error(`[X] Failed to load script: ${src}`);
      document.head.appendChild(script);
    }

    private waitForWidget(callback: () => void, retries = 50, interval = 100): void {
      if (window.NotofoxWidget) {
        callback();
      } else if (retries > 0) {
        console.log(`[!] Waiting for NotofoxWidget... Retries left: ${retries}`);
        setTimeout(() => this.waitForWidget(callback, retries - 1, interval), interval);
      } else {
        console.error("[X] NotofoxWidget did not load in time.");
      }
    }
  }

  window.Notofox = function (action: string, config: NotofoxConfig) {
    if (action === "initialize_widget") {
      new Notofox().initialize(config);
    } else {
      console.error(`[X] Unknown action: ${action}`);
    }
  };
})(window, document);
