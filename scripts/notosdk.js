var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function() {
  "use strict";
  (function(window2, document2) {
    class Notofox {
      constructor() {
        // This will be set dynamically based on which widget is being loaded
        __publicField(this, "widgetSrc", "http://localhost:8000/static/embed/FeedbackWidget.umd.js");
        console.log("[+] Notofox SDK initialized.");
        console.log("[+] Widget source:", this.widgetSrc);
      }
      initialize(config) {
        console.log("[+] Initializing widget with config:", config);
        this.loadWidgetScript(config);
      }
      loadWidgetScript(config) {
        console.log(`[+] Loading widget script: ${this.widgetSrc}`);
        this.loadScript(this.widgetSrc, () => {
          console.log("[+] Widget script loaded.");
          this.waitForWidget(() => {
            console.log("[+] NotofoxWidget available, calling init()");
            window2.NotofoxWidget.init(config);
          });
        });
      }
      loadScript(src, callback) {
        if (document2.querySelector(`script[src="${src}"]`)) {
          console.log(`[!] Script ${src} already loaded.`);
          callback();
          return;
        }
        const script = document2.createElement("script");
        script.src = src;
        script.async = true;
        script.type = "text/javascript";
        script.onload = callback;
        script.onerror = () => console.error(`[X] Failed to load script: ${src}`);
        document2.head.appendChild(script);
      }
      waitForWidget(callback, retries = 50, interval = 100) {
        if (window2.NotofoxWidget) {
          callback();
        } else if (retries > 0) {
          console.log(`[!] Waiting for NotofoxWidget... Retries left: ${retries}`);
          setTimeout(() => this.waitForWidget(callback, retries - 1, interval), interval);
        } else {
          console.error("[X] NotofoxWidget did not load in time.");
        }
      }
    }
    window2.Notofox = function(action, config) {
      if (action === "initialize_widget") {
        new Notofox().initialize(config);
      } else {
        console.error(`[X] Unknown action: ${action}`);
      }
    };
  })(window, document);
})();
