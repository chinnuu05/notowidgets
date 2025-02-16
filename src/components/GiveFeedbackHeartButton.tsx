import React, { useRef, useState } from 'react';
import { Popover, MantineSize } from '@mantine/core';
import { FcLike } from 'react-icons/fc';
import classes from '@src/styles/GiveFeedbackButton.module.css';
import { FeedbackWidget } from '@src/components/FeedbackWidget';

// Embeddable widget

interface GiveFeedbackButtonProps {
    size?: MantineSize;
}

export const GiveFeedbackButton = ({ size = 'sm' }: GiveFeedbackButtonProps) => {
    const feedbackButtonRef = useRef<HTMLAnchorElement>(null);

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

    const sizeStyles = getSizeStyles(size);

    return (
        <div>
            <Popover
                shadow="sm"
                radius="md"
                position="right"
                offset={{ mainAxis: -75, crossAxis: -150 }}
                withinPortal={true}
                closeOnClickOutside={true}
            >
                <Popover.Target>
                    <a 
                        ref={feedbackButtonRef}
                        href="#" 
                        className={`${classes.giveFeedbackButton} items-center px-4 py-2`}
                        style={{
                            ...sizeStyles,
                            display: 'flex',
                            alignItems: 'center',
                            gap: size === 'xs' ? '4px' : size === 'sm' ? '6px' : size === 'lg' ? '10px' : size === 'xl' ? '12px' : '8px',
                        }}
                    >
                        <FcLike 
                            className={`${classes.linkIcon} mr-1`} 
                            size={size === 'xs' ? 12 : size === 'sm' ? 10 : size === 'lg' ? 14 : size === 'xl' ? 18 : 15} 
                        />
                        <span>Give feedback</span>
                    </a>
                </Popover.Target>

                <Popover.Dropdown>
                    {/* <DefaultFeedbackWidget></DefaultFeedbackWidget> */}
                    <FeedbackWidget/>   
                </Popover.Dropdown>
            </Popover>
        </div>
    );
};