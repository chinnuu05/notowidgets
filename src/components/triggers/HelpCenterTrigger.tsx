import React, { useState, useEffect } from "react";
import { Button, rem, Group, ActionIcon, Popover } from "@mantine/core";
import { IconHelpCircleFilled, IconX } from "@tabler/icons-react";
import { HelpCenterWidget } from "../HelpCenterWidget";
import { useHtmlColorScheme } from "../ThemeToggle";
import classes from "@src/styles/HelpCenterWidget.module.css";
import { useDisclosure } from '@mantine/hooks';



export const HelpCenterTrigger = () => { 

    const htmlColorScheme = useHtmlColorScheme();
    const [widgetOpened, setWidgetOpened] = useState(false);




    return ( 
        <div className="pb-3 fixed bottom-6 right-7"> 

            <Popover
                width={500}
                offset={{
                    crossAxis: 0, 
                    mainAxis: 15
                }}
                position="top-end"
                shadow="sm"
                closeOnClickOutside={false}
            >

                <Popover.Target>
                    <Button 
                        color="orange.4"
                        size="sm"
                        variant="filled"
                        radius="md"
                        onClick={() => {
                            if (!widgetOpened) {
                                console.log("Popover.Target clicked, setting widgetOpened to true");
                                setWidgetOpened(true);
                            }

                            else {
                                setWidgetOpened(false);
                            }
                        }}
                        leftSection={!widgetOpened ? <IconHelpCircleFilled size={20} /> : <IconX size={20}></IconX>}>
                            {
                                !widgetOpened 
                                ? 
                                "Get Help"
                                : 
                                "Close"
                            }
                    </Button>
                        
                </Popover.Target>

                <Popover.Dropdown
                    p={0}
                    
                    className={classes.popoverDropdown}
                >
                    <HelpCenterWidget></HelpCenterWidget>
                </Popover.Dropdown>




            </Popover>





        </div>
    )
}