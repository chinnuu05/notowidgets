import React, { useState, useContext, useEffect } from 'react';
import Confetti from 'react-confetti'
// import { useWindowSize } from 'react-use'
import { useViewportSize } from '@mantine/hooks';
import { useHtmlColorScheme } from '@src/components/ThemeToggle';
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


import { Button, Stepper, rem, ScrollArea, Textarea, TextInput, Select, Group, ActionIcon, Switch, Popover } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { useWindowSize } from 'react-use';
import classes from "@src/styles/FloatingFeedbackWidget.module.css";
import { NotoBadge } from '@src/components/NotoBadge';





{/* Takes list of tags and their emojis/icons, showConfetti */}
export const FeedbackWidget = () => {


    const { width, height } = useWindowSize()
    const [feedbackType, setFeedbackType] = useState<string>("");
    const [feedbackText, setFeedbackText] = useState<string>("");
    const [submitButtonLoading, { toggle: toggleSubmitButton }] = useDisclosure(false);


    const htmlColorScheme = useHtmlColorScheme();

    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));


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

        <div className="block">

            {
                active > 0 
                ?
                <div className="flex justify-between items-center">
                    <button 
                        onClick={prevStep}
                        className={`p-2 rounded-full dark:hover:bg-mantine-dark-600 hover:bg-gray-100 transition-colors ${active != 1 ? 'invisible' : ''}`}
                    >
                        <IconArrowLeft size={20} />
                    </button>

                        {
                            active == 1
                            ?
                            <div>
                                <div className="flex text-lg font-500 items-center">
                                    {/* <div>
                                        {Icon && <Icon size={22} />}
                                    </div> */}


                                    <div>
                                        {getTitle(feedbackType)?.title}
                                    </div>


                                </div>
                            </div>
                            :
                            null
                        }
                    <button 
                        // onClick={onClose}
                        className="p-2 items-end rounded-full dark:hover:bg-mantine-dark-600 hover:bg-gray-100 transition-colors"
                    >
                        <IconX size={20} />
                    </button>
                </div>
                    :
                    null

            }

            <div className="flex w-full">

                <Stepper
                    data-autofocus
                    active={active}
                    onStepClick={setActive}
                    className="w-full px-2.5"
                    styles={{
                        root: { backgroundColor: 'transparent' },
                        separator: { display: 'none' },
                        stepBody: { display: 'none' },
                        step: { display: 'none' },
                        stepIcon: { display: 'none' },
                        stepCompletedIcon: { display: 'none' },
                        stepLabel: { display: 'none' },
                        stepDescription: { display: 'none' }
                    }}
                >
                    <Stepper.Step>

                        <div className="space-y-4 w-full">

                            <div className="justify-start dark:text-mantine-gray-100 text-[#343a40] text-left flex font-semibold text-lg">
                                Share your feedback
                            </div>


                            <div className="grid grid-cols-1 grid-rows-3 gap-y-2.5 w-full">

                            

                                <div 
                                    onClick={() => {
                                        setFeedbackType("bug");
                                        nextStep();
                                    }}
                                    className={`border-gray-200 hover:border-mantine-gray-600/60 border-2 hover:cursor-pointer flex w-full col-span-1 transition-all duration-200 rounded-lg px-2.5 py-1 hover:dark:border-mantine-dark-300 dark:border-mantine-dark-500 dark:bg-mantine-dark-600 bg-white justify-between items-center`}>

                                    <div className="py-1 flex w-full space-x-2.5 items-center">
                                        <div className={`${classes.feedbackIconContainer} flex justify-center items-center text-center bg-mantine-gray-100/40 dark:bg-mantine-dark-500/70 rounded-lg`}>
                                            <div className={classes.feedbackIcon}>
                                                🐛
                                            </div>
                                        </div>

                                        <div className={`${classes.feedbackText} text-mantine-gray-700 dark:text-mantine-gray-400`}>
                                            Bug Report
                                        </div>
                                    </div>

                                    <div className="dark:text-mantine-dark-200 text-mantine-gray-700">
                                        <IconChevronRight style={{ width: rem(20), height: rem(20)}}></IconChevronRight>
                                    </div>

                                </div>


                                
                                <div 
                                    onClick={() => {
                                        setFeedbackType("feature");
                                        nextStep();
                                    }}
                                    className={`border-gray-200 hover:border-mantine-gray-600/60 border-2 hover:cursor-pointer flex w-full col-span-1 transition-all duration-200 rounded-lg px-2.5 py-1 hover:dark:border-mantine-dark-300 dark:border-mantine-dark-500 dark:bg-mantine-dark-600 bg-white justify-between items-center`}>

                                    <div className="flex w-full space-x-2.5 items-center">

                                        <div className={`${classes.feedbackIconContainer} flex justify-center items-center text-center bg-mantine-gray-100/40 dark:bg-mantine-dark-500/70 rounded-lg`}>
                                            <div className={classes.feedbackIcon}>
                                                💡
                                            </div>
                                        </div>

                                        <div className={`${classes.feedbackText} text-mantine-gray-700 dark:text-mantine-gray-400`}>
                                            Feature Request 
                                        </div>
                                    </div>

                                    <div className="dark:text-mantine-dark-200 text-mantine-gray-700">
                                        <IconChevronRight style={{ width: rem(20), height: rem(20)}}></IconChevronRight>
                                    </div>

                                </div>


                                
                                <div 
                                    onClick={() => {
                                        setFeedbackType("question");
                                        nextStep();
                                    }}
                                    className={`border-gray-200 hover:border-mantine-gray-600/60 border-2 hover:cursor-pointer flex w-full col-span-1 transition-all duration-200 rounded-lg px-2.5 py-1 hover:dark:border-mantine-dark-300 dark:border-mantine-dark-500 dark:bg-mantine-dark-600 bg-white justify-between items-center`}>

                                    <div className="flex w-full space-x-2.5 items-center">

                                        <div className={`${classes.feedbackIconContainer} flex justify-center items-center text-center bg-mantine-gray-100/40 dark:bg-mantine-dark-500/70 rounded-lg`}>
                                            <div className={classes.feedbackIcon}>
                                                ❓
                                            </div>
                                        </div>

                                        <div className={`${classes.feedbackText} text-mantine-gray-700 dark:text-mantine-gray-400`}>
                                            Question
                                        </div>
                                    </div>

                                    <div className="dark:text-mantine-dark-200 text-mantine-gray-700">
                                        <IconChevronRight style={{ width: rem(20), height: rem(20)}}></IconChevronRight>
                                    </div>

                                </div>
                            
                            

                            </div>

                        </div>

                    </Stepper.Step>

                    <Stepper.Step>
                        <div className="space-y-4 w-full">
                            <div className="w-full min-w-xl">
                                <Textarea
                                    onChange={(e) => {
                                        console.log("Setting new feedback text: ", e.target.value);
                                        setFeedbackText(e.target.value);
                                    }}
                                    color="#ffb263"
                                    size="md"
                                    radius="md"
                                    placeholder={getPlaceholder(feedbackType)}
                                    className="w-full"
                                    minRows={4}
                                    styles={{
                                        input: {
                                            width: '100%',
                                            // minWidth: '300px',
                                            minHeight: '120px',
                                            '&:focus': {
                                                borderColor: '#ffb263'
                                            }
                                        }
                                    }}
                                />
                            </div>

                            <div className="items-center flex w-full gap-2">
                                <div className="flex-1">
                                    <Button 
                                        loaderProps={{ type: 'dots' }}
                                        loading={submitButtonLoading}
                                        onClick={() => {

                                            submitFeedback();
                                            toggleSubmitButton();

                                            setTimeout(() => {
                                                toggleSubmitButton();
                                                nextStep();

                                            }, 1000)

                                        }}
                                        fullWidth 
                                        color="#ffb263" 
                                        radius="md"
                                        >
                                            Submit Feedback
                                        </Button>




                                </div>

                                <ActionIcon color="#ffb263" radius="md" variant="light" size="lg">
                                    <IconCamera size={22} stroke={1.5} />
                                </ActionIcon>
                            </div>


                        </div>

                    </Stepper.Step>

                    <Stepper.Completed>
                        <div className="w-full">
                            {showConfetti && (
                                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1000 }}>
                                    <Confetti
                                        width={width}
                                        height={height}
                                        recycle={false}
                                    />
                                </div>
                            )}
                            <div className="space-y-4">

                                <div className="order-1 flex mx-auto justify-center">
                                    <IconCircleCheckFilled className="text-orange-500/80" size={48}></IconCircleCheckFilled> 
                                </div>


                                <div className="order-2 font-medium text-xl">
                                    Your report has been received!
                                </div>


                            </div>
                        </div>
                    </Stepper.Completed>


                </Stepper>

            </div>

            <div className="pt-4">
                <NotoBadge></NotoBadge>
            </div>

        </div>


        

    )
}