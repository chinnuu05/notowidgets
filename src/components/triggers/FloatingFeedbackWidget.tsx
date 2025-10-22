import React, { useState, useContext, useEffect } from 'react';
import { 
    IconBulbFilled,
} from "@tabler/icons-react"

// import classes from "@src/styles/FloatingFeedbackWidget.module.css";
import classes from "../../styles/FloatingFeedbackWidget.module.css";

/* Takes in icon color, bg color, and icon svg */
export const FloatingFeedbackWidget = ( { projectId } : { projectId: string }) => {

    const [open, setOpen] = useState(false);

    const toggleWidget = () => {

        console.log("Opening feedback widget's iFrame window: " + open);
        setOpen(!open);
    }


    const [iframeWidth, setIframeWidth] = useState(325);
    const [iframeHeight, setIframeHeight] = useState(339);

    // This is a list of the sizes the iFrame window should manually be set to during each <Stepper> step of the widget submission process
    const widgetWindowSizes = [
        {
            step: 1,
            width: 325,
            height: 339,
        },
        {
            step: 2,
            width: 365,
            height: 358,
        }, 
        {
            step: 3,
            width: 379,
            height: 248, 
        }
    ]

  /**
   * This window event tells us when the stepper has changed and what step the user is currently on
   * Then according to that, we dynamically set the width and height of the iframe using the values in widgetWindowSizes
   */


    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {

            console.log("We received the stepper step changed postMEssage event from the embedded iFrame window");
            if (event.data.widgetStep) {
                const currentStep = event.data.widgetStep;
                const size = widgetWindowSizes.find(w => w.step === currentStep);
                if (size) {
                    setIframeHeight(size.height);
                    // Optional: Also set width if needed
                    // setIframeWidth(size.width);
                }
            }

            // fallback if you're still sending height manually
            if (event.data.widgetHeight) {
                setIframeHeight(event.data.widgetHeight);
            }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);





    return (

        <>
        
            {/* Embedded widget iframe */}
            {open && (
                <div
                    id="noto-widget-iframe-embed"
                    className={classes.widgetOverlay}

                    // style={{
                    //     position: "fixed",
                    //     top: 0,
                    //     left: 0,
                    //     width: "100vw",
                    //     height: "100vh",
                    //     backgroundColor: "rgba(0,0,0,0.3)",
                    //     display: "flex",
                    //     justifyContent: "center",
                    //     alignItems: "center",
                    //     zIndex: 9999,
                    // }}
                    onClick={toggleWidget}
                >
                    <iframe
                        src={`http://localhost:8000/app/feedback-widget/${projectId}`}
                        className={classes.widgetIframe}
                        style={{
                            width: `${iframeWidth}px`,
                            height: `${iframeHeight}px`,
                            minHeight: `${iframeHeight}px`,
                            minWidth: `${iframeWidth}px`,
                            border: "0",
                            borderRadius: "8px",
                            background: "transparent",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                            // transition: "height 0.95s, min-height 0.95s, opacity 0.2s",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <div
                id="noto-floating-icon"
                onClick={toggleWidget}
                // className={`${classes.floatingIcon} hover:cursor-pointer w-fit p-3 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-200`}    
                className={classes.floatingIcon}
            >

                <div 
                    // className="flex"
                    className={classes.iconInner}

                >
                    <IconBulbFilled 
                        size={30} 
                        className={classes.icon}
                        // className="text-white"
                    ></IconBulbFilled>
                </div>

            </div>
        
        </>

        

    );

}