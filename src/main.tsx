import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import NotofoxInitializer from "./components/NotofoxInitializer.tsx";
import { NotofoxConfig } from "./lib/model";

const notofoxConfig: NotofoxConfig = {
  project: "test-project",
  defaultTheme: "light",
  locale: "en",
  containerId: "notofox-widget",
};

const isEmbedModeEnabled = true;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* {
      isEmbedModeEnabled
      ?

      :
      <App/>
    }
     */}

     <App/>
    {/* <>
      <div className="p-8">
        <h1>Example embedded widget</h1>
      </div>
      <NotofoxInitializer config={notofoxConfig} /> 
    </> */}

  </React.StrictMode>
);