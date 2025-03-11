import {
  __async,
  __export,
  __spreadProps,
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// node_modules/web3-validator/lib/esm/index.js
var esm_exports3 = {};
__export(esm_exports3, {
  VALID_ETH_BASE_TYPES: () => VALID_ETH_BASE_TYPES,
  Web3Validator: () => Web3Validator,
  Web3ValidatorError: () => Web3ValidatorError,
  bigintPower: () => bigintPower,
  checkAddressCheckSum: () => checkAddressCheckSum,
  isAddress: () => isAddress,
  isBigInt: () => isBigInt,
  isBlockNumber: () => isBlockNumber,
  isBlockNumberOrTag: () => isBlockNumberOrTag,
  isBlockTag: () => isBlockTag,
  isBloom: () => isBloom,
  isBoolean: () => isBoolean,
  isBytes: () => isBytes2,
  isContractAddressInBloom: () => isContractAddressInBloom,
  isFilterObject: () => isFilterObject,
  isHex: () => isHex,
  isHexPrefixed: () => isHexPrefixed,
  isHexStrict: () => isHexStrict,
  isHexString: () => isHexString,
  isHexString32Bytes: () => isHexString32Bytes,
  isHexString8Bytes: () => isHexString8Bytes,
  isInBloom: () => isInBloom,
  isInt: () => isInt,
  isNullish: () => isNullish,
  isNumber: () => isNumber,
  isObject: () => isObject,
  isString: () => isString,
  isTopic: () => isTopic,
  isTopicInBloom: () => isTopicInBloom,
  isUInt: () => isUInt,
  isUint8Array: () => isUint8Array,
  isUserEthereumAddressInBloom: () => isUserEthereumAddressInBloom,
  isValidEthBaseType: () => isValidEthBaseType,
  utils: () => utils_exports,
  validateNoLeadingZeroes: () => validateNoLeadingZeroes,
  validator: () => validator
});

// node_modules/web3-errors/lib/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  AbiError: () => AbiError,
  BaseWeb3Error: () => BaseWeb3Error,
  ChainIdMismatchError: () => ChainIdMismatchError,
  ChainMismatchError: () => ChainMismatchError,
  CommonOrChainAndHardforkError: () => CommonOrChainAndHardforkError,
  ConfigChainMismatchError: () => ConfigChainMismatchError,
  ConfigHardforkMismatchError: () => ConfigHardforkMismatchError,
  ConnectionCloseError: () => ConnectionCloseError,
  ConnectionError: () => ConnectionError,
  ConnectionNotOpenError: () => ConnectionNotOpenError,
  ConnectionTimeoutError: () => ConnectionTimeoutError,
  ContractCodeNotStoredError: () => ContractCodeNotStoredError,
  ContractEventDoesNotExistError: () => ContractEventDoesNotExistError,
  ContractExecutionError: () => ContractExecutionError,
  ContractInstantiationError: () => ContractInstantiationError,
  ContractMissingABIError: () => ContractMissingABIError,
  ContractMissingDeployDataError: () => ContractMissingDeployDataError,
  ContractNoAddressDefinedError: () => ContractNoAddressDefinedError,
  ContractNoFromAddressDefinedError: () => ContractNoFromAddressDefinedError,
  ContractOnceRequiresCallbackError: () => ContractOnceRequiresCallbackError,
  ContractReservedEventError: () => ContractReservedEventError,
  ContractTransactionDataAndInputError: () => ContractTransactionDataAndInputError,
  EIP1193ProviderRpcError: () => EIP1193ProviderRpcError,
  ENSCheckInterfaceSupportError: () => ENSCheckInterfaceSupportError,
  ENSNetworkNotSyncedError: () => ENSNetworkNotSyncedError,
  ENSUnsupportedNetworkError: () => ENSUnsupportedNetworkError,
  ERR_ABI_ENCODING: () => ERR_ABI_ENCODING,
  ERR_CONN: () => ERR_CONN,
  ERR_CONN_CLOSE: () => ERR_CONN_CLOSE,
  ERR_CONN_INVALID: () => ERR_CONN_INVALID,
  ERR_CONN_MAX_ATTEMPTS: () => ERR_CONN_MAX_ATTEMPTS,
  ERR_CONN_NOT_OPEN: () => ERR_CONN_NOT_OPEN,
  ERR_CONN_PENDING_REQUESTS: () => ERR_CONN_PENDING_REQUESTS,
  ERR_CONN_TIMEOUT: () => ERR_CONN_TIMEOUT,
  ERR_CONTRACT: () => ERR_CONTRACT,
  ERR_CONTRACT_ABI_MISSING: () => ERR_CONTRACT_ABI_MISSING,
  ERR_CONTRACT_EVENT_NOT_EXISTS: () => ERR_CONTRACT_EVENT_NOT_EXISTS,
  ERR_CONTRACT_EXECUTION_REVERTED: () => ERR_CONTRACT_EXECUTION_REVERTED,
  ERR_CONTRACT_INSTANTIATION: () => ERR_CONTRACT_INSTANTIATION,
  ERR_CONTRACT_MISSING_ADDRESS: () => ERR_CONTRACT_MISSING_ADDRESS,
  ERR_CONTRACT_MISSING_DEPLOY_DATA: () => ERR_CONTRACT_MISSING_DEPLOY_DATA,
  ERR_CONTRACT_MISSING_FROM_ADDRESS: () => ERR_CONTRACT_MISSING_FROM_ADDRESS,
  ERR_CONTRACT_REQUIRED_CALLBACK: () => ERR_CONTRACT_REQUIRED_CALLBACK,
  ERR_CONTRACT_RESERVED_EVENT: () => ERR_CONTRACT_RESERVED_EVENT,
  ERR_CONTRACT_RESOLVER_MISSING: () => ERR_CONTRACT_RESOLVER_MISSING,
  ERR_CONTRACT_TX_DATA_AND_INPUT: () => ERR_CONTRACT_TX_DATA_AND_INPUT,
  ERR_CORE_CHAIN_MISMATCH: () => ERR_CORE_CHAIN_MISMATCH,
  ERR_CORE_HARDFORK_MISMATCH: () => ERR_CORE_HARDFORK_MISMATCH,
  ERR_ENS_CHECK_INTERFACE_SUPPORT: () => ERR_ENS_CHECK_INTERFACE_SUPPORT,
  ERR_ENS_NETWORK_NOT_SYNCED: () => ERR_ENS_NETWORK_NOT_SYNCED,
  ERR_ENS_UNSUPPORTED_NETWORK: () => ERR_ENS_UNSUPPORTED_NETWORK,
  ERR_EXISTING_PLUGIN_NAMESPACE: () => ERR_EXISTING_PLUGIN_NAMESPACE,
  ERR_FORMATTERS: () => ERR_FORMATTERS,
  ERR_INVALID_ADDRESS: () => ERR_INVALID_ADDRESS,
  ERR_INVALID_BLOCK: () => ERR_INVALID_BLOCK,
  ERR_INVALID_BOOLEAN: () => ERR_INVALID_BOOLEAN,
  ERR_INVALID_BYTES: () => ERR_INVALID_BYTES,
  ERR_INVALID_CLIENT: () => ERR_INVALID_CLIENT,
  ERR_INVALID_HEX: () => ERR_INVALID_HEX,
  ERR_INVALID_INTEGER: () => ERR_INVALID_INTEGER,
  ERR_INVALID_KEYSTORE: () => ERR_INVALID_KEYSTORE,
  ERR_INVALID_LARGE_VALUE: () => ERR_INVALID_LARGE_VALUE,
  ERR_INVALID_METHOD_PARAMS: () => ERR_INVALID_METHOD_PARAMS,
  ERR_INVALID_NIBBLE_WIDTH: () => ERR_INVALID_NIBBLE_WIDTH,
  ERR_INVALID_NUMBER: () => ERR_INVALID_NUMBER,
  ERR_INVALID_PASSWORD: () => ERR_INVALID_PASSWORD,
  ERR_INVALID_PRIVATE_KEY: () => ERR_INVALID_PRIVATE_KEY,
  ERR_INVALID_PROVIDER: () => ERR_INVALID_PROVIDER,
  ERR_INVALID_RESPONSE: () => ERR_INVALID_RESPONSE,
  ERR_INVALID_SIGNATURE: () => ERR_INVALID_SIGNATURE,
  ERR_INVALID_SIZE: () => ERR_INVALID_SIZE,
  ERR_INVALID_STRING: () => ERR_INVALID_STRING,
  ERR_INVALID_TYPE: () => ERR_INVALID_TYPE,
  ERR_INVALID_TYPE_ABI: () => ERR_INVALID_TYPE_ABI,
  ERR_INVALID_UNIT: () => ERR_INVALID_UNIT,
  ERR_INVALID_UNSIGNED_INTEGER: () => ERR_INVALID_UNSIGNED_INTEGER,
  ERR_IV_LENGTH: () => ERR_IV_LENGTH,
  ERR_KEY_DERIVATION_FAIL: () => ERR_KEY_DERIVATION_FAIL,
  ERR_KEY_VERSION_UNSUPPORTED: () => ERR_KEY_VERSION_UNSUPPORTED,
  ERR_METHOD_NOT_IMPLEMENTED: () => ERR_METHOD_NOT_IMPLEMENTED,
  ERR_MULTIPLE_ERRORS: () => ERR_MULTIPLE_ERRORS,
  ERR_OPERATION_ABORT: () => ERR_OPERATION_ABORT,
  ERR_OPERATION_TIMEOUT: () => ERR_OPERATION_TIMEOUT,
  ERR_PARAM: () => ERR_PARAM,
  ERR_PBKDF2_ITERATIONS: () => ERR_PBKDF2_ITERATIONS,
  ERR_PRIVATE_KEY_LENGTH: () => ERR_PRIVATE_KEY_LENGTH,
  ERR_PROVIDER: () => ERR_PROVIDER,
  ERR_RAW_TX_UNDEFINED: () => ERR_RAW_TX_UNDEFINED,
  ERR_REQ_ALREADY_SENT: () => ERR_REQ_ALREADY_SENT,
  ERR_RESPONSE: () => ERR_RESPONSE,
  ERR_RPC_INTERNAL_ERROR: () => ERR_RPC_INTERNAL_ERROR,
  ERR_RPC_INVALID_INPUT: () => ERR_RPC_INVALID_INPUT,
  ERR_RPC_INVALID_JSON: () => ERR_RPC_INVALID_JSON,
  ERR_RPC_INVALID_METHOD: () => ERR_RPC_INVALID_METHOD,
  ERR_RPC_INVALID_PARAMS: () => ERR_RPC_INVALID_PARAMS,
  ERR_RPC_INVALID_REQUEST: () => ERR_RPC_INVALID_REQUEST,
  ERR_RPC_LIMIT_EXCEEDED: () => ERR_RPC_LIMIT_EXCEEDED,
  ERR_RPC_MISSING_RESOURCE: () => ERR_RPC_MISSING_RESOURCE,
  ERR_RPC_NOT_SUPPORTED: () => ERR_RPC_NOT_SUPPORTED,
  ERR_RPC_TRANSACTION_REJECTED: () => ERR_RPC_TRANSACTION_REJECTED,
  ERR_RPC_UNAVAILABLE_RESOURCE: () => ERR_RPC_UNAVAILABLE_RESOURCE,
  ERR_RPC_UNSUPPORTED_METHOD: () => ERR_RPC_UNSUPPORTED_METHOD,
  ERR_SCHEMA_FORMAT: () => ERR_SCHEMA_FORMAT,
  ERR_SIGNATURE_FAILED: () => ERR_SIGNATURE_FAILED,
  ERR_SUBSCRIPTION: () => ERR_SUBSCRIPTION,
  ERR_TX: () => ERR_TX,
  ERR_TX_BLOCK_TIMEOUT: () => ERR_TX_BLOCK_TIMEOUT,
  ERR_TX_CHAIN_ID_MISMATCH: () => ERR_TX_CHAIN_ID_MISMATCH,
  ERR_TX_CHAIN_MISMATCH: () => ERR_TX_CHAIN_MISMATCH,
  ERR_TX_CONTRACT_NOT_STORED: () => ERR_TX_CONTRACT_NOT_STORED,
  ERR_TX_DATA_AND_INPUT: () => ERR_TX_DATA_AND_INPUT,
  ERR_TX_GAS_MISMATCH: () => ERR_TX_GAS_MISMATCH,
  ERR_TX_GAS_MISMATCH_INNER_ERROR: () => ERR_TX_GAS_MISMATCH_INNER_ERROR,
  ERR_TX_HARDFORK_MISMATCH: () => ERR_TX_HARDFORK_MISMATCH,
  ERR_TX_INVALID_CALL: () => ERR_TX_INVALID_CALL,
  ERR_TX_INVALID_CHAIN_INFO: () => ERR_TX_INVALID_CHAIN_INFO,
  ERR_TX_INVALID_FEE_MARKET_GAS: () => ERR_TX_INVALID_FEE_MARKET_GAS,
  ERR_TX_INVALID_FEE_MARKET_GAS_PRICE: () => ERR_TX_INVALID_FEE_MARKET_GAS_PRICE,
  ERR_TX_INVALID_LEGACY_FEE_MARKET: () => ERR_TX_INVALID_LEGACY_FEE_MARKET,
  ERR_TX_INVALID_LEGACY_GAS: () => ERR_TX_INVALID_LEGACY_GAS,
  ERR_TX_INVALID_NONCE_OR_CHAIN_ID: () => ERR_TX_INVALID_NONCE_OR_CHAIN_ID,
  ERR_TX_INVALID_OBJECT: () => ERR_TX_INVALID_OBJECT,
  ERR_TX_INVALID_PROPERTIES_FOR_TYPE: () => ERR_TX_INVALID_PROPERTIES_FOR_TYPE,
  ERR_TX_INVALID_RECEIVER: () => ERR_TX_INVALID_RECEIVER,
  ERR_TX_INVALID_SENDER: () => ERR_TX_INVALID_SENDER,
  ERR_TX_LOCAL_WALLET_NOT_AVAILABLE: () => ERR_TX_LOCAL_WALLET_NOT_AVAILABLE,
  ERR_TX_MISSING_CHAIN_INFO: () => ERR_TX_MISSING_CHAIN_INFO,
  ERR_TX_MISSING_CUSTOM_CHAIN: () => ERR_TX_MISSING_CUSTOM_CHAIN,
  ERR_TX_MISSING_CUSTOM_CHAIN_ID: () => ERR_TX_MISSING_CUSTOM_CHAIN_ID,
  ERR_TX_MISSING_GAS: () => ERR_TX_MISSING_GAS,
  ERR_TX_MISSING_GAS_INNER_ERROR: () => ERR_TX_MISSING_GAS_INNER_ERROR,
  ERR_TX_NOT_FOUND: () => ERR_TX_NOT_FOUND,
  ERR_TX_NO_CONTRACT_ADDRESS: () => ERR_TX_NO_CONTRACT_ADDRESS,
  ERR_TX_OUT_OF_GAS: () => ERR_TX_OUT_OF_GAS,
  ERR_TX_POLLING_TIMEOUT: () => ERR_TX_POLLING_TIMEOUT,
  ERR_TX_RECEIPT_MISSING_BLOCK_NUMBER: () => ERR_TX_RECEIPT_MISSING_BLOCK_NUMBER,
  ERR_TX_RECEIPT_MISSING_OR_BLOCKHASH_NULL: () => ERR_TX_RECEIPT_MISSING_OR_BLOCKHASH_NULL,
  ERR_TX_REVERT_INSTRUCTION: () => ERR_TX_REVERT_INSTRUCTION,
  ERR_TX_REVERT_TRANSACTION: () => ERR_TX_REVERT_TRANSACTION,
  ERR_TX_REVERT_TRANSACTION_CUSTOM_ERROR: () => ERR_TX_REVERT_TRANSACTION_CUSTOM_ERROR,
  ERR_TX_REVERT_WITHOUT_REASON: () => ERR_TX_REVERT_WITHOUT_REASON,
  ERR_TX_SEND_TIMEOUT: () => ERR_TX_SEND_TIMEOUT,
  ERR_TX_SIGNING: () => ERR_TX_SIGNING,
  ERR_TX_UNABLE_TO_POPULATE_NONCE: () => ERR_TX_UNABLE_TO_POPULATE_NONCE,
  ERR_TX_UNSUPPORTED_EIP_1559: () => ERR_TX_UNSUPPORTED_EIP_1559,
  ERR_TX_UNSUPPORTED_TYPE: () => ERR_TX_UNSUPPORTED_TYPE,
  ERR_UNSUPPORTED_KDF: () => ERR_UNSUPPORTED_KDF,
  ERR_VALIDATION: () => ERR_VALIDATION,
  ERR_WS_PROVIDER: () => ERR_WS_PROVIDER,
  Eip1559GasPriceError: () => Eip1559GasPriceError,
  Eip1559NotSupportedError: () => Eip1559NotSupportedError,
  Eip838ExecutionError: () => Eip838ExecutionError,
  ExistingPluginNamespaceError: () => ExistingPluginNamespaceError,
  FormatterError: () => FormatterError,
  GENESIS_BLOCK_NUMBER: () => GENESIS_BLOCK_NUMBER,
  HardforkMismatchError: () => HardforkMismatchError,
  HexProcessingError: () => HexProcessingError,
  IVLengthError: () => IVLengthError,
  InternalError: () => InternalError,
  InvalidAddressError: () => InvalidAddressError,
  InvalidBlockError: () => InvalidBlockError,
  InvalidBooleanError: () => InvalidBooleanError,
  InvalidBytesError: () => InvalidBytesError,
  InvalidClientError: () => InvalidClientError,
  InvalidConnectionError: () => InvalidConnectionError,
  InvalidGasOrGasPrice: () => InvalidGasOrGasPrice,
  InvalidInputError: () => InvalidInputError,
  InvalidIntegerError: () => InvalidIntegerError,
  InvalidKdfError: () => InvalidKdfError,
  InvalidLargeValueError: () => InvalidLargeValueError,
  InvalidMaxPriorityFeePerGasOrMaxFeePerGas: () => InvalidMaxPriorityFeePerGasOrMaxFeePerGas,
  InvalidMethodParamsError: () => InvalidMethodParamsError,
  InvalidNonceOrChainIdError: () => InvalidNonceOrChainIdError,
  InvalidNumberError: () => InvalidNumberError,
  InvalidNumberOfParamsError: () => InvalidNumberOfParamsError,
  InvalidParamsError: () => InvalidParamsError,
  InvalidPasswordError: () => InvalidPasswordError,
  InvalidPrivateKeyError: () => InvalidPrivateKeyError,
  InvalidPropertiesForTransactionTypeError: () => InvalidPropertiesForTransactionTypeError,
  InvalidProviderError: () => InvalidProviderError,
  InvalidRequestError: () => InvalidRequestError,
  InvalidResponseError: () => InvalidResponseError,
  InvalidSignatureError: () => InvalidSignatureError,
  InvalidSizeError: () => InvalidSizeError,
  InvalidStringError: () => InvalidStringError,
  InvalidTransactionCall: () => InvalidTransactionCall,
  InvalidTransactionObjectError: () => InvalidTransactionObjectError,
  InvalidTransactionWithReceiver: () => InvalidTransactionWithReceiver,
  InvalidTransactionWithSender: () => InvalidTransactionWithSender,
  InvalidTypeAbiInputError: () => InvalidTypeAbiInputError,
  InvalidTypeError: () => InvalidTypeError,
  InvalidUnitError: () => InvalidUnitError,
  InvalidUnsignedIntegerError: () => InvalidUnsignedIntegerError,
  InvalidValueError: () => InvalidValueError,
  JSONRPC_ERR_CHAIN_DISCONNECTED: () => JSONRPC_ERR_CHAIN_DISCONNECTED,
  JSONRPC_ERR_DISCONNECTED: () => JSONRPC_ERR_DISCONNECTED,
  JSONRPC_ERR_REJECTED_REQUEST: () => JSONRPC_ERR_REJECTED_REQUEST,
  JSONRPC_ERR_UNAUTHORIZED: () => JSONRPC_ERR_UNAUTHORIZED,
  JSONRPC_ERR_UNSUPPORTED_METHOD: () => JSONRPC_ERR_UNSUPPORTED_METHOD,
  KeyDerivationError: () => KeyDerivationError,
  KeyStoreVersionError: () => KeyStoreVersionError,
  LimitExceededError: () => LimitExceededError,
  LocalWalletNotAvailableError: () => LocalWalletNotAvailableError,
  MaxAttemptsReachedOnReconnectingError: () => MaxAttemptsReachedOnReconnectingError,
  MethodNotFoundError: () => MethodNotFoundError,
  MethodNotImplementedError: () => MethodNotImplementedError,
  MethodNotSupported: () => MethodNotSupported,
  MissingChainOrHardforkError: () => MissingChainOrHardforkError,
  MissingCustomChainError: () => MissingCustomChainError,
  MissingCustomChainIdError: () => MissingCustomChainIdError,
  MissingGasError: () => MissingGasError,
  MissingGasInnerError: () => MissingGasInnerError,
  MultipleErrors: () => MultipleErrors,
  NibbleWidthError: () => NibbleWidthError,
  NoContractAddressFoundError: () => NoContractAddressFoundError,
  OperationAbortError: () => OperationAbortError,
  OperationTimeoutError: () => OperationTimeoutError,
  PBKDF2IterationsError: () => PBKDF2IterationsError,
  ParseError: () => ParseError,
  PendingRequestsOnReconnectingError: () => PendingRequestsOnReconnectingError,
  PrivateKeyLengthError: () => PrivateKeyLengthError,
  ProviderError: () => ProviderError,
  RequestAlreadySentError: () => RequestAlreadySentError,
  ResolverMethodMissingError: () => ResolverMethodMissingError,
  ResourceUnavailableError: () => ResourceUnavailableError,
  ResourcesNotFoundError: () => ResourcesNotFoundError,
  ResponseError: () => ResponseError,
  RevertInstructionError: () => RevertInstructionError,
  RpcError: () => RpcError,
  RpcErrorMessages: () => RpcErrorMessages,
  SchemaFormatError: () => SchemaFormatError,
  SignatureError: () => SignatureError,
  SubscriptionError: () => SubscriptionError,
  TransactionBlockTimeoutError: () => TransactionBlockTimeoutError,
  TransactionDataAndInputError: () => TransactionDataAndInputError,
  TransactionError: () => TransactionError,
  TransactionGasMismatchError: () => TransactionGasMismatchError,
  TransactionGasMismatchInnerError: () => TransactionGasMismatchInnerError,
  TransactionMissingReceiptOrBlockHashError: () => TransactionMissingReceiptOrBlockHashError,
  TransactionNotFound: () => TransactionNotFound,
  TransactionOutOfGasError: () => TransactionOutOfGasError,
  TransactionPollingTimeoutError: () => TransactionPollingTimeoutError,
  TransactionReceiptMissingBlockNumberError: () => TransactionReceiptMissingBlockNumberError,
  TransactionRejectedError: () => TransactionRejectedError,
  TransactionRevertInstructionError: () => TransactionRevertInstructionError,
  TransactionRevertWithCustomError: () => TransactionRevertWithCustomError,
  TransactionRevertedWithoutReasonError: () => TransactionRevertedWithoutReasonError,
  TransactionSendTimeoutError: () => TransactionSendTimeoutError,
  TransactionSigningError: () => TransactionSigningError,
  UnableToPopulateNonceError: () => UnableToPopulateNonceError,
  UndefinedRawTransactionError: () => UndefinedRawTransactionError,
  UnsupportedFeeMarketError: () => UnsupportedFeeMarketError,
  UnsupportedTransactionTypeError: () => UnsupportedTransactionTypeError,
  VersionNotSupportedError: () => VersionNotSupportedError,
  Web3ContractError: () => Web3ContractError,
  Web3WSProviderError: () => Web3WSProviderError,
  genericRpcErrorMessageTemplate: () => genericRpcErrorMessageTemplate,
  rpcErrorsMap: () => rpcErrorsMap
});

