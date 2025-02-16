import { Button } from '@mantine/core';
import classes from "../../styles/StickySidebar.module.css";


{/* Sticky sidebar, stays pinned to the right side of the screen */}
export const StickySidebarWidget = () => {
    return (
        <div className={classes.sidebarContainer}>
            <div className={classes.buttonWrapper}>
                <Button
                    className={classes.sidebarButton}
                >
                    Sidebar Button
                </Button>
            </div>
        </div>
    );
}