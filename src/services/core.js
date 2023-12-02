/**
 * Alchemy reference: https://docs.alchemy.com/reference/getblock-sdk-v3
 */
import alchemy from '../config/alchermySdkInstance';

/**
 * Let's decouple the SDK instance from the services, 
 * so it will be easier if future to switch provider
 */
const provider = alchemy.core;

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

/**
 * Returns the balance of a given address as of the provided block.
 * 
 * @param {string} addressOrName - The address or ENS name of the account to get the balance for.
 * @param {string} blockTag - The optional block number or hash to get the balance for. Defaults to latest if unspecified.
 * @returns {object} - This is an estimate of the balance of gas
 */
export const getBalanceService = async function (addressOrName, blockTag) {
    return await provider.findContractDeployer(addressOrName, blockTag);
};

/**
 * 
 * @param {string} blockHashOrBlockTag - The block hash or one of the following block tags: pending, latest, earliest
 * @returns {object} - Returns a block object with the following fields or null when no block was found.
 */
export const getBlockService = async function (blockHashOrBlockTag) {
    return await provider.getBlock(blockHashOrBlockTag);
};

/**
 * Returns the block number of the most recently mined block.
 *  
 * @returns {string} - Integer of the current block number the client is on.
 */

export const getBlockNumberService = async function () {
    return await provider.getBlockNumber();
};

/**
 * Returns the block from the network based on the provided 
 * block number or hash. In addition to the transaction 
 * hashes included in the block, it also returns the f
 * ull transaction objects.
 * 
 * @param {string} blockHashOrBlockTag - The block number or hash to get the block for.
 * @returns {object} - Returns a block object with the following fields, or null when no block was found.
 */
export const getBlockWithTransactionsService = async function (blockHashOrBlockTag) {
    return await provider.getBlockWithTransactions(blockHashOrBlockTag);
};

/**
 * Returns the contract code of the provided address at the block.
 * If there is no contract deployed, the result is 0x.
 * 
 * @param {string} addressOrName - The address or ENS name of the account to get the code for.
 * @param {string} blockTag - The optional block number or hash. Defaults to latest if unspecified.
 * @returns {string} - Returns the code.
 */
export const getCodeService = async function (addressOrName, blockTag) {
    return await provider.getCode(addressOrName, blockTag);
}