// node_modules/web3-errors/lib/esm/error_codes.js
var ERR_RESPONSE = 100;
var ERR_INVALID_RESPONSE = 101;
var ERR_PARAM = 200;
var ERR_FORMATTERS = 201;
var ERR_METHOD_NOT_IMPLEMENTED = 202;
var ERR_OPERATION_TIMEOUT = 203;
var ERR_OPERATION_ABORT = 204;
var ERR_ABI_ENCODING = 205;
var ERR_EXISTING_PLUGIN_NAMESPACE = 206;
var ERR_INVALID_METHOD_PARAMS = 207;
var ERR_MULTIPLE_ERRORS = 208;
var ERR_CONTRACT = 300;
var ERR_CONTRACT_RESOLVER_MISSING = 301;
var ERR_CONTRACT_ABI_MISSING = 302;
var ERR_CONTRACT_REQUIRED_CALLBACK = 303;
var ERR_CONTRACT_EVENT_NOT_EXISTS = 304;
var ERR_CONTRACT_RESERVED_EVENT = 305;
var ERR_CONTRACT_MISSING_DEPLOY_DATA = 306;
var ERR_CONTRACT_MISSING_ADDRESS = 307;
var ERR_CONTRACT_MISSING_FROM_ADDRESS = 308;
var ERR_CONTRACT_INSTANTIATION = 309;
var ERR_CONTRACT_EXECUTION_REVERTED = 310;
var ERR_CONTRACT_TX_DATA_AND_INPUT = 311;
var ERR_TX = 400;
var ERR_TX_REVERT_INSTRUCTION = 401;
var ERR_TX_REVERT_TRANSACTION = 402;
var ERR_TX_NO_CONTRACT_ADDRESS = 403;
var ERR_TX_CONTRACT_NOT_STORED = 404;
var ERR_TX_REVERT_WITHOUT_REASON = 405;
var ERR_TX_OUT_OF_GAS = 406;
var ERR_RAW_TX_UNDEFINED = 407;
var ERR_TX_INVALID_SENDER = 408;
var ERR_TX_INVALID_CALL = 409;
var ERR_TX_MISSING_CUSTOM_CHAIN = 410;
var ERR_TX_MISSING_CUSTOM_CHAIN_ID = 411;
var ERR_TX_CHAIN_ID_MISMATCH = 412;
var ERR_TX_INVALID_CHAIN_INFO = 413;
var ERR_TX_MISSING_CHAIN_INFO = 414;
var ERR_TX_MISSING_GAS = 415;
var ERR_TX_INVALID_LEGACY_GAS = 416;
var ERR_TX_INVALID_FEE_MARKET_GAS = 417;
var ERR_TX_INVALID_FEE_MARKET_GAS_PRICE = 418;
var ERR_TX_INVALID_LEGACY_FEE_MARKET = 419;
var ERR_TX_INVALID_OBJECT = 420;
var ERR_TX_INVALID_NONCE_OR_CHAIN_ID = 421;
var ERR_TX_UNABLE_TO_POPULATE_NONCE = 422;
var ERR_TX_UNSUPPORTED_EIP_1559 = 423;
var ERR_TX_UNSUPPORTED_TYPE = 424;
var ERR_TX_DATA_AND_INPUT = 425;
var ERR_TX_POLLING_TIMEOUT = 426;
var ERR_TX_RECEIPT_MISSING_OR_BLOCKHASH_NULL = 427;
var ERR_TX_RECEIPT_MISSING_BLOCK_NUMBER = 428;
var ERR_TX_LOCAL_WALLET_NOT_AVAILABLE = 429;
var ERR_TX_NOT_FOUND = 430;
var ERR_TX_SEND_TIMEOUT = 431;
var ERR_TX_BLOCK_TIMEOUT = 432;
var ERR_TX_SIGNING = 433;
var ERR_TX_GAS_MISMATCH = 434;
var ERR_TX_CHAIN_MISMATCH = 435;
var ERR_TX_HARDFORK_MISMATCH = 436;
var ERR_TX_INVALID_RECEIVER = 437;
var ERR_TX_REVERT_TRANSACTION_CUSTOM_ERROR = 438;
var ERR_TX_INVALID_PROPERTIES_FOR_TYPE = 439;
var ERR_TX_MISSING_GAS_INNER_ERROR = 440;
var ERR_TX_GAS_MISMATCH_INNER_ERROR = 441;
var ERR_CONN = 500;
var ERR_CONN_INVALID = 501;
var ERR_CONN_TIMEOUT = 502;
var ERR_CONN_NOT_OPEN = 503;
var ERR_CONN_CLOSE = 504;
var ERR_CONN_MAX_ATTEMPTS = 505;
var ERR_CONN_PENDING_REQUESTS = 506;
var ERR_REQ_ALREADY_SENT = 507;
var ERR_PROVIDER = 600;
var ERR_INVALID_PROVIDER = 601;
var ERR_INVALID_CLIENT = 602;
var ERR_SUBSCRIPTION = 603;
var ERR_WS_PROVIDER = 604;
var ERR_PRIVATE_KEY_LENGTH = 701;
var ERR_INVALID_PRIVATE_KEY = 702;
var ERR_UNSUPPORTED_KDF = 703;
var ERR_KEY_DERIVATION_FAIL = 704;
var ERR_KEY_VERSION_UNSUPPORTED = 705;
var ERR_INVALID_PASSWORD = 706;
var ERR_IV_LENGTH = 707;
var ERR_INVALID_KEYSTORE = 708;
var ERR_PBKDF2_ITERATIONS = 709;
var ERR_SIGNATURE_FAILED = 801;
var ERR_INVALID_SIGNATURE = 802;
var GENESIS_BLOCK_NUMBER = "0x0";
var JSONRPC_ERR_REJECTED_REQUEST = 4001;
var JSONRPC_ERR_UNAUTHORIZED = 4100;
var JSONRPC_ERR_UNSUPPORTED_METHOD = 4200;
var JSONRPC_ERR_DISCONNECTED = 4900;
var JSONRPC_ERR_CHAIN_DISCONNECTED = 4901;
var ERR_ENS_CHECK_INTERFACE_SUPPORT = 901;
var ERR_ENS_UNSUPPORTED_NETWORK = 902;
var ERR_ENS_NETWORK_NOT_SYNCED = 903;
var ERR_INVALID_STRING = 1001;
var ERR_INVALID_BYTES = 1002;
var ERR_INVALID_NUMBER = 1003;
var ERR_INVALID_UNIT = 1004;
var ERR_INVALID_ADDRESS = 1005;
var ERR_INVALID_HEX = 1006;
var ERR_INVALID_TYPE = 1007;
var ERR_INVALID_BOOLEAN = 1008;
var ERR_INVALID_UNSIGNED_INTEGER = 1009;
var ERR_INVALID_SIZE = 1010;
var ERR_INVALID_LARGE_VALUE = 1011;
var ERR_INVALID_BLOCK = 1012;
var ERR_INVALID_TYPE_ABI = 1013;
var ERR_INVALID_NIBBLE_WIDTH = 1014;
var ERR_INVALID_INTEGER = 1015;
var ERR_VALIDATION = 1100;
var ERR_CORE_HARDFORK_MISMATCH = 1101;
var ERR_CORE_CHAIN_MISMATCH = 1102;
var ERR_SCHEMA_FORMAT = 1200;
var ERR_RPC_INVALID_JSON = -32700;
var ERR_RPC_INVALID_REQUEST = -32600;
var ERR_RPC_INVALID_METHOD = -32601;
var ERR_RPC_INVALID_PARAMS = -32602;
var ERR_RPC_INTERNAL_ERROR = -32603;
var ERR_RPC_INVALID_INPUT = -32e3;
var ERR_RPC_MISSING_RESOURCE = -32001;
var ERR_RPC_UNAVAILABLE_RESOURCE = -32002;
var ERR_RPC_TRANSACTION_REJECTED = -32003;
var ERR_RPC_UNSUPPORTED_METHOD = -32004;
var ERR_RPC_LIMIT_EXCEEDED = -32005;
var ERR_RPC_NOT_SUPPORTED = -32006;

// node_modules/web3-errors/lib/esm/web3_error_base.js
var BaseWeb3Error = class extends Error {
  /**
   * @deprecated Use the `cause` property instead.
   */
  get innerError() {
    if (this.cause instanceof MultipleErrors) {
      return this.cause.errors;
    }
    return this.cause;
  }
  /**
   * @deprecated Use the `cause` property instead.
   */
  set innerError(cause) {
    if (Array.isArray(cause)) {
      this.cause = new MultipleErrors(cause);
    } else {
      this.cause = cause;
    }
  }
  constructor(msg, cause) {
    super(msg);
    if (Array.isArray(cause)) {
      this.cause = new MultipleErrors(cause);
    } else {
      this.cause = cause;
    }
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(new.target.constructor);
    } else {
      this.stack = new Error().stack;
    }
  }
  static convertToString(value, unquotValue = false) {
    if (value === null || value === void 0)
      return "undefined";
    const result = JSON.stringify(value, (_, v) => typeof v === "bigint" ? v.toString() : v);
    return unquotValue && ["bigint", "string"].includes(typeof value) ? result.replace(/['\\"]+/g, "") : result;
  }
  toJSON() {
    return {
      name: this.name,
      code: this.code,
      message: this.message,
      cause: this.cause,
      // deprecated
      innerError: this.cause
    };
  }
};
var MultipleErrors = class extends BaseWeb3Error {
  constructor(errors) {
    super(`Multiple errors occurred: [${errors.map((e) => e.message).join("], [")}]`);
    this.code = ERR_MULTIPLE_ERRORS;
    this.errors = errors;
  }
};
var InvalidValueError = class extends BaseWeb3Error {
  constructor(value, msg) {
    super(`Invalid value given "${BaseWeb3Error.convertToString(value, true)}". Error: ${msg}.`);
    this.name = this.constructor.name;
  }
};

// node_modules/web3-errors/lib/esm/errors/account_errors.js
var PrivateKeyLengthError = class extends BaseWeb3Error {
  constructor() {
    super(`Private key must be 32 bytes.`);
    this.code = ERR_PRIVATE_KEY_LENGTH;
  }
};
var InvalidPrivateKeyError = class extends BaseWeb3Error {
  constructor() {
    super(`Invalid Private Key, Not a valid string or uint8Array`);
    this.code = ERR_INVALID_PRIVATE_KEY;
  }
};
var InvalidSignatureError = class extends BaseWeb3Error {
  constructor(errorDetails) {
    super(`"${errorDetails}"`);
    this.code = ERR_INVALID_SIGNATURE;
  }
};
var InvalidKdfError = class extends BaseWeb3Error {
  constructor() {
    super(`Invalid key derivation function`);
    this.code = ERR_UNSUPPORTED_KDF;
  }
};
var KeyDerivationError = class extends BaseWeb3Error {
  constructor() {
    super(`Key derivation failed - possibly wrong password`);
    this.code = ERR_KEY_DERIVATION_FAIL;
  }
};
var KeyStoreVersionError = class extends BaseWeb3Error {
  constructor() {
    super("Unsupported key store version");
    this.code = ERR_KEY_VERSION_UNSUPPORTED;
  }
};
var InvalidPasswordError = class extends BaseWeb3Error {
  constructor() {
    super("Password cannot be empty");
    this.code = ERR_INVALID_PASSWORD;
  }
};
var IVLengthError = class extends BaseWeb3Error {
  constructor() {
    super("Initialization vector must be 16 bytes");
    this.code = ERR_IV_LENGTH;
  }
};
var PBKDF2IterationsError = class extends BaseWeb3Error {
  constructor() {
    super("c > 1000, pbkdf2 is less secure with less iterations");
    this.code = ERR_PBKDF2_ITERATIONS;
  }
};

// node_modules/web3-errors/lib/esm/errors/connection_errors.js
var ConnectionError = class extends BaseWeb3Error {
  constructor(message, event) {
    super(message);
    this.code = ERR_CONN;
    if (event) {
      this.errorCode = event.code;
      this.errorReason = event.reason;
    }
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { errorCode: this.errorCode, errorReason: this.errorReason });
  }
};
var InvalidConnectionError = class extends ConnectionError {
  constructor(host, event) {
    super(`CONNECTION ERROR: Couldn't connect to node ${host}.`, event);
    this.host = host;
    this.code = ERR_CONN_INVALID;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { host: this.host });
  }
};
var ConnectionTimeoutError = class extends ConnectionError {
  constructor(duration) {
    super(`CONNECTION TIMEOUT: timeout of ${duration}ms achieved`);
    this.duration = duration;
    this.code = ERR_CONN_TIMEOUT;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { duration: this.duration });
  }
};
var ConnectionNotOpenError = class extends ConnectionError {
  constructor(event) {
    super("Connection not open", event);
    this.code = ERR_CONN_NOT_OPEN;
  }
};
var ConnectionCloseError = class extends ConnectionError {
  constructor(event) {
    var _a, _b;
    super(`CONNECTION ERROR: The connection got closed with the close code ${(_a = event === null || event === void 0 ? void 0 : event.code) !== null && _a !== void 0 ? _a : ""} and the following reason string ${(_b = event === null || event === void 0 ? void 0 : event.reason) !== null && _b !== void 0 ? _b : ""}`, event);
    this.code = ERR_CONN_CLOSE;
  }
};
var MaxAttemptsReachedOnReconnectingError = class extends ConnectionError {
  constructor(numberOfAttempts) {
    super(`Maximum number of reconnect attempts reached! (${numberOfAttempts})`);
    this.code = ERR_CONN_MAX_ATTEMPTS;
  }
};
var PendingRequestsOnReconnectingError = class extends ConnectionError {
  constructor() {
    super("CONNECTION ERROR: Provider started to reconnect before the response got received!");
    this.code = ERR_CONN_PENDING_REQUESTS;
  }
};
var RequestAlreadySentError = class extends ConnectionError {
  constructor(id) {
    super(`Request already sent with following id: ${id}`);
    this.code = ERR_REQ_ALREADY_SENT;
  }
};

