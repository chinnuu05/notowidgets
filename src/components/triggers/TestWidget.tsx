import React from 'react';
import ReactDOM from 'react-dom';
import { NotofoxConfig } from "../../lib/model";
import { AnotherTestWidget } from "./AnotherTestWidget";

// ---------------------------------------------------------------------
// 1) Hacky fix: define "process.env.NODE_ENV" so React won't complain.
//    In a true production build, you should do this replacement in your
//    Vite config. But if you just want a quick fix in the .tsx file:
if (typeof window !== "undefined" && typeof (window as any).process === "undefined") {
  (window as any).process = { env: { NODE_ENV: "production" } };
}
// ---------------------------------------------------------------------

export function TestWidget({ config }: { config: NotofoxConfig }) {
  return (
    <div className="text-2xl font-semibold p-12 z-50" style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h2>Hello World Test Widget</h2>
      <p>Project: {config.project}</p>
      <p>Theme: {config.defaultTheme}</p>
      <p>Locale: {config.locale}</p>
    </div>
  );
}

// Store the root instance to avoid multiple re-renders
let widgetRoot: any = null; // or ReactDOM.Root type if you want

export const NotofoxWidget = {
  init(config: NotofoxConfig) {
    console.log("[+] TestWidget init function called, adding/updating widget");

    // Double-check React is available (just in case)
    if (typeof React === "undefined" || typeof ReactDOM === "undefined") {
      console.error("[X] React or ReactDOM is not available. Widget cannot initialize.");
      return;
    }

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
      console.log("[+] Creating new React root called: " + containerId);
    } else {
      console.log("[!] React root already exists, updating instead of re-creating.");
    }

    const test = document.createElement("span");
    test.classList.add("text-2xl", "font-semibold", "p-3", "z-50");
    test.innerHTML = "This span was added from TestWidget.tsx";
    container.appendChild(test);

    // Render or update the widget
    // widgetRoot.render(<TestWidget config={config} />);

    if (!widgetRoot) {
      console.log("[X] Widget root is not available. Widget cannot initialize.");
    }

    else {
      console.log("[+] Widget root is available. Rendering AnotherTestWidget");
      console.log('Inside widget React version:', React.version);
      console.log('Inside widget ReactDOM version:', ReactDOM.version);
      
      widgetRoot.render(<AnotherTestWidget />);
    }

  }
};

// Attach globally for UMD compatibility
if (typeof window !== "undefined") {
  window.NotofoxWidget = NotofoxWidget;
}