import React from 'react';
import ReactDOM from 'react-dom/client';
import { NotofoxConfig } from "../../lib/model";

function TestWidget({ config }: { config: NotofoxConfig }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h2>Hello World Test Widget</h2>
      <p>Project: {config.project}</p>
      <p>Theme: {config.defaultTheme}</p>
      <p>Locale: {config.locale}</p>
    </div>
  );
}

// Export the initialization function
export const NotofoxWidget = {
  init: function(config: NotofoxConfig) {

    console.log("[+] TestWidget init function called, adding div to DOM");
    const containerId = config.containerId || 'my-widget-container';
    let container = document.getElementById(containerId);
    if (!container) {
      container = document.createElement('div');
      container.id = containerId;
      document.body.appendChild(container);
    }
    const root = ReactDOM.createRoot(container);
    root.render(React.createElement(TestWidget, { config }));
  }
};

if (typeof window !== "undefined") {
  window.NotofoxWidget = NotofoxWidget;
}


// For UMD bundle
export default NotofoxWidget;