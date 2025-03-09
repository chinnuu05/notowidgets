import { NotofoxConfig } from "./lib/model";


export class Notofox {

    private config: NotofoxConfig = {
        project: "Notofox",
        defaultTheme: "light",
        locale: "en",
        widgetType: "feedback",
        triggerConfig: {
            type: "floating"
        },
    };


    public Notofox( { config } : {  config: NotofoxConfig }) {

        this.config = config;

        console.log("In Notofox constructor");
    }


}   