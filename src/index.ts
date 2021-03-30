import { defaultConfig } from "./constant";
import { IConfig } from "./interfaces";

export default class Widget {

    _config: IConfig;

    constructor(config: IConfig) {
        this._config = { ...config, ...defaultConfig };
    }

    async create() {
        const config = this._config;
        const el = document.createElement('div');
        el.className = "matic-widget";
        const iframe = await createIframe(`https://wallet-v1.matic.today/widgets/v1/deposit/?embed=true&wappId=${config.appId}`);
        el.appendChild(iframe);
    }
}



function createIframe(src: string) {
    return new Promise<HTMLIFrameElement>((res) => {
        const iframe = document.createElement('iframe');
        iframe.src = src;
        iframe.onload = () => {
            res(iframe)
        };
    });
}