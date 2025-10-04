import React, { useState, useContext, useEffect } from 'react';
import { 
    IconBulbFilled,
} from "@tabler/icons-react"

import classes from "../../styles/FloatingFeedbackWidget.module.css";

/* Takes in icon color, bg color, and icon svg */
export const FloatingFeedbackWidget = ( { projectId } : { projectId: string }) => {

    const [open, setOpen] = useState(false);

    const toggleWidget = () => {

        console.log("Opening feedback widget's iFrame window: " + open);
        setOpen(!open);
    }

  const [iframeHeight, setIframeHeight] = useState(300);


    const widgetWindowSizes = [
        {
            width: 400,
            height: 500,
        },
        {
            width: 350,
            height: 375,
        }
    ]

  /**
   * Dynamically send window events to the child frame to update the window height/width
   * Based on the current step of the stepper
   */
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
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
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.3)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9999,
                    }}
                    onClick={toggleWidget}
                >
                <iframe
                    src={`http://localhost:8000/app/feedback-widget/${projectId}`}
                    style={{
                    // width: "400px",
                    // height: `${iframeHeight}px`,
                    minHeight: iframeHeight ? `${iframeHeight}px` : `275px`,
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
                className={`${classes.floatingIcon} hover:cursor-pointer w-fit p-3 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-200`}>
                
                <div className="flex">
                    <IconBulbFilled size={30} className="text-white"></IconBulbFilled>
                </div>

            </div>
        
        </>

        

    );

}