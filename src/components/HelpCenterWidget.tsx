import { useState, useEffect } from "react";
import classes from "../styles/HelpCenterWidget.module.css";
import { Tabs } from "@mantine/core";
import {
    IconHome,
    IconInbox,
    IconMap,
    IconHelp,
} from "@tabler/icons-react";




export const HelpCenterWidget = () => { 

    const tabs = [
        {
            icon: IconHome,
            label: "Home", 
        },
        {
            icon: IconInbox,
            label: "Feedback",
        }, 
        {
            icon: IconMap,
            label: "Roadmap",
        },
        {
            icon: IconHelp,
            label: "Help"
        }
    ]

    const [activeCategory, setActiveCategory] = useState<string>("Getting Started");
    const [activeTab, setActiveTab] = useState<string>("Home");

    const helpCenterCategories = [
        {
            name: "Getting Started",
        },
        {
            name: "Connect to Notion",
        },
        {
            name: "Collect feedback"
        },
        {
            name: "Build roadmaps"
        },
    ]


    return ( 
        <div className="rounded-t-lg space-y-24 flex flex-col justify-between border dark:border-mantine-dark-700 border-mantine-border bg-white shadow-sm w-full h-full overflow-hidden">


            <Tabs
                defaultValue="home"
                className="w-full flex flex-col justify-between"
            >

             {/* Bottom navbar with tabs(home, feedback, roadmap, and help center) */}

             <Tabs.Panel value="home">

                <div className="flex flex-col gap-y-4"> 

                    <div className="space-y-6 px-8 py-8 bg-gradient-to-br from-orange-300 to-orange-500 rounded-t-lg">



                        <div className="leading-tight block">
                            <div className={classes.helpCenterGreetingUser}>
                                Hey Praneeth! 👋
                            </div>

                            <div className={classes.helpCenterGreetingMessage}>
                                How can we help you?
                            </div>
                        </div>


                        {/* Help center categories */}
                        <div className="relative px-4 py-3.5 mb-5 bg-orange-300/40 rounded-lg">

                            <div className="space-y-2">
                                {
                                    helpCenterCategories.map((category) => {
                                        const isActive = category.name === activeCategory;
                                        return (
                                            <div 
                                                key={category.name}
                                                onClick={() => setActiveCategory(category.name)}
                                                data-active={isActive}
                                                className={`${
                                                    isActive 
                                                    ? "flex items-center bg-orange-200/30 justify-between w-full text-lg text-white font-medium shadow-sm" 
                                                    : "w-full text-white hover:bg-orange-300/40"
                                                } px-3 py-1.5 text-lg cursor-pointer rounded-md transition-all duration-200`}
                                            >
                                                {category.name}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            
                            
                        </div>


                    </div>



                    <div>



                    </div>

                </div>

            </Tabs.Panel>

             <div className="w-full">

                {/* Bottom navbar with tabs */}
                <Tabs.List 
                    grow={true}
                    className="flex justify-between w-full items-center pt-2 pb-0.5 border-t border-mantine-border dark:border-mantine-dark-500  dark:bg-mantine-dark-700 bg-white mt-auto">
                    
                    {
                        tabs.map((tab) => {
                            return (
                                <Tabs.Tab 
                                value={tab.label.toLowerCase()}
                                className="flex-1 flex flex-col items-center justify-center"
                                leftSection={<tab.icon size={20} className="mx-auto text-mantine-gray-700"></tab.icon>}
                            >
                                <div className="pt-1.5 text-xs text-center w-full">{tab.label}</div>
                            </Tabs.Tab>
                            )
                        })
                    }

                    {/* <Tabs.Tab 
                        value="feedback" 
                        className="flex-1 flex flex-col items-center justify-center"
                        leftSection={<IconInbox size={20} className="mx-auto" />}
                    >
                        <div className="pt-1.5 text-xs text-center w-full">Feedback</div>
                    </Tabs.Tab>


                    <Tabs.Tab 
                        value="roadmap" 
                        className="flex-1 flex flex-col items-center justify-center"
                        leftSection={<IconInbox size={20} className="mx-auto" />}
                    >
                        <div className="pt-1.5 text-xs text-center w-full">Roadmap</div>
                    </Tabs.Tab>


                    <Tabs.Tab 
                        value="help" 
                        className="flex-1 flex flex-col items-center justify-center"
                        leftSection={<IconInbox size={20} className="mx-auto" />}
                    >
                        <div className="pt-1.5 text-xs text-center w-full">Help</div>
                    </Tabs.Tab> */}

                </Tabs.List>


             </div>


            </Tabs>


        </div>
    )
}