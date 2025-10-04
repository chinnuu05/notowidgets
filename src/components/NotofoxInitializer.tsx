import { useEffect } from "react";
import { NotofoxConfig } from "../lib/model";

declare global {
  interface Window {
    Notofox: (action: string, config: NotofoxConfig) => void;
  }
}

interface Props {
  config: NotofoxConfig;
}


/*
Loads the Notosdk.js script
And initializes it using the provided configuration
*/
export default function NotofoxInitializer({ config }: Props) {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "../../scripts/notosdk.js"; // Adjust the path if needed
//     script.async = true;
//     script.onload = () => { 
//       if (window.Notofox) {
//         window.Notofox("initialize_widget", config);
//       } else {
//         console.error("Notofox SDK failed to load.");
//       }
//     };
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [config]);  

  return <div></div>
  // return <div className="p-12 fixed bottom-20 right-20 z-50" id="notofox-widget"></div>; // This is where the widget will render
}