// node_modules/web3-errors/lib/esm/errors/contract_errors.js
var Web3ContractError = class extends BaseWeb3Error {
  constructor(message, receipt) {
    super(message);
    this.code = ERR_CONTRACT;
    this.receipt = receipt;
  }
};
var ResolverMethodMissingError = class extends BaseWeb3Error {
  constructor(address, name) {
    super(`The resolver at ${address} does not implement requested method: "${name}".`);
    this.address = address;
    this.name = name;
    this.code = ERR_CONTRACT_RESOLVER_MISSING;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { address: this.address, name: this.name });
  }
};
var ContractMissingABIError = class extends BaseWeb3Error {
  constructor() {
    super("You must provide the json interface of the contract when instantiating a contract object.");
    this.code = ERR_CONTRACT_ABI_MISSING;
  }
};
var ContractOnceRequiresCallbackError = class extends BaseWeb3Error {
  constructor() {
    super("Once requires a callback as the second parameter.");
    this.code = ERR_CONTRACT_REQUIRED_CALLBACK;
  }
};
var ContractEventDoesNotExistError = class extends BaseWeb3Error {
  constructor(eventName) {
    super(`Event "${eventName}" doesn't exist in this contract.`);
    this.eventName = eventName;
    this.code = ERR_CONTRACT_EVENT_NOT_EXISTS;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { eventName: this.eventName });
  }
};
var ContractReservedEventError = class extends BaseWeb3Error {
  constructor(type) {
    super(`Event "${type}" doesn't exist in this contract.`);
    this.type = type;
    this.code = ERR_CONTRACT_RESERVED_EVENT;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { type: this.type });
  }
};
var ContractMissingDeployDataError = class extends BaseWeb3Error {
  constructor() {
    super(`No "data" specified in neither the given options, nor the default options.`);
    this.code = ERR_CONTRACT_MISSING_DEPLOY_DATA;
  }
};
var ContractNoAddressDefinedError = class extends BaseWeb3Error {
  constructor() {
    super("This contract object doesn't have address set yet, please set an address first.");
    this.code = ERR_CONTRACT_MISSING_ADDRESS;
  }
};
var ContractNoFromAddressDefinedError = class extends BaseWeb3Error {
  constructor() {
    super('No "from" address specified in neither the given options, nor the default options.');
    this.code = ERR_CONTRACT_MISSING_FROM_ADDRESS;
  }
};
var ContractInstantiationError = class extends BaseWeb3Error {
  constructor() {
    super(...arguments);
    this.code = ERR_CONTRACT_INSTANTIATION;
  }
};
var Eip838ExecutionError = class _Eip838ExecutionError extends Web3ContractError {
  constructor(error) {
    super(error.message || "Error");
    this.name = "name" in error && error.name || this.constructor.name;
    this.stack = "stack" in error && error.stack || void 0;
    this.code = error.code;
    if (typeof error.data === "object") {
      let originalError;
      if (error.data && "originalError" in error.data) {
        originalError = error.data.originalError;
      } else {
        originalError = error.data;
      }
      this.data = originalError.data;
      this.cause = new _Eip838ExecutionError(originalError);
    } else {
      this.data = error.data;
    }
  }
  setDecodedProperties(errorName, errorSignature, errorArgs) {
    this.errorName = errorName;
    this.errorSignature = errorSignature;
    this.errorArgs = errorArgs;
  }
  toJSON() {
    let json = Object.assign(Object.assign({}, super.toJSON()), { data: this.data });
    if (this.errorName) {
      json = Object.assign(Object.assign({}, json), { errorName: this.errorName, errorSignature: this.errorSignature, errorArgs: this.errorArgs });
    }
    return json;
  }
};
var ContractExecutionError = class extends Web3ContractError {
  constructor(rpcError) {
    super("Error happened while trying to execute a function inside a smart contract");
    this.code = ERR_CONTRACT_EXECUTION_REVERTED;
    this.cause = new Eip838ExecutionError(rpcError);
  }
};
var ContractTransactionDataAndInputError = class extends InvalidValueError {
  constructor(value) {
    var _a, _b;
    super(`data: ${(_a = value.data) !== null && _a !== void 0 ? _a : "undefined"}, input: ${(_b = value.input) !== null && _b !== void 0 ? _b : "undefined"}`, `You can't have "data" and "input" as properties of a contract at the same time, please use either "data" or "input" instead.`);
    this.code = ERR_CONTRACT_TX_DATA_AND_INPUT;
  }
};

// node_modules/web3-errors/lib/esm/errors/ens_errors.js
var ENSCheckInterfaceSupportError = class extends BaseWeb3Error {
  constructor(errorDetails) {
    super(`ENS resolver check interface support error. "${errorDetails}"`);
    this.code = ERR_ENS_CHECK_INTERFACE_SUPPORT;
  }
};
var ENSUnsupportedNetworkError = class extends BaseWeb3Error {
  constructor(networkType) {
    super(`ENS is not supported on network ${networkType}`);
    this.code = ERR_ENS_UNSUPPORTED_NETWORK;
  }
};
var ENSNetworkNotSyncedError = class extends BaseWeb3Error {
  constructor() {
    super(`Network not synced`);
    this.code = ERR_ENS_NETWORK_NOT_SYNCED;
  }
};

// node_modules/web3-errors/lib/esm/errors/generic_errors.js
var InvalidNumberOfParamsError = class extends BaseWeb3Error {
  constructor(got, expected, method) {
    super(`Invalid number of parameters for "${method}". Got "${got}" expected "${expected}"!`);
    this.got = got;
    this.expected = expected;
    this.method = method;
    this.code = ERR_PARAM;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { got: this.got, expected: this.expected, method: this.method });
  }
};
var InvalidMethodParamsError = class extends BaseWeb3Error {
  constructor(hint) {
    super(`Invalid parameters passed. "${typeof hint !== "undefined" ? hint : ""}"`);
    this.hint = hint;
    this.code = ERR_INVALID_METHOD_PARAMS;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { hint: this.hint });
  }
};
var FormatterError = class extends BaseWeb3Error {
  constructor() {
    super(...arguments);
    this.code = ERR_FORMATTERS;
  }
};
var MethodNotImplementedError = class extends BaseWeb3Error {
  constructor() {
    super("The method you're trying to call is not implemented.");
    this.code = ERR_METHOD_NOT_IMPLEMENTED;
  }
};
var OperationTimeoutError = class extends BaseWeb3Error {
  constructor() {
    super(...arguments);
    this.code = ERR_OPERATION_TIMEOUT;
  }
};
var OperationAbortError = class extends BaseWeb3Error {
  constructor() {
    super(...arguments);
    this.code = ERR_OPERATION_ABORT;
  }
};
var AbiError = class extends BaseWeb3Error {
  constructor(message, props) {
    super(message);
    this.code = ERR_ABI_ENCODING;
    this.props = props !== null && props !== void 0 ? props : {};
  }
};
var ExistingPluginNamespaceError = class extends BaseWeb3Error {
  constructor(pluginNamespace) {
    super(`A plugin with the namespace: ${pluginNamespace} has already been registered.`);
    this.code = ERR_EXISTING_PLUGIN_NAMESPACE;
  }
};

// node_modules/web3-errors/lib/esm/errors/provider_errors.js
var ProviderError = class extends BaseWeb3Error {
  constructor() {
    super(...arguments);
    this.code = ERR_PROVIDER;
  }
};
var InvalidProviderError = class extends BaseWeb3Error {
  constructor(clientUrl) {
    super(`Provider with url "${clientUrl}" is not set or invalid`);
    this.clientUrl = clientUrl;
    this.code = ERR_INVALID_PROVIDER;
  }
};
var InvalidClientError = class extends BaseWeb3Error {
  constructor(clientUrl) {
    super(`Client URL "${clientUrl}" is invalid.`);
    this.code = ERR_INVALID_CLIENT;
  }
};
var SubscriptionError = class extends BaseWeb3Error {
  constructor() {
    super(...arguments);
    this.code = ERR_SUBSCRIPTION;
  }
};
var Web3WSProviderError = class extends BaseWeb3Error {
  constructor() {
    super(...arguments);
    this.code = ERR_WS_PROVIDER;
  }
};

// node_modules/web3-errors/lib/esm/errors/signature_errors.js
var SignatureError = class extends InvalidValueError {
  constructor() {
    super(...arguments);
    this.code = ERR_SIGNATURE_FAILED;
  }
};

// node_modules/web3-errors/lib/esm/errors/transaction_errors.js
var TransactionError = class extends BaseWeb3Error {
  constructor(message, receipt) {
    super(message);
    this.receipt = receipt;
    this.code = ERR_TX;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { receipt: this.receipt });
  }
};
var RevertInstructionError = class extends BaseWeb3Error {
  constructor(reason, signature) {
    super(`Your request got reverted with the following reason string: ${reason}`);
    this.reason = reason;
    this.signature = signature;
    this.code = ERR_TX_REVERT_INSTRUCTION;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { reason: this.reason, signature: this.signature });
  }
};
var TransactionRevertInstructionError = class extends BaseWeb3Error {
  constructor(reason, signature, receipt, data) {
    super(`Transaction has been reverted by the EVM${receipt === void 0 ? "" : `:
 ${BaseWeb3Error.convertToString(receipt)}`}`);
    this.reason = reason;
    this.signature = signature;
    this.receipt = receipt;
    this.data = data;
    this.code = ERR_TX_REVERT_TRANSACTION;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { reason: this.reason, signature: this.signature, receipt: this.receipt, data: this.data });
  }
};
var TransactionRevertWithCustomError = class extends TransactionRevertInstructionError {
  constructor(reason, customErrorName, customErrorDecodedSignature, customErrorArguments, signature, receipt, data) {
    super(reason);
    this.reason = reason;
    this.customErrorName = customErrorName;
    this.customErrorDecodedSignature = customErrorDecodedSignature;
    this.customErrorArguments = customErrorArguments;
    this.signature = signature;
    this.receipt = receipt;
    this.data = data;
    this.code = ERR_TX_REVERT_TRANSACTION_CUSTOM_ERROR;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { reason: this.reason, customErrorName: this.customErrorName, customErrorDecodedSignature: this.customErrorDecodedSignature, customErrorArguments: this.customErrorArguments, signature: this.signature, receipt: this.receipt, data: this.data });
  }
};
var NoContractAddressFoundError = class extends TransactionError {
  constructor(receipt) {
    super("The transaction receipt didn't contain a contract address.", receipt);
    this.code = ERR_TX_NO_CONTRACT_ADDRESS;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { receipt: this.receipt });
  }
};
var ContractCodeNotStoredError = class extends TransactionError {
  constructor(receipt) {
    super("The contract code couldn't be stored, please check your gas limit.", receipt);
    this.code = ERR_TX_CONTRACT_NOT_STORED;
  }
};
var TransactionRevertedWithoutReasonError = class extends TransactionError {
  constructor(receipt) {
    super(`Transaction has been reverted by the EVM${receipt === void 0 ? "" : `:
 ${BaseWeb3Error.convertToString(receipt)}`}`, receipt);
    this.code = ERR_TX_REVERT_WITHOUT_REASON;
  }
};
var TransactionOutOfGasError = class extends TransactionError {
  constructor(receipt) {
    super(`Transaction ran out of gas. Please provide more gas:
 ${JSON.stringify(receipt, void 0, 2)}`, receipt);
    this.code = ERR_TX_OUT_OF_GAS;
  }
};
var UndefinedRawTransactionError = class extends TransactionError {
  constructor() {
    super(`Raw transaction undefined`);
    this.code = ERR_RAW_TX_UNDEFINED;
  }
};
var TransactionNotFound = class extends TransactionError {
  constructor() {
    super("Transaction not found");
    this.code = ERR_TX_NOT_FOUND;
  }
};
var InvalidTransactionWithSender = class extends InvalidValueError {
  constructor(value) {
    super(value, "invalid transaction with invalid sender");
    this.code = ERR_TX_INVALID_SENDER;
  }
};
var InvalidTransactionWithReceiver = class extends InvalidValueError {
  constructor(value) {
    super(value, "invalid transaction with invalid receiver");
    this.code = ERR_TX_INVALID_RECEIVER;
  }
};
var InvalidTransactionCall = class extends InvalidValueError {
  constructor(value) {
    super(value, "invalid transaction call");
    this.code = ERR_TX_INVALID_CALL;
  }
};
var MissingCustomChainError = class extends InvalidValueError {
  constructor() {
    super("MissingCustomChainError", "If tx.common is provided it must have tx.common.customChain");
    this.code = ERR_TX_MISSING_CUSTOM_CHAIN;
  }
};
var MissingCustomChainIdError = class extends InvalidValueError {
  constructor() {
    super("MissingCustomChainIdError", "If tx.common is provided it must have tx.common.customChain and tx.common.customChain.chainId");
    this.code = ERR_TX_MISSING_CUSTOM_CHAIN_ID;
  }
};
var ChainIdMismatchError = class extends InvalidValueError {
  constructor(value) {
    super(
      JSON.stringify(value),
      // https://github.com/ChainSafe/web3.js/blob/8783f4d64e424456bdc53b34ef1142d0a7cee4d7/packages/web3-eth-accounts/src/index.js#L176
      "Chain Id doesnt match in tx.chainId tx.common.customChain.chainId"
    );
    this.code = ERR_TX_CHAIN_ID_MISMATCH;
  }
};
var ChainMismatchError = class extends InvalidValueError {
  constructor(value) {
    super(JSON.stringify(value), "Chain doesnt match in tx.chain tx.common.basechain");
    this.code = ERR_TX_CHAIN_MISMATCH;
  }
};
var HardforkMismatchError = class extends InvalidValueError {
  constructor(value) {
    super(JSON.stringify(value), "hardfork doesnt match in tx.hardfork tx.common.hardfork");
    this.code = ERR_TX_HARDFORK_MISMATCH;
  }
};
var CommonOrChainAndHardforkError = class extends InvalidValueError {
  constructor() {
    super("CommonOrChainAndHardforkError", "Please provide the common object or the chain and hardfork property but not all together.");
    this.code = ERR_TX_INVALID_CHAIN_INFO;
  }
};
var MissingChainOrHardforkError = class extends InvalidValueError {
  constructor(value) {
    var _a, _b;
    super("MissingChainOrHardforkError", `When specifying chain and hardfork, both values must be defined. Received "chain": ${(_a = value.chain) !== null && _a !== void 0 ? _a : "undefined"}, "hardfork": ${(_b = value.hardfork) !== null && _b !== void 0 ? _b : "undefined"}`);
    this.code = ERR_TX_MISSING_CHAIN_INFO;
  }
};
var MissingGasInnerError = class extends BaseWeb3Error {
  constructor() {
    super('Missing properties in transaction, either define "gas" and "gasPrice" for type 0 transactions or "gas", "maxPriorityFeePerGas" and "maxFeePerGas" for type 2 transactions');
    this.code = ERR_TX_MISSING_GAS_INNER_ERROR;
  }
};
var MissingGasError = class extends InvalidValueError {
  constructor(value) {
    var _a, _b, _c, _d;
    super(`gas: ${(_a = value.gas) !== null && _a !== void 0 ? _a : "undefined"}, gasPrice: ${(_b = value.gasPrice) !== null && _b !== void 0 ? _b : "undefined"}, maxPriorityFeePerGas: ${(_c = value.maxPriorityFeePerGas) !== null && _c !== void 0 ? _c : "undefined"}, maxFeePerGas: ${(_d = value.maxFeePerGas) !== null && _d !== void 0 ? _d : "undefined"}`, '"gas" is missing');
    this.code = ERR_TX_MISSING_GAS;
    this.cause = new MissingGasInnerError();
  }
};
var TransactionGasMismatchInnerError = class extends BaseWeb3Error {
  constructor() {
    super('Missing properties in transaction, either define "gas" and "gasPrice" for type 0 transactions or "gas", "maxPriorityFeePerGas" and "maxFeePerGas" for type 2 transactions, not both');
    this.code = ERR_TX_GAS_MISMATCH_INNER_ERROR;
  }
};
var TransactionGasMismatchError = class extends InvalidValueError {
  constructor(value) {
    var _a, _b, _c, _d;
    super(`gas: ${(_a = value.gas) !== null && _a !== void 0 ? _a : "undefined"}, gasPrice: ${(_b = value.gasPrice) !== null && _b !== void 0 ? _b : "undefined"}, maxPriorityFeePerGas: ${(_c = value.maxPriorityFeePerGas) !== null && _c !== void 0 ? _c : "undefined"}, maxFeePerGas: ${(_d = value.maxFeePerGas) !== null && _d !== void 0 ? _d : "undefined"}`, "transaction must specify legacy or fee market gas properties, not both");
    this.code = ERR_TX_GAS_MISMATCH;
    this.cause = new TransactionGasMismatchInnerError();
  }
};
var InvalidGasOrGasPrice = class extends InvalidValueError {
  constructor(value) {
    var _a, _b;
    super(`gas: ${(_a = value.gas) !== null && _a !== void 0 ? _a : "undefined"}, gasPrice: ${(_b = value.gasPrice) !== null && _b !== void 0 ? _b : "undefined"}`, "Gas or gasPrice is lower than 0");
    this.code = ERR_TX_INVALID_LEGACY_GAS;
  }
};
var InvalidMaxPriorityFeePerGasOrMaxFeePerGas = class extends InvalidValueError {
  constructor(value) {
    var _a, _b;
    super(`maxPriorityFeePerGas: ${(_a = value.maxPriorityFeePerGas) !== null && _a !== void 0 ? _a : "undefined"}, maxFeePerGas: ${(_b = value.maxFeePerGas) !== null && _b !== void 0 ? _b : "undefined"}`, "maxPriorityFeePerGas or maxFeePerGas is lower than 0");
    this.code = ERR_TX_INVALID_FEE_MARKET_GAS;
  }
};
var Eip1559GasPriceError = class extends InvalidValueError {
  constructor(value) {
    super(value, "eip-1559 transactions don't support gasPrice");
    this.code = ERR_TX_INVALID_FEE_MARKET_GAS_PRICE;
  }
};
var UnsupportedFeeMarketError = class extends InvalidValueError {
  constructor(value) {
    var _a, _b;
    super(`maxPriorityFeePerGas: ${(_a = value.maxPriorityFeePerGas) !== null && _a !== void 0 ? _a : "undefined"}, maxFeePerGas: ${(_b = value.maxFeePerGas) !== null && _b !== void 0 ? _b : "undefined"}`, "pre-eip-1559 transaction don't support maxFeePerGas/maxPriorityFeePerGas");
    this.code = ERR_TX_INVALID_LEGACY_FEE_MARKET;
  }
};
var InvalidTransactionObjectError = class extends InvalidValueError {
  constructor(value) {
    super(value, "invalid transaction object");
    this.code = ERR_TX_INVALID_OBJECT;
  }
};
var InvalidNonceOrChainIdError = class extends InvalidValueError {
  constructor(value) {
    var _a, _b;
    super(`nonce: ${(_a = value.nonce) !== null && _a !== void 0 ? _a : "undefined"}, chainId: ${(_b = value.chainId) !== null && _b !== void 0 ? _b : "undefined"}`, "Nonce or chainId is lower than 0");
    this.code = ERR_TX_INVALID_NONCE_OR_CHAIN_ID;
  }
};
var UnableToPopulateNonceError = class extends InvalidValueError {
  constructor() {
    super("UnableToPopulateNonceError", "unable to populate nonce, no from address available");
    this.code = ERR_TX_UNABLE_TO_POPULATE_NONCE;
  }
};
var Eip1559NotSupportedError = class extends InvalidValueError {
  constructor() {
    super("Eip1559NotSupportedError", "Network doesn't support eip-1559");
    this.code = ERR_TX_UNSUPPORTED_EIP_1559;
  }
};
var UnsupportedTransactionTypeError = class extends InvalidValueError {
  constructor(value) {
    super(value, "unsupported transaction type");
    this.code = ERR_TX_UNSUPPORTED_TYPE;
  }
};
var TransactionDataAndInputError = class extends InvalidValueError {
  constructor(value) {
    var _a, _b;
    super(`data: ${(_a = value.data) !== null && _a !== void 0 ? _a : "undefined"}, input: ${(_b = value.input) !== null && _b !== void 0 ? _b : "undefined"}`, `You can't have "data" and "input" as properties of transactions at the same time, please use either "data" or "input" instead.`);
    this.code = ERR_TX_DATA_AND_INPUT;
  }
};
var TransactionSendTimeoutError = class extends BaseWeb3Error {
  constructor(value) {
    super(`The connected Ethereum Node did not respond within ${value.numberOfSeconds} seconds, please make sure your transaction was properly sent and you are connected to a healthy Node. Be aware that transaction might still be pending or mined!
	Transaction Hash: ${value.transactionHash ? value.transactionHash.toString() : "not available"}`);
    this.code = ERR_TX_SEND_TIMEOUT;
  }
};
function transactionTimeoutHint(transactionHash) {
  return `Please make sure your transaction was properly sent and there are no previous pending transaction for the same account. However, be aware that it might still be mined!
	Transaction Hash: ${transactionHash ? transactionHash.toString() : "not available"}`;
}
var TransactionPollingTimeoutError = class extends BaseWeb3Error {
  constructor(value) {
    super(`Transaction was not mined within ${value.numberOfSeconds} seconds. ${transactionTimeoutHint(value.transactionHash)}`);
    this.code = ERR_TX_POLLING_TIMEOUT;
  }
};
var TransactionBlockTimeoutError = class extends BaseWeb3Error {
  constructor(value) {
    super(`Transaction started at ${value.starterBlockNumber} but was not mined within ${value.numberOfBlocks} blocks. ${transactionTimeoutHint(value.transactionHash)}`);
    this.code = ERR_TX_BLOCK_TIMEOUT;
  }
};
var TransactionMissingReceiptOrBlockHashError = class extends InvalidValueError {
  constructor(value) {
    var _a, _b;
    super(`receipt: ${JSON.stringify(value.receipt)}, blockHash: ${(_a = value.blockHash) === null || _a === void 0 ? void 0 : _a.toString()}, transactionHash: ${(_b = value.transactionHash) === null || _b === void 0 ? void 0 : _b.toString()}`, `Receipt missing or blockHash null`);
    this.code = ERR_TX_RECEIPT_MISSING_OR_BLOCKHASH_NULL;
  }
};
var TransactionReceiptMissingBlockNumberError = class extends InvalidValueError {
  constructor(value) {
    super(`receipt: ${JSON.stringify(value.receipt)}`, `Receipt missing block number`);
    this.code = ERR_TX_RECEIPT_MISSING_BLOCK_NUMBER;
  }
};
var TransactionSigningError = class extends BaseWeb3Error {
  constructor(errorDetails) {
    super(`Invalid signature. "${errorDetails}"`);
    this.code = ERR_TX_SIGNING;
  }
};
var LocalWalletNotAvailableError = class extends InvalidValueError {
  constructor() {
    super("LocalWalletNotAvailableError", `Attempted to index account in local wallet, but no wallet is available`);
    this.code = ERR_TX_LOCAL_WALLET_NOT_AVAILABLE;
  }
};
var InvalidPropertiesForTransactionTypeError = class extends BaseWeb3Error {
  constructor(validationError, txType) {
    const invalidPropertyNames = [];
    validationError.forEach((error) => invalidPropertyNames.push(error.keyword));
    super(`The following properties are invalid for the transaction type ${txType}: ${invalidPropertyNames.join(", ")}`);
    this.code = ERR_TX_INVALID_PROPERTIES_FOR_TYPE;
  }
};

