import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { FloatingFeedbackWidget } from "./components/triggers/FloatingFeedbackWidget";
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import "./input.css";
import "@mantine/core/styles.css";
import { ThemeToggle } from "./components/ThemeToggle";
import { StickySidebarWidget } from "./components/triggers/StickySidebarWidget";
import { NotofoxChangelogWidget } from "./components/triggers/ChangelogWidgetTrigger";
import { HelpCenterTrigger } from "./components/triggers/HelpCenterTrigger";
import { GiveFeedbackButton } from "./components/triggers/GiveFeedbackHeartButton";
import { FeedbackWidgetTrigger } from "./components/triggers/FeedbackWidgetTrigger";
import { FeedbackWidget } from "./components/FeedbackWidget";

export default function App() {
  // useEffect(() => {

  //   console.log("Calling notosdk.js script, to initialize_widget");
  //   const script1 = document.createElement('script');
  //   // script1.src = '../scripts/notosdk.js';
  //   script1.src = '../scripts/notofox.ts';

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

  const AppLayout = ( { children} : { children: React.ReactNode }) => {
    return (
      <MantineProvider theme={theme}>
        <div>
          {children}
        </div>
      </MantineProvider>

    )
  }

  const [popoverOpened, setPopoverOpened] = useState(false);


  return (

    // <div>

    //   <div
    //     id="notofox-widget-container"
    //     dangerouslySetInnerHTML={{
    //       __html: `
    //         <script src="http://localhost:8000/static/embed/notosdk.js"></script>
    //         <script>
    //           window.Notofox("initialize_widget", {
    //             project: "Notofox",
    //             defaultTheme: "light",
    //             locale: "en",
    //             widgetType: "feedback",
    //             triggerConfig: {
    //               type: "floating"
    //             },
    //             containerId: "notofox-widget"
    //           });
    //         </script>
    //       `,
    //     }}
    //   />

    // </div>

    

    <AppLayout>
        <div className="bg-white">

          {/* <div className="mx-auto w-full flex items-center text-center justify-items-center">
            <div className="text-3xl text-black">Embedded Widgets</div>
          </div> */}

          {/* <iframe src="https://notion.pluggr.io/ebd/1773452ec7278044ae5fc99f97ac86ff" width="100%" height="600" /> */}

          <FloatingFeedbackWidget projectId="0dfd7907-5588-44b1-a114-006173132221"></FloatingFeedbackWidget>

          {/* <HelpCenterTrigger/> */}

          {/* <ChangelogPopupWidget></ChangelogPopupWidget> */}

          {/* <StickySidebarWidget></StickySidebarWidget> */}

        </div>

      
    </AppLayout>

  );
}

