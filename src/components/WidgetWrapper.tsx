import { createTheme, MantineColorsTuple, MantineProvider, useMantineTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import '../input.css';

import React from "react";

export function WidgetWrapper( { children } : { children: React.ReactNode }) {

    const appTheme: MantineColorsTuple = [
        "#fff3e0",
        "#ffe7ca",
        "#ffcd99",
        "#ffb263",
        "#ff9a36",
        "#ff8b18",
        "#ff8405",
        "#e47100",
        "#cc6300",
        "#b15400"
    ]

    const theme = createTheme({
        /* Put your mantine theme override here */
        colors: {
            appTheme

        },
        primaryColor: 'appTheme'
    });


    return (

        <MantineProvider theme={theme}>

            
            

            <div>
                {children}
            </div>
        </MantineProvider>

    )
}