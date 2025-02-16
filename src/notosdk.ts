import { NotofoxConfig } from "./lib/model";

// Notofox SDK class and initialization script
(function(window: any, document: any) {
    class Notofox {
        private static instance: Notofox;
        private queue: Array<[string, NotofoxConfig]> = [];
        
        private constructor() {
            // Private constructor to enforce singleton
        }

        public static getInstance(): Notofox {
            if (!Notofox.instance) {
                Notofox.instance = new Notofox();
            }
            return Notofox.instance;
        }

        private initializeSDK(src: string): void {
            console.log("[+] Initializing Notofox SDK");
            
            // Load React and ReactDOM first
            const reactScript = document.createElement('script');
            reactScript.src = 'https://unpkg.com/react@18/umd/react.production.min.js';
            reactScript.type = 'text/javascript';
            
            const reactDomScript = document.createElement('script');
            reactDomScript.src = 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js';
            reactDomScript.type = 'text/javascript';
            
            // Main widget script
            const widgetScript = document.createElement('script');
            widgetScript.src = src;
            widgetScript.async = true;
            widgetScript.type = 'text/javascript';
            widgetScript.id = 'notofox-sdk';
            
            widgetScript.onload = () => {
                console.log("[+] Widget script loaded from: " + src);
                this.initWidget();
            };
            
            widgetScript.onerror = () => {
                console.error('Failed to load widget bundle from: ' + src);
            };
            
            // Chain the loading sequence
            reactScript.onload = () => {
                console.log("[+] React loaded");
                document.head.appendChild(reactDomScript);
            };
            
            reactDomScript.onload = () => {
                console.log("[+] ReactDOM loaded");
                document.head.appendChild(widgetScript);
            };
            
            // Start the loading sequence
            document.head.appendChild(reactScript);
        }

        private initWidget(): void {

            if (window.NotofoxWidget) {
                window.NotofoxWidget.init({
                    project: 'test-project',
                    defaultTheme: 'light',
                    locale: 'en',
                    containerId: 'notofox-widget',
                });
            }

            else {
                console.log("window.NotofoxWidget is not defined");
            }
        }

        private processQueue(): void {
            while (this.queue.length > 0) {
                const [action, config] = this.queue.shift()!;
                if (action === 'initialize_widget' && window.NotofoxWidget) {
                    console.log("[+] Initializing widget with config:", config);
                    window.NotofoxWidget.init(config);
                }
            }
        }

        public push(action: string, config: NotofoxConfig): void {
            this.queue.push([action, config]);
            
            if (!document.getElementById('notofox-sdk')) {
                console.log("Initializing TestWidget widget...");
                const widgetBundleUrl = "../scripts/TestWidget.umd.js";
                this.initializeSDK(widgetBundleUrl);
            } else if (window.NotofoxWidget) {
                console.log("[+] Widget already initialized, processing queue...");
                this.processQueue();
            }
        }
    }

    // Initialize the global Notofox function
    if (typeof window.Notofox !== 'function') {
        window.Notofox = function(action: string, config: NotofoxConfig) {
            const instance = Notofox.getInstance();
            instance.push(action, config);
        };
    }

})(window, document);