import React from 'react';
import ReactDOM from 'react-dom/client';
import { NotofoxConfig } from "../lib/model";

export function TestWidget( { config } : { config: NotofoxConfig }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h2>My Widget</h2>
      <p>Project: {config.project}</p>
      <p>Theme: {config.defaultTheme}</p>
      <p>Locale: {config.locale}</p>
    </div>
  );
}

// Expose an init function that renders your widget into a target element.
export function init(config: NotofoxConfig) {
    const containerId = config.containerId || 'my-widget-container';
    let container = document.getElementById(containerId);
    if (!container) {

        // Create a new container element for our widget and append it to the body
        container = document.createElement('div');
        container.id = containerId;
        document.body.appendChild(container);
    }
    const root = ReactDOM.createRoot(container);
    root.render(<TestWidget config={config}></TestWidget>);
  }