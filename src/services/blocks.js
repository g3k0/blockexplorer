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
    return await provider.getBlockNumber()
}


