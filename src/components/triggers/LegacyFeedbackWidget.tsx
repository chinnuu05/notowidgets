
{/* The original feedback widget for Notofox */}

import React, { useState, useContext, useEffect } from 'react';
import Confetti from 'react-confetti'
// import { useWindowSize } from 'react-use'
import { useViewportSize } from '@mantine/hooks';


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
    IconCircleCheckFilled
} from "@tabler/icons-react"

interface FeedbackWidgetProps {
    buttonRect: DOMRect;
    // ID to submit feedback to 
    projectID: string;
    onClose: () => void;
}
import { Button, Stepper, rem, ScrollArea, Textarea, TextInput, Select, Group, ActionIcon, Switch } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { useWindowSize } from 'react-use';





export function FeedbackWidget({ props } : { props: FeedbackWidgetProps }) {

    // console.log("Got feedback widget props: ", JSON.stringify(props));



    // for confetti
    // const { height, width } = useViewportSize();
    const { width, height } = useWindowSize()
    const API_URL = "http://localhost:8000/api/collect-feedback/"

    const types = [
        "Issue",
        "Idea",
        "Feedback"
    ]


    const [submitButtonLoading, { toggle: toggleSubmitButton }] = useDisclosure(false);
    const [loading, { toggle: toggleSwitch }] = useDisclosure(false);

    const [feedbackType, setFeedbackType] = useState<string>("");
    const [feedbackText, setFeedbackText] = useState<string>("");

    const handleFeedbackTypeClick = (type: string) => {
        setFeedbackType(type);
        nextStep();

    };

    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

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
    const Icon = getTitle(feedbackType)?.icon;


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

    useEffect(() => {
        if (active === 2) {
            const timer = setTimeout(() => {
                setShowConfetti(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [active]);

    return (
        <div className={`${active == 1 ? 'pt-3' : ''} pb-1`}>

            {
                active > 0 
                ?
                <div className="flex justify-between items-center">
                <button 
                    onClick={prevStep}
                    className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${active != 1 ? 'invisible' : ''}`}
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
                    className="p-2 items-end rounded-full hover:bg-gray-100 transition-colors"
                >
                    <IconX size={20} />
                </button>
            </div>
                :
                null

            }



            <div className="">



                <div className="">

                    <div>

                    <Stepper
                            active={active}
                            onStepClick={setActive}
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

                                <div className="space-y-4 px-8">

                                    <div className="justify-center mx-auto flex font-medium text-xl">
                                        Share your feedback
                                    </div>


                                    <div className="grid grid-cols-12 gap-x-6">
                                    
                                        <div className="col-span-4 cursor-pointer" onClick={() => handleFeedbackTypeClick("Bug")}>
                                            <div className="space-y-2">
                                                <div className={`${feedbackType == "bug" ? "border-gray-400" : " "} bg-gray-100 transition-all duration-200 border-2 border-gray-200 hover:border-gray-400 rounded-lg p-4`}>
                                                    {
                                                        feedbackType == "bug"
                                                        ?
                                                        <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#9ca3af" d="M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"/></svg>
                                                        // <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#B197FC" d="M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"/></svg>

                                                        :
                                                        <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#9ca3af" d="M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"/></svg>
                                                    }
                                                    
                                                </div>
                                                <div>Issue</div>
                                            </div>
                                        </div>
                                        <div className="col-span-4 cursor-pointer" onClick={() => handleFeedbackTypeClick("Feature")}>
                                            <div className="space-y-2">
                                            <div className={`${feedbackType == "feature" ? "border-gray-400" : " "} bg-gray-100 transition-all duration-200 border-2 border-gray-200 hover:border-gray-400 rounded-lg p-4`}>

                                                    {
                                                        feedbackType == "feature"
                                                        ?
                                                        // <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#B197FC" d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/></svg>
                                                        <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#9ca3af" d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/></svg>

                                                        :
                                                        <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#9ca3af" d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/></svg>
                                                    }
                                                                                                
                                                
                                                </div>

                                                <div>Feature</div>
                                            </div>
                                        </div>
                                        <div className="col-span-4 cursor-pointer" onClick={() => handleFeedbackTypeClick("Other")}>
                                            <div className="space-y-2">
                                            <div className={`${feedbackType == "other" ? "border-gray-400" : " "} bg-gray-100 transition-all duration-200 border-2 border-gray-200 hover:border-gray-400 rounded-lg p-4`}>
                                                    
                                                    {
                                                        feedbackType == "other"
                                                        ?
                                                        <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#9ca3af" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>

                                                        // <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#B197FC" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                                                        :
                                                        <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#9ca3af" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                                                    }

                                                </div>
                                                
                                                
                                                <div>Feedback</div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </Stepper.Step>

                            <Stepper.Step>
                                <div className="space-y-4 px-8 py-4 w-full">
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
                                                    minWidth: '300px',
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

                                        <ActionIcon color="#ff9a36" radius="md" variant="light" size="lg">
                                            <IconCamera size={22} stroke={1.5} />
                                        </ActionIcon>
                                    </div>


                                </div>

                            </Stepper.Step>

                            <Stepper.Completed>
                                <div className="px-8 py-4 w-full">
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

                    <div className={`${active == 1 ? '' : 'pt-3.5'} space-x-1 flex w-full items-center justify-center mx-auto text-sm text-gray-500`}>
                            <a
                                target="_blank"
                                href="#"
                                className="transition-all duration-200 hover:-translate-y-0.5 border border-white hover:border-mantine-border hover:shadow-xs text-sm  rounded-lg p-2 flex space-x-1 items-center group"
                            >
                                <div className="">Powered by</div>
                                <div className="flex space-x-1 items-center">
                                    <img className="object-fit" style={{ width: rem(15), height: rem(15)}} src={`images/notofox.svg`}></img>
                                    <div className="ml-0.5 text-orange-500 font-semibold duration-200 transition-all">notofox</div>
                                </div>
                            </a>

                        {/* <div>{`, a new app I just launched <3`}</div> */}
                    </div>


                </div>

        </div>
        </div>
        
    )
    
}