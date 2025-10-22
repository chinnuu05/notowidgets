import { NotofoxConfig, NotofoxChangelogConfig } from "./lib/model";

(function (window: any, document: any) {
  class Notofox {
    private feedbackWidgetSrc: string = "http://localhost:8000/static/embed/FeedbackWidget.umd.js";
    private changelogWidgetSrc: string = "http://localhost:8000/static/embed/ChangelogWidget.umd.js";

    constructor() {
      console.log("[+] Notofox SDK initialized.");
      console.log("[+] Feedback Widget source:", this.feedbackWidgetSrc);
      console.log("[+] Changelog Widget source:", this.changelogWidgetSrc);
    }


    // Entry point that our embed script calls
    public initializeFeedbackWidget(config: NotofoxConfig): void {
      console.log("[+] Initializing Feedback Widget with config:", config);
      this.loadWidgetScript(this.feedbackWidgetSrc, "NotofoxWidget", () => {
        console.log("[+] FeedbackWidget script loaded. Calling init().");
        window.NotofoxWidget.init(config);
      });
    }

    public initializeChangelogWidget(config: NotofoxChangelogConfig): void {
      console.log("[+] Initializing Changelog Widget with config:", config);
      this.loadWidgetScript(this.changelogWidgetSrc, "NotofoxChangelogWidget", () => {
        console.log("[+] ChangelogWidget script loaded. Calling init().");
        window.NotofoxChangelogWidget.init(config);
      });
    }


    // Loads our widget scripts from the CDN
    private loadWidgetScript(src: string, globalName: string, onReady: () => void): void {
      console.log(`[+] Loading widget script: ${src}`);

      // If we've already loaded the script once, don't load it again
      if (document.querySelector(`script[src="${src}"]`)) {
        console.log(`[!] Script ${src} already loaded.`);
        this.waitForGlobal(globalName, onReady);
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.type = "text/javascript";

      script.onload = () => {
        console.log(`[+] Script loaded: ${src}`);
        this.waitForGlobal(globalName, onReady);
      };

      script.onerror = () => console.error(`[X] Failed to load script: ${src}`);
      document.head.appendChild(script);
    }


    private waitForGlobal(globalName: string, callback: () => void, retries = 50, interval = 100): void {
      if (window[globalName]) {
        callback();
      } else if (retries > 0) {
        console.log(`[!] Waiting for ${globalName}... Retries left: ${retries}`);
        setTimeout(() => this.waitForGlobal(globalName, callback, retries - 1, interval), interval);
      } else {
        console.error(`[X] ${globalName} did not load in time.`);
      }
    }
  }

  // Check the "action" parameter and call the respective method to initialize the right widget
  window.Notofox = function (action: string, config: any) {
    const sdk = new Notofox();

    switch (action) {
      case "initialize_feedback_widget":
        sdk.initializeFeedbackWidget(config);
        break;

      case "initialize_changelog_widget":
        sdk.initializeChangelogWidget(config);
        break;

      default:
        console.error(`The emebd script action is unknown (must be either feedback or changelog widget): ${action}`);
        break;
    }
  };
})(window, document);