// node_modules/web3-errors/lib/esm/errors/utils_errors.js
var InvalidBytesError = class extends InvalidValueError {
  constructor(value) {
    super(value, "can not parse as byte data");
    this.code = ERR_INVALID_BYTES;
  }
};
var InvalidNumberError = class extends InvalidValueError {
  constructor(value) {
    super(value, "can not parse as number data");
    this.code = ERR_INVALID_NUMBER;
  }
};
var InvalidAddressError = class extends InvalidValueError {
  constructor(value) {
    super(value, "invalid ethereum address");
    this.code = ERR_INVALID_ADDRESS;
  }
};
var InvalidStringError = class extends InvalidValueError {
  constructor(value) {
    super(value, "not a valid string");
    this.code = ERR_INVALID_STRING;
  }
};
var InvalidUnitError = class extends InvalidValueError {
  constructor(value) {
    super(value, "invalid unit");
    this.code = ERR_INVALID_UNIT;
  }
};
var InvalidIntegerError = class extends InvalidValueError {
  constructor(value) {
    super(value, "not a valid unit. Must be a positive integer");
    this.code = ERR_INVALID_INTEGER;
  }
};
var HexProcessingError = class extends InvalidValueError {
  constructor(value) {
    super(value, "can not be converted to hex");
    this.code = ERR_INVALID_HEX;
  }
};
var NibbleWidthError = class extends InvalidValueError {
  constructor(value) {
    super(value, "value greater than the nibble width");
    this.code = ERR_INVALID_NIBBLE_WIDTH;
  }
};
var InvalidTypeError = class extends InvalidValueError {
  constructor(value) {
    super(value, "invalid type, type not supported");
    this.code = ERR_INVALID_TYPE;
  }
};
var InvalidBooleanError = class extends InvalidValueError {
  constructor(value) {
    super(value, "not a valid boolean.");
    this.code = ERR_INVALID_BOOLEAN;
  }
};
var InvalidUnsignedIntegerError = class extends InvalidValueError {
  constructor(value) {
    super(value, "not a valid unsigned integer.");
    this.code = ERR_INVALID_UNSIGNED_INTEGER;
  }
};
var InvalidSizeError = class extends InvalidValueError {
  constructor(value) {
    super(value, "invalid size given.");
    this.code = ERR_INVALID_SIZE;
  }
};
var InvalidLargeValueError = class extends InvalidValueError {
  constructor(value) {
    super(value, "value is larger than size.");
    this.code = ERR_INVALID_LARGE_VALUE;
  }
};
var InvalidBlockError = class extends InvalidValueError {
  constructor(value) {
    super(value, "invalid string given");
    this.code = ERR_INVALID_BLOCK;
  }
};
var InvalidTypeAbiInputError = class extends InvalidValueError {
  constructor(value) {
    super(value, "components found but type is not tuple");
    this.code = ERR_INVALID_TYPE_ABI;
  }
};

// node_modules/web3-errors/lib/esm/errors/response_errors.js
var isResponseWithError = (response) => !Array.isArray(response) && response.jsonrpc === "2.0" && !!response && // eslint-disable-next-line no-null/no-null
(response.result === void 0 || response.result === null) && // JSON RPC consider "null" as valid response
"error" in response && (typeof response.id === "number" || typeof response.id === "string");
var buildErrorMessage = (response) => isResponseWithError(response) ? response.error.message : "";
var ResponseError = class extends BaseWeb3Error {
  constructor(response, message, request, statusCode) {
    var _a;
    super(message !== null && message !== void 0 ? message : `Returned error: ${Array.isArray(response) ? response.map((r) => buildErrorMessage(r)).join(",") : buildErrorMessage(response)}`);
    this.code = ERR_RESPONSE;
    if (!message) {
      this.data = Array.isArray(response) ? response.map((r) => {
        var _a2;
        return (_a2 = r.error) === null || _a2 === void 0 ? void 0 : _a2.data;
      }) : (_a = response === null || response === void 0 ? void 0 : response.error) === null || _a === void 0 ? void 0 : _a.data;
    }
    this.statusCode = statusCode;
    this.request = request;
    let errorOrErrors;
    if (`error` in response) {
      errorOrErrors = response.error;
    } else if (response instanceof Array) {
      errorOrErrors = response.filter((r) => r.error).map((r) => r.error);
    }
    if (Array.isArray(errorOrErrors) && errorOrErrors.length > 0) {
      this.cause = new MultipleErrors(errorOrErrors);
    } else {
      this.cause = errorOrErrors;
    }
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { data: this.data, request: this.request, statusCode: this.statusCode });
  }
};
var InvalidResponseError = class extends ResponseError {
  constructor(result, request) {
    super(result, void 0, request);
    this.code = ERR_INVALID_RESPONSE;
    let errorOrErrors;
    if (`error` in result) {
      errorOrErrors = result.error;
    } else if (result instanceof Array) {
      errorOrErrors = result.map((r) => r.error);
    }
    if (Array.isArray(errorOrErrors)) {
      this.cause = new MultipleErrors(errorOrErrors);
    } else {
      this.cause = errorOrErrors;
    }
  }
};

// node_modules/web3-errors/lib/esm/errors/core_errors.js
var ConfigHardforkMismatchError = class extends BaseWeb3Error {
  constructor(defaultHardfork, commonHardFork) {
    super(`Web3Config hardfork doesnt match in defaultHardfork ${defaultHardfork} and common.hardfork ${commonHardFork}`);
    this.code = ERR_CORE_HARDFORK_MISMATCH;
  }
};
var ConfigChainMismatchError = class extends BaseWeb3Error {
  constructor(defaultHardfork, commonHardFork) {
    super(`Web3Config chain doesnt match in defaultHardfork ${defaultHardfork} and common.hardfork ${commonHardFork}`);
    this.code = ERR_CORE_HARDFORK_MISMATCH;
  }
};

// node_modules/web3-errors/lib/esm/errors/rpc_error_messages.js
var genericRpcErrorMessageTemplate = "An Rpc error has occured with a code of *code*";
var RpcErrorMessages = {
  //  EIP-1474 & JSON RPC 2.0
  // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1474.md
  [ERR_RPC_INVALID_JSON]: {
    message: "Parse error",
    description: "Invalid JSON"
  },
  [ERR_RPC_INVALID_REQUEST]: {
    message: "Invalid request",
    description: "JSON is not a valid request object	"
  },
  [ERR_RPC_INVALID_METHOD]: {
    message: "Method not found",
    description: "Method does not exist	"
  },
  [ERR_RPC_INVALID_PARAMS]: {
    message: "Invalid params",
    description: "Invalid method parameters"
  },
  [ERR_RPC_INTERNAL_ERROR]: {
    message: "Internal error",
    description: "Internal JSON-RPC error"
  },
  [ERR_RPC_INVALID_INPUT]: {
    message: "Invalid input",
    description: "Missing or invalid parameters"
  },
  [ERR_RPC_MISSING_RESOURCE]: {
    message: "Resource not found",
    description: "Requested resource not found"
  },
  [ERR_RPC_UNAVAILABLE_RESOURCE]: {
    message: "Resource unavailable",
    description: "Requested resource not available"
  },
  [ERR_RPC_TRANSACTION_REJECTED]: {
    message: "Transaction rejected",
    description: "Transaction creation failed"
  },
  [ERR_RPC_UNSUPPORTED_METHOD]: {
    message: "Method not supported",
    description: "Method is not implemented"
  },
  [ERR_RPC_LIMIT_EXCEEDED]: {
    message: "Limit exceeded",
    description: "Request exceeds defined limit"
  },
  [ERR_RPC_NOT_SUPPORTED]: {
    message: "JSON-RPC version not supported",
    description: "Version of JSON-RPC protocol is not supported"
  },
  // EIP-1193
  // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md#provider-errors
  [JSONRPC_ERR_REJECTED_REQUEST]: {
    name: "User Rejected Request",
    message: "The user rejected the request."
  },
  [JSONRPC_ERR_UNAUTHORIZED]: {
    name: "Unauthorized",
    message: "The requested method and/or account has not been authorized by the user."
  },
  [JSONRPC_ERR_UNSUPPORTED_METHOD]: {
    name: "Unsupported Method",
    message: "The Provider does not support the requested method."
  },
  [JSONRPC_ERR_DISCONNECTED]: {
    name: "Disconnected",
    message: "The Provider is disconnected from all chains."
  },
  [JSONRPC_ERR_CHAIN_DISCONNECTED]: {
    name: "Chain Disconnected",
    message: "The Provider is not connected to the requested chain."
  },
  // EIP-1193 - CloseEvent
  // https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/code
  "0-999": {
    name: "",
    message: "Not used."
  },
  1e3: {
    name: "Normal Closure",
    message: "The connection successfully completed the purpose for which it was created."
  },
  1001: {
    name: "Going Away",
    message: "The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection."
  },
  1002: {
    name: "Protocol error",
    message: "The endpoint is terminating the connection due to a protocol error."
  },
  1003: {
    name: "Unsupported Data",
    message: "The connection is being terminated because the endpoint received data of a type it cannot accept. (For example, a text-only endpoint received binary data.)"
  },
  1004: {
    name: "Reserved",
    message: "Reserved. A meaning might be defined in the future."
  },
  1005: {
    name: "No Status Rcvd",
    message: "Reserved. Indicates that no status code was provided even though one was expected."
  },
  1006: {
    name: "Abnormal Closure",
    message: "Reserved. Indicates that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected."
  },
  1007: {
    name: "Invalid frame payload data",
    message: "The endpoint is terminating the connection because a message was received that contained inconsistent data (e.g., non-UTF-8 data within a text message)."
  },
  1008: {
    name: "Policy Violation",
    message: "The endpoint is terminating the connection because it received a message that violates its policy. This is a generic status code, used when codes 1003 and 1009 are not suitable."
  },
  1009: {
    name: "Message Too Big",
    message: "The endpoint is terminating the connection because a data frame was received that is too large."
  },
  1010: {
    name: "Mandatory Ext.",
    message: "The client is terminating the connection because it expected the server to negotiate one or more extension, but the server didn't."
  },
  1011: {
    name: "Internal Error",
    message: "The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request."
  },
  1012: {
    name: "Service Restart",
    message: "The server is terminating the connection because it is restarting."
  },
  1013: {
    name: "Try Again Later",
    message: "The server is terminating the connection due to a temporary condition, e.g. it is overloaded and is casting off some of its clients."
  },
  1014: {
    name: "Bad Gateway",
    message: "The server was acting as a gateway or proxy and received an invalid response from the upstream server. This is similar to 502 HTTP Status Code."
  },
  1015: {
    name: "TLS handshake",
    message: "Reserved. Indicates that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified)."
  },
  "1016-2999": {
    name: "",
    message: "For definition by future revisions of the WebSocket Protocol specification, and for definition by extension specifications."
  },
  "3000-3999": {
    name: "",
    message: "For use by libraries, frameworks, and applications. These status codes are registered directly with IANA. The interpretation of these codes is undefined by the WebSocket protocol."
  },
  "4000-4999": {
    name: "",
    message: "For private use, and thus can't be registered. Such codes can be used by prior agreements between WebSocket applications. The interpretation of these codes is undefined by the WebSocket protocol."
  }
};

// node_modules/web3-errors/lib/esm/errors/rpc_errors.js
var RpcError = class extends BaseWeb3Error {
  constructor(rpcError, message) {
    super(message !== null && message !== void 0 ? message : genericRpcErrorMessageTemplate.replace("*code*", rpcError.error.code.toString()));
    this.code = rpcError.error.code;
    this.id = rpcError.id;
    this.jsonrpc = rpcError.jsonrpc;
    this.jsonRpcError = rpcError.error;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { error: this.jsonRpcError, id: this.id, jsonRpc: this.jsonrpc });
  }
};
var EIP1193ProviderRpcError = class extends BaseWeb3Error {
  constructor(code, data) {
    var _a, _b, _c, _d;
    if (!code) {
      super();
    } else if ((_a = RpcErrorMessages[code]) === null || _a === void 0 ? void 0 : _a.message) {
      super(RpcErrorMessages[code].message);
    } else {
      const statusCodeRange = Object.keys(RpcErrorMessages).find((statusCode) => typeof statusCode === "string" && code >= parseInt(statusCode.split("-")[0], 10) && code <= parseInt(statusCode.split("-")[1], 10));
      super((_c = (_b = RpcErrorMessages[statusCodeRange !== null && statusCodeRange !== void 0 ? statusCodeRange : ""]) === null || _b === void 0 ? void 0 : _b.message) !== null && _c !== void 0 ? _c : genericRpcErrorMessageTemplate.replace("*code*", (_d = code === null || code === void 0 ? void 0 : code.toString()) !== null && _d !== void 0 ? _d : '""'));
    }
    this.code = code;
    this.data = data;
  }
};
var ParseError = class extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_INVALID_JSON].message);
    this.code = ERR_RPC_INVALID_JSON;
  }
};
var InvalidRequestError = class extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_INVALID_REQUEST].message);
    this.code = ERR_RPC_INVALID_REQUEST;
  }
};
var MethodNotFoundError = class extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_INVALID_METHOD].message);
    this.code = ERR_RPC_INVALID_METHOD;
  }
};
var InvalidParamsError = class extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_INVALID_PARAMS].message);
    this.code = ERR_RPC_INVALID_PARAMS;
  }
};
var InternalError = class extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_INTERNAL_ERROR].message);
    this.code = ERR_RPC_INTERNAL_ERROR;
  }
};
var InvalidInputError = class extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_INVALID_INPUT].message);
    this.code = ERR_RPC_INVALID_INPUT;
  }
};
var MethodNotSupported = class extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_UNSUPPORTED_METHOD].message);
    this.code = ERR_RPC_UNSUPPORTED_METHOD;
  }
};
var ResourceUnavailableError = class extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_UNAVAILABLE_RESOURCE].message);
    this.code = ERR_RPC_UNAVAILABLE_RESOURCE;
  }
};
var ResourcesNotFoundError = class extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_MISSING_RESOURCE].message);
    this.code = ERR_RPC_MISSING_RESOURCE;
  }
};
var VersionNotSupportedError = class extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_NOT_SUPPORTED].message);
    this.code = ERR_RPC_NOT_SUPPORTED;
  }
};
var TransactionRejectedError = class extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_TRANSACTION_REJECTED].message);
    this.code = ERR_RPC_TRANSACTION_REJECTED;
  }
};
var LimitExceededError = class extends RpcError {
  constructor(rpcError) {
    super(rpcError, RpcErrorMessages[ERR_RPC_LIMIT_EXCEEDED].message);
    this.code = ERR_RPC_LIMIT_EXCEEDED;
  }
};
var rpcErrorsMap = /* @__PURE__ */ new Map();
rpcErrorsMap.set(ERR_RPC_INVALID_JSON, { error: ParseError });
rpcErrorsMap.set(ERR_RPC_INVALID_REQUEST, {
  error: InvalidRequestError
});
rpcErrorsMap.set(ERR_RPC_INVALID_METHOD, {
  error: MethodNotFoundError
});
rpcErrorsMap.set(ERR_RPC_INVALID_PARAMS, { error: InvalidParamsError });
rpcErrorsMap.set(ERR_RPC_INTERNAL_ERROR, { error: InternalError });
rpcErrorsMap.set(ERR_RPC_INVALID_INPUT, { error: InvalidInputError });
rpcErrorsMap.set(ERR_RPC_UNSUPPORTED_METHOD, {
  error: MethodNotSupported
});
rpcErrorsMap.set(ERR_RPC_UNAVAILABLE_RESOURCE, {
  error: ResourceUnavailableError
});
rpcErrorsMap.set(ERR_RPC_TRANSACTION_REJECTED, {
  error: TransactionRejectedError
});
rpcErrorsMap.set(ERR_RPC_MISSING_RESOURCE, {
  error: ResourcesNotFoundError
});
rpcErrorsMap.set(ERR_RPC_NOT_SUPPORTED, {
  error: VersionNotSupportedError
});
rpcErrorsMap.set(ERR_RPC_LIMIT_EXCEEDED, { error: LimitExceededError });

// node_modules/web3-errors/lib/esm/errors/schema_errors.js
var SchemaFormatError = class extends BaseWeb3Error {
  constructor(type) {
    super(`Format for the type ${type} is unsupported`);
    this.type = type;
    this.code = ERR_SCHEMA_FORMAT;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { type: this.type });
  }
};

