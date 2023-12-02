import { Alchemy, Network } from 'alchemy-sdk';

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
};

class AlchemySingleton {
    constructor() {
        if (!AlchemySingleton.instance) {
            this.alchemyInstance = new Alchemy(settings);
            AlchemySingleton.instance = this;
        }

        return AlchemySingleton.instance;
    }

    getInstance() {
        return this.alchemyInstance;
    }
}

const alchemySingleton = new AlchemySingleton();
const alchemy = alchemySingleton.getInstance();

export default alchemy;

