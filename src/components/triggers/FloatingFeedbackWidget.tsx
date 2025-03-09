import React, { useState, useContext, useEffect } from 'react';
import Confetti from 'react-confetti'
// import { useWindowSize } from 'react-use'
import { useViewportSize } from '@mantine/hooks';
import { useHtmlColorScheme } from "../ThemeToggle";
import { 
    IconBulbFilled,
    IconTargetArrow,
    IconBugFilled,
    IconHelpHexagonFilled,
    IconArrowLeft,
    IconX,
    IconBug,
    IconCamera,
    IconBolt,
    IconCircleCheckFilled,
    IconBulb,
    IconChevronRight
} from "@tabler/icons-react"

interface FeedbackWidgetProps {
    buttonRect: DOMRect;
    // ID to submit feedback to 
    projectID: string;
    onClose: () => void;
}
import { Button, Stepper, rem, ScrollArea, Textarea, TextInput, Select, Group, ActionIcon, Switch, Popover } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { useWindowSize } from 'react-use';
// import classes from "@src/styles/FloatingFeedbackWidget.module.css";
// import { NotoBadge } from '@src/components/NotoBadge';
import { FeedbackWidget } from "../FeedbackWidget";
import { WidgetWrapper } from '../WidgetWrapper';

/* Takes in icon color, bg color, and icon svg */
export const FloatingFeedbackWidget = () => {

    const { width, height } = useWindowSize()
    const [ opened, { toggle }] = useDisclosure(false);
    const [ popoverOpened, setPopoverOpened ] = useState(false);
    const [feedbackType, setFeedbackType] = useState<string>("");
    const [feedbackText, setFeedbackText] = useState<string>("");
    const [submitButtonLoading, { toggle: toggleSubmitButton }] = useDisclosure(false);


    const htmlColorScheme = useHtmlColorScheme();

    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));


    const handleFeedbackTypeClick = (type: string) => {
        setFeedbackType(type);
        nextStep();

    };

    // TODO: Makes AJAX call to backend with project id and feedback data
    const submitFeedback = () => {

        console.log("Submitting feedback widget feedback: ", feedbackText);

        // console.log(`Submitting feedback for projeect ${props.projectID}, with feedback type: ${feedbackType}`);
        // const payload = {
        //     project_id: props.projectID,
        //     feedback_type: feedbackType,
        // }
    }

    const [showConfetti, setShowConfetti] = useState(true);

    const getPlaceholder = (type: string) => {
        switch (type.toLowerCase()) {
            case "bug":
                return "What's the bug and how can we reproduce it?"
            case "feature":
                return "What's your feature? How would it help Footprint's users?"
            case "other":
                return "What's on your mind? We're open to new ideas and suggestions."
        }
    }

    const getTitle = (type: string) => {

        switch (type.toLowerCase()) {
            case "bug":
                return {
                    title: "Bug Report",
                    icon: IconBug, 
                }
            case "feature":
                return {
                    title: "Feature Request",
                    icon: IconTargetArrow,
                }
            case "other":
                return {
                    title: "Feedback",
                    icon: IconHelpHexagonFilled,
                }
        }

    }




    return (
        
        <WidgetWrapper>
            <div id="floating-widget" className="fixed bottom-6 right-6 z-50">
                <Popover 
                    closeOnClickOutside={false}

                    offset={{
                        crossAxis: -30,
                        mainAxis: 15,
                    }}
                    shadow="sm"
                    radius="lg"
                    position="top-end"

                >

                    <Popover.Target>

                        
                        <ActionIcon 
                            // className={`${classes.actionIcon} rounded-full p-8`}
                            size={53}
                            radius="xl"
                            color="#ffb263"
                            // className="transition-all duration-100 shadow-lg hover:shadow-xl"
                        >
                            <IconBulbFilled size={30} className="text-white" />
                        </ActionIcon>


                    </Popover.Target>

                    <Popover.Dropdown
                        styles={{
                            dropdown: {
                                // width: "20rem",
                                width: rem("23rem"),
                                backgroundColor: htmlColorScheme == "dark" ? '#1f1f1f' : "#FFFFFF",
                                // width: rem(20)
                                // padding: 0,
                            }
                        }}
                    >
                        <FeedbackWidget />
                    </Popover.Dropdown>



                </Popover>

            </div>


        </WidgetWrapper>

    );

}