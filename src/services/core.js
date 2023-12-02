import alchemy from '../config/alchermySdkInstance';

/**
 * Let's decouple the SDK instance from the services, 
 * so it will be easier if future to switch provider
 */
const provider = alchemy.core;

/**
 * It returns the number of the most recent block mined
 *  
 * @returns {string}- The block number
 */

export const getBlockNumberService = async function () {
    return await provider.getBlockNumber();
};


/**
 * Returns an estimate of the amount of gas that would be 
 * required to submit a transaction to the network.
 * 
 * @param {object} transaction  - The transaction to estimate gas for.
 * @returns {object} - example response BigNumber { _hex: '0x651a', _isBigNumber: true }

 */
export const estimateGasService = async function (transaction) {
    return await provider.estimateGas(transaction);
};

/**
 * Finds the address that deployed the provided 
 * contract and the block number it was deployed in.
 * 
 * @param {string} contractAddress  - The address we want to find the contract
 * @returns {object} - the address that deployed the provided contract and the block number it was deployed in.
 */
export const findContractDeployerService = async function (contractAddress) {
    return await provider.findContractDeployer(contractAddress);
};





