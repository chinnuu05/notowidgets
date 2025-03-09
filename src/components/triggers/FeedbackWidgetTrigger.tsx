import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { NotofoxConfig } from "../../lib/model";
import AnotherTestWidget from "./AnotherTestWidget";
import { FloatingFeedbackWidget } from './FloatingFeedbackWidget';
import { GiveFeedbackButton } from './GiveFeedbackHeartButton';

// ---------------------------------------------------------------------
// 1) Hacky fix: define "process.env.NODE_ENV" so window.React won't complain.
//    In a true production build, you should do this replacement in your
//    Vite config. But if you just want a quick fix in the .tsx file:
if (typeof window !== "undefined" && typeof (window as any).process === "undefined") {
  (window as any).process = { env: { NODE_ENV: "production" } };
}
// ---------------------------------------------------------------------

export function FeedbackWidgetTrigger() {
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
let widgetRoot: any = null; // or window.ReactDOM.Root type if you want

export const NotofoxWidget = {



  init(config: NotofoxConfig) {


    console.log("[+] FeedbackWidgetTrigger init function called, adding/updating widget for: ", JSON.stringify(config));

    // Double-check window.React is available (just in case)
    // if (typeof React === "undefined" || typeof ReactDOM === "undefined") {
    //   console.error("[X] window.React or window.ReactDOM is not available. Widget cannot initialize.");
    //   return;
    // }

    // Find or create the container
    const containerId = config.containerId || "notofox-widget";
    let container = document.getElementById(containerId);


    if (!container) {
      container = document.createElement("div");
      container.id = containerId;
      document.body.appendChild(container);
    }

    // If widgetRoot exists, update the widget instead of re-creating it
    if (!widgetRoot) {
      widgetRoot = (ReactDOM as any).createRoot(container);
      console.log("[+] Creating new window.React root called: " + containerId);
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
      console.log("[+] Widget root is available. Rendering AnotherTestWidget");
      console.log('Inside widget window.React version:', React.version);
      console.log('Inside widget window.ReactDOM version:', (ReactDOM as any).version);
      console.log("[+] Checking AnotherTestWidget before rendering:", AnotherTestWidget);
      
      // widgetRoot.render(
      //   <AnotherTestWidget></AnotherTestWidget>
      // );


        // Now show different trigger ui based on the config 




      widgetRoot.render(
        // <GiveFeedbackButton size="md"/>
        <FloatingFeedbackWidget></FloatingFeedbackWidget>
      )

    }

  }
};

// Attach globally for UMD compatibility
if (typeof window !== "undefined") {
  window.NotofoxWidget = NotofoxWidget;
}