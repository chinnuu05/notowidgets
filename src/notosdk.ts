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
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.id = 'notofox-sdk';
            
            script.onload = () => this.processQueue();
            script.onerror = () => {
                console.error('Failed to load widget bundle from: ' + src);
            };
            
            document.head.appendChild(script);
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
                const widgetBundleUrl = "../scripts/TestWidget.umd.js";
                this.initializeSDK(widgetBundleUrl);
            } else if (window.NotofoxWidget) {
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