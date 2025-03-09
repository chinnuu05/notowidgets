import { NotofoxConfig } from "./lib/model";


export class Notofox {

    private config!: NotofoxConfig;



    public Notofox( { config } : {  config: NotofoxConfig }) {

        this.config = config;

        console.log("In Notofox constructor");
    }


}   