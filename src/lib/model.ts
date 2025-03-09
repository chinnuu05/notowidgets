

export interface NotofoxConfig {
    project: string;
    defaultTheme: "light" | "dark";
    locale: string;
    containerId?: string;
    widgetType: "changelog" | "feedback" | "help" | "aio" | "view";
    triggerConfig?: TriggerConfig;


}

/* Which trigger ui to show the Feedback Widget with */
export interface TriggerConfig {
    /* 
        Custom type is a "feedback-widget" attribute the user can place on any element in his app
        to trigger the feedback widgets to show up
    */
    type: "floating" | "feedback-btn" | "sidebar" | "custom";

}


export interface FloatingFeedbackWidgetProps {
    iconColor: string;
    bgColor: string;
    icon: React.ReactNode;
}

