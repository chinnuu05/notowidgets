

export interface NotofoxConfig {
    project: string;
    defaultTheme: "light" | "dark";
    locale: string;
    containerId?: string;
}


export interface FloatingFeedbackWidgetProps {
    iconColor: string;
    bgColor: string;
    icon: React.ReactNode;
}

