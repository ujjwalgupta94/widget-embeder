import { defaultConfig } from "./constant";
import { IConfig } from "./interfaces";
import "./styles/index.scss";

export default class Widget {

    _config: IConfig;

    constructor(config: IConfig) {
        this._config = { ...config, ...defaultConfig };
    }

    async create() {
        const config = this._config;
        const el = document.createElement('div');
        el.className = "matic-widget";
        const iframe = document.createElement('iframe');
        iframe.src = `https://wallet-v1.matic.today/widgets/v1/deposit/?embed=true&wappId=${config.appId}`;
        el.appendChild(iframe);
        document.body.appendChild(el);
    }
}



function createIframe(src: string) {
    return new Promise<HTMLIFrameElement>((res) => {
        const iframe = document.createElement('iframe');
        iframe.src = src;
        res(iframe);
        iframe.onload = () => {
            console.log("iframe loaded")
        };
    });
}