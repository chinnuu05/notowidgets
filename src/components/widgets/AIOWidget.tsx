import React, { useState, useEffect } from "react"; 
import { Button, Text, Group, ActionIcon, Popover } from "@mantine/core";
import { IconHelpCircleFilled, IconX } from "@tabler/icons-react";



export const AIOWidget = () => {
    return ( 

        <div className="rounded-t-lg border border-mantine-border bg-white shadow-sm w-full h-full overflow-hidden">

            <div className="px-24 py-12 flex flex-col gap-y-4"> 

                <div>

                    <div className="block space-y-2">
                        <div className="text-2xl font-semibold text-mantine-gray-500">
                            Hey Praneeth! 👋
                        </div>

                        <div className="text-2xl font-semibold text-white">
                            How can we help you?
                        </div>
                    </div>




                    {/* Help center header and categories */}
                    <div>


                        

                        
                    </div>


                </div>



                <div>



                </div>
                
            </div>



        </div>

    )
}