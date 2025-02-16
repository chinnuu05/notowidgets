import { rem } from "@mantine/core";
import classes from "../styles/FloatingFeedbackWidget.module.css";


export const NotoBadge = () => (
    <div className={`space-x-1 flex w-full items-center justify-center mx-auto dark:text-mantine-gray-300 text-gray-500`}>
        <a
        target="_blank"
        href="#"
        className={`${classes.poweredByBadge} transition-all duration-100 hover:-translate-y-0.5 border border-white hover:border-mantine-border dark:border-mantine-dark-800 dark:hover:border-mantine-dark-500 hover:shadow-xs rounded-lg px-2 py-1 flex space-x-1 items-center group`}
        >
            <div>Powered by</div>
            <div className="flex space-x-1 items-center">
                <img className="object-fit" style={{ width: rem(15), height: rem(15)}} src={`images/notofox.svg`}></img>
                <div className="ml-0.5 text-orange-500 font-semibold duration-100 transition-all">notofox</div>
            </div>
        </a>
    {/* <div>{`, a new app I just launched <3`}</div> */}
    </div>

)