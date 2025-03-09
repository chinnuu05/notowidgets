import { useState, useEffect } from "react";
import { Modal, rem, Button, Group, ActionIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react";


const WIDGET_VERSION = "0.0.1" 



export const ChangelogPopupWidget = () => {

    const [opened, { open, close }] = useDisclosure(true);

    const ChangelogPopup = () => {
        return (
            <Modal
            opened={opened}
            onClose={close}
            size={"44rem"}
            closeOnClickOutside={false}
            withCloseButton={true}
            closeButtonProps={{
                icon: <IconX size={24} className="text-black"/>
            }}
            

            >

                {/* <Modal.CloseButton className="absolute top-4 right-4">
                    <div>
                        <ActionIcon color="black" size="lg" variant="transparent">
                            <IconX className="text-black"/> 
                        </ActionIcon>
                    </div>
                </Modal.CloseButton> */}

                <div>




                    <div className="px-4 py-8">
                        <div className="justify-start justify-items-start text-left">
                            <div className="text-mantine-gray-800 text-2xl font-semibold">Welcome back, Praneeth!</div>
                            <div className="text-mantine-gray-600 text-lg">Here's what's new since your last visit</div>
                        </div>

                        <div>

                        </div>
                        
                    </div>

                    <div>
                        <div></div>
                    </div>






                </div>







                

            </Modal>
        )
    }


    return (
        <div>


            <ChangelogPopup></ChangelogPopup>








            
        </div>
    )
}