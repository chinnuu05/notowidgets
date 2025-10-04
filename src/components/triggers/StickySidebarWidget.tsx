import { Button, rem } from '@mantine/core';
import classes from "../../styles/StickySidebar.module.css";
import { FeedbackWidget } from '../FeedbackWidget';
import { Popover } from '@mantine/core';
import { useEffect, useState } from 'react';import { IconSparkles } from '@tabler/icons-react';
``

{/* Sticky sidebar, stays pinned to the right side of the screen */}
export const StickySidebarWidget = ( { projectId } : { projectId: string }) => {

    const [ widgetOpened, setWidgetOpened ] = useState(false);

    const [open, setOpen] = useState(false);

    const toggleWidget = () => {

        console.log("Opening feedback widget's iFrame window: " + open);
        setOpen(!open);
    }

  const [iframeHeight, setIframeHeight] = useState(300);

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

        <div className={classes.sidebarContainer}>
            <div className={classes.buttonWrapper}>

                <div 
                    onClick={() => {
                        console.log("Sticky Sidebar was clicked, injecting iFrame widget now...");
                        toggleWidget();
                    }}
                    className={`${classes.sidebarButton} inline-flex items-center hover:cursor-pointer text-white rounded-t-lg `}>
                    <div>
                        <IconSparkles fill="white" className='text-white'></IconSparkles>
                    </div>
                    <div>
                        Feedback
                    </div>
                </div>
            </div>
        </div>


        </>



        /*
        <Popover
            closeOnClickOutside={false}

            offset={{
                crossAxis: -50,
                mainAxis: 40,
            }}
            shadow="sm"
            radius="lg"
            position="left"
            withArrow={false}
            // overlayProps={{
            //     blur: 5,
            // }}
        >

            <div className={classes.sidebarContainer}>
                <div className={classes.buttonWrapper}>
                    <Popover.Target>
                        <div className={`${classes.sidebarButton} inline-flex items-center hover:cursor-pointer text-md font-medium px-3 py-2 bg-orange-500 text-white rounded-t-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400`}>
                            <div>
                                <IconSparkles fill="white" className='text-white'></IconSparkles>
                            </div>
                            <div>
                                Feedback
                            </div>
                        </div>
                    </Popover.Target>
                </div>
            </div>

            <Popover.Dropdown
                styles={{
                    dropdown: {
                        width: rem("23rem"),
                    }
                }}
            >
                <FeedbackWidget setPopoverOpened={setWidgetOpened}></FeedbackWidget>
            
            </Popover.Dropdown>



        </Popover>
        */

    );
}