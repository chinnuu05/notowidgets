import React, { useRef, useState } from 'react';
import { Popover, MantineSize, rem } from '@mantine/core';
import { FcLike } from 'react-icons/fc';
import classes from '../../styles/GiveFeedbackButton.module.css';
import { FeedbackWidget } from '../FeedbackWidget';
import { WidgetWrapper } from '../WidgetWrapper';
import { useHtmlColorScheme } from '../ThemeToggle';
// Embeddable widget

interface GiveFeedbackButtonProps {
    size?: MantineSize;
}

export const GiveFeedbackButton = ({ size = 'sm' }: GiveFeedbackButtonProps) => {
    const feedbackButtonRef = useRef<HTMLAnchorElement>(null);
    const htmlColorScheme = useHtmlColorScheme();
    const [ widgetOpened, setWidgetOpened ] = useState(false);

    // Size-based styles
    const getSizeStyles = (size: MantineSize) => {
        const sizes = {
            xs: { padding: '6px 12x', fontSize: '14px' },
            sm: { padding: '6px 12px', fontSize: '14px' },
            md: { padding: '8px 16px', fontSize: '16px' },
            lg: { padding: '12px 20px', fontSize: '18px' },
            xl: { padding: '16px 24px', fontSize: '20px' },
        };
        return sizes[size];
    };

    // Icon size mapping
    const getIconSize = (size: MantineSize) => {
        const sizes = {
            xs: 12,
            sm: 14,
            md: 17.5,
            lg: 18,
            xl: 20,
        };
        return sizes[size];
    };

    const sizeStyles = getSizeStyles(size);
    const iconSize = getIconSize(size);

    return (

        <a 
            ref={feedbackButtonRef}
            href="#" 
            // Default is w-fit but user can choose to set a custom width or full width 

            className={`${classes.giveFeedbackButton} w-fit items-center px-4 py-2`}
            style={{
                ...sizeStyles,
                display: 'flex',
                alignItems: 'center',
                gap: size === 'xs' ? '4px' : size === 'sm' ? '6px' : size === 'lg' ? '10px' : size === 'xl' ? '12px' : '8px',
            }}
        >
            <FcLike 
                className={`${classes.linkIcon} mr-1`} 
                size={iconSize}
                style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
            />
            <span>Give feedback</span>
        </a>

        /*
        <WidgetWrapper>
            <Popover
                shadow="sm"
                radius="md"
                position="right"
                offset={{  crossAxis: 75, mainAxis: 10 }}
                withinPortal={true}
                closeOnClickOutside={true}
            >
                <Popover.Target>
                    <a 
                        ref={feedbackButtonRef}
                        href="#" 
                        // Default is w-fit but user can choose to set a custom width or full width 

                        className={`${classes.giveFeedbackButton} w-fit items-center px-4 py-2`}
                        style={{
                            ...sizeStyles,
                            display: 'flex',
                            alignItems: 'center',
                            gap: size === 'xs' ? '4px' : size === 'sm' ? '6px' : size === 'lg' ? '10px' : size === 'xl' ? '12px' : '8px',
                        }}
                    >
                        <FcLike 
                            className={`${classes.linkIcon} mr-1`} 
                            size={iconSize}
                            style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
                        />
                        <span>Give feedback</span>
                    </a>
                </Popover.Target>

                <Popover.Dropdown
                        styles={{
                            dropdown: {
                                // width: "20rem",
                                width: rem("21.5rem"),
                                backgroundColor: htmlColorScheme == "dark" ? '#1f1f1f' : "#FFFFFF",
                                // width: rem(20)
                                // padding: 0,
                            }
                        }}
                
                >
                    <FeedbackWidget setPopoverOpened={setWidgetOpened}/> 
                </Popover.Dropdown>
            </Popover>
        </WidgetWrapper>
        */
    );
};