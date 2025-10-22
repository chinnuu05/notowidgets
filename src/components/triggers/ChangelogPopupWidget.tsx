import React, { useState, useContext, useEffect } from 'react';
import { 
    IconBulbFilled,
} from "@tabler/icons-react"

// import classes from "@src/styles/ChangelogPopupWidget.module.css";
import classes from "../../styles/ChangelogPopupWidget.module.css";

export const ChangelogPopupWidget = ( { projectId, username } : { projectId: string, username: string}) => {

    console.log("Inside ChangelogPopupWidget component, projectId: " + projectId + " and username: " + username);

    const embed_url = `http://localhost:8000/app/changelog-widget/${projectId}?username=${username}`;

    console.log(`Embedding changelog widget from iframe URL: ${embed_url}`);

    const [open, setOpen] = useState(true);

    const [iframeWidth, setIframeWidth] = useState(550);
    const [iframeHeight, setIframeHeight] = useState(600);


    const toggleWidget = () => {

        console.log("Opening feedback widget's iFrame window: " + open);
        setOpen(!open);
    }




    useEffect(() => {

        const handleMessage = (event: MessageEvent) => {
            if (event.data?.type === 'closeChangelogPopup') {
            console.log("Received message to close changelog popup");
            setOpen(false);
            }
        };


        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);

    }, []);





    return (
        <>
        
            {/* Embedded ChangelogWidget iframe popup */}
            {open &&  (
                <div
                    id="noto-widget-iframe-embed"
                    // className={classes.widgetOverlay}
                    // className={`${classes.widgetOverlay} ${open ? classes.open : ""}`}

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
                        src={embed_url}
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

        </>
    )
}


