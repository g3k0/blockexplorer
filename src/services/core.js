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
};

/**
 * Returns the recommended fee data to use in a transaction. For an EIP-1559 transaction, the maxFeePerGas and maxPriorityFeePerGas should be used.
 * For legacy transactions and networks which do not support EIP-1559, the gasPrice should be used.
 * 
 * @param {number / string} maxFeePerGas - The maxFeePerGas to use for a transaction. This is based on the most recent block's baseFee
 * @param {number / string} maxPriorityFeePerGas - The maxPriorityFeePerGas to use for a transaction. This accounts for the uncle risk and the majority of current MEV risk.
 * @param {number / string} gasPrice - The gasPrice to use for legacy transactions or networks which do not support EIP-1559.
 * @returns 
 */
export const getFeeDataService = async function (
    maxFeePerGas,
    maxPriorityFeePerGas,
    gasPrice
) {
    return await provider.getFeeData(maxFeePerGas, maxPriorityFeePerGas, gasPrice);
};

/**
 * 
 * @returns {object} - Returns an object with the hex: string and type: BigNumber
 */
export const getGasPriceService = async function () {
    return await provider.getGasPrice();
};

/**
 * 
 * @param {object} filter - The filter object to use. Includes the fromBlock and the toBlock.
 * @returns {array} - Array of log objects, or an empty array if nothing has changed since the last poll.
 */
export const getLogsService = async function (filter) {
    return await provider.getLogs(filter);
};

/**
 * 
 * @param {string} addressOrName - The address or ENS name of the account to get the code for.
 * @param {integer} position - The position of the storage slot to get.
 * @param {string} blockTag - The optional block number or hash to get the code for. Defaults to 'latest' if unspecified.
 * @returns {string} - Returns the value at this storage position.
 */
export const getStorageAtService = async function (
    addressOrName,
    position,
    blockTag
) {
    return await provider.getStorageAt(addressOrName, position, blockTag);
};

/**
 * 
 * @param {string} addressOrName - The owner address or ENS name to get the token balances for.
 * @param {array} contractAddresses - List of contract addresses to filter by.
 * @returns {object} - The ERC-20 token balances.
 */
export const getTokenBalancesService = async function (addressOrName, contractAddresses) {
    return await provider.getTokenBalances(addressOrName, contractAddresses);
};

/**
 * 
 * @param {*} address - The contract address to get metadata for.
 * @returns {object} - Returns metadata for a given token contract address
 */
export const getTokenMetadataService = async function (address) {
    return await provider.getTokenMetadata(address);
};

/**
 * 
 * @param {string} addressOrName - The owner address to get the tokens with balances for.
 * @param {string} options - Additional options to pass to the request.
 * @returns {object} - Returns the tokens that the specified address owns and relevant metadata. 
 */
export const getTokensForOwnerService = async function (addressOrName, options) {
    return await provider.getTokensForOwner(addressOrName, options);
};

/**
 * 
 * @param {string} addressOrName  - The address or ENS name of the account to get the nonce for.
 * @param {string} blockTag - The optional block number or hash. Defaults to 'latest' if unspecified.
 * @returns {number} - Returns the value of the count.
 */
export const getTransactionCountService = async function (addressOrName, blockTag) {
    return await provider.getTransactionCount(addressOrName, blockTag);
};

/**
 * 
 * @param {string} transactionHash - 32 Bytes - Hash of a transaction.
 * @returns {object} - A transaction receipt object, or null when no receipt was found
 */
export const getTransactionReceiptService = async function (transactionHash) {
    return await provider.getTransactionReceipt(transactionHash);
};

/**
 * 
 * @param {object} params - The api only takes in one parameter - an object with at least a blockNumber or blockHash. If both are provided, blockHash is prioritized. 
 * @returns {object} - A list of transaction receipts for each transaction in this block.
 */
export const getTransactionReceiptsService = async function (params) {
    return await provider.getTransactionReceipts(params);
};

/**
 * 
 * @param { string} address - The address to check type for.
 * @returns {boolean} - Returns true if the provided address is a smart contract, false otherwise.
 */
export const isContractAddressService = async function (address) {
    return await provider.isContractAddress(address);
};

/**
 * 
 * @param {object} params - An object containing fields for the asset transfer query 
 * @returns {object} - This returns the object response depending on whether withMetadata was set to trueor not.
 */
export const getAssetTransfersService = async function (params) {
    return await provider.getAssetTransfers(params);
};
