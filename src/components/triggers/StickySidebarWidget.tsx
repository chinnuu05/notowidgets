import { Button, rem } from '@mantine/core';
import classes from "../../styles/StickySidebar.module.css";
import { FeedbackWidget } from '../FeedbackWidget';
import { Popover } from '@mantine/core';
import { useState } from 'react';``

{/* Sticky sidebar, stays pinned to the right side of the screen */}
export const StickySidebarWidget = () => {

    const [ widgetOpened, setWidgetOpened ] = useState(false);

    return (

        <Popover
            closeOnClickOutside={false}
                    
            offset={{
                crossAxis: -50,
                mainAxis: 40,
            }}
            shadow="sm"
            radius="lg"
            position="left"
        >

            <Popover.Target>
            <div className={classes.sidebarContainer}>
                <div className={classes.buttonWrapper}>
                    <Button

                        onClick={() => {

                        }}
                        className={classes.sidebarButton}
                    >
                        Sidebar Button
                    </Button>
                </div>
            </div>


            </Popover.Target>

            <Popover.Dropdown
                styles={{
                    dropdown: {
                        // width: "20rem",
                        width: rem("18rem"),
                        // backgroundColor: htmlColorScheme == "dark" ? '#1f1f1f' : "#FFFFFF",
                        // width: rem(20)
                        // padding: 0,
                    }
                }}
            ><FeedbackWidget></FeedbackWidget></Popover.Dropdown>



        </Popover>

    );
}