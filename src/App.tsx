import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { FloatingFeedbackWidget } from "./components/widgets/FloatingFeedbackWidget";
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import "./input.css";
import "@mantine/core/styles.css";
import { ThemeToggle } from "./components/ThemeToggle";
import { StickySidebarWidget } from "./components/widgets/StickySidebarWidget";
import { ChangelogPopupWidget } from "./components/widgets/ChangelogPopupWidget";
import { GiveFeedbackButtonWidget } from "./components/widgets/GiveFeedbackButtonWidget";

export default function App() {
  // useEffect(() => {
  //   const script1 = document.createElement('script');
  //   script1.src = '../scripts/notosdk.js';
  //   script1.async = true;
  //   script1.type = "module";
    
  //   script1.onload = () => {
  //     // Initialize after the SDK is loaded
  //     window.Notofox("initialize_widget", {
  //       project: "test-project",
  //       defaultTheme: "light",
  //       locale: "en",
  //     });
  //   };

  //   document.body.appendChild(script1);

  //   // Cleanup
  //   return () => {
  //     document.body.removeChild(script1);
  //   };
  // }, []);



  // The MantineProvider must be initialiazed with the chosen color scheme

  return (
    <MantineProvider theme={theme}>
      <div>

        <div className="text-black mx-auto w-full flex items-center text-center justify-items-center">
          <div>Test Theme</div>
          <ThemeToggle/>
        </div>

        <ChangelogPopupWidget></ChangelogPopupWidget>
        <FloatingFeedbackWidget/>

        <GiveFeedbackButtonWidget/>
        {/* <StickySidebarWidget></StickySidebarWidget> */}

      </div>
    </MantineProvider>
  );
}

