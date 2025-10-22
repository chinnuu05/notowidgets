import React, { JSX, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { NotofoxChangelogConfig } from "../../lib/model";
import AnotherTestWidget from "./AnotherTestWidget";
import { FloatingFeedbackWidget } from './FloatingFeedbackWidget';
import { GiveFeedbackButton } from './GiveFeedbackHeartButton';
import floatingInlineStyles from '../../../dist/vite-min-template.css?inline';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { StickySidebarWidget } from './StickySidebarWidget';
import { ChangelogPopupWidget } from './ChangelogPopupWidget';


// ---------------------------------------------------------------------
// 1) Hacky fix: define "process.env.NODE_ENV" so window.React won't complain.
//    In a true production build, you should do this replacement in your
//    Vite config. But if you just want a quick fix in the .tsx file:
if (typeof window !== "undefined" && typeof (window as any).process === "undefined") {
  (window as any).process = { env: { NODE_ENV: "production" } };
}
// ---------------------------------------------------------------------

export function ChangelogWidget() {
  return (
    <div className="text-2xl font-semibold p-12 z-50" style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h2>Hello World Test Widget</h2>
      <p>Project: Notofox</p>
      <p>Theme: Default</p>
      <p>Locale: English</p>
    </div>
  );
}

// Store the root instance to avoid multiple re-renders
let widgetRoot: any = null;


// This is responsible for initializing and rendering the changelog widget
// The ChangelogWidget does not have any trigger component/UI, it just embeds the popup iframe directly onto the page
export const NotofoxChangelogWidget = {



  init(config: NotofoxChangelogConfig) {


    console.log("[+] ChangelogWidget init function called, loading the changleog popup with config: ", JSON.stringify(config));

    // Double-check window.React is available (just in case)
    // if (typeof React === "undefined" || typeof ReactDOM === "undefined") {
    //   console.error("[X] window.React or window.ReactDOM is not available. Widget cannot initialize.");
    //   return;
    // }

    // Find or create the container
    const containerId = config.containerId || "notofox-changelog-widget";
    let container = document.getElementById(containerId);






    if (!container) {
      container = document.createElement("div");
      container.id = containerId;
      document.body.appendChild(container);
    }

    // Shadow div for our widget so it's CSS is not affected by anything else
    // const shadow = container.attachShadow({ mode: "open" });

    // Everything inside this div will have it's own CSS
    const mount = document.createElement("div");
    // shadow.appendChild(mount);
    container.appendChild(mount);


    // const shadowStyle = document.createElement("style");
    // shadow.appendChild(shadowStyle);

    // // Create an Emotion cache targeting the shadow root
    // const shadowCache = createCache({
    //   key: 'mantine',
    //   container: shadowStyle, // 👈 styles will now go here, not <head>
    // });



    // The CSS is now built in the dist js file, so no need to load any CSS
    // const link = document.createElement('link');
    // link.rel = 'stylesheet';
    // link.href = 'https://vcarveconstructions.com/FeedbackWidget.umd.css';
    // shadow.appendChild(link);

    // const mantineLink = document.createElement('link');
    // mantineLink.rel = 'stylesheet';
    // mantineLink.href = 'https://unpkg.com/@mantine/core@7.4.2/styles.css';
    // shadow.appendChild(mantineLink);


    // const mantineLink = document.createElement('link');
    // mantineLink.rel = 'stylesheet';
    // mantineLink.href = 'https://unpkg.com/@mantine/core@7.4.2/styles.css';
    // document.head.appendChild(mantineLink);

    // If widgetRoot exists, update the widget instead of re-creating it
    if (!widgetRoot) {
      widgetRoot = (ReactDOM as any).createRoot(mount);
      console.log("[+] Creating new window.React root called: " + containerId);

      // Add the style tag for the shadow div
      // const shadowStyle = document.createElement('style');
      // shadowStyle.id = "shadow-css";
      // shadowStyle.textContent = floatingInlineStyles;
      // shadow.appendChild(shadowStyle);



    } else {
      console.log("[!] window.React root already exists, updating instead of re-creating.");
    }

    // const test = document.createElement("span");
    // test.classList.add("text-2xl", "font-semibold", "p-3", "z-50");
    // test.innerHTML = "This span was added from TestWidget.tsx";
    // container.appendChild(test);

    // Render or update the widget
    // widgetRoot.render(<TestWidget />);

    if (!widgetRoot) {
      console.log("[X] Widget root is not available. Widget cannot initialize.");
    }

    else {

      console.log("Injecting CSS inline style tag for notofox-widget element");
      // Manually set inline styles because tailwind isn't working for some reason
      // document.getElementById('notofox-widget')!.style.cssText = 'position: fixed !important; bottom: 75px !important; right: 80px !important; z-index: 2147483647 !important;';


      console.log("[+] Widget root is available. Rendering ChangelogWidget");
      console.log('Inside widget window.React version:', React.version);
      console.log('Inside widget window.ReactDOM version:', (ReactDOM as any).version);

      console.log(`ProjectID is set to ${config.projectId} with project_name ${config.project}`);
      console.log(`ChangelogPopup username is set to ${config.username}`)


      widgetRoot.render(
        <ChangelogPopupWidget username={config.username} projectId={config.projectId}></ChangelogPopupWidget>
      )


    }

  }
};

// Attach globally for UMD compatibility
if (typeof window !== "undefined") {
  window.NotofoxChangelogWidget = NotofoxChangelogWidget;

}