// node_modules/zod/lib/index.mjs
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return __spreadValues(__spreadValues({}, first), second);
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = __spreadProps(__spreadValues({}, issueData), {
    path: fullPath
  });
  if (issueData.message !== void 0) {
    return __spreadProps(__spreadValues({}, issueData), {
      path: fullPath,
      message: issueData.message
    });
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return __spreadProps(__spreadValues({}, issueData), {
    path: fullPath,
    message: errorMessage
  });
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === errorMap ? void 0 : errorMap
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static mergeObjectAsync(status, pairs) {
    return __async(this, null, function* () {
      const syncPairs = [];
      for (const pair of pairs) {
        const key = yield pair.key;
        const value = yield pair.value;
        syncPairs.push({
          key,
          value
        });
      }
      return _ParseStatus.mergeObjectSync(status, syncPairs);
    });
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var _ZodEnum_cache;
var _ZodNativeEnum_cache;
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    var _a, _b;
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message !== null && message !== void 0 ? message : ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: (_a = message !== null && message !== void 0 ? message : required_error) !== null && _a !== void 0 ? _a : ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    var _a, _b;
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if ((_b = (_a = err === null || err === void 0 ? void 0 : err.message) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  parseAsync(data, params) {
    return __async(this, null, function* () {
      const result = yield this.safeParseAsync(data, params);
      if (result.success)
        return result.data;
      throw result.error;
    });
  }
  safeParseAsync(data, params) {
    return __async(this, null, function* () {
      const ctx = {
        common: {
          issues: [],
          contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
          async: true
        },
        path: (params === null || params === void 0 ? void 0 : params.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
      const result = yield isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult);
      return handleResult(ctx, result);
    });
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue(__spreadValues({
        code: ZodIssueCode.custom
      }, getIssueProperties(val)));
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects(__spreadProps(__spreadValues({}, processCreateParams(this._def)), {
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    }));
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault(__spreadProps(__spreadValues({}, processCreateParams(this._def)), {
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    }));
  }
  brand() {
    return new ZodBranded(__spreadValues({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this
    }, processCreateParams(this._def)));
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch(__spreadProps(__spreadValues({}, processCreateParams(this._def)), {
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    }));
  }
  describe(description) {
    const This = this.constructor;
    return new This(__spreadProps(__spreadValues({}, this._def), {
      description
    }));
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
  if (args.precision) {
    regex = `${regex}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    regex = `${regex}(\\.\\d+)?`;
  }
  return regex;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if (!decoded.typ || !decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch (_a) {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), __spreadValues({
      validation,
      code: ZodIssueCode.invalid_string
    }, errorUtil.errToObj(message)));
  }
  _addCheck(check) {
    return new _ZodString(__spreadProps(__spreadValues({}, this._def), {
      checks: [...this._def.checks, check]
    }));
  }
  email(message) {
    return this._addCheck(__spreadValues({ kind: "email" }, errorUtil.errToObj(message)));
  }
  url(message) {
    return this._addCheck(__spreadValues({ kind: "url" }, errorUtil.errToObj(message)));
  }
  emoji(message) {
    return this._addCheck(__spreadValues({ kind: "emoji" }, errorUtil.errToObj(message)));
  }
  uuid(message) {
    return this._addCheck(__spreadValues({ kind: "uuid" }, errorUtil.errToObj(message)));
  }
  nanoid(message) {
    return this._addCheck(__spreadValues({ kind: "nanoid" }, errorUtil.errToObj(message)));
  }
  cuid(message) {
    return this._addCheck(__spreadValues({ kind: "cuid" }, errorUtil.errToObj(message)));
  }
  cuid2(message) {
    return this._addCheck(__spreadValues({ kind: "cuid2" }, errorUtil.errToObj(message)));
  }
  ulid(message) {
    return this._addCheck(__spreadValues({ kind: "ulid" }, errorUtil.errToObj(message)));
  }
  base64(message) {
    return this._addCheck(__spreadValues({ kind: "base64" }, errorUtil.errToObj(message)));
  }
  base64url(message) {
    return this._addCheck(__spreadValues({
      kind: "base64url"
    }, errorUtil.errToObj(message)));
  }
  jwt(options) {
    return this._addCheck(__spreadValues({ kind: "jwt" }, errorUtil.errToObj(options)));
  }
  ip(options) {
    return this._addCheck(__spreadValues({ kind: "ip" }, errorUtil.errToObj(options)));
  }
  cidr(options) {
    return this._addCheck(__spreadValues({ kind: "cidr" }, errorUtil.errToObj(options)));
  }
  datetime(options) {
    var _a, _b;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck(__spreadValues({
      kind: "datetime",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
      local: (_b = options === null || options === void 0 ? void 0 : options.local) !== null && _b !== void 0 ? _b : false
    }, errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)));
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck(__spreadValues({
      kind: "time",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision
    }, errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)));
  }
  duration(message) {
    return this._addCheck(__spreadValues({ kind: "duration" }, errorUtil.errToObj(message)));
  }
  regex(regex, message) {
    return this._addCheck(__spreadValues({
      kind: "regex",
      regex
    }, errorUtil.errToObj(message)));
  }
  includes(value, options) {
    return this._addCheck(__spreadValues({
      kind: "includes",
      value,
      position: options === null || options === void 0 ? void 0 : options.position
    }, errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)));
  }
  startsWith(value, message) {
    return this._addCheck(__spreadValues({
      kind: "startsWith",
      value
    }, errorUtil.errToObj(message)));
  }
  endsWith(value, message) {
    return this._addCheck(__spreadValues({
      kind: "endsWith",
      value
    }, errorUtil.errToObj(message)));
  }
  min(minLength, message) {
    return this._addCheck(__spreadValues({
      kind: "min",
      value: minLength
    }, errorUtil.errToObj(message)));
  }
  max(maxLength, message) {
    return this._addCheck(__spreadValues({
      kind: "max",
      value: maxLength
    }, errorUtil.errToObj(message)));
  }
  length(len, message) {
    return this._addCheck(__spreadValues({
      kind: "length",
      value: len
    }, errorUtil.errToObj(message)));
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString(__spreadProps(__spreadValues({}, this._def), {
      checks: [...this._def.checks, { kind: "trim" }]
    }));
  }
  toLowerCase() {
    return new _ZodString(__spreadProps(__spreadValues({}, this._def), {
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }));
  }
  toUpperCase() {
    return new _ZodString(__spreadProps(__spreadValues({}, this._def), {
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    }));
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  var _a;
  return new ZodString(__spreadValues({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false
  }, processCreateParams(params)));
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber(__spreadProps(__spreadValues({}, this._def), {
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    }));
  }
  _addCheck(check) {
    return new _ZodNumber(__spreadProps(__spreadValues({}, this._def), {
      checks: [...this._def.checks, check]
    }));
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber(__spreadValues({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false
  }, processCreateParams(params)));
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch (_a) {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt(__spreadProps(__spreadValues({}, this._def), {
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    }));
  }
  _addCheck(check) {
    return new _ZodBigInt(__spreadProps(__spreadValues({}, this._def), {
      checks: [...this._def.checks, check]
    }));
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt(__spreadValues({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false
  }, processCreateParams(params)));
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean(__spreadValues({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false
  }, processCreateParams(params)));
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate(__spreadProps(__spreadValues({}, this._def), {
      checks: [...this._def.checks, check]
    }));
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate(__spreadValues({
    checks: [],
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate
  }, processCreateParams(params)));
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol(__spreadValues({
    typeName: ZodFirstPartyTypeKind.ZodSymbol
  }, processCreateParams(params)));
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined(__spreadValues({
    typeName: ZodFirstPartyTypeKind.ZodUndefined
  }, processCreateParams(params)));
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull(__spreadValues({
    typeName: ZodFirstPartyTypeKind.ZodNull
  }, processCreateParams(params)));
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny(__spreadValues({
    typeName: ZodFirstPartyTypeKind.ZodAny
  }, processCreateParams(params)));
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown(__spreadValues({
    typeName: ZodFirstPartyTypeKind.ZodUnknown
  }, processCreateParams(params)));
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever(__spreadValues({
    typeName: ZodFirstPartyTypeKind.ZodNever
  }, processCreateParams(params)));
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid(__spreadValues({
    typeName: ZodFirstPartyTypeKind.ZodVoid
  }, processCreateParams(params)));
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray(__spreadProps(__spreadValues({}, this._def), {
      minLength: { value: minLength, message: errorUtil.toString(message) }
    }));
  }
  max(maxLength, message) {
    return new _ZodArray(__spreadProps(__spreadValues({}, this._def), {
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    }));
  }
  length(len, message) {
    return new _ZodArray(__spreadProps(__spreadValues({}, this._def), {
      exactLength: { value: len, message: errorUtil.toString(message) }
    }));
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray(__spreadValues({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray
  }, processCreateParams(params)));
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject(__spreadProps(__spreadValues({}, schema._def), {
      shape: () => newShape
    }));
  } else if (schema instanceof ZodArray) {
    return new ZodArray(__spreadProps(__spreadValues({}, schema._def), {
      type: deepPartialify(schema.element)
    }));
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(() => __async(this, null, function* () {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = yield pair.key;
          const value = yield pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      })).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject(__spreadValues(__spreadProps(__spreadValues({}, this._def), {
      unknownKeys: "strict"
    }), message !== void 0 ? {
      errorMap: (issue, ctx) => {
        var _a, _b, _c, _d;
        const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
        if (issue.code === "unrecognized_keys")
          return {
            message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
          };
        return {
          message: defaultError
        };
      }
    } : {}));
  }
  strip() {
    return new _ZodObject(__spreadProps(__spreadValues({}, this._def), {
      unknownKeys: "strip"
    }));
  }
  passthrough() {
    return new _ZodObject(__spreadProps(__spreadValues({}, this._def), {
      unknownKeys: "passthrough"
    }));
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject(__spreadProps(__spreadValues({}, this._def), {
      shape: () => __spreadValues(__spreadValues({}, this._def.shape()), augmentation)
    }));
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => __spreadValues(__spreadValues({}, this._def.shape()), merging._def.shape()),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject(__spreadProps(__spreadValues({}, this._def), {
      catchall: index
    }));
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new _ZodObject(__spreadProps(__spreadValues({}, this._def), {
      shape: () => shape
    }));
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new _ZodObject(__spreadProps(__spreadValues({}, this._def), {
      shape: () => shape
    }));
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new _ZodObject(__spreadProps(__spreadValues({}, this._def), {
      shape: () => newShape
    }));
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new _ZodObject(__spreadProps(__spreadValues({}, this._def), {
      shape: () => newShape
    }));
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject(__spreadValues({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject
  }, processCreateParams(params)));
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject(__spreadValues({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject
  }, processCreateParams(params)));
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject(__spreadValues({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject
  }, processCreateParams(params)));
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map((option) => __async(this, null, function* () {
        const childCtx = __spreadProps(__spreadValues({}, ctx), {
          common: __spreadProps(__spreadValues({}, ctx.common), {
            issues: []
          }),
          parent: null
        });
        return {
          result: yield option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      }))).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = __spreadProps(__spreadValues({}, ctx), {
          common: __spreadProps(__spreadValues({}, ctx.common), {
            issues: []
          }),
          parent: null
        });
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion(__spreadValues({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion
  }, processCreateParams(params)));
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion(__spreadValues({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap
    }, processCreateParams(params)));
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = __spreadValues(__spreadValues({}, a), b);
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection(__spreadValues({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection
  }, processCreateParams(params)));
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple(__spreadProps(__spreadValues({}, this._def), {
      rest
    }));
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple(__spreadValues({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null
  }, processCreateParams(params)));
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord(__spreadValues({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord
      }, processCreateParams(third)));
    }
    return new _ZodRecord(__spreadValues({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord
    }, processCreateParams(second)));
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(() => __async(this, null, function* () {
        for (const pair of pairs) {
          const key = yield pair.key;
          const value = yield pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      }));
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap(__spreadValues({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap
  }, processCreateParams(params)));
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet(__spreadProps(__spreadValues({}, this._def), {
      minSize: { value: minSize, message: errorUtil.toString(message) }
    }));
  }
  max(maxSize, message) {
    return new _ZodSet(__spreadProps(__spreadValues({}, this._def), {
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    }));
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet(__spreadValues({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet
  }, processCreateParams(params)));
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(function(...args) {
        return __async(this, null, function* () {
          const error = new ZodError([]);
          const parsedArgs = yield me._def.args.parseAsync(args, params).catch((e) => {
            error.addIssue(makeArgsIssue(args, e));
            throw error;
          });
          const result = yield Reflect.apply(fn, this, parsedArgs);
          const parsedReturns = yield me._def.returns._def.type.parseAsync(result, params).catch((e) => {
            error.addIssue(makeReturnsIssue(result, e));
            throw error;
          });
          return parsedReturns;
        });
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction(__spreadProps(__spreadValues({}, this._def), {
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    }));
  }
  returns(returnType) {
    return new _ZodFunction(__spreadProps(__spreadValues({}, this._def), {
      returns: returnType
    }));
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction(__spreadValues({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction
    }, processCreateParams(params)));
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy(__spreadValues({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy
  }, processCreateParams(params)));
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral(__spreadValues({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral
  }, processCreateParams(params)));
};
function createZodEnum(values, params) {
  return new ZodEnum(__spreadValues({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum
  }, processCreateParams(params)));
}
var ZodEnum = class _ZodEnum extends ZodType {
  constructor() {
    super(...arguments);
    _ZodEnum_cache.set(this, void 0);
  }
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
      __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
    }
    if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, __spreadValues(__spreadValues({}, this._def), newDef));
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), __spreadValues(__spreadValues({}, this._def), newDef));
  }
};
_ZodEnum_cache = /* @__PURE__ */ new WeakMap();
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  constructor() {
    super(...arguments);
    _ZodNativeEnum_cache.set(this, void 0);
  }
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
      __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)), "f");
    }
    if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
_ZodNativeEnum_cache = /* @__PURE__ */ new WeakMap();
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum(__spreadValues({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum
  }, processCreateParams(params)));
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise(__spreadValues({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise
  }, processCreateParams(params)));
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then((processed2) => __async(this, null, function* () {
          if (status.value === "aborted")
            return INVALID;
          const result = yield this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        }));
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects(__spreadValues({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect
  }, processCreateParams(params)));
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects(__spreadValues({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects
  }, processCreateParams(params)));
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional(__spreadValues({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional
  }, processCreateParams(params)));
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable(__spreadValues({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable
  }, processCreateParams(params)));
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault(__spreadValues({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default
  }, processCreateParams(params)));
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = __spreadProps(__spreadValues({}, ctx), {
      common: __spreadProps(__spreadValues({}, ctx.common), {
        issues: []
      })
    });
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: __spreadValues({}, newCtx)
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch(__spreadValues({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch
  }, processCreateParams(params)));
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN(__spreadValues({
    typeName: ZodFirstPartyTypeKind.ZodNaN
  }, processCreateParams(params)));
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = () => __async(this, null, function* () {
        const inResult = yield this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      });
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly(__spreadValues({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly
  }, processCreateParams(params)));
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a, _b;
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          var _a2, _b2;
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = (_b2 = (_a2 = params.fatal) !== null && _a2 !== void 0 ? _a2 : fatal) !== null && _b2 !== void 0 ? _b2 : true;
            ctx.addIssue(__spreadProps(__spreadValues({ code: "custom" }, params), { fatal: _fatal }));
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = (_b = (_a = params.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
        ctx.addIssue(__spreadProps(__spreadValues({ code: "custom" }, params), { fatal: _fatal }));
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create(__spreadProps(__spreadValues({}, arg), { coerce: true })),
  number: (arg) => ZodNumber.create(__spreadProps(__spreadValues({}, arg), { coerce: true })),
  boolean: (arg) => ZodBoolean.create(__spreadProps(__spreadValues({}, arg), {
    coerce: true
  })),
  bigint: (arg) => ZodBigInt.create(__spreadProps(__spreadValues({}, arg), { coerce: true })),
  date: (arg) => ZodDate.create(__spreadProps(__spreadValues({}, arg), { coerce: true }))
};
var NEVER = INVALID;
var z = Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  datetimeRegex,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  "enum": enumType,
  "function": functionType,
  "instanceof": instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  "null": nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  "undefined": undefinedType,
  union: unionType,
  unknown: unknownType,
  "void": voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// node_modules/web3-validator/lib/esm/errors.js
var errorFormatter = (error) => {
  if (error.message) {
    return error.message;
  }
  return "unspecified error";
};
var Web3ValidatorError = class extends BaseWeb3Error {
  constructor(errors) {
    super();
    this.code = ERR_VALIDATION;
    this.errors = errors;
    super.message = `Web3 validator found ${errors.length} error[s]:
${this._compileErrors().join("\n")}`;
  }
  _compileErrors() {
    return this.errors.map(errorFormatter);
  }
};

// node_modules/ethereum-cryptography/node_modules/@noble/hashes/esm/_assert.js
function number(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error(`positive integer expected, not ${n}`);
}
function bool(b) {
  if (typeof b !== "boolean")
    throw new Error(`boolean expected, not ${b}`);
}
function isBytes(a) {
  return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
}
function bytes(b, ...lengths) {
  if (!isBytes(b))
    throw new Error("Uint8Array expected");
  if (lengths.length > 0 && !lengths.includes(b.length))
    throw new Error(`Uint8Array expected of length ${lengths}, not of length=${b.length}`);
}
function hash(h) {
  if (typeof h !== "function" || typeof h.create !== "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  number(h.outputLen);
  number(h.blockLen);
}
function exists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function output(out, instance) {
  bytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error(`digestInto() expects output buffer of length at least ${min}`);
  }
}
var assert = { number, bool, bytes, hash, exists, output };
var assert_default = assert;

// node_modules/ethereum-cryptography/node_modules/@noble/hashes/esm/_u64.js
var U32_MASK64 = BigInt(2 ** 32 - 1);
var _32n = BigInt(32);
function fromBig(n, le = false) {
  if (le)
    return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
  return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
  let Ah = new Uint32Array(lst.length);
  let Al = new Uint32Array(lst.length);
  for (let i = 0; i < lst.length; i++) {
    const { h, l } = fromBig(lst[i], le);
    [Ah[i], Al[i]] = [h, l];
  }
  return [Ah, Al];
}
var toBig = (h, l) => BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
var shrSH = (h, _l, s) => h >>> s;
var shrSL = (h, l, s) => h << 32 - s | l >>> s;
var rotrSH = (h, l, s) => h >>> s | l << 32 - s;
var rotrSL = (h, l, s) => h << 32 - s | l >>> s;
var rotrBH = (h, l, s) => h << 64 - s | l >>> s - 32;
var rotrBL = (h, l, s) => h >>> s - 32 | l << 64 - s;
var rotr32H = (_h, l) => l;
var rotr32L = (h, _l) => h;
var rotlSH = (h, l, s) => h << s | l >>> 32 - s;
var rotlSL = (h, l, s) => l << s | h >>> 32 - s;
var rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
var rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
function add(Ah, Al, Bh, Bl) {
  const l = (Al >>> 0) + (Bl >>> 0);
  return { h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0 };
}
var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
var u64 = {
  fromBig,
  split,
  toBig,
  shrSH,
  shrSL,
  rotrSH,
  rotrSL,
  rotrBH,
  rotrBL,
  rotr32H,
  rotr32L,
  rotlSH,
  rotlSL,
  rotlBH,
  rotlBL,
  add,
  add3L,
  add3H,
  add4L,
  add4H,
  add5H,
  add5L
};
var u64_default = u64;

// node_modules/ethereum-cryptography/node_modules/@noble/hashes/esm/crypto.js
var crypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;

// node_modules/ethereum-cryptography/node_modules/@noble/hashes/esm/utils.js
var u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
var createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
var rotr = (word, shift) => word << 32 - shift | word >>> shift;
var rotl = (word, shift) => word << shift | word >>> 32 - shift >>> 0;
var isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
var byteSwap = (word) => word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
function byteSwap32(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = byteSwap(arr[i]);
  }
}
var hexes = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
function utf8ToBytes(str) {
  if (typeof str !== "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
  return new Uint8Array(new TextEncoder().encode(str));
}
function toBytes(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  bytes(data);
  return data;
}
function concatBytes(...arrays) {
  let sum = 0;
  for (let i = 0; i < arrays.length; i++) {
    const a = arrays[i];
    bytes(a);
    sum += a.length;
  }
  const res = new Uint8Array(sum);
  for (let i = 0, pad = 0; i < arrays.length; i++) {
    const a = arrays[i];
    res.set(a, pad);
    pad += a.length;
  }
  return res;
}
var Hash = class {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
};
var toStr = {}.toString;
function checkOpts(defaults, opts) {
  if (opts !== void 0 && toStr.call(opts) !== "[object Object]")
    throw new Error("Options should be object or undefined");
  const merged = Object.assign(defaults, opts);
  return merged;
}
function wrapConstructor(hashCons) {
  const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}
function wrapXOFConstructorWithOpts(hashCons) {
  const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
  const tmp = hashCons({});
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = (opts) => hashCons(opts);
  return hashC;
}
function randomBytes(bytesLength = 32) {
  if (crypto && typeof crypto.getRandomValues === "function") {
    return crypto.getRandomValues(new Uint8Array(bytesLength));
  }
  throw new Error("crypto.getRandomValues must be defined");
}

// node_modules/ethereum-cryptography/node_modules/@noble/hashes/esm/sha3.js
var SHA3_PI = [];
var SHA3_ROTL = [];
var _SHA3_IOTA = [];
var _0n = BigInt(0);
var _1n = BigInt(1);
var _2n = BigInt(2);
var _7n = BigInt(7);
var _256n = BigInt(256);
var _0x71n = BigInt(113);
for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
  [x, y] = [y, (2 * x + 3 * y) % 5];
  SHA3_PI.push(2 * (5 * y + x));
  SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
  let t = _0n;
  for (let j = 0; j < 7; j++) {
    R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
    if (R & _2n)
      t ^= _1n << (_1n << BigInt(j)) - _1n;
  }
  _SHA3_IOTA.push(t);
}
var [SHA3_IOTA_H, SHA3_IOTA_L] = split(_SHA3_IOTA, true);
var rotlH = (h, l, s) => s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s);
var rotlL = (h, l, s) => s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s);
function keccakP(s, rounds = 24) {
  const B = new Uint32Array(5 * 2);
  for (let round = 24 - rounds; round < 24; round++) {
    for (let x = 0; x < 10; x++)
      B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
    for (let x = 0; x < 10; x += 2) {
      const idx1 = (x + 8) % 10;
      const idx0 = (x + 2) % 10;
      const B0 = B[idx0];
      const B1 = B[idx0 + 1];
      const Th = rotlH(B0, B1, 1) ^ B[idx1];
      const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
      for (let y = 0; y < 50; y += 10) {
        s[x + y] ^= Th;
        s[x + y + 1] ^= Tl;
      }
    }
    let curH = s[2];
    let curL = s[3];
    for (let t = 0; t < 24; t++) {
      const shift = SHA3_ROTL[t];
      const Th = rotlH(curH, curL, shift);
      const Tl = rotlL(curH, curL, shift);
      const PI = SHA3_PI[t];
      curH = s[PI];
      curL = s[PI + 1];
      s[PI] = Th;
      s[PI + 1] = Tl;
    }
    for (let y = 0; y < 50; y += 10) {
      for (let x = 0; x < 10; x++)
        B[x] = s[y + x];
      for (let x = 0; x < 10; x++)
        s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
    }
    s[0] ^= SHA3_IOTA_H[round];
    s[1] ^= SHA3_IOTA_L[round];
  }
  B.fill(0);
}
var Keccak = class _Keccak extends Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
    super();
    this.blockLen = blockLen;
    this.suffix = suffix;
    this.outputLen = outputLen;
    this.enableXOF = enableXOF;
    this.rounds = rounds;
    this.pos = 0;
    this.posOut = 0;
    this.finished = false;
    this.destroyed = false;
    number(outputLen);
    if (0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200);
    this.state32 = u32(this.state);
  }
  keccak() {
    if (!isLE)
      byteSwap32(this.state32);
    keccakP(this.state32, this.rounds);
    if (!isLE)
      byteSwap32(this.state32);
    this.posOut = 0;
    this.pos = 0;
  }
  update(data) {
    exists(this);
    const { blockLen, state } = this;
    data = toBytes(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      for (let i = 0; i < take; i++)
        state[this.pos++] ^= data[pos++];
      if (this.pos === blockLen)
        this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = true;
    const { state, suffix, pos, blockLen } = this;
    state[pos] ^= suffix;
    if ((suffix & 128) !== 0 && pos === blockLen - 1)
      this.keccak();
    state[blockLen - 1] ^= 128;
    this.keccak();
  }
  writeInto(out) {
    exists(this, false);
    bytes(out);
    this.finish();
    const bufferOut = this.state;
    const { blockLen } = this;
    for (let pos = 0, len = out.length; pos < len; ) {
      if (this.posOut >= blockLen)
        this.keccak();
      const take = Math.min(blockLen - this.posOut, len - pos);
      out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
      this.posOut += take;
      pos += take;
    }
    return out;
  }
  xofInto(out) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(out);
  }
  xof(bytes2) {
    number(bytes2);
    return this.xofInto(new Uint8Array(bytes2));
  }
  digestInto(out) {
    output(out, this);
    if (this.finished)
      throw new Error("digest() was already called");
    this.writeInto(out);
    this.destroy();
    return out;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true;
    this.state.fill(0);
  }
  _cloneInto(to) {
    const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
    to || (to = new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
    to.state32.set(this.state32);
    to.pos = this.pos;
    to.posOut = this.posOut;
    to.finished = this.finished;
    to.rounds = rounds;
    to.suffix = suffix;
    to.outputLen = outputLen;
    to.enableXOF = enableXOF;
    to.destroyed = this.destroyed;
    return to;
  }
};
var gen = (suffix, blockLen, outputLen) => wrapConstructor(() => new Keccak(blockLen, suffix, outputLen));
var sha3_224 = gen(6, 144, 224 / 8);
var sha3_256 = gen(6, 136, 256 / 8);
var sha3_384 = gen(6, 104, 384 / 8);
var sha3_512 = gen(6, 72, 512 / 8);
var keccak_224 = gen(1, 144, 224 / 8);
var keccak_256 = gen(1, 136, 256 / 8);
var keccak_384 = gen(1, 104, 384 / 8);
var keccak_512 = gen(1, 72, 512 / 8);
var genShake = (suffix, blockLen, outputLen) => wrapXOFConstructorWithOpts((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
var shake128 = genShake(31, 168, 128 / 8);
var shake256 = genShake(31, 136, 256 / 8);

// node_modules/ethereum-cryptography/esm/utils.js
var assertBool = assert_default.bool;
var assertBytes = assert_default.bytes;
function bytesToUtf8(data) {
  if (!(data instanceof Uint8Array)) {
    throw new TypeError(`bytesToUtf8 expected Uint8Array, got ${typeof data}`);
  }
  return new TextDecoder().decode(data);
}
function equalsBytes(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
function wrapHash(hash2) {
  return (msg) => {
    assert_default.bytes(msg);
    return hash2(msg);
  };
}
var crypto2 = (() => {
  const webCrypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  const nodeRequire = typeof module !== "undefined" && typeof module.require === "function" && module.require.bind(module);
  return {
    node: nodeRequire && !webCrypto ? nodeRequire("crypto") : void 0,
    web: webCrypto
  };
})();

// node_modules/ethereum-cryptography/esm/keccak.js
var keccak224 = wrapHash(keccak_224);
var keccak256 = (() => {
  const k = wrapHash(keccak_256);
  k.create = keccak_256.create;
  return k;
})();
var keccak384 = wrapHash(keccak_384);
var keccak512 = wrapHash(keccak_512);

// node_modules/web3-validator/lib/esm/utils.js
var utils_exports = {};
__export(utils_exports, {
  abiSchemaToJsonSchema: () => abiSchemaToJsonSchema,
  codePointToInt: () => codePointToInt,
  ensureIfUint8Array: () => ensureIfUint8Array,
  ethAbiToJsonSchema: () => ethAbiToJsonSchema,
  fetchArrayElement: () => fetchArrayElement,
  hexToNumber: () => hexToNumber,
  hexToUint8Array: () => hexToUint8Array,
  numberToHex: () => numberToHex,
  padLeft: () => padLeft,
  parseBaseType: () => parseBaseType,
  transformJsonDataToAbiFormat: () => transformJsonDataToAbiFormat,
  uint8ArrayToHexString: () => uint8ArrayToHexString
});

// node_modules/web3-validator/lib/esm/constants.js
var VALID_ETH_BASE_TYPES = ["bool", "int", "uint", "bytes", "string", "address", "tuple"];

// node_modules/web3-validator/lib/esm/validation/abi.js
var isAbiParameterSchema = (schema) => typeof schema === "object" && "type" in schema && "name" in schema;

// node_modules/web3-validator/lib/esm/validation/string.js
var isString = (value) => typeof value === "string";
var isHexStrict = (hex) => typeof hex === "string" && /^((-)?0x[0-9a-f]+|(0x))$/i.test(hex);
function isHexString(value, length) {
  if (typeof value !== "string" || !value.match(/^0x[0-9A-Fa-f]*$/))
    return false;
  if (typeof length !== "undefined" && length > 0 && value.length !== 2 + 2 * length)
    return false;
  return true;
}
var isHex = (hex) => typeof hex === "number" || typeof hex === "bigint" || typeof hex === "string" && /^((-0x|0x|-)?[0-9a-f]+|(0x))$/i.test(hex);
var isHexString8Bytes = (value, prefixed = true) => prefixed ? isHexStrict(value) && value.length === 18 : isHex(value) && value.length === 16;
var isHexString32Bytes = (value, prefixed = true) => prefixed ? isHexStrict(value) && value.length === 66 : isHex(value) && value.length === 64;
function isHexPrefixed(str) {
  if (typeof str !== "string") {
    throw new Error(`[isHexPrefixed] input must be type 'string', received type ${typeof str}`);
  }
  return str.startsWith("0x");
}
var validateNoLeadingZeroes = function(values) {
  for (const [k, v] of Object.entries(values)) {
    if (v !== void 0 && v.length > 0 && v[0] === 0) {
      throw new Error(`${k} cannot have leading zeroes, received: ${v.toString()}`);
    }
  }
};

// node_modules/web3-validator/lib/esm/utils.js
var extraTypes = ["hex", "number", "blockNumber", "blockNumberOrTag", "filter", "bloom"];
var parseBaseType = (type) => {
  let strippedType = type.replace(/ /, "");
  let baseTypeSize;
  let isArray = false;
  let arraySizes = [];
  if (type.includes("[")) {
    strippedType = strippedType.slice(0, strippedType.indexOf("["));
    arraySizes = [...type.matchAll(/(?:\[(\d*)\])/g)].map((match) => parseInt(match[1], 10)).map((size) => Number.isNaN(size) ? -1 : size);
    isArray = arraySizes.length > 0;
  }
  if (VALID_ETH_BASE_TYPES.includes(strippedType)) {
    return { baseType: strippedType, isArray, baseTypeSize, arraySizes };
  }
  if (strippedType.startsWith("int")) {
    baseTypeSize = parseInt(strippedType.substring(3), 10);
    strippedType = "int";
  } else if (strippedType.startsWith("uint")) {
    baseTypeSize = parseInt(type.substring(4), 10);
    strippedType = "uint";
  } else if (strippedType.startsWith("bytes")) {
    baseTypeSize = parseInt(strippedType.substring(5), 10);
    strippedType = "bytes";
  } else {
    return { baseType: void 0, isArray: false, baseTypeSize: void 0, arraySizes };
  }
  return { baseType: strippedType, isArray, baseTypeSize, arraySizes };
};
var convertEthType = (type, parentSchema = {}) => {
  const typePropertyPresent = Object.keys(parentSchema).includes("type");
  if (typePropertyPresent) {
    throw new Web3ValidatorError([
      {
        keyword: "eth",
        message: 'Either "eth" or "type" can be presented in schema',
        params: { eth: type },
        instancePath: "",
        schemaPath: ""
      }
    ]);
  }
  const { baseType, baseTypeSize } = parseBaseType(type);
  if (!baseType && !extraTypes.includes(type)) {
    throw new Web3ValidatorError([
      {
        keyword: "eth",
        message: `Eth data type "${type}" is not valid`,
        params: { eth: type },
        instancePath: "",
        schemaPath: ""
      }
    ]);
  }
  if (baseType) {
    if (baseType === "tuple") {
      throw new Error('"tuple" type is not implemented directly.');
    }
    return { format: `${baseType}${baseTypeSize !== null && baseTypeSize !== void 0 ? baseTypeSize : ""}`, required: true };
  }
  if (type) {
    return { format: type, required: true };
  }
  return {};
};
var abiSchemaToJsonSchema = (abis, level = "/0") => {
  const schema = {
    type: "array",
    items: [],
    maxItems: abis.length,
    minItems: abis.length
  };
  for (const [index, abi] of abis.entries()) {
    let abiType;
    let abiName;
    let abiComponents = [];
    if (isAbiParameterSchema(abi)) {
      abiType = abi.type;
      abiName = abi.name || `${level}/${index}`;
      abiComponents = abi.components;
    } else if (typeof abi === "string") {
      abiType = abi;
      abiName = `${level}/${index}`;
    } else if (Array.isArray(abi)) {
      if (abi[0] && typeof abi[0] === "string" && abi[0].startsWith("tuple") && !Array.isArray(abi[0]) && abi[1] && Array.isArray(abi[1])) {
        abiType = abi[0];
        abiName = `${level}/${index}`;
        abiComponents = abi[1];
      } else {
        abiType = "tuple";
        abiName = `${level}/${index}`;
        abiComponents = abi;
      }
    }
    const { baseType, isArray, arraySizes } = parseBaseType(abiType);
    let childSchema;
    let lastSchema = schema;
    for (let i = arraySizes.length - 1; i > 0; i -= 1) {
      childSchema = {
        type: "array",
        $id: abiName,
        items: [],
        maxItems: arraySizes[i],
        minItems: arraySizes[i]
      };
      if (arraySizes[i] < 0) {
        delete childSchema.maxItems;
        delete childSchema.minItems;
      }
      if (!Array.isArray(lastSchema.items)) {
        lastSchema.items = [lastSchema.items, childSchema];
      } else if (lastSchema.items.length === 0) {
        lastSchema.items = [childSchema];
      } else {
        lastSchema.items.push(childSchema);
      }
      lastSchema = childSchema;
    }
    if (baseType === "tuple" && !isArray) {
      const nestedTuple = abiSchemaToJsonSchema(abiComponents, abiName);
      nestedTuple.$id = abiName;
      lastSchema.items.push(nestedTuple);
    } else if (baseType === "tuple" && isArray) {
      const arraySize = arraySizes[0];
      const item = Object.assign({ type: "array", $id: abiName, items: abiSchemaToJsonSchema(abiComponents, abiName) }, arraySize >= 0 && { minItems: arraySize, maxItems: arraySize });
      lastSchema.items.push(item);
    } else if (isArray) {
      const arraySize = arraySizes[0];
      const item = Object.assign({ type: "array", $id: abiName, items: convertEthType(abiType) }, arraySize >= 0 && { minItems: arraySize, maxItems: arraySize });
      lastSchema.items.push(item);
    } else if (Array.isArray(lastSchema.items)) {
      lastSchema.items.push(Object.assign({ $id: abiName }, convertEthType(abiType)));
    } else {
      lastSchema.items.push(Object.assign({ $id: abiName }, convertEthType(abiType)));
    }
    lastSchema = schema;
  }
  return schema;
};
var ethAbiToJsonSchema = (abis) => abiSchemaToJsonSchema(abis);
var fetchArrayElement = (data, level) => {
  if (level === 1) {
    return data;
  }
  return fetchArrayElement(data[0], level - 1);
};
var transformJsonDataToAbiFormat = (abis, data, transformedData) => {
  const newData = [];
  for (const [index, abi] of abis.entries()) {
    let abiType;
    let abiName;
    let abiComponents = [];
    if (isAbiParameterSchema(abi)) {
      abiType = abi.type;
      abiName = abi.name;
      abiComponents = abi.components;
    } else if (typeof abi === "string") {
      abiType = abi;
    } else if (Array.isArray(abi)) {
      if (abi[1] && Array.isArray(abi[1])) {
        abiType = abi[0];
        abiComponents = abi[1];
      } else {
        abiType = "tuple";
        abiComponents = abi;
      }
    }
    const { baseType, isArray, arraySizes } = parseBaseType(abiType);
    const dataItem = Array.isArray(data) ? data[index] : data[abiName];
    if (baseType === "tuple" && !isArray) {
      newData.push(transformJsonDataToAbiFormat(abiComponents, dataItem, transformedData));
    } else if (baseType === "tuple" && isArray) {
      const tupleData = [];
      for (const tupleItem of dataItem) {
        if (arraySizes.length > 1) {
          const nestedItems = fetchArrayElement(tupleItem, arraySizes.length - 1);
          const nestedData = [];
          for (const nestedItem of nestedItems) {
            nestedData.push(transformJsonDataToAbiFormat(abiComponents, nestedItem, transformedData));
          }
          tupleData.push(nestedData);
        } else {
          tupleData.push(transformJsonDataToAbiFormat(abiComponents, tupleItem, transformedData));
        }
      }
      newData.push(tupleData);
    } else {
      newData.push(dataItem);
    }
  }
  transformedData = transformedData !== null && transformedData !== void 0 ? transformedData : [];
  transformedData.push(...newData);
  return transformedData;
};
var codePointToInt = (codePoint) => {
  if (codePoint >= 48 && codePoint <= 57) {
    return codePoint - 48;
  }
  if (codePoint >= 65 && codePoint <= 70) {
    return codePoint - 55;
  }
  if (codePoint >= 97 && codePoint <= 102) {
    return codePoint - 87;
  }
  throw new Error(`Invalid code point: ${codePoint}`);
};
var hexToNumber = (value) => {
  if (!isHexStrict(value)) {
    throw new Error("Invalid hex string");
  }
  const [negative, hexValue] = value.startsWith("-") ? [true, value.slice(1)] : [false, value];
  const num = BigInt(hexValue);
  if (num > Number.MAX_SAFE_INTEGER) {
    return negative ? -num : num;
  }
  if (num < Number.MIN_SAFE_INTEGER) {
    return num;
  }
  return negative ? -1 * Number(num) : Number(num);
};
var numberToHex = (value) => {
  if ((typeof value === "number" || typeof value === "bigint") && value < 0) {
    return `-0x${value.toString(16).slice(1)}`;
  }
  if ((typeof value === "number" || typeof value === "bigint") && value >= 0) {
    return `0x${value.toString(16)}`;
  }
  if (typeof value === "string" && isHexStrict(value)) {
    const [negative, hex] = value.startsWith("-") ? [true, value.slice(1)] : [false, value];
    const hexValue = hex.split(/^(-)?0(x|X)/).slice(-1)[0];
    return `${negative ? "-" : ""}0x${hexValue.replace(/^0+/, "").toLowerCase()}`;
  }
  if (typeof value === "string" && !isHexStrict(value)) {
    return numberToHex(BigInt(value));
  }
  throw new InvalidNumberError(value);
};
var padLeft = (value, characterAmount, sign = "0") => {
  if (typeof value === "string" && !isHexStrict(value)) {
    return value.padStart(characterAmount, sign);
  }
  const hex = typeof value === "string" && isHexStrict(value) ? value : numberToHex(value);
  const [prefix, hexValue] = hex.startsWith("-") ? ["-0x", hex.slice(3)] : ["0x", hex.slice(2)];
  return `${prefix}${hexValue.padStart(characterAmount, sign)}`;
};
function uint8ArrayToHexString(uint8Array) {
  let hexString = "0x";
  for (const e of uint8Array) {
    const hex = e.toString(16);
    hexString += hex.length === 1 ? `0${hex}` : hex;
  }
  return hexString;
}
var charCodeMap = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function charCodeToBase16(char) {
  if (char >= charCodeMap.zero && char <= charCodeMap.nine)
    return char - charCodeMap.zero;
  if (char >= charCodeMap.A && char <= charCodeMap.F)
    return char - (charCodeMap.A - 10);
  if (char >= charCodeMap.a && char <= charCodeMap.f)
    return char - (charCodeMap.a - 10);
  return void 0;
}
function hexToUint8Array(hex) {
  let offset = 0;
  if (hex.startsWith("0") && (hex[1] === "x" || hex[1] === "X")) {
    offset = 2;
  }
  if (hex.length % 2 !== 0) {
    throw new InvalidBytesError(`hex string has odd length: ${hex}`);
  }
  const length = (hex.length - offset) / 2;
  const bytes2 = new Uint8Array(length);
  for (let index = 0, j = offset; index < length; index += 1) {
    const nibbleLeft = charCodeToBase16(hex.charCodeAt(j++));
    const nibbleRight = charCodeToBase16(hex.charCodeAt(j++));
    if (nibbleLeft === void 0 || nibbleRight === void 0) {
      throw new InvalidBytesError(`Invalid byte sequence ("${hex[j - 2]}${hex[j - 1]}" in "${hex}").`);
    }
    bytes2[index] = nibbleLeft * 16 + nibbleRight;
  }
  return bytes2;
}
function ensureIfUint8Array(data) {
  var _a;
  if (!(data instanceof Uint8Array) && ((_a = data === null || data === void 0 ? void 0 : data.constructor) === null || _a === void 0 ? void 0 : _a.name) === "Uint8Array") {
    return Uint8Array.from(data);
  }
  return data;
}

// node_modules/web3-validator/lib/esm/validation/bytes.js
var isUint8Array = (data) => {
  var _a, _b;
  return data instanceof Uint8Array || ((_a = data === null || data === void 0 ? void 0 : data.constructor) === null || _a === void 0 ? void 0 : _a.name) === "Uint8Array" || ((_b = data === null || data === void 0 ? void 0 : data.constructor) === null || _b === void 0 ? void 0 : _b.name) === "Buffer";
};
var isBytes2 = (value, options = {
  abiType: "bytes"
}) => {
  if (typeof value !== "string" && !Array.isArray(value) && !isUint8Array(value)) {
    return false;
  }
  if (typeof value === "string" && isHexStrict(value) && value.startsWith("-")) {
    return false;
  }
  if (typeof value === "string" && !isHexStrict(value)) {
    return false;
  }
  let valueToCheck;
  if (typeof value === "string") {
    if (value.length % 2 !== 0) {
      return false;
    }
    valueToCheck = hexToUint8Array(value);
  } else if (Array.isArray(value)) {
    if (value.some((d) => d < 0 || d > 255 || !Number.isInteger(d))) {
      return false;
    }
    valueToCheck = new Uint8Array(value);
  } else {
    valueToCheck = value;
  }
  if (options === null || options === void 0 ? void 0 : options.abiType) {
    const { baseTypeSize } = parseBaseType(options.abiType);
    return baseTypeSize ? valueToCheck.length === baseTypeSize : true;
  }
  if (options === null || options === void 0 ? void 0 : options.size) {
    return valueToCheck.length === (options === null || options === void 0 ? void 0 : options.size);
  }
  return true;
};

// node_modules/web3-validator/lib/esm/validation/address.js
var checkAddressCheckSum = (data) => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(data))
    return false;
  const address = data.slice(2);
  const updatedData = utf8ToBytes(address.toLowerCase());
  const addressHash = uint8ArrayToHexString(keccak256(ensureIfUint8Array(updatedData))).slice(2);
  for (let i = 0; i < 40; i += 1) {
    if (parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i] || parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i]) {
      return false;
    }
  }
  return true;
};
var isAddress = (value, checkChecksum = true) => {
  if (typeof value !== "string" && !isUint8Array(value)) {
    return false;
  }
  let valueToCheck;
  if (isUint8Array(value)) {
    valueToCheck = uint8ArrayToHexString(value);
  } else if (typeof value === "string" && !isHexStrict(value)) {
    valueToCheck = value.toLowerCase().startsWith("0x") ? value : `0x${value}`;
  } else {
    valueToCheck = value;
  }
  if (!/^(0x)?[0-9a-f]{40}$/i.test(valueToCheck)) {
    return false;
  }
  if (/^(0x|0X)?[0-9a-f]{40}$/.test(valueToCheck) || /^(0x|0X)?[0-9A-F]{40}$/.test(valueToCheck)) {
    return true;
  }
  return checkChecksum ? checkAddressCheckSum(valueToCheck) : true;
};

// node_modules/web3-types/lib/esm/index.js
var esm_exports2 = {};
__export(esm_exports2, {
  BlockTags: () => BlockTags,
  DEFAULT_RETURN_FORMAT: () => DEFAULT_RETURN_FORMAT,
  ETH_DATA_FORMAT: () => ETH_DATA_FORMAT,
  FMT_BYTES: () => FMT_BYTES,
  FMT_NUMBER: () => FMT_NUMBER,
  HardforksOrdered: () => HardforksOrdered,
  TypedArray: () => TypedArray,
  Web3BaseProvider: () => Web3BaseProvider,
  Web3BaseWallet: () => Web3BaseWallet
});

// node_modules/web3-types/lib/esm/data_format_types.js
var FMT_NUMBER;
(function(FMT_NUMBER2) {
  FMT_NUMBER2["NUMBER"] = "NUMBER_NUMBER";
  FMT_NUMBER2["HEX"] = "NUMBER_HEX";
  FMT_NUMBER2["STR"] = "NUMBER_STR";
  FMT_NUMBER2["BIGINT"] = "NUMBER_BIGINT";
})(FMT_NUMBER || (FMT_NUMBER = {}));
var FMT_BYTES;
(function(FMT_BYTES2) {
  FMT_BYTES2["HEX"] = "BYTES_HEX";
  FMT_BYTES2["UINT8ARRAY"] = "BYTES_UINT8ARRAY";
})(FMT_BYTES || (FMT_BYTES = {}));
var DEFAULT_RETURN_FORMAT = {
  number: FMT_NUMBER.BIGINT,
  bytes: FMT_BYTES.HEX
};
var ETH_DATA_FORMAT = { number: FMT_NUMBER.HEX, bytes: FMT_BYTES.HEX };

// node_modules/web3-types/lib/esm/eth_types.js
var BlockTags;
(function(BlockTags2) {
  BlockTags2["EARLIEST"] = "earliest";
  BlockTags2["LATEST"] = "latest";
  BlockTags2["PENDING"] = "pending";
  BlockTags2["SAFE"] = "safe";
  BlockTags2["FINALIZED"] = "finalized";
  BlockTags2["COMMITTED"] = "committed";
})(BlockTags || (BlockTags = {}));
var HardforksOrdered;
(function(HardforksOrdered2) {
  HardforksOrdered2["chainstart"] = "chainstart";
  HardforksOrdered2["frontier"] = "frontier";
  HardforksOrdered2["homestead"] = "homestead";
  HardforksOrdered2["dao"] = "dao";
  HardforksOrdered2["tangerineWhistle"] = "tangerineWhistle";
  HardforksOrdered2["spuriousDragon"] = "spuriousDragon";
  HardforksOrdered2["byzantium"] = "byzantium";
  HardforksOrdered2["constantinople"] = "constantinople";
  HardforksOrdered2["petersburg"] = "petersburg";
  HardforksOrdered2["istanbul"] = "istanbul";
  HardforksOrdered2["muirGlacier"] = "muirGlacier";
  HardforksOrdered2["berlin"] = "berlin";
  HardforksOrdered2["london"] = "london";
  HardforksOrdered2["altair"] = "altair";
  HardforksOrdered2["arrowGlacier"] = "arrowGlacier";
  HardforksOrdered2["grayGlacier"] = "grayGlacier";
  HardforksOrdered2["bellatrix"] = "bellatrix";
  HardforksOrdered2["merge"] = "merge";
  HardforksOrdered2["capella"] = "capella";
  HardforksOrdered2["shanghai"] = "shanghai";
})(HardforksOrdered || (HardforksOrdered = {}));

// node_modules/web3-types/lib/esm/primitives_types.js
var TypedArray = Object.getPrototypeOf(Uint8Array);

// node_modules/web3-types/lib/esm/web3_base_provider.js
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var symbol = Symbol.for("web3/base-provider");
var Web3BaseProvider = class _Web3BaseProvider {
  static isWeb3Provider(provider) {
    return provider instanceof _Web3BaseProvider || Boolean(provider && provider[symbol]);
  }
  // To match an object "instanceof" does not work if
  // matcher class and object is using different package versions
  // to overcome this bottleneck used this approach.
  // The symbol value for one string will always remain same regardless of package versions
  // eslint-disable-next-line class-methods-use-this
  get [symbol]() {
    return true;
  }
  /**
   * @deprecated Please use `.request` instead.
   * @param payload - Request Payload
   * @param callback - Callback
   */
  send(payload, callback) {
    this.request(payload).then((response) => {
      callback(null, response);
    }).catch((err) => {
      callback(err);
    });
  }
  /**
   * @deprecated Please use `.request` instead.
   * @param payload - Request Payload
   */
  sendAsync(payload) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.request(payload);
    });
  }
  /**
   * Modify the return type of the request method to be fully compatible with EIP-1193
   *
   * [deprecated] In the future major releases (\>= v5) all providers are supposed to be fully compatible with EIP-1193.
   * So this method will not be needed and would not be available in the future.
   *
   * @returns A new instance of the provider with the request method fully compatible with EIP-1193
   *
   * @example
   * ```ts
   * const provider = new Web3HttpProvider('http://localhost:8545');
   * const fullyCompatibleProvider = provider.asEIP1193Provider();
   * const result = await fullyCompatibleProvider.request({ method: 'eth_getBalance' });
   * console.log(result); // '0x0234c8a3397aab58' or something like that
   * ```
   */
  asEIP1193Provider() {
    const newObj = Object.create(this);
    const originalRequest = newObj.request;
    newObj.request = function request(args) {
      return __awaiter(this, void 0, void 0, function* () {
        const response = yield originalRequest(args);
        return response.result;
      });
    };
    newObj.asEIP1193Provider = void 0;
    return newObj;
  }
};

// node_modules/web3-types/lib/esm/web3_base_wallet.js
var Web3BaseWallet = class extends Array {
  constructor(accountProvider) {
    super();
    this._accountProvider = accountProvider;
  }
};

// node_modules/web3-validator/lib/esm/validation/numbers.js
var isBigInt = (value) => typeof value === "bigint";
var bigintPower = (base, expo) => {
  if (expo === BigInt(0)) {
    return BigInt(1);
  }
  let res = base;
  for (let index = 1; index < expo; index += 1) {
    res *= base;
  }
  return res;
};
var isUInt = (value, options = {
  abiType: "uint"
}) => {
  if (!["number", "string", "bigint"].includes(typeof value) || typeof value === "string" && value.length === 0) {
    return false;
  }
  let size;
  if (options === null || options === void 0 ? void 0 : options.abiType) {
    const { baseTypeSize } = parseBaseType(options.abiType);
    if (baseTypeSize) {
      size = baseTypeSize;
    }
  } else if (options.bitSize) {
    size = options.bitSize;
  }
  const maxSize = bigintPower(BigInt(2), BigInt(size !== null && size !== void 0 ? size : 256)) - BigInt(1);
  try {
    const valueToCheck = typeof value === "string" && isHexStrict(value) ? BigInt(hexToNumber(value)) : BigInt(value);
    return valueToCheck >= 0 && valueToCheck <= maxSize;
  } catch (error) {
    return false;
  }
};
var isInt = (value, options = {
  abiType: "int"
}) => {
  if (!["number", "string", "bigint"].includes(typeof value)) {
    return false;
  }
  if (typeof value === "number" && value > Number.MAX_SAFE_INTEGER) {
    return false;
  }
  let size;
  if (options === null || options === void 0 ? void 0 : options.abiType) {
    const { baseTypeSize, baseType } = parseBaseType(options.abiType);
    if (baseType !== "int") {
      return false;
    }
    if (baseTypeSize) {
      size = baseTypeSize;
    }
  } else if (options.bitSize) {
    size = options.bitSize;
  }
  const maxSize = bigintPower(BigInt(2), BigInt((size !== null && size !== void 0 ? size : 256) - 1));
  const minSize = BigInt(-1) * bigintPower(BigInt(2), BigInt((size !== null && size !== void 0 ? size : 256) - 1));
  try {
    const valueToCheck = typeof value === "string" && isHexStrict(value) ? BigInt(hexToNumber(value)) : BigInt(value);
    return valueToCheck >= minSize && valueToCheck <= maxSize;
  } catch (error) {
    return false;
  }
};
var isNumber = (value) => {
  if (isInt(value)) {
    return true;
  }
  if (typeof value === "string" && /[0-9.]/.test(value) && value.indexOf(".") === value.lastIndexOf(".")) {
    return true;
  }
  if (typeof value === "number") {
    return true;
  }
  return false;
};

// node_modules/web3-validator/lib/esm/validation/block.js
var isBlockNumber = (value) => isUInt(value);
var isBlockTag = (value) => Object.values(BlockTags).includes(value);
var isBlockNumberOrTag = (value) => isBlockTag(value) || isBlockNumber(value);

// node_modules/web3-validator/lib/esm/validation/bloom.js
var isBloom = (bloom) => {
  if (typeof bloom !== "string") {
    return false;
  }
  if (!/^(0x)?[0-9a-f]{512}$/i.test(bloom)) {
    return false;
  }
  if (/^(0x)?[0-9a-f]{512}$/.test(bloom) || /^(0x)?[0-9A-F]{512}$/.test(bloom)) {
    return true;
  }
  return false;
};
var isInBloom = (bloom, value) => {
  if (typeof value === "string" && !isHexStrict(value)) {
    return false;
  }
  if (!isBloom(bloom)) {
    return false;
  }
  const uint8Array = typeof value === "string" ? hexToUint8Array(value) : value;
  const hash2 = uint8ArrayToHexString(keccak256(uint8Array)).slice(2);
  for (let i = 0; i < 12; i += 4) {
    const bitpos = (
      // eslint-disable-next-line no-bitwise
      (parseInt(hash2.slice(i, i + 2), 16) << 8) + parseInt(hash2.slice(i + 2, i + 4), 16) & 2047
    );
    const code = codePointToInt(bloom.charCodeAt(bloom.length - 1 - Math.floor(bitpos / 4)));
    const offset = 1 << bitpos % 4;
    if ((code & offset) !== offset) {
      return false;
    }
  }
  return true;
};
var isUserEthereumAddressInBloom = (bloom, ethereumAddress) => {
  if (!isBloom(bloom)) {
    return false;
  }
  if (!isAddress(ethereumAddress)) {
    return false;
  }
  const address = padLeft(ethereumAddress, 64);
  return isInBloom(bloom, address);
};
var isContractAddressInBloom = (bloom, contractAddress) => {
  if (!isBloom(bloom)) {
    return false;
  }
  if (!isAddress(contractAddress)) {
    return false;
  }
  return isInBloom(bloom, contractAddress);
};

// node_modules/web3-validator/lib/esm/validation/boolean.js
var isBoolean = (value) => {
  if (!["number", "string", "boolean"].includes(typeof value)) {
    return false;
  }
  if (typeof value === "boolean") {
    return true;
  }
  if (typeof value === "string" && !isHexStrict(value)) {
    return value === "1" || value === "0";
  }
  if (typeof value === "string" && isHexStrict(value)) {
    return value === "0x1" || value === "0x0";
  }
  return value === 1 || value === 0;
};

// node_modules/web3-validator/lib/esm/validation/object.js
var isNullish = (item) => (
  // Using "null" value intentionally for validation
  // eslint-disable-next-line no-null/no-null
  item === void 0 || item === null
);
var isObject = (item) => typeof item === "object" && !isNullish(item) && !Array.isArray(item) && !(item instanceof TypedArray);

// node_modules/web3-validator/lib/esm/validation/topic.js
var isTopic = (topic) => {
  if (typeof topic !== "string") {
    return false;
  }
  if (!/^(0x)?[0-9a-f]{64}$/i.test(topic)) {
    return false;
  }
  if (/^(0x)?[0-9a-f]{64}$/.test(topic) || /^(0x)?[0-9A-F]{64}$/.test(topic)) {
    return true;
  }
  return false;
};
var isTopicInBloom = (bloom, topic) => {
  if (!isBloom(bloom)) {
    return false;
  }
  if (!isTopic(topic)) {
    return false;
  }
  return isInBloom(bloom, topic);
};

// node_modules/web3-validator/lib/esm/validation/filter.js
var isFilterObject = (value) => {
  const expectedFilterProperties = [
    "fromBlock",
    "toBlock",
    "address",
    "topics",
    "blockHash"
  ];
  if (isNullish(value) || typeof value !== "object")
    return false;
  if (!Object.keys(value).every((property) => expectedFilterProperties.includes(property)))
    return false;
  if (!isNullish(value.fromBlock) && !isBlockNumberOrTag(value.fromBlock) || !isNullish(value.toBlock) && !isBlockNumberOrTag(value.toBlock))
    return false;
  if (!isNullish(value.address)) {
    if (Array.isArray(value.address)) {
      if (!value.address.every((address) => isAddress(address)))
        return false;
    } else if (!isAddress(value.address))
      return false;
  }
  if (!isNullish(value.topics)) {
    if (!value.topics.every((topic) => {
      if (isNullish(topic))
        return true;
      if (Array.isArray(topic)) {
        return topic.every((nestedTopic) => isTopic(nestedTopic));
      }
      if (isTopic(topic))
        return true;
      return false;
    }))
      return false;
  }
  return true;
};

// node_modules/web3-validator/lib/esm/formats.js
var formats = {
  address: (data) => isAddress(data),
  bloom: (data) => isBloom(data),
  blockNumber: (data) => isBlockNumber(data),
  blockTag: (data) => isBlockTag(data),
  blockNumberOrTag: (data) => isBlockNumberOrTag(data),
  bool: (data) => isBoolean(data),
  bytes: (data) => isBytes2(data),
  filter: (data) => isFilterObject(data),
  hex: (data) => isHexStrict(data),
  uint: (data) => isUInt(data),
  int: (data) => isInt(data),
  number: (data) => isNumber(data),
  string: (data) => isString(data)
};
for (let bitSize = 8; bitSize <= 256; bitSize += 8) {
  formats[`int${bitSize}`] = (data) => isInt(data, { bitSize });
  formats[`uint${bitSize}`] = (data) => isUInt(data, { bitSize });
}
for (let size = 1; size <= 32; size += 1) {
  formats[`bytes${size}`] = (data) => isBytes2(data, { size });
}
formats.bytes256 = formats.bytes;
var formats_default = formats;

// node_modules/web3-validator/lib/esm/validator.js
var convertToZod = (schema) => {
  if ((!(schema === null || schema === void 0 ? void 0 : schema.type) || (schema === null || schema === void 0 ? void 0 : schema.type) === "object") && (schema === null || schema === void 0 ? void 0 : schema.properties)) {
    const obj = {};
    for (const name of Object.keys(schema.properties)) {
      const zItem = convertToZod(schema.properties[name]);
      if (zItem) {
        obj[name] = zItem;
      }
    }
    if (Array.isArray(schema.required)) {
      return z.object(obj).partial().required(schema.required.reduce((acc, v) => Object.assign(Object.assign({}, acc), { [v]: true }), {}));
    }
    return z.object(obj).partial();
  }
  if ((schema === null || schema === void 0 ? void 0 : schema.type) === "array" && (schema === null || schema === void 0 ? void 0 : schema.items)) {
    if (Array.isArray(schema.items) && schema.items.length > 1 && schema.maxItems !== void 0 && new Set(schema.items.map((item) => item.$id)).size === schema.items.length) {
      const arr = [];
      for (const item of schema.items) {
        const zItem = convertToZod(item);
        if (zItem) {
          arr.push(zItem);
        }
      }
      return z.tuple(arr);
    }
    const nextSchema = Array.isArray(schema.items) ? schema.items[0] : schema.items;
    let zodArraySchema = z.array(convertToZod(nextSchema));
    zodArraySchema = schema.minItems !== void 0 ? zodArraySchema.min(schema.minItems) : zodArraySchema;
    zodArraySchema = schema.maxItems !== void 0 ? zodArraySchema.max(schema.maxItems) : zodArraySchema;
    return zodArraySchema;
  }
  if (schema.oneOf && Array.isArray(schema.oneOf)) {
    return z.union(schema.oneOf.map((oneOfSchema) => convertToZod(oneOfSchema)));
  }
  if (schema === null || schema === void 0 ? void 0 : schema.format) {
    if (!formats_default[schema.format]) {
      throw new SchemaFormatError(schema.format);
    }
    return z.any().refine(formats_default[schema.format], (value) => ({
      params: { value, format: schema.format }
    }));
  }
  if ((schema === null || schema === void 0 ? void 0 : schema.type) && (schema === null || schema === void 0 ? void 0 : schema.type) !== "object" && typeof z[String(schema.type)] === "function") {
    return z[String(schema.type)]();
  }
  return z.object({ data: z.any() }).partial();
};
var Validator = class _Validator {
  // eslint-disable-next-line no-useless-constructor, @typescript-eslint/no-empty-function
  static factory() {
    if (!_Validator.validatorInstance) {
      _Validator.validatorInstance = new _Validator();
    }
    return _Validator.validatorInstance;
  }
  validate(schema, data, options) {
    var _a, _b;
    const zod = convertToZod(schema);
    const result = zod.safeParse(data);
    if (!result.success) {
      const errors = this.convertErrors((_b = (_a = result.error) === null || _a === void 0 ? void 0 : _a.issues) !== null && _b !== void 0 ? _b : []);
      if (errors) {
        if (options === null || options === void 0 ? void 0 : options.silent) {
          return errors;
        }
        throw new Web3ValidatorError(errors);
      }
    }
    return void 0;
  }
  // eslint-disable-next-line class-methods-use-this
  convertErrors(errors) {
    if (errors && Array.isArray(errors) && errors.length > 0) {
      return errors.map((error) => {
        var _a;
        let message;
        let keyword;
        let params;
        let schemaPath;
        schemaPath = error.path.join("/");
        const field = String(error.path[error.path.length - 1]);
        const instancePath = error.path.join("/");
        if (error.code === ZodIssueCode.too_big) {
          keyword = "maxItems";
          schemaPath = `${instancePath}/maxItems`;
          params = { limit: error.maximum };
          message = `must NOT have more than ${error.maximum} items`;
        } else if (error.code === ZodIssueCode.too_small) {
          keyword = "minItems";
          schemaPath = `${instancePath}/minItems`;
          params = { limit: error.minimum };
          message = `must NOT have fewer than ${error.minimum} items`;
        } else if (error.code === ZodIssueCode.custom) {
          const { value, format } = (_a = error.params) !== null && _a !== void 0 ? _a : {};
          if (typeof value === "undefined") {
            message = `value at "/${schemaPath}" is required`;
          } else {
            message = `value "${// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            typeof value === "object" ? JSON.stringify(value) : value}" at "/${schemaPath}" must pass "${format}" validation`;
          }
          params = { value };
        }
        return {
          keyword: keyword !== null && keyword !== void 0 ? keyword : field,
          instancePath: instancePath ? `/${instancePath}` : "",
          schemaPath: schemaPath ? `#${schemaPath}` : "#",
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          params: params !== null && params !== void 0 ? params : { value: error.message },
          message: message !== null && message !== void 0 ? message : error.message
        };
      });
    }
    return void 0;
  }
};

// node_modules/web3-validator/lib/esm/web3_validator.js
var Web3Validator = class {
  constructor() {
    this._validator = Validator.factory();
  }
  validateJSONSchema(schema, data, options) {
    return this._validator.validate(schema, data, options);
  }
  validate(schema, data, options = { silent: false }) {
    var _a, _b;
    const jsonSchema = ethAbiToJsonSchema(schema);
    if (Array.isArray(jsonSchema.items) && ((_a = jsonSchema.items) === null || _a === void 0 ? void 0 : _a.length) === 0 && data.length === 0) {
      return void 0;
    }
    if (Array.isArray(jsonSchema.items) && ((_b = jsonSchema.items) === null || _b === void 0 ? void 0 : _b.length) === 0 && data.length !== 0) {
      throw new Web3ValidatorError([
        {
          instancePath: "/0",
          schemaPath: "/",
          keyword: "required",
          message: "empty schema against data can not be validated",
          params: data
        }
      ]);
    }
    return this._validator.validate(jsonSchema, data, options);
  }
};

// node_modules/web3-validator/lib/esm/default_validator.js
var validator = new Web3Validator();

// node_modules/web3-validator/lib/esm/validation/eth.js
var isValidEthBaseType = (type) => {
  const { baseType, baseTypeSize } = parseBaseType(type);
  if (!baseType) {
    return false;
  }
  if (baseType === type) {
    return true;
  }
  if ((baseType === "int" || baseType === "uint") && baseTypeSize) {
    if (!(baseTypeSize <= 256 && baseTypeSize % 8 === 0)) {
      return false;
    }
  }
  if (baseType === "bytes" && baseTypeSize) {
    if (!(baseTypeSize >= 1 && baseTypeSize <= 32)) {
      return false;
    }
  }
  return true;
};

export {
  number,
  bytes,
  hash,
  exists,
  output,
  u64_default,
  crypto,
  u32,
  createView,
  rotr,
  rotl,
  isLE,
  byteSwap32,
  utf8ToBytes,
  toBytes,
  concatBytes,
  Hash,
  checkOpts,
  wrapConstructor,
  randomBytes,
  assertBytes,
  bytesToUtf8,
  equalsBytes,
  keccak256,
  ERR_RESPONSE,
  ERR_INVALID_RESPONSE,
  ERR_PARAM,
  ERR_FORMATTERS,
  ERR_METHOD_NOT_IMPLEMENTED,
  ERR_OPERATION_TIMEOUT,
  ERR_OPERATION_ABORT,
  ERR_ABI_ENCODING,
  ERR_EXISTING_PLUGIN_NAMESPACE,
  ERR_INVALID_METHOD_PARAMS,
  ERR_MULTIPLE_ERRORS,
  ERR_CONTRACT,
  ERR_CONTRACT_RESOLVER_MISSING,
  ERR_CONTRACT_ABI_MISSING,
  ERR_CONTRACT_REQUIRED_CALLBACK,
  ERR_CONTRACT_EVENT_NOT_EXISTS,
  ERR_CONTRACT_RESERVED_EVENT,
  ERR_CONTRACT_MISSING_DEPLOY_DATA,
  ERR_CONTRACT_MISSING_ADDRESS,
  ERR_CONTRACT_MISSING_FROM_ADDRESS,
  ERR_CONTRACT_INSTANTIATION,
  ERR_CONTRACT_EXECUTION_REVERTED,
  ERR_CONTRACT_TX_DATA_AND_INPUT,
  ERR_TX,
  ERR_TX_REVERT_INSTRUCTION,
  ERR_TX_REVERT_TRANSACTION,
  ERR_TX_NO_CONTRACT_ADDRESS,
  ERR_TX_CONTRACT_NOT_STORED,
  ERR_TX_REVERT_WITHOUT_REASON,
  ERR_TX_OUT_OF_GAS,
  ERR_RAW_TX_UNDEFINED,
  ERR_TX_INVALID_SENDER,
  ERR_TX_INVALID_CALL,
  ERR_TX_MISSING_CUSTOM_CHAIN,
  ERR_TX_MISSING_CUSTOM_CHAIN_ID,
  ERR_TX_CHAIN_ID_MISMATCH,
  ERR_TX_INVALID_CHAIN_INFO,
  ERR_TX_MISSING_CHAIN_INFO,
  ERR_TX_MISSING_GAS,
  ERR_TX_INVALID_LEGACY_GAS,
  ERR_TX_INVALID_FEE_MARKET_GAS,
  ERR_TX_INVALID_FEE_MARKET_GAS_PRICE,
  ERR_TX_INVALID_LEGACY_FEE_MARKET,
  ERR_TX_INVALID_OBJECT,
  ERR_TX_INVALID_NONCE_OR_CHAIN_ID,
  ERR_TX_UNABLE_TO_POPULATE_NONCE,
  ERR_TX_UNSUPPORTED_EIP_1559,
  ERR_TX_UNSUPPORTED_TYPE,
  ERR_TX_DATA_AND_INPUT,
  ERR_TX_POLLING_TIMEOUT,
  ERR_TX_RECEIPT_MISSING_OR_BLOCKHASH_NULL,
  ERR_TX_RECEIPT_MISSING_BLOCK_NUMBER,
  ERR_TX_LOCAL_WALLET_NOT_AVAILABLE,
  ERR_TX_NOT_FOUND,
  ERR_TX_SEND_TIMEOUT,
  ERR_TX_BLOCK_TIMEOUT,
  ERR_TX_SIGNING,
  ERR_TX_GAS_MISMATCH,
  ERR_TX_CHAIN_MISMATCH,
  ERR_TX_HARDFORK_MISMATCH,
  ERR_TX_INVALID_RECEIVER,
  ERR_TX_REVERT_TRANSACTION_CUSTOM_ERROR,
  ERR_TX_INVALID_PROPERTIES_FOR_TYPE,
  ERR_TX_MISSING_GAS_INNER_ERROR,
  ERR_TX_GAS_MISMATCH_INNER_ERROR,
  ERR_CONN,
  ERR_CONN_INVALID,
  ERR_CONN_TIMEOUT,
  ERR_CONN_NOT_OPEN,
  ERR_CONN_CLOSE,
  ERR_CONN_MAX_ATTEMPTS,
  ERR_CONN_PENDING_REQUESTS,
  ERR_REQ_ALREADY_SENT,
  ERR_PROVIDER,
  ERR_INVALID_PROVIDER,
  ERR_INVALID_CLIENT,
  ERR_SUBSCRIPTION,
  ERR_WS_PROVIDER,
  ERR_PRIVATE_KEY_LENGTH,
  ERR_INVALID_PRIVATE_KEY,
  ERR_UNSUPPORTED_KDF,
  ERR_KEY_DERIVATION_FAIL,
  ERR_KEY_VERSION_UNSUPPORTED,
  ERR_INVALID_PASSWORD,
  ERR_IV_LENGTH,
  ERR_INVALID_KEYSTORE,
  ERR_PBKDF2_ITERATIONS,
  ERR_SIGNATURE_FAILED,
  ERR_INVALID_SIGNATURE,
  GENESIS_BLOCK_NUMBER,
  JSONRPC_ERR_REJECTED_REQUEST,
  JSONRPC_ERR_UNAUTHORIZED,
  JSONRPC_ERR_UNSUPPORTED_METHOD,
  JSONRPC_ERR_DISCONNECTED,
  JSONRPC_ERR_CHAIN_DISCONNECTED,
  ERR_ENS_CHECK_INTERFACE_SUPPORT,
  ERR_ENS_UNSUPPORTED_NETWORK,
  ERR_ENS_NETWORK_NOT_SYNCED,
  ERR_INVALID_STRING,
  ERR_INVALID_BYTES,
  ERR_INVALID_NUMBER,
  ERR_INVALID_UNIT,
  ERR_INVALID_ADDRESS,
  ERR_INVALID_HEX,
  ERR_INVALID_TYPE,
  ERR_INVALID_BOOLEAN,
  ERR_INVALID_UNSIGNED_INTEGER,
  ERR_INVALID_SIZE,
  ERR_INVALID_LARGE_VALUE,
  ERR_INVALID_BLOCK,
  ERR_INVALID_TYPE_ABI,
  ERR_INVALID_NIBBLE_WIDTH,
  ERR_INVALID_INTEGER,
  ERR_VALIDATION,
  ERR_CORE_HARDFORK_MISMATCH,
  ERR_CORE_CHAIN_MISMATCH,
  ERR_SCHEMA_FORMAT,
  ERR_RPC_INVALID_JSON,
  ERR_RPC_INVALID_REQUEST,
  ERR_RPC_INVALID_METHOD,
  ERR_RPC_INVALID_PARAMS,
  ERR_RPC_INTERNAL_ERROR,
  ERR_RPC_INVALID_INPUT,
  ERR_RPC_MISSING_RESOURCE,
  ERR_RPC_UNAVAILABLE_RESOURCE,
  ERR_RPC_TRANSACTION_REJECTED,
  ERR_RPC_UNSUPPORTED_METHOD,
  ERR_RPC_LIMIT_EXCEEDED,
  ERR_RPC_NOT_SUPPORTED,
  BaseWeb3Error,
  MultipleErrors,
  InvalidValueError,
  PrivateKeyLengthError,
  InvalidPrivateKeyError,
  InvalidSignatureError,
  InvalidKdfError,
  KeyDerivationError,
  KeyStoreVersionError,
  InvalidPasswordError,
  IVLengthError,
  PBKDF2IterationsError,
  ConnectionError,
  InvalidConnectionError,
  ConnectionTimeoutError,
  ConnectionNotOpenError,
  ConnectionCloseError,
  MaxAttemptsReachedOnReconnectingError,
  PendingRequestsOnReconnectingError,
  RequestAlreadySentError,
  Web3ContractError,
  ResolverMethodMissingError,
  ContractMissingABIError,
  ContractOnceRequiresCallbackError,
  ContractEventDoesNotExistError,
  ContractReservedEventError,
  ContractMissingDeployDataError,
  ContractNoAddressDefinedError,
  ContractNoFromAddressDefinedError,
  ContractInstantiationError,
  Eip838ExecutionError,
  ContractExecutionError,
  ContractTransactionDataAndInputError,
  ENSCheckInterfaceSupportError,
  ENSUnsupportedNetworkError,
  ENSNetworkNotSyncedError,
  InvalidNumberOfParamsError,
  InvalidMethodParamsError,
  FormatterError,
  MethodNotImplementedError,
  OperationTimeoutError,
  OperationAbortError,
  AbiError,
  ExistingPluginNamespaceError,
  ProviderError,
  InvalidProviderError,
  InvalidClientError,
  SubscriptionError,
  Web3WSProviderError,
  SignatureError,
  TransactionError,
  RevertInstructionError,
  TransactionRevertInstructionError,
  TransactionRevertWithCustomError,
  NoContractAddressFoundError,
  ContractCodeNotStoredError,
  TransactionRevertedWithoutReasonError,
  TransactionOutOfGasError,
  UndefinedRawTransactionError,
  TransactionNotFound,
  InvalidTransactionWithSender,
  InvalidTransactionWithReceiver,
  InvalidTransactionCall,
  MissingCustomChainError,
  MissingCustomChainIdError,
  ChainIdMismatchError,
  ChainMismatchError,
  HardforkMismatchError,
  CommonOrChainAndHardforkError,
  MissingChainOrHardforkError,
  MissingGasInnerError,
  MissingGasError,
  TransactionGasMismatchInnerError,
  TransactionGasMismatchError,
  InvalidGasOrGasPrice,
  InvalidMaxPriorityFeePerGasOrMaxFeePerGas,
  Eip1559GasPriceError,
  UnsupportedFeeMarketError,
  InvalidTransactionObjectError,
  InvalidNonceOrChainIdError,
  UnableToPopulateNonceError,
  Eip1559NotSupportedError,
  UnsupportedTransactionTypeError,
  TransactionDataAndInputError,
  TransactionSendTimeoutError,
  TransactionPollingTimeoutError,
  TransactionBlockTimeoutError,
  TransactionMissingReceiptOrBlockHashError,
  TransactionReceiptMissingBlockNumberError,
  TransactionSigningError,
  LocalWalletNotAvailableError,
  InvalidPropertiesForTransactionTypeError,
  InvalidBytesError,
  InvalidNumberError,
  InvalidAddressError,
  InvalidStringError,
  InvalidUnitError,
  InvalidIntegerError,
  HexProcessingError,
  NibbleWidthError,
  InvalidTypeError,
  InvalidBooleanError,
  InvalidUnsignedIntegerError,
  InvalidSizeError,
  InvalidLargeValueError,
  InvalidBlockError,
  InvalidTypeAbiInputError,
  ResponseError,
  InvalidResponseError,
  ConfigHardforkMismatchError,
  ConfigChainMismatchError,
  genericRpcErrorMessageTemplate,
  RpcErrorMessages,
  RpcError,
  EIP1193ProviderRpcError,
  ParseError,
  InvalidRequestError,
  MethodNotFoundError,
  InvalidParamsError,
  InternalError,
  InvalidInputError,
  MethodNotSupported,
  ResourceUnavailableError,
  ResourcesNotFoundError,
  VersionNotSupportedError,
  TransactionRejectedError,
  LimitExceededError,
  rpcErrorsMap,
  SchemaFormatError,
  esm_exports,
  Web3ValidatorError,
  VALID_ETH_BASE_TYPES,
  isString,
  isHexStrict,
  isHexString,
  isHex,
  isHexString8Bytes,
  isHexString32Bytes,
  isHexPrefixed,
  validateNoLeadingZeroes,
  utils_exports,
  isUint8Array,
  isBytes2 as isBytes,
  checkAddressCheckSum,
  isAddress,
  FMT_NUMBER,
  FMT_BYTES,
  DEFAULT_RETURN_FORMAT,
  ETH_DATA_FORMAT,
  BlockTags,
  HardforksOrdered,
  TypedArray,
  Web3BaseProvider,
  Web3BaseWallet,
  esm_exports2,
  isBigInt,
  bigintPower,
  isUInt,
  isInt,
  isNumber,
  isBlockNumber,
  isBlockTag,
  isBlockNumberOrTag,
  isBloom,
  isInBloom,
  isUserEthereumAddressInBloom,
  isContractAddressInBloom,
  isBoolean,
  isNullish,
  isObject,
  isTopic,
  isTopicInBloom,
  isFilterObject,
  Web3Validator,
  validator,
  isValidEthBaseType,
  esm_exports3
};
/*! Bundled license information:

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=chunk-NXXPBRY6.js.map
