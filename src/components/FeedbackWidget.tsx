import React, { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { 
  IconArrowLeft,
  IconX,
  IconChevronRight,
  IconCircleCheckFilled,
  IconBug,
  IconTargetArrow,
  IconHelpHexagonFilled,
  IconCamera
} from "@tabler/icons-react";
import { 
  Button, 
  Stepper, 
  rem, 
  Textarea 
} from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { NotoBadge } from './NotoBadge';
import classes from "../styles/FloatingFeedbackWidget.module.css";
import { useHtmlColorScheme } from './ThemeToggle';

export const FeedbackWidget = ({ setPopoverOpened }: { setPopoverOpened: any }) => {
  const { width, height } = useWindowSize();
  const htmlColorScheme = useHtmlColorScheme();

  const [active, setActive] = useState(0);
  const [feedbackType, setFeedbackType] = useState<string>("");
  const [feedbackText, setFeedbackText] = useState<string>("");
  const [submitButtonLoading, { toggle: toggleSubmitButton }] = useDisclosure(false);
  const [showConfetti, setShowConfetti] = useState(true);

  const stepperRef = useRef<HTMLDivElement>(null);
  const [stepperHeight, setStepperHeight] = useState<number>(0);

  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const sample_boards = [
    { name: "Bug Report", icon: "🐛", id: "bug" },
    { name: "Feature Request", icon: "💡", id: "feature" },
    { name: "Question", icon: "❓", id: "question" },
  ];

  const getPlaceholder = (type: string) => {
    switch (type.toLowerCase()) {
      case "bug": return "What's the bug and how can we reproduce it?";
      case "feature": return "What's your feature? How would it help users?";
      case "other": return "What's on your mind? We're open to suggestions.";
      default: return "";
    }
  };

  const getTitle = (type: string) => {
    switch (type.toLowerCase()) {
      case "bug": return { title: "Bug Report", icon: IconBug };
      case "feature": return { title: "Feature Request", icon: IconTargetArrow };
      case "other": return { title: "Feedback", icon: IconHelpHexagonFilled };
      default: return { title: "", icon: null };
    }
  };

  // Measure the stepper height once to keep it fixed
  useEffect(() => {
    if (stepperRef.current) {
      setStepperHeight(stepperRef.current.scrollHeight);
    }
  }, []);

  const submitFeedback = () => {
    console.log("Submitting feedback:", feedbackText);
    // TODO: send feedback to backend
  };

  return (
    <div className="block">

      {/* Header */}
      {active > 0 && (
        <div className="flex justify-between items-center mb-2">
          <button
            onClick={prevStep}
            className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-mantine-dark-600 transition-colors ${active !== 1 ? 'invisible' : ''}`}
          >
            <IconArrowLeft size={20} />
          </button>

          {active === 1 && (
            <div className="flex items-center text-lg font-medium">
              {getTitle(feedbackType)?.title}
            </div>
          )}

          <button
            onClick={() => setPopoverOpened(false)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-mantine-dark-600 transition-colors"
          >
            <IconX size={20} />
          </button>
        </div>
      )}

      {/* Stepper */}
      <div
        ref={stepperRef}
        className="transition-[height] duration-300 ease-in-out w-full"
        style={{ minHeight: 150 }}
      >
        <Stepper
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
          {/* Step 1: Select Feedback */}
          <Stepper.Step>
            <div className="space-y-4 w-full">
              <div className="text-left text-lg font-semibold dark:text-mantine-gray-100 text-[#343a40]">
                Share your feedback
              </div>

              <div className="grid grid-cols-1 grid-rows-3 gap-y-3 w-full">
                {sample_boards.map((board) => (
                  <div
                    key={board.id}
                    onClick={() => { setFeedbackType(board.id); nextStep(); }}
                    className={`border-2 border-gray-200 hover:border-gray-300 dark:border-mantine-dark-500 dark:bg-mantine-dark-600 hover:dark:border-mantine-dark-300 bg-white flex justify-between items-center rounded-lg px-2.5 py-1 transition-all duration-200 cursor-pointer`}
                  >
                    <div className="flex items-center space-x-2.5 py-1 w-full">
                      <div className={`${classes.feedbackIconContainer} flex justify-center items-center text-center bg-mantine-gray-100/40 dark:bg-mantine-dark-500/70 rounded-lg`}>
                        <div className={classes.feedbackIcon}>{board.icon}</div>
                      </div>
                      <div className={`${classes.feedbackText} text-mantine-gray-700 dark:text-mantine-gray-400`}>
                        {board.name}
                      </div>
                    </div>
                    <IconChevronRight style={{ width: rem(20), height: rem(20) }} />
                  </div>
                ))}
              </div>
            </div>
          </Stepper.Step>

          {/* Step 2: Write Feedback */}
          <Stepper.Step>
            <div className="space-y-4 w-full">
              <Textarea
                onChange={(e) => setFeedbackText(e.target.value)}
                color="#ffb263"
                size="md"
                radius="md"
                placeholder={getPlaceholder(feedbackType)}
                minRows={4}
                className="w-full"
                styles={{
                  input: {
                    width: '100%',
                    minHeight: '120px',
                    '&:focus': { borderColor: '#ffb263' },
                  },
                }}
              />
              <div className="flex gap-2 items-center w-full">
                <Button
                  loaderProps={{ type: 'dots' }}
                  loading={submitButtonLoading}
                  onClick={() => {
                    submitFeedback();
                    toggleSubmitButton();
                    setTimeout(() => {
                      toggleSubmitButton();
                      nextStep();
                    }, 1000);
                  }}
                  fullWidth
                  color="#ffb263"
                  radius="md"
                >
                  Submit Feedback
                </Button>
                <IconCamera size={22} className="text-gray-600 dark:text-mantine-gray-300" />
              </div>
            </div>
          </Stepper.Step>

          {/* Step 3: Completed */}
          <Stepper.Completed>
            <div className="w-full space-y-4">
              {showConfetti && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1000 }}>
                  <Confetti width={width} height={height} recycle={false} />
                </div>
              )}
              <div className="flex flex-col items-center space-y-4">
                <IconCircleCheckFilled size={48} className="text-orange-500/80" />
                <div className="font-medium text-xl">Your report has been received!</div>
              </div>
            </div>
          </Stepper.Completed>
        </Stepper>
      </div>

      {/* Badge */}
      <div className="pt-4">
        <NotoBadge />
      </div>
    </div>
  );
};
