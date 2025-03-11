import {
  ens_normalize
} from "./chunk-NESRLD7M.js";
import {
  Eip1193Provider,
  EventEmitter,
  SocketProvider,
  Web3DeferredPromise,
  bytesToHex,
  bytesToUint8Array,
  esm_exports as esm_exports4,
  ethUnitMap,
  format,
  fromUtf8,
  hexToBytes,
  hexToNumber,
  hexToNumberString,
  hexToUtf8,
  isAddress as isAddress2,
  isContractInitOptions,
  isDataFormat,
  isHexStrict as isHexStrict2,
  isNullish as isNullish2,
  isPromise,
  isResponseRpcError,
  isUint8Array,
  json_rpc_exports,
  keccak256Wrapper,
  leftPad,
  mergeDeep,
  numberToHex,
  padLeft,
  pollTillDefinedAndReturnIntervalId,
  randomBytes as randomBytes2,
  rejectIfConditionAtInterval,
  rejectIfTimeout,
  rightPad,
  sha3,
  sha3Raw,
  toBigInt,
  toBool,
  toChecksumAddress,
  toHex,
  toNumber,
  toUtf8,
  uint8ArrayConcat,
  uint8ArrayEquals,
  utf8ToBytes,
  utf8ToHex,
  uuidV4
} from "./chunk-6RYE4U2Z.js";
import {
  AbiError,
  BaseWeb3Error,
  BlockTags,
  ChainIdMismatchError,
  ChainMismatchError,
  CommonOrChainAndHardforkError,
  ConfigChainMismatchError,
  ConfigHardforkMismatchError,
  ConnectionCloseError,
  ConnectionError,
  ConnectionNotOpenError,
  ConnectionTimeoutError,
  ContractCodeNotStoredError,
  ContractEventDoesNotExistError,
  ContractExecutionError,
  ContractInstantiationError,
  ContractMissingABIError,
  ContractMissingDeployDataError,
  ContractNoAddressDefinedError,
  ContractNoFromAddressDefinedError,
  ContractOnceRequiresCallbackError,
  ContractReservedEventError,
  ContractTransactionDataAndInputError,
  DEFAULT_RETURN_FORMAT,
  EIP1193ProviderRpcError,
  ENSCheckInterfaceSupportError,
  ENSNetworkNotSyncedError,
  ENSUnsupportedNetworkError,
  ERR_ABI_ENCODING,
  ERR_CONN,
  ERR_CONN_CLOSE,
  ERR_CONN_INVALID,
  ERR_CONN_MAX_ATTEMPTS,
  ERR_CONN_NOT_OPEN,
  ERR_CONN_PENDING_REQUESTS,
  ERR_CONN_TIMEOUT,
  ERR_CONTRACT,
  ERR_CONTRACT_ABI_MISSING,
  ERR_CONTRACT_EVENT_NOT_EXISTS,
  ERR_CONTRACT_EXECUTION_REVERTED,
  ERR_CONTRACT_INSTANTIATION,
  ERR_CONTRACT_MISSING_ADDRESS,
  ERR_CONTRACT_MISSING_DEPLOY_DATA,
  ERR_CONTRACT_MISSING_FROM_ADDRESS,
  ERR_CONTRACT_REQUIRED_CALLBACK,
  ERR_CONTRACT_RESERVED_EVENT,
  ERR_CONTRACT_RESOLVER_MISSING,
  ERR_CONTRACT_TX_DATA_AND_INPUT,
  ERR_CORE_CHAIN_MISMATCH,
  ERR_CORE_HARDFORK_MISMATCH,
  ERR_ENS_CHECK_INTERFACE_SUPPORT,
  ERR_ENS_NETWORK_NOT_SYNCED,
  ERR_ENS_UNSUPPORTED_NETWORK,
  ERR_EXISTING_PLUGIN_NAMESPACE,
  ERR_FORMATTERS,
  ERR_INVALID_ADDRESS,
  ERR_INVALID_BLOCK,
  ERR_INVALID_BOOLEAN,
  ERR_INVALID_BYTES,
  ERR_INVALID_CLIENT,
  ERR_INVALID_HEX,
  ERR_INVALID_INTEGER,
  ERR_INVALID_KEYSTORE,
  ERR_INVALID_LARGE_VALUE,
  ERR_INVALID_METHOD_PARAMS,
  ERR_INVALID_NIBBLE_WIDTH,
  ERR_INVALID_NUMBER,
  ERR_INVALID_PASSWORD,
  ERR_INVALID_PRIVATE_KEY,
  ERR_INVALID_PROVIDER,
  ERR_INVALID_RESPONSE,
  ERR_INVALID_SIGNATURE,
  ERR_INVALID_SIZE,
  ERR_INVALID_STRING,
  ERR_INVALID_TYPE,
  ERR_INVALID_TYPE_ABI,
  ERR_INVALID_UNIT,
  ERR_INVALID_UNSIGNED_INTEGER,
  ERR_IV_LENGTH,
  ERR_KEY_DERIVATION_FAIL,
  ERR_KEY_VERSION_UNSUPPORTED,
  ERR_METHOD_NOT_IMPLEMENTED,
  ERR_MULTIPLE_ERRORS,
  ERR_OPERATION_ABORT,
  ERR_OPERATION_TIMEOUT,
  ERR_PARAM,
  ERR_PBKDF2_ITERATIONS,
  ERR_PRIVATE_KEY_LENGTH,
  ERR_PROVIDER,
  ERR_RAW_TX_UNDEFINED,
  ERR_REQ_ALREADY_SENT,
  ERR_RESPONSE,
  ERR_RPC_INTERNAL_ERROR,
  ERR_RPC_INVALID_INPUT,
  ERR_RPC_INVALID_JSON,
  ERR_RPC_INVALID_METHOD,
  ERR_RPC_INVALID_PARAMS,
  ERR_RPC_INVALID_REQUEST,
  ERR_RPC_LIMIT_EXCEEDED,
  ERR_RPC_MISSING_RESOURCE,
  ERR_RPC_NOT_SUPPORTED,
  ERR_RPC_TRANSACTION_REJECTED,
  ERR_RPC_UNAVAILABLE_RESOURCE,
  ERR_RPC_UNSUPPORTED_METHOD,
  ERR_SCHEMA_FORMAT,
  ERR_SIGNATURE_FAILED,
  ERR_SUBSCRIPTION,
  ERR_TX,
  ERR_TX_BLOCK_TIMEOUT,
  ERR_TX_CHAIN_ID_MISMATCH,
  ERR_TX_CHAIN_MISMATCH,
  ERR_TX_CONTRACT_NOT_STORED,
  ERR_TX_DATA_AND_INPUT,
  ERR_TX_GAS_MISMATCH,
  ERR_TX_GAS_MISMATCH_INNER_ERROR,
  ERR_TX_HARDFORK_MISMATCH,
  ERR_TX_INVALID_CALL,
  ERR_TX_INVALID_CHAIN_INFO,
  ERR_TX_INVALID_FEE_MARKET_GAS,
  ERR_TX_INVALID_FEE_MARKET_GAS_PRICE,
  ERR_TX_INVALID_LEGACY_FEE_MARKET,
  ERR_TX_INVALID_LEGACY_GAS,
  ERR_TX_INVALID_NONCE_OR_CHAIN_ID,
  ERR_TX_INVALID_OBJECT,
  ERR_TX_INVALID_PROPERTIES_FOR_TYPE,
  ERR_TX_INVALID_RECEIVER,
  ERR_TX_INVALID_SENDER,
  ERR_TX_LOCAL_WALLET_NOT_AVAILABLE,
  ERR_TX_MISSING_CHAIN_INFO,
  ERR_TX_MISSING_CUSTOM_CHAIN,
  ERR_TX_MISSING_CUSTOM_CHAIN_ID,
  ERR_TX_MISSING_GAS,
  ERR_TX_MISSING_GAS_INNER_ERROR,
  ERR_TX_NOT_FOUND,
  ERR_TX_NO_CONTRACT_ADDRESS,
  ERR_TX_OUT_OF_GAS,
  ERR_TX_POLLING_TIMEOUT,
  ERR_TX_RECEIPT_MISSING_BLOCK_NUMBER,
  ERR_TX_RECEIPT_MISSING_OR_BLOCKHASH_NULL,
  ERR_TX_REVERT_INSTRUCTION,
  ERR_TX_REVERT_TRANSACTION,
  ERR_TX_REVERT_TRANSACTION_CUSTOM_ERROR,
  ERR_TX_REVERT_WITHOUT_REASON,
  ERR_TX_SEND_TIMEOUT,
  ERR_TX_SIGNING,
  ERR_TX_UNABLE_TO_POPULATE_NONCE,
  ERR_TX_UNSUPPORTED_EIP_1559,
  ERR_TX_UNSUPPORTED_TYPE,
  ERR_UNSUPPORTED_KDF,
  ERR_VALIDATION,
  ERR_WS_PROVIDER,
  ETH_DATA_FORMAT,
  Eip1559GasPriceError,
  Eip1559NotSupportedError,
  Eip838ExecutionError,
  ExistingPluginNamespaceError,
  FMT_BYTES,
  FMT_NUMBER,
  FormatterError,
  GENESIS_BLOCK_NUMBER,
  HardforkMismatchError,
  HardforksOrdered,
  Hash,
  HexProcessingError,
  IVLengthError,
  InternalError,
  InvalidAddressError,
  InvalidBlockError,
  InvalidBooleanError,
  InvalidBytesError,
  InvalidClientError,
  InvalidConnectionError,
  InvalidGasOrGasPrice,
  InvalidInputError,
  InvalidIntegerError,
  InvalidKdfError,
  InvalidLargeValueError,
  InvalidMaxPriorityFeePerGasOrMaxFeePerGas,
  InvalidMethodParamsError,
  InvalidNonceOrChainIdError,
  InvalidNumberError,
  InvalidNumberOfParamsError,
  InvalidParamsError,
  InvalidPasswordError,
  InvalidPrivateKeyError,
  InvalidPropertiesForTransactionTypeError,
  InvalidProviderError,
  InvalidRequestError,
  InvalidResponseError,
  InvalidSignatureError,
  InvalidSizeError,
  InvalidStringError,
  InvalidTransactionCall,
  InvalidTransactionObjectError,
  InvalidTransactionWithReceiver,
  InvalidTransactionWithSender,
  InvalidTypeAbiInputError,
  InvalidTypeError,
  InvalidUnitError,
  InvalidUnsignedIntegerError,
  InvalidValueError,
  JSONRPC_ERR_CHAIN_DISCONNECTED,
  JSONRPC_ERR_DISCONNECTED,
  JSONRPC_ERR_REJECTED_REQUEST,
  JSONRPC_ERR_UNAUTHORIZED,
  JSONRPC_ERR_UNSUPPORTED_METHOD,
  KeyDerivationError,
  KeyStoreVersionError,
  LimitExceededError,
  LocalWalletNotAvailableError,
  MaxAttemptsReachedOnReconnectingError,
  MethodNotFoundError,
  MethodNotImplementedError,
  MethodNotSupported,
  MissingChainOrHardforkError,
  MissingCustomChainError,
  MissingCustomChainIdError,
  MissingGasError,
  MissingGasInnerError,
  MultipleErrors,
  NibbleWidthError,
  NoContractAddressFoundError,
  OperationAbortError,
  OperationTimeoutError,
  PBKDF2IterationsError,
  ParseError,
  PendingRequestsOnReconnectingError,
  PrivateKeyLengthError,
  ProviderError,
  RequestAlreadySentError,
  ResolverMethodMissingError,
  ResourceUnavailableError,
  ResourcesNotFoundError,
  ResponseError,
  RevertInstructionError,
  RpcError,
  RpcErrorMessages,
  SchemaFormatError,
  SignatureError,
  SubscriptionError,
  TransactionBlockTimeoutError,
  TransactionDataAndInputError,
  TransactionError,
  TransactionGasMismatchError,
  TransactionGasMismatchInnerError,
  TransactionMissingReceiptOrBlockHashError,
  TransactionNotFound,
  TransactionOutOfGasError,
  TransactionPollingTimeoutError,
  TransactionReceiptMissingBlockNumberError,
  TransactionRejectedError,
  TransactionRevertInstructionError,
  TransactionRevertWithCustomError,
  TransactionRevertedWithoutReasonError,
  TransactionSendTimeoutError,
  TransactionSigningError,
  TypedArray,
  UnableToPopulateNonceError,
  UndefinedRawTransactionError,
  UnsupportedFeeMarketError,
  UnsupportedTransactionTypeError,
  VersionNotSupportedError,
  Web3BaseProvider,
  Web3BaseWallet,
  Web3ContractError,
  Web3Validator,
  Web3ValidatorError,
  Web3WSProviderError,
  assertBytes,
  byteSwap32,
  bytes,
  checkOpts,
  concatBytes,
  createView,
  crypto,
  equalsBytes,
  esm_exports,
  esm_exports2,
  esm_exports3,
  exists,
  genericRpcErrorMessageTemplate,
  hash,
  isAddress,
  isBlockTag,
  isBytes,
  isHex,
  isHexPrefixed,
  isHexStrict,
  isHexString,
  isHexString32Bytes,
  isLE,
  isNullish,
  isNumber,
  isString,
  isUInt,
  keccak256,
  number,
  output,
  randomBytes,
  rotl,
  rotr,
  rpcErrorsMap,
  toBytes,
  u32,
  u64_default,
  utils_exports,
  validateNoLeadingZeroes,
  validator,
  wrapConstructor
} from "./chunk-NXXPBRY6.js";
import {
  __async,
  __commonJS,
  __export,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-KTESVR3Q.js";

// node_modules/cross-fetch/dist/browser-ponyfill.js
var require_browser_ponyfill = __commonJS({
  "node_modules/cross-fetch/dist/browser-ponyfill.js"(exports, module) {
    var __global__ = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global !== "undefined" && global;
    var __globalThis__ = function() {
      function F() {
        this.fetch = false;
        this.DOMException = __global__.DOMException;
      }
      F.prototype = __global__;
      return new F();
    }();
    (function(globalThis2) {
      var irrelevant = function(exports2) {
        var g = typeof globalThis2 !== "undefined" && globalThis2 || typeof self !== "undefined" && self || // eslint-disable-next-line no-undef
        typeof global !== "undefined" && global || {};
        var support = {
          searchParams: "URLSearchParams" in g,
          iterable: "Symbol" in g && "iterator" in Symbol,
          blob: "FileReader" in g && "Blob" in g && function() {
            try {
              new Blob();
              return true;
            } catch (e) {
              return false;
            }
          }(),
          formData: "FormData" in g,
          arrayBuffer: "ArrayBuffer" in g
        };
        function isDataView(obj) {
          return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
          var viewClasses = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ];
          var isArrayBufferView = ArrayBuffer.isView || function(obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
          };
        }
        function normalizeName(name2) {
          if (typeof name2 !== "string") {
            name2 = String(name2);
          }
          if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name2) || name2 === "") {
            throw new TypeError('Invalid character in header field name: "' + name2 + '"');
          }
          return name2.toLowerCase();
        }
        function normalizeValue(value) {
          if (typeof value !== "string") {
            value = String(value);
          }
          return value;
        }
        function iteratorFor(items) {
          var iterator = {
            next: function() {
              var value = items.shift();
              return { done: value === void 0, value };
            }
          };
          if (support.iterable) {
            iterator[Symbol.iterator] = function() {
              return iterator;
            };
          }
          return iterator;
        }
        function Headers(headers) {
          this.map = {};
          if (headers instanceof Headers) {
            headers.forEach(function(value, name2) {
              this.append(name2, value);
            }, this);
          } else if (Array.isArray(headers)) {
            headers.forEach(function(header) {
              if (header.length != 2) {
                throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + header.length);
              }
              this.append(header[0], header[1]);
            }, this);
          } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function(name2) {
              this.append(name2, headers[name2]);
            }, this);
          }
        }
        Headers.prototype.append = function(name2, value) {
          name2 = normalizeName(name2);
          value = normalizeValue(value);
          var oldValue = this.map[name2];
          this.map[name2] = oldValue ? oldValue + ", " + value : value;
        };
        Headers.prototype["delete"] = function(name2) {
          delete this.map[normalizeName(name2)];
        };
        Headers.prototype.get = function(name2) {
          name2 = normalizeName(name2);
          return this.has(name2) ? this.map[name2] : null;
        };
        Headers.prototype.has = function(name2) {
          return this.map.hasOwnProperty(normalizeName(name2));
        };
        Headers.prototype.set = function(name2, value) {
          this.map[normalizeName(name2)] = normalizeValue(value);
        };
        Headers.prototype.forEach = function(callback, thisArg) {
          for (var name2 in this.map) {
            if (this.map.hasOwnProperty(name2)) {
              callback.call(thisArg, this.map[name2], name2, this);
            }
          }
        };
        Headers.prototype.keys = function() {
          var items = [];
          this.forEach(function(value, name2) {
            items.push(name2);
          });
          return iteratorFor(items);
        };
        Headers.prototype.values = function() {
          var items = [];
          this.forEach(function(value) {
            items.push(value);
          });
          return iteratorFor(items);
        };
        Headers.prototype.entries = function() {
          var items = [];
          this.forEach(function(value, name2) {
            items.push([name2, value]);
          });
          return iteratorFor(items);
        };
        if (support.iterable) {
          Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
        }
        function consumed(body) {
          if (body._noBody) return;
          if (body.bodyUsed) {
            return Promise.reject(new TypeError("Already read"));
          }
          body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
          return new Promise(function(resolve, reject) {
            reader.onload = function() {
              resolve(reader.result);
            };
            reader.onerror = function() {
              reject(reader.error);
            };
          });
        }
        function readBlobAsArrayBuffer(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsArrayBuffer(blob);
          return promise;
        }
        function readBlobAsText(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
          var encoding = match ? match[1] : "utf-8";
          reader.readAsText(blob, encoding);
          return promise;
        }
        function readArrayBufferAsText(buf) {
          var view = new Uint8Array(buf);
          var chars = new Array(view.length);
          for (var i = 0; i < view.length; i++) {
            chars[i] = String.fromCharCode(view[i]);
          }
          return chars.join("");
        }
        function bufferClone(buf) {
          if (buf.slice) {
            return buf.slice(0);
          } else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
          }
        }
        function Body() {
          this.bodyUsed = false;
          this._initBody = function(body) {
            this.bodyUsed = this.bodyUsed;
            this._bodyInit = body;
            if (!body) {
              this._noBody = true;
              this._bodyText = "";
            } else if (typeof body === "string") {
              this._bodyText = body;
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              this._bodyBlob = body;
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
              this._bodyFormData = body;
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this._bodyText = body.toString();
            } else if (support.arrayBuffer && support.blob && isDataView(body)) {
              this._bodyArrayBuffer = bufferClone(body.buffer);
              this._bodyInit = new Blob([this._bodyArrayBuffer]);
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
              this._bodyArrayBuffer = bufferClone(body);
            } else {
              this._bodyText = body = Object.prototype.toString.call(body);
            }
            if (!this.headers.get("content-type")) {
              if (typeof body === "string") {
                this.headers.set("content-type", "text/plain;charset=UTF-8");
              } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set("content-type", this._bodyBlob.type);
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          };
          if (support.blob) {
            this.blob = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as blob");
              } else {
                return Promise.resolve(new Blob([this._bodyText]));
              }
            };
          }
          this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
              var isConsumed = consumed(this);
              if (isConsumed) {
                return isConsumed;
              } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
                return Promise.resolve(
                  this._bodyArrayBuffer.buffer.slice(
                    this._bodyArrayBuffer.byteOffset,
                    this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                  )
                );
              } else {
                return Promise.resolve(this._bodyArrayBuffer);
              }
            } else if (support.blob) {
              return this.blob().then(readBlobAsArrayBuffer);
            } else {
              throw new Error("could not read as ArrayBuffer");
            }
          };
          this.text = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return readBlobAsText(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as text");
            } else {
              return Promise.resolve(this._bodyText);
            }
          };
          if (support.formData) {
            this.formData = function() {
              return this.text().then(decode2);
            };
          }
          this.json = function() {
            return this.text().then(JSON.parse);
          };
          return this;
        }
        var methods = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
        function normalizeMethod(method) {
          var upcased = method.toUpperCase();
          return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request(input, options) {
          if (!(this instanceof Request)) {
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          }
          options = options || {};
          var body = options.body;
          if (input instanceof Request) {
            if (input.bodyUsed) {
              throw new TypeError("Already read");
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
              this.headers = new Headers(input.headers);
            }
            this.method = input.method;
            this.mode = input.mode;
            this.signal = input.signal;
            if (!body && input._bodyInit != null) {
              body = input._bodyInit;
              input.bodyUsed = true;
            }
          } else {
            this.url = String(input);
          }
          this.credentials = options.credentials || this.credentials || "same-origin";
          if (options.headers || !this.headers) {
            this.headers = new Headers(options.headers);
          }
          this.method = normalizeMethod(options.method || this.method || "GET");
          this.mode = options.mode || this.mode || null;
          this.signal = options.signal || this.signal || function() {
            if ("AbortController" in g) {
              var ctrl = new AbortController();
              return ctrl.signal;
            }
          }();
          this.referrer = null;
          if ((this.method === "GET" || this.method === "HEAD") && body) {
            throw new TypeError("Body not allowed for GET or HEAD requests");
          }
          this._initBody(body);
          if (this.method === "GET" || this.method === "HEAD") {
            if (options.cache === "no-store" || options.cache === "no-cache") {
              var reParamSearch = /([?&])_=[^&]*/;
              if (reParamSearch.test(this.url)) {
                this.url = this.url.replace(reParamSearch, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
              } else {
                var reQueryString = /\?/;
                this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
              }
            }
          }
        }
        Request.prototype.clone = function() {
          return new Request(this, { body: this._bodyInit });
        };
        function decode2(body) {
          var form = new FormData();
          body.trim().split("&").forEach(function(bytes2) {
            if (bytes2) {
              var split = bytes2.split("=");
              var name2 = split.shift().replace(/\+/g, " ");
              var value = split.join("=").replace(/\+/g, " ");
              form.append(decodeURIComponent(name2), decodeURIComponent(value));
            }
          });
          return form;
        }
        function parseHeaders(rawHeaders) {
          var headers = new Headers();
          var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
          preProcessedHeaders.split("\r").map(function(header) {
            return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
          }).forEach(function(line) {
            var parts = line.split(":");
            var key = parts.shift().trim();
            if (key) {
              var value = parts.join(":").trim();
              try {
                headers.append(key, value);
              } catch (error) {
                console.warn("Response " + error.message);
              }
            }
          });
          return headers;
        }
        Body.call(Request.prototype);
        function Response(bodyInit, options) {
          if (!(this instanceof Response)) {
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          }
          if (!options) {
            options = {};
          }
          this.type = "default";
          this.status = options.status === void 0 ? 200 : options.status;
          if (this.status < 200 || this.status > 599) {
            throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
          }
          this.ok = this.status >= 200 && this.status < 300;
          this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
          this.headers = new Headers(options.headers);
          this.url = options.url || "";
          this._initBody(bodyInit);
        }
        Body.call(Response.prototype);
        Response.prototype.clone = function() {
          return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
          });
        };
        Response.error = function() {
          var response = new Response(null, { status: 200, statusText: "" });
          response.ok = false;
          response.status = 0;
          response.type = "error";
          return response;
        };
        var redirectStatuses = [301, 302, 303, 307, 308];
        Response.redirect = function(url, status) {
          if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError("Invalid status code");
          }
          return new Response(null, { status, headers: { location: url } });
        };
        exports2.DOMException = g.DOMException;
        try {
          new exports2.DOMException();
        } catch (err) {
          exports2.DOMException = function(message, name2) {
            this.message = message;
            this.name = name2;
            var error = Error(message);
            this.stack = error.stack;
          };
          exports2.DOMException.prototype = Object.create(Error.prototype);
          exports2.DOMException.prototype.constructor = exports2.DOMException;
        }
        function fetch2(input, init) {
          return new Promise(function(resolve, reject) {
            var request = new Request(input, init);
            if (request.signal && request.signal.aborted) {
              return reject(new exports2.DOMException("Aborted", "AbortError"));
            }
            var xhr = new XMLHttpRequest();
            function abortXhr() {
              xhr.abort();
            }
            xhr.onload = function() {
              var options = {
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || "")
              };
              if (request.url.indexOf("file://") === 0 && (xhr.status < 200 || xhr.status > 599)) {
                options.status = 200;
              } else {
                options.status = xhr.status;
              }
              options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
              var body = "response" in xhr ? xhr.response : xhr.responseText;
              setTimeout(function() {
                resolve(new Response(body, options));
              }, 0);
            };
            xhr.onerror = function() {
              setTimeout(function() {
                reject(new TypeError("Network request failed"));
              }, 0);
            };
            xhr.ontimeout = function() {
              setTimeout(function() {
                reject(new TypeError("Network request timed out"));
              }, 0);
            };
            xhr.onabort = function() {
              setTimeout(function() {
                reject(new exports2.DOMException("Aborted", "AbortError"));
              }, 0);
            };
            function fixUrl(url) {
              try {
                return url === "" && g.location.href ? g.location.href : url;
              } catch (e) {
                return url;
              }
            }
            xhr.open(request.method, fixUrl(request.url), true);
            if (request.credentials === "include") {
              xhr.withCredentials = true;
            } else if (request.credentials === "omit") {
              xhr.withCredentials = false;
            }
            if ("responseType" in xhr) {
              if (support.blob) {
                xhr.responseType = "blob";
              } else if (support.arrayBuffer) {
                xhr.responseType = "arraybuffer";
              }
            }
            if (init && typeof init.headers === "object" && !(init.headers instanceof Headers || g.Headers && init.headers instanceof g.Headers)) {
              var names = [];
              Object.getOwnPropertyNames(init.headers).forEach(function(name2) {
                names.push(normalizeName(name2));
                xhr.setRequestHeader(name2, normalizeValue(init.headers[name2]));
              });
              request.headers.forEach(function(value, name2) {
                if (names.indexOf(name2) === -1) {
                  xhr.setRequestHeader(name2, value);
                }
              });
            } else {
              request.headers.forEach(function(value, name2) {
                xhr.setRequestHeader(name2, value);
              });
            }
            if (request.signal) {
              request.signal.addEventListener("abort", abortXhr);
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  request.signal.removeEventListener("abort", abortXhr);
                }
              };
            }
            xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
          });
        }
        fetch2.polyfill = true;
        if (!g.fetch) {
          g.fetch = fetch2;
          g.Headers = Headers;
          g.Request = Request;
          g.Response = Response;
        }
        exports2.Headers = Headers;
        exports2.Request = Request;
        exports2.Response = Response;
        exports2.fetch = fetch2;
        return exports2;
      }({});
    })(__globalThis__);
    __globalThis__.fetch.ponyfill = true;
    delete __globalThis__.fetch.polyfill;
    var ctx = __global__.fetch ? __global__ : __globalThis__;
    exports = ctx.fetch;
    exports.default = ctx.fetch;
    exports.fetch = ctx.fetch;
    exports.Headers = ctx.Headers;
    exports.Request = ctx.Request;
    exports.Response = ctx.Response;
    module.exports = exports;
  }
});

// node_modules/@ethereumjs/rlp/dist/index.js
var require_dist = __commonJS({
  "node_modules/@ethereumjs/rlp/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RLP = exports.utils = exports.decode = exports.encode = void 0;
    function encode2(input) {
      if (Array.isArray(input)) {
        const output2 = [];
        let outputLength = 0;
        for (let i = 0; i < input.length; i++) {
          const encoded = encode2(input[i]);
          output2.push(encoded);
          outputLength += encoded.length;
        }
        return concatBytes4(encodeLength2(outputLength, 192), ...output2);
      }
      const inputBuf = toBytes3(input);
      if (inputBuf.length === 1 && inputBuf[0] < 128) {
        return inputBuf;
      }
      return concatBytes4(encodeLength2(inputBuf.length, 128), inputBuf);
    }
    exports.encode = encode2;
    function safeSlice2(input, start, end) {
      if (end > input.length) {
        throw new Error("invalid RLP (safeSlice): end slice of Uint8Array out-of-bounds");
      }
      return input.slice(start, end);
    }
    function decodeLength2(v) {
      if (v[0] === 0) {
        throw new Error("invalid RLP: extra zeros");
      }
      return parseHexByte2(bytesToHex4(v));
    }
    function encodeLength2(len, offset) {
      if (len < 56) {
        return Uint8Array.from([len + offset]);
      }
      const hexLength = numberToHex3(len);
      const lLength = hexLength.length / 2;
      const firstByte = numberToHex3(offset + 55 + lLength);
      return Uint8Array.from(hexToBytes4(firstByte + hexLength));
    }
    function decode2(input, stream = false) {
      if (typeof input === "undefined" || input === null || input.length === 0) {
        return Uint8Array.from([]);
      }
      const inputBytes = toBytes3(input);
      const decoded = _decode2(inputBytes);
      if (stream) {
        return decoded;
      }
      if (decoded.remainder.length !== 0) {
        throw new Error("invalid RLP: remainder must be zero");
      }
      return decoded.data;
    }
    exports.decode = decode2;
    function _decode2(input) {
      let length, llength, data, innerRemainder, d;
      const decoded = [];
      const firstByte = input[0];
      if (firstByte <= 127) {
        return {
          data: input.slice(0, 1),
          remainder: input.slice(1)
        };
      } else if (firstByte <= 183) {
        length = firstByte - 127;
        if (firstByte === 128) {
          data = Uint8Array.from([]);
        } else {
          data = safeSlice2(input, 1, length);
        }
        if (length === 2 && data[0] < 128) {
          throw new Error("invalid RLP encoding: invalid prefix, single byte < 0x80 are not prefixed");
        }
        return {
          data,
          remainder: input.slice(length)
        };
      } else if (firstByte <= 191) {
        llength = firstByte - 182;
        if (input.length - 1 < llength) {
          throw new Error("invalid RLP: not enough bytes for string length");
        }
        length = decodeLength2(safeSlice2(input, 1, llength));
        if (length <= 55) {
          throw new Error("invalid RLP: expected string length to be greater than 55");
        }
        data = safeSlice2(input, llength, length + llength);
        return {
          data,
          remainder: input.slice(length + llength)
        };
      } else if (firstByte <= 247) {
        length = firstByte - 191;
        innerRemainder = safeSlice2(input, 1, length);
        while (innerRemainder.length) {
          d = _decode2(innerRemainder);
          decoded.push(d.data);
          innerRemainder = d.remainder;
        }
        return {
          data: decoded,
          remainder: input.slice(length)
        };
      } else {
        llength = firstByte - 246;
        length = decodeLength2(safeSlice2(input, 1, llength));
        if (length < 56) {
          throw new Error("invalid RLP: encoded list too short");
        }
        const totalLength = llength + length;
        if (totalLength > input.length) {
          throw new Error("invalid RLP: total length is larger than the data");
        }
        innerRemainder = safeSlice2(input, llength, totalLength);
        while (innerRemainder.length) {
          d = _decode2(innerRemainder);
          decoded.push(d.data);
          innerRemainder = d.remainder;
        }
        return {
          data: decoded,
          remainder: input.slice(totalLength)
        };
      }
    }
    var cachedHexes2 = Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, "0"));
    function bytesToHex4(uint8a) {
      let hex = "";
      for (let i = 0; i < uint8a.length; i++) {
        hex += cachedHexes2[uint8a[i]];
      }
      return hex;
    }
    function parseHexByte2(hexByte) {
      const byte = Number.parseInt(hexByte, 16);
      if (Number.isNaN(byte))
        throw new Error("Invalid byte sequence");
      return byte;
    }
    function hexToBytes4(hex) {
      if (typeof hex !== "string") {
        throw new TypeError("hexToBytes: expected string, got " + typeof hex);
      }
      if (hex.length % 2)
        throw new Error("hexToBytes: received invalid unpadded hex");
      const array = new Uint8Array(hex.length / 2);
      for (let i = 0; i < array.length; i++) {
        const j = i * 2;
        array[i] = parseHexByte2(hex.slice(j, j + 2));
      }
      return array;
    }
    function concatBytes4(...arrays) {
      if (arrays.length === 1)
        return arrays[0];
      const length = arrays.reduce((a, arr) => a + arr.length, 0);
      const result = new Uint8Array(length);
      for (let i = 0, pad = 0; i < arrays.length; i++) {
        const arr = arrays[i];
        result.set(arr, pad);
        pad += arr.length;
      }
      return result;
    }
    function utf8ToBytes4(utf) {
      return new TextEncoder().encode(utf);
    }
    function numberToHex3(integer) {
      if (integer < 0) {
        throw new Error("Invalid integer as argument, must be unsigned!");
      }
      const hex = integer.toString(16);
      return hex.length % 2 ? `0${hex}` : hex;
    }
    function padToEven3(a) {
      return a.length % 2 ? `0${a}` : a;
    }
    function isHexPrefixed3(str) {
      return str.length >= 2 && str[0] === "0" && str[1] === "x";
    }
    function stripHexPrefix3(str) {
      if (typeof str !== "string") {
        return str;
      }
      return isHexPrefixed3(str) ? str.slice(2) : str;
    }
    function toBytes3(v) {
      if (v instanceof Uint8Array) {
        return v;
      }
      if (typeof v === "string") {
        if (isHexPrefixed3(v)) {
          return hexToBytes4(padToEven3(stripHexPrefix3(v)));
        }
        return utf8ToBytes4(v);
      }
      if (typeof v === "number" || typeof v === "bigint") {
        if (!v) {
          return Uint8Array.from([]);
        }
        return hexToBytes4(numberToHex3(v));
      }
      if (v === null || v === void 0) {
        return Uint8Array.from([]);
      }
      throw new Error("toBytes: received unsupported type " + typeof v);
    }
    exports.utils = {
      bytesToHex: bytesToHex4,
      concatBytes: concatBytes4,
      hexToBytes: hexToBytes4,
      utf8ToBytes: utf8ToBytes4
    };
    exports.RLP = { encode: encode2, decode: decode2 };
  }
});

// node_modules/crc-32/crc32.js
var require_crc32 = __commonJS({
  "node_modules/crc-32/crc32.js"(exports) {
    var CRC32;
    (function(factory) {
      if (typeof DO_NOT_EXPORT_CRC === "undefined") {
        if ("object" === typeof exports) {
          factory(exports);
        } else if ("function" === typeof define && define.amd) {
          define(function() {
            var module2 = {};
            factory(module2);
            return module2;
          });
        } else {
          factory(CRC32 = {});
        }
      } else {
        factory(CRC32 = {});
      }
    })(function(CRC322) {
      CRC322.version = "1.2.2";
      function signed_crc_table() {
        var c = 0, table = new Array(256);
        for (var n = 0; n != 256; ++n) {
          c = n;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          table[n] = c;
        }
        return typeof Int32Array !== "undefined" ? new Int32Array(table) : table;
      }
      var T0 = signed_crc_table();
      function slice_by_16_tables(T) {
        var c = 0, v = 0, n = 0, table = typeof Int32Array !== "undefined" ? new Int32Array(4096) : new Array(4096);
        for (n = 0; n != 256; ++n) table[n] = T[n];
        for (n = 0; n != 256; ++n) {
          v = T[n];
          for (c = 256 + n; c < 4096; c += 256) v = table[c] = v >>> 8 ^ T[v & 255];
        }
        var out = [];
        for (n = 1; n != 16; ++n) out[n - 1] = typeof Int32Array !== "undefined" ? table.subarray(n * 256, n * 256 + 256) : table.slice(n * 256, n * 256 + 256);
        return out;
      }
      var TT = slice_by_16_tables(T0);
      var T1 = TT[0], T2 = TT[1], T3 = TT[2], T4 = TT[3], T5 = TT[4];
      var T6 = TT[5], T7 = TT[6], T8 = TT[7], T9 = TT[8], Ta = TT[9];
      var Tb = TT[10], Tc = TT[11], Td = TT[12], Te = TT[13], Tf = TT[14];
      function crc32_bstr(bstr, seed) {
        var C = seed ^ -1;
        for (var i = 0, L = bstr.length; i < L; ) C = C >>> 8 ^ T0[(C ^ bstr.charCodeAt(i++)) & 255];
        return ~C;
      }
      function crc32_buf(B, seed) {
        var C = seed ^ -1, L = B.length - 15, i = 0;
        for (; i < L; ) C = Tf[B[i++] ^ C & 255] ^ Te[B[i++] ^ C >> 8 & 255] ^ Td[B[i++] ^ C >> 16 & 255] ^ Tc[B[i++] ^ C >>> 24] ^ Tb[B[i++]] ^ Ta[B[i++]] ^ T9[B[i++]] ^ T8[B[i++]] ^ T7[B[i++]] ^ T6[B[i++]] ^ T5[B[i++]] ^ T4[B[i++]] ^ T3[B[i++]] ^ T2[B[i++]] ^ T1[B[i++]] ^ T0[B[i++]];
        L += 15;
        while (i < L) C = C >>> 8 ^ T0[(C ^ B[i++]) & 255];
        return ~C;
      }
      function crc32_str(str, seed) {
        var C = seed ^ -1;
        for (var i = 0, L = str.length, c = 0, d = 0; i < L; ) {
          c = str.charCodeAt(i++);
          if (c < 128) {
            C = C >>> 8 ^ T0[(C ^ c) & 255];
          } else if (c < 2048) {
            C = C >>> 8 ^ T0[(C ^ (192 | c >> 6 & 31)) & 255];
            C = C >>> 8 ^ T0[(C ^ (128 | c & 63)) & 255];
          } else if (c >= 55296 && c < 57344) {
            c = (c & 1023) + 64;
            d = str.charCodeAt(i++) & 1023;
            C = C >>> 8 ^ T0[(C ^ (240 | c >> 8 & 7)) & 255];
            C = C >>> 8 ^ T0[(C ^ (128 | c >> 2 & 63)) & 255];
            C = C >>> 8 ^ T0[(C ^ (128 | d >> 6 & 15 | (c & 3) << 4)) & 255];
            C = C >>> 8 ^ T0[(C ^ (128 | d & 63)) & 255];
          } else {
            C = C >>> 8 ^ T0[(C ^ (224 | c >> 12 & 15)) & 255];
            C = C >>> 8 ^ T0[(C ^ (128 | c >> 6 & 63)) & 255];
            C = C >>> 8 ^ T0[(C ^ (128 | c & 63)) & 255];
          }
        }
        return ~C;
      }
      CRC322.table = T0;
      CRC322.bstr = crc32_bstr;
      CRC322.buf = crc32_buf;
      CRC322.str = crc32_str;
    });
  }
});

// node_modules/setimmediate/setImmediate.js
var require_setImmediate = __commonJS({
  "node_modules/setimmediate/setImmediate.js"(exports) {
    (function(global2, undefined2) {
      "use strict";
      if (global2.setImmediate) {
        return;
      }
      var nextHandle = 1;
      var tasksByHandle = {};
      var currentlyRunningATask = false;
      var doc = global2.document;
      var registerImmediate;
      function setImmediate2(callback) {
        if (typeof callback !== "function") {
          callback = new Function("" + callback);
        }
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
        }
        var task = { callback, args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
      }
      function clearImmediate(handle) {
        delete tasksByHandle[handle];
      }
      function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
          case 0:
            callback();
            break;
          case 1:
            callback(args[0]);
            break;
          case 2:
            callback(args[0], args[1]);
            break;
          case 3:
            callback(args[0], args[1], args[2]);
            break;
          default:
            callback.apply(undefined2, args);
            break;
        }
      }
      function runIfPresent(handle) {
        if (currentlyRunningATask) {
          setTimeout(runIfPresent, 0, handle);
        } else {
          var task = tasksByHandle[handle];
          if (task) {
            currentlyRunningATask = true;
            try {
              run(task);
            } finally {
              clearImmediate(handle);
              currentlyRunningATask = false;
            }
          }
        }
      }
      function installNextTickImplementation() {
        registerImmediate = function(handle) {
          process.nextTick(function() {
            runIfPresent(handle);
          });
        };
      }
      function canUsePostMessage() {
        if (global2.postMessage && !global2.importScripts) {
          var postMessageIsAsynchronous = true;
          var oldOnMessage = global2.onmessage;
          global2.onmessage = function() {
            postMessageIsAsynchronous = false;
          };
          global2.postMessage("", "*");
          global2.onmessage = oldOnMessage;
          return postMessageIsAsynchronous;
        }
      }
      function installPostMessageImplementation() {
        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
          if (event.source === global2 && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
            runIfPresent(+event.data.slice(messagePrefix.length));
          }
        };
        if (global2.addEventListener) {
          global2.addEventListener("message", onGlobalMessage, false);
        } else {
          global2.attachEvent("onmessage", onGlobalMessage);
        }
        registerImmediate = function(handle) {
          global2.postMessage(messagePrefix + handle, "*");
        };
      }
      function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
          var handle = event.data;
          runIfPresent(handle);
        };
        registerImmediate = function(handle) {
          channel.port2.postMessage(handle);
        };
      }
      function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
          var script = doc.createElement("script");
          script.onreadystatechange = function() {
            runIfPresent(handle);
            script.onreadystatechange = null;
            html.removeChild(script);
            script = null;
          };
          html.appendChild(script);
        };
      }
      function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
          setTimeout(runIfPresent, 0, handle);
        };
      }
      var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global2);
      attachTo = attachTo && attachTo.setTimeout ? attachTo : global2;
      if ({}.toString.call(global2.process) === "[object process]") {
        installNextTickImplementation();
      } else if (canUsePostMessage()) {
        installPostMessageImplementation();
      } else if (global2.MessageChannel) {
        installMessageChannelImplementation();
      } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        installReadyStateChangeImplementation();
      } else {
        installSetTimeoutImplementation();
      }
      attachTo.setImmediate = setImmediate2;
      attachTo.clearImmediate = clearImmediate;
    })(typeof self === "undefined" ? typeof global === "undefined" ? exports : global : self);
  }
});

// node_modules/web3-core/lib/esm/index.js
var esm_exports9 = {};
__export(esm_exports9, {
  DEFAULT_BATCH_REQUEST_TIMEOUT: () => DEFAULT_BATCH_REQUEST_TIMEOUT,
  Web3BatchRequest: () => Web3BatchRequest,
  Web3Config: () => Web3Config,
  Web3ConfigEvent: () => Web3ConfigEvent,
  Web3Context: () => Web3Context,
  Web3EthPluginBase: () => Web3EthPluginBase,
  Web3EventEmitter: () => Web3EventEmitter,
  Web3PluginBase: () => Web3PluginBase,
  Web3PromiEvent: () => Web3PromiEvent,
  Web3RequestManager: () => Web3RequestManager,
  Web3RequestManagerEvent: () => Web3RequestManagerEvent,
  Web3Subscription: () => Web3Subscription,
  Web3SubscriptionManager: () => Web3SubscriptionManager,
  formatters: () => formatters_exports,
  inputAddressFormatter: () => inputAddressFormatter,
  inputBlockNumberFormatter: () => inputBlockNumberFormatter,
  inputCallFormatter: () => inputCallFormatter,
  inputDefaultBlockNumberFormatter: () => inputDefaultBlockNumberFormatter,
  inputLogFormatter: () => inputLogFormatter,
  inputPostFormatter: () => inputPostFormatter,
  inputSignFormatter: () => inputSignFormatter,
  inputStorageKeysFormatter: () => inputStorageKeysFormatter,
  inputTopicFormatter: () => inputTopicFormatter,
  inputTransactionFormatter: () => inputTransactionFormatter,
  isEIP1193Provider: () => isEIP1193Provider,
  isLegacyRequestProvider: () => isLegacyRequestProvider,
  isLegacySendAsyncProvider: () => isLegacySendAsyncProvider,
  isLegacySendProvider: () => isLegacySendProvider,
  isMetaMaskProvider: () => isMetaMaskProvider,
  isSupportSubscriptions: () => isSupportSubscriptions,
  isSupportedProvider: () => isSupportedProvider,
  isWeb3Provider: () => isWeb3Provider,
  outputBigIntegerFormatter: () => outputBigIntegerFormatter,
  outputBlockFormatter: () => outputBlockFormatter,
  outputLogFormatter: () => outputLogFormatter,
  outputPostFormatter: () => outputPostFormatter,
  outputProofFormatter: () => outputProofFormatter,
  outputSyncingFormatter: () => outputSyncingFormatter,
  outputTransactionFormatter: () => outputTransactionFormatter,
  outputTransactionReceiptFormatter: () => outputTransactionReceiptFormatter,
  txInputOptionsFormatter: () => txInputOptionsFormatter
});

// node_modules/web3-core/lib/esm/web3_event_emitter.js
var Web3EventEmitter = class {
  constructor() {
    this._emitter = new EventEmitter();
  }
  on(eventName, fn) {
    this._emitter.on(eventName, fn);
  }
  once(eventName, fn) {
    this._emitter.once(eventName, fn);
  }
  off(eventName, fn) {
    this._emitter.off(eventName, fn);
  }
  emit(eventName, params) {
    this._emitter.emit(eventName, params);
  }
  listenerCount(eventName) {
    return this._emitter.listenerCount(eventName);
  }
  listeners(eventName) {
    return this._emitter.listeners(eventName);
  }
  eventNames() {
    return this._emitter.eventNames();
  }
  removeAllListeners() {
    return this._emitter.removeAllListeners();
  }
  setMaxListenerWarningThreshold(maxListenersWarningThreshold) {
    this._emitter.setMaxListeners(maxListenersWarningThreshold);
  }
  getMaxListeners() {
    return this._emitter.getMaxListeners();
  }
};

// node_modules/web3-core/lib/esm/web3_config.js
var Web3ConfigEvent;
(function(Web3ConfigEvent2) {
  Web3ConfigEvent2["CONFIG_CHANGE"] = "CONFIG_CHANGE";
})(Web3ConfigEvent || (Web3ConfigEvent = {}));
var Web3Config = class extends Web3EventEmitter {
  constructor(options) {
    super();
    this.config = {
      handleRevert: false,
      defaultAccount: void 0,
      defaultBlock: "latest",
      transactionBlockTimeout: 50,
      transactionConfirmationBlocks: 24,
      transactionPollingInterval: 1e3,
      transactionPollingTimeout: 750 * 1e3,
      transactionReceiptPollingInterval: void 0,
      transactionSendTimeout: 750 * 1e3,
      transactionConfirmationPollingInterval: void 0,
      blockHeaderTimeout: 10,
      maxListenersWarningThreshold: 100,
      contractDataInputFill: "data",
      defaultNetworkId: void 0,
      defaultChain: "mainnet",
      defaultHardfork: "london",
      // TODO - Check if there is a default Common
      defaultCommon: void 0,
      defaultTransactionType: "0x2",
      defaultMaxPriorityFeePerGas: toHex(25e8),
      enableExperimentalFeatures: {
        useSubscriptionWhenCheckingBlockTimeout: false,
        useRpcCallSpecification: false
      },
      transactionBuilder: void 0,
      transactionTypeParser: void 0,
      customTransactionSchema: void 0,
      defaultReturnFormat: DEFAULT_RETURN_FORMAT,
      ignoreGasPricing: false
    };
    this.setConfig(options !== null && options !== void 0 ? options : {});
  }
  setConfig(options) {
    const keys = Object.keys(options);
    for (const key of keys) {
      this._triggerConfigChange(key, options[key]);
      if (!isNullish2(options[key]) && typeof options[key] === "number" && key === "maxListenersWarningThreshold") {
        this.setMaxListenerWarningThreshold(Number(options[key]));
      }
    }
    Object.assign(this.config, options);
  }
  /**
   * The `handleRevert` options property returns the revert reason string if enabled for the following methods:
   * - web3.eth.sendTransaction()
   * - web3.eth.call()
   * - myContract.methods.myMethod().call()
   * - myContract.methods.myMethod().send()
   * Default is `false`.
   *
   * `Note`: At the moment `handleRevert` is only supported for `sendTransaction` and not for `sendSignedTransaction`
   */
  get handleRevert() {
    return this.config.handleRevert;
  }
  /**
   * Will set the handleRevert
   */
  set handleRevert(val) {
    this._triggerConfigChange("handleRevert", val);
    this.config.handleRevert = val;
  }
  /**
   * The `contractDataInputFill` options property will allow you to set the hash of the method signature and encoded parameters to the property
   * either `data`, `input` or both within your contract.
   * This will affect the contracts send, call and estimateGas methods
   * Default is `data`.
   */
  get contractDataInputFill() {
    return this.config.contractDataInputFill;
  }
  /**
   * Will set the contractDataInputFill
   */
  set contractDataInputFill(val) {
    this._triggerConfigChange("contractDataInputFill", val);
    this.config.contractDataInputFill = val;
  }
  /**
   * This default address is used as the default `from` property, if no `from` property is specified in for the following methods:
   * - web3.eth.sendTransaction()
   * - web3.eth.call()
   * - myContract.methods.myMethod().call()
   * - myContract.methods.myMethod().send()
   */
  get defaultAccount() {
    return this.config.defaultAccount;
  }
  /**
   * Will set the default account.
   */
  set defaultAccount(val) {
    this._triggerConfigChange("defaultAccount", val);
    this.config.defaultAccount = val;
  }
  /**
   * The default block is used for certain methods. You can override it by passing in the defaultBlock as last parameter. The default value is `"latest"`.
   * - web3.eth.getBalance()
   * - web3.eth.getCode()
   * - web3.eth.getTransactionCount()
   * - web3.eth.getStorageAt()
   * - web3.eth.call()
   * - myContract.methods.myMethod().call()
   */
  get defaultBlock() {
    return this.config.defaultBlock;
  }
  /**
   * Will set the default block.
   *
   * - A block number
   * - `"earliest"` - String: The genesis block
   * - `"latest"` - String: The latest block (current head of the blockchain)
   * - `"pending"` - String: The currently mined block (including pending transactions)
   * - `"finalized"` - String: (For POS networks) The finalized block is one which has been accepted as canonical by greater than 2/3 of validators
   * - `"safe"` - String: (For POS networks) The safe head block is one which under normal network conditions, is expected to be included in the canonical chain. Under normal network conditions the safe head and the actual tip of the chain will be equivalent (with safe head trailing only by a few seconds). Safe heads will be less likely to be reorged than the proof of work network's latest blocks.
   */
  set defaultBlock(val) {
    this._triggerConfigChange("defaultBlock", val);
    this.config.defaultBlock = val;
  }
  /**
   * The time used to wait for Ethereum Node to return the sent transaction result.
   * Note: If the RPC call stuck at the Node and therefor timed-out, the transaction may still be pending or even mined by the Network. We recommend checking the pending transactions in such a case.
   * Default is `750` seconds (12.5 minutes).
   */
  get transactionSendTimeout() {
    return this.config.transactionSendTimeout;
  }
  /**
   * Will set the transactionSendTimeout.
   */
  set transactionSendTimeout(val) {
    this._triggerConfigChange("transactionSendTimeout", val);
    this.config.transactionSendTimeout = val;
  }
  /**
   * The `transactionBlockTimeout` is used over socket-based connections. This option defines the amount of new blocks it should wait until the first confirmation happens, otherwise the PromiEvent rejects with a timeout error.
   * Default is `50`.
   */
  get transactionBlockTimeout() {
    return this.config.transactionBlockTimeout;
  }
  /**
   * Will set the transactionBlockTimeout.
   */
  set transactionBlockTimeout(val) {
    this._triggerConfigChange("transactionBlockTimeout", val);
    this.config.transactionBlockTimeout = val;
  }
  /**
   * This defines the number of blocks it requires until a transaction is considered confirmed.
   * Default is `24`.
   */
  get transactionConfirmationBlocks() {
    return this.config.transactionConfirmationBlocks;
  }
  /**
   * Will set the transactionConfirmationBlocks.
   */
  set transactionConfirmationBlocks(val) {
    this._triggerConfigChange("transactionConfirmationBlocks", val);
    this.config.transactionConfirmationBlocks = val;
  }
  /**
   * Used over HTTP connections. This option defines the number of seconds between Web3 calls for a receipt which confirms that a transaction was mined by the network.
   * Default is `1000` ms.
   */
  get transactionPollingInterval() {
    return this.config.transactionPollingInterval;
  }
  /**
   * Will set the transactionPollingInterval.
   */
  set transactionPollingInterval(val) {
    this._triggerConfigChange("transactionPollingInterval", val);
    this.config.transactionPollingInterval = val;
    this.transactionReceiptPollingInterval = val;
    this.transactionConfirmationPollingInterval = val;
  }
  /**
   * Used over HTTP connections. This option defines the number of seconds Web3 will wait for a receipt which confirms that a transaction was mined by the network. Note: If this method times out, the transaction may still be pending.
   * Default is `750` seconds (12.5 minutes).
   */
  get transactionPollingTimeout() {
    return this.config.transactionPollingTimeout;
  }
  /**
   * Will set the transactionPollingTimeout.
   */
  set transactionPollingTimeout(val) {
    this._triggerConfigChange("transactionPollingTimeout", val);
    this.config.transactionPollingTimeout = val;
  }
  /**
   * The `transactionPollingInterval` is used over HTTP connections. This option defines the number of seconds between Web3 calls for a receipt which confirms that a transaction was mined by the network.
   * Default is `undefined`
   */
  get transactionReceiptPollingInterval() {
    return this.config.transactionReceiptPollingInterval;
  }
  /**
   * Will set the transactionReceiptPollingInterval
   */
  set transactionReceiptPollingInterval(val) {
    this._triggerConfigChange("transactionReceiptPollingInterval", val);
    this.config.transactionReceiptPollingInterval = val;
  }
  get transactionConfirmationPollingInterval() {
    return this.config.transactionConfirmationPollingInterval;
  }
  set transactionConfirmationPollingInterval(val) {
    this._triggerConfigChange("transactionConfirmationPollingInterval", val);
    this.config.transactionConfirmationPollingInterval = val;
  }
  /**
   * The blockHeaderTimeout is used over socket-based connections. This option defines the amount seconds it should wait for `'newBlockHeaders'` event before falling back to polling to fetch transaction receipt.
   * Default is `10` seconds.
   */
  get blockHeaderTimeout() {
    return this.config.blockHeaderTimeout;
  }
  /**
   * Will set the blockHeaderTimeout
   */
  set blockHeaderTimeout(val) {
    this._triggerConfigChange("blockHeaderTimeout", val);
    this.config.blockHeaderTimeout = val;
  }
  /**
   * The enableExperimentalFeatures is used to enable trying new experimental features that are still not fully implemented or not fully tested or still have some related issues.
   * Default is `false` for every feature.
   */
  get enableExperimentalFeatures() {
    return this.config.enableExperimentalFeatures;
  }
  /**
   * Will set the enableExperimentalFeatures
   */
  set enableExperimentalFeatures(val) {
    this._triggerConfigChange("enableExperimentalFeatures", val);
    this.config.enableExperimentalFeatures = val;
  }
  get maxListenersWarningThreshold() {
    return this.config.maxListenersWarningThreshold;
  }
  set maxListenersWarningThreshold(val) {
    this._triggerConfigChange("maxListenersWarningThreshold", val);
    this.setMaxListenerWarningThreshold(val);
    this.config.maxListenersWarningThreshold = val;
  }
  get defaultReturnFormat() {
    return this.config.defaultReturnFormat;
  }
  set defaultReturnFormat(val) {
    this._triggerConfigChange("defaultReturnFormat", val);
    this.config.defaultReturnFormat = val;
  }
  get defaultNetworkId() {
    return this.config.defaultNetworkId;
  }
  set defaultNetworkId(val) {
    this._triggerConfigChange("defaultNetworkId", val);
    this.config.defaultNetworkId = val;
  }
  get defaultChain() {
    return this.config.defaultChain;
  }
  set defaultChain(val) {
    if (!isNullish2(this.config.defaultCommon) && !isNullish2(this.config.defaultCommon.baseChain) && val !== this.config.defaultCommon.baseChain)
      throw new ConfigChainMismatchError(this.config.defaultChain, val);
    this._triggerConfigChange("defaultChain", val);
    this.config.defaultChain = val;
  }
  /**
   * Will return the default hardfork. Default is `london`
   * The default hardfork property can be one of the following:
   * - `chainstart`
   * - `homestead`
   * - `dao`
   * - `tangerineWhistle`
   * - `spuriousDragon`
   * - `byzantium`
   * - `constantinople`
   * - `petersburg`
   * - `istanbul`
   * - `berlin`
   * - `london`
   * - 'arrowGlacier',
   * - 'tangerineWhistle',
   * - 'muirGlacier'
   *
   */
  get defaultHardfork() {
    return this.config.defaultHardfork;
  }
  /**
   * Will set the default hardfork.
   *
   */
  set defaultHardfork(val) {
    if (!isNullish2(this.config.defaultCommon) && !isNullish2(this.config.defaultCommon.hardfork) && val !== this.config.defaultCommon.hardfork)
      throw new ConfigHardforkMismatchError(this.config.defaultCommon.hardfork, val);
    this._triggerConfigChange("defaultHardfork", val);
    this.config.defaultHardfork = val;
  }
  /**
   *
   * Will get the default common property
   * The default common property does contain the following Common object:
   * - `customChain` - `Object`: The custom chain properties
   * 	- `name` - `string`: (optional) The name of the chain
   * 	- `networkId` - `number`: Network ID of the custom chain
   * 	- `chainId` - `number`: Chain ID of the custom chain
   * - `baseChain` - `string`: (optional) mainnet, goerli, kovan, rinkeby, or ropsten
   * - `hardfork` - `string`: (optional) chainstart, homestead, dao, tangerineWhistle, spuriousDragon, byzantium, constantinople, petersburg, istanbul, berlin, or london
   * Default is `undefined`.
   *
   */
  get defaultCommon() {
    return this.config.defaultCommon;
  }
  /**
   * Will set the default common property
   *
   */
  set defaultCommon(val) {
    if (!isNullish2(this.config.defaultHardfork) && !isNullish2(val) && !isNullish2(val.hardfork) && this.config.defaultHardfork !== val.hardfork)
      throw new ConfigHardforkMismatchError(this.config.defaultHardfork, val.hardfork);
    if (!isNullish2(this.config.defaultChain) && !isNullish2(val) && !isNullish2(val.baseChain) && this.config.defaultChain !== val.baseChain)
      throw new ConfigChainMismatchError(this.config.defaultChain, val.baseChain);
    this._triggerConfigChange("defaultCommon", val);
    this.config.defaultCommon = val;
  }
  /**
   *  Will get the ignoreGasPricing property. When true, the gasPrice, maxPriorityFeePerGas, and maxFeePerGas will not be autofilled in the transaction object.
   *  Useful when you want wallets to handle gas pricing.
   */
  get ignoreGasPricing() {
    return this.config.ignoreGasPricing;
  }
  set ignoreGasPricing(val) {
    this._triggerConfigChange("ignoreGasPricing", val);
    this.config.ignoreGasPricing = val;
  }
  get defaultTransactionType() {
    return this.config.defaultTransactionType;
  }
  set defaultTransactionType(val) {
    this._triggerConfigChange("defaultTransactionType", val);
    this.config.defaultTransactionType = val;
  }
  get defaultMaxPriorityFeePerGas() {
    return this.config.defaultMaxPriorityFeePerGas;
  }
  set defaultMaxPriorityFeePerGas(val) {
    this._triggerConfigChange("defaultMaxPriorityFeePerGas", val);
    this.config.defaultMaxPriorityFeePerGas = val;
  }
  get transactionBuilder() {
    return this.config.transactionBuilder;
  }
  set transactionBuilder(val) {
    this._triggerConfigChange("transactionBuilder", val);
    this.config.transactionBuilder = val;
  }
  get transactionTypeParser() {
    return this.config.transactionTypeParser;
  }
  set transactionTypeParser(val) {
    this._triggerConfigChange("transactionTypeParser", val);
    this.config.transactionTypeParser = val;
  }
  get customTransactionSchema() {
    return this.config.customTransactionSchema;
  }
  set customTransactionSchema(schema) {
    this._triggerConfigChange("customTransactionSchema", schema);
    this.config.customTransactionSchema = schema;
  }
  _triggerConfigChange(config, newValue) {
    this.emit(Web3ConfigEvent.CONFIG_CHANGE, {
      name: config,
      oldValue: this.config[config],
      newValue
    });
  }
};

// node_modules/web3-providers-http/lib/esm/index.js
var esm_exports5 = {};
__export(esm_exports5, {
  HttpProvider: () => HttpProvider,
  default: () => HttpProvider
});
var import_cross_fetch = __toESM(require_browser_ponyfill());
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
var HttpProvider = class _HttpProvider extends Web3BaseProvider {
  constructor(clientUrl, httpProviderOptions) {
    super();
    if (!_HttpProvider.validateClientUrl(clientUrl))
      throw new InvalidClientError(clientUrl);
    this.clientUrl = clientUrl;
    this.httpProviderOptions = httpProviderOptions;
  }
  static validateClientUrl(clientUrl) {
    return typeof clientUrl === "string" ? /^http(s)?:\/\//i.test(clientUrl) : false;
  }
  /* eslint-disable class-methods-use-this */
  getStatus() {
    throw new MethodNotImplementedError();
  }
  /* eslint-disable class-methods-use-this */
  supportsSubscriptions() {
    return false;
  }
  request(payload, requestOptions) {
    var _a3;
    return __awaiter(this, void 0, void 0, function* () {
      const providerOptionsCombined = Object.assign(Object.assign({}, (_a3 = this.httpProviderOptions) === null || _a3 === void 0 ? void 0 : _a3.providerOptions), requestOptions);
      const response = yield (0, import_cross_fetch.default)(this.clientUrl, Object.assign(Object.assign({}, providerOptionsCombined), { method: "POST", headers: Object.assign(Object.assign({}, providerOptionsCombined.headers), { "Content-Type": "application/json" }), body: JSON.stringify(payload) }));
      if (!response.ok) {
        throw new ResponseError(yield response.json(), void 0, void 0, response.status);
      }
      ;
      return yield response.json();
    });
  }
  /* eslint-disable class-methods-use-this */
  on() {
    throw new MethodNotImplementedError();
  }
  /* eslint-disable class-methods-use-this */
  removeListener() {
    throw new MethodNotImplementedError();
  }
  /* eslint-disable class-methods-use-this */
  once() {
    throw new MethodNotImplementedError();
  }
  /* eslint-disable class-methods-use-this */
  removeAllListeners() {
    throw new MethodNotImplementedError();
  }
  /* eslint-disable class-methods-use-this */
  connect() {
    throw new MethodNotImplementedError();
  }
  /* eslint-disable class-methods-use-this */
  disconnect() {
    throw new MethodNotImplementedError();
  }
  /* eslint-disable class-methods-use-this */
  reset() {
    throw new MethodNotImplementedError();
  }
  /* eslint-disable class-methods-use-this */
  reconnect() {
    throw new MethodNotImplementedError();
  }
};

// node_modules/web3-providers-ws/lib/esm/index.js
var esm_exports6 = {};
__export(esm_exports6, {
  WebSocketProvider: () => WebSocketProvider,
  default: () => WebSocketProvider
});

// node_modules/isomorphic-ws/browser.js
var ws = null;
if (typeof WebSocket !== "undefined") {
  ws = WebSocket;
} else if (typeof MozWebSocket !== "undefined") {
  ws = MozWebSocket;
} else if (typeof global !== "undefined") {
  ws = global.WebSocket || global.MozWebSocket;
} else if (typeof window !== "undefined") {
  ws = window.WebSocket || window.MozWebSocket;
} else if (typeof self !== "undefined") {
  ws = self.WebSocket || self.MozWebSocket;
}
var browser_default = ws;

// node_modules/web3-providers-ws/lib/esm/index.js
var WebSocketProvider = class extends SocketProvider {
  /**
   * This is a class used for Web Socket connections. It extends the abstract class SocketProvider {@link SocketProvider} that extends the EIP-1193 provider {@link EIP1193Provider}.
   * @param socketPath - The path to the Web Socket.
   * @param socketOptions - The options for the Web Socket client.
   * @param reconnectOptions - The options for the socket reconnection {@link ReconnectOptions}
   */
  // this constructor is to specify the type for `socketOptions` for a better intellisense.
  // eslint-disable-next-line no-useless-constructor
  constructor(socketPath, socketOptions, reconnectOptions) {
    super(socketPath, socketOptions, reconnectOptions);
  }
  // eslint-disable-next-line class-methods-use-this
  _validateProviderPath(providerUrl) {
    return typeof providerUrl === "string" ? /^ws(s)?:\/\//i.test(providerUrl) : false;
  }
  getStatus() {
    if (this._socketConnection && !isNullish2(this._socketConnection)) {
      switch (this._socketConnection.readyState) {
        case this._socketConnection.CONNECTING: {
          return "connecting";
        }
        case this._socketConnection.OPEN: {
          return "connected";
        }
        default: {
          return "disconnected";
        }
      }
    }
    return "disconnected";
  }
  _openSocketConnection() {
    this._socketConnection = new browser_default(this._socketPath, void 0, this._socketOptions && Object.keys(this._socketOptions).length === 0 ? void 0 : this._socketOptions);
  }
  _closeSocketConnection(code, data) {
    var _a3;
    (_a3 = this._socketConnection) === null || _a3 === void 0 ? void 0 : _a3.close(code, data);
  }
  _sendToSocket(payload) {
    var _a3;
    if (this.getStatus() === "disconnected") {
      throw new ConnectionNotOpenError();
    }
    (_a3 = this._socketConnection) === null || _a3 === void 0 ? void 0 : _a3.send(JSON.stringify(payload));
  }
  _parseResponses(event) {
    return this.chunkResponseParser.parseResponse(event.data);
  }
  _addSocketListeners() {
    var _a3, _b, _c, _d;
    (_a3 = this._socketConnection) === null || _a3 === void 0 ? void 0 : _a3.addEventListener("open", this._onOpenHandler);
    (_b = this._socketConnection) === null || _b === void 0 ? void 0 : _b.addEventListener("message", this._onMessageHandler);
    (_c = this._socketConnection) === null || _c === void 0 ? void 0 : _c.addEventListener("close", (e) => this._onCloseHandler(e));
    (_d = this._socketConnection) === null || _d === void 0 ? void 0 : _d.addEventListener("error", this._onErrorHandler);
  }
  _removeSocketListeners() {
    var _a3, _b, _c;
    (_a3 = this._socketConnection) === null || _a3 === void 0 ? void 0 : _a3.removeEventListener("message", this._onMessageHandler);
    (_b = this._socketConnection) === null || _b === void 0 ? void 0 : _b.removeEventListener("open", this._onOpenHandler);
    (_c = this._socketConnection) === null || _c === void 0 ? void 0 : _c.removeEventListener("close", this._onCloseHandler);
  }
  _onCloseEvent(event) {
    var _a3;
    if (this._reconnectOptions.autoReconnect && (![1e3, 1001].includes(event.code) || !event.wasClean)) {
      this._reconnect();
      return;
    }
    this._clearQueues(event);
    this._removeSocketListeners();
    this._onDisconnect(event.code, event.reason);
    (_a3 = this._socketConnection) === null || _a3 === void 0 ? void 0 : _a3.removeEventListener("error", this._onErrorHandler);
  }
};

// node_modules/web3-core/lib/esm/utils.js
var isWeb3Provider = (provider) => Web3BaseProvider.isWeb3Provider(provider);
var isMetaMaskProvider = (provider) => typeof provider !== "string" && "request" in provider && provider.request.constructor.name === "AsyncFunction" && "isMetaMask" in provider && provider.isMetaMask;
var isLegacyRequestProvider = (provider) => typeof provider !== "string" && "request" in provider && provider.request.constructor.name === "Function";
var isEIP1193Provider = (provider) => typeof provider !== "string" && "request" in provider && provider.request.constructor.name === "AsyncFunction";
var isLegacySendProvider = (provider) => typeof provider !== "string" && "send" in provider;
var isLegacySendAsyncProvider = (provider) => typeof provider !== "string" && "sendAsync" in provider;
var isSupportedProvider = (provider) => provider && (isWeb3Provider(provider) || isEIP1193Provider(provider) || isLegacyRequestProvider(provider) || isLegacySendAsyncProvider(provider) || isLegacySendProvider(provider));
var isSupportSubscriptions = (provider) => {
  if (provider && "supportsSubscriptions" in provider) {
    return provider.supportsSubscriptions();
  }
  if (provider && typeof provider !== "string" && "on" in provider) {
    return true;
  }
  return false;
};

// node_modules/web3-core/lib/esm/web3_request_manager.js
var __awaiter2 = function(thisArg, _arguments, P, generator) {
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
var Web3RequestManagerEvent;
(function(Web3RequestManagerEvent2) {
  Web3RequestManagerEvent2["PROVIDER_CHANGED"] = "PROVIDER_CHANGED";
  Web3RequestManagerEvent2["BEFORE_PROVIDER_CHANGE"] = "BEFORE_PROVIDER_CHANGE";
})(Web3RequestManagerEvent || (Web3RequestManagerEvent = {}));
var availableProviders = {
  HttpProvider,
  WebsocketProvider: WebSocketProvider
};
var Web3RequestManager = class _Web3RequestManager extends Web3EventEmitter {
  constructor(provider, useRpcCallSpecification, requestManagerMiddleware) {
    super();
    if (!isNullish2(provider)) {
      this.setProvider(provider);
    }
    this.useRpcCallSpecification = useRpcCallSpecification;
    if (!isNullish2(requestManagerMiddleware))
      this.middleware = requestManagerMiddleware;
  }
  /**
   * Will return all available providers
   */
  static get providers() {
    return availableProviders;
  }
  /**
   * Will return the current provider.
   *
   * @returns Returns the current provider
   */
  get provider() {
    return this._provider;
  }
  /**
   * Will return all available providers
   */
  // eslint-disable-next-line class-methods-use-this
  get providers() {
    return availableProviders;
  }
  /**
   * Use to set provider. Provider can be a provider instance or a string.
   *
   * @param provider - The provider to set
   */
  setProvider(provider) {
    let newProvider;
    if (provider && typeof provider === "string" && this.providers) {
      if (/^http(s)?:\/\//i.test(provider)) {
        newProvider = new this.providers.HttpProvider(provider);
      } else if (/^ws(s)?:\/\//i.test(provider)) {
        newProvider = new this.providers.WebsocketProvider(provider);
      } else {
        throw new ProviderError(`Can't autodetect provider for "${provider}"`);
      }
    } else if (isNullish2(provider)) {
      newProvider = void 0;
    } else {
      newProvider = provider;
    }
    this.emit(Web3RequestManagerEvent.BEFORE_PROVIDER_CHANGE, this._provider);
    this._provider = newProvider;
    this.emit(Web3RequestManagerEvent.PROVIDER_CHANGED, this._provider);
    return true;
  }
  setMiddleware(requestManagerMiddleware) {
    this.middleware = requestManagerMiddleware;
  }
  /**
   *
   * Will execute a request
   *
   * @param request - {@link Web3APIRequest} The request to send
   *
   * @returns The response of the request {@link ResponseType}. If there is error
   * in the response, will throw an error
   */
  send(request) {
    return __awaiter2(this, void 0, void 0, function* () {
      const requestObj = Object.assign({}, request);
      let response = yield this._sendRequest(requestObj);
      if (!isNullish2(this.middleware))
        response = yield this.middleware.processResponse(response);
      if (json_rpc_exports.isResponseWithResult(response)) {
        return response.result;
      }
      throw new ResponseError(response);
    });
  }
  /**
   * Same as send, but, will execute a batch of requests
   *
   * @param request {@link JsonRpcBatchRequest} The batch request to send
   */
  sendBatch(request) {
    return __awaiter2(this, void 0, void 0, function* () {
      const response = yield this._sendRequest(request);
      return response;
    });
  }
  _sendRequest(request) {
    return __awaiter2(this, void 0, void 0, function* () {
      const { provider } = this;
      if (isNullish2(provider)) {
        throw new ProviderError("Provider not available. Use `.setProvider` or `.provider=` to initialize the provider.");
      }
      let payload = json_rpc_exports.isBatchRequest(request) ? json_rpc_exports.toBatchPayload(request) : json_rpc_exports.toPayload(request);
      if (!isNullish2(this.middleware)) {
        payload = yield this.middleware.processRequest(payload);
      }
      if (isWeb3Provider(provider)) {
        let response;
        try {
          response = yield provider.request(payload);
        } catch (error) {
          response = error;
        }
        return this._processJsonRpcResponse(payload, response, { legacy: false, error: false });
      }
      if (isEIP1193Provider(provider)) {
        return provider.request(payload).then((res) => this._processJsonRpcResponse(payload, res, {
          legacy: true,
          error: false
        })).catch((error) => this._processJsonRpcResponse(payload, error, { legacy: true, error: true }));
      }
      if (isLegacyRequestProvider(provider)) {
        return new Promise((resolve, reject) => {
          const rejectWithError = (err) => {
            reject(this._processJsonRpcResponse(payload, err, {
              legacy: true,
              error: true
            }));
          };
          const resolveWithResponse = (response) => resolve(this._processJsonRpcResponse(payload, response, {
            legacy: true,
            error: false
          }));
          const result = provider.request(
            payload,
            // a callback that is expected to be called after getting the response:
            (err, response) => {
              if (err) {
                return rejectWithError(err);
              }
              return resolveWithResponse(response);
            }
          );
          if (isPromise(result)) {
            const responsePromise = result;
            responsePromise.then(resolveWithResponse).catch((error) => {
              try {
                const processedError = this._processJsonRpcResponse(payload, error, { legacy: true, error: true });
                reject(processedError);
              } catch (processingError) {
                reject(processingError);
              }
            });
          }
        });
      }
      if (isLegacySendProvider(provider)) {
        return new Promise((resolve, reject) => {
          provider.send(payload, (err, response) => {
            if (err) {
              return reject(this._processJsonRpcResponse(payload, err, {
                legacy: true,
                error: true
              }));
            }
            if (isNullish2(response)) {
              throw new ResponseError({}, 'Got a "nullish" response from provider.');
            }
            return resolve(this._processJsonRpcResponse(payload, response, {
              legacy: true,
              error: false
            }));
          });
        });
      }
      if (isLegacySendAsyncProvider(provider)) {
        return provider.sendAsync(payload).then((response) => this._processJsonRpcResponse(payload, response, { legacy: true, error: false })).catch((error) => this._processJsonRpcResponse(payload, error, {
          legacy: true,
          error: true
        }));
      }
      throw new ProviderError("Provider does not have a request or send method to use.");
    });
  }
  // eslint-disable-next-line class-methods-use-this
  _processJsonRpcResponse(payload, response, { legacy, error }) {
    if (isNullish2(response)) {
      return this._buildResponse(
        payload,
        // Some providers uses "null" as valid empty response
        // eslint-disable-next-line no-null/no-null
        null,
        error
      );
    }
    if (json_rpc_exports.isResponseWithError(response)) {
      if (this.useRpcCallSpecification && isResponseRpcError(response)) {
        const rpcErrorResponse = response;
        if (rpcErrorsMap.get(rpcErrorResponse.error.code)) {
          const Err = rpcErrorsMap.get(rpcErrorResponse.error.code).error;
          throw new Err(rpcErrorResponse);
        } else {
          throw new RpcError(rpcErrorResponse);
        }
      } else if (!_Web3RequestManager._isReverted(response)) {
        throw new InvalidResponseError(response, payload);
      }
    }
    if (json_rpc_exports.isResponseWithResult(response)) {
      return response;
    }
    if (response instanceof Error) {
      _Web3RequestManager._isReverted(response);
      throw response;
    }
    if (!legacy && json_rpc_exports.isBatchRequest(payload) && json_rpc_exports.isBatchResponse(response)) {
      return response;
    }
    if (legacy && !error && json_rpc_exports.isBatchRequest(payload)) {
      return response;
    }
    if (legacy && error && json_rpc_exports.isBatchRequest(payload)) {
      throw response;
    }
    if (legacy && !json_rpc_exports.isResponseWithError(response) && !json_rpc_exports.isResponseWithResult(response)) {
      return this._buildResponse(payload, response, error);
    }
    if (json_rpc_exports.isBatchRequest(payload) && !Array.isArray(response)) {
      throw new ResponseError(response, "Got normal response for a batch request.");
    }
    if (!json_rpc_exports.isBatchRequest(payload) && Array.isArray(response)) {
      throw new ResponseError(response, "Got batch response for a normal request.");
    }
    throw new ResponseError(response, "Invalid response");
  }
  static _isReverted(response) {
    let error;
    if (json_rpc_exports.isResponseWithError(response)) {
      error = response.error;
    } else if (response instanceof Error) {
      error = response;
    }
    if (error === null || error === void 0 ? void 0 : error.message.includes("revert"))
      throw new ContractExecutionError(error);
    return false;
  }
  // Need to use same types as _processJsonRpcResponse so have to declare as instance method
  // eslint-disable-next-line class-methods-use-this
  _buildResponse(payload, response, error) {
    const res = {
      jsonrpc: "2.0",
      // eslint-disable-next-line no-nested-ternary
      id: json_rpc_exports.isBatchRequest(payload) ? payload[0].id : "id" in payload ? payload.id : (
        // Have to use the null here explicitly
        // eslint-disable-next-line no-null/no-null
        null
      )
    };
    if (error) {
      return Object.assign(Object.assign({}, res), { error: response });
    }
    return Object.assign(Object.assign({}, res), { result: response });
  }
};

// node_modules/web3-core/lib/esm/web3_subscription_manager.js
var __awaiter3 = function(thisArg, _arguments, P, generator) {
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
var Web3SubscriptionManager = class {
  constructor(requestManager, registeredSubscriptions2, tolerateUnlinkedSubscription = false) {
    this.requestManager = requestManager;
    this.registeredSubscriptions = registeredSubscriptions2;
    this.tolerateUnlinkedSubscription = tolerateUnlinkedSubscription;
    this._subscriptions = /* @__PURE__ */ new Map();
    this.requestManager.on(Web3RequestManagerEvent.BEFORE_PROVIDER_CHANGE, () => __awaiter3(this, void 0, void 0, function* () {
      yield this.unsubscribe();
    }));
    this.requestManager.on(Web3RequestManagerEvent.PROVIDER_CHANGED, () => {
      this.clear();
      this.listenToProviderEvents();
    });
    this.listenToProviderEvents();
  }
  listenToProviderEvents() {
    const providerAsWebProvider = this.requestManager.provider;
    if (!this.requestManager.provider || typeof (providerAsWebProvider === null || providerAsWebProvider === void 0 ? void 0 : providerAsWebProvider.supportsSubscriptions) === "function" && !(providerAsWebProvider === null || providerAsWebProvider === void 0 ? void 0 : providerAsWebProvider.supportsSubscriptions())) {
      return;
    }
    if (typeof this.requestManager.provider.on === "function") {
      if (typeof this.requestManager.provider.request === "function") {
        this.requestManager.provider.on(
          "message",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
          (message) => this.messageListener(message)
        );
      } else {
        providerAsWebProvider.on("data", (data) => this.messageListener(data));
      }
    }
  }
  messageListener(data) {
    var _a3, _b, _c;
    if (!data) {
      throw new SubscriptionError("Should not call messageListener with no data. Type was");
    }
    const subscriptionId = ((_a3 = data.params) === null || _a3 === void 0 ? void 0 : _a3.subscription) || ((_b = data.data) === null || _b === void 0 ? void 0 : _b.subscription) || ((_c = data.id) === null || _c === void 0 ? void 0 : _c.toString(16));
    if (subscriptionId) {
      const sub = this._subscriptions.get(subscriptionId);
      sub === null || sub === void 0 ? void 0 : sub.processSubscriptionData(data);
    }
  }
  /**
   * Will create a new subscription
   *
   * @param name - The subscription you want to subscribe to
   * @param args - Optional additional parameters, depending on the subscription type
   * @param returnFormat- ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   *
   * Will subscribe to a specific topic (note: name)
   * @returns The subscription object
   */
  subscribe(name_1, args_1) {
    return __awaiter3(this, arguments, void 0, function* (name2, args, returnFormat = DEFAULT_RETURN_FORMAT) {
      const Klass = this.registeredSubscriptions[name2];
      if (!Klass) {
        throw new SubscriptionError("Invalid subscription type");
      }
      const subscription = new Klass(args !== null && args !== void 0 ? args : void 0, {
        subscriptionManager: this,
        returnFormat
        // eslint.disable-next-line @typescript-eslint/no-unsafe-any
      });
      yield this.addSubscription(subscription);
      return subscription;
    });
  }
  /**
   * Will returns all subscriptions.
   */
  get subscriptions() {
    return this._subscriptions;
  }
  /**
   *
   * Adds an instance of {@link Web3Subscription} and subscribes to it
   *
   * @param sub - A {@link Web3Subscription} object
   */
  addSubscription(sub) {
    return __awaiter3(this, void 0, void 0, function* () {
      if (!this.requestManager.provider) {
        throw new ProviderError("Provider not available");
      }
      if (!this.supportsSubscriptions()) {
        throw new SubscriptionError("The current provider does not support subscriptions");
      }
      if (sub.id && this._subscriptions.has(sub.id)) {
        throw new SubscriptionError(`Subscription with id "${sub.id}" already exists`);
      }
      yield sub.sendSubscriptionRequest();
      if (isNullish2(sub.id)) {
        throw new SubscriptionError("Subscription is not subscribed yet.");
      }
      this._subscriptions.set(sub.id, sub);
      return sub.id;
    });
  }
  /**
   * Will clear a subscription
   *
   * @param id - The subscription of type {@link Web3Subscription}  to remove
   */
  removeSubscription(sub) {
    return __awaiter3(this, void 0, void 0, function* () {
      const { id } = sub;
      if (isNullish2(id)) {
        throw new SubscriptionError("Subscription is not subscribed yet. Or, had already been unsubscribed but not through the Subscription Manager.");
      }
      if (!this._subscriptions.has(id) && !this.tolerateUnlinkedSubscription) {
        throw new SubscriptionError(`Subscription with id "${id.toString()}" does not exists`);
      }
      yield sub.sendUnsubscribeRequest();
      this._subscriptions.delete(id);
      return id;
    });
  }
  /**
   * Will unsubscribe all subscriptions that fulfill the condition
   *
   * @param condition - A function that access and `id` and a `subscription` and return `true` or `false`
   * @returns An array of all the un-subscribed subscriptions
   */
  unsubscribe(condition) {
    return __awaiter3(this, void 0, void 0, function* () {
      const result = [];
      for (const [id, sub] of this.subscriptions.entries()) {
        if (!condition || typeof condition === "function" && condition({ id, sub })) {
          result.push(this.removeSubscription(sub));
        }
      }
      return Promise.all(result);
    });
  }
  /**
   * Clears all subscriptions
   */
  clear() {
    this._subscriptions.clear();
  }
  /**
   * Check whether the current provider supports subscriptions.
   *
   * @returns `true` or `false` depending on if the current provider supports subscriptions
   */
  supportsSubscriptions() {
    return isNullish2(this.requestManager.provider) ? false : isSupportSubscriptions(this.requestManager.provider);
  }
};

// node_modules/web3-core/lib/esm/web3_subscriptions.js
var __awaiter4 = function(thisArg, _arguments, P, generator) {
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
var Web3Subscription = class extends Web3EventEmitter {
  constructor(args, options) {
    var _a3;
    super();
    this.args = args;
    const { requestManager } = options;
    const { subscriptionManager } = options;
    if (requestManager) {
      this._subscriptionManager = new Web3SubscriptionManager(requestManager, {}, true);
    } else {
      this._subscriptionManager = subscriptionManager;
    }
    this._returnFormat = (_a3 = options === null || options === void 0 ? void 0 : options.returnFormat) !== null && _a3 !== void 0 ? _a3 : DEFAULT_RETURN_FORMAT;
  }
  get id() {
    return this._id;
  }
  get lastBlock() {
    return this._lastBlock;
  }
  subscribe() {
    return __awaiter4(this, void 0, void 0, function* () {
      return this._subscriptionManager.addSubscription(this);
    });
  }
  processSubscriptionData(data) {
    var _a3, _b;
    if (data === null || data === void 0 ? void 0 : data.data) {
      this._processSubscriptionResult((_b = (_a3 = data === null || data === void 0 ? void 0 : data.data) === null || _a3 === void 0 ? void 0 : _a3.result) !== null && _b !== void 0 ? _b : data === null || data === void 0 ? void 0 : data.data);
    } else if (data && json_rpc_exports.isResponseWithNotification(data)) {
      this._processSubscriptionResult(data === null || data === void 0 ? void 0 : data.params.result);
    }
  }
  sendSubscriptionRequest() {
    return __awaiter4(this, void 0, void 0, function* () {
      this._id = yield this._subscriptionManager.requestManager.send({
        method: "eth_subscribe",
        params: this._buildSubscriptionParams()
      });
      this.emit("connected", this._id);
      return this._id;
    });
  }
  get returnFormat() {
    return this._returnFormat;
  }
  get subscriptionManager() {
    return this._subscriptionManager;
  }
  resubscribe() {
    return __awaiter4(this, void 0, void 0, function* () {
      yield this.unsubscribe();
      yield this.subscribe();
    });
  }
  unsubscribe() {
    return __awaiter4(this, void 0, void 0, function* () {
      if (!this.id) {
        return;
      }
      yield this._subscriptionManager.removeSubscription(this);
    });
  }
  sendUnsubscribeRequest() {
    return __awaiter4(this, void 0, void 0, function* () {
      yield this._subscriptionManager.requestManager.send({
        method: "eth_unsubscribe",
        params: [this.id]
      });
      this._id = void 0;
    });
  }
  // eslint-disable-next-line class-methods-use-this
  formatSubscriptionResult(data) {
    return data;
  }
  _processSubscriptionResult(data) {
    this.emit("data", this.formatSubscriptionResult(data));
  }
  _processSubscriptionError(error) {
    this.emit("error", error);
  }
  // eslint-disable-next-line class-methods-use-this
  _buildSubscriptionParams() {
    throw new Error("Implement in the child class");
  }
};

// node_modules/web3-eth-accounts/lib/esm/index.js
var esm_exports7 = {};
__export(esm_exports7, {
  AccessListEIP2930Transaction: () => AccessListEIP2930Transaction,
  BaseTransaction: () => BaseTransaction,
  Capability: () => Capability,
  Chain: () => Chain,
  Common: () => Common,
  ConsensusAlgorithm: () => ConsensusAlgorithm,
  ConsensusType: () => ConsensusType,
  CustomChain: () => CustomChain,
  FeeMarketEIP1559Transaction: () => FeeMarketEIP1559Transaction,
  Hardfork: () => Hardfork,
  Transaction: () => Transaction,
  TransactionFactory: () => TransactionFactory,
  TypeOutput: () => TypeOutput,
  Wallet: () => Wallet,
  assertIsUint8Array: () => assertIsUint8Array,
  bigIntToHex: () => bigIntToHex,
  bigIntToUint8Array: () => bigIntToUint8Array,
  bigIntToUnpaddedUint8Array: () => bigIntToUnpaddedUint8Array,
  create: () => create,
  decrypt: () => decrypt2,
  ecrecover: () => ecrecover,
  encrypt: () => encrypt2,
  hashMessage: () => hashMessage,
  intToUint8Array: () => intToUint8Array,
  isAccessList: () => isAccessList,
  isAccessListUint8Array: () => isAccessListUint8Array,
  keyStoreSchema: () => keyStoreSchema,
  padToEven: () => padToEven,
  parseAndValidatePrivateKey: () => parseAndValidatePrivateKey,
  parseGethGenesis: () => parseGethGenesis,
  privateKeyToAccount: () => privateKeyToAccount,
  privateKeyToAddress: () => privateKeyToAddress,
  privateKeyToPublicKey: () => privateKeyToPublicKey,
  recover: () => recover,
  recoverTransaction: () => recoverTransaction,
  setLengthLeft: () => setLengthLeft,
  sign: () => sign,
  signMessageWithPrivateKey: () => signMessageWithPrivateKey,
  signRaw: () => signRaw,
  signTransaction: () => signTransaction,
  stripHexPrefix: () => stripHexPrefix,
  stripZeros: () => stripZeros,
  toType: () => toType,
  toUint8Array: () => toUint8Array,
  txUtils: () => utils_exports3,
  uint8ArrayToBigInt: () => uint8ArrayToBigInt,
  unpadUint8Array: () => unpadUint8Array,
  zeros: () => zeros
});

// node_modules/web3-eth-accounts/lib/esm/wallet.js
var __awaiter5 = function(thisArg, _arguments, P, generator) {
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
var Wallet = class _Wallet extends Web3BaseWallet {
  constructor() {
    super(...arguments);
    this._addressMap = /* @__PURE__ */ new Map();
    this._defaultKeyName = "web3js_wallet";
  }
  /**
   * Get the storage object of the browser
   *
   * @returns the storage
   */
  static getStorage() {
    let storage;
    try {
      storage = window.localStorage;
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return storage;
    } catch (e) {
      return e && // everything except Firefox
      (e.code === 22 || // Firefox
      e.code === 1014 || // test name field too, because code might not be present
      // everything except Firefox
      e.name === "QuotaExceededError" || // Firefox
      e.name === "NS_ERROR_DOM_QUOTA_REACHED") && // acknowledge QuotaExceededError only if there's something already stored
      !isNullish(storage) && storage.length !== 0 ? storage : void 0;
    }
  }
  /**
   * Generates one or more accounts in the wallet. If wallets already exist they will not be overridden.
   *
   * @param numberOfAccounts - Number of accounts to create. Leave empty to create an empty wallet.
   * @returns The wallet
   * ```ts
   * web3.eth.accounts.wallet.create(2)
   * > Wallet(2) [
   *   {
   *     address: '0xde38310a42B751AE57d30cFFF4a0A3c52A442fCE',
   *     privateKey: '0x6422c9d28efdcbee93c1d32a5fc6fd6fa081b985487885296cf8c9bbb5872600',
   *     signTransaction: [Function: signTransaction],
   *     sign: [Function: sign],
   *     encrypt: [Function: encrypt]
   *   },
   *   {
   *     address: '0x766BF755246d924B1d017Fdb5390f38a60166691',
   *     privateKey: '0x756530f13c0eb636ebdda655335f5dea9921e3362e2e588b0ad59e556f7751f0',
   *     signTransaction: [Function: signTransaction],
   *     sign: [Function: sign],
   *     encrypt: [Function: encrypt]
   *   },
   *   _accountProvider: {
   *     create: [Function: create],
   *     privateKeyToAccount: [Function: privateKeyToAccount],
   *     decrypt: [Function: decrypt]
   *   },
   *   _addressMap: Map(2) {
   *     '0xde38310a42b751ae57d30cfff4a0a3c52a442fce' => 0,
   *     '0x766bf755246d924b1d017fdb5390f38a60166691' => 1
   *   },
   *   _defaultKeyName: 'web3js_wallet'
   * ]
   *
   * ```
   */
  create(numberOfAccounts) {
    for (let i = 0; i < numberOfAccounts; i += 1) {
      this.add(this._accountProvider.create());
    }
    return this;
  }
  /**
   * Adds an account using a private key or account object to the wallet.
   *
   * @param account - A private key or account object
   * @returns The wallet
   *
   * ```ts
   * web3.eth.accounts.wallet.add('0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387');
   * > Wallet(1) [
   *   {
   *     address: '0x85D70633b90e03e0276B98880286D0D055685ed7',
   *     privateKey: '0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387',
   *     signTransaction: [Function: signTransaction],
   *     sign: [Function: sign],
   *     encrypt: [Function: encrypt]
   *   },
   *   _accountProvider: {
   *     create: [Function: create],
   *     privateKeyToAccount: [Function: privateKeyToAccount],
   *     decrypt: [Function: decrypt]
   *   },
   *   _addressMap: Map(1) { '0x85d70633b90e03e0276b98880286d0d055685ed7' => 0 },
   *   _defaultKeyName: 'web3js_wallet'
   * ]
   * ```
   */
  add(account) {
    var _a3;
    if (typeof account === "string") {
      return this.add(this._accountProvider.privateKeyToAccount(account));
    }
    let index = this.length;
    const existAccount = this.get(account.address);
    if (existAccount) {
      console.warn(`Account ${account.address.toLowerCase()} already exists.`);
      index = (_a3 = this._addressMap.get(account.address.toLowerCase())) !== null && _a3 !== void 0 ? _a3 : index;
    }
    this._addressMap.set(account.address.toLowerCase(), index);
    this[index] = account;
    return this;
  }
  /**
   * Get the account of the wallet with either the index or public address.
   *
   * @param addressOrIndex - A string of the address or number index within the wallet.
   * @returns The account object or undefined if the account doesn't exist
   */
  get(addressOrIndex) {
    if (typeof addressOrIndex === "string") {
      const index = this._addressMap.get(addressOrIndex.toLowerCase());
      if (!isNullish(index)) {
        return this[index];
      }
      return void 0;
    }
    return this[addressOrIndex];
  }
  /**
   * Removes an account from the wallet.
   *
   * @param addressOrIndex - The account address, or index in the wallet.
   * @returns true if the wallet was removed. false if it couldn't be found.
   * ```ts
   * web3.eth.accounts.wallet.add('0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387');
   *
   * web3.eth.accounts.wallet.remove('0x85D70633b90e03e0276B98880286D0D055685ed7');
   * > true
   * web3.eth.accounts.wallet
   * > Wallet(0) [
   * _accountProvider: {
   *   create: [Function: create],
   *   privateKeyToAccount: [Function: privateKeyToAccount],
   *   decrypt: [Function: decrypt]
   * },
   * _addressMap: Map(0) {},
   * _defaultKeyName: 'web3js_wallet'
   * ]
   * ```
   */
  remove(addressOrIndex) {
    if (typeof addressOrIndex === "string") {
      const index = this._addressMap.get(addressOrIndex.toLowerCase());
      if (isNullish(index)) {
        return false;
      }
      this._addressMap.delete(addressOrIndex.toLowerCase());
      this.splice(index, 1);
      return true;
    }
    if (this[addressOrIndex]) {
      this.splice(addressOrIndex, 1);
      return true;
    }
    return false;
  }
  /**
   * Securely empties the wallet and removes all its accounts.
   * Use this with *caution as it will remove all accounts stored in local wallet.
   *
   * @returns The wallet object
   * ```ts
   *
   * web3.eth.accounts.wallet.clear();
   * > Wallet(0) [
   * _accountProvider: {
   *   create: [Function: create],
   *   privateKeyToAccount: [Function: privateKeyToAccount],
   *   decrypt: [Function: decrypt]
   * },
   * _addressMap: Map(0) {},
   * _defaultKeyName: 'web3js_wallet'
   * ]
   * ```
   */
  clear() {
    this._addressMap.clear();
    this.length = 0;
    return this;
  }
  /**
   * Encrypts all wallet accounts to an array of encrypted keystore v3 objects.
   *
   * @param password - The password which will be used for encryption
   * @param options - encryption options
   * @returns An array of the encrypted keystore v3.
   *
   * ```ts
   * web3.eth.accounts.wallet.create(1)
   * web3.eth.accounts.wallet.encrypt("abc").then(console.log);
   * > [
   * '{"version":3,"id":"fa46e213-a7c3-4844-b903-dd14d39cc7db",
   * "address":"fa3e41a401609103c241431cbdee8623ae2a321a","crypto":
   * {"ciphertext":"8d179a911d6146ad2924e86bf493ed89b8ff3596ffec0816e761c542016ab13c",
   * "cipherparams":{"iv":"acc888c6cf4a19b86846cef0185a7164"},"cipher":"aes-128-ctr",
   * "kdf":"scrypt","kdfparams":{"n":8192,"r":8,"p":1,"dklen":32,"salt":"6a743c9b367d15f4758e4f3f3378ff0fd443708d1c64854e07588ea5331823ae"},
   * "mac":"410544c8307e3691fda305eb3722d82c3431f212a87daa119a21587d96698b57"}}'
   * ]
   * ```
   */
  encrypt(password, options) {
    return __awaiter5(this, void 0, void 0, function* () {
      return Promise.all(this.map((account) => __awaiter5(this, void 0, void 0, function* () {
        return account.encrypt(password, options);
      })));
    });
  }
  /**
   * Decrypts keystore v3 objects.
   *
   * @param encryptedWallets - An array of encrypted keystore v3 objects to decrypt
   * @param password - The password to encrypt with
   * @param options - decrypt options for the wallets
   * @returns The decrypted wallet object
   *
   * ```ts
   * web3.eth.accounts.wallet.decrypt([
   * { version: 3,
   * id: '83191a81-aaca-451f-b63d-0c5f3b849289',
   * address: '06f702337909c06c82b09b7a22f0a2f0855d1f68',
   * crypto:
   * { ciphertext: '7d34deae112841fba86e3e6cf08f5398dda323a8e4d29332621534e2c4069e8d',
   *   cipherparams: { iv: '497f4d26997a84d570778eae874b2333' },
   *   cipher: 'aes-128-ctr',
   *   kdf: 'scrypt',
   *   kdfparams:
   *    { dklen: 32,
   *      salt: '208dd732a27aa4803bb760228dff18515d5313fd085bbce60594a3919ae2d88d',
   *      n: 262144,
   *      r: 8,
   *      p: 1 },
   *   mac: '0062a853de302513c57bfe3108ab493733034bf3cb313326f42cf26ea2619cf9' } },
   * { version: 3,
   * id: '7d6b91fa-3611-407b-b16b-396efb28f97e',
   * address: 'b5d89661b59a9af0b34f58d19138baa2de48baaf',
   * crypto:
   * { ciphertext: 'cb9712d1982ff89f571fa5dbef447f14b7e5f142232bd2a913aac833730eeb43',
   *   cipherparams: { iv: '8cccb91cb84e435437f7282ec2ffd2db' },
   *   cipher: 'aes-128-ctr',
   *   kdf: 'scrypt',
   *   kdfparams:
   *    { dklen: 32,
   *      salt: '08ba6736363c5586434cd5b895e6fe41ea7db4785bd9b901dedce77a1514e8b8',
   *      n: 262144,
   *      r: 8,
   *      p: 1 },
   *   mac: 'd2eb068b37e2df55f56fa97a2bf4f55e072bef0dd703bfd917717d9dc54510f0' } }
   * ], 'test').then(console.log)
   * > Wallet {
   *   _accountProvider: {
   *     create: [Function: create],
   *     privateKeyToAccount: [Function: privateKeyToAccount],
   *     decrypt: [Function: decrypt]
   *   },
   *   _defaultKeyName: 'web3js_wallet',
   *   _accounts: {
   *     '0x85d70633b90e03e0276b98880286d0d055685ed7': {
   *       address: '0x85D70633b90e03e0276B98880286D0D055685ed7',
   *       privateKey: '0xbce9b59981303e76c4878b1a6d7b088ec6b9dd5c966b7d5f54d7a749ff683387',
   *       signTransaction: [Function: signTransaction],
   *       sign: [Function: sign],
   *       encrypt: [Function: encrypt]
   *     },
   *     '0x06f702337909c06c82b09b7a22f0a2f0855d1f68': {
   *       address: '0x06F702337909C06C82B09B7A22F0a2f0855d1F68',
   *       privateKey: '87a51da18900da7398b3bab03996833138f269f8f66dd1237b98df6b9ce14573',
   *       signTransaction: [Function: signTransaction],
   *       sign: [Function: sign],
   *       encrypt: [Function: encrypt]
   *     },
   *     '0xb5d89661b59a9af0b34f58d19138baa2de48baaf': {
   *       address: '0xB5d89661B59a9aF0b34f58D19138bAa2de48BAaf',
   *       privateKey: '7ee61c5282979aae9dd795bb6a54e8bdc2bfe009acb64eb9a67322eec3b3da6e',
   *       signTransaction: [Function: signTransaction],
   *       sign: [Function: sign],
   *       encrypt: [Function: encrypt]
   *     }
   *   }
   * }
   * ```
   */
  decrypt(encryptedWallets, password, options) {
    return __awaiter5(this, void 0, void 0, function* () {
      const results = yield Promise.all(encryptedWallets.map((wallet) => __awaiter5(this, void 0, void 0, function* () {
        return this._accountProvider.decrypt(wallet, password, options);
      })));
      for (const res of results) {
        this.add(res);
      }
      return this;
    });
  }
  /**
   * Stores the wallet encrypted and as string in local storage.
   * **__NOTE:__** Browser only
   *
   * @param password - The password to encrypt the wallet
   * @param keyName - (optional) The key used for the local storage position, defaults to `"web3js_wallet"`.
   * @returns Will return boolean value true if saved properly
   * ```ts
   * web3.eth.accounts.wallet.save('test#!$');
   * >true
   * ```
   */
  save(password, keyName) {
    return __awaiter5(this, void 0, void 0, function* () {
      const storage = _Wallet.getStorage();
      if (!storage) {
        throw new Error("Local storage not available.");
      }
      storage.setItem(keyName !== null && keyName !== void 0 ? keyName : this._defaultKeyName, JSON.stringify(yield this.encrypt(password)));
      return true;
    });
  }
  /**
   * Loads a wallet from local storage and decrypts it.
   * **__NOTE:__** Browser only
   *
   * @param password - The password to decrypt the wallet.
   * @param keyName - (optional)The key used for local storage position, defaults to `web3js_wallet"`
   * @returns Returns the wallet object
   *
   * ```ts
   * web3.eth.accounts.wallet.save('test#!$');
   * > true
   * web3.eth.accounts.wallet.load('test#!$');
   * { defaultKeyName: "web3js_wallet",
   *   length: 0,
   *   _accounts: Accounts {_requestManager: RequestManager, givenProvider: Proxy, providers: {…}, _provider: WebsocketProvider, …},
   *   [[Prototype]]: Object
   * }
   * ```
   */
  load(password, keyName) {
    return __awaiter5(this, void 0, void 0, function* () {
      const storage = _Wallet.getStorage();
      if (!storage) {
        throw new Error("Local storage not available.");
      }
      const keystore = storage.getItem(keyName !== null && keyName !== void 0 ? keyName : this._defaultKeyName);
      if (keystore) {
        yield this.decrypt(JSON.parse(keystore) || [], password);
      }
      return this;
    });
  }
};

// node_modules/ethereum-cryptography/esm/aes.js
var crypto2 = { web: crypto };
function validateOpt(key, iv, mode) {
  if (!mode.startsWith("aes-")) {
    throw new Error(`AES submodule doesn't support mode ${mode}`);
  }
  if (iv.length !== 16) {
    throw new Error("AES: wrong IV length");
  }
  if (mode.startsWith("aes-128") && key.length !== 16 || mode.startsWith("aes-256") && key.length !== 32) {
    throw new Error("AES: wrong key length");
  }
}
function getBrowserKey(mode, key, iv) {
  return __async(this, null, function* () {
    if (!crypto2.web) {
      throw new Error("Browser crypto not available.");
    }
    let keyMode;
    if (["aes-128-cbc", "aes-256-cbc"].includes(mode)) {
      keyMode = "cbc";
    }
    if (["aes-128-ctr", "aes-256-ctr"].includes(mode)) {
      keyMode = "ctr";
    }
    if (!keyMode) {
      throw new Error("AES: unsupported mode");
    }
    const wKey = yield crypto2.web.subtle.importKey("raw", key, { name: `AES-${keyMode.toUpperCase()}`, length: key.length * 8 }, true, ["encrypt", "decrypt"]);
    return [wKey, { name: `aes-${keyMode}`, iv, counter: iv, length: 128 }];
  });
}
function encrypt(msg, key, iv, mode = "aes-128-ctr", pkcs7PaddingEnabled = true) {
  return __async(this, null, function* () {
    validateOpt(key, iv, mode);
    if (crypto2.web) {
      const [wKey, wOpt] = yield getBrowserKey(mode, key, iv);
      const cipher = yield crypto2.web.subtle.encrypt(wOpt, wKey, msg);
      let res = new Uint8Array(cipher);
      if (!pkcs7PaddingEnabled && wOpt.name === "aes-cbc" && !(msg.length % 16)) {
        res = res.slice(0, -16);
      }
      return res;
    } else if (crypto2.node) {
      const cipher = crypto2.node.createCipheriv(mode, key, iv);
      cipher.setAutoPadding(pkcs7PaddingEnabled);
      return concatBytes(cipher.update(msg), cipher.final());
    } else {
      throw new Error("The environment doesn't have AES module");
    }
  });
}
function getPadding(cypherText, key, iv, mode) {
  return __async(this, null, function* () {
    const lastBlock = cypherText.slice(-16);
    for (let i = 0; i < 16; i++) {
      lastBlock[i] ^= iv[i] ^ 16;
    }
    const res = yield encrypt(lastBlock, key, iv, mode);
    return res.slice(0, 16);
  });
}
function decrypt(cypherText, key, iv, mode = "aes-128-ctr", pkcs7PaddingEnabled = true) {
  return __async(this, null, function* () {
    validateOpt(key, iv, mode);
    if (crypto2.web) {
      const [wKey, wOpt] = yield getBrowserKey(mode, key, iv);
      if (!pkcs7PaddingEnabled && wOpt.name === "aes-cbc") {
        const padding = yield getPadding(cypherText, key, iv, mode);
        cypherText = concatBytes(cypherText, padding);
      }
      const msg = yield crypto2.web.subtle.decrypt(wOpt, wKey, cypherText);
      const msgBytes = new Uint8Array(msg);
      if (wOpt.name === "aes-cbc") {
        const encrypted = yield encrypt(msgBytes, key, iv, mode);
        if (!equalsBytes(encrypted, cypherText)) {
          throw new Error("AES: wrong padding");
        }
      }
      return msgBytes;
    } else if (crypto2.node) {
      const decipher = crypto2.node.createDecipheriv(mode, key, iv);
      decipher.setAutoPadding(pkcs7PaddingEnabled);
      return concatBytes(decipher.update(cypherText), decipher.final());
    } else {
      throw new Error("The environment doesn't have AES module");
    }
  });
}

// node_modules/ethereum-cryptography/node_modules/@noble/hashes/esm/hmac.js
var HMAC = class extends Hash {
  constructor(hash2, _key) {
    super();
    this.finished = false;
    this.destroyed = false;
    hash(hash2);
    const key = toBytes(_key);
    this.iHash = hash2.create();
    if (typeof this.iHash.update !== "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen;
    this.outputLen = this.iHash.outputLen;
    const blockLen = this.blockLen;
    const pad = new Uint8Array(blockLen);
    pad.set(key.length > blockLen ? hash2.create().update(key).digest() : key);
    for (let i = 0; i < pad.length; i++)
      pad[i] ^= 54;
    this.iHash.update(pad);
    this.oHash = hash2.create();
    for (let i = 0; i < pad.length; i++)
      pad[i] ^= 54 ^ 92;
    this.oHash.update(pad);
    pad.fill(0);
  }
  update(buf) {
    exists(this);
    this.iHash.update(buf);
    return this;
  }
  digestInto(out) {
    exists(this);
    bytes(out, this.outputLen);
    this.finished = true;
    this.iHash.digestInto(out);
    this.oHash.update(out);
    this.oHash.digestInto(out);
    this.destroy();
  }
  digest() {
    const out = new Uint8Array(this.oHash.outputLen);
    this.digestInto(out);
    return out;
  }
  _cloneInto(to) {
    to || (to = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
    to = to;
    to.finished = finished;
    to.destroyed = destroyed;
    to.blockLen = blockLen;
    to.outputLen = outputLen;
    to.oHash = oHash._cloneInto(to.oHash);
    to.iHash = iHash._cloneInto(to.iHash);
    return to;
  }
  destroy() {
    this.destroyed = true;
    this.oHash.destroy();
    this.iHash.destroy();
  }
};
var hmac = (hash2, key, message) => new HMAC(hash2, key).update(message).digest();
hmac.create = (hash2, key) => new HMAC(hash2, key);

// node_modules/ethereum-cryptography/node_modules/@noble/hashes/esm/pbkdf2.js
function pbkdf2Init(hash2, _password, _salt, _opts) {
  hash(hash2);
  const opts = checkOpts({ dkLen: 32, asyncTick: 10 }, _opts);
  const { c, dkLen, asyncTick } = opts;
  number(c);
  number(dkLen);
  number(asyncTick);
  if (c < 1)
    throw new Error("PBKDF2: iterations (c) should be >= 1");
  const password = toBytes(_password);
  const salt = toBytes(_salt);
  const DK = new Uint8Array(dkLen);
  const PRF = hmac.create(hash2, password);
  const PRFSalt = PRF._cloneInto().update(salt);
  return { c, dkLen, asyncTick, DK, PRF, PRFSalt };
}
function pbkdf2Output(PRF, PRFSalt, DK, prfW, u) {
  PRF.destroy();
  PRFSalt.destroy();
  if (prfW)
    prfW.destroy();
  u.fill(0);
  return DK;
}
function pbkdf2(hash2, password, salt, opts) {
  const { c, dkLen, DK, PRF, PRFSalt } = pbkdf2Init(hash2, password, salt, opts);
  let prfW;
  const arr = new Uint8Array(4);
  const view = createView(arr);
  const u = new Uint8Array(PRF.outputLen);
  for (let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen) {
    const Ti = DK.subarray(pos, pos + PRF.outputLen);
    view.setInt32(0, ti, false);
    (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
    Ti.set(u.subarray(0, Ti.length));
    for (let ui = 1; ui < c; ui++) {
      PRF._cloneInto(prfW).update(u).digestInto(u);
      for (let i = 0; i < Ti.length; i++)
        Ti[i] ^= u[i];
    }
  }
  return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
}

// node_modules/ethereum-cryptography/node_modules/@noble/hashes/esm/_md.js
function setBigUint64(view, byteOffset, value, isLE2) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE2);
  const _32n = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n & _u32_max);
  const wl = Number(value & _u32_max);
  const h = isLE2 ? 4 : 0;
  const l = isLE2 ? 0 : 4;
  view.setUint32(byteOffset + h, wh, isLE2);
  view.setUint32(byteOffset + l, wl, isLE2);
}
var Chi = (a, b, c) => a & b ^ ~a & c;
var Maj = (a, b, c) => a & b ^ a & c ^ b & c;
var HashMD = class extends Hash {
  constructor(blockLen, outputLen, padOffset, isLE2) {
    super();
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE2;
    this.finished = false;
    this.length = 0;
    this.pos = 0;
    this.destroyed = false;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView(this.buffer);
  }
  update(data) {
    exists(this);
    const { view, buffer, blockLen } = this;
    data = toBytes(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    exists(this);
    output(out, this);
    this.finished = true;
    const { buffer, view, blockLen, isLE: isLE2 } = this;
    let { pos } = this;
    buffer[pos++] = 128;
    this.buffer.subarray(pos).fill(0);
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i = pos; i < blockLen; i++)
      buffer[i] = 0;
    setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
    this.process(view, 0);
    const oview = createView(out);
    const len = this.outputLen;
    if (len % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const outLen = len / 4;
    const state = this.get();
    if (outLen > state.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let i = 0; i < outLen; i++)
      oview.setUint32(4 * i, state[i], isLE2);
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to) {
    to || (to = new this.constructor());
    to.set(...this.get());
    const { blockLen, buffer, length, finished, destroyed, pos } = this;
    to.length = length;
    to.pos = pos;
    to.finished = finished;
    to.destroyed = destroyed;
    if (length % blockLen)
      to.buffer.set(buffer);
    return to;
  }
};

// node_modules/ethereum-cryptography/node_modules/@noble/hashes/esm/sha256.js
var SHA256_K = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
var SHA256_IV = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
var SHA256_W = new Uint32Array(64);
var SHA256 = class extends HashMD {
  constructor() {
    super(64, 32, 8, false);
    this.A = SHA256_IV[0] | 0;
    this.B = SHA256_IV[1] | 0;
    this.C = SHA256_IV[2] | 0;
    this.D = SHA256_IV[3] | 0;
    this.E = SHA256_IV[4] | 0;
    this.F = SHA256_IV[5] | 0;
    this.G = SHA256_IV[6] | 0;
    this.H = SHA256_IV[7] | 0;
  }
  get() {
    const { A, B, C, D, E, F, G, H } = this;
    return [A, B, C, D, E, F, G, H];
  }
  // prettier-ignore
  set(A, B, C, D, E, F, G, H) {
    this.A = A | 0;
    this.B = B | 0;
    this.C = C | 0;
    this.D = D | 0;
    this.E = E | 0;
    this.F = F | 0;
    this.G = G | 0;
    this.H = H | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      SHA256_W[i] = view.getUint32(offset, false);
    for (let i = 16; i < 64; i++) {
      const W15 = SHA256_W[i - 15];
      const W2 = SHA256_W[i - 2];
      const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
      const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
      SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
    }
    let { A, B, C, D, E, F, G, H } = this;
    for (let i = 0; i < 64; i++) {
      const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
      const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
      const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
      const T2 = sigma0 + Maj(A, B, C) | 0;
      H = G;
      G = F;
      F = E;
      E = D + T1 | 0;
      D = C;
      C = B;
      B = A;
      A = T1 + T2 | 0;
    }
    A = A + this.A | 0;
    B = B + this.B | 0;
    C = C + this.C | 0;
    D = D + this.D | 0;
    E = E + this.E | 0;
    F = F + this.F | 0;
    G = G + this.G | 0;
    H = H + this.H | 0;
    this.set(A, B, C, D, E, F, G, H);
  }
  roundClean() {
    SHA256_W.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    this.buffer.fill(0);
  }
};
var SHA224 = class extends SHA256 {
  constructor() {
    super();
    this.A = 3238371032 | 0;
    this.B = 914150663 | 0;
    this.C = 812702999 | 0;
    this.D = 4144912697 | 0;
    this.E = 4290775857 | 0;
    this.F = 1750603025 | 0;
    this.G = 1694076839 | 0;
    this.H = 3204075428 | 0;
    this.outputLen = 28;
  }
};
var sha256 = wrapConstructor(() => new SHA256());
var sha224 = wrapConstructor(() => new SHA224());

// node_modules/ethereum-cryptography/node_modules/@noble/hashes/esm/sha512.js
var [SHA512_Kh, SHA512_Kl] = (() => u64_default.split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((n) => BigInt(n))))();
var SHA512_W_H = new Uint32Array(80);
var SHA512_W_L = new Uint32Array(80);
var SHA512 = class extends HashMD {
  constructor() {
    super(128, 64, 16, false);
    this.Ah = 1779033703 | 0;
    this.Al = 4089235720 | 0;
    this.Bh = 3144134277 | 0;
    this.Bl = 2227873595 | 0;
    this.Ch = 1013904242 | 0;
    this.Cl = 4271175723 | 0;
    this.Dh = 2773480762 | 0;
    this.Dl = 1595750129 | 0;
    this.Eh = 1359893119 | 0;
    this.El = 2917565137 | 0;
    this.Fh = 2600822924 | 0;
    this.Fl = 725511199 | 0;
    this.Gh = 528734635 | 0;
    this.Gl = 4215389547 | 0;
    this.Hh = 1541459225 | 0;
    this.Hl = 327033209 | 0;
  }
  // prettier-ignore
  get() {
    const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
  }
  // prettier-ignore
  set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
    this.Ah = Ah | 0;
    this.Al = Al | 0;
    this.Bh = Bh | 0;
    this.Bl = Bl | 0;
    this.Ch = Ch | 0;
    this.Cl = Cl | 0;
    this.Dh = Dh | 0;
    this.Dl = Dl | 0;
    this.Eh = Eh | 0;
    this.El = El | 0;
    this.Fh = Fh | 0;
    this.Fl = Fl | 0;
    this.Gh = Gh | 0;
    this.Gl = Gl | 0;
    this.Hh = Hh | 0;
    this.Hl = Hl | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4) {
      SHA512_W_H[i] = view.getUint32(offset);
      SHA512_W_L[i] = view.getUint32(offset += 4);
    }
    for (let i = 16; i < 80; i++) {
      const W15h = SHA512_W_H[i - 15] | 0;
      const W15l = SHA512_W_L[i - 15] | 0;
      const s0h = u64_default.rotrSH(W15h, W15l, 1) ^ u64_default.rotrSH(W15h, W15l, 8) ^ u64_default.shrSH(W15h, W15l, 7);
      const s0l = u64_default.rotrSL(W15h, W15l, 1) ^ u64_default.rotrSL(W15h, W15l, 8) ^ u64_default.shrSL(W15h, W15l, 7);
      const W2h = SHA512_W_H[i - 2] | 0;
      const W2l = SHA512_W_L[i - 2] | 0;
      const s1h = u64_default.rotrSH(W2h, W2l, 19) ^ u64_default.rotrBH(W2h, W2l, 61) ^ u64_default.shrSH(W2h, W2l, 6);
      const s1l = u64_default.rotrSL(W2h, W2l, 19) ^ u64_default.rotrBL(W2h, W2l, 61) ^ u64_default.shrSL(W2h, W2l, 6);
      const SUMl = u64_default.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
      const SUMh = u64_default.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
      SHA512_W_H[i] = SUMh | 0;
      SHA512_W_L[i] = SUMl | 0;
    }
    let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    for (let i = 0; i < 80; i++) {
      const sigma1h = u64_default.rotrSH(Eh, El, 14) ^ u64_default.rotrSH(Eh, El, 18) ^ u64_default.rotrBH(Eh, El, 41);
      const sigma1l = u64_default.rotrSL(Eh, El, 14) ^ u64_default.rotrSL(Eh, El, 18) ^ u64_default.rotrBL(Eh, El, 41);
      const CHIh = Eh & Fh ^ ~Eh & Gh;
      const CHIl = El & Fl ^ ~El & Gl;
      const T1ll = u64_default.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
      const T1h = u64_default.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
      const T1l = T1ll | 0;
      const sigma0h = u64_default.rotrSH(Ah, Al, 28) ^ u64_default.rotrBH(Ah, Al, 34) ^ u64_default.rotrBH(Ah, Al, 39);
      const sigma0l = u64_default.rotrSL(Ah, Al, 28) ^ u64_default.rotrBL(Ah, Al, 34) ^ u64_default.rotrBL(Ah, Al, 39);
      const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
      const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
      Hh = Gh | 0;
      Hl = Gl | 0;
      Gh = Fh | 0;
      Gl = Fl | 0;
      Fh = Eh | 0;
      Fl = El | 0;
      ({ h: Eh, l: El } = u64_default.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
      Dh = Ch | 0;
      Dl = Cl | 0;
      Ch = Bh | 0;
      Cl = Bl | 0;
      Bh = Ah | 0;
      Bl = Al | 0;
      const All = u64_default.add3L(T1l, sigma0l, MAJl);
      Ah = u64_default.add3H(All, T1h, sigma0h, MAJh);
      Al = All | 0;
    }
    ({ h: Ah, l: Al } = u64_default.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
    ({ h: Bh, l: Bl } = u64_default.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
    ({ h: Ch, l: Cl } = u64_default.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
    ({ h: Dh, l: Dl } = u64_default.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
    ({ h: Eh, l: El } = u64_default.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
    ({ h: Fh, l: Fl } = u64_default.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
    ({ h: Gh, l: Gl } = u64_default.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
    ({ h: Hh, l: Hl } = u64_default.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
    this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
  }
  roundClean() {
    SHA512_W_H.fill(0);
    SHA512_W_L.fill(0);
  }
  destroy() {
    this.buffer.fill(0);
    this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
var SHA512_224 = class extends SHA512 {
  constructor() {
    super();
    this.Ah = 2352822216 | 0;
    this.Al = 424955298 | 0;
    this.Bh = 1944164710 | 0;
    this.Bl = 2312950998 | 0;
    this.Ch = 502970286 | 0;
    this.Cl = 855612546 | 0;
    this.Dh = 1738396948 | 0;
    this.Dl = 1479516111 | 0;
    this.Eh = 258812777 | 0;
    this.El = 2077511080 | 0;
    this.Fh = 2011393907 | 0;
    this.Fl = 79989058 | 0;
    this.Gh = 1067287976 | 0;
    this.Gl = 1780299464 | 0;
    this.Hh = 286451373 | 0;
    this.Hl = 2446758561 | 0;
    this.outputLen = 28;
  }
};
var SHA512_256 = class extends SHA512 {
  constructor() {
    super();
    this.Ah = 573645204 | 0;
    this.Al = 4230739756 | 0;
    this.Bh = 2673172387 | 0;
    this.Bl = 3360449730 | 0;
    this.Ch = 596883563 | 0;
    this.Cl = 1867755857 | 0;
    this.Dh = 2520282905 | 0;
    this.Dl = 1497426621 | 0;
    this.Eh = 2519219938 | 0;
    this.El = 2827943907 | 0;
    this.Fh = 3193839141 | 0;
    this.Fl = 1401305490 | 0;
    this.Gh = 721525244 | 0;
    this.Gl = 746961066 | 0;
    this.Hh = 246885852 | 0;
    this.Hl = 2177182882 | 0;
    this.outputLen = 32;
  }
};
var SHA384 = class extends SHA512 {
  constructor() {
    super();
    this.Ah = 3418070365 | 0;
    this.Al = 3238371032 | 0;
    this.Bh = 1654270250 | 0;
    this.Bl = 914150663 | 0;
    this.Ch = 2438529370 | 0;
    this.Cl = 812702999 | 0;
    this.Dh = 355462360 | 0;
    this.Dl = 4144912697 | 0;
    this.Eh = 1731405415 | 0;
    this.El = 4290775857 | 0;
    this.Fh = 2394180231 | 0;
    this.Fl = 1750603025 | 0;
    this.Gh = 3675008525 | 0;
    this.Gl = 1694076839 | 0;
    this.Hh = 1203062813 | 0;
    this.Hl = 3204075428 | 0;
    this.outputLen = 48;
  }
};
var sha512 = wrapConstructor(() => new SHA512());
var sha512_224 = wrapConstructor(() => new SHA512_224());
var sha512_256 = wrapConstructor(() => new SHA512_256());
var sha384 = wrapConstructor(() => new SHA384());

// node_modules/ethereum-cryptography/esm/pbkdf2.js
function pbkdf2Sync(password, salt, iterations, keylen, digest) {
  if (!["sha256", "sha512"].includes(digest)) {
    throw new Error("Only sha256 and sha512 are supported");
  }
  assertBytes(password);
  assertBytes(salt);
  return pbkdf2(digest === "sha256" ? sha256 : sha512, password, salt, {
    c: iterations,
    dkLen: keylen
  });
}

// node_modules/ethereum-cryptography/node_modules/@noble/hashes/esm/scrypt.js
function XorAndSalsa(prev, pi, input, ii, out, oi) {
  let y00 = prev[pi++] ^ input[ii++], y01 = prev[pi++] ^ input[ii++];
  let y02 = prev[pi++] ^ input[ii++], y03 = prev[pi++] ^ input[ii++];
  let y04 = prev[pi++] ^ input[ii++], y05 = prev[pi++] ^ input[ii++];
  let y06 = prev[pi++] ^ input[ii++], y07 = prev[pi++] ^ input[ii++];
  let y08 = prev[pi++] ^ input[ii++], y09 = prev[pi++] ^ input[ii++];
  let y10 = prev[pi++] ^ input[ii++], y11 = prev[pi++] ^ input[ii++];
  let y12 = prev[pi++] ^ input[ii++], y13 = prev[pi++] ^ input[ii++];
  let y14 = prev[pi++] ^ input[ii++], y15 = prev[pi++] ^ input[ii++];
  let x00 = y00, x01 = y01, x02 = y02, x03 = y03, x04 = y04, x05 = y05, x06 = y06, x07 = y07, x08 = y08, x09 = y09, x10 = y10, x11 = y11, x12 = y12, x13 = y13, x14 = y14, x15 = y15;
  for (let i = 0; i < 8; i += 2) {
    x04 ^= rotl(x00 + x12 | 0, 7);
    x08 ^= rotl(x04 + x00 | 0, 9);
    x12 ^= rotl(x08 + x04 | 0, 13);
    x00 ^= rotl(x12 + x08 | 0, 18);
    x09 ^= rotl(x05 + x01 | 0, 7);
    x13 ^= rotl(x09 + x05 | 0, 9);
    x01 ^= rotl(x13 + x09 | 0, 13);
    x05 ^= rotl(x01 + x13 | 0, 18);
    x14 ^= rotl(x10 + x06 | 0, 7);
    x02 ^= rotl(x14 + x10 | 0, 9);
    x06 ^= rotl(x02 + x14 | 0, 13);
    x10 ^= rotl(x06 + x02 | 0, 18);
    x03 ^= rotl(x15 + x11 | 0, 7);
    x07 ^= rotl(x03 + x15 | 0, 9);
    x11 ^= rotl(x07 + x03 | 0, 13);
    x15 ^= rotl(x11 + x07 | 0, 18);
    x01 ^= rotl(x00 + x03 | 0, 7);
    x02 ^= rotl(x01 + x00 | 0, 9);
    x03 ^= rotl(x02 + x01 | 0, 13);
    x00 ^= rotl(x03 + x02 | 0, 18);
    x06 ^= rotl(x05 + x04 | 0, 7);
    x07 ^= rotl(x06 + x05 | 0, 9);
    x04 ^= rotl(x07 + x06 | 0, 13);
    x05 ^= rotl(x04 + x07 | 0, 18);
    x11 ^= rotl(x10 + x09 | 0, 7);
    x08 ^= rotl(x11 + x10 | 0, 9);
    x09 ^= rotl(x08 + x11 | 0, 13);
    x10 ^= rotl(x09 + x08 | 0, 18);
    x12 ^= rotl(x15 + x14 | 0, 7);
    x13 ^= rotl(x12 + x15 | 0, 9);
    x14 ^= rotl(x13 + x12 | 0, 13);
    x15 ^= rotl(x14 + x13 | 0, 18);
  }
  out[oi++] = y00 + x00 | 0;
  out[oi++] = y01 + x01 | 0;
  out[oi++] = y02 + x02 | 0;
  out[oi++] = y03 + x03 | 0;
  out[oi++] = y04 + x04 | 0;
  out[oi++] = y05 + x05 | 0;
  out[oi++] = y06 + x06 | 0;
  out[oi++] = y07 + x07 | 0;
  out[oi++] = y08 + x08 | 0;
  out[oi++] = y09 + x09 | 0;
  out[oi++] = y10 + x10 | 0;
  out[oi++] = y11 + x11 | 0;
  out[oi++] = y12 + x12 | 0;
  out[oi++] = y13 + x13 | 0;
  out[oi++] = y14 + x14 | 0;
  out[oi++] = y15 + x15 | 0;
}
function BlockMix(input, ii, out, oi, r) {
  let head = oi + 0;
  let tail = oi + 16 * r;
  for (let i = 0; i < 16; i++)
    out[tail + i] = input[ii + (2 * r - 1) * 16 + i];
  for (let i = 0; i < r; i++, head += 16, ii += 16) {
    XorAndSalsa(out, tail, input, ii, out, head);
    if (i > 0)
      tail += 16;
    XorAndSalsa(out, head, input, ii += 16, out, tail);
  }
}
function scryptInit(password, salt, _opts) {
  const opts = checkOpts({
    dkLen: 32,
    asyncTick: 10,
    maxmem: 1024 ** 3 + 1024
  }, _opts);
  const { N, r, p, dkLen, asyncTick, maxmem, onProgress } = opts;
  number(N);
  number(r);
  number(p);
  number(dkLen);
  number(asyncTick);
  number(maxmem);
  if (onProgress !== void 0 && typeof onProgress !== "function")
    throw new Error("progressCb should be function");
  const blockSize = 128 * r;
  const blockSize32 = blockSize / 4;
  if (N <= 1 || (N & N - 1) !== 0 || N >= 2 ** (blockSize / 8) || N > 2 ** 32) {
    throw new Error("Scrypt: N must be larger than 1, a power of 2, less than 2^(128 * r / 8) and less than 2^32");
  }
  if (p < 0 || p > (2 ** 32 - 1) * 32 / blockSize) {
    throw new Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
  }
  if (dkLen < 0 || dkLen > (2 ** 32 - 1) * 32) {
    throw new Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
  }
  const memUsed = blockSize * (N + p);
  if (memUsed > maxmem) {
    throw new Error(`Scrypt: parameters too large, ${memUsed} (128 * r * (N + p)) > ${maxmem} (maxmem)`);
  }
  const B = pbkdf2(sha256, password, salt, { c: 1, dkLen: blockSize * p });
  const B32 = u32(B);
  const V = u32(new Uint8Array(blockSize * N));
  const tmp = u32(new Uint8Array(blockSize));
  let blockMixCb = () => {
  };
  if (onProgress) {
    const totalBlockMix = 2 * N * p;
    const callbackPer = Math.max(Math.floor(totalBlockMix / 1e4), 1);
    let blockMixCnt = 0;
    blockMixCb = () => {
      blockMixCnt++;
      if (onProgress && (!(blockMixCnt % callbackPer) || blockMixCnt === totalBlockMix))
        onProgress(blockMixCnt / totalBlockMix);
    };
  }
  return { N, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb, asyncTick };
}
function scryptOutput(password, dkLen, B, V, tmp) {
  const res = pbkdf2(sha256, password, B, { c: 1, dkLen });
  B.fill(0);
  V.fill(0);
  tmp.fill(0);
  return res;
}
function scrypt(password, salt, opts) {
  const { N, r, p, dkLen, blockSize32, V, B32, B, tmp, blockMixCb } = scryptInit(password, salt, opts);
  if (!isLE)
    byteSwap32(B32);
  for (let pi = 0; pi < p; pi++) {
    const Pi = blockSize32 * pi;
    for (let i = 0; i < blockSize32; i++)
      V[i] = B32[Pi + i];
    for (let i = 0, pos = 0; i < N - 1; i++) {
      BlockMix(V, pos, V, pos += blockSize32, r);
      blockMixCb();
    }
    BlockMix(V, (N - 1) * blockSize32, B32, Pi, r);
    blockMixCb();
    for (let i = 0; i < N; i++) {
      const j = B32[Pi + blockSize32 - 16] % N;
      for (let k = 0; k < blockSize32; k++)
        tmp[k] = B32[Pi + k] ^ V[j * blockSize32 + k];
      BlockMix(tmp, 0, B32, Pi, r);
      blockMixCb();
    }
  }
  if (!isLE)
    byteSwap32(B32);
  return scryptOutput(password, dkLen, B, V, tmp);
}

// node_modules/ethereum-cryptography/esm/scrypt.js
function scryptSync(password, salt, n, p, r, dkLen, onProgress) {
  assertBytes(password);
  assertBytes(salt);
  return scrypt(password, salt, { N: n, r, p, dkLen, onProgress });
}

// node_modules/ethereum-cryptography/esm/secp256k1.js
var secp256k1_exports = {};
__export(secp256k1_exports, {
  secp256k1: () => secp256k1
});

// node_modules/ethereum-cryptography/node_modules/@noble/curves/esm/abstract/utils.js
var utils_exports2 = {};
__export(utils_exports2, {
  abytes: () => abytes,
  bitGet: () => bitGet,
  bitLen: () => bitLen,
  bitMask: () => bitMask,
  bitSet: () => bitSet,
  bytesToHex: () => bytesToHex2,
  bytesToNumberBE: () => bytesToNumberBE,
  bytesToNumberLE: () => bytesToNumberLE,
  concatBytes: () => concatBytes2,
  createHmacDrbg: () => createHmacDrbg,
  ensureBytes: () => ensureBytes,
  equalBytes: () => equalBytes,
  hexToBytes: () => hexToBytes2,
  hexToNumber: () => hexToNumber2,
  isBytes: () => isBytes2,
  numberToBytesBE: () => numberToBytesBE,
  numberToBytesLE: () => numberToBytesLE,
  numberToHexUnpadded: () => numberToHexUnpadded,
  numberToVarBytesBE: () => numberToVarBytesBE,
  utf8ToBytes: () => utf8ToBytes2,
  validateObject: () => validateObject
});
var _0n = BigInt(0);
var _1n = BigInt(1);
var _2n = BigInt(2);
function isBytes2(a) {
  return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
}
function abytes(item) {
  if (!isBytes2(item))
    throw new Error("Uint8Array expected");
}
var hexes = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
function bytesToHex2(bytes2) {
  abytes(bytes2);
  let hex = "";
  for (let i = 0; i < bytes2.length; i++) {
    hex += hexes[bytes2[i]];
  }
  return hex;
}
function numberToHexUnpadded(num) {
  const hex = num.toString(16);
  return hex.length & 1 ? `0${hex}` : hex;
}
function hexToNumber2(hex) {
  if (typeof hex !== "string")
    throw new Error("hex string expected, got " + typeof hex);
  return BigInt(hex === "" ? "0" : `0x${hex}`);
}
var asciis = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function asciiToBase16(char) {
  if (char >= asciis._0 && char <= asciis._9)
    return char - asciis._0;
  if (char >= asciis._A && char <= asciis._F)
    return char - (asciis._A - 10);
  if (char >= asciis._a && char <= asciis._f)
    return char - (asciis._a - 10);
  return;
}
function hexToBytes2(hex) {
  if (typeof hex !== "string")
    throw new Error("hex string expected, got " + typeof hex);
  const hl = hex.length;
  const al = hl / 2;
  if (hl % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + hl);
  const array = new Uint8Array(al);
  for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
    const n1 = asciiToBase16(hex.charCodeAt(hi));
    const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
    if (n1 === void 0 || n2 === void 0) {
      const char = hex[hi] + hex[hi + 1];
      throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
    }
    array[ai] = n1 * 16 + n2;
  }
  return array;
}
function bytesToNumberBE(bytes2) {
  return hexToNumber2(bytesToHex2(bytes2));
}
function bytesToNumberLE(bytes2) {
  abytes(bytes2);
  return hexToNumber2(bytesToHex2(Uint8Array.from(bytes2).reverse()));
}
function numberToBytesBE(n, len) {
  return hexToBytes2(n.toString(16).padStart(len * 2, "0"));
}
function numberToBytesLE(n, len) {
  return numberToBytesBE(n, len).reverse();
}
function numberToVarBytesBE(n) {
  return hexToBytes2(numberToHexUnpadded(n));
}
function ensureBytes(title, hex, expectedLength) {
  let res;
  if (typeof hex === "string") {
    try {
      res = hexToBytes2(hex);
    } catch (e) {
      throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e}`);
    }
  } else if (isBytes2(hex)) {
    res = Uint8Array.from(hex);
  } else {
    throw new Error(`${title} must be hex string or Uint8Array`);
  }
  const len = res.length;
  if (typeof expectedLength === "number" && len !== expectedLength)
    throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
  return res;
}
function concatBytes2(...arrays) {
  let sum = 0;
  for (let i = 0; i < arrays.length; i++) {
    const a = arrays[i];
    abytes(a);
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
function equalBytes(a, b) {
  if (a.length !== b.length)
    return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++)
    diff |= a[i] ^ b[i];
  return diff === 0;
}
function utf8ToBytes2(str) {
  if (typeof str !== "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
  return new Uint8Array(new TextEncoder().encode(str));
}
function bitLen(n) {
  let len;
  for (len = 0; n > _0n; n >>= _1n, len += 1)
    ;
  return len;
}
function bitGet(n, pos) {
  return n >> BigInt(pos) & _1n;
}
function bitSet(n, pos, value) {
  return n | (value ? _1n : _0n) << BigInt(pos);
}
var bitMask = (n) => (_2n << BigInt(n - 1)) - _1n;
var u8n = (data) => new Uint8Array(data);
var u8fr = (arr) => Uint8Array.from(arr);
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
  if (typeof hashLen !== "number" || hashLen < 2)
    throw new Error("hashLen must be a number");
  if (typeof qByteLen !== "number" || qByteLen < 2)
    throw new Error("qByteLen must be a number");
  if (typeof hmacFn !== "function")
    throw new Error("hmacFn must be a function");
  let v = u8n(hashLen);
  let k = u8n(hashLen);
  let i = 0;
  const reset = () => {
    v.fill(1);
    k.fill(0);
    i = 0;
  };
  const h = (...b) => hmacFn(k, v, ...b);
  const reseed = (seed = u8n()) => {
    k = h(u8fr([0]), seed);
    v = h();
    if (seed.length === 0)
      return;
    k = h(u8fr([1]), seed);
    v = h();
  };
  const gen = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let len = 0;
    const out = [];
    while (len < qByteLen) {
      v = h();
      const sl = v.slice();
      out.push(sl);
      len += v.length;
    }
    return concatBytes2(...out);
  };
  const genUntil = (seed, pred) => {
    reset();
    reseed(seed);
    let res = void 0;
    while (!(res = pred(gen())))
      reseed();
    reset();
    return res;
  };
  return genUntil;
}
var validatorFns = {
  bigint: (val) => typeof val === "bigint",
  function: (val) => typeof val === "function",
  boolean: (val) => typeof val === "boolean",
  string: (val) => typeof val === "string",
  stringOrUint8Array: (val) => typeof val === "string" || isBytes2(val),
  isSafeInteger: (val) => Number.isSafeInteger(val),
  array: (val) => Array.isArray(val),
  field: (val, object) => object.Fp.isValid(val),
  hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
};
function validateObject(object, validators, optValidators = {}) {
  const checkField = (fieldName, type, isOptional) => {
    const checkVal = validatorFns[type];
    if (typeof checkVal !== "function")
      throw new Error(`Invalid validator "${type}", expected function`);
    const val = object[fieldName];
    if (isOptional && val === void 0)
      return;
    if (!checkVal(val, object)) {
      throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type}`);
    }
  };
  for (const [fieldName, type] of Object.entries(validators))
    checkField(fieldName, type, false);
  for (const [fieldName, type] of Object.entries(optValidators))
    checkField(fieldName, type, true);
  return object;
}

// node_modules/ethereum-cryptography/node_modules/@noble/curves/esm/abstract/modular.js
var _0n2 = BigInt(0);
var _1n2 = BigInt(1);
var _2n2 = BigInt(2);
var _3n = BigInt(3);
var _4n = BigInt(4);
var _5n = BigInt(5);
var _8n = BigInt(8);
var _9n = BigInt(9);
var _16n = BigInt(16);
function mod(a, b) {
  const result = a % b;
  return result >= _0n2 ? result : b + result;
}
function pow(num, power, modulo) {
  if (modulo <= _0n2 || power < _0n2)
    throw new Error("Expected power/modulo > 0");
  if (modulo === _1n2)
    return _0n2;
  let res = _1n2;
  while (power > _0n2) {
    if (power & _1n2)
      res = res * num % modulo;
    num = num * num % modulo;
    power >>= _1n2;
  }
  return res;
}
function pow2(x, power, modulo) {
  let res = x;
  while (power-- > _0n2) {
    res *= res;
    res %= modulo;
  }
  return res;
}
function invert(number2, modulo) {
  if (number2 === _0n2 || modulo <= _0n2) {
    throw new Error(`invert: expected positive integers, got n=${number2} mod=${modulo}`);
  }
  let a = mod(number2, modulo);
  let b = modulo;
  let x = _0n2, y = _1n2, u = _1n2, v = _0n2;
  while (a !== _0n2) {
    const q = b / a;
    const r = b % a;
    const m = x - u * q;
    const n = y - v * q;
    b = a, a = r, x = u, y = v, u = m, v = n;
  }
  const gcd = b;
  if (gcd !== _1n2)
    throw new Error("invert: does not exist");
  return mod(x, modulo);
}
function tonelliShanks(P) {
  const legendreC = (P - _1n2) / _2n2;
  let Q, S, Z;
  for (Q = P - _1n2, S = 0; Q % _2n2 === _0n2; Q /= _2n2, S++)
    ;
  for (Z = _2n2; Z < P && pow(Z, legendreC, P) !== P - _1n2; Z++)
    ;
  if (S === 1) {
    const p1div4 = (P + _1n2) / _4n;
    return function tonelliFast(Fp2, n) {
      const root = Fp2.pow(n, p1div4);
      if (!Fp2.eql(Fp2.sqr(root), n))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  const Q1div2 = (Q + _1n2) / _2n2;
  return function tonelliSlow(Fp2, n) {
    if (Fp2.pow(n, legendreC) === Fp2.neg(Fp2.ONE))
      throw new Error("Cannot find square root");
    let r = S;
    let g = Fp2.pow(Fp2.mul(Fp2.ONE, Z), Q);
    let x = Fp2.pow(n, Q1div2);
    let b = Fp2.pow(n, Q);
    while (!Fp2.eql(b, Fp2.ONE)) {
      if (Fp2.eql(b, Fp2.ZERO))
        return Fp2.ZERO;
      let m = 1;
      for (let t2 = Fp2.sqr(b); m < r; m++) {
        if (Fp2.eql(t2, Fp2.ONE))
          break;
        t2 = Fp2.sqr(t2);
      }
      const ge2 = Fp2.pow(g, _1n2 << BigInt(r - m - 1));
      g = Fp2.sqr(ge2);
      x = Fp2.mul(x, ge2);
      b = Fp2.mul(b, g);
      r = m;
    }
    return x;
  };
}
function FpSqrt(P) {
  if (P % _4n === _3n) {
    const p1div4 = (P + _1n2) / _4n;
    return function sqrt3mod4(Fp2, n) {
      const root = Fp2.pow(n, p1div4);
      if (!Fp2.eql(Fp2.sqr(root), n))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  if (P % _8n === _5n) {
    const c1 = (P - _5n) / _8n;
    return function sqrt5mod8(Fp2, n) {
      const n2 = Fp2.mul(n, _2n2);
      const v = Fp2.pow(n2, c1);
      const nv = Fp2.mul(n, v);
      const i = Fp2.mul(Fp2.mul(nv, _2n2), v);
      const root = Fp2.mul(nv, Fp2.sub(i, Fp2.ONE));
      if (!Fp2.eql(Fp2.sqr(root), n))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  if (P % _16n === _9n) {
  }
  return tonelliShanks(P);
}
var FIELD_FIELDS = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function validateField(field) {
  const initial = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  };
  const opts = FIELD_FIELDS.reduce((map, val) => {
    map[val] = "function";
    return map;
  }, initial);
  return validateObject(field, opts);
}
function FpPow(f, num, power) {
  if (power < _0n2)
    throw new Error("Expected power > 0");
  if (power === _0n2)
    return f.ONE;
  if (power === _1n2)
    return num;
  let p = f.ONE;
  let d = num;
  while (power > _0n2) {
    if (power & _1n2)
      p = f.mul(p, d);
    d = f.sqr(d);
    power >>= _1n2;
  }
  return p;
}
function FpInvertBatch(f, nums) {
  const tmp = new Array(nums.length);
  const lastMultiplied = nums.reduce((acc, num, i) => {
    if (f.is0(num))
      return acc;
    tmp[i] = acc;
    return f.mul(acc, num);
  }, f.ONE);
  const inverted = f.inv(lastMultiplied);
  nums.reduceRight((acc, num, i) => {
    if (f.is0(num))
      return acc;
    tmp[i] = f.mul(acc, tmp[i]);
    return f.mul(acc, num);
  }, inverted);
  return tmp;
}
function nLength(n, nBitLength) {
  const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
  const nByteLength = Math.ceil(_nBitLength / 8);
  return { nBitLength: _nBitLength, nByteLength };
}
function Field(ORDER, bitLen2, isLE2 = false, redef = {}) {
  if (ORDER <= _0n2)
    throw new Error(`Expected Field ORDER > 0, got ${ORDER}`);
  const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen2);
  if (BYTES > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const sqrtP = FpSqrt(ORDER);
  const f = Object.freeze({
    ORDER,
    BITS,
    BYTES,
    MASK: bitMask(BITS),
    ZERO: _0n2,
    ONE: _1n2,
    create: (num) => mod(num, ORDER),
    isValid: (num) => {
      if (typeof num !== "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof num}`);
      return _0n2 <= num && num < ORDER;
    },
    is0: (num) => num === _0n2,
    isOdd: (num) => (num & _1n2) === _1n2,
    neg: (num) => mod(-num, ORDER),
    eql: (lhs, rhs) => lhs === rhs,
    sqr: (num) => mod(num * num, ORDER),
    add: (lhs, rhs) => mod(lhs + rhs, ORDER),
    sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
    mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
    pow: (num, power) => FpPow(f, num, power),
    div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
    // Same as above, but doesn't normalize
    sqrN: (num) => num * num,
    addN: (lhs, rhs) => lhs + rhs,
    subN: (lhs, rhs) => lhs - rhs,
    mulN: (lhs, rhs) => lhs * rhs,
    inv: (num) => invert(num, ORDER),
    sqrt: redef.sqrt || ((n) => sqrtP(f, n)),
    invertBatch: (lst) => FpInvertBatch(f, lst),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (a, b, c) => c ? b : a,
    toBytes: (num) => isLE2 ? numberToBytesLE(num, BYTES) : numberToBytesBE(num, BYTES),
    fromBytes: (bytes2) => {
      if (bytes2.length !== BYTES)
        throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes2.length}`);
      return isLE2 ? bytesToNumberLE(bytes2) : bytesToNumberBE(bytes2);
    }
  });
  return Object.freeze(f);
}
function getFieldBytesLength(fieldOrder) {
  if (typeof fieldOrder !== "bigint")
    throw new Error("field order must be bigint");
  const bitLength = fieldOrder.toString(2).length;
  return Math.ceil(bitLength / 8);
}
function getMinHashLength(fieldOrder) {
  const length = getFieldBytesLength(fieldOrder);
  return length + Math.ceil(length / 2);
}
function mapHashToField(key, fieldOrder, isLE2 = false) {
  const len = key.length;
  const fieldLen = getFieldBytesLength(fieldOrder);
  const minLen = getMinHashLength(fieldOrder);
  if (len < 16 || len < minLen || len > 1024)
    throw new Error(`expected ${minLen}-1024 bytes of input, got ${len}`);
  const num = isLE2 ? bytesToNumberBE(key) : bytesToNumberLE(key);
  const reduced = mod(num, fieldOrder - _1n2) + _1n2;
  return isLE2 ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
}

// node_modules/ethereum-cryptography/node_modules/@noble/curves/esm/abstract/curve.js
var _0n3 = BigInt(0);
var _1n3 = BigInt(1);
function wNAF(c, bits) {
  const constTimeNegate = (condition, item) => {
    const neg = item.negate();
    return condition ? neg : item;
  };
  const opts = (W) => {
    const windows = Math.ceil(bits / W) + 1;
    const windowSize = 2 ** (W - 1);
    return { windows, windowSize };
  };
  return {
    constTimeNegate,
    // non-const time multiplication ladder
    unsafeLadder(elm, n) {
      let p = c.ZERO;
      let d = elm;
      while (n > _0n3) {
        if (n & _1n3)
          p = p.add(d);
        d = d.double();
        n >>= _1n3;
      }
      return p;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(elm, W) {
      const { windows, windowSize } = opts(W);
      const points = [];
      let p = elm;
      let base2 = p;
      for (let window2 = 0; window2 < windows; window2++) {
        base2 = p;
        points.push(base2);
        for (let i = 1; i < windowSize; i++) {
          base2 = base2.add(p);
          points.push(base2);
        }
        p = base2.double();
      }
      return points;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(W, precomputes, n) {
      const { windows, windowSize } = opts(W);
      let p = c.ZERO;
      let f = c.BASE;
      const mask2 = BigInt(2 ** W - 1);
      const maxNumber = 2 ** W;
      const shiftBy = BigInt(W);
      for (let window2 = 0; window2 < windows; window2++) {
        const offset = window2 * windowSize;
        let wbits = Number(n & mask2);
        n >>= shiftBy;
        if (wbits > windowSize) {
          wbits -= maxNumber;
          n += _1n3;
        }
        const offset1 = offset;
        const offset2 = offset + Math.abs(wbits) - 1;
        const cond1 = window2 % 2 !== 0;
        const cond2 = wbits < 0;
        if (wbits === 0) {
          f = f.add(constTimeNegate(cond1, precomputes[offset1]));
        } else {
          p = p.add(constTimeNegate(cond2, precomputes[offset2]));
        }
      }
      return { p, f };
    },
    wNAFCached(P, precomputesMap, n, transform) {
      const W = P._WINDOW_SIZE || 1;
      let comp = precomputesMap.get(P);
      if (!comp) {
        comp = this.precomputeWindow(P, W);
        if (W !== 1) {
          precomputesMap.set(P, transform(comp));
        }
      }
      return this.wNAF(W, comp, n);
    }
  };
}
function validateBasic(curve) {
  validateField(curve.Fp);
  validateObject(curve, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  });
  return Object.freeze(__spreadValues(__spreadValues(__spreadValues({}, nLength(curve.n, curve.nBitLength)), curve), { p: curve.Fp.ORDER }));
}

// node_modules/ethereum-cryptography/node_modules/@noble/curves/esm/abstract/weierstrass.js
function validatePointOpts(curve) {
  const opts = validateBasic(curve);
  validateObject(opts, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo, Fp: Fp2, a } = opts;
  if (endo) {
    if (!Fp2.eql(a, Fp2.ZERO)) {
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    }
    if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") {
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
    }
  }
  return Object.freeze(__spreadValues({}, opts));
}
var { bytesToNumberBE: b2n, hexToBytes: h2b } = utils_exports2;
var DER = {
  // asn.1 DER encoding utils
  Err: class DERErr extends Error {
    constructor(m = "") {
      super(m);
    }
  },
  _parseInt(data) {
    const { Err: E } = DER;
    if (data.length < 2 || data[0] !== 2)
      throw new E("Invalid signature integer tag");
    const len = data[1];
    const res = data.subarray(2, len + 2);
    if (!len || res.length !== len)
      throw new E("Invalid signature integer: wrong length");
    if (res[0] & 128)
      throw new E("Invalid signature integer: negative");
    if (res[0] === 0 && !(res[1] & 128))
      throw new E("Invalid signature integer: unnecessary leading zero");
    return { d: b2n(res), l: data.subarray(len + 2) };
  },
  toSig(hex) {
    const { Err: E } = DER;
    const data = typeof hex === "string" ? h2b(hex) : hex;
    abytes(data);
    let l = data.length;
    if (l < 2 || data[0] != 48)
      throw new E("Invalid signature tag");
    if (data[1] !== l - 2)
      throw new E("Invalid signature: incorrect length");
    const { d: r, l: sBytes } = DER._parseInt(data.subarray(2));
    const { d: s, l: rBytesLeft } = DER._parseInt(sBytes);
    if (rBytesLeft.length)
      throw new E("Invalid signature: left bytes after parsing");
    return { r, s };
  },
  hexFromSig(sig) {
    const slice = (s2) => Number.parseInt(s2[0], 16) & 8 ? "00" + s2 : s2;
    const h = (num) => {
      const hex = num.toString(16);
      return hex.length & 1 ? `0${hex}` : hex;
    };
    const s = slice(h(sig.s));
    const r = slice(h(sig.r));
    const shl = s.length / 2;
    const rhl = r.length / 2;
    const sl = h(shl);
    const rl = h(rhl);
    return `30${h(rhl + shl + 4)}02${rl}${r}02${sl}${s}`;
  }
};
var _0n4 = BigInt(0);
var _1n4 = BigInt(1);
var _2n3 = BigInt(2);
var _3n2 = BigInt(3);
var _4n2 = BigInt(4);
function weierstrassPoints(opts) {
  const CURVE = validatePointOpts(opts);
  const { Fp: Fp2 } = CURVE;
  const toBytes3 = CURVE.toBytes || ((_c, point, _isCompressed) => {
    const a = point.toAffine();
    return concatBytes2(Uint8Array.from([4]), Fp2.toBytes(a.x), Fp2.toBytes(a.y));
  });
  const fromBytes = CURVE.fromBytes || ((bytes2) => {
    const tail = bytes2.subarray(1);
    const x = Fp2.fromBytes(tail.subarray(0, Fp2.BYTES));
    const y = Fp2.fromBytes(tail.subarray(Fp2.BYTES, 2 * Fp2.BYTES));
    return { x, y };
  });
  function weierstrassEquation(x) {
    const { a, b } = CURVE;
    const x2 = Fp2.sqr(x);
    const x3 = Fp2.mul(x2, x);
    return Fp2.add(Fp2.add(x3, Fp2.mul(x, a)), b);
  }
  if (!Fp2.eql(Fp2.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx)))
    throw new Error("bad generator point: equation left != right");
  function isWithinCurveOrder(num) {
    return typeof num === "bigint" && _0n4 < num && num < CURVE.n;
  }
  function assertGE(num) {
    if (!isWithinCurveOrder(num))
      throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function normPrivateKeyToScalar(key) {
    const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n } = CURVE;
    if (lengths && typeof key !== "bigint") {
      if (isBytes2(key))
        key = bytesToHex2(key);
      if (typeof key !== "string" || !lengths.includes(key.length))
        throw new Error("Invalid key");
      key = key.padStart(nByteLength * 2, "0");
    }
    let num;
    try {
      num = typeof key === "bigint" ? key : bytesToNumberBE(ensureBytes("private key", key, nByteLength));
    } catch (error) {
      throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
    }
    if (wrapPrivateKey)
      num = mod(num, n);
    assertGE(num);
    return num;
  }
  const pointPrecomputes = /* @__PURE__ */ new Map();
  function assertPrjPoint(other) {
    if (!(other instanceof Point2))
      throw new Error("ProjectivePoint expected");
  }
  class Point2 {
    constructor(px, py, pz) {
      this.px = px;
      this.py = py;
      this.pz = pz;
      if (px == null || !Fp2.isValid(px))
        throw new Error("x required");
      if (py == null || !Fp2.isValid(py))
        throw new Error("y required");
      if (pz == null || !Fp2.isValid(pz))
        throw new Error("z required");
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(p) {
      const { x, y } = p || {};
      if (!p || !Fp2.isValid(x) || !Fp2.isValid(y))
        throw new Error("invalid affine point");
      if (p instanceof Point2)
        throw new Error("projective point not allowed");
      const is0 = (i) => Fp2.eql(i, Fp2.ZERO);
      if (is0(x) && is0(y))
        return Point2.ZERO;
      return new Point2(x, y, Fp2.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(points) {
      const toInv = Fp2.invertBatch(points.map((p) => p.pz));
      return points.map((p, i) => p.toAffine(toInv[i])).map(Point2.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(hex) {
      const P = Point2.fromAffine(fromBytes(ensureBytes("pointHex", hex)));
      P.assertValidity();
      return P;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(privateKey) {
      return Point2.BASE.multiply(normPrivateKeyToScalar(privateKey));
    }
    // "Private method", don't use it directly
    _setWindowSize(windowSize) {
      this._WINDOW_SIZE = windowSize;
      pointPrecomputes.delete(this);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      if (this.is0()) {
        if (CURVE.allowInfinityPoint && !Fp2.is0(this.py))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x, y } = this.toAffine();
      if (!Fp2.isValid(x) || !Fp2.isValid(y))
        throw new Error("bad point: x or y not FE");
      const left = Fp2.sqr(y);
      const right = weierstrassEquation(x);
      if (!Fp2.eql(left, right))
        throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y } = this.toAffine();
      if (Fp2.isOdd)
        return !Fp2.isOdd(y);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(other) {
      assertPrjPoint(other);
      const { px: X1, py: Y1, pz: Z1 } = this;
      const { px: X2, py: Y2, pz: Z2 } = other;
      const U1 = Fp2.eql(Fp2.mul(X1, Z2), Fp2.mul(X2, Z1));
      const U2 = Fp2.eql(Fp2.mul(Y1, Z2), Fp2.mul(Y2, Z1));
      return U1 && U2;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new Point2(this.px, Fp2.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a, b } = CURVE;
      const b3 = Fp2.mul(b, _3n2);
      const { px: X1, py: Y1, pz: Z1 } = this;
      let X3 = Fp2.ZERO, Y3 = Fp2.ZERO, Z3 = Fp2.ZERO;
      let t0 = Fp2.mul(X1, X1);
      let t1 = Fp2.mul(Y1, Y1);
      let t2 = Fp2.mul(Z1, Z1);
      let t3 = Fp2.mul(X1, Y1);
      t3 = Fp2.add(t3, t3);
      Z3 = Fp2.mul(X1, Z1);
      Z3 = Fp2.add(Z3, Z3);
      X3 = Fp2.mul(a, Z3);
      Y3 = Fp2.mul(b3, t2);
      Y3 = Fp2.add(X3, Y3);
      X3 = Fp2.sub(t1, Y3);
      Y3 = Fp2.add(t1, Y3);
      Y3 = Fp2.mul(X3, Y3);
      X3 = Fp2.mul(t3, X3);
      Z3 = Fp2.mul(b3, Z3);
      t2 = Fp2.mul(a, t2);
      t3 = Fp2.sub(t0, t2);
      t3 = Fp2.mul(a, t3);
      t3 = Fp2.add(t3, Z3);
      Z3 = Fp2.add(t0, t0);
      t0 = Fp2.add(Z3, t0);
      t0 = Fp2.add(t0, t2);
      t0 = Fp2.mul(t0, t3);
      Y3 = Fp2.add(Y3, t0);
      t2 = Fp2.mul(Y1, Z1);
      t2 = Fp2.add(t2, t2);
      t0 = Fp2.mul(t2, t3);
      X3 = Fp2.sub(X3, t0);
      Z3 = Fp2.mul(t2, t1);
      Z3 = Fp2.add(Z3, Z3);
      Z3 = Fp2.add(Z3, Z3);
      return new Point2(X3, Y3, Z3);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(other) {
      assertPrjPoint(other);
      const { px: X1, py: Y1, pz: Z1 } = this;
      const { px: X2, py: Y2, pz: Z2 } = other;
      let X3 = Fp2.ZERO, Y3 = Fp2.ZERO, Z3 = Fp2.ZERO;
      const a = CURVE.a;
      const b3 = Fp2.mul(CURVE.b, _3n2);
      let t0 = Fp2.mul(X1, X2);
      let t1 = Fp2.mul(Y1, Y2);
      let t2 = Fp2.mul(Z1, Z2);
      let t3 = Fp2.add(X1, Y1);
      let t4 = Fp2.add(X2, Y2);
      t3 = Fp2.mul(t3, t4);
      t4 = Fp2.add(t0, t1);
      t3 = Fp2.sub(t3, t4);
      t4 = Fp2.add(X1, Z1);
      let t5 = Fp2.add(X2, Z2);
      t4 = Fp2.mul(t4, t5);
      t5 = Fp2.add(t0, t2);
      t4 = Fp2.sub(t4, t5);
      t5 = Fp2.add(Y1, Z1);
      X3 = Fp2.add(Y2, Z2);
      t5 = Fp2.mul(t5, X3);
      X3 = Fp2.add(t1, t2);
      t5 = Fp2.sub(t5, X3);
      Z3 = Fp2.mul(a, t4);
      X3 = Fp2.mul(b3, t2);
      Z3 = Fp2.add(X3, Z3);
      X3 = Fp2.sub(t1, Z3);
      Z3 = Fp2.add(t1, Z3);
      Y3 = Fp2.mul(X3, Z3);
      t1 = Fp2.add(t0, t0);
      t1 = Fp2.add(t1, t0);
      t2 = Fp2.mul(a, t2);
      t4 = Fp2.mul(b3, t4);
      t1 = Fp2.add(t1, t2);
      t2 = Fp2.sub(t0, t2);
      t2 = Fp2.mul(a, t2);
      t4 = Fp2.add(t4, t2);
      t0 = Fp2.mul(t1, t4);
      Y3 = Fp2.add(Y3, t0);
      t0 = Fp2.mul(t5, t4);
      X3 = Fp2.mul(t3, X3);
      X3 = Fp2.sub(X3, t0);
      t0 = Fp2.mul(t3, t1);
      Z3 = Fp2.mul(t5, Z3);
      Z3 = Fp2.add(Z3, t0);
      return new Point2(X3, Y3, Z3);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    is0() {
      return this.equals(Point2.ZERO);
    }
    wNAF(n) {
      return wnaf.wNAFCached(this, pointPrecomputes, n, (comp) => {
        const toInv = Fp2.invertBatch(comp.map((p) => p.pz));
        return comp.map((p, i) => p.toAffine(toInv[i])).map(Point2.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(n) {
      const I = Point2.ZERO;
      if (n === _0n4)
        return I;
      assertGE(n);
      if (n === _1n4)
        return this;
      const { endo } = CURVE;
      if (!endo)
        return wnaf.unsafeLadder(this, n);
      let { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
      let k1p = I;
      let k2p = I;
      let d = this;
      while (k1 > _0n4 || k2 > _0n4) {
        if (k1 & _1n4)
          k1p = k1p.add(d);
        if (k2 & _1n4)
          k2p = k2p.add(d);
        d = d.double();
        k1 >>= _1n4;
        k2 >>= _1n4;
      }
      if (k1neg)
        k1p = k1p.negate();
      if (k2neg)
        k2p = k2p.negate();
      k2p = new Point2(Fp2.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
      return k1p.add(k2p);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(scalar) {
      assertGE(scalar);
      let n = scalar;
      let point, fake;
      const { endo } = CURVE;
      if (endo) {
        const { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
        let { p: k1p, f: f1p } = this.wNAF(k1);
        let { p: k2p, f: f2p } = this.wNAF(k2);
        k1p = wnaf.constTimeNegate(k1neg, k1p);
        k2p = wnaf.constTimeNegate(k2neg, k2p);
        k2p = new Point2(Fp2.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
        point = k1p.add(k2p);
        fake = f1p.add(f2p);
      } else {
        const { p, f } = this.wNAF(n);
        point = p;
        fake = f;
      }
      return Point2.normalizeZ([point, fake])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(Q, a, b) {
      const G = Point2.BASE;
      const mul = (P, a2) => a2 === _0n4 || a2 === _1n4 || !P.equals(G) ? P.multiplyUnsafe(a2) : P.multiply(a2);
      const sum = mul(this, a).add(mul(Q, b));
      return sum.is0() ? void 0 : sum;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(iz) {
      const { px: x, py: y, pz: z } = this;
      const is0 = this.is0();
      if (iz == null)
        iz = is0 ? Fp2.ONE : Fp2.inv(z);
      const ax = Fp2.mul(x, iz);
      const ay = Fp2.mul(y, iz);
      const zz = Fp2.mul(z, iz);
      if (is0)
        return { x: Fp2.ZERO, y: Fp2.ZERO };
      if (!Fp2.eql(zz, Fp2.ONE))
        throw new Error("invZ was invalid");
      return { x: ax, y: ay };
    }
    isTorsionFree() {
      const { h: cofactor, isTorsionFree } = CURVE;
      if (cofactor === _1n4)
        return true;
      if (isTorsionFree)
        return isTorsionFree(Point2, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: cofactor, clearCofactor } = CURVE;
      if (cofactor === _1n4)
        return this;
      if (clearCofactor)
        return clearCofactor(Point2, this);
      return this.multiplyUnsafe(CURVE.h);
    }
    toRawBytes(isCompressed = true) {
      this.assertValidity();
      return toBytes3(Point2, this, isCompressed);
    }
    toHex(isCompressed = true) {
      return bytesToHex2(this.toRawBytes(isCompressed));
    }
  }
  Point2.BASE = new Point2(CURVE.Gx, CURVE.Gy, Fp2.ONE);
  Point2.ZERO = new Point2(Fp2.ZERO, Fp2.ONE, Fp2.ZERO);
  const _bits = CURVE.nBitLength;
  const wnaf = wNAF(Point2, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
  return {
    CURVE,
    ProjectivePoint: Point2,
    normPrivateKeyToScalar,
    weierstrassEquation,
    isWithinCurveOrder
  };
}
function validateOpts(curve) {
  const opts = validateBasic(curve);
  validateObject(opts, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  });
  return Object.freeze(__spreadValues({ lowS: true }, opts));
}
function weierstrass(curveDef) {
  const CURVE = validateOpts(curveDef);
  const { Fp: Fp2, n: CURVE_ORDER } = CURVE;
  const compressedLen = Fp2.BYTES + 1;
  const uncompressedLen = 2 * Fp2.BYTES + 1;
  function isValidFieldElement(num) {
    return _0n4 < num && num < Fp2.ORDER;
  }
  function modN2(a) {
    return mod(a, CURVE_ORDER);
  }
  function invN(a) {
    return invert(a, CURVE_ORDER);
  }
  const { ProjectivePoint: Point2, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints(__spreadProps(__spreadValues({}, CURVE), {
    toBytes(_c, point, isCompressed) {
      const a = point.toAffine();
      const x = Fp2.toBytes(a.x);
      const cat = concatBytes2;
      if (isCompressed) {
        return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x);
      } else {
        return cat(Uint8Array.from([4]), x, Fp2.toBytes(a.y));
      }
    },
    fromBytes(bytes2) {
      const len = bytes2.length;
      const head = bytes2[0];
      const tail = bytes2.subarray(1);
      if (len === compressedLen && (head === 2 || head === 3)) {
        const x = bytesToNumberBE(tail);
        if (!isValidFieldElement(x))
          throw new Error("Point is not on curve");
        const y2 = weierstrassEquation(x);
        let y;
        try {
          y = Fp2.sqrt(y2);
        } catch (sqrtError) {
          const suffix = sqrtError instanceof Error ? ": " + sqrtError.message : "";
          throw new Error("Point is not on curve" + suffix);
        }
        const isYOdd = (y & _1n4) === _1n4;
        const isHeadOdd = (head & 1) === 1;
        if (isHeadOdd !== isYOdd)
          y = Fp2.neg(y);
        return { x, y };
      } else if (len === uncompressedLen && head === 4) {
        const x = Fp2.fromBytes(tail.subarray(0, Fp2.BYTES));
        const y = Fp2.fromBytes(tail.subarray(Fp2.BYTES, 2 * Fp2.BYTES));
        return { x, y };
      } else {
        throw new Error(`Point of length ${len} was invalid. Expected ${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes`);
      }
    }
  }));
  const numToNByteStr = (num) => bytesToHex2(numberToBytesBE(num, CURVE.nByteLength));
  function isBiggerThanHalfOrder(number2) {
    const HALF = CURVE_ORDER >> _1n4;
    return number2 > HALF;
  }
  function normalizeS(s) {
    return isBiggerThanHalfOrder(s) ? modN2(-s) : s;
  }
  const slcNum = (b, from, to) => bytesToNumberBE(b.slice(from, to));
  class Signature {
    constructor(r, s, recovery) {
      this.r = r;
      this.s = s;
      this.recovery = recovery;
      this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(hex) {
      const l = CURVE.nByteLength;
      hex = ensureBytes("compactSignature", hex, l * 2);
      return new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(hex) {
      const { r, s } = DER.toSig(ensureBytes("DER", hex));
      return new Signature(r, s);
    }
    assertValidity() {
      if (!isWithinCurveOrder(this.r))
        throw new Error("r must be 0 < r < CURVE.n");
      if (!isWithinCurveOrder(this.s))
        throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(recovery) {
      return new Signature(this.r, this.s, recovery);
    }
    recoverPublicKey(msgHash) {
      const { r, s, recovery: rec } = this;
      const h = bits2int_modN(ensureBytes("msgHash", msgHash));
      if (rec == null || ![0, 1, 2, 3].includes(rec))
        throw new Error("recovery id invalid");
      const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
      if (radj >= Fp2.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const prefix = (rec & 1) === 0 ? "02" : "03";
      const R = Point2.fromHex(prefix + numToNByteStr(radj));
      const ir = invN(radj);
      const u1 = modN2(-h * ir);
      const u2 = modN2(s * ir);
      const Q = Point2.BASE.multiplyAndAddUnsafe(R, u1, u2);
      if (!Q)
        throw new Error("point at infinify");
      Q.assertValidity();
      return Q;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return isBiggerThanHalfOrder(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new Signature(this.r, modN2(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return hexToBytes2(this.toDERHex());
    }
    toDERHex() {
      return DER.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return hexToBytes2(this.toCompactHex());
    }
    toCompactHex() {
      return numToNByteStr(this.r) + numToNByteStr(this.s);
    }
  }
  const utils = {
    isValidPrivateKey(privateKey) {
      try {
        normPrivateKeyToScalar(privateKey);
        return true;
      } catch (error) {
        return false;
      }
    },
    normPrivateKeyToScalar,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const length = getMinHashLength(CURVE.n);
      return mapHashToField(CURVE.randomBytes(length), CURVE.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(windowSize = 8, point = Point2.BASE) {
      point._setWindowSize(windowSize);
      point.multiply(BigInt(3));
      return point;
    }
  };
  function getPublicKey(privateKey, isCompressed = true) {
    return Point2.fromPrivateKey(privateKey).toRawBytes(isCompressed);
  }
  function isProbPub(item) {
    const arr = isBytes2(item);
    const str = typeof item === "string";
    const len = (arr || str) && item.length;
    if (arr)
      return len === compressedLen || len === uncompressedLen;
    if (str)
      return len === 2 * compressedLen || len === 2 * uncompressedLen;
    if (item instanceof Point2)
      return true;
    return false;
  }
  function getSharedSecret(privateA, publicB, isCompressed = true) {
    if (isProbPub(privateA))
      throw new Error("first arg must be private key");
    if (!isProbPub(publicB))
      throw new Error("second arg must be public key");
    const b = Point2.fromHex(publicB);
    return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
  }
  const bits2int = CURVE.bits2int || function(bytes2) {
    const num = bytesToNumberBE(bytes2);
    const delta = bytes2.length * 8 - CURVE.nBitLength;
    return delta > 0 ? num >> BigInt(delta) : num;
  };
  const bits2int_modN = CURVE.bits2int_modN || function(bytes2) {
    return modN2(bits2int(bytes2));
  };
  const ORDER_MASK = bitMask(CURVE.nBitLength);
  function int2octets(num) {
    if (typeof num !== "bigint")
      throw new Error("bigint expected");
    if (!(_0n4 <= num && num < ORDER_MASK))
      throw new Error(`bigint expected < 2^${CURVE.nBitLength}`);
    return numberToBytesBE(num, CURVE.nByteLength);
  }
  function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
    if (["recovered", "canonical"].some((k) => k in opts))
      throw new Error("sign() legacy options not supported");
    const { hash: hash2, randomBytes: randomBytes3 } = CURVE;
    let { lowS, prehash, extraEntropy: ent } = opts;
    if (lowS == null)
      lowS = true;
    msgHash = ensureBytes("msgHash", msgHash);
    if (prehash)
      msgHash = ensureBytes("prehashed msgHash", hash2(msgHash));
    const h1int = bits2int_modN(msgHash);
    const d = normPrivateKeyToScalar(privateKey);
    const seedArgs = [int2octets(d), int2octets(h1int)];
    if (ent != null && ent !== false) {
      const e = ent === true ? randomBytes3(Fp2.BYTES) : ent;
      seedArgs.push(ensureBytes("extraEntropy", e));
    }
    const seed = concatBytes2(...seedArgs);
    const m = h1int;
    function k2sig(kBytes) {
      const k = bits2int(kBytes);
      if (!isWithinCurveOrder(k))
        return;
      const ik = invN(k);
      const q = Point2.BASE.multiply(k).toAffine();
      const r = modN2(q.x);
      if (r === _0n4)
        return;
      const s = modN2(ik * modN2(m + r * d));
      if (s === _0n4)
        return;
      let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n4);
      let normS = s;
      if (lowS && isBiggerThanHalfOrder(s)) {
        normS = normalizeS(s);
        recovery ^= 1;
      }
      return new Signature(r, normS, recovery);
    }
    return { seed, k2sig };
  }
  const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
  const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
  function sign6(msgHash, privKey, opts = defaultSigOpts) {
    const { seed, k2sig } = prepSig(msgHash, privKey, opts);
    const C = CURVE;
    const drbg = createHmacDrbg(C.hash.outputLen, C.nByteLength, C.hmac);
    return drbg(seed, k2sig);
  }
  Point2.BASE._setWindowSize(8);
  function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
    const sg = signature;
    msgHash = ensureBytes("msgHash", msgHash);
    publicKey = ensureBytes("publicKey", publicKey);
    if ("strict" in opts)
      throw new Error("options.strict was renamed to lowS");
    const { lowS, prehash } = opts;
    let _sig = void 0;
    let P;
    try {
      if (typeof sg === "string" || isBytes2(sg)) {
        try {
          _sig = Signature.fromDER(sg);
        } catch (derError) {
          if (!(derError instanceof DER.Err))
            throw derError;
          _sig = Signature.fromCompact(sg);
        }
      } else if (typeof sg === "object" && typeof sg.r === "bigint" && typeof sg.s === "bigint") {
        const { r: r2, s: s2 } = sg;
        _sig = new Signature(r2, s2);
      } else {
        throw new Error("PARSE");
      }
      P = Point2.fromHex(publicKey);
    } catch (error) {
      if (error.message === "PARSE")
        throw new Error(`signature must be Signature instance, Uint8Array or hex string`);
      return false;
    }
    if (lowS && _sig.hasHighS())
      return false;
    if (prehash)
      msgHash = CURVE.hash(msgHash);
    const { r, s } = _sig;
    const h = bits2int_modN(msgHash);
    const is = invN(s);
    const u1 = modN2(h * is);
    const u2 = modN2(r * is);
    const R = Point2.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine();
    if (!R)
      return false;
    const v = modN2(R.x);
    return v === r;
  }
  return {
    CURVE,
    getPublicKey,
    getSharedSecret,
    sign: sign6,
    verify,
    ProjectivePoint: Point2,
    Signature,
    utils
  };
}
function SWUFpSqrtRatio(Fp2, Z) {
  const q = Fp2.ORDER;
  let l = _0n4;
  for (let o = q - _1n4; o % _2n3 === _0n4; o /= _2n3)
    l += _1n4;
  const c1 = l;
  const _2n_pow_c1_1 = _2n3 << c1 - _1n4 - _1n4;
  const _2n_pow_c1 = _2n_pow_c1_1 * _2n3;
  const c2 = (q - _1n4) / _2n_pow_c1;
  const c3 = (c2 - _1n4) / _2n3;
  const c4 = _2n_pow_c1 - _1n4;
  const c5 = _2n_pow_c1_1;
  const c6 = Fp2.pow(Z, c2);
  const c7 = Fp2.pow(Z, (c2 + _1n4) / _2n3);
  let sqrtRatio = (u, v) => {
    let tv1 = c6;
    let tv2 = Fp2.pow(v, c4);
    let tv3 = Fp2.sqr(tv2);
    tv3 = Fp2.mul(tv3, v);
    let tv5 = Fp2.mul(u, tv3);
    tv5 = Fp2.pow(tv5, c3);
    tv5 = Fp2.mul(tv5, tv2);
    tv2 = Fp2.mul(tv5, v);
    tv3 = Fp2.mul(tv5, u);
    let tv4 = Fp2.mul(tv3, tv2);
    tv5 = Fp2.pow(tv4, c5);
    let isQR = Fp2.eql(tv5, Fp2.ONE);
    tv2 = Fp2.mul(tv3, c7);
    tv5 = Fp2.mul(tv4, tv1);
    tv3 = Fp2.cmov(tv2, tv3, isQR);
    tv4 = Fp2.cmov(tv5, tv4, isQR);
    for (let i = c1; i > _1n4; i--) {
      let tv52 = i - _2n3;
      tv52 = _2n3 << tv52 - _1n4;
      let tvv5 = Fp2.pow(tv4, tv52);
      const e1 = Fp2.eql(tvv5, Fp2.ONE);
      tv2 = Fp2.mul(tv3, tv1);
      tv1 = Fp2.mul(tv1, tv1);
      tvv5 = Fp2.mul(tv4, tv1);
      tv3 = Fp2.cmov(tv2, tv3, e1);
      tv4 = Fp2.cmov(tvv5, tv4, e1);
    }
    return { isValid: isQR, value: tv3 };
  };
  if (Fp2.ORDER % _4n2 === _3n2) {
    const c12 = (Fp2.ORDER - _3n2) / _4n2;
    const c22 = Fp2.sqrt(Fp2.neg(Z));
    sqrtRatio = (u, v) => {
      let tv1 = Fp2.sqr(v);
      const tv2 = Fp2.mul(u, v);
      tv1 = Fp2.mul(tv1, tv2);
      let y1 = Fp2.pow(tv1, c12);
      y1 = Fp2.mul(y1, tv2);
      const y2 = Fp2.mul(y1, c22);
      const tv3 = Fp2.mul(Fp2.sqr(y1), v);
      const isQR = Fp2.eql(tv3, u);
      let y = Fp2.cmov(y2, y1, isQR);
      return { isValid: isQR, value: y };
    };
  }
  return sqrtRatio;
}
function mapToCurveSimpleSWU(Fp2, opts) {
  validateField(Fp2);
  if (!Fp2.isValid(opts.A) || !Fp2.isValid(opts.B) || !Fp2.isValid(opts.Z))
    throw new Error("mapToCurveSimpleSWU: invalid opts");
  const sqrtRatio = SWUFpSqrtRatio(Fp2, opts.Z);
  if (!Fp2.isOdd)
    throw new Error("Fp.isOdd is not implemented!");
  return (u) => {
    let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
    tv1 = Fp2.sqr(u);
    tv1 = Fp2.mul(tv1, opts.Z);
    tv2 = Fp2.sqr(tv1);
    tv2 = Fp2.add(tv2, tv1);
    tv3 = Fp2.add(tv2, Fp2.ONE);
    tv3 = Fp2.mul(tv3, opts.B);
    tv4 = Fp2.cmov(opts.Z, Fp2.neg(tv2), !Fp2.eql(tv2, Fp2.ZERO));
    tv4 = Fp2.mul(tv4, opts.A);
    tv2 = Fp2.sqr(tv3);
    tv6 = Fp2.sqr(tv4);
    tv5 = Fp2.mul(tv6, opts.A);
    tv2 = Fp2.add(tv2, tv5);
    tv2 = Fp2.mul(tv2, tv3);
    tv6 = Fp2.mul(tv6, tv4);
    tv5 = Fp2.mul(tv6, opts.B);
    tv2 = Fp2.add(tv2, tv5);
    x = Fp2.mul(tv1, tv3);
    const { isValid: isValid3, value } = sqrtRatio(tv2, tv6);
    y = Fp2.mul(tv1, u);
    y = Fp2.mul(y, value);
    x = Fp2.cmov(x, tv3, isValid3);
    y = Fp2.cmov(y, value, isValid3);
    const e1 = Fp2.isOdd(u) === Fp2.isOdd(y);
    y = Fp2.cmov(Fp2.neg(y), y, e1);
    x = Fp2.div(x, tv4);
    return { x, y };
  };
}

// node_modules/ethereum-cryptography/node_modules/@noble/curves/esm/_shortw_utils.js
function getHash(hash2) {
  return {
    hash: hash2,
    hmac: (key, ...msgs) => hmac(hash2, key, concatBytes(...msgs)),
    randomBytes
  };
}
function createCurve(curveDef, defHash) {
  const create2 = (hash2) => weierstrass(__spreadValues(__spreadValues({}, curveDef), getHash(hash2)));
  return Object.freeze(__spreadProps(__spreadValues({}, create2(defHash)), { create: create2 }));
}

// node_modules/ethereum-cryptography/node_modules/@noble/curves/esm/abstract/hash-to-curve.js
var os2ip = bytesToNumberBE;
function i2osp(value, length) {
  if (value < 0 || value >= 1 << 8 * length) {
    throw new Error(`bad I2OSP call: value=${value} length=${length}`);
  }
  const res = Array.from({ length }).fill(0);
  for (let i = length - 1; i >= 0; i--) {
    res[i] = value & 255;
    value >>>= 8;
  }
  return new Uint8Array(res);
}
function strxor(a, b) {
  const arr = new Uint8Array(a.length);
  for (let i = 0; i < a.length; i++) {
    arr[i] = a[i] ^ b[i];
  }
  return arr;
}
function anum(item) {
  if (!Number.isSafeInteger(item))
    throw new Error("number expected");
}
function expand_message_xmd(msg, DST, lenInBytes, H) {
  abytes(msg);
  abytes(DST);
  anum(lenInBytes);
  if (DST.length > 255)
    DST = H(concatBytes2(utf8ToBytes2("H2C-OVERSIZE-DST-"), DST));
  const { outputLen: b_in_bytes, blockLen: r_in_bytes } = H;
  const ell = Math.ceil(lenInBytes / b_in_bytes);
  if (ell > 255)
    throw new Error("Invalid xmd length");
  const DST_prime = concatBytes2(DST, i2osp(DST.length, 1));
  const Z_pad = i2osp(0, r_in_bytes);
  const l_i_b_str = i2osp(lenInBytes, 2);
  const b = new Array(ell);
  const b_0 = H(concatBytes2(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
  b[0] = H(concatBytes2(b_0, i2osp(1, 1), DST_prime));
  for (let i = 1; i <= ell; i++) {
    const args = [strxor(b_0, b[i - 1]), i2osp(i + 1, 1), DST_prime];
    b[i] = H(concatBytes2(...args));
  }
  const pseudo_random_bytes = concatBytes2(...b);
  return pseudo_random_bytes.slice(0, lenInBytes);
}
function expand_message_xof(msg, DST, lenInBytes, k, H) {
  abytes(msg);
  abytes(DST);
  anum(lenInBytes);
  if (DST.length > 255) {
    const dkLen = Math.ceil(2 * k / 8);
    DST = H.create({ dkLen }).update(utf8ToBytes2("H2C-OVERSIZE-DST-")).update(DST).digest();
  }
  if (lenInBytes > 65535 || DST.length > 255)
    throw new Error("expand_message_xof: invalid lenInBytes");
  return H.create({ dkLen: lenInBytes }).update(msg).update(i2osp(lenInBytes, 2)).update(DST).update(i2osp(DST.length, 1)).digest();
}
function hash_to_field(msg, count, options) {
  validateObject(options, {
    DST: "stringOrUint8Array",
    p: "bigint",
    m: "isSafeInteger",
    k: "isSafeInteger",
    hash: "hash"
  });
  const { p, k, m, hash: hash2, expand, DST: _DST } = options;
  abytes(msg);
  anum(count);
  const DST = typeof _DST === "string" ? utf8ToBytes2(_DST) : _DST;
  const log2p = p.toString(2).length;
  const L = Math.ceil((log2p + k) / 8);
  const len_in_bytes = count * m * L;
  let prb;
  if (expand === "xmd") {
    prb = expand_message_xmd(msg, DST, len_in_bytes, hash2);
  } else if (expand === "xof") {
    prb = expand_message_xof(msg, DST, len_in_bytes, k, hash2);
  } else if (expand === "_internal_pass") {
    prb = msg;
  } else {
    throw new Error('expand must be "xmd" or "xof"');
  }
  const u = new Array(count);
  for (let i = 0; i < count; i++) {
    const e = new Array(m);
    for (let j = 0; j < m; j++) {
      const elm_offset = L * (j + i * m);
      const tv = prb.subarray(elm_offset, elm_offset + L);
      e[j] = mod(os2ip(tv), p);
    }
    u[i] = e;
  }
  return u;
}
function isogenyMap(field, map) {
  const COEFF = map.map((i) => Array.from(i).reverse());
  return (x, y) => {
    const [xNum, xDen, yNum, yDen] = COEFF.map((val) => val.reduce((acc, i) => field.add(field.mul(acc, x), i)));
    x = field.div(xNum, xDen);
    y = field.mul(y, field.div(yNum, yDen));
    return { x, y };
  };
}
function createHasher(Point2, mapToCurve, def) {
  if (typeof mapToCurve !== "function")
    throw new Error("mapToCurve() must be defined");
  return {
    // Encodes byte string to elliptic curve.
    // hash_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    hashToCurve(msg, options) {
      const u = hash_to_field(msg, 2, __spreadValues(__spreadProps(__spreadValues({}, def), { DST: def.DST }), options));
      const u0 = Point2.fromAffine(mapToCurve(u[0]));
      const u1 = Point2.fromAffine(mapToCurve(u[1]));
      const P = u0.add(u1).clearCofactor();
      P.assertValidity();
      return P;
    },
    // Encodes byte string to elliptic curve.
    // encode_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    encodeToCurve(msg, options) {
      const u = hash_to_field(msg, 1, __spreadValues(__spreadProps(__spreadValues({}, def), { DST: def.encodeDST }), options));
      const P = Point2.fromAffine(mapToCurve(u[0])).clearCofactor();
      P.assertValidity();
      return P;
    },
    // Same as encodeToCurve, but without hash
    mapToCurve(scalars) {
      if (!Array.isArray(scalars))
        throw new Error("mapToCurve: expected array of bigints");
      for (const i of scalars)
        if (typeof i !== "bigint")
          throw new Error(`mapToCurve: expected array of bigints, got ${i} in array`);
      const P = Point2.fromAffine(mapToCurve(scalars)).clearCofactor();
      P.assertValidity();
      return P;
    }
  };
}

// node_modules/ethereum-cryptography/node_modules/@noble/curves/esm/secp256k1.js
var secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
var secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
var _1n5 = BigInt(1);
var _2n4 = BigInt(2);
var divNearest = (a, b) => (a + b / _2n4) / b;
function sqrtMod(y) {
  const P = secp256k1P;
  const _3n3 = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
  const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
  const b2 = y * y * y % P;
  const b3 = b2 * b2 * y % P;
  const b6 = pow2(b3, _3n3, P) * b3 % P;
  const b9 = pow2(b6, _3n3, P) * b3 % P;
  const b11 = pow2(b9, _2n4, P) * b2 % P;
  const b22 = pow2(b11, _11n, P) * b11 % P;
  const b44 = pow2(b22, _22n, P) * b22 % P;
  const b88 = pow2(b44, _44n, P) * b44 % P;
  const b176 = pow2(b88, _88n, P) * b88 % P;
  const b220 = pow2(b176, _44n, P) * b44 % P;
  const b223 = pow2(b220, _3n3, P) * b3 % P;
  const t1 = pow2(b223, _23n, P) * b22 % P;
  const t2 = pow2(t1, _6n, P) * b2 % P;
  const root = pow2(t2, _2n4, P);
  if (!Fp.eql(Fp.sqr(root), y))
    throw new Error("Cannot find square root");
  return root;
}
var Fp = Field(secp256k1P, void 0, void 0, { sqrt: sqrtMod });
var secp256k1 = createCurve({
  a: BigInt(0),
  // equation params: a, b
  b: BigInt(7),
  // Seem to be rigid: bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975
  Fp,
  // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
  n: secp256k1N,
  // Curve order, total count of valid points in the field
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  // Cofactor
  lowS: true,
  // Allow only low-S signatures by default in sign() and verify()
  /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
  endo: {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (k) => {
      const n = secp256k1N;
      const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
      const b1 = -_1n5 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
      const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
      const b2 = a1;
      const POW_2_128 = BigInt("0x100000000000000000000000000000000");
      const c1 = divNearest(b2 * k, n);
      const c2 = divNearest(-b1 * k, n);
      let k1 = mod(k - c1 * a1 - c2 * a2, n);
      let k2 = mod(-c1 * b1 - c2 * b2, n);
      const k1neg = k1 > POW_2_128;
      const k2neg = k2 > POW_2_128;
      if (k1neg)
        k1 = n - k1;
      if (k2neg)
        k2 = n - k2;
      if (k1 > POW_2_128 || k2 > POW_2_128) {
        throw new Error("splitScalar: Endomorphism failed, k=" + k);
      }
      return { k1neg, k1, k2neg, k2 };
    }
  }
}, sha256);
var _0n5 = BigInt(0);
var fe = (x) => typeof x === "bigint" && _0n5 < x && x < secp256k1P;
var ge = (x) => typeof x === "bigint" && _0n5 < x && x < secp256k1N;
var TAGGED_HASH_PREFIXES = {};
function taggedHash(tag, ...messages) {
  let tagP = TAGGED_HASH_PREFIXES[tag];
  if (tagP === void 0) {
    const tagH = sha256(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
    tagP = concatBytes2(tagH, tagH);
    TAGGED_HASH_PREFIXES[tag] = tagP;
  }
  return sha256(concatBytes2(tagP, ...messages));
}
var pointToBytes = (point) => point.toRawBytes(true).slice(1);
var numTo32b = (n) => numberToBytesBE(n, 32);
var modP = (x) => mod(x, secp256k1P);
var modN = (x) => mod(x, secp256k1N);
var Point = secp256k1.ProjectivePoint;
var GmulAdd = (Q, a, b) => Point.BASE.multiplyAndAddUnsafe(Q, a, b);
function schnorrGetExtPubKey(priv) {
  let d_ = secp256k1.utils.normPrivateKeyToScalar(priv);
  let p = Point.fromPrivateKey(d_);
  const scalar = p.hasEvenY() ? d_ : modN(-d_);
  return { scalar, bytes: pointToBytes(p) };
}
function lift_x(x) {
  if (!fe(x))
    throw new Error("bad x: need 0 < x < p");
  const xx = modP(x * x);
  const c = modP(xx * x + BigInt(7));
  let y = sqrtMod(c);
  if (y % _2n4 !== _0n5)
    y = modP(-y);
  const p = new Point(x, y, _1n5);
  p.assertValidity();
  return p;
}
function challenge(...args) {
  return modN(bytesToNumberBE(taggedHash("BIP0340/challenge", ...args)));
}
function schnorrGetPublicKey(privateKey) {
  return schnorrGetExtPubKey(privateKey).bytes;
}
function schnorrSign(message, privateKey, auxRand = randomBytes(32)) {
  const m = ensureBytes("message", message);
  const { bytes: px, scalar: d } = schnorrGetExtPubKey(privateKey);
  const a = ensureBytes("auxRand", auxRand, 32);
  const t = numTo32b(d ^ bytesToNumberBE(taggedHash("BIP0340/aux", a)));
  const rand = taggedHash("BIP0340/nonce", t, px, m);
  const k_ = modN(bytesToNumberBE(rand));
  if (k_ === _0n5)
    throw new Error("sign failed: k is zero");
  const { bytes: rx, scalar: k } = schnorrGetExtPubKey(k_);
  const e = challenge(rx, px, m);
  const sig = new Uint8Array(64);
  sig.set(rx, 0);
  sig.set(numTo32b(modN(k + e * d)), 32);
  if (!schnorrVerify(sig, m, px))
    throw new Error("sign: Invalid signature produced");
  return sig;
}
function schnorrVerify(signature, message, publicKey) {
  const sig = ensureBytes("signature", signature, 64);
  const m = ensureBytes("message", message);
  const pub = ensureBytes("publicKey", publicKey, 32);
  try {
    const P = lift_x(bytesToNumberBE(pub));
    const r = bytesToNumberBE(sig.subarray(0, 32));
    if (!fe(r))
      return false;
    const s = bytesToNumberBE(sig.subarray(32, 64));
    if (!ge(s))
      return false;
    const e = challenge(numTo32b(r), pointToBytes(P), m);
    const R = GmulAdd(P, s, modN(-e));
    if (!R || !R.hasEvenY() || R.toAffine().x !== r)
      return false;
    return true;
  } catch (error) {
    return false;
  }
}
var schnorr = (() => ({
  getPublicKey: schnorrGetPublicKey,
  sign: schnorrSign,
  verify: schnorrVerify,
  utils: {
    randomPrivateKey: secp256k1.utils.randomPrivateKey,
    lift_x,
    pointToBytes,
    numberToBytesBE,
    bytesToNumberBE,
    taggedHash,
    mod
  }
}))();
var isoMap = (() => isogenyMap(Fp, [
  // xNum
  [
    "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
    "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
    "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
    "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"
  ],
  // xDen
  [
    "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
    "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
    "0x0000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ],
  // yNum
  [
    "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
    "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
    "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
    "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"
  ],
  // yDen
  [
    "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
    "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
    "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
    "0x0000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ]
].map((i) => i.map((j) => BigInt(j)))))();
var mapSWU = (() => mapToCurveSimpleSWU(Fp, {
  A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
  B: BigInt("1771"),
  Z: Fp.create(BigInt("-11"))
}))();
var htf = (() => createHasher(secp256k1.ProjectivePoint, (scalars) => {
  const { x, y } = mapSWU(Fp.create(scalars[0]));
  return isoMap(x, y);
}, {
  DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
  encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
  p: Fp.ORDER,
  m: 1,
  k: 128,
  expand: "xmd",
  hash: sha256
}))();
var hashToCurve = (() => htf.hashToCurve)();
var encodeToCurve = (() => htf.encodeToCurve)();

// node_modules/web3-eth-accounts/lib/esm/tx/constants.js
var _a;
var secp256k12 = (_a = secp256k1) !== null && _a !== void 0 ? _a : secp256k1_exports;
var MAX_UINT64 = BigInt("0xffffffffffffffff");
var MAX_INTEGER = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
var SECP256K1_ORDER = secp256k12.CURVE.n;
var SECP256K1_ORDER_DIV_2 = SECP256K1_ORDER / BigInt(2);

// node_modules/web3-eth-accounts/lib/esm/schemas.js
var keyStoreSchema = {
  type: "object",
  required: ["crypto", "id", "version", "address"],
  properties: {
    crypto: {
      type: "object",
      required: ["cipher", "ciphertext", "cipherparams", "kdf", "kdfparams", "mac"],
      properties: {
        cipher: { type: "string" },
        ciphertext: { type: "string" },
        cipherparams: { type: "object" },
        kdf: { type: "string" },
        kdfparams: { type: "object" },
        salt: { type: "string" },
        mac: { type: "string" }
      }
    },
    id: { type: "string" },
    version: { type: "number" },
    address: { type: "string" }
  }
};

// node_modules/web3-eth-accounts/lib/esm/common/enums.js
var Chain;
(function(Chain2) {
  Chain2[Chain2["Mainnet"] = 1] = "Mainnet";
  Chain2[Chain2["Goerli"] = 5] = "Goerli";
  Chain2[Chain2["Sepolia"] = 11155111] = "Sepolia";
})(Chain || (Chain = {}));
var Hardfork;
(function(Hardfork2) {
  Hardfork2["Chainstart"] = "chainstart";
  Hardfork2["Homestead"] = "homestead";
  Hardfork2["Dao"] = "dao";
  Hardfork2["TangerineWhistle"] = "tangerineWhistle";
  Hardfork2["SpuriousDragon"] = "spuriousDragon";
  Hardfork2["Byzantium"] = "byzantium";
  Hardfork2["Constantinople"] = "constantinople";
  Hardfork2["Petersburg"] = "petersburg";
  Hardfork2["Istanbul"] = "istanbul";
  Hardfork2["MuirGlacier"] = "muirGlacier";
  Hardfork2["Berlin"] = "berlin";
  Hardfork2["London"] = "london";
  Hardfork2["ArrowGlacier"] = "arrowGlacier";
  Hardfork2["GrayGlacier"] = "grayGlacier";
  Hardfork2["MergeForkIdTransition"] = "mergeForkIdTransition";
  Hardfork2["Merge"] = "merge";
  Hardfork2["Shanghai"] = "shanghai";
  Hardfork2["ShardingForkDev"] = "shardingFork";
})(Hardfork || (Hardfork = {}));
var ConsensusType;
(function(ConsensusType2) {
  ConsensusType2["ProofOfStake"] = "pos";
  ConsensusType2["ProofOfWork"] = "pow";
  ConsensusType2["ProofOfAuthority"] = "poa";
})(ConsensusType || (ConsensusType = {}));
var ConsensusAlgorithm;
(function(ConsensusAlgorithm2) {
  ConsensusAlgorithm2["Ethash"] = "ethash";
  ConsensusAlgorithm2["Clique"] = "clique";
  ConsensusAlgorithm2["Casper"] = "casper";
})(ConsensusAlgorithm || (ConsensusAlgorithm = {}));
var CustomChain;
(function(CustomChain2) {
  CustomChain2["PolygonMainnet"] = "polygon-mainnet";
  CustomChain2["PolygonMumbai"] = "polygon-mumbai";
  CustomChain2["ArbitrumRinkebyTestnet"] = "arbitrum-rinkeby-testnet";
  CustomChain2["ArbitrumOne"] = "arbitrum-one";
  CustomChain2["xDaiChain"] = "x-dai-chain";
  CustomChain2["OptimisticKovan"] = "optimistic-kovan";
  CustomChain2["OptimisticEthereum"] = "optimistic-ethereum";
})(CustomChain || (CustomChain = {}));

// node_modules/web3-eth-accounts/lib/esm/common/types.js
var TypeOutput;
(function(TypeOutput2) {
  TypeOutput2[TypeOutput2["Number"] = 0] = "Number";
  TypeOutput2[TypeOutput2["BigInt"] = 1] = "BigInt";
  TypeOutput2[TypeOutput2["Uint8Array"] = 2] = "Uint8Array";
  TypeOutput2[TypeOutput2["PrefixedHexString"] = 3] = "PrefixedHexString";
})(TypeOutput || (TypeOutput = {}));

// node_modules/web3-eth-accounts/lib/esm/common/utils.js
var stripHexPrefix = (str) => {
  if (typeof str !== "string")
    throw new Error(`[stripHexPrefix] input must be type 'string', received ${typeof str}`);
  return isHexPrefixed(str) ? str.slice(2) : str;
};
function formatNonce(nonce) {
  if (!nonce || nonce === "0x0") {
    return "0x0000000000000000";
  }
  if (isHexPrefixed(nonce)) {
    return `0x${stripHexPrefix(nonce).padStart(16, "0")}`;
  }
  return `0x${nonce.padStart(16, "0")}`;
}
var intToHex = function(i) {
  if (!Number.isSafeInteger(i) || i < 0) {
    throw new Error(`Received an invalid integer type: ${i}`);
  }
  return `0x${i.toString(16)}`;
};
function parseGethParams(json, mergeForkIdPostMerge = true) {
  var _a3, _b;
  const { name: name2, config, difficulty, mixHash, gasLimit, coinbase, baseFeePerGas } = json;
  let { extraData, timestamp, nonce } = json;
  const genesisTimestamp = Number(timestamp);
  const { chainId } = config;
  if (extraData === "") {
    extraData = "0x";
  }
  if (!isHexPrefixed(timestamp)) {
    timestamp = intToHex(parseInt(timestamp));
  }
  if (nonce.length !== 18) {
    nonce = formatNonce(nonce);
  }
  if (config.eip155Block !== config.eip158Block) {
    throw new Error("EIP155 block number must equal EIP 158 block number since both are part of SpuriousDragon hardfork and the client only supports activating the full hardfork");
  }
  const params = {
    name: name2,
    chainId,
    networkId: chainId,
    genesis: {
      timestamp,
      // eslint-disable-next-line radix
      gasLimit: parseInt(gasLimit),
      // geth gasLimit and difficulty are hex strings while ours are `number`s
      // eslint-disable-next-line radix
      difficulty: parseInt(difficulty),
      nonce,
      extraData,
      mixHash,
      coinbase,
      baseFeePerGas
    },
    hardfork: void 0,
    hardforks: [],
    bootstrapNodes: [],
    consensus: (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      config.clique !== void 0 ? {
        type: "poa",
        algorithm: "clique",
        clique: {
          // The recent geth genesis seems to be using blockperiodseconds
          // and epochlength for clique specification
          // see: https://hackmd.io/PqZgMpnkSWCWv5joJoFymQ
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
          period: (_a3 = config.clique.period) !== null && _a3 !== void 0 ? _a3 : config.clique.blockperiodseconds,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,  @typescript-eslint/no-unsafe-assignment
          epoch: (_b = config.clique.epoch) !== null && _b !== void 0 ? _b : config.clique.epochlength
        }
      } : {
        type: "pow",
        algorithm: "ethash",
        ethash: {}
      }
    )
  };
  const forkMap = {
    [Hardfork.Homestead]: { name: "homesteadBlock" },
    [Hardfork.Dao]: { name: "daoForkBlock" },
    [Hardfork.TangerineWhistle]: { name: "eip150Block" },
    [Hardfork.SpuriousDragon]: { name: "eip155Block" },
    [Hardfork.Byzantium]: { name: "byzantiumBlock" },
    [Hardfork.Constantinople]: { name: "constantinopleBlock" },
    [Hardfork.Petersburg]: { name: "petersburgBlock" },
    [Hardfork.Istanbul]: { name: "istanbulBlock" },
    [Hardfork.MuirGlacier]: { name: "muirGlacierBlock" },
    [Hardfork.Berlin]: { name: "berlinBlock" },
    [Hardfork.London]: { name: "londonBlock" },
    [Hardfork.MergeForkIdTransition]: {
      name: "mergeForkBlock",
      postMerge: mergeForkIdPostMerge
    },
    [Hardfork.Shanghai]: { name: "shanghaiTime", postMerge: true, isTimestamp: true },
    [Hardfork.ShardingForkDev]: {
      name: "shardingForkTime",
      postMerge: true,
      isTimestamp: true
    }
  };
  const forkMapRev = Object.keys(forkMap).reduce((acc, elem) => {
    acc[forkMap[elem].name] = elem;
    return acc;
  }, {});
  const configHardforkNames = Object.keys(config).filter(
    // eslint-disable-next-line no-null/no-null, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/prefer-optional-chain
    (key) => forkMapRev[key] !== void 0 && config[key] !== void 0 && config[key] !== null
  );
  params.hardforks = configHardforkNames.map((nameBlock) => ({
    name: forkMapRev[nameBlock],
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    block: (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      forkMap[forkMapRev[nameBlock]].isTimestamp === true || // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      typeof config[nameBlock] !== "number" ? (
        // eslint-disable-next-line no-null/no-null
        null
      ) : (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        config[nameBlock]
      )
    ),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    timestamp: (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      forkMap[forkMapRev[nameBlock]].isTimestamp === true && // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      typeof config[nameBlock] === "number" ? (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        config[nameBlock]
      ) : void 0
    )
  })).filter((fork) => fork.block !== null || fork.timestamp !== void 0);
  params.hardforks.sort((a, b) => {
    var _a4, _b2;
    return ((_a4 = a.block) !== null && _a4 !== void 0 ? _a4 : Infinity) - ((_b2 = b.block) !== null && _b2 !== void 0 ? _b2 : Infinity);
  });
  params.hardforks.sort((a, b) => {
    var _a4, _b2;
    return ((_a4 = a.timestamp) !== null && _a4 !== void 0 ? _a4 : genesisTimestamp) - ((_b2 = b.timestamp) !== null && _b2 !== void 0 ? _b2 : genesisTimestamp);
  });
  if (config.terminalTotalDifficulty !== void 0) {
    const mergeConfig = {
      name: Hardfork.Merge,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
      ttd: config.terminalTotalDifficulty,
      // eslint-disable-next-line no-null/no-null
      block: null
    };
    const postMergeIndex = params.hardforks.findIndex(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      (hf) => {
        var _a4;
        return ((_a4 = forkMap[hf.name]) === null || _a4 === void 0 ? void 0 : _a4.postMerge) === true;
      }
    );
    if (postMergeIndex !== -1) {
      params.hardforks.splice(postMergeIndex, 0, mergeConfig);
    } else {
      params.hardforks.push(mergeConfig);
    }
  }
  const latestHardfork = params.hardforks.length > 0 ? params.hardforks.slice(-1)[0] : void 0;
  params.hardfork = latestHardfork === null || latestHardfork === void 0 ? void 0 : latestHardfork.name;
  params.hardforks.unshift({ name: Hardfork.Chainstart, block: 0 });
  return params;
}
function parseGethGenesis(json, name2, mergeForkIdPostMerge) {
  try {
    if (["config", "difficulty", "gasLimit", "alloc"].some((field) => !(field in json))) {
      throw new Error("Invalid format, expected geth genesis fields missing");
    }
    if (name2 !== void 0) {
      json.name = name2;
    }
    return parseGethParams(json, mergeForkIdPostMerge);
  } catch (e) {
    throw new Error(`Error parsing parameters file: ${e.message}`);
  }
}
function padToEven(value) {
  let a = value;
  if (typeof a !== "string") {
    throw new Error(`[padToEven] value must be type 'string', received ${typeof a}`);
  }
  if (a.length % 2)
    a = `0${a}`;
  return a;
}
var intToUint8Array = function(i) {
  const hex = intToHex(i);
  return hexToBytes(`0x${padToEven(hex.slice(2))}`);
};
var toUint8Array = function(v) {
  var _a3;
  if (v === null || v === void 0) {
    return new Uint8Array();
  }
  if (v instanceof Uint8Array) {
    return v;
  }
  if (((_a3 = v === null || v === void 0 ? void 0 : v.constructor) === null || _a3 === void 0 ? void 0 : _a3.name) === "Uint8Array") {
    return Uint8Array.from(v);
  }
  if (Array.isArray(v)) {
    return Uint8Array.from(v);
  }
  if (typeof v === "string") {
    if (!isHexString(v)) {
      throw new Error(`Cannot convert string to Uint8Array. only supports 0x-prefixed hex strings and this string was given: ${v}`);
    }
    return hexToBytes(padToEven(stripHexPrefix(v)));
  }
  if (typeof v === "number") {
    return toUint8Array(numberToHex(v));
  }
  if (typeof v === "bigint") {
    if (v < BigInt(0)) {
      throw new Error(`Cannot convert negative bigint to Uint8Array. Given: ${v}`);
    }
    let n = v.toString(16);
    if (n.length % 2)
      n = `0${n}`;
    return toUint8Array(`0x${n}`);
  }
  if (v.toArray) {
    return Uint8Array.from(v.toArray());
  }
  throw new Error("invalid type");
};
function uint8ArrayToBigInt(buf) {
  const hex = bytesToHex(buf);
  if (hex === "0x") {
    return BigInt(0);
  }
  return BigInt(hex);
}
function bigIntToUint8Array(num) {
  return toUint8Array(`0x${num.toString(16)}`);
}
var zeros = function(bytes2) {
  return new Uint8Array(bytes2).fill(0);
};
var setLength = function(msg, length, right) {
  const buf = zeros(length);
  if (right) {
    if (msg.length < length) {
      buf.set(msg);
      return buf;
    }
    return msg.subarray(0, length);
  }
  if (msg.length < length) {
    buf.set(msg, length - msg.length);
    return buf;
  }
  return msg.subarray(-length);
};
function assertIsUint8Array(input) {
  if (!isUint8Array(input)) {
    const msg = `This method only supports Uint8Array but input was: ${input}`;
    throw new Error(msg);
  }
}
var setLengthLeft = function(msg, length) {
  assertIsUint8Array(msg);
  return setLength(msg, length, false);
};
function stripZeros(a) {
  let first = a[0];
  while (a.length > 0 && first.toString() === "0") {
    a = a.slice(1);
    first = a[0];
  }
  return a;
}
var unpadUint8Array = function(a) {
  assertIsUint8Array(a);
  return stripZeros(a);
};
var bigIntToHex = (num) => `0x${num.toString(16)}`;
function bigIntToUnpaddedUint8Array(value) {
  return unpadUint8Array(bigIntToUint8Array(value));
}
function calculateSigRecovery(v, chainId) {
  if (v === BigInt(0) || v === BigInt(1))
    return v;
  if (chainId === void 0) {
    return v - BigInt(27);
  }
  return v - (chainId * BigInt(2) + BigInt(35));
}
function isValidSigRecovery(recovery) {
  return recovery === BigInt(0) || recovery === BigInt(1);
}
var ecrecover = function(msgHash, v, r, s, chainId) {
  const recovery = calculateSigRecovery(v, chainId);
  if (!isValidSigRecovery(recovery)) {
    throw new Error("Invalid signature v value");
  }
  const senderPubKey = new secp256k12.Signature(uint8ArrayToBigInt(r), uint8ArrayToBigInt(s)).addRecoveryBit(Number(recovery)).recoverPublicKey(msgHash).toRawBytes(false);
  return senderPubKey.slice(1);
};
function toType(input, outputType) {
  if (input === null) {
    return null;
  }
  if (input === void 0) {
    return void 0;
  }
  if (typeof input === "string" && !isHexString(input)) {
    throw new Error(`A string must be provided with a 0x-prefix, given: ${input}`);
  } else if (typeof input === "number" && !Number.isSafeInteger(input)) {
    throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");
  }
  const output2 = toUint8Array(input);
  switch (outputType) {
    case TypeOutput.Uint8Array:
      return output2;
    case TypeOutput.BigInt:
      return uint8ArrayToBigInt(output2);
    case TypeOutput.Number: {
      const bigInt = uint8ArrayToBigInt(output2);
      if (bigInt > BigInt(Number.MAX_SAFE_INTEGER)) {
        throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)");
      }
      return Number(bigInt);
    }
    case TypeOutput.PrefixedHexString:
      return bytesToHex(output2);
    default:
      throw new Error("unknown outputType");
  }
}

// node_modules/web3-eth-accounts/lib/esm/tx/eip1559Transaction.js
var import_rlp = __toESM(require_dist(), 1);

// node_modules/web3-eth-accounts/lib/esm/common/common.js
var import_crc_32 = __toESM(require_crc32(), 1);

// node_modules/web3-eth-accounts/lib/esm/common/chains/goerli.js
var goerli_default = {
  name: "goerli",
  chainId: 5,
  networkId: 5,
  defaultHardfork: "merge",
  consensus: {
    type: "poa",
    algorithm: "clique",
    clique: {
      period: 15,
      epoch: 3e4
    }
  },
  comment: "Cross-client PoA test network",
  url: "https://github.com/goerli/testnet",
  genesis: {
    timestamp: "0x5c51a607",
    gasLimit: 10485760,
    difficulty: 1,
    nonce: "0x0000000000000000",
    extraData: "0x22466c6578692069732061207468696e6722202d204166726900000000000000e0a2bd4258d2768837baa26a28fe71dc079f84c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  },
  hardforks: [
    {
      name: "chainstart",
      block: 0,
      forkHash: "0xa3f5ab08"
    },
    {
      name: "homestead",
      block: 0,
      forkHash: "0xa3f5ab08"
    },
    {
      name: "tangerineWhistle",
      block: 0,
      forkHash: "0xa3f5ab08"
    },
    {
      name: "spuriousDragon",
      block: 0,
      forkHash: "0xa3f5ab08"
    },
    {
      name: "byzantium",
      block: 0,
      forkHash: "0xa3f5ab08"
    },
    {
      name: "constantinople",
      block: 0,
      forkHash: "0xa3f5ab08"
    },
    {
      name: "petersburg",
      block: 0,
      forkHash: "0xa3f5ab08"
    },
    {
      name: "istanbul",
      block: 1561651,
      forkHash: "0xc25efa5c"
    },
    {
      name: "berlin",
      block: 4460644,
      forkHash: "0x757a1c47"
    },
    {
      name: "london",
      block: 5062605,
      forkHash: "0xb8c6299d"
    },
    {
      "//_comment": "The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://goerli.etherscan.io/block/7382818",
      name: "merge",
      ttd: "10790000",
      block: 7382819,
      forkHash: "0xb8c6299d"
    },
    {
      name: "mergeForkIdTransition",
      block: null,
      forkHash: null
    },
    {
      name: "shanghai",
      block: null,
      forkHash: null
    }
  ],
  bootstrapNodes: [],
  dnsNetworks: [
    "enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.goerli.ethdisco.net"
  ]
};

// node_modules/web3-eth-accounts/lib/esm/common/chains/mainnet.js
var mainnet_default = {
  name: "mainnet",
  chainId: 1,
  networkId: 1,
  defaultHardfork: "merge",
  consensus: {
    type: "pow",
    algorithm: "ethash",
    ethash: {}
  },
  comment: "The Ethereum main chain",
  url: "https://ethstats.net/",
  genesis: {
    gasLimit: 5e3,
    difficulty: 17179869184,
    nonce: "0x0000000000000042",
    extraData: "0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa"
  },
  hardforks: [
    {
      name: "chainstart",
      block: 0,
      forkHash: "0xfc64ec04"
    },
    {
      name: "homestead",
      block: 115e4,
      forkHash: "0x97c2c34c"
    },
    {
      name: "dao",
      block: 192e4,
      forkHash: "0x91d1f948"
    },
    {
      name: "tangerineWhistle",
      block: 2463e3,
      forkHash: "0x7a64da13"
    },
    {
      name: "spuriousDragon",
      block: 2675e3,
      forkHash: "0x3edd5b10"
    },
    {
      name: "byzantium",
      block: 437e4,
      forkHash: "0xa00bc324"
    },
    {
      name: "constantinople",
      block: 728e4,
      forkHash: "0x668db0af"
    },
    {
      name: "petersburg",
      block: 728e4,
      forkHash: "0x668db0af"
    },
    {
      name: "istanbul",
      block: 9069e3,
      forkHash: "0x879d6e30"
    },
    {
      name: "muirGlacier",
      block: 92e5,
      forkHash: "0xe029e991"
    },
    {
      name: "berlin",
      block: 12244e3,
      forkHash: "0x0eb440f6"
    },
    {
      name: "london",
      block: 12965e3,
      forkHash: "0xb715077d"
    },
    {
      name: "arrowGlacier",
      block: 13773e3,
      forkHash: "0x20c327fc"
    },
    {
      name: "grayGlacier",
      block: 1505e4,
      forkHash: "0xf0afd0e3"
    },
    {
      "//_comment": "The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://etherscan.io/block/15537393",
      name: "merge",
      ttd: "58750000000000000000000",
      block: 15537394,
      forkHash: "0xf0afd0e3"
    },
    {
      name: "mergeForkIdTransition",
      block: null,
      forkHash: null
    },
    {
      name: "shanghai",
      block: null,
      forkHash: null
    }
  ],
  bootstrapNodes: [],
  dnsNetworks: [
    "enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.mainnet.ethdisco.net"
  ]
};

// node_modules/web3-eth-accounts/lib/esm/common/chains/sepolia.js
var sepolia_default = {
  name: "sepolia",
  chainId: 11155111,
  networkId: 11155111,
  defaultHardfork: "merge",
  consensus: {
    type: "pow",
    algorithm: "ethash",
    ethash: {}
  },
  comment: "PoW test network to replace Ropsten",
  url: "https://github.com/ethereum/go-ethereum/pull/23730",
  genesis: {
    timestamp: "0x6159af19",
    gasLimit: 3e7,
    difficulty: 131072,
    nonce: "0x0000000000000000",
    extraData: "0x5365706f6c69612c20417468656e732c204174746963612c2047726565636521"
  },
  hardforks: [
    {
      name: "chainstart",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      name: "homestead",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      name: "tangerineWhistle",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      name: "spuriousDragon",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      name: "byzantium",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      name: "constantinople",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      name: "petersburg",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      name: "istanbul",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      name: "muirGlacier",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      name: "berlin",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      name: "london",
      block: 0,
      forkHash: "0xfe3366e7"
    },
    {
      "//_comment": "The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://sepolia.etherscan.io/block/1450408",
      name: "merge",
      ttd: "17000000000000000",
      block: 1450409,
      forkHash: "0xfe3366e7"
    },
    {
      name: "mergeForkIdTransition",
      block: 1735371,
      forkHash: "0xb96cbd13"
    },
    {
      name: "shanghai",
      block: null,
      timestamp: "1677557088",
      forkHash: "0xf7f9bc08"
    }
  ],
  bootstrapNodes: [],
  dnsNetworks: [
    "enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.sepolia.ethdisco.net"
  ]
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/1153.js
var __default = {
  name: "EIP-1153",
  number: 1153,
  comment: "Transient Storage",
  url: "https://eips.ethereum.org/EIPS/eip-1153",
  status: "Review",
  minimumHardfork: "chainstart",
  requiredEIPs: [],
  gasConfig: {},
  gasPrices: {
    tstore: {
      v: 100,
      d: "Base fee of the TSTORE opcode"
    },
    tload: {
      v: 100,
      d: "Base fee of the TLOAD opcode"
    }
  },
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/1559.js
var __default2 = {
  name: "EIP-1559",
  number: 1559,
  comment: "Fee market change for ETH 1.0 chain",
  url: "https://eips.ethereum.org/EIPS/eip-1559",
  status: "Final",
  minimumHardfork: "berlin",
  requiredEIPs: [2930],
  gasConfig: {
    baseFeeMaxChangeDenominator: {
      v: 8,
      d: "Maximum base fee change denominator"
    },
    elasticityMultiplier: {
      v: 2,
      d: "Maximum block gas target elasticity"
    },
    initialBaseFee: {
      v: 1e9,
      d: "Initial base fee on first EIP1559 block"
    }
  },
  gasPrices: {},
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/2315.js
var __default3 = {
  name: "EIP-2315",
  number: 2315,
  comment: "Simple subroutines for the EVM",
  url: "https://eips.ethereum.org/EIPS/eip-2315",
  status: "Draft",
  minimumHardfork: "istanbul",
  gasConfig: {},
  gasPrices: {
    beginsub: {
      v: 2,
      d: "Base fee of the BEGINSUB opcode"
    },
    returnsub: {
      v: 5,
      d: "Base fee of the RETURNSUB opcode"
    },
    jumpsub: {
      v: 10,
      d: "Base fee of the JUMPSUB opcode"
    }
  },
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/2537.js
var __default4 = {
  name: "EIP-2537",
  number: 2537,
  comment: "BLS12-381 precompiles",
  url: "https://eips.ethereum.org/EIPS/eip-2537",
  status: "Draft",
  minimumHardfork: "chainstart",
  gasConfig: {},
  gasPrices: {
    Bls12381G1AddGas: {
      v: 600,
      d: "Gas cost of a single BLS12-381 G1 addition precompile-call"
    },
    Bls12381G1MulGas: {
      v: 12e3,
      d: "Gas cost of a single BLS12-381 G1 multiplication precompile-call"
    },
    Bls12381G2AddGas: {
      v: 4500,
      d: "Gas cost of a single BLS12-381 G2 addition precompile-call"
    },
    Bls12381G2MulGas: {
      v: 55e3,
      d: "Gas cost of a single BLS12-381 G2 multiplication precompile-call"
    },
    Bls12381PairingBaseGas: {
      v: 115e3,
      d: "Base gas cost of BLS12-381 pairing check"
    },
    Bls12381PairingPerPairGas: {
      v: 23e3,
      d: "Per-pair gas cost of BLS12-381 pairing check"
    },
    Bls12381MapG1Gas: {
      v: 5500,
      d: "Gas cost of BLS12-381 map field element to G1"
    },
    Bls12381MapG2Gas: {
      v: 11e4,
      d: "Gas cost of BLS12-381 map field element to G2"
    },
    Bls12381MultiExpGasDiscount: {
      v: [
        [1, 1200],
        [2, 888],
        [3, 764],
        [4, 641],
        [5, 594],
        [6, 547],
        [7, 500],
        [8, 453],
        [9, 438],
        [10, 423],
        [11, 408],
        [12, 394],
        [13, 379],
        [14, 364],
        [15, 349],
        [16, 334],
        [17, 330],
        [18, 326],
        [19, 322],
        [20, 318],
        [21, 314],
        [22, 310],
        [23, 306],
        [24, 302],
        [25, 298],
        [26, 294],
        [27, 289],
        [28, 285],
        [29, 281],
        [30, 277],
        [31, 273],
        [32, 269],
        [33, 268],
        [34, 266],
        [35, 265],
        [36, 263],
        [37, 262],
        [38, 260],
        [39, 259],
        [40, 257],
        [41, 256],
        [42, 254],
        [43, 253],
        [44, 251],
        [45, 250],
        [46, 248],
        [47, 247],
        [48, 245],
        [49, 244],
        [50, 242],
        [51, 241],
        [52, 239],
        [53, 238],
        [54, 236],
        [55, 235],
        [56, 233],
        [57, 232],
        [58, 231],
        [59, 229],
        [60, 228],
        [61, 226],
        [62, 225],
        [63, 223],
        [64, 222],
        [65, 221],
        [66, 220],
        [67, 219],
        [68, 219],
        [69, 218],
        [70, 217],
        [71, 216],
        [72, 216],
        [73, 215],
        [74, 214],
        [75, 213],
        [76, 213],
        [77, 212],
        [78, 211],
        [79, 211],
        [80, 210],
        [81, 209],
        [82, 208],
        [83, 208],
        [84, 207],
        [85, 206],
        [86, 205],
        [87, 205],
        [88, 204],
        [89, 203],
        [90, 202],
        [91, 202],
        [92, 201],
        [93, 200],
        [94, 199],
        [95, 199],
        [96, 198],
        [97, 197],
        [98, 196],
        [99, 196],
        [100, 195],
        [101, 194],
        [102, 193],
        [103, 193],
        [104, 192],
        [105, 191],
        [106, 191],
        [107, 190],
        [108, 189],
        [109, 188],
        [110, 188],
        [111, 187],
        [112, 186],
        [113, 185],
        [114, 185],
        [115, 184],
        [116, 183],
        [117, 182],
        [118, 182],
        [119, 181],
        [120, 180],
        [121, 179],
        [122, 179],
        [123, 178],
        [124, 177],
        [125, 176],
        [126, 176],
        [127, 175],
        [128, 174]
      ],
      d: "Discount gas costs of calls to the MultiExp precompiles with `k` (point, scalar) pair"
    }
  },
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/2565.js
var __default5 = {
  name: "EIP-2565",
  number: 2565,
  comment: "ModExp gas cost",
  url: "https://eips.ethereum.org/EIPS/eip-2565",
  status: "Final",
  minimumHardfork: "byzantium",
  gasConfig: {},
  gasPrices: {
    modexpGquaddivisor: {
      v: 3,
      d: "Gquaddivisor from modexp precompile for gas calculation"
    }
  },
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/2718.js
var __default6 = {
  name: "EIP-2718",
  comment: "Typed Transaction Envelope",
  url: "https://eips.ethereum.org/EIPS/eip-2718",
  status: "Final",
  minimumHardfork: "chainstart",
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/2929.js
var __default7 = {
  name: "EIP-2929",
  comment: "Gas cost increases for state access opcodes",
  url: "https://eips.ethereum.org/EIPS/eip-2929",
  status: "Final",
  minimumHardfork: "chainstart",
  gasConfig: {},
  gasPrices: {
    coldsload: {
      v: 2100,
      d: "Gas cost of the first read of storage from a given location (per transaction)"
    },
    coldaccountaccess: {
      v: 2600,
      d: "Gas cost of the first read of a given address (per transaction)"
    },
    warmstorageread: {
      v: 100,
      d: "Gas cost of reading storage locations which have already loaded 'cold'"
    },
    sstoreCleanGasEIP2200: {
      v: 2900,
      d: "Once per SSTORE operation from clean non-zero to something else"
    },
    sstoreNoopGasEIP2200: {
      v: 100,
      d: "Once per SSTORE operation if the value doesn't change"
    },
    sstoreDirtyGasEIP2200: {
      v: 100,
      d: "Once per SSTORE operation if a dirty value is changed"
    },
    sstoreInitRefundEIP2200: {
      v: 19900,
      d: "Once per SSTORE operation for resetting to the original zero value"
    },
    sstoreCleanRefundEIP2200: {
      v: 4900,
      d: "Once per SSTORE operation for resetting to the original non-zero value"
    },
    call: {
      v: 0,
      d: "Base fee of the CALL opcode"
    },
    callcode: {
      v: 0,
      d: "Base fee of the CALLCODE opcode"
    },
    delegatecall: {
      v: 0,
      d: "Base fee of the DELEGATECALL opcode"
    },
    staticcall: {
      v: 0,
      d: "Base fee of the STATICCALL opcode"
    },
    balance: {
      v: 0,
      d: "Base fee of the BALANCE opcode"
    },
    extcodesize: {
      v: 0,
      d: "Base fee of the EXTCODESIZE opcode"
    },
    extcodecopy: {
      v: 0,
      d: "Base fee of the EXTCODECOPY opcode"
    },
    extcodehash: {
      v: 0,
      d: "Base fee of the EXTCODEHASH opcode"
    },
    sload: {
      v: 0,
      d: "Base fee of the SLOAD opcode"
    },
    sstore: {
      v: 0,
      d: "Base fee of the SSTORE opcode"
    }
  },
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/2930.js
var __default8 = {
  name: "EIP-2930",
  comment: "Optional access lists",
  url: "https://eips.ethereum.org/EIPS/eip-2930",
  status: "Final",
  minimumHardfork: "istanbul",
  requiredEIPs: [2718, 2929],
  gasConfig: {},
  gasPrices: {
    accessListStorageKeyCost: {
      v: 1900,
      d: "Gas cost per storage key in an Access List transaction"
    },
    accessListAddressCost: {
      v: 2400,
      d: "Gas cost per storage key in an Access List transaction"
    }
  },
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/3198.js
var __default9 = {
  name: "EIP-3198",
  number: 3198,
  comment: "BASEFEE opcode",
  url: "https://eips.ethereum.org/EIPS/eip-3198",
  status: "Final",
  minimumHardfork: "london",
  gasConfig: {},
  gasPrices: {
    basefee: {
      v: 2,
      d: "Gas cost of the BASEFEE opcode"
    }
  },
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/3529.js
var __default10 = {
  name: "EIP-3529",
  comment: "Reduction in refunds",
  url: "https://eips.ethereum.org/EIPS/eip-3529",
  status: "Final",
  minimumHardfork: "berlin",
  requiredEIPs: [2929],
  gasConfig: {
    maxRefundQuotient: {
      v: 5,
      d: "Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"
    }
  },
  gasPrices: {
    selfdestructRefund: {
      v: 0,
      d: "Refunded following a selfdestruct operation"
    },
    sstoreClearRefundEIP2200: {
      v: 4800,
      d: "Once per SSTORE operation for clearing an originally existing storage slot"
    }
  },
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/3540.js
var __default11 = {
  name: "EIP-3540",
  number: 3540,
  comment: "EVM Object Format (EOF) v1",
  url: "https://eips.ethereum.org/EIPS/eip-3540",
  status: "Review",
  minimumHardfork: "london",
  requiredEIPs: [3541],
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/3541.js
var __default12 = {
  name: "EIP-3541",
  comment: "Reject new contracts starting with the 0xEF byte",
  url: "https://eips.ethereum.org/EIPS/eip-3541",
  status: "Final",
  minimumHardfork: "berlin",
  requiredEIPs: [],
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/3554.js
var __default13 = {
  name: "EIP-3554",
  comment: "Reduction in refunds",
  url: "Difficulty Bomb Delay to December 1st 2021",
  status: "Final",
  minimumHardfork: "muirGlacier",
  requiredEIPs: [],
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {
    difficultyBombDelay: {
      v: 95e5,
      d: "the amount of blocks to delay the difficulty bomb with"
    }
  }
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/3607.js
var __default14 = {
  name: "EIP-3607",
  number: 3607,
  comment: "Reject transactions from senders with deployed code",
  url: "https://eips.ethereum.org/EIPS/eip-3607",
  status: "Final",
  minimumHardfork: "chainstart",
  requiredEIPs: [],
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/3651.js
var __default15 = {
  name: "EIP-3651",
  number: 3198,
  comment: "Warm COINBASE",
  url: "https://eips.ethereum.org/EIPS/eip-3651",
  status: "Review",
  minimumHardfork: "london",
  requiredEIPs: [2929],
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/3670.js
var __default16 = {
  name: "EIP-3670",
  number: 3670,
  comment: "EOF - Code Validation",
  url: "https://eips.ethereum.org/EIPS/eip-3670",
  status: "Review",
  minimumHardfork: "london",
  requiredEIPs: [3540],
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/3675.js
var __default17 = {
  name: "EIP-3675",
  number: 3675,
  comment: "Upgrade consensus to Proof-of-Stake",
  url: "https://eips.ethereum.org/EIPS/eip-3675",
  status: "Final",
  minimumHardfork: "london",
  requiredEIPs: [],
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/3855.js
var __default18 = {
  name: "EIP-3855",
  number: 3855,
  comment: "PUSH0 instruction",
  url: "https://eips.ethereum.org/EIPS/eip-3855",
  status: "Review",
  minimumHardfork: "chainstart",
  requiredEIPs: [],
  gasConfig: {},
  gasPrices: {
    push0: {
      v: 2,
      d: "Base fee of the PUSH0 opcode"
    }
  },
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/3860.js
var __default19 = {
  name: "EIP-3860",
  number: 3860,
  comment: "Limit and meter initcode",
  url: "https://eips.ethereum.org/EIPS/eip-3860",
  status: "Review",
  minimumHardfork: "spuriousDragon",
  requiredEIPs: [],
  gasConfig: {},
  gasPrices: {
    initCodeWordCost: {
      v: 2,
      d: "Gas to pay for each word (32 bytes) of initcode when creating a contract"
    }
  },
  vm: {
    maxInitCodeSize: {
      v: 49152,
      d: "Maximum length of initialization code when creating a contract"
    }
  },
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/4345.js
var __default20 = {
  name: "EIP-4345",
  number: 4345,
  comment: "Difficulty Bomb Delay to June 2022",
  url: "https://eips.ethereum.org/EIPS/eip-4345",
  status: "Final",
  minimumHardfork: "london",
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {
    difficultyBombDelay: {
      v: 107e5,
      d: "the amount of blocks to delay the difficulty bomb with"
    }
  }
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/4399.js
var __default21 = {
  name: "EIP-4399",
  number: 4399,
  comment: "Supplant DIFFICULTY opcode with PREVRANDAO",
  url: "https://eips.ethereum.org/EIPS/eip-4399",
  status: "Review",
  minimumHardfork: "london",
  requiredEIPs: [],
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/5133.js
var __default22 = {
  name: "EIP-5133",
  number: 5133,
  comment: "Delaying Difficulty Bomb to mid-September 2022",
  url: "https://eips.ethereum.org/EIPS/eip-5133",
  status: "Draft",
  minimumHardfork: "grayGlacier",
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {
    difficultyBombDelay: {
      v: 114e5,
      d: "the amount of blocks to delay the difficulty bomb with"
    }
  }
};

// node_modules/web3-eth-accounts/lib/esm/common/eips/index.js
var EIPs = {
  1153: __default,
  1559: __default2,
  2315: __default3,
  2537: __default4,
  2565: __default5,
  2718: __default6,
  2929: __default7,
  2930: __default8,
  3198: __default9,
  3529: __default10,
  3540: __default11,
  3541: __default12,
  3554: __default13,
  3607: __default14,
  3651: __default15,
  3670: __default16,
  3675: __default17,
  3855: __default18,
  3860: __default19,
  4345: __default20,
  4399: __default21,
  5133: __default22
};

// node_modules/web3-eth-accounts/lib/esm/common/hardforks/chainstart.js
var chainstart_default = {
  name: "chainstart",
  comment: "Start of the Ethereum main chain",
  url: "",
  status: "",
  gasConfig: {
    minGasLimit: {
      v: 5e3,
      d: "Minimum the gas limit may ever be"
    },
    gasLimitBoundDivisor: {
      v: 1024,
      d: "The bound divisor of the gas limit, used in update calculations"
    },
    maxRefundQuotient: {
      v: 2,
      d: "Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"
    }
  },
  gasPrices: {
    base: {
      v: 2,
      d: "Gas base cost, used e.g. for ChainID opcode (Istanbul)"
    },
    tierStep: {
      v: [0, 2, 3, 5, 8, 10, 20],
      d: "Once per operation, for a selection of them"
    },
    exp: {
      v: 10,
      d: "Base fee of the EXP opcode"
    },
    expByte: {
      v: 10,
      d: "Times ceil(log256(exponent)) for the EXP instruction"
    },
    sha3: {
      v: 30,
      d: "Base fee of the SHA3 opcode"
    },
    sha3Word: {
      v: 6,
      d: "Once per word of the SHA3 operation's data"
    },
    sload: {
      v: 50,
      d: "Base fee of the SLOAD opcode"
    },
    sstoreSet: {
      v: 2e4,
      d: "Once per SSTORE operation if the zeroness changes from zero"
    },
    sstoreReset: {
      v: 5e3,
      d: "Once per SSTORE operation if the zeroness does not change from zero"
    },
    sstoreRefund: {
      v: 15e3,
      d: "Once per SSTORE operation if the zeroness changes to zero"
    },
    jumpdest: {
      v: 1,
      d: "Base fee of the JUMPDEST opcode"
    },
    log: {
      v: 375,
      d: "Base fee of the LOG opcode"
    },
    logData: {
      v: 8,
      d: "Per byte in a LOG* operation's data"
    },
    logTopic: {
      v: 375,
      d: "Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas"
    },
    create: {
      v: 32e3,
      d: "Base fee of the CREATE opcode"
    },
    call: {
      v: 40,
      d: "Base fee of the CALL opcode"
    },
    callStipend: {
      v: 2300,
      d: "Free gas given at beginning of call"
    },
    callValueTransfer: {
      v: 9e3,
      d: "Paid for CALL when the value transfor is non-zero"
    },
    callNewAccount: {
      v: 25e3,
      d: "Paid for CALL when the destination address didn't exist prior"
    },
    selfdestructRefund: {
      v: 24e3,
      d: "Refunded following a selfdestruct operation"
    },
    memory: {
      v: 3,
      d: "Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL"
    },
    quadCoeffDiv: {
      v: 512,
      d: "Divisor for the quadratic particle of the memory cost equation"
    },
    createData: {
      v: 200,
      d: ""
    },
    tx: {
      v: 21e3,
      d: "Per transaction. NOTE: Not payable on data of calls between transactions"
    },
    txCreation: {
      v: 32e3,
      d: "The cost of creating a contract via tx"
    },
    txDataZero: {
      v: 4,
      d: "Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions"
    },
    txDataNonZero: {
      v: 68,
      d: "Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"
    },
    copy: {
      v: 3,
      d: "Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added"
    },
    ecRecover: {
      v: 3e3,
      d: ""
    },
    sha256: {
      v: 60,
      d: ""
    },
    sha256Word: {
      v: 12,
      d: ""
    },
    ripemd160: {
      v: 600,
      d: ""
    },
    ripemd160Word: {
      v: 120,
      d: ""
    },
    identity: {
      v: 15,
      d: ""
    },
    identityWord: {
      v: 3,
      d: ""
    },
    stop: {
      v: 0,
      d: "Base fee of the STOP opcode"
    },
    add: {
      v: 3,
      d: "Base fee of the ADD opcode"
    },
    mul: {
      v: 5,
      d: "Base fee of the MUL opcode"
    },
    sub: {
      v: 3,
      d: "Base fee of the SUB opcode"
    },
    div: {
      v: 5,
      d: "Base fee of the DIV opcode"
    },
    sdiv: {
      v: 5,
      d: "Base fee of the SDIV opcode"
    },
    mod: {
      v: 5,
      d: "Base fee of the MOD opcode"
    },
    smod: {
      v: 5,
      d: "Base fee of the SMOD opcode"
    },
    addmod: {
      v: 8,
      d: "Base fee of the ADDMOD opcode"
    },
    mulmod: {
      v: 8,
      d: "Base fee of the MULMOD opcode"
    },
    signextend: {
      v: 5,
      d: "Base fee of the SIGNEXTEND opcode"
    },
    lt: {
      v: 3,
      d: "Base fee of the LT opcode"
    },
    gt: {
      v: 3,
      d: "Base fee of the GT opcode"
    },
    slt: {
      v: 3,
      d: "Base fee of the SLT opcode"
    },
    sgt: {
      v: 3,
      d: "Base fee of the SGT opcode"
    },
    eq: {
      v: 3,
      d: "Base fee of the EQ opcode"
    },
    iszero: {
      v: 3,
      d: "Base fee of the ISZERO opcode"
    },
    and: {
      v: 3,
      d: "Base fee of the AND opcode"
    },
    or: {
      v: 3,
      d: "Base fee of the OR opcode"
    },
    xor: {
      v: 3,
      d: "Base fee of the XOR opcode"
    },
    not: {
      v: 3,
      d: "Base fee of the NOT opcode"
    },
    byte: {
      v: 3,
      d: "Base fee of the BYTE opcode"
    },
    address: {
      v: 2,
      d: "Base fee of the ADDRESS opcode"
    },
    balance: {
      v: 20,
      d: "Base fee of the BALANCE opcode"
    },
    origin: {
      v: 2,
      d: "Base fee of the ORIGIN opcode"
    },
    caller: {
      v: 2,
      d: "Base fee of the CALLER opcode"
    },
    callvalue: {
      v: 2,
      d: "Base fee of the CALLVALUE opcode"
    },
    calldataload: {
      v: 3,
      d: "Base fee of the CALLDATALOAD opcode"
    },
    calldatasize: {
      v: 2,
      d: "Base fee of the CALLDATASIZE opcode"
    },
    calldatacopy: {
      v: 3,
      d: "Base fee of the CALLDATACOPY opcode"
    },
    codesize: {
      v: 2,
      d: "Base fee of the CODESIZE opcode"
    },
    codecopy: {
      v: 3,
      d: "Base fee of the CODECOPY opcode"
    },
    gasprice: {
      v: 2,
      d: "Base fee of the GASPRICE opcode"
    },
    extcodesize: {
      v: 20,
      d: "Base fee of the EXTCODESIZE opcode"
    },
    extcodecopy: {
      v: 20,
      d: "Base fee of the EXTCODECOPY opcode"
    },
    blockhash: {
      v: 20,
      d: "Base fee of the BLOCKHASH opcode"
    },
    coinbase: {
      v: 2,
      d: "Base fee of the COINBASE opcode"
    },
    timestamp: {
      v: 2,
      d: "Base fee of the TIMESTAMP opcode"
    },
    number: {
      v: 2,
      d: "Base fee of the NUMBER opcode"
    },
    difficulty: {
      v: 2,
      d: "Base fee of the DIFFICULTY opcode"
    },
    gaslimit: {
      v: 2,
      d: "Base fee of the GASLIMIT opcode"
    },
    pop: {
      v: 2,
      d: "Base fee of the POP opcode"
    },
    mload: {
      v: 3,
      d: "Base fee of the MLOAD opcode"
    },
    mstore: {
      v: 3,
      d: "Base fee of the MSTORE opcode"
    },
    mstore8: {
      v: 3,
      d: "Base fee of the MSTORE8 opcode"
    },
    sstore: {
      v: 0,
      d: "Base fee of the SSTORE opcode"
    },
    jump: {
      v: 8,
      d: "Base fee of the JUMP opcode"
    },
    jumpi: {
      v: 10,
      d: "Base fee of the JUMPI opcode"
    },
    pc: {
      v: 2,
      d: "Base fee of the PC opcode"
    },
    msize: {
      v: 2,
      d: "Base fee of the MSIZE opcode"
    },
    gas: {
      v: 2,
      d: "Base fee of the GAS opcode"
    },
    push: {
      v: 3,
      d: "Base fee of the PUSH opcode"
    },
    dup: {
      v: 3,
      d: "Base fee of the DUP opcode"
    },
    swap: {
      v: 3,
      d: "Base fee of the SWAP opcode"
    },
    callcode: {
      v: 40,
      d: "Base fee of the CALLCODE opcode"
    },
    return: {
      v: 0,
      d: "Base fee of the RETURN opcode"
    },
    invalid: {
      v: 0,
      d: "Base fee of the INVALID opcode"
    },
    selfdestruct: {
      v: 0,
      d: "Base fee of the SELFDESTRUCT opcode"
    }
  },
  vm: {
    stackLimit: {
      v: 1024,
      d: "Maximum size of VM stack allowed"
    },
    callCreateDepth: {
      v: 1024,
      d: "Maximum depth of call/create stack"
    },
    maxExtraDataSize: {
      v: 32,
      d: "Maximum size extra data may be after Genesis"
    }
  },
  pow: {
    minimumDifficulty: {
      v: 131072,
      d: "The minimum that the difficulty may ever be"
    },
    difficultyBoundDivisor: {
      v: 2048,
      d: "The bound divisor of the difficulty, used in the update calculations"
    },
    durationLimit: {
      v: 13,
      d: "The decision boundary on the blocktime duration used to determine whether difficulty should go up or not"
    },
    epochDuration: {
      v: 3e4,
      d: "Duration between proof-of-work epochs"
    },
    timebombPeriod: {
      v: 1e5,
      d: "Exponential difficulty timebomb period"
    },
    minerReward: {
      v: "5000000000000000000",
      d: "the amount a miner get rewarded for mining a block"
    },
    difficultyBombDelay: {
      v: 0,
      d: "the amount of blocks to delay the difficulty bomb with"
    }
  }
};

// node_modules/web3-eth-accounts/lib/esm/common/hardforks/dao.js
var dao_default = {
  name: "dao",
  comment: "DAO rescue hardfork",
  url: "https://eips.ethereum.org/EIPS/eip-779",
  status: "Final",
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/hardforks/homestead.js
var homestead_default = {
  name: "homestead",
  comment: "Homestead hardfork with protocol and network changes",
  url: "https://eips.ethereum.org/EIPS/eip-606",
  status: "Final",
  gasConfig: {},
  gasPrices: {
    delegatecall: {
      v: 40,
      d: "Base fee of the DELEGATECALL opcode"
    }
  },
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/hardforks/tangerineWhistle.js
var tangerineWhistle_default = {
  name: "tangerineWhistle",
  comment: "Hardfork with gas cost changes for IO-heavy operations",
  url: "https://eips.ethereum.org/EIPS/eip-608",
  status: "Final",
  gasConfig: {},
  gasPrices: {
    sload: {
      v: 200,
      d: "Once per SLOAD operation"
    },
    call: {
      v: 700,
      d: "Once per CALL operation & message call transaction"
    },
    extcodesize: {
      v: 700,
      d: "Base fee of the EXTCODESIZE opcode"
    },
    extcodecopy: {
      v: 700,
      d: "Base fee of the EXTCODECOPY opcode"
    },
    balance: {
      v: 400,
      d: "Base fee of the BALANCE opcode"
    },
    delegatecall: {
      v: 700,
      d: "Base fee of the DELEGATECALL opcode"
    },
    callcode: {
      v: 700,
      d: "Base fee of the CALLCODE opcode"
    },
    selfdestruct: {
      v: 5e3,
      d: "Base fee of the SELFDESTRUCT opcode"
    }
  },
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/hardforks/spuriousDragon.js
var spuriousDragon_default = {
  name: "spuriousDragon",
  comment: "HF with EIPs for simple replay attack protection, EXP cost increase, state trie clearing, contract code size limit",
  url: "https://eips.ethereum.org/EIPS/eip-607",
  status: "Final",
  gasConfig: {},
  gasPrices: {
    expByte: {
      v: 50,
      d: "Times ceil(log256(exponent)) for the EXP instruction"
    }
  },
  vm: {
    maxCodeSize: {
      v: 24576,
      d: "Maximum length of contract code"
    }
  },
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/hardforks/byzantium.js
var byzantium_default = {
  name: "byzantium",
  comment: "Hardfork with new precompiles, instructions and other protocol changes",
  url: "https://eips.ethereum.org/EIPS/eip-609",
  status: "Final",
  gasConfig: {},
  gasPrices: {
    modexpGquaddivisor: {
      v: 20,
      d: "Gquaddivisor from modexp precompile for gas calculation"
    },
    ecAdd: {
      v: 500,
      d: "Gas costs for curve addition precompile"
    },
    ecMul: {
      v: 4e4,
      d: "Gas costs for curve multiplication precompile"
    },
    ecPairing: {
      v: 1e5,
      d: "Base gas costs for curve pairing precompile"
    },
    ecPairingWord: {
      v: 8e4,
      d: "Gas costs regarding curve pairing precompile input length"
    },
    revert: {
      v: 0,
      d: "Base fee of the REVERT opcode"
    },
    staticcall: {
      v: 700,
      d: "Base fee of the STATICCALL opcode"
    },
    returndatasize: {
      v: 2,
      d: "Base fee of the RETURNDATASIZE opcode"
    },
    returndatacopy: {
      v: 3,
      d: "Base fee of the RETURNDATACOPY opcode"
    }
  },
  vm: {},
  pow: {
    minerReward: {
      v: "3000000000000000000",
      d: "the amount a miner get rewarded for mining a block"
    },
    difficultyBombDelay: {
      v: 3e6,
      d: "the amount of blocks to delay the difficulty bomb with"
    }
  }
};

// node_modules/web3-eth-accounts/lib/esm/common/hardforks/constantinople.js
var constantinople_default = {
  name: "constantinople",
  comment: "Postponed hardfork including EIP-1283 (SSTORE gas metering changes)",
  url: "https://eips.ethereum.org/EIPS/eip-1013",
  status: "Final",
  gasConfig: {},
  gasPrices: {
    netSstoreNoopGas: {
      v: 200,
      d: "Once per SSTORE operation if the value doesn't change"
    },
    netSstoreInitGas: {
      v: 2e4,
      d: "Once per SSTORE operation from clean zero"
    },
    netSstoreCleanGas: {
      v: 5e3,
      d: "Once per SSTORE operation from clean non-zero"
    },
    netSstoreDirtyGas: {
      v: 200,
      d: "Once per SSTORE operation from dirty"
    },
    netSstoreClearRefund: {
      v: 15e3,
      d: "Once per SSTORE operation for clearing an originally existing storage slot"
    },
    netSstoreResetRefund: {
      v: 4800,
      d: "Once per SSTORE operation for resetting to the original non-zero value"
    },
    netSstoreResetClearRefund: {
      v: 19800,
      d: "Once per SSTORE operation for resetting to the original zero value"
    },
    shl: {
      v: 3,
      d: "Base fee of the SHL opcode"
    },
    shr: {
      v: 3,
      d: "Base fee of the SHR opcode"
    },
    sar: {
      v: 3,
      d: "Base fee of the SAR opcode"
    },
    extcodehash: {
      v: 400,
      d: "Base fee of the EXTCODEHASH opcode"
    },
    create2: {
      v: 32e3,
      d: "Base fee of the CREATE2 opcode"
    }
  },
  vm: {},
  pow: {
    minerReward: {
      v: "2000000000000000000",
      d: "The amount a miner gets rewarded for mining a block"
    },
    difficultyBombDelay: {
      v: 5e6,
      d: "the amount of blocks to delay the difficulty bomb with"
    }
  }
};

// node_modules/web3-eth-accounts/lib/esm/common/hardforks/petersburg.js
var petersburg_default = {
  name: "petersburg",
  comment: "Aka constantinopleFix, removes EIP-1283, activate together with or after constantinople",
  url: "https://eips.ethereum.org/EIPS/eip-1716",
  status: "Final",
  gasConfig: {},
  gasPrices: {
    netSstoreNoopGas: {
      v: null,
      d: "Removed along EIP-1283"
    },
    netSstoreInitGas: {
      v: null,
      d: "Removed along EIP-1283"
    },
    netSstoreCleanGas: {
      v: null,
      d: "Removed along EIP-1283"
    },
    netSstoreDirtyGas: {
      v: null,
      d: "Removed along EIP-1283"
    },
    netSstoreClearRefund: {
      v: null,
      d: "Removed along EIP-1283"
    },
    netSstoreResetRefund: {
      v: null,
      d: "Removed along EIP-1283"
    },
    netSstoreResetClearRefund: {
      v: null,
      d: "Removed along EIP-1283"
    }
  },
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/hardforks/istanbul.js
var istanbul_default = {
  name: "istanbul",
  comment: "HF targeted for December 2019 following the Constantinople/Petersburg HF",
  url: "https://eips.ethereum.org/EIPS/eip-1679",
  status: "Final",
  gasConfig: {},
  gasPrices: {
    blake2Round: {
      v: 1,
      d: "Gas cost per round for the Blake2 F precompile"
    },
    ecAdd: {
      v: 150,
      d: "Gas costs for curve addition precompile"
    },
    ecMul: {
      v: 6e3,
      d: "Gas costs for curve multiplication precompile"
    },
    ecPairing: {
      v: 45e3,
      d: "Base gas costs for curve pairing precompile"
    },
    ecPairingWord: {
      v: 34e3,
      d: "Gas costs regarding curve pairing precompile input length"
    },
    txDataNonZero: {
      v: 16,
      d: "Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"
    },
    sstoreSentryGasEIP2200: {
      v: 2300,
      d: "Minimum gas required to be present for an SSTORE call, not consumed"
    },
    sstoreNoopGasEIP2200: {
      v: 800,
      d: "Once per SSTORE operation if the value doesn't change"
    },
    sstoreDirtyGasEIP2200: {
      v: 800,
      d: "Once per SSTORE operation if a dirty value is changed"
    },
    sstoreInitGasEIP2200: {
      v: 2e4,
      d: "Once per SSTORE operation from clean zero to non-zero"
    },
    sstoreInitRefundEIP2200: {
      v: 19200,
      d: "Once per SSTORE operation for resetting to the original zero value"
    },
    sstoreCleanGasEIP2200: {
      v: 5e3,
      d: "Once per SSTORE operation from clean non-zero to something else"
    },
    sstoreCleanRefundEIP2200: {
      v: 4200,
      d: "Once per SSTORE operation for resetting to the original non-zero value"
    },
    sstoreClearRefundEIP2200: {
      v: 15e3,
      d: "Once per SSTORE operation for clearing an originally existing storage slot"
    },
    balance: {
      v: 700,
      d: "Base fee of the BALANCE opcode"
    },
    extcodehash: {
      v: 700,
      d: "Base fee of the EXTCODEHASH opcode"
    },
    chainid: {
      v: 2,
      d: "Base fee of the CHAINID opcode"
    },
    selfbalance: {
      v: 5,
      d: "Base fee of the SELFBALANCE opcode"
    },
    sload: {
      v: 800,
      d: "Base fee of the SLOAD opcode"
    }
  },
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/hardforks/muirGlacier.js
var muirGlacier_default = {
  name: "muirGlacier",
  comment: "HF to delay the difficulty bomb",
  url: "https://eips.ethereum.org/EIPS/eip-2384",
  status: "Final",
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {
    difficultyBombDelay: {
      v: 9e6,
      d: "the amount of blocks to delay the difficulty bomb with"
    }
  }
};

// node_modules/web3-eth-accounts/lib/esm/common/hardforks/berlin.js
var berlin_default = {
  name: "berlin",
  comment: "HF targeted for July 2020 following the Muir Glacier HF",
  url: "https://eips.ethereum.org/EIPS/eip-2070",
  status: "Final",
  eips: [2565, 2929, 2718, 2930]
};

// node_modules/web3-eth-accounts/lib/esm/common/hardforks/london.js
var london_default = {
  name: "london",
  comment: "HF targeted for July 2021 following the Berlin fork",
  url: "https://github.com/ethereum/eth1.0-specs/blob/master/network-upgrades/mainnet-upgrades/london.md",
  status: "Final",
  eips: [1559, 3198, 3529, 3541]
};

// node_modules/web3-eth-accounts/lib/esm/common/hardforks/shanghai.js
var shanghai_default = {
  name: "shanghai",
  comment: "Next feature hardfork after the merge hardfork having withdrawals, warm coinbase, push0, limit/meter initcode",
  url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/shanghai.md",
  status: "Final",
  eips: [3651, 3855, 3860, 4895]
};

// node_modules/web3-eth-accounts/lib/esm/common/hardforks/arrowGlacier.js
var arrowGlacier_default = {
  name: "arrowGlacier",
  comment: "HF to delay the difficulty bomb",
  url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/arrow-glacier.md",
  status: "Final",
  eips: [4345],
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/hardforks/grayGlacier.js
var grayGlacier_default = {
  name: "grayGlacier",
  comment: "Delaying the difficulty bomb to Mid September 2022",
  url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/gray-glacier.md",
  status: "Draft",
  eips: [5133],
  gasConfig: {},
  gasPrices: {},
  vm: {},
  pow: {}
};

// node_modules/web3-eth-accounts/lib/esm/common/hardforks/mergeForkIdTransition.js
var mergeForkIdTransition_default = {
  name: "mergeForkIdTransition",
  comment: "Pre-merge hardfork to fork off non-upgraded clients",
  url: "https://eips.ethereum.org/EIPS/eip-3675",
  status: "Draft",
  eips: []
};

// node_modules/web3-eth-accounts/lib/esm/common/hardforks/merge.js
var merge_default = {
  name: "merge",
  comment: "Hardfork to upgrade the consensus mechanism to Proof-of-Stake",
  url: "https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/merge.md",
  status: "Final",
  consensus: {
    type: "pos",
    algorithm: "casper",
    casper: {}
  },
  eips: [3675, 4399]
};

// node_modules/web3-eth-accounts/lib/esm/common/hardforks/index.js
var hardforks = {
  chainstart: chainstart_default,
  homestead: homestead_default,
  dao: dao_default,
  tangerineWhistle: tangerineWhistle_default,
  spuriousDragon: spuriousDragon_default,
  byzantium: byzantium_default,
  constantinople: constantinople_default,
  petersburg: petersburg_default,
  istanbul: istanbul_default,
  muirGlacier: muirGlacier_default,
  berlin: berlin_default,
  london: london_default,
  shanghai: shanghai_default,
  arrowGlacier: arrowGlacier_default,
  grayGlacier: grayGlacier_default,
  mergeForkIdTransition: mergeForkIdTransition_default,
  merge: merge_default
};

// node_modules/web3-eth-accounts/lib/esm/common/common.js
var { buf: crc32Uint8Array } = import_crc_32.default;
var Common = class _Common extends EventEmitter {
  /**
   * Creates a {@link Common} object for a custom chain, based on a standard one.
   *
   * It uses all the {@link Chain} parameters from the {@link baseChain} option except the ones overridden
   * in a provided {@link chainParamsOrName} dictionary. Some usage example:
   *
   * ```javascript
   * Common.custom({chainId: 123})
   * ```
   *
   * There are also selected supported custom chains which can be initialized by using one of the
   * {@link CustomChains} for {@link chainParamsOrName}, e.g.:
   *
   * ```javascript
   * Common.custom(CustomChains.MaticMumbai)
   * ```
   *
   * Note that these supported custom chains only provide some base parameters (usually the chain and
   * network ID and a name) and can only be used for selected use cases (e.g. sending a tx with
   * the `web3-utils/tx` library to a Layer-2 chain).
   *
   * @param chainParamsOrName Custom parameter dict (`name` will default to `custom-chain`) or string with name of a supported custom chain
   * @param opts Custom chain options to set the {@link CustomCommonOpts.baseChain}, selected {@link CustomCommonOpts.hardfork} and others
   */
  static custom(chainParamsOrName, opts = {}) {
    var _a3;
    const baseChain = (_a3 = opts.baseChain) !== null && _a3 !== void 0 ? _a3 : "mainnet";
    const standardChainParams = Object.assign({}, _Common._getChainParams(baseChain));
    standardChainParams.name = "custom-chain";
    if (typeof chainParamsOrName !== "string") {
      return new _Common(Object.assign({ chain: Object.assign(Object.assign({}, standardChainParams), chainParamsOrName) }, opts));
    }
    if (chainParamsOrName === CustomChain.PolygonMainnet) {
      return _Common.custom({
        name: CustomChain.PolygonMainnet,
        chainId: 137,
        networkId: 137
      }, opts);
    }
    if (chainParamsOrName === CustomChain.PolygonMumbai) {
      return _Common.custom({
        name: CustomChain.PolygonMumbai,
        chainId: 80001,
        networkId: 80001
      }, opts);
    }
    if (chainParamsOrName === CustomChain.ArbitrumRinkebyTestnet) {
      return _Common.custom({
        name: CustomChain.ArbitrumRinkebyTestnet,
        chainId: 421611,
        networkId: 421611
      }, opts);
    }
    if (chainParamsOrName === CustomChain.ArbitrumOne) {
      return _Common.custom({
        name: CustomChain.ArbitrumOne,
        chainId: 42161,
        networkId: 42161
      }, opts);
    }
    if (chainParamsOrName === CustomChain.xDaiChain) {
      return _Common.custom({
        name: CustomChain.xDaiChain,
        chainId: 100,
        networkId: 100
      }, opts);
    }
    if (chainParamsOrName === CustomChain.OptimisticKovan) {
      return _Common.custom({
        name: CustomChain.OptimisticKovan,
        chainId: 69,
        networkId: 69
      }, Object.assign({ hardfork: Hardfork.Berlin }, opts));
    }
    if (chainParamsOrName === CustomChain.OptimisticEthereum) {
      return _Common.custom({
        name: CustomChain.OptimisticEthereum,
        chainId: 10,
        networkId: 10
      }, Object.assign({ hardfork: Hardfork.Berlin }, opts));
    }
    throw new Error(`Custom chain ${chainParamsOrName} not supported`);
  }
  /**
   * Static method to load and set common from a geth genesis json
   * @param genesisJson json of geth configuration
   * @param { chain, eips, genesisHash, hardfork, mergeForkIdPostMerge } to further configure the common instance
   * @returns Common
   */
  static fromGethGenesis(genesisJson, { chain, eips, genesisHash, hardfork, mergeForkIdPostMerge }) {
    var _a3;
    const genesisParams = parseGethGenesis(genesisJson, chain, mergeForkIdPostMerge);
    const common = new _Common({
      chain: (_a3 = genesisParams.name) !== null && _a3 !== void 0 ? _a3 : "custom",
      customChains: [genesisParams],
      eips,
      hardfork: hardfork !== null && hardfork !== void 0 ? hardfork : genesisParams.hardfork
    });
    if (genesisHash !== void 0) {
      common.setForkHashes(genesisHash);
    }
    return common;
  }
  /**
   * Static method to determine if a {@link chainId} is supported as a standard chain
   * @param chainId bigint id (`1`) of a standard chain
   * @returns boolean
   */
  static isSupportedChainId(chainId) {
    const initializedChains = this._getInitializedChains();
    return Boolean(initializedChains.names[chainId.toString()]);
  }
  static _getChainParams(_chain, customChains) {
    let chain = _chain;
    const initializedChains = this._getInitializedChains(customChains);
    if (typeof chain === "number" || typeof chain === "bigint") {
      chain = chain.toString();
      if (initializedChains.names[chain]) {
        const name2 = initializedChains.names[chain];
        return initializedChains[name2];
      }
      throw new Error(`Chain with ID ${chain} not supported`);
    }
    if (initializedChains[chain] !== void 0) {
      return initializedChains[chain];
    }
    throw new Error(`Chain with name ${chain} not supported`);
  }
  constructor(opts) {
    var _a3, _b;
    super();
    this._eips = [];
    this._customChains = (_a3 = opts.customChains) !== null && _a3 !== void 0 ? _a3 : [];
    this._chainParams = this.setChain(opts.chain);
    this.DEFAULT_HARDFORK = (_b = this._chainParams.defaultHardfork) !== null && _b !== void 0 ? _b : Hardfork.Merge;
    this.HARDFORK_CHANGES = this.hardforks().map((hf) => [
      hf.name,
      hardforks[hf.name]
    ]);
    this._hardfork = this.DEFAULT_HARDFORK;
    if (opts.hardfork !== void 0) {
      this.setHardfork(opts.hardfork);
    }
    if (opts.eips) {
      this.setEIPs(opts.eips);
    }
  }
  /**
   * Sets the chain
   * @param chain String ('mainnet') or Number (1) chain representation.
   *              Or, a Dictionary of chain parameters for a private network.
   * @returns The dictionary with parameters set as chain
   */
  setChain(chain) {
    if (typeof chain === "number" || typeof chain === "bigint" || typeof chain === "string") {
      this._chainParams = _Common._getChainParams(chain, this._customChains);
    } else if (typeof chain === "object") {
      if (this._customChains.length > 0) {
        throw new Error("Chain must be a string, number, or bigint when initialized with customChains passed in");
      }
      const required = ["networkId", "genesis", "hardforks", "bootstrapNodes"];
      for (const param of required) {
        if (!(param in chain)) {
          throw new Error(`Missing required chain parameter: ${param}`);
        }
      }
      this._chainParams = chain;
    } else {
      throw new Error("Wrong input format");
    }
    for (const hf of this.hardforks()) {
      if (hf.block === void 0) {
        throw new Error(`Hardfork cannot have undefined block number`);
      }
    }
    return this._chainParams;
  }
  /**
   * Sets the hardfork to get params for
   * @param hardfork String identifier (e.g. 'byzantium') or {@link Hardfork} enum
   */
  setHardfork(hardfork) {
    let existing = false;
    for (const hfChanges of this.HARDFORK_CHANGES) {
      if (hfChanges[0] === hardfork) {
        if (this._hardfork !== hardfork) {
          this._hardfork = hardfork;
          this.emit("hardforkChanged", hardfork);
        }
        existing = true;
      }
    }
    if (!existing) {
      throw new Error(`Hardfork with name ${hardfork} not supported`);
    }
  }
  /**
   * Returns the hardfork based on the block number or an optional
   * total difficulty (Merge HF) provided.
   *
   * An optional TD takes precedence in case the corresponding HF block
   * is set to `null` or otherwise needs to match (if not an error
   * will be thrown).
   *
   * @param blockNumber
   * @param td : total difficulty of the parent block (for block hf) OR of the chain latest (for chain hf)
   * @param timestamp: timestamp in seconds at which block was/is to be minted
   * @returns The name of the HF
   */
  getHardforkByBlockNumber(_blockNumber, _td, _timestamp) {
    const blockNumber = toType(_blockNumber, TypeOutput.BigInt);
    const td = toType(_td, TypeOutput.BigInt);
    const timestamp = toType(_timestamp, TypeOutput.Number);
    const hfs = this.hardforks().filter((hf) => (
      // eslint-disable-next-line no-null/no-null
      hf.block !== null || // eslint-disable-next-line no-null/no-null
      hf.ttd !== null && hf.ttd !== void 0 || hf.timestamp !== void 0
    ));
    const mergeIndex = hfs.findIndex((hf) => hf.ttd !== null && hf.ttd !== void 0);
    const doubleTTDHF = hfs.slice(mergeIndex + 1).findIndex((hf) => hf.ttd !== null && hf.ttd !== void 0);
    if (doubleTTDHF >= 0) {
      throw Error(`More than one merge hardforks found with ttd specified`);
    }
    let hfIndex = hfs.findIndex((hf) => (
      // eslint-disable-next-line no-null/no-null
      hf.block !== null && hf.block > blockNumber || timestamp !== void 0 && Number(hf.timestamp) > timestamp
    ));
    if (hfIndex === -1) {
      hfIndex = hfs.length;
    } else if (hfIndex === 0) {
      throw Error("Must have at least one hardfork at block 0");
    }
    if (timestamp === void 0) {
      const stepBack = hfs.slice(0, hfIndex).reverse().findIndex((hf) => hf.block !== null || hf.ttd !== void 0);
      hfIndex -= stepBack;
    }
    hfIndex -= 1;
    if (hfs[hfIndex].block === null && hfs[hfIndex].timestamp === void 0) {
      if (td === void 0 || td === null || BigInt(hfs[hfIndex].ttd) > td) {
        hfIndex -= 1;
      }
    } else if (mergeIndex >= 0 && td !== void 0 && td !== null) {
      if (hfIndex >= mergeIndex && BigInt(hfs[mergeIndex].ttd) > td) {
        throw Error("Maximum HF determined by total difficulty is lower than the block number HF");
      } else if (hfIndex < mergeIndex && BigInt(hfs[mergeIndex].ttd) <= td) {
        throw Error("HF determined by block number is lower than the minimum total difficulty HF");
      }
    }
    const hfStartIndex = hfIndex;
    for (; hfIndex < hfs.length - 1; hfIndex += 1) {
      if (hfs[hfIndex].block !== hfs[hfIndex + 1].block || hfs[hfIndex].timestamp !== hfs[hfIndex + 1].timestamp) {
        break;
      }
    }
    if (timestamp) {
      const minTimeStamp = hfs.slice(0, hfStartIndex).reduce((acc, hf) => {
        var _a3;
        return Math.max(Number((_a3 = hf.timestamp) !== null && _a3 !== void 0 ? _a3 : "0"), acc);
      }, 0);
      if (minTimeStamp > timestamp) {
        throw Error(`Maximum HF determined by timestamp is lower than the block number/ttd HF`);
      }
      const maxTimeStamp = hfs.slice(hfIndex + 1).reduce((acc, hf) => {
        var _a3;
        return Math.min(Number((_a3 = hf.timestamp) !== null && _a3 !== void 0 ? _a3 : timestamp), acc);
      }, timestamp);
      if (maxTimeStamp < timestamp) {
        throw Error(`Maximum HF determined by block number/ttd is lower than timestamp HF`);
      }
    }
    const hardfork = hfs[hfIndex];
    return hardfork.name;
  }
  /**
   * Sets a new hardfork based on the block number or an optional
   * total difficulty (Merge HF) provided.
   *
   * An optional TD takes precedence in case the corresponding HF block
   * is set to `null` or otherwise needs to match (if not an error
   * will be thrown).
   *
   * @param blockNumber
   * @param td
   * @param timestamp
   * @returns The name of the HF set
   */
  setHardforkByBlockNumber(blockNumber, td, timestamp) {
    const hardfork = this.getHardforkByBlockNumber(blockNumber, td, timestamp);
    this.setHardfork(hardfork);
    return hardfork;
  }
  /**
   * Internal helper function, returns the params for the given hardfork for the chain set
   * @param hardfork Hardfork name
   * @returns Dictionary with hardfork params or null if hardfork not on chain
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  _getHardfork(hardfork) {
    const hfs = this.hardforks();
    for (const hf of hfs) {
      if (hf.name === hardfork)
        return hf;
    }
    return null;
  }
  /**
   * Sets the active EIPs
   * @param eips
   */
  setEIPs(eips = []) {
    for (const eip of eips) {
      if (!(eip in EIPs)) {
        throw new Error(`${eip} not supported`);
      }
      const minHF = this.gteHardfork(EIPs[eip].minimumHardfork);
      if (!minHF) {
        throw new Error(
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `${eip} cannot be activated on hardfork ${this.hardfork()}, minimumHardfork: ${minHF}`
        );
      }
      if (EIPs[eip].requiredEIPs !== void 0) {
        for (const elem of EIPs[eip].requiredEIPs) {
          if (!(eips.includes(elem) || this.isActivatedEIP(elem))) {
            throw new Error(
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              `${eip} requires EIP ${elem}, but is not included in the EIP list`
            );
          }
        }
      }
    }
    this._eips = eips;
  }
  /**
   * Returns a parameter for the current chain setup
   *
   * If the parameter is present in an EIP, the EIP always takes precedence.
   * Otherwise the parameter if taken from the latest applied HF with
   * a change on the respective parameter.
   *
   * @param topic Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')
   * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
   * @returns The value requested or `BigInt(0)` if not found
   */
  param(topic, name2) {
    let value;
    for (const eip of this._eips) {
      value = this.paramByEIP(topic, name2, eip);
      if (value !== void 0)
        return value;
    }
    return this.paramByHardfork(topic, name2, this._hardfork);
  }
  /**
   * Returns the parameter corresponding to a hardfork
   * @param topic Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')
   * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
   * @param hardfork Hardfork name
   * @returns The value requested or `BigInt(0)` if not found
   */
  paramByHardfork(topic, name2, hardfork) {
    let value = null;
    for (const hfChanges of this.HARDFORK_CHANGES) {
      if ("eips" in hfChanges[1]) {
        const hfEIPs = hfChanges[1].eips;
        for (const eip of hfEIPs) {
          const valueEIP = this.paramByEIP(topic, name2, eip);
          value = typeof valueEIP === "bigint" ? valueEIP : value;
        }
      } else {
        if (hfChanges[1][topic] === void 0) {
          throw new Error(`Topic ${topic} not defined`);
        }
        if (hfChanges[1][topic][name2] !== void 0) {
          value = hfChanges[1][topic][name2].v;
        }
      }
      if (hfChanges[0] === hardfork)
        break;
    }
    return BigInt(value !== null && value !== void 0 ? value : 0);
  }
  /**
   * Returns a parameter corresponding to an EIP
   * @param topic Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')
   * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
   * @param eip Number of the EIP
   * @returns The value requested or `undefined` if not found
   */
  // eslint-disable-next-line class-methods-use-this
  paramByEIP(topic, name2, eip) {
    if (!(eip in EIPs)) {
      throw new Error(`${eip} not supported`);
    }
    const eipParams = EIPs[eip];
    if (!(topic in eipParams)) {
      throw new Error(`Topic ${topic} not defined`);
    }
    if (eipParams[topic][name2] === void 0) {
      return void 0;
    }
    const value = eipParams[topic][name2].v;
    return BigInt(value);
  }
  /**
   * Returns a parameter for the hardfork active on block number or
   * optional provided total difficulty (Merge HF)
   * @param topic Parameter topic
   * @param name Parameter name
   * @param blockNumber Block number
   * @param td Total difficulty
   *    * @returns The value requested or `BigInt(0)` if not found
   */
  paramByBlock(topic, name2, blockNumber, td, timestamp) {
    const hardfork = this.getHardforkByBlockNumber(blockNumber, td, timestamp);
    return this.paramByHardfork(topic, name2, hardfork);
  }
  /**
   * Checks if an EIP is activated by either being included in the EIPs
   * manually passed in with the {@link CommonOpts.eips} or in a
   * hardfork currently being active
   *
   * Note: this method only works for EIPs being supported
   * by the {@link CommonOpts.eips} constructor option
   * @param eip
   */
  isActivatedEIP(eip) {
    if (this.eips().includes(eip)) {
      return true;
    }
    for (const hfChanges of this.HARDFORK_CHANGES) {
      const hf = hfChanges[1];
      if (this.gteHardfork(hf.name) && "eips" in hf) {
        if (hf.eips.includes(eip)) {
          return true;
        }
      }
    }
    return false;
  }
  /**
   * Checks if set or provided hardfork is active on block number
   * @param hardfork Hardfork name or null (for HF set)
   * @param blockNumber
   * @returns True if HF is active on block number
   */
  hardforkIsActiveOnBlock(_hardfork, _blockNumber) {
    const blockNumber = toType(_blockNumber, TypeOutput.BigInt);
    const hardfork = _hardfork !== null && _hardfork !== void 0 ? _hardfork : this._hardfork;
    const hfBlock = this.hardforkBlock(hardfork);
    if (typeof hfBlock === "bigint" && hfBlock !== BigInt(0) && blockNumber >= hfBlock) {
      return true;
    }
    return false;
  }
  /**
   * Alias to hardforkIsActiveOnBlock when hardfork is set
   * @param blockNumber
   * @returns True if HF is active on block number
   */
  activeOnBlock(blockNumber) {
    return this.hardforkIsActiveOnBlock(null, blockNumber);
  }
  /**
   * Sequence based check if given or set HF1 is greater than or equal HF2
   * @param hardfork1 Hardfork name or null (if set)
   * @param hardfork2 Hardfork name
   * @param opts Hardfork options
   * @returns True if HF1 gte HF2
   */
  hardforkGteHardfork(_hardfork1, hardfork2) {
    const hardfork1 = _hardfork1 !== null && _hardfork1 !== void 0 ? _hardfork1 : this._hardfork;
    const hardforks2 = this.hardforks();
    let posHf1 = -1;
    let posHf2 = -1;
    let index = 0;
    for (const hf of hardforks2) {
      if (hf.name === hardfork1)
        posHf1 = index;
      if (hf.name === hardfork2)
        posHf2 = index;
      index += 1;
    }
    return posHf1 >= posHf2 && posHf2 !== -1;
  }
  /**
   * Alias to hardforkGteHardfork when hardfork is set
   * @param hardfork Hardfork name
   * @returns True if hardfork set is greater than hardfork provided
   */
  gteHardfork(hardfork) {
    return this.hardforkGteHardfork(null, hardfork);
  }
  /**
   * Returns the hardfork change block for hardfork provided or set
   * @param hardfork Hardfork name, optional if HF set
   * @returns Block number or null if unscheduled
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  hardforkBlock(_hardfork) {
    var _a3;
    const hardfork = _hardfork !== null && _hardfork !== void 0 ? _hardfork : this._hardfork;
    const block = (_a3 = this._getHardfork(hardfork)) === null || _a3 === void 0 ? void 0 : _a3.block;
    if (block === void 0 || block === null) {
      return null;
    }
    return BigInt(block);
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  hardforkTimestamp(_hardfork) {
    var _a3;
    const hardfork = _hardfork !== null && _hardfork !== void 0 ? _hardfork : this._hardfork;
    const timestamp = (_a3 = this._getHardfork(hardfork)) === null || _a3 === void 0 ? void 0 : _a3.timestamp;
    if (timestamp === void 0 || timestamp === null) {
      return null;
    }
    return BigInt(timestamp);
  }
  /**
   * Returns the hardfork change block for eip
   * @param eip EIP number
   * @returns Block number or null if unscheduled
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  eipBlock(eip) {
    for (const hfChanges of this.HARDFORK_CHANGES) {
      const hf = hfChanges[1];
      if ("eips" in hf) {
        if (hf.eips.includes(eip)) {
          return this.hardforkBlock(typeof hfChanges[0] === "number" ? String(hfChanges[0]) : hfChanges[0]);
        }
      }
    }
    return null;
  }
  /**
   * Returns the hardfork change total difficulty (Merge HF) for hardfork provided or set
   * @param hardfork Hardfork name, optional if HF set
   * @returns Total difficulty or null if no set
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  hardforkTTD(_hardfork) {
    var _a3;
    const hardfork = _hardfork !== null && _hardfork !== void 0 ? _hardfork : this._hardfork;
    const ttd = (_a3 = this._getHardfork(hardfork)) === null || _a3 === void 0 ? void 0 : _a3.ttd;
    if (ttd === void 0 || ttd === null) {
      return null;
    }
    return BigInt(ttd);
  }
  /**
   * True if block number provided is the hardfork (given or set) change block
   * @param blockNumber Number of the block to check
   * @param hardfork Hardfork name, optional if HF set
   * @returns True if blockNumber is HF block
   * @deprecated
   */
  isHardforkBlock(_blockNumber, _hardfork) {
    const blockNumber = toType(_blockNumber, TypeOutput.BigInt);
    const hardfork = _hardfork !== null && _hardfork !== void 0 ? _hardfork : this._hardfork;
    const block = this.hardforkBlock(hardfork);
    return typeof block === "bigint" && block !== BigInt(0) ? block === blockNumber : false;
  }
  /**
   * Returns the change block for the next hardfork after the hardfork provided or set
   * @param hardfork Hardfork name, optional if HF set
   * @returns Block timestamp, number or null if not available
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  nextHardforkBlockOrTimestamp(_hardfork) {
    var _a3, _b, _c;
    const hardfork = (_a3 = _hardfork) !== null && _a3 !== void 0 ? _a3 : this._hardfork;
    const hfs = this.hardforks();
    let hfIndex = hfs.findIndex((hf) => hf.name === hardfork);
    if (hardfork === Hardfork.Merge) {
      hfIndex -= 1;
    }
    if (hfIndex < 0) {
      return null;
    }
    let currHfTimeOrBlock = (_b = hfs[hfIndex].timestamp) !== null && _b !== void 0 ? _b : hfs[hfIndex].block;
    currHfTimeOrBlock = // eslint-disable-next-line no-null/no-null
    currHfTimeOrBlock !== null && currHfTimeOrBlock !== void 0 ? Number(currHfTimeOrBlock) : (
      // eslint-disable-next-line no-null/no-null
      null
    );
    const nextHf = hfs.slice(hfIndex + 1).find((hf) => {
      var _a4;
      let hfTimeOrBlock = (_a4 = hf.timestamp) !== null && _a4 !== void 0 ? _a4 : hf.block;
      hfTimeOrBlock = // eslint-disable-next-line no-null/no-null
      hfTimeOrBlock !== null && hfTimeOrBlock !== void 0 ? Number(hfTimeOrBlock) : (
        // eslint-disable-next-line no-null/no-null
        null
      );
      return hf.name !== Hardfork.Merge && // eslint-disable-next-line no-null/no-null
      hfTimeOrBlock !== null && hfTimeOrBlock !== void 0 && hfTimeOrBlock !== currHfTimeOrBlock;
    });
    if (nextHf === void 0) {
      return null;
    }
    const nextHfBlock = (_c = nextHf.timestamp) !== null && _c !== void 0 ? _c : nextHf.block;
    if (nextHfBlock === null || nextHfBlock === void 0) {
      return null;
    }
    return BigInt(nextHfBlock);
  }
  /**
   * Returns the change block for the next hardfork after the hardfork provided or set
   * @param hardfork Hardfork name, optional if HF set
   * @returns Block number or null if not available
   * @deprecated
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  nextHardforkBlock(_hardfork) {
    var _a3;
    const hardfork = (_a3 = _hardfork) !== null && _a3 !== void 0 ? _a3 : this._hardfork;
    let hfBlock = this.hardforkBlock(hardfork);
    if (hfBlock === null && hardfork === Hardfork.Merge) {
      const hfs = this.hardforks();
      const mergeIndex = hfs.findIndex((hf) => hf.ttd !== null && hf.ttd !== void 0);
      if (mergeIndex < 0) {
        throw Error(`Merge hardfork should have been found`);
      }
      hfBlock = this.hardforkBlock(hfs[mergeIndex - 1].name);
    }
    if (hfBlock === null) {
      return null;
    }
    const nextHfBlock = this.hardforks().reduce((acc, hf) => {
      const block = BigInt(
        // eslint-disable-next-line no-null/no-null
        hf.block === null || hf.ttd !== void 0 && hf.ttd !== null ? 0 : hf.block
      );
      return block > hfBlock && acc === null ? block : acc;
    }, null);
    return nextHfBlock;
  }
  /**
   * True if block number provided is the hardfork change block following the hardfork given or set
   * @param blockNumber Number of the block to check
   * @param hardfork Hardfork name, optional if HF set
   * @returns True if blockNumber is HF block
   * @deprecated
   */
  isNextHardforkBlock(_blockNumber, _hardfork) {
    const blockNumber = toType(_blockNumber, TypeOutput.BigInt);
    const hardfork = _hardfork !== null && _hardfork !== void 0 ? _hardfork : this._hardfork;
    const nextHardforkBlock = this.nextHardforkBlock(hardfork);
    return nextHardforkBlock === null ? false : nextHardforkBlock === blockNumber;
  }
  /**
   * Internal helper function to calculate a fork hash
   * @param hardfork Hardfork name
   * @param genesisHash Genesis block hash of the chain
   * @returns Fork hash as hex string
   */
  _calcForkHash(hardfork, genesisHash) {
    let hfUint8Array = new Uint8Array();
    let prevBlockOrTime = 0;
    for (const hf of this.hardforks()) {
      const { block, timestamp, name: name2 } = hf;
      let blockOrTime = timestamp !== null && timestamp !== void 0 ? timestamp : block;
      blockOrTime = blockOrTime !== null ? Number(blockOrTime) : null;
      if (typeof blockOrTime === "number" && blockOrTime !== 0 && blockOrTime !== prevBlockOrTime && name2 !== Hardfork.Merge) {
        const hfBlockUint8Array = hexToBytes(blockOrTime.toString(16).padStart(16, "0"));
        hfUint8Array = uint8ArrayConcat(hfUint8Array, hfBlockUint8Array);
        prevBlockOrTime = blockOrTime;
      }
      if (hf.name === hardfork)
        break;
    }
    const inputUint8Array = uint8ArrayConcat(genesisHash, hfUint8Array);
    const forkhash = bytesToHex(intToUint8Array(crc32Uint8Array(inputUint8Array) >>> 0));
    return forkhash;
  }
  /**
   * Returns an eth/64 compliant fork hash (EIP-2124)
   * @param hardfork Hardfork name, optional if HF set
   * @param genesisHash Genesis block hash of the chain, optional if already defined and not needed to be calculated
   */
  forkHash(_hardfork, genesisHash) {
    const hardfork = _hardfork !== null && _hardfork !== void 0 ? _hardfork : this._hardfork;
    const data = this._getHardfork(hardfork);
    if (
      // eslint-disable-next-line no-null/no-null
      data === null || // eslint-disable-next-line no-null/no-null
      (data === null || data === void 0 ? void 0 : data.block) === null && (data === null || data === void 0 ? void 0 : data.timestamp) === void 0 && (data === null || data === void 0 ? void 0 : data.ttd) === void 0
    ) {
      const msg = "No fork hash calculation possible for future hardfork";
      throw new Error(msg);
    }
    if ((data === null || data === void 0 ? void 0 : data.forkHash) !== null && (data === null || data === void 0 ? void 0 : data.forkHash) !== void 0) {
      return data.forkHash;
    }
    if (!genesisHash)
      throw new Error("genesisHash required for forkHash calculation");
    return this._calcForkHash(hardfork, genesisHash);
  }
  /**
   *
   * @param forkHash Fork hash as a hex string
   * @returns Array with hardfork data (name, block, forkHash)
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  hardforkForForkHash(forkHash) {
    const resArray = this.hardforks().filter((hf) => hf.forkHash === forkHash);
    return resArray.length >= 1 ? resArray[resArray.length - 1] : null;
  }
  /**
   * Sets any missing forkHashes on the passed-in {@link Common} instance
   * @param common The {@link Common} to set the forkHashes for
   * @param genesisHash The genesis block hash
   */
  setForkHashes(genesisHash) {
    var _a3;
    for (const hf of this.hardforks()) {
      const blockOrTime = (_a3 = hf.timestamp) !== null && _a3 !== void 0 ? _a3 : hf.block;
      if (
        // eslint-disable-next-line no-null/no-null
        (hf.forkHash === null || hf.forkHash === void 0) && // eslint-disable-next-line no-null/no-null
        (blockOrTime !== null && blockOrTime !== void 0 || typeof hf.ttd !== "undefined")
      ) {
        hf.forkHash = this.forkHash(hf.name, genesisHash);
      }
    }
  }
  /**
   * Returns the Genesis parameters of the current chain
   * @returns Genesis dictionary
   */
  genesis() {
    return this._chainParams.genesis;
  }
  /**
   * Returns the hardforks for current chain
   * @returns {Array} Array with arrays of hardforks
   */
  hardforks() {
    return this._chainParams.hardforks;
  }
  /**
   * Returns bootstrap nodes for the current chain
   * @returns {Dictionary} Dict with bootstrap nodes
   */
  bootstrapNodes() {
    return this._chainParams.bootstrapNodes;
  }
  /**
   * Returns DNS networks for the current chain
   * @returns {String[]} Array of DNS ENR urls
   */
  dnsNetworks() {
    return this._chainParams.dnsNetworks;
  }
  /**
   * Returns the hardfork set
   * @returns Hardfork name
   */
  hardfork() {
    return this._hardfork;
  }
  /**
   * Returns the Id of current chain
   * @returns chain Id
   */
  chainId() {
    return BigInt(this._chainParams.chainId);
  }
  /**
   * Returns the name of current chain
   * @returns chain name (lower case)
   */
  chainName() {
    return this._chainParams.name;
  }
  /**
   * Returns the Id of current network
   * @returns network Id
   */
  networkId() {
    return BigInt(this._chainParams.networkId);
  }
  /**
   * Returns the active EIPs
   * @returns List of EIPs
   */
  eips() {
    return this._eips;
  }
  /**
   * Returns the consensus type of the network
   * Possible values: "pow"|"poa"|"pos"
   *
   * Note: This value can update along a Hardfork.
   */
  consensusType() {
    const hardfork = this.hardfork();
    let value;
    for (const hfChanges of this.HARDFORK_CHANGES) {
      if ("consensus" in hfChanges[1]) {
        value = hfChanges[1].consensus.type;
      }
      if (hfChanges[0] === hardfork)
        break;
    }
    return value !== null && value !== void 0 ? value : this._chainParams.consensus.type;
  }
  /**
   * Returns the concrete consensus implementation
   * algorithm or protocol for the network
   * e.g. "ethash" for "pow" consensus type,
   * "clique" for "poa" consensus type or
   * "casper" for "pos" consensus type.
   *
   * Note: This value can update along a Hardfork.
   */
  consensusAlgorithm() {
    const hardfork = this.hardfork();
    let value;
    for (const hfChanges of this.HARDFORK_CHANGES) {
      if ("consensus" in hfChanges[1]) {
        value = hfChanges[1].consensus.algorithm;
      }
      if (hfChanges[0] === hardfork)
        break;
    }
    return value !== null && value !== void 0 ? value : this._chainParams.consensus.algorithm;
  }
  /**
   * Returns a dictionary with consensus configuration
   * parameters based on the consensus algorithm
   *
   * Expected returns (parameters must be present in
   * the respective chain json files):
   *
   * ethash: empty object
   * clique: period, epoch
   * casper: empty object
   *
   * Note: This value can update along a Hardfork.
   */
  consensusConfig() {
    var _a3;
    const hardfork = this.hardfork();
    let value;
    for (const hfChanges of this.HARDFORK_CHANGES) {
      if ("consensus" in hfChanges[1]) {
        value = hfChanges[1].consensus[hfChanges[1].consensus.algorithm];
      }
      if (hfChanges[0] === hardfork)
        break;
    }
    return (_a3 = value !== null && value !== void 0 ? value : this._chainParams.consensus[this.consensusAlgorithm()]) !== null && _a3 !== void 0 ? _a3 : {};
  }
  /**
   * Returns a deep copy of this {@link Common} instance.
   */
  copy() {
    const copy = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    copy.removeAllListeners();
    return copy;
  }
  static _getInitializedChains(customChains) {
    const names = {};
    for (const [name2, id] of Object.entries(Chain)) {
      names[id] = name2.toLowerCase();
    }
    const chains = { mainnet: mainnet_default, goerli: goerli_default, sepolia: sepolia_default };
    if (customChains) {
      for (const chain of customChains) {
        const { name: name2 } = chain;
        names[chain.chainId.toString()] = name2;
        chains[name2] = chain;
      }
    }
    chains.names = names;
    return chains;
  }
};

// node_modules/web3-eth-accounts/lib/esm/tx/types.js
var Capability;
(function(Capability2) {
  Capability2[Capability2["EIP155ReplayProtection"] = 155] = "EIP155ReplayProtection";
  Capability2[Capability2["EIP1559FeeMarket"] = 1559] = "EIP1559FeeMarket";
  Capability2[Capability2["EIP2718TypedTransaction"] = 2718] = "EIP2718TypedTransaction";
  Capability2[Capability2["EIP2930AccessLists"] = 2930] = "EIP2930AccessLists";
})(Capability || (Capability = {}));
function isAccessListUint8Array(input) {
  if (input.length === 0) {
    return true;
  }
  const firstItem = input[0];
  if (Array.isArray(firstItem)) {
    return true;
  }
  return false;
}
function isAccessList(input) {
  return !isAccessListUint8Array(input);
}

// node_modules/web3-eth-accounts/lib/esm/tx/address.js
var Address = class _Address {
  constructor(buf) {
    if (buf.length !== 20) {
      throw new Error("Invalid address length");
    }
    this.buf = buf;
  }
  /**
   * Returns the zero address.
   */
  static zero() {
    return new _Address(zeros(20));
  }
  /**
   * Is address equal to another.
   */
  equals(address) {
    return uint8ArrayEquals(this.buf, address.buf);
  }
  /**
   * Is address zero.
   */
  isZero() {
    return this.equals(_Address.zero());
  }
  /**
   * Returns hex encoding of address.
   */
  toString() {
    return bytesToHex(this.buf);
  }
  /**
   * Returns Uint8Array representation of address.
   */
  toArray() {
    return this.buf;
  }
  /**
   * Returns the ethereum address of a given public key.
   * Accepts "Ethereum public keys" and SEC1 encoded keys.
   * @param pubKey The two points of an uncompressed key, unless sanitize is enabled
   * @param sanitize Accept public keys in other formats
   */
  static publicToAddress(_pubKey, sanitize = false) {
    let pubKey = _pubKey;
    assertIsUint8Array(pubKey);
    if (sanitize && pubKey.length !== 64) {
      pubKey = secp256k12.ProjectivePoint.fromHex(pubKey).toRawBytes(false).slice(1);
    }
    if (pubKey.length !== 64) {
      throw new Error("Expected pubKey to be of length 64");
    }
    return keccak256(pubKey).slice(-20);
  }
};

// node_modules/web3-eth-accounts/lib/esm/tx/utils.js
var utils_exports3 = {};
__export(utils_exports3, {
  checkMaxInitCodeSize: () => checkMaxInitCodeSize,
  getAccessListData: () => getAccessListData,
  getAccessListJSON: () => getAccessListJSON,
  getDataFeeEIP2930: () => getDataFeeEIP2930,
  verifyAccessList: () => verifyAccessList
});
var checkMaxInitCodeSize = (common, length) => {
  const maxInitCodeSize = common.param("vm", "maxInitCodeSize");
  if (maxInitCodeSize && BigInt(length) > maxInitCodeSize) {
    throw new Error(`the initcode size of this transaction is too large: it is ${length} while the max is ${common.param("vm", "maxInitCodeSize")}`);
  }
};
var getAccessListData = (accessList) => {
  let AccessListJSON;
  let uint8arrayAccessList;
  if (isAccessList(accessList)) {
    AccessListJSON = accessList;
    const newAccessList = [];
    for (let i = 0; i < accessList.length; i += 1) {
      const item = accessList[i];
      const addressBytes = toUint8Array(item.address);
      const storageItems = [];
      for (let index = 0; index < item.storageKeys.length; index += 1) {
        storageItems.push(toUint8Array(item.storageKeys[index]));
      }
      newAccessList.push([addressBytes, storageItems]);
    }
    uint8arrayAccessList = newAccessList;
  } else {
    uint8arrayAccessList = accessList !== null && accessList !== void 0 ? accessList : [];
    const json = [];
    for (let i = 0; i < uint8arrayAccessList.length; i += 1) {
      const data = uint8arrayAccessList[i];
      const address = bytesToHex(data[0]);
      const storageKeys = [];
      for (let item = 0; item < data[1].length; item += 1) {
        storageKeys.push(bytesToHex(data[1][item]));
      }
      const jsonItem = {
        address,
        storageKeys
      };
      json.push(jsonItem);
    }
    AccessListJSON = json;
  }
  return {
    AccessListJSON,
    accessList: uint8arrayAccessList
  };
};
var verifyAccessList = (accessList) => {
  for (let key = 0; key < accessList.length; key += 1) {
    const accessListItem = accessList[key];
    const address = accessListItem[0];
    const storageSlots = accessListItem[1];
    if (accessListItem[2] !== void 0) {
      throw new Error("Access list item cannot have 3 elements. It can only have an address, and an array of storage slots.");
    }
    if (address.length !== 20) {
      throw new Error("Invalid EIP-2930 transaction: address length should be 20 bytes");
    }
    for (let storageSlot = 0; storageSlot < storageSlots.length; storageSlot += 1) {
      if (storageSlots[storageSlot].length !== 32) {
        throw new Error("Invalid EIP-2930 transaction: storage slot length should be 32 bytes");
      }
    }
  }
};
var getAccessListJSON = (accessList) => {
  const accessListJSON = [];
  for (let index = 0; index < accessList.length; index += 1) {
    const item = accessList[index];
    const JSONItem = {
      address: bytesToHex(setLengthLeft(item[0], 20)),
      storageKeys: []
    };
    const storageSlots = item && item[1];
    for (let slot = 0; slot < storageSlots.length; slot += 1) {
      const storageSlot = storageSlots[slot];
      JSONItem.storageKeys.push(bytesToHex(setLengthLeft(storageSlot, 32)));
    }
    accessListJSON.push(JSONItem);
  }
  return accessListJSON;
};
var getDataFeeEIP2930 = (accessList, common) => {
  const accessListStorageKeyCost = common.param("gasPrices", "accessListStorageKeyCost");
  const accessListAddressCost = common.param("gasPrices", "accessListAddressCost");
  let slots = 0;
  for (let index = 0; index < accessList.length; index += 1) {
    const item = accessList[index];
    const storageSlots = item[1];
    slots += storageSlots.length;
  }
  const addresses = accessList.length;
  return addresses * Number(accessListAddressCost) + slots * Number(accessListStorageKeyCost);
};

// node_modules/web3-eth-accounts/lib/esm/tx/baseTransaction.js
var BaseTransaction = class {
  constructor(txData, opts) {
    var _a3, _b;
    this.cache = {
      hash: void 0,
      dataFee: void 0
    };
    this.activeCapabilities = [];
    this.DEFAULT_CHAIN = Chain.Mainnet;
    this.DEFAULT_HARDFORK = Hardfork.Merge;
    const { nonce, gasLimit, to, value, data, v, r, s, type } = txData;
    this._type = Number(uint8ArrayToBigInt(toUint8Array(type)));
    this.txOptions = opts;
    const toB = toUint8Array(to === "" ? "0x" : to);
    const vB = toUint8Array(v === "" ? "0x" : v);
    const rB = toUint8Array(r === "" ? "0x" : r);
    const sB = toUint8Array(s === "" ? "0x" : s);
    this.nonce = uint8ArrayToBigInt(toUint8Array(nonce === "" ? "0x" : nonce));
    this.gasLimit = uint8ArrayToBigInt(toUint8Array(gasLimit === "" ? "0x" : gasLimit));
    this.to = toB.length > 0 ? new Address(toB) : void 0;
    this.value = uint8ArrayToBigInt(toUint8Array(value === "" ? "0x" : value));
    this.data = toUint8Array(data === "" ? "0x" : data);
    this.v = vB.length > 0 ? uint8ArrayToBigInt(vB) : void 0;
    this.r = rB.length > 0 ? uint8ArrayToBigInt(rB) : void 0;
    this.s = sB.length > 0 ? uint8ArrayToBigInt(sB) : void 0;
    this._validateCannotExceedMaxInteger({ value: this.value, r: this.r, s: this.s });
    this._validateCannotExceedMaxInteger({ gasLimit: this.gasLimit }, 64);
    this._validateCannotExceedMaxInteger({ nonce: this.nonce }, 64, true);
    const createContract = this.to === void 0 || this.to === null;
    const allowUnlimitedInitCodeSize = (_a3 = opts.allowUnlimitedInitCodeSize) !== null && _a3 !== void 0 ? _a3 : false;
    const common = (_b = opts.common) !== null && _b !== void 0 ? _b : this._getCommon();
    if (createContract && common.isActivatedEIP(3860) && !allowUnlimitedInitCodeSize) {
      checkMaxInitCodeSize(common, this.data.length);
    }
  }
  /**
   * Returns the transaction type.
   *
   * Note: legacy txs will return tx type `0`.
   */
  get type() {
    return this._type;
  }
  /**
   * Checks if a tx type defining capability is active
   * on a tx, for example the EIP-1559 fee market mechanism
   * or the EIP-2930 access list feature.
   *
   * Note that this is different from the tx type itself,
   * so EIP-2930 access lists can very well be active
   * on an EIP-1559 tx for example.
   *
   * This method can be useful for feature checks if the
   * tx type is unknown (e.g. when instantiated with
   * the tx factory).
   *
   * See `Capabilites` in the `types` module for a reference
   * on all supported capabilities.
   */
  supports(capability) {
    return this.activeCapabilities.includes(capability);
  }
  validate(stringError = false) {
    const errors = [];
    if (this.getBaseFee() > this.gasLimit) {
      errors.push(`gasLimit is too low. given ${this.gasLimit}, need at least ${this.getBaseFee()}`);
    }
    if (this.isSigned() && !this.verifySignature()) {
      errors.push("Invalid Signature");
    }
    return stringError ? errors : errors.length === 0;
  }
  _validateYParity() {
    const { v } = this;
    if (v !== void 0 && v !== BigInt(0) && v !== BigInt(1)) {
      const msg = this._errorMsg("The y-parity of the transaction should either be 0 or 1");
      throw new Error(msg);
    }
  }
  /**
   * EIP-2: All transaction signatures whose s-value is greater than secp256k1n/2are considered invalid.
   * Reasoning: https://ethereum.stackexchange.com/a/55728
   */
  _validateHighS() {
    const { s } = this;
    if (this.common.gteHardfork("homestead") && s !== void 0 && s > SECP256K1_ORDER_DIV_2) {
      const msg = this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
      throw new Error(msg);
    }
  }
  /**
   * The minimum amount of gas the tx must have (DataFee + TxFee + Creation Fee)
   */
  getBaseFee() {
    const txFee = this.common.param("gasPrices", "tx");
    let fee = this.getDataFee();
    if (txFee)
      fee += txFee;
    if (this.common.gteHardfork("homestead") && this.toCreationAddress()) {
      const txCreationFee = this.common.param("gasPrices", "txCreation");
      if (txCreationFee)
        fee += txCreationFee;
    }
    return fee;
  }
  /**
   * The amount of gas paid for the data in this tx
   */
  getDataFee() {
    const txDataZero = this.common.param("gasPrices", "txDataZero");
    const txDataNonZero = this.common.param("gasPrices", "txDataNonZero");
    let cost = BigInt(0);
    for (let i = 0; i < this.data.length; i += 1) {
      this.data[i] === 0 ? cost += txDataZero : cost += txDataNonZero;
    }
    if ((this.to === void 0 || this.to === null) && this.common.isActivatedEIP(3860)) {
      const dataLength = BigInt(Math.ceil(this.data.length / 32));
      const initCodeCost = this.common.param("gasPrices", "initCodeWordCost") * dataLength;
      cost += initCodeCost;
    }
    return cost;
  }
  /**
   * If the tx's `to` is to the creation address
   */
  toCreationAddress() {
    return this.to === void 0 || this.to.buf.length === 0;
  }
  isSigned() {
    const { v, r, s } = this;
    if (v === void 0 || r === void 0 || s === void 0) {
      return false;
    }
    return true;
  }
  /**
   * Determines if the signature is valid
   */
  verifySignature() {
    try {
      const publicKey = this.getSenderPublicKey();
      return unpadUint8Array(publicKey).length !== 0;
    } catch (e) {
      return false;
    }
  }
  /**
   * Returns the sender's address
   */
  getSenderAddress() {
    return new Address(Address.publicToAddress(this.getSenderPublicKey()));
  }
  /**
   * Signs a transaction.
   *
   * Note that the signed tx is returned as a new object,
   * use as follows:
   * ```javascript
   * const signedTx = tx.sign(privateKey)
   * ```
   */
  sign(privateKey) {
    if (privateKey.length !== 32) {
      const msg = this._errorMsg("Private key must be 32 bytes in length.");
      throw new Error(msg);
    }
    let hackApplied = false;
    if (this.type === 0 && this.common.gteHardfork("spuriousDragon") && !this.supports(Capability.EIP155ReplayProtection)) {
      this.activeCapabilities.push(Capability.EIP155ReplayProtection);
      hackApplied = true;
    }
    const msgHash = this.getMessageToSign(true);
    const { v, r, s } = this._ecsign(msgHash, privateKey);
    const tx = this._processSignature(v, r, s);
    if (hackApplied) {
      const index = this.activeCapabilities.indexOf(Capability.EIP155ReplayProtection);
      if (index > -1) {
        this.activeCapabilities.splice(index, 1);
      }
    }
    return tx;
  }
  /**
   * Does chain ID checks on common and returns a common
   * to be used on instantiation
   * @hidden
   *
   * @param common - {@link Common} instance from tx options
   * @param chainId - Chain ID from tx options (typed txs) or signature (legacy tx)
   */
  _getCommon(common, chainId) {
    var _a3, _b, _c, _d;
    if (chainId !== void 0) {
      const chainIdBigInt = uint8ArrayToBigInt(toUint8Array(chainId));
      if (common) {
        if (common.chainId() !== chainIdBigInt) {
          const msg = this._errorMsg("The chain ID does not match the chain ID of Common");
          throw new Error(msg);
        }
        return common.copy();
      }
      if (Common.isSupportedChainId(chainIdBigInt)) {
        return new Common({ chain: chainIdBigInt, hardfork: this.DEFAULT_HARDFORK });
      }
      return Common.custom({
        name: "custom-chain",
        networkId: chainIdBigInt,
        chainId: chainIdBigInt
      }, { baseChain: this.DEFAULT_CHAIN, hardfork: this.DEFAULT_HARDFORK });
    }
    if ((common === null || common === void 0 ? void 0 : common.copy) && typeof (common === null || common === void 0 ? void 0 : common.copy) === "function") {
      return common.copy();
    }
    if (common) {
      const hardfork = typeof common.hardfork === "function" ? common.hardfork() : (
        // eslint-disable-next-line @typescript-eslint/unbound-method
        common.hardfork
      );
      return Common.custom({
        name: "custom-chain",
        networkId: common.networkId ? common.networkId() : (_b = BigInt((_a3 = common.customChain) === null || _a3 === void 0 ? void 0 : _a3.networkId)) !== null && _b !== void 0 ? _b : void 0,
        chainId: common.chainId ? common.chainId() : (_d = BigInt((_c = common.customChain) === null || _c === void 0 ? void 0 : _c.chainId)) !== null && _d !== void 0 ? _d : void 0
      }, {
        baseChain: this.DEFAULT_CHAIN,
        hardfork: hardfork || this.DEFAULT_HARDFORK
      });
    }
    return new Common({ chain: this.DEFAULT_CHAIN, hardfork: this.DEFAULT_HARDFORK });
  }
  /**
   * Validates that an object with BigInt values cannot exceed the specified bit limit.
   * @param values Object containing string keys and BigInt values
   * @param bits Number of bits to check (64 or 256)
   * @param cannotEqual Pass true if the number also cannot equal one less the maximum value
   */
  _validateCannotExceedMaxInteger(values, bits = 256, cannotEqual = false) {
    for (const [key, value] of Object.entries(values)) {
      switch (bits) {
        case 64:
          if (cannotEqual) {
            if (value !== void 0 && value >= MAX_UINT64) {
              const msg = this._errorMsg(`${key} cannot equal or exceed MAX_UINT64 (2^64-1), given ${value}`);
              throw new Error(msg);
            }
          } else if (value !== void 0 && value > MAX_UINT64) {
            const msg = this._errorMsg(`${key} cannot exceed MAX_UINT64 (2^64-1), given ${value}`);
            throw new Error(msg);
          }
          break;
        case 256:
          if (cannotEqual) {
            if (value !== void 0 && value >= MAX_INTEGER) {
              const msg = this._errorMsg(`${key} cannot equal or exceed MAX_INTEGER (2^256-1), given ${value}`);
              throw new Error(msg);
            }
          } else if (value !== void 0 && value > MAX_INTEGER) {
            const msg = this._errorMsg(`${key} cannot exceed MAX_INTEGER (2^256-1), given ${value}`);
            throw new Error(msg);
          }
          break;
        default: {
          const msg = this._errorMsg("unimplemented bits value");
          throw new Error(msg);
        }
      }
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static _validateNotArray(values) {
    const txDataKeys = [
      "nonce",
      "gasPrice",
      "gasLimit",
      "to",
      "value",
      "data",
      "v",
      "r",
      "s",
      "type",
      "baseFee",
      "maxFeePerGas",
      "chainId"
    ];
    for (const [key, value] of Object.entries(values)) {
      if (txDataKeys.includes(key)) {
        if (Array.isArray(value)) {
          throw new Error(`${key} cannot be an array`);
        }
      }
    }
  }
  /**
   * Returns the shared error postfix part for _error() method
   * tx type implementations.
   */
  _getSharedErrorPostfix() {
    let hash2 = "";
    try {
      hash2 = this.isSigned() ? bytesToHex(this.hash()) : "not available (unsigned)";
    } catch (e) {
      hash2 = "error";
    }
    let isSigned = "";
    try {
      isSigned = this.isSigned().toString();
    } catch (e) {
      hash2 = "error";
    }
    let hf = "";
    try {
      hf = this.common.hardfork();
    } catch (e) {
      hf = "error";
    }
    let postfix = `tx type=${this.type} hash=${hash2} nonce=${this.nonce} value=${this.value} `;
    postfix += `signed=${isSigned} hf=${hf}`;
    return postfix;
  }
  // eslint-disable-next-line class-methods-use-this
  _ecsign(msgHash, privateKey, chainId) {
    const signature = secp256k12.sign(msgHash, privateKey);
    const signatureBytes = signature.toCompactRawBytes();
    const r = signatureBytes.subarray(0, 32);
    const s = signatureBytes.subarray(32, 64);
    const v = chainId === void 0 ? BigInt(signature.recovery + 27) : BigInt(signature.recovery + 35) + BigInt(chainId) * BigInt(2);
    return { r, s, v };
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromSerializedTx(serialized, opts = {}) {
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromTxData(txData, opts = {}) {
  }
};

// node_modules/web3-eth-accounts/lib/esm/tx/eip1559Transaction.js
var TRANSACTION_TYPE = 2;
var TRANSACTION_TYPE_UINT8ARRAY = hexToBytes(TRANSACTION_TYPE.toString(16).padStart(2, "0"));
var FeeMarketEIP1559Transaction = class _FeeMarketEIP1559Transaction extends BaseTransaction {
  /**
   * Instantiate a transaction from a data dictionary.
   *
   * Format: { chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
   * accessList, v, r, s }
   *
   * Notes:
   * - `chainId` will be set automatically if not provided
   * - All parameters are optional and have some basic default values
   */
  static fromTxData(txData, opts = {}) {
    return new _FeeMarketEIP1559Transaction(txData, opts);
  }
  /**
   * Instantiate a transaction from the serialized tx.
   *
   * Format: `0x02 || rlp([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
   * accessList, signatureYParity, signatureR, signatureS])`
   */
  static fromSerializedTx(serialized, opts = {}) {
    if (!uint8ArrayEquals(serialized.subarray(0, 1), TRANSACTION_TYPE_UINT8ARRAY)) {
      throw new Error(`Invalid serialized tx input: not an EIP-1559 transaction (wrong tx type, expected: ${TRANSACTION_TYPE}, received: ${bytesToHex(serialized.subarray(0, 1))}`);
    }
    const values = import_rlp.RLP.decode(serialized.subarray(1));
    if (!Array.isArray(values)) {
      throw new Error("Invalid serialized tx input: must be array");
    }
    return _FeeMarketEIP1559Transaction.fromValuesArray(values, opts);
  }
  /**
   * Create a transaction from a values array.
   *
   * Format: `[chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
   * accessList, signatureYParity, signatureR, signatureS]`
   */
  static fromValuesArray(values, opts = {}) {
    if (values.length !== 9 && values.length !== 12) {
      throw new Error("Invalid EIP-1559 transaction. Only expecting 9 values (for unsigned tx) or 12 values (for signed tx).");
    }
    const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data, accessList, v, r, s] = values;
    this._validateNotArray({ chainId, v });
    validateNoLeadingZeroes({
      nonce,
      maxPriorityFeePerGas,
      maxFeePerGas,
      gasLimit,
      value,
      v,
      r,
      s
    });
    return new _FeeMarketEIP1559Transaction({
      chainId: uint8ArrayToBigInt(chainId),
      nonce,
      maxPriorityFeePerGas,
      maxFeePerGas,
      gasLimit,
      to,
      value,
      data,
      accessList: accessList !== null && accessList !== void 0 ? accessList : [],
      v: v !== void 0 ? uint8ArrayToBigInt(v) : void 0,
      // EIP2930 supports v's with value 0 (empty Uint8Array)
      r,
      s
    }, opts);
  }
  /**
   * This constructor takes the values, validates them, assigns them and freezes the object.
   *
   * It is not recommended to use this constructor directly. Instead use
   * the static factory methods to assist in creating a Transaction object from
   * varying data types.
   */
  constructor(txData, opts = {}) {
    var _a3;
    super(Object.assign(Object.assign({}, txData), { type: TRANSACTION_TYPE }), opts);
    this.DEFAULT_HARDFORK = "london";
    const { chainId, accessList, maxFeePerGas, maxPriorityFeePerGas } = txData;
    this.common = this._getCommon(opts.common, chainId);
    this.chainId = this.common.chainId();
    if (!this.common.isActivatedEIP(1559)) {
      throw new Error("EIP-1559 not enabled on Common");
    }
    this.activeCapabilities = this.activeCapabilities.concat([1559, 2718, 2930]);
    const accessListData = getAccessListData(accessList !== null && accessList !== void 0 ? accessList : []);
    this.accessList = accessListData.accessList;
    this.AccessListJSON = accessListData.AccessListJSON;
    verifyAccessList(this.accessList);
    this.maxFeePerGas = uint8ArrayToBigInt(toUint8Array(maxFeePerGas === "" ? "0x" : maxFeePerGas));
    this.maxPriorityFeePerGas = uint8ArrayToBigInt(toUint8Array(maxPriorityFeePerGas === "" ? "0x" : maxPriorityFeePerGas));
    this._validateCannotExceedMaxInteger({
      maxFeePerGas: this.maxFeePerGas,
      maxPriorityFeePerGas: this.maxPriorityFeePerGas
    });
    BaseTransaction._validateNotArray(txData);
    if (this.gasLimit * this.maxFeePerGas > MAX_INTEGER) {
      const msg = this._errorMsg("gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)");
      throw new Error(msg);
    }
    if (this.maxFeePerGas < this.maxPriorityFeePerGas) {
      const msg = this._errorMsg("maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)");
      throw new Error(msg);
    }
    this._validateYParity();
    this._validateHighS();
    const freeze = (_a3 = opts === null || opts === void 0 ? void 0 : opts.freeze) !== null && _a3 !== void 0 ? _a3 : true;
    if (freeze) {
      Object.freeze(this);
    }
  }
  /**
   * The amount of gas paid for the data in this tx
   */
  getDataFee() {
    if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) {
      return this.cache.dataFee.value;
    }
    let cost = super.getDataFee();
    cost += BigInt(getDataFeeEIP2930(this.accessList, this.common));
    if (Object.isFrozen(this)) {
      this.cache.dataFee = {
        value: cost,
        hardfork: this.common.hardfork()
      };
    }
    return cost;
  }
  /**
   * The up front amount that an account must have for this transaction to be valid
   * @param baseFee The base fee of the block (will be set to 0 if not provided)
   */
  getUpfrontCost(baseFee = BigInt(0)) {
    const prio = this.maxPriorityFeePerGas;
    const maxBase = this.maxFeePerGas - baseFee;
    const inclusionFeePerGas = prio < maxBase ? prio : maxBase;
    const gasPrice = inclusionFeePerGas + baseFee;
    return this.gasLimit * gasPrice + this.value;
  }
  /**
   * Returns a Uint8Array Array of the raw Uint8Arrays of the EIP-1559 transaction, in order.
   *
   * Format: `[chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
   * accessList, signatureYParity, signatureR, signatureS]`
   *
   * Use {@link FeeMarketEIP1559Transaction.serialize} to add a transaction to a block
   * with {@link Block.fromValuesArray}.
   *
   * For an unsigned tx this method uses the empty Uint8Array values for the
   * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
   * representation for external signing use {@link FeeMarketEIP1559Transaction.getMessageToSign}.
   */
  raw() {
    return [
      bigIntToUnpaddedUint8Array(this.chainId),
      bigIntToUnpaddedUint8Array(this.nonce),
      bigIntToUnpaddedUint8Array(this.maxPriorityFeePerGas),
      bigIntToUnpaddedUint8Array(this.maxFeePerGas),
      bigIntToUnpaddedUint8Array(this.gasLimit),
      this.to !== void 0 ? this.to.buf : Uint8Array.from([]),
      bigIntToUnpaddedUint8Array(this.value),
      this.data,
      this.accessList,
      this.v !== void 0 ? bigIntToUnpaddedUint8Array(this.v) : Uint8Array.from([]),
      this.r !== void 0 ? bigIntToUnpaddedUint8Array(this.r) : Uint8Array.from([]),
      this.s !== void 0 ? bigIntToUnpaddedUint8Array(this.s) : Uint8Array.from([])
    ];
  }
  /**
   * Returns the serialized encoding of the EIP-1559 transaction.
   *
   * Format: `0x02 || rlp([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
   * accessList, signatureYParity, signatureR, signatureS])`
   *
   * Note that in contrast to the legacy tx serialization format this is not
   * valid RLP any more due to the raw tx type preceding and concatenated to
   * the RLP encoding of the values.
   */
  serialize() {
    const base2 = this.raw();
    return uint8ArrayConcat(TRANSACTION_TYPE_UINT8ARRAY, import_rlp.RLP.encode(base2));
  }
  /**
   * Returns the serialized unsigned tx (hashed or raw), which can be used
   * to sign the transaction (e.g. for sending to a hardware wallet).
   *
   * Note: in contrast to the legacy tx the raw message format is already
   * serialized and doesn't need to be RLP encoded any more.
   *
   * ```javascript
   * const serializedMessage = tx.getMessageToSign(false) // use this for the HW wallet input
   * ```
   *
   * @param hashMessage - Return hashed message if set to true (default: true)
   */
  getMessageToSign(hashMessage2 = true) {
    const base2 = this.raw().slice(0, 9);
    const message = uint8ArrayConcat(TRANSACTION_TYPE_UINT8ARRAY, import_rlp.RLP.encode(base2));
    if (hashMessage2) {
      return keccak256(message);
    }
    return message;
  }
  /**
   * Computes a sha3-256 hash of the serialized tx.
   *
   * This method can only be used for signed txs (it throws otherwise).
   * Use {@link FeeMarketEIP1559Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
   */
  hash() {
    if (!this.isSigned()) {
      const msg = this._errorMsg("Cannot call hash method if transaction is not signed");
      throw new Error(msg);
    }
    if (Object.isFrozen(this)) {
      if (!this.cache.hash) {
        this.cache.hash = keccak256(this.serialize());
      }
      return this.cache.hash;
    }
    return keccak256(this.serialize());
  }
  /**
   * Computes a sha3-256 hash which can be used to verify the signature
   */
  getMessageToVerifySignature() {
    return this.getMessageToSign();
  }
  /**
   * Returns the public key of the sender
   */
  getSenderPublicKey() {
    if (!this.isSigned()) {
      const msg = this._errorMsg("Cannot call this method if transaction is not signed");
      throw new Error(msg);
    }
    const msgHash = this.getMessageToVerifySignature();
    const { v, r, s } = this;
    this._validateHighS();
    try {
      return ecrecover(
        msgHash,
        v + BigInt(27),
        // Recover the 27 which was stripped from ecsign
        bigIntToUnpaddedUint8Array(r),
        bigIntToUnpaddedUint8Array(s)
      );
    } catch (e) {
      const msg = this._errorMsg("Invalid Signature");
      throw new Error(msg);
    }
  }
  _processSignature(v, r, s) {
    const opts = Object.assign(Object.assign({}, this.txOptions), { common: this.common });
    return _FeeMarketEIP1559Transaction.fromTxData({
      chainId: this.chainId,
      nonce: this.nonce,
      maxPriorityFeePerGas: this.maxPriorityFeePerGas,
      maxFeePerGas: this.maxFeePerGas,
      gasLimit: this.gasLimit,
      to: this.to,
      value: this.value,
      data: this.data,
      accessList: this.accessList,
      v: v - BigInt(27),
      // This looks extremely hacky: /util actually adds 27 to the value, the recovery bit is either 0 or 1.
      r: uint8ArrayToBigInt(r),
      s: uint8ArrayToBigInt(s)
    }, opts);
  }
  /**
   * Returns an object with the JSON representation of the transaction
   */
  toJSON() {
    const accessListJSON = getAccessListJSON(this.accessList);
    return {
      chainId: bigIntToHex(this.chainId),
      nonce: bigIntToHex(this.nonce),
      maxPriorityFeePerGas: bigIntToHex(this.maxPriorityFeePerGas),
      maxFeePerGas: bigIntToHex(this.maxFeePerGas),
      gasLimit: bigIntToHex(this.gasLimit),
      to: this.to !== void 0 ? this.to.toString() : void 0,
      value: bigIntToHex(this.value),
      data: bytesToHex(this.data),
      accessList: accessListJSON,
      v: this.v !== void 0 ? bigIntToHex(this.v) : void 0,
      r: this.r !== void 0 ? bigIntToHex(this.r) : void 0,
      s: this.s !== void 0 ? bigIntToHex(this.s) : void 0
    };
  }
  /**
   * Return a compact error string representation of the object
   */
  errorStr() {
    let errorStr = this._getSharedErrorPostfix();
    errorStr += ` maxFeePerGas=${this.maxFeePerGas} maxPriorityFeePerGas=${this.maxPriorityFeePerGas}`;
    return errorStr;
  }
  /**
   * Internal helper function to create an annotated error message
   *
   * @param msg Base error message
   * @hidden
   */
  _errorMsg(msg) {
    return `${msg} (${this.errorStr()})`;
  }
};

// node_modules/web3-eth-accounts/lib/esm/tx/eip2930Transaction.js
var import_rlp2 = __toESM(require_dist(), 1);
var TRANSACTION_TYPE2 = 1;
var TRANSACTION_TYPE_UINT8ARRAY2 = hexToBytes(TRANSACTION_TYPE2.toString(16).padStart(2, "0"));
var AccessListEIP2930Transaction = class _AccessListEIP2930Transaction extends BaseTransaction {
  /**
   * Instantiate a transaction from a data dictionary.
   *
   * Format: { chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
   * v, r, s }
   *
   * Notes:
   * - `chainId` will be set automatically if not provided
   * - All parameters are optional and have some basic default values
   */
  static fromTxData(txData, opts = {}) {
    return new _AccessListEIP2930Transaction(txData, opts);
  }
  /**
   * Instantiate a transaction from the serialized tx.
   *
   * Format: `0x01 || rlp([chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
   * signatureYParity (v), signatureR (r), signatureS (s)])`
   */
  static fromSerializedTx(serialized, opts = {}) {
    if (!uint8ArrayEquals(serialized.subarray(0, 1), TRANSACTION_TYPE_UINT8ARRAY2)) {
      throw new Error(`Invalid serialized tx input: not an EIP-2930 transaction (wrong tx type, expected: ${TRANSACTION_TYPE2}, received: ${bytesToHex(serialized.subarray(0, 1))}`);
    }
    const values = import_rlp2.RLP.decode(Uint8Array.from(serialized.subarray(1)));
    if (!Array.isArray(values)) {
      throw new Error("Invalid serialized tx input: must be array");
    }
    return _AccessListEIP2930Transaction.fromValuesArray(values, opts);
  }
  /**
   * Create a transaction from a values array.
   *
   * Format: `[chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
   * signatureYParity (v), signatureR (r), signatureS (s)]`
   */
  static fromValuesArray(values, opts = {}) {
    if (values.length !== 8 && values.length !== 11) {
      throw new Error("Invalid EIP-2930 transaction. Only expecting 8 values (for unsigned tx) or 11 values (for signed tx).");
    }
    const [chainId, nonce, gasPrice, gasLimit, to, value, data, accessList, v, r, s] = values;
    this._validateNotArray({ chainId, v });
    validateNoLeadingZeroes({ nonce, gasPrice, gasLimit, value, v, r, s });
    const emptyAccessList = [];
    return new _AccessListEIP2930Transaction({
      chainId: uint8ArrayToBigInt(chainId),
      nonce,
      gasPrice,
      gasLimit,
      to,
      value,
      data,
      accessList: accessList !== null && accessList !== void 0 ? accessList : emptyAccessList,
      v: v !== void 0 ? uint8ArrayToBigInt(v) : void 0,
      // EIP2930 supports v's with value 0 (empty Uint8Array)
      r,
      s
    }, opts);
  }
  /**
   * This constructor takes the values, validates them, assigns them and freezes the object.
   *
   * It is not recommended to use this constructor directly. Instead use
   * the static factory methods to assist in creating a Transaction object from
   * varying data types.
   */
  constructor(txData, opts = {}) {
    var _a3;
    super(Object.assign(Object.assign({}, txData), { type: TRANSACTION_TYPE2 }), opts);
    this.DEFAULT_HARDFORK = "berlin";
    const { chainId, accessList, gasPrice } = txData;
    this.common = this._getCommon(opts.common, chainId);
    this.chainId = this.common.chainId();
    if (!this.common.isActivatedEIP(2930)) {
      throw new Error("EIP-2930 not enabled on Common");
    }
    this.activeCapabilities = this.activeCapabilities.concat([2718, 2930]);
    const accessListData = getAccessListData(accessList !== null && accessList !== void 0 ? accessList : []);
    this.accessList = accessListData.accessList;
    this.AccessListJSON = accessListData.AccessListJSON;
    verifyAccessList(this.accessList);
    this.gasPrice = uint8ArrayToBigInt(toUint8Array(gasPrice === "" ? "0x" : gasPrice));
    this._validateCannotExceedMaxInteger({
      gasPrice: this.gasPrice
    });
    BaseTransaction._validateNotArray(txData);
    if (this.gasPrice * this.gasLimit > MAX_INTEGER) {
      const msg = this._errorMsg("gasLimit * gasPrice cannot exceed MAX_INTEGER");
      throw new Error(msg);
    }
    this._validateYParity();
    this._validateHighS();
    const freeze = (_a3 = opts === null || opts === void 0 ? void 0 : opts.freeze) !== null && _a3 !== void 0 ? _a3 : true;
    if (freeze) {
      Object.freeze(this);
    }
  }
  /**
   * The amount of gas paid for the data in this tx
   */
  getDataFee() {
    if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) {
      return this.cache.dataFee.value;
    }
    let cost = super.getDataFee();
    cost += BigInt(getDataFeeEIP2930(this.accessList, this.common));
    if (Object.isFrozen(this)) {
      this.cache.dataFee = {
        value: cost,
        hardfork: this.common.hardfork()
      };
    }
    return cost;
  }
  /**
   * The up front amount that an account must have for this transaction to be valid
   */
  getUpfrontCost() {
    return this.gasLimit * this.gasPrice + this.value;
  }
  /**
   * Returns a Uint8Array Array of the raw Uint8Arrays of the EIP-2930 transaction, in order.
   *
   * Format: `[chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
   * signatureYParity (v), signatureR (r), signatureS (s)]`
   *
   * Use {@link AccessListEIP2930Transaction.serialize} to add a transaction to a block
   * with {@link Block.fromValuesArray}.
   *
   * For an unsigned tx this method uses the empty UINT8ARRAY values for the
   * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
   * representation for external signing use {@link AccessListEIP2930Transaction.getMessageToSign}.
   */
  raw() {
    return [
      bigIntToUnpaddedUint8Array(this.chainId),
      bigIntToUnpaddedUint8Array(this.nonce),
      bigIntToUnpaddedUint8Array(this.gasPrice),
      bigIntToUnpaddedUint8Array(this.gasLimit),
      this.to !== void 0 ? this.to.buf : Uint8Array.from([]),
      bigIntToUnpaddedUint8Array(this.value),
      this.data,
      this.accessList,
      this.v !== void 0 ? bigIntToUnpaddedUint8Array(this.v) : Uint8Array.from([]),
      this.r !== void 0 ? bigIntToUnpaddedUint8Array(this.r) : Uint8Array.from([]),
      this.s !== void 0 ? bigIntToUnpaddedUint8Array(this.s) : Uint8Array.from([])
    ];
  }
  /**
   * Returns the serialized encoding of the EIP-2930 transaction.
   *
   * Format: `0x01 || rlp([chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
   * signatureYParity (v), signatureR (r), signatureS (s)])`
   *
   * Note that in contrast to the legacy tx serialization format this is not
   * valid RLP any more due to the raw tx type preceding and concatenated to
   * the RLP encoding of the values.
   */
  serialize() {
    const base2 = this.raw();
    return uint8ArrayConcat(TRANSACTION_TYPE_UINT8ARRAY2, import_rlp2.RLP.encode(base2));
  }
  /**
   * Returns the serialized unsigned tx (hashed or raw), which can be used
   * to sign the transaction (e.g. for sending to a hardware wallet).
   *
   * Note: in contrast to the legacy tx the raw message format is already
   * serialized and doesn't need to be RLP encoded any more.
   *
   * ```javascript
   * const serializedMessage = tx.getMessageToSign(false) // use this for the HW wallet input
   * ```
   *
   * @param hashMessage - Return hashed message if set to true (default: true)
   */
  getMessageToSign(hashMessage2 = true) {
    const base2 = this.raw().slice(0, 8);
    const message = uint8ArrayConcat(TRANSACTION_TYPE_UINT8ARRAY2, import_rlp2.RLP.encode(base2));
    if (hashMessage2) {
      return keccak256(message);
    }
    return message;
  }
  /**
   * Computes a sha3-256 hash of the serialized tx.
   *
   * This method can only be used for signed txs (it throws otherwise).
   * Use {@link AccessListEIP2930Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
   */
  hash() {
    if (!this.isSigned()) {
      const msg = this._errorMsg("Cannot call hash method if transaction is not signed");
      throw new Error(msg);
    }
    if (Object.isFrozen(this)) {
      if (!this.cache.hash) {
        this.cache.hash = keccak256(this.serialize());
      }
      return this.cache.hash;
    }
    return keccak256(this.serialize());
  }
  /**
   * Computes a sha3-256 hash which can be used to verify the signature
   */
  getMessageToVerifySignature() {
    return this.getMessageToSign();
  }
  /**
   * Returns the public key of the sender
   */
  getSenderPublicKey() {
    if (!this.isSigned()) {
      const msg = this._errorMsg("Cannot call this method if transaction is not signed");
      throw new Error(msg);
    }
    const msgHash = this.getMessageToVerifySignature();
    const { v, r, s } = this;
    this._validateHighS();
    try {
      return ecrecover(
        msgHash,
        v + BigInt(27),
        // Recover the 27 which was stripped from ecsign
        bigIntToUnpaddedUint8Array(r),
        bigIntToUnpaddedUint8Array(s)
      );
    } catch (e) {
      const msg = this._errorMsg("Invalid Signature");
      throw new Error(msg);
    }
  }
  _processSignature(v, r, s) {
    const opts = Object.assign(Object.assign({}, this.txOptions), { common: this.common });
    return _AccessListEIP2930Transaction.fromTxData({
      chainId: this.chainId,
      nonce: this.nonce,
      gasPrice: this.gasPrice,
      gasLimit: this.gasLimit,
      to: this.to,
      value: this.value,
      data: this.data,
      accessList: this.accessList,
      v: v - BigInt(27),
      // This looks extremely hacky: /util actually adds 27 to the value, the recovery bit is either 0 or 1.
      r: uint8ArrayToBigInt(r),
      s: uint8ArrayToBigInt(s)
    }, opts);
  }
  /**
   * Returns an object with the JSON representation of the transaction
   */
  toJSON() {
    const accessListJSON = getAccessListJSON(this.accessList);
    return {
      chainId: bigIntToHex(this.chainId),
      nonce: bigIntToHex(this.nonce),
      gasPrice: bigIntToHex(this.gasPrice),
      gasLimit: bigIntToHex(this.gasLimit),
      to: this.to !== void 0 ? this.to.toString() : void 0,
      value: bigIntToHex(this.value),
      data: bytesToHex(this.data),
      accessList: accessListJSON,
      v: this.v !== void 0 ? bigIntToHex(this.v) : void 0,
      r: this.r !== void 0 ? bigIntToHex(this.r) : void 0,
      s: this.s !== void 0 ? bigIntToHex(this.s) : void 0
    };
  }
  /**
   * Return a compact error string representation of the object
   */
  errorStr() {
    var _a3, _b;
    let errorStr = this._getSharedErrorPostfix();
    errorStr += ` gasPrice=${this.gasPrice} accessListCount=${(_b = (_a3 = this.accessList) === null || _a3 === void 0 ? void 0 : _a3.length) !== null && _b !== void 0 ? _b : 0}`;
    return errorStr;
  }
  /**
   * Internal helper function to create an annotated error message
   *
   * @param msg Base error message
   * @hidden
   */
  _errorMsg(msg) {
    return `${msg} (${this.errorStr()})`;
  }
};

// node_modules/web3-eth-accounts/lib/esm/tx/legacyTransaction.js
var import_rlp3 = __toESM(require_dist(), 1);
var TRANSACTION_TYPE3 = 0;
function meetsEIP155(_v, chainId) {
  const v = Number(_v);
  const chainIdDoubled = Number(chainId) * 2;
  return v === chainIdDoubled + 35 || v === chainIdDoubled + 36;
}
var Transaction = class _Transaction extends BaseTransaction {
  /**
   * Instantiate a transaction from a data dictionary.
   *
   * Format: { nonce, gasPrice, gasLimit, to, value, data, v, r, s }
   *
   * Notes:
   * - All parameters are optional and have some basic default values
   */
  static fromTxData(txData, opts = {}) {
    return new _Transaction(txData, opts);
  }
  /**
   * Instantiate a transaction from the serialized tx.
   *
   * Format: `rlp([nonce, gasPrice, gasLimit, to, value, data, v, r, s])`
   */
  static fromSerializedTx(serialized, opts = {}) {
    const values = import_rlp3.RLP.decode(serialized);
    if (!Array.isArray(values)) {
      throw new Error("Invalid serialized tx input. Must be array");
    }
    return this.fromValuesArray(values, opts);
  }
  /**
   * Create a transaction from a values array.
   *
   * Format: `[nonce, gasPrice, gasLimit, to, value, data, v, r, s]`
   */
  static fromValuesArray(values, opts = {}) {
    if (values.length !== 6 && values.length !== 9) {
      throw new Error("Invalid transaction. Only expecting 6 values (for unsigned tx) or 9 values (for signed tx).");
    }
    const [nonce, gasPrice, gasLimit, to, value, data, v, r, s] = values;
    validateNoLeadingZeroes({ nonce, gasPrice, gasLimit, value, v, r, s });
    return new _Transaction({
      nonce,
      gasPrice,
      gasLimit,
      to,
      value,
      data,
      v,
      r,
      s
    }, opts);
  }
  /**
   * This constructor takes the values, validates them, assigns them and freezes the object.
   *
   * It is not recommended to use this constructor directly. Instead use
   * the static factory methods to assist in creating a Transaction object from
   * varying data types.
   */
  constructor(txData, opts = {}) {
    var _a3;
    super(Object.assign(Object.assign({}, txData), { type: TRANSACTION_TYPE3 }), opts);
    this.common = this._validateTxV(this.v, opts.common);
    this.gasPrice = uint8ArrayToBigInt(toUint8Array(txData.gasPrice === "" ? "0x" : txData.gasPrice));
    if (this.gasPrice * this.gasLimit > MAX_INTEGER) {
      const msg = this._errorMsg("gas limit * gasPrice cannot exceed MAX_INTEGER (2^256-1)");
      throw new Error(msg);
    }
    this._validateCannotExceedMaxInteger({ gasPrice: this.gasPrice });
    BaseTransaction._validateNotArray(txData);
    if (this.common.gteHardfork("spuriousDragon")) {
      if (!this.isSigned()) {
        this.activeCapabilities.push(Capability.EIP155ReplayProtection);
      } else {
        if (meetsEIP155(this.v, this.common.chainId())) {
          this.activeCapabilities.push(Capability.EIP155ReplayProtection);
        }
      }
    }
    const freeze = (_a3 = opts === null || opts === void 0 ? void 0 : opts.freeze) !== null && _a3 !== void 0 ? _a3 : true;
    if (freeze) {
      Object.freeze(this);
    }
  }
  /**
   * Returns a Uint8Array Array of the raw Uint8Arrays of the legacy transaction, in order.
   *
   * Format: `[nonce, gasPrice, gasLimit, to, value, data, v, r, s]`
   *
   * For legacy txs this is also the correct format to add transactions
   * to a block with {@link Block.fromValuesArray} (use the `serialize()` method
   * for typed txs).
   *
   * For an unsigned tx this method returns the empty Uint8Array values
   * for the signature parameters `v`, `r` and `s`. For an EIP-155 compliant
   * representation have a look at {@link Transaction.getMessageToSign}.
   */
  raw() {
    return [
      bigIntToUnpaddedUint8Array(this.nonce),
      bigIntToUnpaddedUint8Array(this.gasPrice),
      bigIntToUnpaddedUint8Array(this.gasLimit),
      this.to !== void 0 ? this.to.buf : Uint8Array.from([]),
      bigIntToUnpaddedUint8Array(this.value),
      this.data,
      this.v !== void 0 ? bigIntToUnpaddedUint8Array(this.v) : Uint8Array.from([]),
      this.r !== void 0 ? bigIntToUnpaddedUint8Array(this.r) : Uint8Array.from([]),
      this.s !== void 0 ? bigIntToUnpaddedUint8Array(this.s) : Uint8Array.from([])
    ];
  }
  /**
   * Returns the serialized encoding of the legacy transaction.
   *
   * Format: `rlp([nonce, gasPrice, gasLimit, to, value, data, v, r, s])`
   *
   * For an unsigned tx this method uses the empty Uint8Array values for the
   * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
   * representation for external signing use {@link Transaction.getMessageToSign}.
   */
  serialize() {
    return import_rlp3.RLP.encode(this.raw());
  }
  _getMessageToSign() {
    const values = [
      bigIntToUnpaddedUint8Array(this.nonce),
      bigIntToUnpaddedUint8Array(this.gasPrice),
      bigIntToUnpaddedUint8Array(this.gasLimit),
      this.to !== void 0 ? this.to.buf : Uint8Array.from([]),
      bigIntToUnpaddedUint8Array(this.value),
      this.data
    ];
    if (this.supports(Capability.EIP155ReplayProtection)) {
      values.push(toUint8Array(this.common.chainId()));
      values.push(unpadUint8Array(toUint8Array(0)));
      values.push(unpadUint8Array(toUint8Array(0)));
    }
    return values;
  }
  getMessageToSign(hashMessage2 = true) {
    const message = this._getMessageToSign();
    if (hashMessage2) {
      return keccak256(import_rlp3.RLP.encode(message));
    }
    return message;
  }
  /**
   * The amount of gas paid for the data in this tx
   */
  getDataFee() {
    if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) {
      return this.cache.dataFee.value;
    }
    if (Object.isFrozen(this)) {
      this.cache.dataFee = {
        value: super.getDataFee(),
        hardfork: this.common.hardfork()
      };
    }
    return super.getDataFee();
  }
  /**
   * The up front amount that an account must have for this transaction to be valid
   */
  getUpfrontCost() {
    return this.gasLimit * this.gasPrice + this.value;
  }
  /**
   * Computes a sha3-256 hash of the serialized tx.
   *
   * This method can only be used for signed txs (it throws otherwise).
   * Use {@link Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
   */
  hash() {
    if (!this.isSigned()) {
      const msg = this._errorMsg("Cannot call hash method if transaction is not signed");
      throw new Error(msg);
    }
    if (Object.isFrozen(this)) {
      if (!this.cache.hash) {
        this.cache.hash = keccak256(import_rlp3.RLP.encode(this.raw()));
      }
      return this.cache.hash;
    }
    return keccak256(import_rlp3.RLP.encode(this.raw()));
  }
  /**
   * Computes a sha3-256 hash which can be used to verify the signature
   */
  getMessageToVerifySignature() {
    if (!this.isSigned()) {
      const msg = this._errorMsg("This transaction is not signed");
      throw new Error(msg);
    }
    const message = this._getMessageToSign();
    return keccak256(import_rlp3.RLP.encode(message));
  }
  /**
   * Returns the public key of the sender
   */
  getSenderPublicKey() {
    const msgHash = this.getMessageToVerifySignature();
    const { v, r, s } = this;
    this._validateHighS();
    try {
      return ecrecover(msgHash, v, bigIntToUnpaddedUint8Array(r), bigIntToUnpaddedUint8Array(s), this.supports(Capability.EIP155ReplayProtection) ? this.common.chainId() : void 0);
    } catch (e) {
      const msg = this._errorMsg("Invalid Signature");
      throw new Error(msg);
    }
  }
  /**
   * Process the v, r, s values from the `sign` method of the base transaction.
   */
  _processSignature(_v, r, s) {
    let v = _v;
    if (this.supports(Capability.EIP155ReplayProtection)) {
      v += this.common.chainId() * BigInt(2) + BigInt(8);
    }
    const opts = Object.assign(Object.assign({}, this.txOptions), { common: this.common });
    return _Transaction.fromTxData({
      nonce: this.nonce,
      gasPrice: this.gasPrice,
      gasLimit: this.gasLimit,
      to: this.to,
      value: this.value,
      data: this.data,
      v,
      r: uint8ArrayToBigInt(r),
      s: uint8ArrayToBigInt(s)
    }, opts);
  }
  /**
   * Returns an object with the JSON representation of the transaction.
   */
  toJSON() {
    return {
      nonce: bigIntToHex(this.nonce),
      gasPrice: bigIntToHex(this.gasPrice),
      gasLimit: bigIntToHex(this.gasLimit),
      to: this.to !== void 0 ? this.to.toString() : void 0,
      value: bigIntToHex(this.value),
      data: bytesToHex(this.data),
      v: this.v !== void 0 ? bigIntToHex(this.v) : void 0,
      r: this.r !== void 0 ? bigIntToHex(this.r) : void 0,
      s: this.s !== void 0 ? bigIntToHex(this.s) : void 0
    };
  }
  /**
   * Validates tx's `v` value
   */
  _validateTxV(_v, common) {
    let chainIdBigInt;
    const v = _v !== void 0 ? Number(_v) : void 0;
    if (v !== void 0) {
      if (v < 37 && v !== 27 && v !== 28) {
        throw new Error(`Legacy txs need either v = 27/28 or v >= 37 (EIP-155 replay protection), got v = ${v}`);
      }
    }
    if (v !== void 0 && v !== 0 && (!common || common.gteHardfork("spuriousDragon")) && v !== 27 && v !== 28) {
      if (common) {
        if (!meetsEIP155(BigInt(v), common.chainId())) {
          throw new Error(`Incompatible EIP155-based V ${v} and chain id ${common.chainId()}. See the Common parameter of the Transaction constructor to set the chain id.`);
        }
      } else {
        let numSub;
        if ((v - 35) % 2 === 0) {
          numSub = 35;
        } else {
          numSub = 36;
        }
        chainIdBigInt = BigInt(v - numSub) / BigInt(2);
      }
    }
    return this._getCommon(common, chainIdBigInt);
  }
  /**
   * Return a compact error string representation of the object
   */
  errorStr() {
    let errorStr = this._getSharedErrorPostfix();
    errorStr += ` gasPrice=${this.gasPrice}`;
    return errorStr;
  }
  /**
   * Internal helper function to create an annotated error message
   *
   * @param msg Base error message
   * @hidden
   */
  _errorMsg(msg) {
    return `${msg} (${this.errorStr()})`;
  }
};

// node_modules/web3-eth-accounts/lib/esm/tx/transactionFactory.js
var extraTxTypes = /* @__PURE__ */ new Map();
var TransactionFactory = class _TransactionFactory {
  // It is not possible to instantiate a TransactionFactory object.
  // eslint-disable-next-line no-useless-constructor, @typescript-eslint/no-empty-function
  constructor() {
  }
  static typeToInt(txType) {
    return Number(uint8ArrayToBigInt(toUint8Array(txType)));
  }
  static registerTransactionType(type, txClass) {
    const txType = _TransactionFactory.typeToInt(type);
    extraTxTypes.set(txType, txClass);
  }
  /**
   * Create a transaction from a `txData` object
   *
   * @param txData - The transaction data. The `type` field will determine which transaction type is returned (if undefined, creates a legacy transaction)
   * @param txOptions - Options to pass on to the constructor of the transaction
   */
  static fromTxData(txData, txOptions = {}) {
    if (!("type" in txData) || txData.type === void 0) {
      return Transaction.fromTxData(txData, txOptions);
    }
    const txType = _TransactionFactory.typeToInt(txData.type);
    if (txType === 0) {
      return Transaction.fromTxData(txData, txOptions);
    }
    if (txType === 1) {
      return AccessListEIP2930Transaction.fromTxData(
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        txData,
        txOptions
      );
    }
    if (txType === 2) {
      return FeeMarketEIP1559Transaction.fromTxData(
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        txData,
        txOptions
      );
    }
    const ExtraTransaction = extraTxTypes.get(txType);
    if (ExtraTransaction === null || ExtraTransaction === void 0 ? void 0 : ExtraTransaction.fromTxData) {
      return ExtraTransaction.fromTxData(txData, txOptions);
    }
    throw new Error(`Tx instantiation with type ${txType} not supported`);
  }
  /**
   * This method tries to decode serialized data.
   *
   * @param data - The data Uint8Array
   * @param txOptions - The transaction options
   */
  static fromSerializedData(data, txOptions = {}) {
    if (data[0] <= 127) {
      switch (data[0]) {
        case 1:
          return AccessListEIP2930Transaction.fromSerializedTx(data, txOptions);
        case 2:
          return FeeMarketEIP1559Transaction.fromSerializedTx(data, txOptions);
        default: {
          const ExtraTransaction = extraTxTypes.get(Number(data[0]));
          if (ExtraTransaction === null || ExtraTransaction === void 0 ? void 0 : ExtraTransaction.fromSerializedTx) {
            return ExtraTransaction.fromSerializedTx(data, txOptions);
          }
          throw new Error(`TypedTransaction with ID ${data[0]} unknown`);
        }
      }
    } else {
      return Transaction.fromSerializedTx(data, txOptions);
    }
  }
  /**
   * When decoding a BlockBody, in the transactions field, a field is either:
   * A Uint8Array (a TypedTransaction - encoded as TransactionType || rlp(TransactionPayload))
   * A Uint8Array[] (Legacy Transaction)
   * This method returns the right transaction.
   *
   * @param data - A Uint8Array or Uint8Array[]
   * @param txOptions - The transaction options
   */
  static fromBlockBodyData(data, txOptions = {}) {
    if (isUint8Array(data)) {
      return this.fromSerializedData(data, txOptions);
    }
    if (Array.isArray(data)) {
      return Transaction.fromValuesArray(data, txOptions);
    }
    throw new Error("Cannot decode transaction: unknown type input");
  }
};

// node_modules/web3-eth-accounts/lib/esm/account.js
var __awaiter6 = function(thisArg, _arguments, P, generator) {
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
var parseAndValidatePrivateKey = (data, ignoreLength) => {
  let privateKeyUint8Array;
  if (!ignoreLength && typeof data === "string" && isHexStrict(data) && data.length !== 66) {
    throw new PrivateKeyLengthError();
  }
  try {
    privateKeyUint8Array = isUint8Array(data) ? data : bytesToUint8Array(data);
  } catch (_a3) {
    throw new InvalidPrivateKeyError();
  }
  if (!ignoreLength && privateKeyUint8Array.byteLength !== 32) {
    throw new PrivateKeyLengthError();
  }
  return privateKeyUint8Array;
};
var hashMessage = (message, skipPrefix = false) => {
  const messageHex = isHexStrict(message) ? message : utf8ToHex(message);
  const messageBytes = hexToBytes(messageHex);
  const preamble = hexToBytes(fromUtf8(`Ethereum Signed Message:
${messageBytes.byteLength}`));
  const ethMessage = skipPrefix ? messageBytes : uint8ArrayConcat(preamble, messageBytes);
  return sha3Raw(ethMessage);
};
var signMessageWithPrivateKey = (hash2, privateKey) => {
  const privateKeyUint8Array = parseAndValidatePrivateKey(privateKey);
  const signature = secp256k12.sign(hash2.substring(2), privateKeyUint8Array);
  const signatureBytes = signature.toCompactRawBytes();
  const r = signature.r.toString(16).padStart(64, "0");
  const s = signature.s.toString(16).padStart(64, "0");
  const v = signature.recovery + 27;
  return {
    messageHash: hash2,
    v: numberToHex(v),
    r: `0x${r}`,
    s: `0x${s}`,
    signature: `${bytesToHex(signatureBytes)}${v.toString(16)}`
  };
};
var sign = (data, privateKey) => {
  const hash2 = hashMessage(data);
  const { messageHash, v, r, s, signature } = signMessageWithPrivateKey(hash2, privateKey);
  return {
    message: data,
    messageHash,
    v,
    r,
    s,
    signature
  };
};
var signRaw = (data, privateKey) => {
  const hash2 = hashMessage(data, true);
  const { messageHash, v, r, s, signature } = signMessageWithPrivateKey(hash2, privateKey);
  return {
    message: data,
    messageHash,
    v,
    r,
    s,
    signature
  };
};
var signTransaction = (transaction, privateKey) => __awaiter6(void 0, void 0, void 0, function* () {
  const signedTx = transaction.sign(hexToBytes(privateKey));
  if (isNullish(signedTx.v) || isNullish(signedTx.r) || isNullish(signedTx.s))
    throw new TransactionSigningError("Signer Error");
  const validationErrors = signedTx.validate(true);
  if (validationErrors.length > 0) {
    let errorString = "Signer Error ";
    for (const validationError of validationErrors) {
      errorString += `${errorString} ${validationError}.`;
    }
    throw new TransactionSigningError(errorString);
  }
  const rawTx = bytesToHex(signedTx.serialize());
  const txHash = sha3Raw(rawTx);
  return {
    messageHash: bytesToHex(signedTx.getMessageToSign(true)),
    v: `0x${signedTx.v.toString(16)}`,
    r: `0x${signedTx.r.toString(16).padStart(64, "0")}`,
    s: `0x${signedTx.s.toString(16).padStart(64, "0")}`,
    rawTransaction: rawTx,
    transactionHash: bytesToHex(txHash)
  };
});
var recoverTransaction = (rawTransaction) => {
  if (isNullish(rawTransaction))
    throw new UndefinedRawTransactionError();
  const tx = TransactionFactory.fromSerializedData(hexToBytes(rawTransaction));
  return toChecksumAddress(tx.getSenderAddress().toString());
};
var recover = (data, signatureOrV, prefixedOrR, s, prefixed) => {
  if (typeof data === "object") {
    const signatureStr = `${data.r}${data.s.slice(2)}${data.v.slice(2)}`;
    return recover(data.messageHash, signatureStr, prefixedOrR);
  }
  if (typeof signatureOrV === "string" && typeof prefixedOrR === "string" && !isNullish(s)) {
    const signatureStr = `${prefixedOrR}${s.slice(2)}${signatureOrV.slice(2)}`;
    return recover(data, signatureStr, prefixed);
  }
  if (isNullish(signatureOrV))
    throw new InvalidSignatureError("signature string undefined");
  const V_INDEX = 130;
  const hashedMessage = prefixedOrR ? data : hashMessage(data);
  let v = parseInt(signatureOrV.substring(V_INDEX), 16);
  if (v > 26) {
    v -= 27;
  }
  const ecPublicKey = secp256k12.Signature.fromCompact(signatureOrV.slice(2, V_INDEX)).addRecoveryBit(v).recoverPublicKey(hashedMessage.replace("0x", "")).toRawBytes(false);
  const publicHash = sha3Raw(ecPublicKey.subarray(1));
  const address = toChecksumAddress(`0x${publicHash.slice(-40)}`);
  return address;
};
var privateKeyToAddress = (privateKey) => {
  const privateKeyUint8Array = parseAndValidatePrivateKey(privateKey);
  const publicKey = secp256k12.getPublicKey(privateKeyUint8Array, false);
  const publicKeyHash = sha3Raw(publicKey.slice(1));
  const address = publicKeyHash.slice(-40);
  return toChecksumAddress(`0x${address}`);
};
var privateKeyToPublicKey = (privateKey, isCompressed) => {
  const privateKeyUint8Array = parseAndValidatePrivateKey(privateKey);
  return `0x${bytesToHex(secp256k12.getPublicKey(privateKeyUint8Array, isCompressed)).slice(4)}`;
};
var encrypt2 = (privateKey, password, options) => __awaiter6(void 0, void 0, void 0, function* () {
  var _a3, _b, _c, _d, _e, _f, _g;
  const privateKeyUint8Array = parseAndValidatePrivateKey(privateKey);
  let salt;
  if (options === null || options === void 0 ? void 0 : options.salt) {
    salt = typeof options.salt === "string" ? hexToBytes(options.salt) : options.salt;
  } else {
    salt = randomBytes2(32);
  }
  if (!(isString(password) || isUint8Array(password))) {
    throw new InvalidPasswordError();
  }
  const uint8ArrayPassword = typeof password === "string" ? hexToBytes(utf8ToHex(password)) : password;
  let initializationVector;
  if (options === null || options === void 0 ? void 0 : options.iv) {
    initializationVector = typeof options.iv === "string" ? hexToBytes(options.iv) : options.iv;
    if (initializationVector.length !== 16) {
      throw new IVLengthError();
    }
  } else {
    initializationVector = randomBytes2(16);
  }
  const kdf = (_a3 = options === null || options === void 0 ? void 0 : options.kdf) !== null && _a3 !== void 0 ? _a3 : "scrypt";
  let derivedKey;
  let kdfparams;
  if (kdf === "pbkdf2") {
    kdfparams = {
      dklen: (_b = options === null || options === void 0 ? void 0 : options.dklen) !== null && _b !== void 0 ? _b : 32,
      salt: bytesToHex(salt).replace("0x", ""),
      c: (_c = options === null || options === void 0 ? void 0 : options.c) !== null && _c !== void 0 ? _c : 262144,
      prf: "hmac-sha256"
    };
    if (kdfparams.c < 1e3) {
      throw new PBKDF2IterationsError();
    }
    derivedKey = pbkdf2Sync(uint8ArrayPassword, salt, kdfparams.c, kdfparams.dklen, "sha256");
  } else if (kdf === "scrypt") {
    kdfparams = {
      n: (_d = options === null || options === void 0 ? void 0 : options.n) !== null && _d !== void 0 ? _d : 8192,
      r: (_e = options === null || options === void 0 ? void 0 : options.r) !== null && _e !== void 0 ? _e : 8,
      p: (_f = options === null || options === void 0 ? void 0 : options.p) !== null && _f !== void 0 ? _f : 1,
      dklen: (_g = options === null || options === void 0 ? void 0 : options.dklen) !== null && _g !== void 0 ? _g : 32,
      salt: bytesToHex(salt).replace("0x", "")
    };
    derivedKey = scryptSync(uint8ArrayPassword, salt, kdfparams.n, kdfparams.p, kdfparams.r, kdfparams.dklen);
  } else {
    throw new InvalidKdfError();
  }
  const cipher = yield encrypt(privateKeyUint8Array, derivedKey.slice(0, 16), initializationVector, "aes-128-ctr");
  const ciphertext = bytesToHex(cipher).slice(2);
  const mac = sha3Raw(uint8ArrayConcat(derivedKey.slice(16, 32), cipher)).replace("0x", "");
  return {
    version: 3,
    id: uuidV4(),
    address: privateKeyToAddress(privateKeyUint8Array).toLowerCase().replace("0x", ""),
    crypto: {
      ciphertext,
      cipherparams: {
        iv: bytesToHex(initializationVector).replace("0x", "")
      },
      cipher: "aes-128-ctr",
      kdf,
      kdfparams,
      mac
    }
  };
});
var privateKeyToAccount = (privateKey, ignoreLength) => {
  const privateKeyUint8Array = parseAndValidatePrivateKey(privateKey, ignoreLength);
  return {
    address: privateKeyToAddress(privateKeyUint8Array),
    privateKey: bytesToHex(privateKeyUint8Array),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    signTransaction: (_tx) => {
      throw new TransactionSigningError("Do not have network access to sign the transaction");
    },
    sign: (data) => sign(typeof data === "string" ? data : JSON.stringify(data), privateKeyUint8Array),
    encrypt: (password, options) => __awaiter6(void 0, void 0, void 0, function* () {
      return encrypt2(privateKeyUint8Array, password, options);
    })
  };
};
var create = () => {
  const privateKey = secp256k12.utils.randomPrivateKey();
  return privateKeyToAccount(`${bytesToHex(privateKey)}`);
};
var decrypt2 = (keystore, password, nonStrict) => __awaiter6(void 0, void 0, void 0, function* () {
  const json = typeof keystore === "object" ? keystore : JSON.parse(nonStrict ? keystore.toLowerCase() : keystore);
  validator.validateJSONSchema(keyStoreSchema, json);
  if (json.version !== 3)
    throw new KeyStoreVersionError();
  const uint8ArrayPassword = typeof password === "string" ? hexToBytes(utf8ToHex(password)) : password;
  validator.validate(["bytes"], [uint8ArrayPassword]);
  let derivedKey;
  if (json.crypto.kdf === "scrypt") {
    const kdfparams = json.crypto.kdfparams;
    const uint8ArraySalt = typeof kdfparams.salt === "string" ? hexToBytes(kdfparams.salt) : kdfparams.salt;
    derivedKey = scryptSync(uint8ArrayPassword, uint8ArraySalt, kdfparams.n, kdfparams.p, kdfparams.r, kdfparams.dklen);
  } else if (json.crypto.kdf === "pbkdf2") {
    const kdfparams = json.crypto.kdfparams;
    const uint8ArraySalt = typeof kdfparams.salt === "string" ? hexToBytes(kdfparams.salt) : kdfparams.salt;
    derivedKey = pbkdf2Sync(uint8ArrayPassword, uint8ArraySalt, kdfparams.c, kdfparams.dklen, "sha256");
  } else {
    throw new InvalidKdfError();
  }
  const ciphertext = hexToBytes(json.crypto.ciphertext);
  const mac = sha3Raw(uint8ArrayConcat(derivedKey.slice(16, 32), ciphertext)).replace("0x", "");
  if (mac !== json.crypto.mac) {
    throw new KeyDerivationError();
  }
  const seed = yield decrypt(hexToBytes(json.crypto.ciphertext), derivedKey.slice(0, 16), hexToBytes(json.crypto.cipherparams.iv));
  return privateKeyToAccount(seed);
});

// node_modules/web3-core/lib/esm/web3_batch_request.js
var __awaiter7 = function(thisArg, _arguments, P, generator) {
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
var DEFAULT_BATCH_REQUEST_TIMEOUT = 1e3;
var Web3BatchRequest = class {
  constructor(requestManager) {
    this._requestManager = requestManager;
    this._requests = /* @__PURE__ */ new Map();
  }
  get requests() {
    return [...this._requests.values()].map((r) => r.payload);
  }
  add(request) {
    const payload = json_rpc_exports.toPayload(request);
    const promise = new Web3DeferredPromise();
    this._requests.set(payload.id, { payload, promise });
    return promise;
  }
  // eslint-disable-next-line class-methods-use-this
  execute(options) {
    return __awaiter7(this, void 0, void 0, function* () {
      var _a3;
      if (this.requests.length === 0) {
        return Promise.resolve([]);
      }
      const request = new Web3DeferredPromise({
        timeout: (_a3 = options === null || options === void 0 ? void 0 : options.timeout) !== null && _a3 !== void 0 ? _a3 : DEFAULT_BATCH_REQUEST_TIMEOUT,
        eagerStart: true,
        timeoutMessage: "Batch request timeout"
      });
      this._processBatchRequest(request).catch((err) => request.reject(err));
      request.catch((err) => {
        if (err instanceof OperationTimeoutError) {
          this._abortAllRequests("Batch request timeout");
        }
        request.reject(err);
      });
      return request;
    });
  }
  _processBatchRequest(promise) {
    return __awaiter7(this, void 0, void 0, function* () {
      var _a3, _b;
      const response = yield this._requestManager.sendBatch([...this._requests.values()].map((r) => r.payload));
      if (response.length !== this._requests.size) {
        this._abortAllRequests("Invalid batch response");
        throw new ResponseError(response, `Batch request size mismatch the results size. Requests: ${this._requests.size}, Responses: ${response.length}`);
      }
      const requestIds = this.requests.map((r) => r.id).map(Number).sort((a, b) => a - b);
      const responseIds = response.map((r) => r.id).map(Number).sort((a, b) => a - b);
      if (JSON.stringify(requestIds) !== JSON.stringify(responseIds)) {
        this._abortAllRequests("Invalid batch response");
        throw new ResponseError(response, `Batch request mismatch the results. Requests: [${requestIds.join()}], Responses: [${responseIds.join()}]`);
      }
      for (const res of response) {
        if (json_rpc_exports.isResponseWithResult(res)) {
          (_a3 = this._requests.get(res.id)) === null || _a3 === void 0 ? void 0 : _a3.promise.resolve(res.result);
        } else if (json_rpc_exports.isResponseWithError(res)) {
          (_b = this._requests.get(res.id)) === null || _b === void 0 ? void 0 : _b.promise.reject(res.error);
        }
      }
      promise.resolve(response);
    });
  }
  _abortAllRequests(msg) {
    for (const { promise } of this._requests.values()) {
      promise.reject(new OperationAbortError(msg));
    }
  }
};

// node_modules/web3-core/lib/esm/web3_context.js
var __awaiter8 = function(thisArg, _arguments, P, generator) {
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
var Web3Context = class _Web3Context extends Web3Config {
  constructor(providerOrContext) {
    var _a3;
    super();
    this.providers = Web3RequestManager.providers;
    if (isNullish2(providerOrContext) || typeof providerOrContext === "string" && providerOrContext.trim() !== "" || isSupportedProvider(providerOrContext)) {
      this._requestManager = new Web3RequestManager(providerOrContext);
      this._subscriptionManager = new Web3SubscriptionManager(this._requestManager, {});
      return;
    }
    const { config, provider, requestManager, subscriptionManager, registeredSubscriptions: registeredSubscriptions2, accountProvider, wallet, requestManagerMiddleware } = providerOrContext;
    this.setConfig(config !== null && config !== void 0 ? config : {});
    this._requestManager = requestManager !== null && requestManager !== void 0 ? requestManager : new Web3RequestManager(provider, (_a3 = config === null || config === void 0 ? void 0 : config.enableExperimentalFeatures) === null || _a3 === void 0 ? void 0 : _a3.useSubscriptionWhenCheckingBlockTimeout, requestManagerMiddleware);
    if (subscriptionManager) {
      this._subscriptionManager = subscriptionManager;
    } else {
      this._subscriptionManager = new Web3SubscriptionManager(this.requestManager, registeredSubscriptions2 !== null && registeredSubscriptions2 !== void 0 ? registeredSubscriptions2 : {});
    }
    if (accountProvider) {
      this._accountProvider = accountProvider;
    }
    if (wallet) {
      this._wallet = wallet;
    }
  }
  get requestManager() {
    return this._requestManager;
  }
  /**
   * Will return the current subscriptionManager ({@link Web3SubscriptionManager})
   */
  get subscriptionManager() {
    return this._subscriptionManager;
  }
  get wallet() {
    return this._wallet;
  }
  get accountProvider() {
    return this._accountProvider;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromContextObject(...args) {
    return new this(...args.reverse());
  }
  getContextObject() {
    var _a3;
    return {
      config: this.config,
      provider: this.provider,
      requestManager: this.requestManager,
      subscriptionManager: this.subscriptionManager,
      registeredSubscriptions: (_a3 = this.subscriptionManager) === null || _a3 === void 0 ? void 0 : _a3.registeredSubscriptions,
      providers: this.providers,
      wallet: this.wallet,
      accountProvider: this.accountProvider
    };
  }
  /**
   * Use to create new object of any type extended by `Web3Context`
   * and link it to current context. This can be used to initiate a global context object
   * and then use it to create new objects of any type extended by `Web3Context`.
   */
  use(ContextRef, ...args) {
    const newContextChild = new ContextRef(...[...args, this.getContextObject()]);
    this.on(Web3ConfigEvent.CONFIG_CHANGE, (event) => {
      newContextChild.setConfig({ [event.name]: event.newValue });
    });
    this[ContextRef.name] = newContextChild;
    return newContextChild;
  }
  /**
   * Link current context to another context.
   */
  link(parentContext) {
    this.setConfig(parentContext.config);
    this._requestManager = parentContext.requestManager;
    this.provider = parentContext.provider;
    this._subscriptionManager = parentContext.subscriptionManager;
    this._wallet = parentContext.wallet;
    this._accountProvider = parentContext._accountProvider;
    parentContext.on(Web3ConfigEvent.CONFIG_CHANGE, (event) => {
      this.setConfig({ [event.name]: event.newValue });
    });
  }
  // eslint-disable-next-line no-use-before-define
  registerPlugin(plugin) {
    if (this[plugin.pluginNamespace] !== void 0)
      throw new ExistingPluginNamespaceError(plugin.pluginNamespace);
    const _pluginObject = {
      [plugin.pluginNamespace]: plugin
    };
    _pluginObject[plugin.pluginNamespace].link(this);
    Object.assign(this, _pluginObject);
  }
  /**
   * Will return the current provider.
   *
   * @returns Returns the current provider
   * @example
   * ```ts
   * const web3 = new Web3Context("http://localhost:8545");
   * console.log(web3.provider);
   * > HttpProvider {
   * 	clientUrl: 'http://localhost:8545',
   * 	httpProviderOptions: undefined
   *  }
   * ```
   */
  get provider() {
    return this.currentProvider;
  }
  /**
   * Will set the current provider.
   *
   * @param provider - The provider to set
   *
   * Accepted providers are of type {@link SupportedProviders}
   * @example
   * ```ts
   *  const web3Context = new web3ContextContext("http://localhost:8545");
   * web3Context.provider = "ws://localhost:8545";
   * console.log(web3Context.provider);
   * > WebSocketProvider {
   * _eventEmitter: EventEmitter {
   * _events: [Object: null prototype] {},
   * _eventsCount: 0,
   * ...
   * }
   * ```
   */
  set provider(provider) {
    this.requestManager.setProvider(provider);
  }
  /**
   * Will return the current provider. (The same as `provider`)
   *
   * @returns Returns the current provider
   * @example
   * ```ts
   * const web3Context = new Web3Context("http://localhost:8545");
   * console.log(web3Context.provider);
   * > HttpProvider {
   * 	clientUrl: 'http://localhost:8545',
   * 	httpProviderOptions: undefined
   *  }
   * ```
   */
  get currentProvider() {
    return this.requestManager.provider;
  }
  /**
   * Will set the current provider. (The same as `provider`)
   *
   * @param provider - {@link SupportedProviders} The provider to set
   *
   * @example
   * ```ts
   *  const web3Context = new Web3Context("http://localhost:8545");
   * web3Context.currentProvider = "ws://localhost:8545";
   * console.log(web3Context.provider);
   * > WebSocketProvider {
   * _eventEmitter: EventEmitter {
   * _events: [Object: null prototype] {},
   * _eventsCount: 0,
   * ...
   * }
   * ```
   */
  set currentProvider(provider) {
    this.requestManager.setProvider(provider);
  }
  /**
   * Will return the givenProvider if available.
   *
   * When using web3.js in an Ethereum compatible browser, it will set with the current native provider by that browser. Will return the given provider by the (browser) environment, otherwise `undefined`.
   */
  // eslint-disable-next-line class-methods-use-this
  get givenProvider() {
    return _Web3Context.givenProvider;
  }
  /**
   * Will set the provider.
   *
   * @param provider - {@link SupportedProviders} The provider to set
   * @returns Returns true if the provider was set
   */
  setProvider(provider) {
    this.provider = provider;
    return true;
  }
  setRequestManagerMiddleware(requestManagerMiddleware) {
    this.requestManager.setMiddleware(requestManagerMiddleware);
  }
  /**
   * Will return the {@link Web3BatchRequest} constructor.
   */
  get BatchRequest() {
    return Web3BatchRequest.bind(void 0, this._requestManager);
  }
  /**
   * This method allows extending the web3 modules.
   * Note: This method is only for backward compatibility, and It is recommended to use Web3 v4 Plugin feature for extending web3.js functionality if you are developing something new.
   */
  extend(extendObj) {
    var _a3;
    if (extendObj.property && !this[extendObj.property])
      this[extendObj.property] = {};
    (_a3 = extendObj.methods) === null || _a3 === void 0 ? void 0 : _a3.forEach((element) => {
      const method = (...givenParams) => __awaiter8(this, void 0, void 0, function* () {
        return this.requestManager.send({
          method: element.call,
          params: givenParams
        });
      });
      if (extendObj.property)
        this[extendObj.property][element.name] = method;
      else
        this[element.name] = method;
    });
    return this;
  }
};
Web3Context.providers = Web3RequestManager.providers;
var Web3PluginBase = class extends Web3Context {
  // eslint-disable-next-line class-methods-use-this
  registerNewTransactionType(type, txClass) {
    TransactionFactory.registerTransactionType(type, txClass);
  }
};
var Web3EthPluginBase = class extends Web3PluginBase {
};

// node_modules/web3-core/lib/esm/formatters.js
var formatters_exports = {};
__export(formatters_exports, {
  inputAddressFormatter: () => inputAddressFormatter,
  inputBlockNumberFormatter: () => inputBlockNumberFormatter,
  inputCallFormatter: () => inputCallFormatter,
  inputDefaultBlockNumberFormatter: () => inputDefaultBlockNumberFormatter,
  inputLogFormatter: () => inputLogFormatter,
  inputPostFormatter: () => inputPostFormatter,
  inputSignFormatter: () => inputSignFormatter,
  inputStorageKeysFormatter: () => inputStorageKeysFormatter,
  inputTopicFormatter: () => inputTopicFormatter,
  inputTransactionFormatter: () => inputTransactionFormatter,
  outputBigIntegerFormatter: () => outputBigIntegerFormatter,
  outputBlockFormatter: () => outputBlockFormatter,
  outputLogFormatter: () => outputLogFormatter,
  outputPostFormatter: () => outputPostFormatter,
  outputProofFormatter: () => outputProofFormatter,
  outputSyncingFormatter: () => outputSyncingFormatter,
  outputTransactionFormatter: () => outputTransactionFormatter,
  outputTransactionReceiptFormatter: () => outputTransactionReceiptFormatter,
  txInputOptionsFormatter: () => txInputOptionsFormatter
});

// node_modules/web3-eth-iban/lib/esm/index.js
var esm_exports8 = {};
__export(esm_exports8, {
  Iban: () => Iban,
  default: () => esm_default
});

// node_modules/web3-eth-iban/lib/esm/iban.js
var Iban = class _Iban {
  /**
   * Construct a direct or indirect IBAN that has conversion methods and validity checks.
   * If the provided string was not of either the length of a direct IBAN (34 or 35),
   * nor the length of an indirect IBAN (20), an Error will be thrown ('Invalid IBAN was provided').
   *
   * @param iban - a Direct or an Indirect IBAN
   * @returns - Iban instance
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS");
   * > Iban { _iban: 'XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS' }
   * ```
   */
  constructor(iban) {
    this.toAddress = () => {
      if (this.isDirect()) {
        const base36 = this._iban.slice(4);
        const parsedBigInt = _Iban._parseInt(base36, 36);
        const paddedBigInt = leftPad(parsedBigInt, 40);
        return toChecksumAddress(paddedBigInt);
      }
      throw new Error("Iban is indirect and cannot be converted. Must be length of 34 or 35");
    };
    if (_Iban.isIndirect(iban) || _Iban.isDirect(iban)) {
      this._iban = iban;
    } else {
      throw new Error("Invalid IBAN was provided");
    }
  }
  /**
   * A static method that checks if an IBAN is Direct.
   * It actually check the length of the provided variable and, only if it is 34 or 35, it returns true.
   * Note: this is also available as a method at an Iban instance.
   * @param iban - an IBAN to be checked
   * @returns - `true` if the provided `iban` is a Direct IBAN, and `false` otherwise.
   *
   * @example
   * ```ts
   * web3.eth.Iban.isDirect("XE81ETHXREGGAVOFYORK");
   * > false
   * ```
   */
  static isDirect(iban) {
    return iban.length === 34 || iban.length === 35;
  }
  /**
   * An instance method that checks if iban number is Direct.
   * It actually check the length of the provided variable and, only if it is 34 or 35, it returns true.
   * Note: this is also available as a static method.
   * @param iban - an IBAN to be checked
   * @returns - `true` if the provided `iban` is a Direct IBAN, and `false` otherwise.
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE81ETHXREGGAVOFYORK");
   * iban.isDirect();
   * > false
   * ```
   */
  isDirect() {
    return _Iban.isDirect(this._iban);
  }
  /**
   * A static method that checks if an IBAN is Indirect.
   * It actually check the length of the provided variable and, only if it is 20, it returns true.
   * Note: this is also available as a method at an Iban instance.
   * @param iban - an IBAN to be checked
   * @returns - `true` if the provided `iban` is an Indirect IBAN, and `false` otherwise.
   *
   * @example
   * ```ts
   * web3.eth.Iban.isIndirect("XE81ETHXREGGAVOFYORK");
   * > true
   * ```
   */
  static isIndirect(iban) {
    return iban.length === 20;
  }
  /**
   * check if iban number if indirect
   * It actually check the length of the provided variable and, only if it is 20, it returns true.
   * Note: this is also available as a static method.
   * @param iban - an IBAN to be checked
   * @returns - `true` if the provided `iban` is an Indirect IBAN, and `false` otherwise.
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE81ETHXREGGAVOFYORK");
   * iban.isIndirect();
   * > true
   * ```
   */
  isIndirect() {
    return _Iban.isIndirect(this._iban);
  }
  /**
   * This method could be used to check if a given string is valid IBAN object.
   * Note: this is also available as a method at an Iban instance.
   *
   * @param iban - a string to be checked if it is in IBAN
   * @returns - true if it is valid IBAN
   *
   * @example
   * ```ts
   * web3.eth.Iban.isValid("XE81ETHXREGGAVOFYORK");
   * > true
   *
   * web3.eth.Iban.isValid("XE82ETHXREGGAVOFYORK");
   * > false // because the checksum is incorrect
   * ```
   */
  static isValid(iban) {
    return /^XE[0-9]{2}(ETH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(iban) && _Iban._mod9710(_Iban._iso13616Prepare(iban)) === 1;
  }
  /**
   * Should be called to check if the early provided IBAN is correct.
   * Note: this is also available as a static method.
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE81ETHXREGGAVOFYORK");
   * iban.isValid();
   * > true
   *
   * const iban = new web3.eth.Iban("XE82ETHXREGGAVOFYORK");
   * iban.isValid();
   * > false // because the checksum is incorrect
   * ```
   */
  isValid() {
    return _Iban.isValid(this._iban);
  }
  /**
   * Convert the passed BBAN to an IBAN for this country specification.
   * Please note that <i>"generation of the IBAN shall be the exclusive responsibility of the bank/branch servicing the account"</i>.
   * This method implements the preferred algorithm described in http://en.wikipedia.org/wiki/International_Bank_Account_Number#Generating_IBAN_check_digits
   *
   * @param bban - the BBAN to convert to IBAN
   * @returns an Iban class instance that holds the equivalent IBAN
   *
   * @example
   * ```ts
   * web3.eth.Iban.fromBban('ETHXREGGAVOFYORK');
   * > Iban {_iban: "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"}
   * ```
   */
  static fromBban(bban) {
    const countryCode = "XE";
    const remainder = this._mod9710(this._iso13616Prepare(`${countryCode}00${bban}`));
    const checkDigit = `0${(98 - remainder).toString()}`.slice(-2);
    return new _Iban(`${countryCode}${checkDigit}${bban}`);
  }
  /**
   * Should be used to create IBAN object for given institution and identifier
   *
   * @param options - an object holds the `institution` and the `identifier` which will be composed to create an `Iban` object from.
   * @returns an Iban class instance that holds the equivalent IBAN
   *
   * @example
   * ```ts
   * web3.eth.Iban.createIndirect({
   *     institution: "XREG",
   *     identifier: "GAVOFYORK"
   * });
   * > Iban {_iban: "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"}
   * ```
   */
  static createIndirect(options) {
    return _Iban.fromBban(`ETH${options.institution}${options.identifier}`);
  }
  /**
   * This method should be used to create iban object from an Ethereum address.
   *
   * @param address - an Ethereum address
   * @returns an Iban class instance that holds the equivalent IBAN
   *
   * @example
   * ```ts
   * web3.eth.Iban.fromAddress("0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8");
   * > Iban {_iban: "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"}
   * ```
   */
  static fromAddress(address) {
    if (!isAddress(address)) {
      throw new InvalidAddressError(address);
    }
    const num = BigInt(hexToNumber(address));
    const base36 = num.toString(36);
    const padded = leftPad(base36, 15);
    return _Iban.fromBban(padded.toUpperCase());
  }
  /**
   * This method should be used to create IBAN address from an Ethereum address
   *
   * @param address - an Ethereum address
   * @return the equivalent IBAN address
   *
   * @example
   * ```ts
   * web3.eth.Iban.toIban("0x00c5496aEe77C1bA1f0854206A26DdA82a81D6D8");
   * > "XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS"
   * ```
   */
  static toIban(address) {
    return _Iban.fromAddress(address).toString();
  }
  /**
   * Should be called to get client identifier within institution
   *
   * @return the client of the IBAN instance.
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE81ETHXREGGAVOFYORK");
   * iban.client();
   * > 'GAVOFYORK'
   * ```
   */
  client() {
    return this.isIndirect() ? this._iban.slice(11) : "";
  }
  /**
   * Returns the IBAN checksum of the early provided IBAN
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE81ETHXREGGAVOFYORK");
   * iban.checksum();
   * > "81"
   * ```
   *
   */
  checksum() {
    return this._iban.slice(2, 4);
  }
  /**
   * Returns institution identifier from the early provided  IBAN
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban("XE81ETHXREGGAVOFYORK");
   * iban.institution();
   * > 'XREG'
   * ```
   */
  institution() {
    return this.isIndirect() ? this._iban.slice(7, 11) : "";
  }
  /**
   * Simply returns the early provided IBAN
   *
   * @example
   * ```ts
   * const iban = new web3.eth.Iban('XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS');
   * iban.toString();
   * > 'XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS'
   * ```
   */
  toString() {
    return this._iban;
  }
};
Iban._iso13616Prepare = (iban) => {
  const A = "A".charCodeAt(0);
  const Z = "Z".charCodeAt(0);
  const upperIban = iban.toUpperCase();
  const modifiedIban = `${upperIban.slice(4)}${upperIban.slice(0, 4)}`;
  return modifiedIban.split("").map((n) => {
    const code = n.charCodeAt(0);
    if (code >= A && code <= Z) {
      return code - A + 10;
    }
    return n;
  }).join("");
};
Iban._parseInt = (str, base2) => [...str].reduce((acc, curr) => BigInt(parseInt(curr, base2)) + BigInt(base2) * acc, BigInt(0));
Iban._mod9710 = (iban) => {
  let remainder = iban;
  let block;
  while (remainder.length > 2) {
    block = remainder.slice(0, 9);
    remainder = `${(parseInt(block, 10) % 97).toString()}${remainder.slice(block.length)}`;
  }
  return parseInt(remainder, 10) % 97;
};
Iban.toAddress = (iban) => {
  const ibanObject = new Iban(iban);
  return ibanObject.toAddress();
};

// node_modules/web3-eth-iban/lib/esm/index.js
var esm_default = Iban;

// node_modules/web3-core/lib/esm/formatters.js
var inputStorageKeysFormatter = (keys) => keys.map((num) => numberToHex(num));
var outputProofFormatter = (proof) => ({
  address: toChecksumAddress(proof.address),
  nonce: hexToNumberString(proof.nonce),
  balance: hexToNumberString(proof.balance)
});
var outputBigIntegerFormatter = (number2) => toNumber(number2);
var inputBlockNumberFormatter = (blockNumber) => {
  if (isNullish(blockNumber)) {
    return void 0;
  }
  if (typeof blockNumber === "string" && isBlockTag(blockNumber)) {
    return blockNumber;
  }
  if (blockNumber === "genesis") {
    return "0x0";
  }
  if (typeof blockNumber === "string" && isHexStrict2(blockNumber)) {
    return blockNumber.toLowerCase();
  }
  return numberToHex(blockNumber);
};
var inputDefaultBlockNumberFormatter = (blockNumber, defaultBlock) => {
  if (!blockNumber) {
    return inputBlockNumberFormatter(defaultBlock);
  }
  return inputBlockNumberFormatter(blockNumber);
};
var inputAddressFormatter = (address) => {
  if (Iban.isValid(address) && Iban.isDirect(address)) {
    const iban = new Iban(address);
    return iban.toAddress().toLowerCase();
  }
  if (isAddress2(address)) {
    return `0x${address.toLowerCase().replace("0x", "")}`;
  }
  throw new FormatterError(`Provided address ${address} is invalid, the capitalization checksum test failed, or it's an indirect IBAN address which can't be converted.`);
};
var txInputOptionsFormatter = (options) => {
  var _a3;
  const modifiedOptions = Object.assign({}, options);
  if (options.to) {
    modifiedOptions.to = inputAddressFormatter(options.to);
  }
  if (options.data && options.input) {
    throw new FormatterError(`You can't have "data" and "input" as properties of transactions at the same time, please use either "data" or "input" instead.`);
  }
  if (!options.input && options.data) {
    modifiedOptions.input = options.data;
    delete modifiedOptions.data;
  }
  if (options.input && !options.input.startsWith("0x")) {
    modifiedOptions.input = `0x${options.input}`;
  }
  if (modifiedOptions.input && !isHexStrict2(modifiedOptions.input)) {
    throw new FormatterError("The input field must be HEX encoded data.");
  }
  if (options.gas || options.gasLimit) {
    modifiedOptions.gas = toNumber((_a3 = options.gas) !== null && _a3 !== void 0 ? _a3 : options.gasLimit);
  }
  if (options.maxPriorityFeePerGas || options.maxFeePerGas) {
    delete modifiedOptions.gasPrice;
  }
  ["gasPrice", "gas", "value", "maxPriorityFeePerGas", "maxFeePerGas", "nonce", "chainId"].filter((key) => !isNullish(modifiedOptions[key])).forEach((key) => {
    modifiedOptions[key] = numberToHex(modifiedOptions[key]);
  });
  return modifiedOptions;
};
var inputCallFormatter = (options, defaultAccount) => {
  var _a3;
  const opts = txInputOptionsFormatter(options);
  const from = (_a3 = opts.from) !== null && _a3 !== void 0 ? _a3 : defaultAccount;
  if (from) {
    opts.from = inputAddressFormatter(from);
  }
  return opts;
};
var inputTransactionFormatter = (options, defaultAccount) => {
  var _a3;
  const opts = txInputOptionsFormatter(options);
  if (!(typeof opts.from === "number") && !(!!opts.from && typeof opts.from === "object")) {
    opts.from = (_a3 = opts.from) !== null && _a3 !== void 0 ? _a3 : defaultAccount;
    if (!options.from && !(typeof options.from === "number")) {
      throw new FormatterError('The send transactions "from" field must be defined!');
    }
    opts.from = inputAddressFormatter(options.from);
  }
  return opts;
};
var inputSignFormatter = (data) => isHexStrict2(data) ? data : utf8ToHex(data);
var outputTransactionFormatter = (tx) => {
  const modifiedTx = Object.assign({}, tx);
  if (tx.blockNumber) {
    modifiedTx.blockNumber = hexToNumber(tx.blockNumber);
  }
  if (tx.transactionIndex) {
    modifiedTx.transactionIndex = hexToNumber(tx.transactionIndex);
  }
  modifiedTx.nonce = hexToNumber(tx.nonce);
  modifiedTx.gas = hexToNumber(tx.gas);
  if (tx.gasPrice) {
    modifiedTx.gasPrice = outputBigIntegerFormatter(tx.gasPrice);
  }
  if (tx.maxFeePerGas) {
    modifiedTx.maxFeePerGas = outputBigIntegerFormatter(tx.maxFeePerGas);
  }
  if (tx.maxPriorityFeePerGas) {
    modifiedTx.maxPriorityFeePerGas = outputBigIntegerFormatter(tx.maxPriorityFeePerGas);
  }
  if (tx.type) {
    modifiedTx.type = hexToNumber(tx.type);
  }
  modifiedTx.value = outputBigIntegerFormatter(tx.value);
  if (tx.to && isAddress2(tx.to)) {
    modifiedTx.to = toChecksumAddress(tx.to);
  } else {
    modifiedTx.to = void 0;
  }
  if (tx.from) {
    modifiedTx.from = toChecksumAddress(tx.from);
  }
  return modifiedTx;
};
var inputTopicFormatter = (topic) => {
  if (isNullish(topic))
    return null;
  const value = String(topic);
  return isHex(value) ? value : fromUtf8(value);
};
var inputLogFormatter = (filter) => {
  var _a3;
  const val = isNullish(filter) ? {} : mergeDeep({}, filter);
  if (isNullish(val.fromBlock)) {
    val.fromBlock = BlockTags.LATEST;
  }
  val.fromBlock = inputBlockNumberFormatter(val.fromBlock);
  if (!isNullish(val.toBlock)) {
    val.toBlock = inputBlockNumberFormatter(val.toBlock);
  }
  val.topics = (_a3 = val.topics) !== null && _a3 !== void 0 ? _a3 : [];
  val.topics = val.topics.map((topic) => Array.isArray(topic) ? topic.map(inputTopicFormatter) : inputTopicFormatter(topic));
  if (val.address) {
    val.address = Array.isArray(val.address) ? val.address.map((addr) => inputAddressFormatter(addr)) : inputAddressFormatter(val.address);
  }
  return val;
};
var outputLogFormatter = (log) => {
  const modifiedLog = Object.assign({}, log);
  const logIndex = typeof log.logIndex === "string" ? log.logIndex : numberToHex(log.logIndex);
  if (typeof log.blockHash === "string" && typeof log.transactionHash === "string") {
    const shaId = sha3Raw(`${log.blockHash.replace("0x", "")}${log.transactionHash.replace("0x", "")}${logIndex.replace("0x", "")}`);
    modifiedLog.id = `log_${shaId.replace("0x", "").slice(0, 8)}`;
  } else if (!log.id) {
    modifiedLog.id = void 0;
  }
  if (log.blockNumber && isHexStrict2(log.blockNumber)) {
    modifiedLog.blockNumber = hexToNumber(log.blockNumber);
  }
  if (log.transactionIndex && isHexStrict2(log.transactionIndex)) {
    modifiedLog.transactionIndex = hexToNumber(log.transactionIndex);
  }
  if (log.logIndex && isHexStrict2(log.logIndex)) {
    modifiedLog.logIndex = hexToNumber(log.logIndex);
  }
  if (log.address) {
    modifiedLog.address = toChecksumAddress(log.address);
  }
  return modifiedLog;
};
var outputTransactionReceiptFormatter = (receipt) => {
  if (typeof receipt !== "object") {
    throw new FormatterError(`Received receipt is invalid: ${String(receipt)}`);
  }
  const modifiedReceipt = Object.assign({}, receipt);
  if (receipt.blockNumber) {
    modifiedReceipt.blockNumber = hexToNumber(receipt.blockNumber);
  }
  if (receipt.transactionIndex) {
    modifiedReceipt.transactionIndex = hexToNumber(receipt.transactionIndex);
  }
  modifiedReceipt.cumulativeGasUsed = hexToNumber(receipt.cumulativeGasUsed);
  modifiedReceipt.gasUsed = hexToNumber(receipt.gasUsed);
  if (receipt.logs && Array.isArray(receipt.logs)) {
    modifiedReceipt.logs = receipt.logs.map(outputLogFormatter);
  }
  if (receipt.effectiveGasPrice) {
    modifiedReceipt.effectiveGasPrice = hexToNumber(receipt.effectiveGasPrice);
  }
  if (receipt.contractAddress) {
    modifiedReceipt.contractAddress = toChecksumAddress(receipt.contractAddress);
  }
  if (receipt.status) {
    modifiedReceipt.status = Boolean(parseInt(receipt.status, 10));
  }
  return modifiedReceipt;
};
var outputBlockFormatter = (block) => {
  const modifiedBlock = Object.assign({}, block);
  modifiedBlock.gasLimit = hexToNumber(block.gasLimit);
  modifiedBlock.gasUsed = hexToNumber(block.gasUsed);
  modifiedBlock.size = hexToNumber(block.size);
  modifiedBlock.timestamp = hexToNumber(block.timestamp);
  if (block.number) {
    modifiedBlock.number = hexToNumber(block.number);
  }
  if (block.difficulty) {
    modifiedBlock.difficulty = outputBigIntegerFormatter(block.difficulty);
  }
  if (block.totalDifficulty) {
    modifiedBlock.totalDifficulty = outputBigIntegerFormatter(block.totalDifficulty);
  }
  if (block.transactions && Array.isArray(block.transactions)) {
    modifiedBlock.transactions = block.transactions.map(outputTransactionFormatter);
  }
  if (block.miner) {
    modifiedBlock.miner = toChecksumAddress(block.miner);
  }
  if (block.baseFeePerGas) {
    modifiedBlock.baseFeePerGas = outputBigIntegerFormatter(block.baseFeePerGas);
  }
  return modifiedBlock;
};
var inputPostFormatter = (post) => {
  var _a3;
  const modifiedPost = Object.assign({}, post);
  if (post.ttl) {
    modifiedPost.ttl = numberToHex(post.ttl);
  }
  if (post.workToProve) {
    modifiedPost.workToProve = numberToHex(post.workToProve);
  }
  if (post.priority) {
    modifiedPost.priority = numberToHex(post.priority);
  }
  if (post.topics && !Array.isArray(post.topics)) {
    modifiedPost.topics = post.topics ? [post.topics] : [];
  }
  modifiedPost.topics = (_a3 = modifiedPost.topics) === null || _a3 === void 0 ? void 0 : _a3.map((topic) => topic.startsWith("0x") ? topic : fromUtf8(topic));
  return modifiedPost;
};
var outputPostFormatter = (post) => {
  var _a3;
  const modifiedPost = Object.assign({}, post);
  if (post.expiry) {
    modifiedPost.expiry = hexToNumber(post.expiry);
  }
  if (post.sent) {
    modifiedPost.sent = hexToNumber(post.sent);
  }
  if (post.ttl) {
    modifiedPost.ttl = hexToNumber(post.ttl);
  }
  if (post.workProved) {
    modifiedPost.workProved = hexToNumber(post.workProved);
  }
  if (!post.topics) {
    modifiedPost.topics = [];
  }
  modifiedPost.topics = (_a3 = modifiedPost.topics) === null || _a3 === void 0 ? void 0 : _a3.map(toUtf8);
  return modifiedPost;
};
var outputSyncingFormatter = (result) => {
  const modifiedResult = Object.assign({}, result);
  modifiedResult.startingBlock = hexToNumber(result.startingBlock);
  modifiedResult.currentBlock = hexToNumber(result.currentBlock);
  modifiedResult.highestBlock = hexToNumber(result.highestBlock);
  if (result.knownStates) {
    modifiedResult.knownStates = hexToNumber(result.knownStates);
  }
  if (result.pulledStates) {
    modifiedResult.pulledStates = hexToNumber(result.pulledStates);
  }
  return modifiedResult;
};

// node_modules/web3-core/lib/esm/web3_promi_event.js
var __awaiter9 = function(thisArg, _arguments, P, generator) {
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
var _a2;
var Web3PromiEvent = class extends Web3EventEmitter {
  constructor(executor) {
    super();
    this[_a2] = "Promise";
    this._promise = new Promise(executor);
  }
  then(onfulfilled, onrejected) {
    return __awaiter9(this, void 0, void 0, function* () {
      return this._promise.then(onfulfilled, onrejected);
    });
  }
  catch(onrejected) {
    return __awaiter9(this, void 0, void 0, function* () {
      return this._promise.catch(onrejected);
    });
  }
  finally(onfinally) {
    return __awaiter9(this, void 0, void 0, function* () {
      return this._promise.finally(onfinally);
    });
  }
  on(eventName, fn) {
    super.on(eventName, fn);
    return this;
  }
  once(eventName, fn) {
    super.once(eventName, fn);
    return this;
  }
};
_a2 = Symbol.toStringTag;

// node_modules/web3-eth/lib/esm/index.js
var import_setimmediate = __toESM(require_setImmediate());

// node_modules/web3-rpc-methods/lib/esm/index.js
var esm_exports10 = {};
__export(esm_exports10, {
  ethRpcMethods: () => eth_rpc_methods_exports,
  netRpcMethods: () => net_rpc_methods_exports,
  personalRpcMethods: () => personal_rpc_methods_exports
});

// node_modules/web3-rpc-methods/lib/esm/eth_rpc_methods.js
var eth_rpc_methods_exports = {};
__export(eth_rpc_methods_exports, {
  call: () => call,
  compileLLL: () => compileLLL,
  compileSerpent: () => compileSerpent,
  compileSolidity: () => compileSolidity,
  createAccessList: () => createAccessList,
  estimateGas: () => estimateGas,
  getAccounts: () => getAccounts,
  getBalance: () => getBalance,
  getBlockByHash: () => getBlockByHash,
  getBlockByNumber: () => getBlockByNumber,
  getBlockNumber: () => getBlockNumber,
  getBlockTransactionCountByHash: () => getBlockTransactionCountByHash,
  getBlockTransactionCountByNumber: () => getBlockTransactionCountByNumber,
  getChainId: () => getChainId,
  getCode: () => getCode,
  getCoinbase: () => getCoinbase,
  getCompilers: () => getCompilers,
  getFeeHistory: () => getFeeHistory,
  getFilterChanges: () => getFilterChanges,
  getFilterLogs: () => getFilterLogs,
  getGasPrice: () => getGasPrice,
  getHashRate: () => getHashRate,
  getLogs: () => getLogs,
  getMaxPriorityFeePerGas: () => getMaxPriorityFeePerGas,
  getMining: () => getMining,
  getNodeInfo: () => getNodeInfo,
  getPendingTransactions: () => getPendingTransactions,
  getProof: () => getProof,
  getProtocolVersion: () => getProtocolVersion,
  getStorageAt: () => getStorageAt,
  getSyncing: () => getSyncing,
  getTransactionByBlockHashAndIndex: () => getTransactionByBlockHashAndIndex,
  getTransactionByBlockNumberAndIndex: () => getTransactionByBlockNumberAndIndex,
  getTransactionByHash: () => getTransactionByHash,
  getTransactionCount: () => getTransactionCount,
  getTransactionReceipt: () => getTransactionReceipt,
  getUncleByBlockHashAndIndex: () => getUncleByBlockHashAndIndex,
  getUncleByBlockNumberAndIndex: () => getUncleByBlockNumberAndIndex,
  getUncleCountByBlockHash: () => getUncleCountByBlockHash,
  getUncleCountByBlockNumber: () => getUncleCountByBlockNumber,
  getWork: () => getWork,
  newBlockFilter: () => newBlockFilter,
  newFilter: () => newFilter,
  newPendingTransactionFilter: () => newPendingTransactionFilter,
  requestAccounts: () => requestAccounts,
  sendRawTransaction: () => sendRawTransaction,
  sendTransaction: () => sendTransaction,
  sign: () => sign2,
  signTransaction: () => signTransaction2,
  signTypedData: () => signTypedData,
  submitHashrate: () => submitHashrate,
  submitWork: () => submitWork,
  uninstallFilter: () => uninstallFilter
});
var __awaiter10 = function(thisArg, _arguments, P, generator) {
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
function getProtocolVersion(requestManager) {
  return __awaiter10(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "eth_protocolVersion",
      params: []
    });
  });
}
function getSyncing(requestManager) {
  return __awaiter10(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "eth_syncing",
      params: []
    });
  });
}
function getCoinbase(requestManager) {
  return __awaiter10(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "eth_coinbase",
      params: []
    });
  });
}
function getMining(requestManager) {
  return __awaiter10(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "eth_mining",
      params: []
    });
  });
}
function getHashRate(requestManager) {
  return __awaiter10(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "eth_hashrate",
      params: []
    });
  });
}
function getGasPrice(requestManager) {
  return __awaiter10(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "eth_gasPrice",
      params: []
    });
  });
}
function getMaxPriorityFeePerGas(requestManager) {
  return __awaiter10(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "eth_maxPriorityFeePerGas",
      params: []
    });
  });
}
function getAccounts(requestManager) {
  return __awaiter10(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "eth_accounts",
      params: []
    });
  });
}
function getBlockNumber(requestManager) {
  return __awaiter10(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "eth_blockNumber",
      params: []
    });
  });
}
function getBalance(requestManager, address, blockNumber) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["address", "blockNumberOrTag"], [address, blockNumber]);
    return requestManager.send({
      method: "eth_getBalance",
      params: [address, blockNumber]
    });
  });
}
function getStorageAt(requestManager, address, storageSlot, blockNumber) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["address", "hex", "blockNumberOrTag"], [address, storageSlot, blockNumber]);
    return requestManager.send({
      method: "eth_getStorageAt",
      params: [address, storageSlot, blockNumber]
    });
  });
}
function getTransactionCount(requestManager, address, blockNumber) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["address", "blockNumberOrTag"], [address, blockNumber]);
    return requestManager.send({
      method: "eth_getTransactionCount",
      params: [address, blockNumber]
    });
  });
}
function getBlockTransactionCountByHash(requestManager, blockHash) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["bytes32"], [blockHash]);
    return requestManager.send({
      method: "eth_getBlockTransactionCountByHash",
      params: [blockHash]
    });
  });
}
function getBlockTransactionCountByNumber(requestManager, blockNumber) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["blockNumberOrTag"], [blockNumber]);
    return requestManager.send({
      method: "eth_getBlockTransactionCountByNumber",
      params: [blockNumber]
    });
  });
}
function getUncleCountByBlockHash(requestManager, blockHash) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["bytes32"], [blockHash]);
    return requestManager.send({
      method: "eth_getUncleCountByBlockHash",
      params: [blockHash]
    });
  });
}
function getUncleCountByBlockNumber(requestManager, blockNumber) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["blockNumberOrTag"], [blockNumber]);
    return requestManager.send({
      method: "eth_getUncleCountByBlockNumber",
      params: [blockNumber]
    });
  });
}
function getCode(requestManager, address, blockNumber) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["address", "blockNumberOrTag"], [address, blockNumber]);
    return requestManager.send({
      method: "eth_getCode",
      params: [address, blockNumber]
    });
  });
}
function sign2(requestManager, address, message) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["address", "hex"], [address, message]);
    return requestManager.send({
      method: "eth_sign",
      params: [address, message]
    });
  });
}
function signTransaction2(requestManager, transaction) {
  return __awaiter10(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "eth_signTransaction",
      params: [transaction]
    });
  });
}
function sendTransaction(requestManager, transaction) {
  return __awaiter10(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "eth_sendTransaction",
      params: [transaction]
    });
  });
}
function sendRawTransaction(requestManager, transaction) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["hex"], [transaction]);
    return requestManager.send({
      method: "eth_sendRawTransaction",
      params: [transaction]
    });
  });
}
function call(requestManager, transaction, blockNumber) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["blockNumberOrTag"], [blockNumber]);
    return requestManager.send({
      method: "eth_call",
      params: [transaction, blockNumber]
    });
  });
}
function estimateGas(requestManager, transaction, blockNumber) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["blockNumberOrTag"], [blockNumber]);
    return requestManager.send({
      method: "eth_estimateGas",
      params: [transaction, blockNumber]
    });
  });
}
function getBlockByHash(requestManager, blockHash, hydrated) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["bytes32", "bool"], [blockHash, hydrated]);
    return requestManager.send({
      method: "eth_getBlockByHash",
      params: [blockHash, hydrated]
    });
  });
}
function getBlockByNumber(requestManager, blockNumber, hydrated) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["blockNumberOrTag", "bool"], [blockNumber, hydrated]);
    return requestManager.send({
      method: "eth_getBlockByNumber",
      params: [blockNumber, hydrated]
    });
  });
}
function getTransactionByHash(requestManager, transactionHash) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["bytes32"], [transactionHash]);
    return requestManager.send({
      method: "eth_getTransactionByHash",
      params: [transactionHash]
    });
  });
}
function getTransactionByBlockHashAndIndex(requestManager, blockHash, transactionIndex) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["bytes32", "hex"], [blockHash, transactionIndex]);
    return requestManager.send({
      method: "eth_getTransactionByBlockHashAndIndex",
      params: [blockHash, transactionIndex]
    });
  });
}
function getTransactionByBlockNumberAndIndex(requestManager, blockNumber, transactionIndex) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["blockNumberOrTag", "hex"], [blockNumber, transactionIndex]);
    return requestManager.send({
      method: "eth_getTransactionByBlockNumberAndIndex",
      params: [blockNumber, transactionIndex]
    });
  });
}
function getTransactionReceipt(requestManager, transactionHash) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["bytes32"], [transactionHash]);
    return requestManager.send({
      method: "eth_getTransactionReceipt",
      params: [transactionHash]
    });
  });
}
function getUncleByBlockHashAndIndex(requestManager, blockHash, uncleIndex) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["bytes32", "hex"], [blockHash, uncleIndex]);
    return requestManager.send({
      method: "eth_getUncleByBlockHashAndIndex",
      params: [blockHash, uncleIndex]
    });
  });
}
function getUncleByBlockNumberAndIndex(requestManager, blockNumber, uncleIndex) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["blockNumberOrTag", "hex"], [blockNumber, uncleIndex]);
    return requestManager.send({
      method: "eth_getUncleByBlockNumberAndIndex",
      params: [blockNumber, uncleIndex]
    });
  });
}
function getCompilers(requestManager) {
  return __awaiter10(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "eth_getCompilers",
      params: []
    });
  });
}
function compileSolidity(requestManager, code) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["string"], [code]);
    return requestManager.send({
      method: "eth_compileSolidity",
      params: [code]
    });
  });
}
function compileLLL(requestManager, code) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["string"], [code]);
    return requestManager.send({
      method: "eth_compileLLL",
      params: [code]
    });
  });
}
function compileSerpent(requestManager, code) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["string"], [code]);
    return requestManager.send({
      method: "eth_compileSerpent",
      params: [code]
    });
  });
}
function newFilter(requestManager, filter) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["filter"], [filter]);
    return requestManager.send({
      method: "eth_newFilter",
      params: [filter]
    });
  });
}
function newBlockFilter(requestManager) {
  return __awaiter10(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "eth_newBlockFilter",
      params: []
    });
  });
}
function newPendingTransactionFilter(requestManager) {
  return __awaiter10(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "eth_newPendingTransactionFilter",
      params: []
    });
  });
}
function uninstallFilter(requestManager, filterIdentifier) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["hex"], [filterIdentifier]);
    return requestManager.send({
      method: "eth_uninstallFilter",
      params: [filterIdentifier]
    });
  });
}
function getFilterChanges(requestManager, filterIdentifier) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["hex"], [filterIdentifier]);
    return requestManager.send({
      method: "eth_getFilterChanges",
      params: [filterIdentifier]
    });
  });
}
function getFilterLogs(requestManager, filterIdentifier) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["hex"], [filterIdentifier]);
    return requestManager.send({
      method: "eth_getFilterLogs",
      params: [filterIdentifier]
    });
  });
}
function getLogs(requestManager, filter) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["filter"], [filter]);
    return requestManager.send({
      method: "eth_getLogs",
      params: [filter]
    });
  });
}
function getWork(requestManager) {
  return __awaiter10(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "eth_getWork",
      params: []
    });
  });
}
function submitWork(requestManager, nonce, hash2, digest) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["bytes8", "bytes32", "bytes32"], [nonce, hash2, digest]);
    return requestManager.send({
      method: "eth_submitWork",
      params: [nonce, hash2, digest]
    });
  });
}
function submitHashrate(requestManager, hashRate, id) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["bytes32", "bytes32"], [hashRate, id]);
    return requestManager.send({
      method: "eth_submitHashrate",
      params: [hashRate, id]
    });
  });
}
function getFeeHistory(requestManager, blockCount, newestBlock, rewardPercentiles) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["hex", "blockNumberOrTag"], [blockCount, newestBlock]);
    for (const rewardPercentile of rewardPercentiles) {
      validator.validate(["number"], [rewardPercentile]);
    }
    return requestManager.send({
      method: "eth_feeHistory",
      params: [blockCount, newestBlock, rewardPercentiles]
    });
  });
}
function getPendingTransactions(requestManager) {
  return __awaiter10(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "eth_pendingTransactions",
      params: []
    });
  });
}
function requestAccounts(requestManager) {
  return __awaiter10(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "eth_requestAccounts",
      params: []
    });
  });
}
function getChainId(requestManager) {
  return __awaiter10(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "eth_chainId",
      params: []
    });
  });
}
function getProof(requestManager, address, storageKeys, blockNumber) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["address", "bytes32[]", "blockNumberOrTag"], [address, storageKeys, blockNumber]);
    return requestManager.send({
      method: "eth_getProof",
      params: [address, storageKeys, blockNumber]
    });
  });
}
function getNodeInfo(requestManager) {
  return __awaiter10(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "web3_clientVersion",
      params: []
    });
  });
}
function createAccessList(requestManager, transaction, blockNumber) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["blockNumberOrTag"], [blockNumber]);
    return requestManager.send({
      method: "eth_createAccessList",
      params: [transaction, blockNumber]
    });
  });
}
function signTypedData(requestManager, address, typedData, useLegacy = false) {
  return __awaiter10(this, void 0, void 0, function* () {
    validator.validate(["address"], [address]);
    return requestManager.send({
      method: `eth_signTypedData${useLegacy ? "" : "_v4"}`,
      params: [address, typedData]
    });
  });
}

// node_modules/web3-rpc-methods/lib/esm/net_rpc_methods.js
var net_rpc_methods_exports = {};
__export(net_rpc_methods_exports, {
  getId: () => getId,
  getPeerCount: () => getPeerCount,
  isListening: () => isListening
});
var __awaiter11 = function(thisArg, _arguments, P, generator) {
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
function getId(requestManager) {
  return __awaiter11(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "net_version",
      params: []
    });
  });
}
function getPeerCount(requestManager) {
  return __awaiter11(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "net_peerCount",
      params: []
    });
  });
}
function isListening(requestManager) {
  return __awaiter11(this, void 0, void 0, function* () {
    return requestManager.send({
      method: "net_listening",
      params: []
    });
  });
}

// node_modules/web3-rpc-methods/lib/esm/personal_rpc_methods.js
var personal_rpc_methods_exports = {};
__export(personal_rpc_methods_exports, {
  ecRecover: () => ecRecover,
  getAccounts: () => getAccounts2,
  importRawKey: () => importRawKey,
  lockAccount: () => lockAccount,
  newAccount: () => newAccount,
  sendTransaction: () => sendTransaction2,
  sign: () => sign3,
  signTransaction: () => signTransaction3,
  unlockAccount: () => unlockAccount
});
var __awaiter12 = function(thisArg, _arguments, P, generator) {
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
var getAccounts2 = (requestManager) => __awaiter12(void 0, void 0, void 0, function* () {
  return requestManager.send({
    method: "personal_listAccounts",
    params: []
  });
});
var newAccount = (requestManager, password) => __awaiter12(void 0, void 0, void 0, function* () {
  return requestManager.send({
    method: "personal_newAccount",
    params: [password]
  });
});
var unlockAccount = (requestManager, address, password, unlockDuration) => __awaiter12(void 0, void 0, void 0, function* () {
  return requestManager.send({
    method: "personal_unlockAccount",
    params: [address, password, unlockDuration]
  });
});
var lockAccount = (requestManager, address) => __awaiter12(void 0, void 0, void 0, function* () {
  return requestManager.send({
    method: "personal_lockAccount",
    params: [address]
  });
});
var importRawKey = (requestManager, keyData, passphrase) => __awaiter12(void 0, void 0, void 0, function* () {
  return requestManager.send({
    method: "personal_importRawKey",
    params: [keyData, passphrase]
  });
});
var sendTransaction2 = (requestManager, tx, passphrase) => __awaiter12(void 0, void 0, void 0, function* () {
  return requestManager.send({
    method: "personal_sendTransaction",
    params: [tx, passphrase]
  });
});
var signTransaction3 = (requestManager, tx, passphrase) => __awaiter12(void 0, void 0, void 0, function* () {
  return requestManager.send({
    method: "personal_signTransaction",
    params: [tx, passphrase]
  });
});
var sign3 = (requestManager, data, address, passphrase) => __awaiter12(void 0, void 0, void 0, function* () {
  return requestManager.send({
    method: "personal_sign",
    params: [data, address, passphrase]
  });
});
var ecRecover = (requestManager, signedData, signature) => __awaiter12(void 0, void 0, void 0, function* () {
  return requestManager.send({
    method: "personal_ecRecover",
    params: [signedData, signature]
  });
});

// node_modules/web3-eth/lib/esm/utils/detect_transaction_type.js
var transactionType0x0Schema = {
  type: "object",
  properties: {
    accessList: {
      type: "null"
    },
    maxFeePerGas: {
      type: "null"
    },
    maxPriorityFeePerGas: {
      type: "null"
    }
  }
};
var transactionType0x1Schema = {
  type: "object",
  properties: {
    maxFeePerGas: {
      type: "null"
    },
    maxPriorityFeePerGas: {
      type: "null"
    }
  }
};
var transactionType0x2Schema = {
  type: "object",
  properties: {
    gasPrice: {
      type: "null"
    }
  }
};
var validateTxTypeAndHandleErrors = (txSchema, tx, txType) => {
  try {
    validator.validateJSONSchema(txSchema, tx);
  } catch (error) {
    if (error instanceof Web3ValidatorError)
      throw new InvalidPropertiesForTransactionTypeError(error.errors, txType);
    throw error;
  }
};
var defaultTransactionTypeParser = (transaction) => {
  var _a3, _b;
  const tx = transaction;
  if (!isNullish(tx.type)) {
    let txSchema;
    switch (tx.type) {
      case "0x0":
        txSchema = transactionType0x0Schema;
        break;
      case "0x1":
        txSchema = transactionType0x1Schema;
        break;
      case "0x2":
        txSchema = transactionType0x2Schema;
        break;
      default:
        return format({ format: "uint" }, tx.type, ETH_DATA_FORMAT);
    }
    validateTxTypeAndHandleErrors(txSchema, tx, tx.type);
    return format({ format: "uint" }, tx.type, ETH_DATA_FORMAT);
  }
  if (!isNullish(tx.maxFeePerGas) || !isNullish(tx.maxPriorityFeePerGas)) {
    validateTxTypeAndHandleErrors(transactionType0x2Schema, tx, "0x2");
    return "0x2";
  }
  if (!isNullish(tx.accessList)) {
    validateTxTypeAndHandleErrors(transactionType0x1Schema, tx, "0x1");
    return "0x1";
  }
  const givenHardfork = (_a3 = tx.hardfork) !== null && _a3 !== void 0 ? _a3 : (_b = tx.common) === null || _b === void 0 ? void 0 : _b.hardfork;
  if (!isNullish(givenHardfork)) {
    const hardforkIndex = Object.keys(HardforksOrdered).indexOf(givenHardfork);
    if (hardforkIndex >= Object.keys(HardforksOrdered).indexOf("london"))
      return !isNullish(tx.gasPrice) ? "0x0" : "0x2";
    if (hardforkIndex === Object.keys(HardforksOrdered).indexOf("berlin"))
      return "0x0";
  }
  if (!isNullish(tx.gasPrice)) {
    validateTxTypeAndHandleErrors(transactionType0x0Schema, tx, "0x0");
    return "0x0";
  }
  return void 0;
};
var detectTransactionType = (transaction, web3Context) => {
  var _a3;
  return ((_a3 = web3Context === null || web3Context === void 0 ? void 0 : web3Context.transactionTypeParser) !== null && _a3 !== void 0 ? _a3 : defaultTransactionTypeParser)(transaction);
};
var detectRawTransactionType = (transaction) => transaction[0] > 127 ? "0x0" : toHex(transaction[0]);

// node_modules/web3-eth/lib/esm/schemas.js
var accessListItemSchema = {
  type: "object",
  properties: {
    address: {
      format: "address"
    },
    storageKeys: {
      type: "array",
      items: {
        format: "bytes32"
      }
    }
  }
};
var accessListSchema = {
  type: "array",
  items: Object.assign({}, accessListItemSchema)
};
var accessListResultSchema = {
  type: "object",
  properties: {
    accessList: Object.assign({}, accessListSchema),
    gasUsed: {
      type: "string"
    }
  }
};
var chainSchema = {
  type: "string",
  enum: ["goerli", "kovan", "mainnet", "rinkeby", "ropsten", "sepolia"]
};
var hardforkSchema = {
  type: "string",
  enum: [
    "arrowGlacier",
    "berlin",
    "byzantium",
    "chainstart",
    "constantinople",
    "dao",
    "homestead",
    "istanbul",
    "london",
    "merge",
    "muirGlacier",
    "petersburg",
    "shanghai",
    "spuriousDragon",
    "tangerineWhistle"
  ]
};
var customChainSchema = {
  type: "object",
  properties: {
    name: {
      format: "string"
    },
    networkId: {
      format: "uint"
    },
    chainId: {
      format: "uint"
    }
  }
};
var transactionSchema = {
  type: "object",
  properties: {
    from: {
      format: "address"
    },
    to: {
      oneOf: [{ format: "address" }, { type: "null" }]
    },
    value: {
      format: "uint"
    },
    gas: {
      format: "uint"
    },
    gasPrice: {
      format: "uint"
    },
    effectiveGasPrice: {
      format: "uint"
    },
    type: {
      format: "uint"
    },
    maxFeePerGas: {
      format: "uint"
    },
    maxPriorityFeePerGas: {
      format: "uint"
    },
    accessList: Object.assign({}, accessListSchema),
    data: {
      format: "bytes"
    },
    input: {
      format: "bytes"
    },
    nonce: {
      format: "uint"
    },
    chain: Object.assign({}, chainSchema),
    hardfork: Object.assign({}, hardforkSchema),
    chainId: {
      format: "uint"
    },
    networkId: {
      format: "uint"
    },
    common: {
      type: "object",
      properties: {
        customChain: Object.assign({}, customChainSchema),
        baseChain: Object.assign({}, chainSchema),
        hardfork: Object.assign({}, hardforkSchema)
      }
    },
    gasLimit: {
      format: "uint"
    },
    v: {
      format: "uint"
    },
    r: {
      format: "bytes32"
    },
    s: {
      format: "bytes32"
    }
  }
};
var transactionInfoSchema = {
  type: "object",
  properties: Object.assign(Object.assign({}, transactionSchema.properties), { blockHash: {
    format: "bytes32"
  }, blockNumber: {
    format: "uint"
  }, hash: {
    format: "bytes32"
  }, transactionIndex: {
    format: "uint"
  }, from: {
    format: "address"
  }, to: {
    oneOf: [{ format: "address" }, { type: "null" }]
  }, value: {
    format: "uint"
  }, gas: {
    format: "uint"
  }, gasPrice: {
    format: "uint"
  }, effectiveGasPrice: {
    format: "uint"
  }, type: {
    format: "uint"
  }, maxFeePerGas: {
    format: "uint"
  }, maxPriorityFeePerGas: {
    format: "uint"
  }, accessList: Object.assign({}, accessListSchema), data: {
    format: "bytes"
  }, input: {
    format: "bytes"
  }, nonce: {
    format: "uint"
  }, gasLimit: {
    format: "uint"
  }, v: {
    format: "uint"
  }, r: {
    format: "bytes32"
  }, s: {
    format: "bytes32"
  } })
};
var withdrawalsSchema = {
  type: "object",
  properties: {
    index: {
      format: "uint"
    },
    validatorIndex: {
      format: "uint"
    },
    address: {
      format: "address"
    },
    amount: {
      format: "uint"
    }
  }
};
var blockSchema = {
  type: "object",
  properties: {
    baseFeePerGas: {
      format: "uint"
    },
    blobGasUsed: {
      format: "uint"
    },
    difficulty: {
      format: "uint"
    },
    excessBlobGas: {
      format: "uint"
    },
    extraData: {
      format: "bytes"
    },
    gasLimit: {
      format: "uint"
    },
    gasUsed: {
      format: "uint"
    },
    hash: {
      format: "bytes32"
    },
    logsBloom: {
      format: "bytes256"
    },
    miner: {
      format: "bytes"
    },
    mixHash: {
      format: "bytes32"
    },
    nonce: {
      format: "uint"
    },
    number: {
      format: "uint"
    },
    parentBeaconBlockRoot: {
      format: "bytes32"
    },
    parentHash: {
      format: "bytes32"
    },
    receiptsRoot: {
      format: "bytes32"
    },
    sha3Uncles: {
      format: "bytes32"
    },
    size: {
      format: "uint"
    },
    stateRoot: {
      format: "bytes32"
    },
    timestamp: {
      format: "uint"
    },
    totalDifficulty: {
      format: "uint"
    },
    transactions: {
      oneOf: [
        {
          type: "array",
          items: Object.assign({}, transactionInfoSchema)
        },
        {
          type: "array",
          items: {
            format: "bytes32"
          }
        }
      ]
    },
    transactionsRoot: {
      format: "bytes32"
    },
    uncles: {
      type: "array",
      items: {
        format: "bytes32"
      }
    },
    withdrawals: {
      type: "array",
      items: Object.assign({}, withdrawalsSchema)
    },
    withdrawalsRoot: {
      format: "bytes32"
    }
  }
};
var blockHeaderSchema = {
  type: "object",
  properties: {
    author: {
      format: "bytes32"
    },
    excessDataGas: {
      format: "uint"
    },
    baseFeePerGas: {
      format: "uint"
    },
    blobGasUsed: {
      format: "uint"
    },
    difficulty: {
      format: "uint"
    },
    excessBlobGas: {
      format: "uint"
    },
    extraData: {
      format: "bytes"
    },
    gasLimit: {
      format: "uint"
    },
    gasUsed: {
      format: "uint"
    },
    hash: {
      format: "bytes32"
    },
    logsBloom: {
      format: "bytes256"
    },
    miner: {
      format: "bytes"
    },
    mixHash: {
      format: "bytes32"
    },
    nonce: {
      format: "uint"
    },
    number: {
      format: "uint"
    },
    parentBeaconBlockRoot: {
      format: "bytes32"
    },
    parentHash: {
      format: "bytes32"
    },
    receiptsRoot: {
      format: "bytes32"
    },
    sha3Uncles: {
      format: "bytes32"
    },
    size: {
      format: "uint"
    },
    stateRoot: {
      format: "bytes32"
    },
    timestamp: {
      format: "uint"
    },
    totalDifficulty: {
      format: "uint"
    },
    transactions: {
      type: "array",
      items: {
        format: "bytes32"
      }
    },
    transactionsRoot: {
      format: "bytes32"
    },
    uncles: {
      type: "array",
      items: {
        format: "bytes32"
      }
    },
    withdrawals: {
      type: "array",
      items: Object.assign({}, withdrawalsSchema)
    },
    withdrawalsRoot: {
      format: "bytes32"
    }
  }
};
var logSchema = {
  type: "object",
  properties: {
    removed: {
      format: "bool"
    },
    logIndex: {
      format: "uint"
    },
    transactionIndex: {
      format: "uint"
    },
    transactionHash: {
      format: "bytes32"
    },
    blockHash: {
      format: "bytes32"
    },
    blockNumber: {
      format: "uint"
    },
    address: {
      format: "address"
    },
    data: {
      format: "bytes"
    },
    topics: {
      type: "array",
      items: {
        format: "bytes32"
      }
    }
  }
};
var syncSchema = {
  type: "object",
  properties: {
    startingBlock: {
      format: "string"
    },
    currentBlock: {
      format: "string"
    },
    highestBlock: {
      format: "string"
    },
    knownStates: {
      format: "string"
    },
    pulledStates: {
      format: "string"
    }
  }
};
var transactionReceiptSchema = {
  type: "object",
  properties: {
    transactionHash: {
      format: "bytes32"
    },
    transactionIndex: {
      format: "uint"
    },
    blockHash: {
      format: "bytes32"
    },
    blockNumber: {
      format: "uint"
    },
    from: {
      format: "address"
    },
    to: {
      format: "address"
    },
    cumulativeGasUsed: {
      format: "uint"
    },
    gasUsed: {
      format: "uint"
    },
    effectiveGasPrice: {
      format: "uint"
    },
    contractAddress: {
      format: "address"
    },
    logs: {
      type: "array",
      items: Object.assign({}, logSchema)
    },
    logsBloom: {
      format: "bytes"
    },
    root: {
      format: "bytes"
    },
    status: {
      format: "uint"
    },
    type: {
      format: "uint"
    }
  }
};
var SignatureObjectSchema = {
  type: "object",
  properties: {
    messageHash: {
      format: "bytes"
    },
    r: {
      format: "bytes32"
    },
    s: {
      format: "bytes32"
    },
    v: {
      format: "bytes"
    },
    message: {
      format: "bytes"
    },
    signature: {
      format: "bytes"
    }
  }
};
var feeHistorySchema = {
  type: "object",
  properties: {
    oldestBlock: {
      format: "uint"
    },
    baseFeePerGas: {
      type: "array",
      items: {
        format: "uint"
      }
    },
    reward: {
      type: "array",
      items: {
        type: "array",
        items: {
          format: "uint"
        }
      }
    },
    gasUsedRatio: {
      type: "array",
      items: {
        type: "number"
      }
    }
  }
};
var storageProofSchema = {
  type: "object",
  properties: {
    key: {
      format: "bytes32"
    },
    value: {
      format: "uint"
    },
    proof: {
      type: "array",
      items: {
        format: "bytes32"
      }
    }
  }
};
var accountSchema = {
  type: "object",
  properties: {
    balance: {
      format: "uint"
    },
    codeHash: {
      format: "bytes32"
    },
    nonce: {
      format: "uint"
    },
    storageHash: {
      format: "bytes32"
    },
    accountProof: {
      type: "array",
      items: {
        format: "bytes32"
      }
    },
    storageProof: {
      type: "array",
      items: Object.assign({}, storageProofSchema)
    }
  }
};

// node_modules/web3-eth/lib/esm/utils/format_transaction.js
function formatTransaction(transaction, returnFormat = DEFAULT_RETURN_FORMAT, options = {
  transactionSchema: transactionInfoSchema,
  fillInputAndData: false
}) {
  var _a3, _b;
  let formattedTransaction = mergeDeep({}, transaction);
  if (!isNullish(transaction === null || transaction === void 0 ? void 0 : transaction.common)) {
    formattedTransaction.common = Object.assign({}, transaction.common);
    if (!isNullish((_a3 = transaction.common) === null || _a3 === void 0 ? void 0 : _a3.customChain))
      formattedTransaction.common.customChain = Object.assign({}, transaction.common.customChain);
  }
  formattedTransaction = format((_b = options.transactionSchema) !== null && _b !== void 0 ? _b : transactionInfoSchema, formattedTransaction, returnFormat);
  if (!isNullish(formattedTransaction.data) && !isNullish(formattedTransaction.input) && // Converting toHex is accounting for data and input being Uint8Arrays
  // since comparing Uint8Array is not as straightforward as comparing strings
  toHex(formattedTransaction.data) !== toHex(formattedTransaction.input))
    throw new TransactionDataAndInputError({
      data: bytesToHex(formattedTransaction.data),
      input: bytesToHex(formattedTransaction.input)
    });
  if (options.fillInputAndData) {
    if (!isNullish(formattedTransaction.data)) {
      formattedTransaction.input = formattedTransaction.data;
    } else if (!isNullish(formattedTransaction.input)) {
      formattedTransaction.data = formattedTransaction.input;
    }
  }
  if (!isNullish(formattedTransaction.gasLimit)) {
    formattedTransaction.gas = formattedTransaction.gasLimit;
    delete formattedTransaction.gasLimit;
  }
  return formattedTransaction;
}

// node_modules/web3-eth/lib/esm/utils/decode_signed_transaction.js
function decodeSignedTransaction(encodedSignedTransaction, returnFormat, options = {
  fillInputAndData: false
}) {
  return {
    raw: format({ format: "bytes" }, encodedSignedTransaction, returnFormat),
    tx: formatTransaction(Object.assign(Object.assign({}, TransactionFactory.fromSerializedData(hexToBytes(encodedSignedTransaction)).toJSON()), { hash: bytesToHex(keccak256Wrapper(hexToBytes(encodedSignedTransaction))), type: detectRawTransactionType(hexToBytes(encodedSignedTransaction)) }), returnFormat, {
      fillInputAndData: options.fillInputAndData,
      transactionSchema: options.transactionSchema
    })
  };
}

// node_modules/web3-net/lib/esm/index.js
var esm_exports11 = {};
__export(esm_exports11, {
  Net: () => Net,
  default: () => esm_default2,
  getId: () => getId2,
  getPeerCount: () => getPeerCount2,
  isListening: () => isListening2
});

// node_modules/web3-net/lib/esm/rpc_method_wrappers.js
var __awaiter13 = function(thisArg, _arguments, P, generator) {
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
function getId2(web3Context, returnFormat) {
  return __awaiter13(this, void 0, void 0, function* () {
    const response = yield net_rpc_methods_exports.getId(web3Context.requestManager);
    return format({ format: "uint" }, response, returnFormat);
  });
}
function getPeerCount2(web3Context, returnFormat) {
  return __awaiter13(this, void 0, void 0, function* () {
    const response = yield net_rpc_methods_exports.getPeerCount(web3Context.requestManager);
    return format({ format: "uint" }, response, returnFormat);
  });
}
var isListening2 = (web3Context) => __awaiter13(void 0, void 0, void 0, function* () {
  return net_rpc_methods_exports.isListening(web3Context.requestManager);
});

// node_modules/web3-net/lib/esm/net.js
var __awaiter14 = function(thisArg, _arguments, P, generator) {
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
var Net = class extends Web3Context {
  /**
   * Gets the current network ID
   *
   * @param returnFormat - Return format
   * @returns A Promise of the network ID.
   * @example
   * ```ts
   * const net = new Net(Net.givenProvider || 'ws://some.local-or-remote.node:8546');
   * await net.getId();
   * > 1
   * ```
   */
  getId(returnFormat = this.defaultReturnFormat) {
    return __awaiter14(this, void 0, void 0, function* () {
      return getId2(this, returnFormat);
    });
  }
  /**
   * Get the number of peers connected to.
   *
   * @param returnFormat - Return format
   * @returns A promise of the number of the peers connected to.
   * @example
   * ```ts
   * const net = new Net(Net.givenProvider || 'ws://some.local-or-remote.node:8546');
   * await net.getPeerCount();
   * > 0
   * ```
   */
  getPeerCount(returnFormat = this.defaultReturnFormat) {
    return __awaiter14(this, void 0, void 0, function* () {
      return getPeerCount2(this, returnFormat);
    });
  }
  /**
   * Check if the node is listening for peers
   *
   * @returns A promise of a boolean if the node is listening to peers
   * @example
   * ```ts
   * const net = new Net(Net.givenProvider || 'ws://some.local-or-remote.node:8546');
   * await net.isListening();
   * > true
   * ```
   */
  isListening() {
    return __awaiter14(this, void 0, void 0, function* () {
      return isListening2(this);
    });
  }
};

// node_modules/web3-net/lib/esm/index.js
var esm_default2 = Net;

// node_modules/web3-eth/lib/esm/constants.js
var ALL_EVENTS = "ALLEVENTS";
var ALL_EVENTS_ABI = {
  name: ALL_EVENTS,
  signature: "",
  type: "event",
  inputs: []
};
var NUMBER_DATA_FORMAT = { bytes: FMT_BYTES.HEX, number: FMT_NUMBER.NUMBER };

// node_modules/web3-eth/lib/esm/utils/get_transaction_gas_pricing.js
var __awaiter15 = function(thisArg, _arguments, P, generator) {
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
function getEip1559GasPricing(transaction, web3Context, returnFormat) {
  return __awaiter15(this, void 0, void 0, function* () {
    var _a3, _b, _c, _d;
    const block = yield getBlock(web3Context, web3Context.defaultBlock, false, ETH_DATA_FORMAT);
    if (isNullish(block.baseFeePerGas))
      throw new Eip1559NotSupportedError();
    let gasPrice;
    if (isNullish(transaction.gasPrice) && BigInt(block.baseFeePerGas) === BigInt(0)) {
      gasPrice = yield getGasPrice2(web3Context, returnFormat);
    }
    if (!isNullish(transaction.gasPrice) || !isNullish(gasPrice)) {
      const convertedTransactionGasPrice = format({ format: "uint" }, (_a3 = transaction.gasPrice) !== null && _a3 !== void 0 ? _a3 : gasPrice, returnFormat);
      return {
        maxPriorityFeePerGas: convertedTransactionGasPrice,
        maxFeePerGas: convertedTransactionGasPrice
      };
    }
    return {
      maxPriorityFeePerGas: format({ format: "uint" }, (_b = transaction.maxPriorityFeePerGas) !== null && _b !== void 0 ? _b : web3Context.defaultMaxPriorityFeePerGas, returnFormat),
      maxFeePerGas: format({ format: "uint" }, (_c = transaction.maxFeePerGas) !== null && _c !== void 0 ? _c : BigInt(block.baseFeePerGas) * BigInt(2) + BigInt((_d = transaction.maxPriorityFeePerGas) !== null && _d !== void 0 ? _d : web3Context.defaultMaxPriorityFeePerGas), returnFormat)
    };
  });
}
function getTransactionGasPricing(transaction, web3Context, returnFormat) {
  return __awaiter15(this, void 0, void 0, function* () {
    const transactionType = getTransactionType(transaction, web3Context);
    if (!isNullish(transactionType)) {
      if (transactionType.startsWith("-"))
        throw new UnsupportedTransactionTypeError(transactionType);
      if (Number(transactionType) < 0 || Number(transactionType) > 127)
        throw new UnsupportedTransactionTypeError(transactionType);
      if (isNullish(transaction.gasPrice) && (transactionType === "0x0" || transactionType === "0x1"))
        return {
          gasPrice: yield getGasPrice2(web3Context, returnFormat),
          maxPriorityFeePerGas: void 0,
          maxFeePerGas: void 0
        };
      if (transactionType === "0x2") {
        return Object.assign({ gasPrice: void 0 }, yield getEip1559GasPricing(transaction, web3Context, returnFormat));
      }
    }
    return void 0;
  });
}

// node_modules/web3-eth/lib/esm/utils/transaction_builder.js
var __awaiter16 = function(thisArg, _arguments, P, generator) {
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
var getTransactionFromOrToAttr = (attr, web3Context, transaction, privateKey) => {
  if (transaction !== void 0 && attr in transaction && transaction[attr] !== void 0) {
    if (typeof transaction[attr] === "string" && isAddress(transaction[attr])) {
      return transaction[attr];
    }
    if (!isHexStrict(transaction[attr]) && isNumber(transaction[attr])) {
      if (web3Context.wallet) {
        const account = web3Context.wallet.get(format({ format: "uint" }, transaction[attr], NUMBER_DATA_FORMAT));
        if (!isNullish(account)) {
          return account.address;
        }
        throw new LocalWalletNotAvailableError();
      }
      throw new LocalWalletNotAvailableError();
    } else {
      throw attr === "from" ? new InvalidTransactionWithSender(transaction.from) : (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        new InvalidTransactionWithReceiver(transaction.to)
      );
    }
  }
  if (attr === "from") {
    if (!isNullish(privateKey))
      return privateKeyToAddress(privateKey);
    if (!isNullish(web3Context.defaultAccount))
      return web3Context.defaultAccount;
  }
  return void 0;
};
var getTransactionNonce = (web3Context_1, address_1, ...args_1) => __awaiter16(void 0, [web3Context_1, address_1, ...args_1], void 0, function* (web3Context, address, returnFormat = web3Context.defaultReturnFormat) {
  if (isNullish(address)) {
    throw new UnableToPopulateNonceError();
  }
  return getTransactionCount2(web3Context, address, web3Context.defaultBlock, returnFormat);
});
var getTransactionType = (transaction, web3Context) => {
  const inferredType = detectTransactionType(transaction, web3Context);
  if (!isNullish(inferredType))
    return inferredType;
  if (!isNullish(web3Context.defaultTransactionType))
    return format({ format: "uint" }, web3Context.defaultTransactionType, ETH_DATA_FORMAT);
  return void 0;
};
function defaultTransactionBuilder(options) {
  return __awaiter16(this, void 0, void 0, function* () {
    var _a3, _b;
    let populatedTransaction = format(transactionSchema, options.transaction, options.web3Context.defaultReturnFormat);
    if (isNullish(populatedTransaction.from)) {
      populatedTransaction.from = getTransactionFromOrToAttr("from", options.web3Context, void 0, options.privateKey);
    }
    if (isNullish(populatedTransaction.nonce)) {
      populatedTransaction.nonce = yield getTransactionNonce(options.web3Context, populatedTransaction.from, ETH_DATA_FORMAT);
    }
    if (isNullish(populatedTransaction.value)) {
      populatedTransaction.value = "0x0";
    }
    if (!isNullish(populatedTransaction.data)) {
      if (!isNullish(populatedTransaction.input) && populatedTransaction.data !== populatedTransaction.input)
        throw new TransactionDataAndInputError({
          data: bytesToHex(populatedTransaction.data),
          input: bytesToHex(populatedTransaction.input)
        });
      if (!populatedTransaction.data.startsWith("0x"))
        populatedTransaction.data = `0x${populatedTransaction.data}`;
    } else if (!isNullish(populatedTransaction.input)) {
      if (!populatedTransaction.input.startsWith("0x"))
        populatedTransaction.input = `0x${populatedTransaction.input}`;
    } else {
      populatedTransaction.input = "0x";
    }
    if (isNullish(populatedTransaction.common)) {
      if (options.web3Context.defaultCommon) {
        const common = options.web3Context.defaultCommon;
        const chainId = common.customChain.chainId;
        const networkId = common.customChain.networkId;
        const name2 = common.customChain.name;
        populatedTransaction.common = Object.assign(Object.assign({}, common), { customChain: { chainId, networkId, name: name2 } });
      }
      if (isNullish(populatedTransaction.chain)) {
        populatedTransaction.chain = options.web3Context.defaultChain;
      }
      if (isNullish(populatedTransaction.hardfork)) {
        populatedTransaction.hardfork = options.web3Context.defaultHardfork;
      }
    }
    if (isNullish(populatedTransaction.chainId) && isNullish((_a3 = populatedTransaction.common) === null || _a3 === void 0 ? void 0 : _a3.customChain.chainId)) {
      populatedTransaction.chainId = yield getChainId2(options.web3Context, ETH_DATA_FORMAT);
    }
    if (isNullish(populatedTransaction.networkId)) {
      populatedTransaction.networkId = (_b = options.web3Context.defaultNetworkId) !== null && _b !== void 0 ? _b : yield getId2(options.web3Context, ETH_DATA_FORMAT);
    }
    if (isNullish(populatedTransaction.gasLimit) && !isNullish(populatedTransaction.gas)) {
      populatedTransaction.gasLimit = populatedTransaction.gas;
    }
    populatedTransaction.type = getTransactionType(populatedTransaction, options.web3Context);
    if (isNullish(populatedTransaction.accessList) && (populatedTransaction.type === "0x1" || populatedTransaction.type === "0x2")) {
      populatedTransaction.accessList = [];
    }
    if (options.fillGasPrice)
      populatedTransaction = Object.assign(Object.assign({}, populatedTransaction), yield getTransactionGasPricing(populatedTransaction, options.web3Context, ETH_DATA_FORMAT));
    if (isNullish(populatedTransaction.gas) && isNullish(populatedTransaction.gasLimit) && options.fillGasLimit) {
      const fillGasLimit = yield estimateGas2(options.web3Context, populatedTransaction, "latest", ETH_DATA_FORMAT);
      populatedTransaction = Object.assign(Object.assign({}, populatedTransaction), { gas: format({ format: "uint" }, fillGasLimit, ETH_DATA_FORMAT) });
    }
    return populatedTransaction;
  });
}
var transactionBuilder = (options) => __awaiter16(void 0, void 0, void 0, function* () {
  var _a3;
  return ((_a3 = options.web3Context.transactionBuilder) !== null && _a3 !== void 0 ? _a3 : defaultTransactionBuilder)(Object.assign(Object.assign({}, options), { transaction: options.transaction }));
});

// node_modules/web3-eth/lib/esm/utils/reject_if_block_timeout.js
var __awaiter17 = function(thisArg, _arguments, P, generator) {
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
function resolveByPolling(web3Context, starterBlockNumber, transactionHash) {
  const pollingInterval = web3Context.transactionPollingInterval;
  const [intervalId, promiseToError] = rejectIfConditionAtInterval(() => __awaiter17(this, void 0, void 0, function* () {
    let lastBlockNumber;
    try {
      lastBlockNumber = yield getBlockNumber2(web3Context, NUMBER_DATA_FORMAT);
    } catch (error) {
      console.warn("An error happen while trying to get the block number", error);
      return void 0;
    }
    const numberOfBlocks = lastBlockNumber - starterBlockNumber;
    if (numberOfBlocks >= web3Context.transactionBlockTimeout) {
      return new TransactionBlockTimeoutError({
        starterBlockNumber,
        numberOfBlocks,
        transactionHash
      });
    }
    return void 0;
  }), pollingInterval);
  const clean = () => {
    clearInterval(intervalId);
  };
  return [promiseToError, { clean }];
}
function resolveBySubscription(web3Context, starterBlockNumber, transactionHash) {
  return __awaiter17(this, void 0, void 0, function* () {
    var _a3;
    let needToWatchLater = true;
    let subscription;
    let resourceCleaner;
    function revertToPolling(reject, previousError) {
      if (previousError) {
        console.warn("error happened at subscription. So revert to polling...", previousError);
      }
      resourceCleaner.clean();
      needToWatchLater = false;
      const [promiseToError2, newResourceCleaner] = resolveByPolling(web3Context, starterBlockNumber, transactionHash);
      resourceCleaner.clean = newResourceCleaner.clean;
      promiseToError2.catch((error) => reject(error));
    }
    try {
      subscription = yield (_a3 = web3Context.subscriptionManager) === null || _a3 === void 0 ? void 0 : _a3.subscribe("newHeads");
      resourceCleaner = {
        clean: () => {
          var _a4;
          if (subscription.id) {
            (_a4 = web3Context.subscriptionManager) === null || _a4 === void 0 ? void 0 : _a4.removeSubscription(subscription).then(() => {
            }).catch(() => {
            });
          }
        }
      };
    } catch (error) {
      return resolveByPolling(web3Context, starterBlockNumber, transactionHash);
    }
    const promiseToError = new Promise((_, reject) => {
      try {
        subscription.on("data", (lastBlockHeader) => {
          needToWatchLater = false;
          if (!(lastBlockHeader === null || lastBlockHeader === void 0 ? void 0 : lastBlockHeader.number)) {
            return;
          }
          const numberOfBlocks = Number(BigInt(lastBlockHeader.number) - BigInt(starterBlockNumber));
          if (numberOfBlocks >= web3Context.transactionBlockTimeout) {
            reject(new TransactionBlockTimeoutError({
              starterBlockNumber,
              numberOfBlocks,
              transactionHash
            }));
          }
        });
        subscription.on("error", (error) => {
          revertToPolling(reject, error);
        });
      } catch (error) {
        revertToPolling(reject, error);
      }
      setTimeout(() => {
        if (needToWatchLater) {
          revertToPolling(reject);
        }
      }, web3Context.blockHeaderTimeout * 1e3);
    });
    return [promiseToError, resourceCleaner];
  });
}
function rejectIfBlockTimeout(web3Context, transactionHash) {
  return __awaiter17(this, void 0, void 0, function* () {
    var _a3, _b;
    const { provider } = web3Context.requestManager;
    let callingRes;
    const starterBlockNumber = yield getBlockNumber2(web3Context, NUMBER_DATA_FORMAT);
    if (((_b = (_a3 = provider).supportsSubscriptions) === null || _b === void 0 ? void 0 : _b.call(_a3)) && web3Context.enableExperimentalFeatures.useSubscriptionWhenCheckingBlockTimeout) {
      callingRes = yield resolveBySubscription(web3Context, starterBlockNumber, transactionHash);
    } else {
      callingRes = resolveByPolling(web3Context, starterBlockNumber, transactionHash);
    }
    return callingRes;
  });
}

// node_modules/web3-eth/lib/esm/utils/try_send_transaction.js
var __awaiter18 = function(thisArg, _arguments, P, generator) {
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
function trySendTransaction(web3Context, sendTransactionFunc, transactionHash) {
  return __awaiter18(this, void 0, void 0, function* () {
    const [timeoutId, rejectOnTimeout] = rejectIfTimeout(web3Context.transactionSendTimeout, new TransactionSendTimeoutError({
      numberOfSeconds: web3Context.transactionSendTimeout / 1e3,
      transactionHash
    }));
    const [rejectOnBlockTimeout, blockTimeoutResourceCleaner] = yield rejectIfBlockTimeout(web3Context, transactionHash);
    try {
      return yield Promise.race([
        sendTransactionFunc(),
        // this is the function that will send the transaction
        rejectOnTimeout,
        // this will throw an error on Transaction Send Timeout
        rejectOnBlockTimeout
        // this will throw an error on Transaction Block Timeout
      ]);
    } finally {
      clearTimeout(timeoutId);
      blockTimeoutResourceCleaner.clean();
    }
  });
}

// node_modules/web3-eth/lib/esm/utils/wait_for_transaction_receipt.js
var __awaiter19 = function(thisArg, _arguments, P, generator) {
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
function waitForTransactionReceipt(web3Context, transactionHash, returnFormat, customGetTransactionReceipt) {
  return __awaiter19(this, void 0, void 0, function* () {
    var _a3;
    const pollingInterval = (_a3 = web3Context.transactionReceiptPollingInterval) !== null && _a3 !== void 0 ? _a3 : web3Context.transactionPollingInterval;
    const [awaitableTransactionReceipt, IntervalId] = pollTillDefinedAndReturnIntervalId(() => __awaiter19(this, void 0, void 0, function* () {
      try {
        return (customGetTransactionReceipt !== null && customGetTransactionReceipt !== void 0 ? customGetTransactionReceipt : getTransactionReceipt2)(web3Context, transactionHash, returnFormat);
      } catch (error) {
        console.warn("An error happen while trying to get the transaction receipt", error);
        return void 0;
      }
    }), pollingInterval);
    const [timeoutId, rejectOnTimeout] = rejectIfTimeout(web3Context.transactionPollingTimeout, new TransactionPollingTimeoutError({
      numberOfSeconds: web3Context.transactionPollingTimeout / 1e3,
      transactionHash
    }));
    const [rejectOnBlockTimeout, blockTimeoutResourceCleaner] = yield rejectIfBlockTimeout(web3Context, transactionHash);
    try {
      return yield Promise.race([
        awaitableTransactionReceipt,
        rejectOnTimeout,
        // this will throw an error on Transaction Polling Timeout
        rejectOnBlockTimeout
        // this will throw an error on Transaction Block Timeout
      ]);
    } finally {
      if (timeoutId)
        clearTimeout(timeoutId);
      if (IntervalId)
        clearInterval(IntervalId);
      blockTimeoutResourceCleaner.clean();
    }
  });
}

// node_modules/web3-eth/lib/esm/utils/watch_transaction_by_polling.js
var __awaiter20 = function(thisArg, _arguments, P, generator) {
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
var watchTransactionByPolling = ({ web3Context, transactionReceipt, transactionPromiEvent, customTransactionReceiptSchema, returnFormat }) => {
  var _a3;
  let confirmations = 1;
  const intervalId = setInterval(() => {
    (() => __awaiter20(void 0, void 0, void 0, function* () {
      if (confirmations >= web3Context.transactionConfirmationBlocks) {
        clearInterval(intervalId);
        return;
      }
      const nextBlock = yield eth_rpc_methods_exports.getBlockByNumber(web3Context.requestManager, numberToHex(BigInt(transactionReceipt.blockNumber) + BigInt(confirmations)), false);
      if (nextBlock === null || nextBlock === void 0 ? void 0 : nextBlock.hash) {
        confirmations += 1;
        transactionPromiEvent.emit("confirmation", {
          confirmations: format({ format: "uint" }, confirmations, returnFormat),
          receipt: format(customTransactionReceiptSchema !== null && customTransactionReceiptSchema !== void 0 ? customTransactionReceiptSchema : transactionReceiptSchema, transactionReceipt, returnFormat),
          latestBlockHash: format({ format: "bytes32" }, nextBlock.hash, returnFormat)
        });
      }
    }))();
  }, (_a3 = web3Context.transactionReceiptPollingInterval) !== null && _a3 !== void 0 ? _a3 : web3Context.transactionPollingInterval);
};

// node_modules/web3-eth/lib/esm/utils/watch_transaction_by_subscription.js
var __awaiter21 = function(thisArg, _arguments, P, generator) {
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
var watchTransactionBySubscription = ({ web3Context, transactionReceipt, transactionPromiEvent, customTransactionReceiptSchema, returnFormat }) => {
  let needToWatchLater = true;
  let lastCaughtBlockHash;
  setImmediate(() => {
    var _a3;
    (_a3 = web3Context.subscriptionManager) === null || _a3 === void 0 ? void 0 : _a3.subscribe("newHeads").then((subscription) => {
      subscription.on("data", (newBlockHeader) => __awaiter21(void 0, void 0, void 0, function* () {
        var _a4;
        needToWatchLater = false;
        if (!(newBlockHeader === null || newBlockHeader === void 0 ? void 0 : newBlockHeader.number) || // For some cases, the on-data event is fired couple times for the same block!
        // This needs investigation but seems to be because of multiple `subscription.on('data'...)` even this should not cause that.
        lastCaughtBlockHash === (newBlockHeader === null || newBlockHeader === void 0 ? void 0 : newBlockHeader.parentHash)) {
          return;
        }
        lastCaughtBlockHash = newBlockHeader === null || newBlockHeader === void 0 ? void 0 : newBlockHeader.parentHash;
        const confirmations = BigInt(newBlockHeader.number) - BigInt(transactionReceipt.blockNumber) + BigInt(1);
        transactionPromiEvent.emit("confirmation", {
          confirmations: format({ format: "uint" }, confirmations, returnFormat),
          receipt: format(customTransactionReceiptSchema !== null && customTransactionReceiptSchema !== void 0 ? customTransactionReceiptSchema : transactionReceiptSchema, transactionReceipt, returnFormat),
          latestBlockHash: format({ format: "bytes32" }, newBlockHeader.parentHash, returnFormat)
        });
        if (confirmations >= web3Context.transactionConfirmationBlocks) {
          yield (_a4 = web3Context.subscriptionManager) === null || _a4 === void 0 ? void 0 : _a4.removeSubscription(subscription);
        }
      }));
      subscription.on("error", () => __awaiter21(void 0, void 0, void 0, function* () {
        var _a4;
        yield (_a4 = web3Context.subscriptionManager) === null || _a4 === void 0 ? void 0 : _a4.removeSubscription(subscription);
        needToWatchLater = false;
        watchTransactionByPolling({
          web3Context,
          transactionReceipt,
          transactionPromiEvent,
          customTransactionReceiptSchema,
          returnFormat
        });
      }));
    }).catch(() => {
      needToWatchLater = false;
      watchTransactionByPolling({
        web3Context,
        transactionReceipt,
        customTransactionReceiptSchema,
        transactionPromiEvent,
        returnFormat
      });
    });
  });
  setTimeout(() => {
    if (needToWatchLater) {
      watchTransactionByPolling({
        web3Context,
        transactionReceipt,
        transactionPromiEvent,
        returnFormat
      });
    }
  }, web3Context.blockHeaderTimeout * 1e3);
};

// node_modules/web3-eth/lib/esm/utils/watch_transaction_for_confirmations.js
function watchTransactionForConfirmations(web3Context, transactionPromiEvent, transactionReceipt, transactionHash, returnFormat, customTransactionReceiptSchema) {
  if (isNullish(transactionReceipt) || isNullish(transactionReceipt.blockHash))
    throw new TransactionMissingReceiptOrBlockHashError({
      receipt: transactionReceipt,
      blockHash: format({ format: "bytes32" }, transactionReceipt === null || transactionReceipt === void 0 ? void 0 : transactionReceipt.blockHash, returnFormat),
      transactionHash: format({ format: "bytes32" }, transactionHash, returnFormat)
    });
  if (!transactionReceipt.blockNumber)
    throw new TransactionReceiptMissingBlockNumberError({ receipt: transactionReceipt });
  transactionPromiEvent.emit("confirmation", {
    confirmations: format({ format: "uint" }, 1, returnFormat),
    receipt: format(customTransactionReceiptSchema !== null && customTransactionReceiptSchema !== void 0 ? customTransactionReceiptSchema : transactionReceiptSchema, transactionReceipt, returnFormat),
    latestBlockHash: format({ format: "bytes32" }, transactionReceipt.blockHash, returnFormat)
  });
  const provider = web3Context.requestManager.provider;
  if (provider && "supportsSubscriptions" in provider && provider.supportsSubscriptions()) {
    watchTransactionBySubscription({
      web3Context,
      transactionReceipt,
      transactionPromiEvent,
      customTransactionReceiptSchema,
      returnFormat
    });
  } else {
    watchTransactionByPolling({
      web3Context,
      transactionReceipt,
      transactionPromiEvent,
      customTransactionReceiptSchema,
      returnFormat
    });
  }
}

// node_modules/web3-eth-abi/lib/esm/index.js
var esm_exports12 = {};
__export(esm_exports12, {
  decodeContractErrorData: () => decodeContractErrorData,
  decodeFunctionCall: () => decodeFunctionCall,
  decodeFunctionReturn: () => decodeFunctionReturn,
  decodeLog: () => decodeLog,
  decodeParameter: () => decodeParameter,
  decodeParameters: () => decodeParameters2,
  decodeParametersWith: () => decodeParametersWith,
  encodeErrorSignature: () => encodeErrorSignature,
  encodeEventSignature: () => encodeEventSignature,
  encodeFunctionCall: () => encodeFunctionCall,
  encodeFunctionSignature: () => encodeFunctionSignature,
  encodeParameter: () => encodeParameter,
  encodeParameters: () => encodeParameters,
  flattenTypes: () => flattenTypes,
  formatOddHexstrings: () => formatOddHexstrings,
  formatParam: () => formatParam,
  getEncodedEip712Data: () => getMessage,
  inferTypesAndEncodeParameters: () => inferTypesAndEncodeParameters,
  isAbiConstructorFragment: () => isAbiConstructorFragment,
  isAbiErrorFragment: () => isAbiErrorFragment,
  isAbiEventFragment: () => isAbiEventFragment,
  isAbiFragment: () => isAbiFragment,
  isAbiFunctionFragment: () => isAbiFunctionFragment,
  isOddHexstring: () => isOddHexstring,
  isSimplifiedStructFormat: () => isSimplifiedStructFormat,
  jsonInterfaceMethodToString: () => jsonInterfaceMethodToString,
  mapStructNameAndType: () => mapStructNameAndType,
  mapStructToCoderFormat: () => mapStructToCoderFormat,
  mapTypes: () => mapTypes
});

// node_modules/web3-eth-abi/lib/esm/utils.js
var isAbiFragment = (item) => !isNullish2(item) && typeof item === "object" && !isNullish2(item.type) && ["function", "event", "constructor", "error"].includes(item.type);
var isAbiErrorFragment = (item) => !isNullish2(item) && typeof item === "object" && !isNullish2(item.type) && item.type === "error";
var isAbiEventFragment = (item) => !isNullish2(item) && typeof item === "object" && !isNullish2(item.type) && item.type === "event";
var isAbiFunctionFragment = (item) => !isNullish2(item) && typeof item === "object" && !isNullish2(item.type) && item.type === "function";
var isAbiConstructorFragment = (item) => !isNullish2(item) && typeof item === "object" && !isNullish2(item.type) && item.type === "constructor";
var isSimplifiedStructFormat = (type) => typeof type === "object" && typeof type.components === "undefined" && typeof type.name === "undefined";
var mapStructNameAndType = (structName) => structName.includes("[]") ? { type: "tuple[]", name: structName.slice(0, -2) } : { type: "tuple", name: structName };
var mapStructToCoderFormat = (struct) => {
  const components = [];
  for (const key of Object.keys(struct)) {
    const item = struct[key];
    if (typeof item === "object") {
      components.push(Object.assign(Object.assign({}, mapStructNameAndType(key)), { components: mapStructToCoderFormat(item) }));
    } else {
      components.push({
        name: key,
        type: struct[key]
      });
    }
  }
  return components;
};
var mapTypes = (types) => {
  const mappedTypes = [];
  for (const type of types) {
    let modifiedType = type;
    if (typeof type === "object") {
      modifiedType = Object.assign({}, type);
    }
    if (typeof type === "object" && type.type === "function") {
      modifiedType = Object.assign(Object.assign({}, type), { type: "bytes24" });
    }
    if (isSimplifiedStructFormat(modifiedType)) {
      const structName = Object.keys(modifiedType)[0];
      mappedTypes.push(Object.assign(Object.assign({}, mapStructNameAndType(structName)), { components: mapStructToCoderFormat(modifiedType[structName]) }));
    } else {
      mappedTypes.push(modifiedType);
    }
  }
  return mappedTypes;
};
var isOddHexstring = (param) => typeof param === "string" && /^(-)?0x[0-9a-f]*$/i.test(param) && param.length % 2 === 1;
var formatOddHexstrings = (param) => isOddHexstring(param) ? `0x0${param.substring(2)}` : param;
var paramTypeBytes = /^bytes([0-9]*)$/;
var paramTypeBytesArray = /^bytes([0-9]*)\[\]$/;
var paramTypeNumber = /^(u?int)([0-9]*)$/;
var paramTypeNumberArray = /^(u?int)([0-9]*)\[\]$/;
var formatParam = (type, _param) => {
  const param = typeof _param === "object" && !Array.isArray(_param) ? Object.assign({}, _param) : _param;
  if (param instanceof BigInt || typeof param === "bigint") {
    return param.toString(10);
  }
  if (paramTypeBytesArray.exec(type) || paramTypeNumberArray.exec(type)) {
    const paramClone = [...param];
    return paramClone.map((p) => formatParam(type.replace("[]", ""), p));
  }
  let match = paramTypeNumber.exec(type);
  if (match) {
    const size = parseInt(match[2] ? match[2] : "256", 10);
    if (size / 8 < param.length) {
      return leftPad(param, size);
    }
  }
  match = paramTypeBytes.exec(type);
  if (match) {
    const hexParam = isUint8Array(param) ? toHex(param) : param;
    const size = parseInt(match[1], 10);
    if (size) {
      let maxSize = size * 2;
      if (param.startsWith("0x")) {
        maxSize += 2;
      }
      const paddedParam = hexParam.length < maxSize ? rightPad(param, size * 2) : hexParam;
      return formatOddHexstrings(paddedParam);
    }
    return formatOddHexstrings(hexParam);
  }
  return param;
};
var flattenTypes = (includeTuple, puts) => {
  const types = [];
  puts.forEach((param) => {
    if (typeof param.components === "object") {
      if (!param.type.startsWith("tuple")) {
        throw new AbiError(`Invalid value given "${param.type}". Error: components found but type is not tuple.`);
      }
      const arrayBracket = param.type.indexOf("[");
      const suffix = arrayBracket >= 0 ? param.type.substring(arrayBracket) : "";
      const result = flattenTypes(includeTuple, param.components);
      if (Array.isArray(result) && includeTuple) {
        types.push(`tuple(${result.join(",")})${suffix}`);
      } else if (!includeTuple) {
        types.push(`(${result.join(",")})${suffix}`);
      } else {
        types.push(`(${result.join()})`);
      }
    } else {
      types.push(param.type);
    }
  });
  return types;
};
var jsonInterfaceMethodToString = (json) => {
  var _a3, _b, _c, _d;
  if (isAbiErrorFragment(json) || isAbiEventFragment(json) || isAbiFunctionFragment(json)) {
    if ((_a3 = json.name) === null || _a3 === void 0 ? void 0 : _a3.includes("(")) {
      return json.name;
    }
    return `${(_b = json.name) !== null && _b !== void 0 ? _b : ""}(${flattenTypes(false, (_c = json.inputs) !== null && _c !== void 0 ? _c : []).join(",")})`;
  }
  return `(${flattenTypes(false, (_d = json.inputs) !== null && _d !== void 0 ? _d : []).join(",")})`;
};

// node_modules/web3-eth-abi/lib/esm/api/errors_api.js
var encodeErrorSignature = (functionName) => {
  if (typeof functionName !== "string" && !isAbiErrorFragment(functionName)) {
    throw new AbiError("Invalid parameter value in encodeErrorSignature");
  }
  let name2;
  if (functionName && (typeof functionName === "function" || typeof functionName === "object")) {
    name2 = jsonInterfaceMethodToString(functionName);
  } else {
    name2 = functionName;
  }
  return sha3Raw(name2);
};

// node_modules/web3-eth-abi/lib/esm/api/events_api.js
var encodeEventSignature = (functionName) => {
  if (typeof functionName !== "string" && !isAbiEventFragment(functionName)) {
    throw new AbiError("Invalid parameter value in encodeEventSignature");
  }
  let name2;
  if (functionName && (typeof functionName === "function" || typeof functionName === "object")) {
    name2 = jsonInterfaceMethodToString(functionName);
  } else {
    name2 = functionName;
  }
  return sha3Raw(name2);
};

// node_modules/abitype/dist/chunk-WP7KDV47.mjs
function execTyped(regex, string) {
  const match = regex.exec(string);
  return match?.groups;
}
var bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
var integerRegex = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
var isTupleRegex = /^\(.+?\).*?$/;

// node_modules/abitype/dist/chunk-NHABU752.mjs
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/abitype/dist/index.mjs
var name = "abitype";
var version = "0.7.1";
var BaseError = class extends Error {
  constructor(shortMessage, args = {}) {
    const details = args.cause instanceof BaseError ? args.cause.details : args.cause?.message ? args.cause.message : args.details;
    const docsPath = args.cause instanceof BaseError ? args.cause.docsPath || args.docsPath : args.docsPath;
    const message = [
      shortMessage || "An error occurred.",
      "",
      ...args.metaMessages ? [...args.metaMessages, ""] : [],
      ...docsPath ? [`Docs: https://abitype.dev${docsPath}`] : [],
      ...details ? [`Details: ${details}`] : [],
      `Version: ${name}@${version}`
    ].join("\n");
    super(message);
    __publicField(this, "details");
    __publicField(this, "docsPath");
    __publicField(this, "metaMessages");
    __publicField(this, "shortMessage");
    __publicField(this, "name", "AbiTypeError");
    if (args.cause)
      this.cause = args.cause;
    this.details = details;
    this.docsPath = docsPath;
    this.metaMessages = args.metaMessages;
    this.shortMessage = shortMessage;
  }
};
var structSignatureRegex = /^struct (?<name>[a-zA-Z0-9_]+) \{(?<properties>.*?)\}$/;
function isStructSignature(signature) {
  return structSignatureRegex.test(signature);
}
function execStructSignature(signature) {
  return execTyped(
    structSignatureRegex,
    signature
  );
}
var modifiers = /* @__PURE__ */ new Set([
  "memory",
  "indexed",
  "storage",
  "calldata"
]);
var functionModifiers = /* @__PURE__ */ new Set([
  "calldata",
  "memory",
  "storage"
]);
function getParameterCacheKey(param, type) {
  if (type)
    return `${type}:${param}`;
  return param;
}
var parameterCache = /* @__PURE__ */ new Map([
  // Unnamed
  ["address", { type: "address" }],
  ["bool", { type: "bool" }],
  ["bytes", { type: "bytes" }],
  ["bytes32", { type: "bytes32" }],
  ["int", { type: "int256" }],
  ["int256", { type: "int256" }],
  ["string", { type: "string" }],
  ["uint", { type: "uint256" }],
  ["uint8", { type: "uint8" }],
  ["uint16", { type: "uint16" }],
  ["uint24", { type: "uint24" }],
  ["uint32", { type: "uint32" }],
  ["uint64", { type: "uint64" }],
  ["uint96", { type: "uint96" }],
  ["uint112", { type: "uint112" }],
  ["uint160", { type: "uint160" }],
  ["uint192", { type: "uint192" }],
  ["uint256", { type: "uint256" }],
  // Named
  ["address owner", { type: "address", name: "owner" }],
  ["address to", { type: "address", name: "to" }],
  ["bool approved", { type: "bool", name: "approved" }],
  ["bytes _data", { type: "bytes", name: "_data" }],
  ["bytes data", { type: "bytes", name: "data" }],
  ["bytes signature", { type: "bytes", name: "signature" }],
  ["bytes32 hash", { type: "bytes32", name: "hash" }],
  ["bytes32 r", { type: "bytes32", name: "r" }],
  ["bytes32 root", { type: "bytes32", name: "root" }],
  ["bytes32 s", { type: "bytes32", name: "s" }],
  ["string name", { type: "string", name: "name" }],
  ["string symbol", { type: "string", name: "symbol" }],
  ["string tokenURI", { type: "string", name: "tokenURI" }],
  ["uint tokenId", { type: "uint256", name: "tokenId" }],
  ["uint8 v", { type: "uint8", name: "v" }],
  ["uint256 balance", { type: "uint256", name: "balance" }],
  ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
  ["uint256 value", { type: "uint256", name: "value" }],
  // Indexed
  [
    "event:address indexed from",
    { type: "address", name: "from", indexed: true }
  ],
  ["event:address indexed to", { type: "address", name: "to", indexed: true }],
  [
    "event:uint indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: true }
  ],
  [
    "event:uint256 indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: true }
  ]
]);
var abiParameterWithoutTupleRegex = /^(?<type>[a-zA-Z0-9_]+?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z0-9_]+))?$/;
var abiParameterWithTupleRegex = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z0-9_]+))?$/;
var dynamicIntegerRegex = /^u?int$/;
function parseAbiParameter(param, options) {
  const parameterCacheKey = getParameterCacheKey(param, options?.type);
  if (parameterCache.has(parameterCacheKey))
    return parameterCache.get(parameterCacheKey);
  const isTuple = isTupleRegex.test(param);
  const match = execTyped(
    isTuple ? abiParameterWithTupleRegex : abiParameterWithoutTupleRegex,
    param
  );
  if (!match)
    throw new BaseError("Invalid ABI parameter.", {
      details: param
    });
  if (match.name && isSolidityKeyword(match.name))
    throw new BaseError("Invalid ABI parameter.", {
      details: param,
      metaMessages: [
        `"${match.name}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`
      ]
    });
  const name2 = match.name ? { name: match.name } : {};
  const indexed = match.modifier === "indexed" ? { indexed: true } : {};
  const structs = options?.structs ?? {};
  let type;
  let components = {};
  if (isTuple) {
    type = "tuple";
    const params = splitParameters(match.type);
    const components_ = [];
    const length = params.length;
    for (let i = 0; i < length; i++) {
      components_.push(parseAbiParameter(params[i], { structs }));
    }
    components = { components: components_ };
  } else if (match.type in structs) {
    type = "tuple";
    components = { components: structs[match.type] };
  } else if (dynamicIntegerRegex.test(match.type)) {
    type = `${match.type}256`;
  } else {
    type = match.type;
    if (!(options?.type === "struct") && !isSolidityType(type))
      throw new BaseError("Unknown type.", {
        metaMessages: [`Type "${type}" is not a valid ABI type.`]
      });
  }
  if (match.modifier) {
    if (!options?.modifiers?.has?.(match.modifier))
      throw new BaseError("Invalid ABI parameter.", {
        details: param,
        metaMessages: [
          `Modifier "${match.modifier}" not allowed${options?.type ? ` in "${options.type}" type` : ""}.`
        ]
      });
    if (functionModifiers.has(match.modifier) && !isValidDataLocation(type, !!match.array))
      throw new BaseError("Invalid ABI parameter.", {
        details: param,
        metaMessages: [
          `Modifier "${match.modifier}" not allowed${options?.type ? ` in "${options.type}" type` : ""}.`,
          `Data location can only be specified for array, struct, or mapping types, but "${match.modifier}" was given.`
        ]
      });
  }
  const abiParameter = __spreadValues(__spreadValues(__spreadValues({
    type: `${type}${match.array ?? ""}`
  }, name2), indexed), components);
  parameterCache.set(parameterCacheKey, abiParameter);
  return abiParameter;
}
function splitParameters(params, result = [], current = "", depth = 0) {
  if (params === "") {
    if (current === "")
      return result;
    if (depth !== 0)
      throw new BaseError("Unbalanced parentheses.", {
        metaMessages: [
          `"${current.trim()}" has too many ${depth > 0 ? "opening" : "closing"} parentheses.`
        ],
        details: `Depth "${depth}"`
      });
    return [...result, current.trim()];
  }
  const length = params.length;
  for (let i = 0; i < length; i++) {
    const char = params[i];
    const tail = params.slice(i + 1);
    switch (char) {
      case ",":
        return depth === 0 ? splitParameters(tail, [...result, current.trim()]) : splitParameters(tail, result, `${current}${char}`, depth);
      case "(":
        return splitParameters(tail, result, `${current}${char}`, depth + 1);
      case ")":
        return splitParameters(tail, result, `${current}${char}`, depth - 1);
      default:
        return splitParameters(tail, result, `${current}${char}`, depth);
    }
  }
  return [];
}
function isSolidityType(type) {
  return type === "address" || type === "bool" || type === "function" || type === "string" || bytesRegex.test(type) || integerRegex.test(type);
}
var protectedKeywordsRegex = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function isSolidityKeyword(name2) {
  return name2 === "address" || name2 === "bool" || name2 === "function" || name2 === "string" || name2 === "tuple" || bytesRegex.test(name2) || integerRegex.test(name2) || protectedKeywordsRegex.test(name2);
}
function isValidDataLocation(type, isArray) {
  return isArray || type === "bytes" || type === "string" || type === "tuple";
}
function parseStructs(signatures) {
  const shallowStructs = {};
  const signaturesLength = signatures.length;
  for (let i = 0; i < signaturesLength; i++) {
    const signature = signatures[i];
    if (!isStructSignature(signature))
      continue;
    const match = execStructSignature(signature);
    if (!match)
      throw new BaseError("Invalid struct signature.", {
        details: signature
      });
    const properties = match.properties.split(";");
    const components = [];
    const propertiesLength = properties.length;
    for (let k = 0; k < propertiesLength; k++) {
      const property = properties[k];
      const trimmed = property.trim();
      if (!trimmed)
        continue;
      const abiParameter = parseAbiParameter(trimmed, {
        type: "struct"
      });
      components.push(abiParameter);
    }
    if (!components.length)
      throw new BaseError("Invalid struct signature.", {
        details: signature,
        metaMessages: ["No properties exist."]
      });
    shallowStructs[match.name] = components;
  }
  const resolvedStructs = {};
  const entries = Object.entries(shallowStructs);
  const entriesLength = entries.length;
  for (let i = 0; i < entriesLength; i++) {
    const [name2, parameters] = entries[i];
    resolvedStructs[name2] = resolveStructs(parameters, shallowStructs);
  }
  return resolvedStructs;
}
var typeWithoutTupleRegex = /^(?<type>[a-zA-Z0-9_]+?)(?<array>(?:\[\d*?\])+?)?$/;
function resolveStructs(abiParameters, structs, ancestors = /* @__PURE__ */ new Set()) {
  const components = [];
  const length = abiParameters.length;
  for (let i = 0; i < length; i++) {
    const abiParameter = abiParameters[i];
    const isTuple = isTupleRegex.test(abiParameter.type);
    if (isTuple)
      components.push(abiParameter);
    else {
      const match = execTyped(
        typeWithoutTupleRegex,
        abiParameter.type
      );
      if (!match?.type)
        throw new BaseError("Invalid ABI parameter.", {
          details: JSON.stringify(abiParameter, null, 2),
          metaMessages: ["ABI parameter type is invalid."]
        });
      const { array, type } = match;
      if (type in structs) {
        if (ancestors.has(type))
          throw new BaseError("Circular reference detected.", {
            metaMessages: [`Struct "${type}" is a circular reference.`]
          });
        components.push(__spreadProps(__spreadValues({}, abiParameter), {
          type: `tuple${array ?? ""}`,
          components: resolveStructs(
            structs[type] ?? [],
            structs,
            /* @__PURE__ */ new Set([...ancestors, type])
          )
        }));
      } else {
        if (isSolidityType(type))
          components.push(abiParameter);
        else
          throw new BaseError("Unknown type.", {
            metaMessages: [
              `Type "${type}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`
            ]
          });
      }
    }
  }
  return components;
}
function parseAbiParameter2(param) {
  let abiParameter;
  if (typeof param === "string")
    abiParameter = parseAbiParameter(param, {
      modifiers
    });
  else {
    const structs = parseStructs(param);
    const length = param.length;
    for (let i = 0; i < length; i++) {
      const signature = param[i];
      if (isStructSignature(signature))
        continue;
      abiParameter = parseAbiParameter(signature, { modifiers, structs });
      break;
    }
  }
  if (!abiParameter)
    throw new BaseError("Failed to parse ABI parameter.", {
      details: `parseAbiParameter(${JSON.stringify(param, null, 2)})`,
      docsPath: "/api/human.html#parseabiparameter-1"
    });
  return abiParameter;
}

// node_modules/web3-eth-abi/lib/esm/coders/utils.js
var WORD_SIZE = 32;
function alloc(size = 0) {
  var _a3;
  if (((_a3 = globalThis.Buffer) === null || _a3 === void 0 ? void 0 : _a3.alloc) !== void 0) {
    const buf = globalThis.Buffer.alloc(size);
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  }
  return new Uint8Array(size);
}
function convertExternalAbiParameter(abiParam) {
  var _a3, _b;
  return Object.assign(Object.assign({}, abiParam), { name: (_a3 = abiParam.name) !== null && _a3 !== void 0 ? _a3 : "", components: (_b = abiParam.components) === null || _b === void 0 ? void 0 : _b.map((c) => convertExternalAbiParameter(c)) });
}
function isAbiParameter(param) {
  return !isNullish2(param) && typeof param === "object" && !isNullish2(param.type) && typeof param.type === "string";
}
function toAbiParams(abi) {
  return abi.map((input) => {
    var _a3;
    if (isAbiParameter(input)) {
      return input;
    }
    if (typeof input === "string") {
      return convertExternalAbiParameter(parseAbiParameter2(input.replace(/tuple/, "")));
    }
    if (isSimplifiedStructFormat(input)) {
      const structName = Object.keys(input)[0];
      const structInfo = mapStructNameAndType(structName);
      structInfo.name = (_a3 = structInfo.name) !== null && _a3 !== void 0 ? _a3 : "";
      return Object.assign(Object.assign({}, structInfo), { components: mapStructToCoderFormat(input[structName]) });
    }
    throw new AbiError("Invalid abi");
  });
}
function extractArrayType(param) {
  const arrayParenthesisStart = param.type.lastIndexOf("[");
  const arrayParamType = param.type.substring(0, arrayParenthesisStart);
  const sizeString = param.type.substring(arrayParenthesisStart);
  let size = -1;
  if (sizeString !== "[]") {
    size = Number(sizeString.slice(1, -1));
    if (isNaN(size)) {
      throw new AbiError("Invalid fixed array size", { size: sizeString });
    }
  }
  return {
    param: { type: arrayParamType, name: "", components: param.components },
    size
  };
}
function isDynamic(param) {
  var _a3, _b;
  if (param.type === "string" || param.type === "bytes" || param.type.endsWith("[]"))
    return true;
  if (param.type === "tuple") {
    return (_b = (_a3 = param.components) === null || _a3 === void 0 ? void 0 : _a3.some(isDynamic)) !== null && _b !== void 0 ? _b : false;
  }
  if (param.type.endsWith("]")) {
    return isDynamic(extractArrayType(param).param);
  }
  return false;
}

// node_modules/web3-eth-abi/lib/esm/coders/base/address.js
var ADDRESS_BYTES_COUNT = 20;
var ADDRESS_OFFSET = WORD_SIZE - ADDRESS_BYTES_COUNT;
function encodeAddress(param, input) {
  if (typeof input !== "string") {
    throw new AbiError("address type expects string as input type", {
      value: input,
      name: param.name,
      type: param.type
    });
  }
  let address = input.toLowerCase();
  if (!address.startsWith("0x")) {
    address = `0x${address}`;
  }
  if (!isAddress(address)) {
    throw new AbiError("provided input is not valid address", {
      value: input,
      name: param.name,
      type: param.type
    });
  }
  const addressBytes = utils_exports.hexToUint8Array(address);
  const encoded = alloc(WORD_SIZE);
  encoded.set(addressBytes, ADDRESS_OFFSET);
  return {
    dynamic: false,
    encoded
  };
}
function decodeAddress(_param, bytes2) {
  const addressBytes = bytes2.subarray(ADDRESS_OFFSET, WORD_SIZE);
  if (addressBytes.length !== ADDRESS_BYTES_COUNT) {
    throw new AbiError("Invalid decoding input, not enough bytes to decode address", { bytes: bytes2 });
  }
  const result = utils_exports.uint8ArrayToHexString(addressBytes);
  return {
    result: toChecksumAddress(result),
    encoded: bytes2.subarray(WORD_SIZE),
    consumed: WORD_SIZE
  };
}

// node_modules/web3-eth-abi/lib/esm/coders/base/numbersLimits.js
var numberLimits = /* @__PURE__ */ new Map();
var base = BigInt(256);
for (let i = 8; i <= 256; i += 8) {
  numberLimits.set(`uint${i}`, {
    min: BigInt(0),
    max: base - BigInt(1)
  });
  numberLimits.set(`int${i}`, {
    min: -base / BigInt(2),
    max: base / BigInt(2) - BigInt(1)
  });
  base *= BigInt(256);
}
numberLimits.set(`int`, numberLimits.get("int256"));
numberLimits.set(`uint`, numberLimits.get("uint256"));

// node_modules/web3-eth-abi/lib/esm/coders/base/number.js
var mask = BigInt(1) << BigInt(256);
function bigIntToUint8Array2(value, byteLength = WORD_SIZE) {
  let hexValue;
  if (value < 0) {
    hexValue = (mask + value).toString(16);
  } else {
    hexValue = value.toString(16);
  }
  hexValue = padLeft(hexValue, byteLength * 2);
  return utils_exports.hexToUint8Array(hexValue);
}
function uint8ArrayToBigInt2(value, max) {
  const hexValue = utils_exports.uint8ArrayToHexString(value);
  const result = BigInt(hexValue);
  if (result <= max)
    return result;
  return result - mask;
}
function encodeNumber(param, input) {
  let value;
  try {
    value = toBigInt(input);
  } catch (e) {
    throw new AbiError("provided input is not number value", {
      type: param.type,
      value: input,
      name: param.name
    });
  }
  const limit = numberLimits.get(param.type);
  if (!limit) {
    throw new AbiError("provided abi contains invalid number datatype", { type: param.type });
  }
  if (value < limit.min) {
    throw new AbiError("provided input is less then minimum for given type", {
      type: param.type,
      value: input,
      name: param.name,
      minimum: limit.min.toString()
    });
  }
  if (value > limit.max) {
    throw new AbiError("provided input is greater then maximum for given type", {
      type: param.type,
      value: input,
      name: param.name,
      maximum: limit.max.toString()
    });
  }
  return {
    dynamic: false,
    encoded: bigIntToUint8Array2(value)
  };
}
function decodeNumber(param, bytes2) {
  if (bytes2.length < WORD_SIZE) {
    throw new AbiError("Not enough bytes left to decode", { param, bytesLeft: bytes2.length });
  }
  const boolBytes = bytes2.subarray(0, WORD_SIZE);
  const limit = numberLimits.get(param.type);
  if (!limit) {
    throw new AbiError("provided abi contains invalid number datatype", { type: param.type });
  }
  const numberResult = uint8ArrayToBigInt2(boolBytes, limit.max);
  if (numberResult < limit.min) {
    throw new AbiError("decoded value is less then minimum for given type", {
      type: param.type,
      value: numberResult,
      name: param.name,
      minimum: limit.min.toString()
    });
  }
  if (numberResult > limit.max) {
    throw new AbiError("decoded value is greater then maximum for given type", {
      type: param.type,
      value: numberResult,
      name: param.name,
      maximum: limit.max.toString()
    });
  }
  return {
    result: numberResult,
    encoded: bytes2.subarray(WORD_SIZE),
    consumed: WORD_SIZE
  };
}

// node_modules/web3-eth-abi/lib/esm/coders/base/bool.js
function encodeBoolean(param, input) {
  let value;
  try {
    value = toBool(input);
  } catch (e) {
    if (e instanceof InvalidBooleanError) {
      throw new AbiError("provided input is not valid boolean value", {
        type: param.type,
        value: input,
        name: param.name
      });
    }
  }
  return encodeNumber({ type: "uint8", name: "" }, Number(value));
}
function decodeBool(_param, bytes2) {
  const numberResult = decodeNumber({ type: "uint8", name: "" }, bytes2);
  if (numberResult.result > 1 || numberResult.result < 0) {
    throw new AbiError("Invalid boolean value encoded", {
      boolBytes: bytes2.subarray(0, WORD_SIZE),
      numberResult
    });
  }
  return {
    result: numberResult.result === BigInt(1),
    encoded: numberResult.encoded,
    consumed: WORD_SIZE
  };
}

// node_modules/web3-eth-abi/lib/esm/coders/base/bytes.js
var MAX_STATIC_BYTES_COUNT = 32;
function encodeBytes(param, input) {
  if (typeof input === "string" && input.length % 2 !== 0) {
    input += "0";
  }
  if (!isBytes(input)) {
    throw new AbiError("provided input is not valid bytes value", {
      type: param.type,
      value: input,
      name: param.name
    });
  }
  const bytes2 = bytesToUint8Array(input);
  const [, size] = param.type.split("bytes");
  if (size) {
    if (Number(size) > MAX_STATIC_BYTES_COUNT || Number(size) < 1) {
      throw new AbiError("invalid bytes type. Static byte type can have between 1 and 32 bytes", {
        type: param.type
      });
    }
    if (Number(size) < bytes2.length) {
      throw new AbiError("provided input size is different than type size", {
        type: param.type,
        value: input,
        name: param.name
      });
    }
    const encoded2 = alloc(WORD_SIZE);
    encoded2.set(bytes2);
    return {
      dynamic: false,
      encoded: encoded2
    };
  }
  const partsLength = Math.ceil(bytes2.length / WORD_SIZE);
  const encoded = alloc(WORD_SIZE + partsLength * WORD_SIZE);
  encoded.set(encodeNumber({ type: "uint32", name: "" }, bytes2.length).encoded);
  encoded.set(bytes2, WORD_SIZE);
  return {
    dynamic: true,
    encoded
  };
}
function decodeBytes(param, bytes2) {
  const [, sizeString] = param.type.split("bytes");
  let size = Number(sizeString);
  let remainingBytes = bytes2;
  let partsCount = 1;
  let consumed = 0;
  if (!size) {
    const result = decodeNumber({ type: "uint32", name: "" }, remainingBytes);
    size = Number(result.result);
    consumed += result.consumed;
    remainingBytes = result.encoded;
    partsCount = Math.ceil(size / WORD_SIZE);
  }
  if (size > bytes2.length) {
    throw new AbiError("there is not enough data to decode", {
      type: param.type,
      encoded: bytes2,
      size
    });
  }
  return {
    result: bytesToHex(remainingBytes.subarray(0, size)),
    encoded: remainingBytes.subarray(partsCount * WORD_SIZE),
    consumed: consumed + partsCount * WORD_SIZE
  };
}

// node_modules/web3-eth-abi/lib/esm/coders/base/string.js
function encodeString(_param, input) {
  if (typeof input !== "string") {
    throw new AbiError("invalid input, should be string", { input });
  }
  const bytes2 = utf8ToBytes(input);
  return encodeBytes({ type: "bytes", name: "" }, bytes2);
}
function decodeString(_param, bytes2) {
  const r = decodeBytes({ type: "bytes", name: "" }, bytes2);
  return {
    result: hexToUtf8(r.result),
    encoded: r.encoded,
    consumed: r.consumed
  };
}

// node_modules/web3-eth-abi/lib/esm/coders/base/utils.js
function encodeDynamicParams(encodedParams) {
  let staticSize = 0;
  let dynamicSize = 0;
  const staticParams = [];
  const dynamicParams = [];
  for (const encodedParam of encodedParams) {
    if (encodedParam.dynamic) {
      staticSize += WORD_SIZE;
    } else {
      staticSize += encodedParam.encoded.length;
    }
  }
  for (const encodedParam of encodedParams) {
    if (encodedParam.dynamic) {
      staticParams.push(encodeNumber({ type: "uint256", name: "" }, staticSize + dynamicSize));
      dynamicParams.push(encodedParam);
      dynamicSize += encodedParam.encoded.length;
    } else {
      staticParams.push(encodedParam);
    }
  }
  return uint8ArrayConcat(...staticParams.map((p) => p.encoded), ...dynamicParams.map((p) => p.encoded));
}

// node_modules/web3-eth-abi/lib/esm/coders/base/array.js
function encodeArray(param, values) {
  if (!Array.isArray(values)) {
    throw new AbiError("Expected value to be array", { abi: param, values });
  }
  const { size, param: arrayItemParam } = extractArrayType(param);
  const encodedParams = values.map((v) => encodeParamFromAbiParameter(arrayItemParam, v));
  const dynamic = size === -1;
  const dynamicItems = encodedParams.length > 0 && encodedParams[0].dynamic;
  if (!dynamic && values.length !== size) {
    throw new AbiError("Given arguments count doesn't match array length", {
      arrayLength: size,
      argumentsLength: values.length
    });
  }
  if (dynamic || dynamicItems) {
    const encodingResult = encodeDynamicParams(encodedParams);
    if (dynamic) {
      const encodedLength = encodeNumber({ type: "uint256", name: "" }, encodedParams.length).encoded;
      return {
        dynamic: true,
        encoded: encodedParams.length > 0 ? uint8ArrayConcat(encodedLength, encodingResult) : encodedLength
      };
    }
    return {
      dynamic: true,
      encoded: encodingResult
    };
  }
  return {
    dynamic: false,
    encoded: uint8ArrayConcat(...encodedParams.map((p) => p.encoded))
  };
}
function decodeArray(param, bytes2) {
  let { size, param: arrayItemParam } = extractArrayType(param);
  const dynamic = size === -1;
  let consumed = 0;
  const result = [];
  let remaining = bytes2;
  if (dynamic) {
    const lengthResult = decodeNumber({ type: "uint32", name: "" }, bytes2);
    size = Number(lengthResult.result);
    consumed = lengthResult.consumed;
    remaining = lengthResult.encoded;
  }
  const hasDynamicChild = isDynamic(arrayItemParam);
  if (hasDynamicChild) {
    for (let i = 0; i < size; i += 1) {
      const offsetResult = decodeNumber({ type: "uint32", name: "" }, remaining.subarray(i * WORD_SIZE));
      consumed += offsetResult.consumed;
      const decodedChildResult = decodeParamFromAbiParameter(arrayItemParam, remaining.subarray(Number(offsetResult.result)));
      consumed += decodedChildResult.consumed;
      result.push(decodedChildResult.result);
    }
    return {
      result,
      encoded: remaining.subarray(consumed),
      consumed
    };
  }
  for (let i = 0; i < size; i += 1) {
    const decodedChildResult = decodeParamFromAbiParameter(arrayItemParam, bytes2.subarray(consumed));
    consumed += decodedChildResult.consumed;
    result.push(decodedChildResult.result);
  }
  return {
    result,
    encoded: bytes2.subarray(consumed),
    consumed
  };
}

// node_modules/web3-eth-abi/lib/esm/coders/base/index.js
function encodeParamFromAbiParameter(param, value) {
  if (param.type === "string") {
    return encodeString(param, value);
  }
  if (param.type === "bool") {
    return encodeBoolean(param, value);
  }
  if (param.type === "address") {
    return encodeAddress(param, value);
  }
  if (param.type === "tuple") {
    return encodeTuple(param, value);
  }
  if (param.type.endsWith("]")) {
    return encodeArray(param, value);
  }
  if (param.type.startsWith("bytes")) {
    return encodeBytes(param, value);
  }
  if (param.type.startsWith("uint") || param.type.startsWith("int")) {
    return encodeNumber(param, value);
  }
  throw new AbiError("Unsupported", {
    param,
    value
  });
}
function decodeParamFromAbiParameter(param, bytes2) {
  if (param.type === "string") {
    return decodeString(param, bytes2);
  }
  if (param.type === "bool") {
    return decodeBool(param, bytes2);
  }
  if (param.type === "address") {
    return decodeAddress(param, bytes2);
  }
  if (param.type === "tuple") {
    return decodeTuple(param, bytes2);
  }
  if (param.type.endsWith("]")) {
    return decodeArray(param, bytes2);
  }
  if (param.type.startsWith("bytes")) {
    return decodeBytes(param, bytes2);
  }
  if (param.type.startsWith("uint") || param.type.startsWith("int")) {
    return decodeNumber(param, bytes2);
  }
  throw new AbiError("Unsupported", {
    param,
    bytes: bytes2
  });
}

// node_modules/web3-eth-abi/lib/esm/coders/base/tuple.js
function encodeTuple(param, input) {
  var _a3, _b, _c;
  let dynamic = false;
  if (!Array.isArray(input) && typeof input !== "object") {
    throw new AbiError("param must be either Array or Object", {
      param,
      input
    });
  }
  const narrowedInput = input;
  const encoded = [];
  for (let i = 0; i < ((_b = (_a3 = param.components) === null || _a3 === void 0 ? void 0 : _a3.length) !== null && _b !== void 0 ? _b : 0); i += 1) {
    const paramComponent = param.components[i];
    let result;
    if (Array.isArray(narrowedInput)) {
      if (i >= narrowedInput.length) {
        throw new AbiError("input param length missmatch", {
          param,
          input
        });
      }
      result = encodeParamFromAbiParameter(paramComponent, narrowedInput[i]);
    } else {
      const paramInput = narrowedInput[(_c = paramComponent.name) !== null && _c !== void 0 ? _c : ""];
      if (paramInput === void 0 || paramInput === null) {
        throw new AbiError("missing input defined in abi", {
          param,
          input,
          paramName: paramComponent.name
        });
      }
      result = encodeParamFromAbiParameter(paramComponent, paramInput);
    }
    if (result.dynamic) {
      dynamic = true;
    }
    encoded.push(result);
  }
  if (dynamic) {
    return {
      dynamic: true,
      encoded: encodeDynamicParams(encoded)
    };
  }
  return {
    dynamic: false,
    encoded: uint8ArrayConcat(...encoded.map((e) => e.encoded))
  };
}
function decodeTuple(param, bytes2) {
  const result = {
    __length__: 0
  };
  let consumed = 0;
  if (!param.components) {
    return {
      result,
      encoded: bytes2,
      consumed
    };
  }
  let dynamicConsumed = 0;
  for (const [index, childParam] of param.components.entries()) {
    let decodedResult;
    if (isDynamic(childParam)) {
      const offsetResult = decodeNumber({ type: "uint32", name: "" }, bytes2.subarray(consumed));
      decodedResult = decodeParamFromAbiParameter(childParam, bytes2.subarray(Number(offsetResult.result)));
      consumed += offsetResult.consumed;
      dynamicConsumed += decodedResult.consumed;
    } else {
      decodedResult = decodeParamFromAbiParameter(childParam, bytes2.subarray(consumed));
      consumed += decodedResult.consumed;
    }
    result.__length__ += 1;
    result[index] = decodedResult.result;
    if (childParam.name && childParam.name !== "") {
      result[childParam.name] = decodedResult.result;
    }
  }
  return {
    encoded: bytes2.subarray(consumed + dynamicConsumed),
    result,
    consumed: consumed + dynamicConsumed
  };
}

// node_modules/web3-eth-abi/lib/esm/coders/decode.js
function decodeParameters(abis, bytes2, _loose) {
  const abiParams = toAbiParams(abis);
  const bytesArray = utils_exports.hexToUint8Array(bytes2);
  return decodeTuple({ type: "tuple", name: "", components: abiParams }, bytesArray).result;
}

// node_modules/web3-eth-abi/lib/esm/coders/encode.js
function inferParamsAbi(params) {
  const abi = [];
  params.forEach((param) => {
    if (Array.isArray(param)) {
      const inferredParams = inferParamsAbi(param);
      abi.push({
        type: "tuple",
        components: inferredParams,
        name: ""
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      });
    } else {
      abi.push({ type: toHex(param, true) });
    }
  });
  return abi;
}
function encodeParameters(abi, params) {
  if ((abi === null || abi === void 0 ? void 0 : abi.length) !== params.length) {
    throw new AbiError("Invalid number of values received for given ABI", {
      expected: abi === null || abi === void 0 ? void 0 : abi.length,
      received: params.length
    });
  }
  const abiParams = toAbiParams(abi);
  return utils_exports.uint8ArrayToHexString(encodeTuple({ type: "tuple", name: "", components: abiParams }, params).encoded);
}
function inferTypesAndEncodeParameters(params) {
  try {
    const abiParams = inferParamsAbi(params);
    return utils_exports.uint8ArrayToHexString(encodeTuple({ type: "tuple", name: "", components: abiParams }, params).encoded);
  } catch (e) {
    throw new AbiError("Could not infer types from given params", {
      params
    });
  }
}

// node_modules/web3-eth-abi/lib/esm/api/parameters_api.js
var encodeParameter = (abi, param) => encodeParameters([abi], [param]);
var decodeParametersWith = (abis, bytes2, loose) => {
  try {
    if (abis.length > 0 && (!bytes2 || bytes2 === "0x" || bytes2 === "0X")) {
      throw new AbiError("Returned values aren't valid, did it run Out of Gas? You might also see this error if you are not using the correct ABI for the contract you are retrieving data from, requesting data from a block number that does not exist, or querying a node which is not fully synced.");
    }
    return decodeParameters(abis, `0x${bytes2.replace(/0x/i, "")}`, loose);
  } catch (err) {
    throw new AbiError(`Parameter decoding error: ${err.message}`, {
      internalErr: err
    });
  }
};
var decodeParameters2 = (abi, bytes2) => decodeParametersWith(abi, bytes2, false);
var decodeParameter = (abi, bytes2) => decodeParameters2([abi], bytes2)["0"];

// node_modules/web3-eth-abi/lib/esm/api/functions_api.js
var encodeFunctionSignature = (functionName) => {
  if (typeof functionName !== "string" && !isAbiFunctionFragment(functionName)) {
    throw new AbiError("Invalid parameter value in encodeFunctionSignature");
  }
  let name2;
  if (functionName && (typeof functionName === "function" || typeof functionName === "object")) {
    name2 = jsonInterfaceMethodToString(functionName);
  } else {
    name2 = functionName;
  }
  return sha3Raw(name2).slice(0, 10);
};
var encodeFunctionCall = (jsonInterface, params) => {
  var _a3;
  if (!isAbiFunctionFragment(jsonInterface)) {
    throw new AbiError("Invalid parameter value in encodeFunctionCall");
  }
  return `${encodeFunctionSignature(jsonInterface)}${encodeParameters((_a3 = jsonInterface.inputs) !== null && _a3 !== void 0 ? _a3 : [], params !== null && params !== void 0 ? params : []).replace("0x", "")}`;
};
var decodeFunctionCall = (functionsAbi, data, methodSignatureProvided = true) => {
  const value = methodSignatureProvided && data && data.length >= 10 && data.startsWith("0x") ? data.slice(10) : data;
  if (!functionsAbi.inputs) {
    throw new Web3ContractError("No inputs found in the ABI");
  }
  const result = decodeParameters2([...functionsAbi.inputs], value);
  return Object.assign(Object.assign({}, result), { __method__: jsonInterfaceMethodToString(functionsAbi) });
};
var decodeFunctionReturn = (functionsAbi, returnValues) => {
  if (functionsAbi.type === "constructor") {
    return returnValues;
  }
  if (!returnValues) {
    return null;
  }
  const value = returnValues.length >= 2 ? returnValues.slice(2) : returnValues;
  if (!functionsAbi.outputs) {
    return null;
  }
  const result = decodeParameters2([...functionsAbi.outputs], value);
  if (result.__length__ === 1) {
    return result[0];
  }
  return result;
};

// node_modules/web3-eth-abi/lib/esm/api/logs_api.js
var STATIC_TYPES = ["bool", "string", "int", "uint", "address", "fixed", "ufixed"];
var _decodeParameter = (inputType, clonedTopic) => inputType === "string" ? clonedTopic : decodeParameter(inputType, clonedTopic);
var decodeLog = (inputs, data, topics) => {
  const clonedTopics = Array.isArray(topics) ? topics : [topics];
  const indexedInputs = {};
  const nonIndexedInputs = {};
  for (const [i, input] of inputs.entries()) {
    if (input.indexed) {
      indexedInputs[i] = input;
    } else {
      nonIndexedInputs[i] = input;
    }
  }
  const decodedNonIndexedInputs = data ? decodeParametersWith(Object.values(nonIndexedInputs), data, true) : { __length__: 0 };
  const offset = clonedTopics.length - Object.keys(indexedInputs).length;
  const decodedIndexedInputs = Object.values(indexedInputs).map((input, index) => STATIC_TYPES.some((s) => input.type.startsWith(s)) ? _decodeParameter(input.type, clonedTopics[index + offset]) : clonedTopics[index + offset]);
  const returnValues = { __length__: 0 };
  let indexedCounter = 0;
  let nonIndexedCounter = 0;
  for (const [i, res] of inputs.entries()) {
    returnValues[i] = res.type === "string" ? "" : void 0;
    if (indexedInputs[i]) {
      returnValues[i] = decodedIndexedInputs[indexedCounter];
      indexedCounter += 1;
    }
    if (nonIndexedInputs[i]) {
      returnValues[i] = decodedNonIndexedInputs[String(nonIndexedCounter)];
      nonIndexedCounter += 1;
    }
    if (res.name) {
      returnValues[res.name] = returnValues[i];
    }
    returnValues.__length__ += 1;
  }
  return returnValues;
};

// node_modules/web3-eth-abi/lib/esm/decode_contract_error_data.js
var decodeContractErrorData = (errorsAbi, error) => {
  if (error === null || error === void 0 ? void 0 : error.data) {
    let errorName;
    let errorSignature;
    let errorArgs;
    try {
      const errorSha = error.data.slice(0, 10);
      const errorAbi = errorsAbi.find((abi) => encodeErrorSignature(abi).startsWith(errorSha));
      if (errorAbi === null || errorAbi === void 0 ? void 0 : errorAbi.inputs) {
        errorName = errorAbi.name;
        errorSignature = jsonInterfaceMethodToString(errorAbi);
        errorArgs = decodeParameters2([...errorAbi.inputs], error.data.substring(10));
      } else if (error.data.startsWith("0x08c379a0")) {
        errorName = "Error";
        errorSignature = "Error(string)";
        errorArgs = decodeParameters2([
          {
            name: "message",
            type: "string"
          }
        ], error.data.substring(10));
      } else if (error.data.startsWith("0x4e487b71")) {
        errorName = "Panic";
        errorSignature = "Panic(uint256)";
        errorArgs = decodeParameters2([
          {
            name: "code",
            type: "uint256"
          }
        ], error.data.substring(10));
      } else {
        console.error("No matching error abi found for error data", error.data);
      }
    } catch (err) {
      console.error(err);
    }
    if (errorName) {
      error.setDecodedProperties(errorName, errorSignature, errorArgs);
    }
  }
};

// node_modules/web3-eth-abi/lib/esm/eip_712.js
var TYPE_REGEX = /^\w+/;
var ARRAY_REGEX = /^(.*)\[([0-9]*?)]$/;
var getDependencies = (typedData, type, dependencies = []) => {
  const match = type.match(TYPE_REGEX);
  const actualType = match[0];
  if (dependencies.includes(actualType)) {
    return dependencies;
  }
  if (!typedData.types[actualType]) {
    return dependencies;
  }
  return [
    actualType,
    ...typedData.types[actualType].reduce((previous, _type) => [
      ...previous,
      ...getDependencies(typedData, _type.type, previous).filter((dependency) => !previous.includes(dependency))
    ], [])
  ];
};
var encodeType = (typedData, type) => {
  const [primary, ...dependencies] = getDependencies(typedData, type);
  const types = [primary, ...dependencies.sort()];
  return types.map((dependency) => (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `${dependency}(${typedData.types[dependency].map((_type) => `${_type.type} ${_type.name}`)})`
  )).join("");
};
var getTypeHash = (typedData, type) => keccak256Wrapper(encodeType(typedData, type));
var getStructHash = (typedData, type, data) => keccak256Wrapper(encodeData(typedData, type, data));
var getMessage = (typedData, hash2) => {
  const EIP_191_PREFIX = "1901";
  const message = `0x${EIP_191_PREFIX}${getStructHash(typedData, "EIP712Domain", typedData.domain).substring(2)}${getStructHash(typedData, typedData.primaryType, typedData.message).substring(2)}`;
  if (hash2) {
    return keccak256Wrapper(message);
  }
  return message;
};
var encodeValue = (typedData, type, data) => {
  const match = type.match(ARRAY_REGEX);
  if (match) {
    const arrayType = match[1];
    const length = Number(match[2]) || void 0;
    if (!Array.isArray(data)) {
      throw new AbiError("Cannot encode data: value is not of array type", {
        data
      });
    }
    if (length && data.length !== length) {
      throw new AbiError(`Cannot encode data: expected length of ${length}, but got ${data.length}`, {
        data
      });
    }
    const encodedData = data.map((item) => encodeValue(typedData, arrayType, item));
    const types = encodedData.map((item) => item[0]);
    const values = encodedData.map((item) => item[1]);
    return ["bytes32", keccak256Wrapper(encodeParameters(types, values))];
  }
  if (typedData.types[type]) {
    return ["bytes32", getStructHash(typedData, type, data)];
  }
  if (type === "string") {
    return ["bytes32", keccak256Wrapper(data)];
  }
  if (type === "bytes") {
    return ["bytes32", keccak256Wrapper(data)];
  }
  return [type, data];
};
var encodeData = (typedData, type, data) => {
  const [types, values] = typedData.types[type].reduce(([_types, _values], field) => {
    if (isNullish2(data[field.name]) || isNullish2(field.type)) {
      throw new AbiError(`Cannot encode data: missing data for '${field.name}'`, {
        data,
        field
      });
    }
    const value = data[field.name];
    const [_type, encodedValue] = encodeValue(typedData, field.type, value);
    return [
      [..._types, _type],
      [..._values, encodedValue]
    ];
  }, [["bytes32"], [getTypeHash(typedData, type)]]);
  return encodeParameters(types, values);
};

// node_modules/web3-eth/lib/esm/utils/get_revert_reason.js
var __awaiter22 = function(thisArg, _arguments, P, generator) {
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
var parseTransactionError = (error, contractAbi) => {
  var _a3, _b, _c, _d, _e;
  if (error instanceof ContractExecutionError && error.cause instanceof Eip838ExecutionError) {
    if (contractAbi !== void 0) {
      const errorsAbi = contractAbi.filter((abi) => isAbiErrorFragment(abi));
      decodeContractErrorData(errorsAbi, error.cause);
      return {
        reason: error.cause.message,
        signature: (_a3 = error.cause.data) === null || _a3 === void 0 ? void 0 : _a3.slice(0, 10),
        data: (_b = error.cause.data) === null || _b === void 0 ? void 0 : _b.substring(10),
        customErrorName: error.cause.errorName,
        customErrorDecodedSignature: error.cause.errorSignature,
        customErrorArguments: error.cause.errorArgs
      };
    }
    return {
      reason: error.cause.message,
      signature: (_c = error.cause.data) === null || _c === void 0 ? void 0 : _c.slice(0, 10),
      data: (_d = error.cause.data) === null || _d === void 0 ? void 0 : _d.substring(10)
    };
  }
  if (error instanceof InvalidResponseError && !Array.isArray((_e = error.cause) === null || _e === void 0 ? void 0 : _e.errors) && error.cause !== void 0) {
    return error.cause.message;
  }
  throw error;
};
function getRevertReason(web3Context_1, transaction_1, contractAbi_1) {
  return __awaiter22(this, arguments, void 0, function* (web3Context, transaction, contractAbi, returnFormat = web3Context.defaultReturnFormat) {
    try {
      yield call2(web3Context, transaction, web3Context.defaultBlock, returnFormat);
      return void 0;
    } catch (error) {
      return parseTransactionError(error, contractAbi);
    }
  });
}

// node_modules/web3-eth/lib/esm/utils/get_transaction_error.js
var __awaiter23 = function(thisArg, _arguments, P, generator) {
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
function getTransactionError(web3Context, transactionFormatted, transactionReceiptFormatted, receivedError, contractAbi, knownReason) {
  return __awaiter23(this, void 0, void 0, function* () {
    let _reason = knownReason;
    if (_reason === void 0) {
      if (receivedError !== void 0) {
        _reason = parseTransactionError(receivedError);
      } else if (web3Context.handleRevert && transactionFormatted !== void 0) {
        _reason = yield getRevertReason(web3Context, transactionFormatted, contractAbi);
      }
    }
    let error;
    if (_reason === void 0) {
      error = new TransactionRevertedWithoutReasonError(transactionReceiptFormatted);
    } else if (typeof _reason === "string") {
      error = new TransactionRevertInstructionError(_reason, void 0, transactionReceiptFormatted);
    } else if (_reason.customErrorName !== void 0 && _reason.customErrorDecodedSignature !== void 0 && _reason.customErrorArguments !== void 0) {
      const reasonWithCustomError = _reason;
      error = new TransactionRevertWithCustomError(reasonWithCustomError.reason, reasonWithCustomError.customErrorName, reasonWithCustomError.customErrorDecodedSignature, reasonWithCustomError.customErrorArguments, reasonWithCustomError.signature, transactionReceiptFormatted, reasonWithCustomError.data);
    } else {
      error = new TransactionRevertInstructionError(_reason.reason, _reason.signature, transactionReceiptFormatted, _reason.data);
    }
    return error;
  });
}

// node_modules/web3-eth/lib/esm/utils/decoding.js
var decodeEventABI = (event, data, jsonInterface, returnFormat = DEFAULT_RETURN_FORMAT) => {
  var _a3, _b, _c, _d, _e, _f;
  let modifiedEvent = Object.assign({}, event);
  const result = format(logSchema, data, returnFormat);
  if ([ALL_EVENTS, "allEvents"].includes(modifiedEvent.name)) {
    const matchedEvent = jsonInterface.find((j) => j.signature === data.topics[0]);
    if (matchedEvent) {
      modifiedEvent = matchedEvent;
    } else {
      modifiedEvent = { anonymous: true };
    }
  }
  modifiedEvent.inputs = (_b = (_a3 = modifiedEvent.inputs) !== null && _a3 !== void 0 ? _a3 : event.inputs) !== null && _b !== void 0 ? _b : [];
  if (!modifiedEvent.anonymous) {
    let indexedInputs = 0;
    ((_c = modifiedEvent.inputs) !== null && _c !== void 0 ? _c : []).forEach((input) => {
      if (input.indexed) {
        indexedInputs += 1;
      }
    });
    if (indexedInputs > 0 && (data === null || data === void 0 ? void 0 : data.topics) && (data === null || data === void 0 ? void 0 : data.topics.length) !== indexedInputs + 1) {
      modifiedEvent = Object.assign(Object.assign({}, modifiedEvent), { anonymous: true, inputs: [] });
    }
  }
  const argTopics = modifiedEvent.anonymous ? data.topics : ((_d = data.topics) !== null && _d !== void 0 ? _d : []).slice(1);
  return Object.assign(Object.assign({}, result), { returnValues: decodeLog([...(_e = modifiedEvent.inputs) !== null && _e !== void 0 ? _e : []], data.data, argTopics), event: modifiedEvent.name, signature: !modifiedEvent.anonymous && ((_f = data.topics) === null || _f === void 0 ? void 0 : _f.length) > 0 && data.topics[0] ? data.topics[0] : void 0, raw: {
    data: data.data,
    topics: data.topics
  } });
};

// node_modules/web3-eth/lib/esm/utils/send_tx_helper.js
var __awaiter24 = function(thisArg, _arguments, P, generator) {
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
var SendTxHelper = class {
  constructor({ options, web3Context, promiEvent, returnFormat }) {
    this.options = {
      checkRevertBeforeSending: true
    };
    this.options = options;
    this.web3Context = web3Context;
    this.promiEvent = promiEvent;
    this.returnFormat = returnFormat;
  }
  getReceiptWithEvents(data) {
    var _a3, _b;
    const result = Object.assign({}, data !== null && data !== void 0 ? data : {});
    if (((_a3 = this.options) === null || _a3 === void 0 ? void 0 : _a3.contractAbi) && result.logs && result.logs.length > 0) {
      result.events = {};
      for (const log of result.logs) {
        const event = decodeEventABI(ALL_EVENTS_ABI, log, (_b = this.options) === null || _b === void 0 ? void 0 : _b.contractAbi, this.returnFormat);
        if (event.event) {
          result.events[event.event] = event;
        }
      }
    }
    return result;
  }
  checkRevertBeforeSending(tx) {
    return __awaiter24(this, void 0, void 0, function* () {
      if (this.options.checkRevertBeforeSending !== false) {
        let formatTx = tx;
        if (isNullish(tx.data) && isNullish(tx.input) && isNullish(tx.gas)) {
          formatTx = Object.assign(Object.assign({}, tx), { gas: 21e3 });
        }
        const reason = yield getRevertReason(this.web3Context, formatTx, this.options.contractAbi);
        if (reason !== void 0) {
          throw yield getTransactionError(this.web3Context, tx, void 0, void 0, this.options.contractAbi, reason);
        }
      }
    });
  }
  emitSending(tx) {
    if (this.promiEvent.listenerCount("sending") > 0) {
      this.promiEvent.emit("sending", tx);
    }
  }
  populateGasPrice(_a3) {
    return __awaiter24(this, arguments, void 0, function* ({ transactionFormatted, transaction }) {
      var _b;
      let result = transactionFormatted;
      if (!this.web3Context.config.ignoreGasPricing && !((_b = this.options) === null || _b === void 0 ? void 0 : _b.ignoreGasPricing) && isNullish(transactionFormatted.gasPrice) && (isNullish(transaction.maxPriorityFeePerGas) || isNullish(transaction.maxFeePerGas))) {
        result = Object.assign(Object.assign({}, transactionFormatted), yield getTransactionGasPricing(transactionFormatted, this.web3Context, ETH_DATA_FORMAT));
      }
      return result;
    });
  }
  signAndSend(_a3) {
    return __awaiter24(this, arguments, void 0, function* ({ wallet, tx }) {
      if (wallet) {
        const signedTransaction = yield wallet.signTransaction(tx);
        return trySendTransaction(this.web3Context, () => __awaiter24(this, void 0, void 0, function* () {
          return eth_rpc_methods_exports.sendRawTransaction(this.web3Context.requestManager, signedTransaction.rawTransaction);
        }), signedTransaction.transactionHash);
      }
      return trySendTransaction(this.web3Context, () => __awaiter24(this, void 0, void 0, function* () {
        return eth_rpc_methods_exports.sendTransaction(this.web3Context.requestManager, tx);
      }));
    });
  }
  emitSent(tx) {
    if (this.promiEvent.listenerCount("sent") > 0) {
      this.promiEvent.emit("sent", tx);
    }
  }
  emitTransactionHash(hash2) {
    if (this.promiEvent.listenerCount("transactionHash") > 0) {
      this.promiEvent.emit("transactionHash", hash2);
    }
  }
  emitReceipt(receipt) {
    if (this.promiEvent.listenerCount("receipt") > 0) {
      this.promiEvent.emit(
        "receipt",
        // @ts-expect-error unknown type fix
        receipt
      );
    }
  }
  handleError(_a3) {
    return __awaiter24(this, arguments, void 0, function* ({ error, tx }) {
      var _b;
      let _error = error;
      if (_error instanceof ContractExecutionError && this.web3Context.handleRevert) {
        _error = yield getTransactionError(this.web3Context, tx, void 0, void 0, (_b = this.options) === null || _b === void 0 ? void 0 : _b.contractAbi);
      }
      if ((_error instanceof InvalidResponseError || _error instanceof ContractExecutionError || _error instanceof TransactionRevertWithCustomError || _error instanceof TransactionRevertedWithoutReasonError || _error instanceof TransactionRevertInstructionError || _error instanceof TransactionPollingTimeoutError) && this.promiEvent.listenerCount("error") > 0) {
        this.promiEvent.emit("error", _error);
      }
      return _error;
    });
  }
  emitConfirmation({ receipt, transactionHash, customTransactionReceiptSchema }) {
    if (this.promiEvent.listenerCount("confirmation") > 0) {
      watchTransactionForConfirmations(this.web3Context, this.promiEvent, receipt, transactionHash, this.returnFormat, customTransactionReceiptSchema);
    }
  }
  handleResolve(_a3) {
    return __awaiter24(this, arguments, void 0, function* ({ receipt, tx }) {
      var _b, _c, _d;
      if ((_b = this.options) === null || _b === void 0 ? void 0 : _b.transactionResolver) {
        return (_c = this.options) === null || _c === void 0 ? void 0 : _c.transactionResolver(receipt);
      }
      if (receipt.status === BigInt(0)) {
        const error = yield getTransactionError(
          this.web3Context,
          tx,
          // @ts-expect-error unknown type fix
          receipt,
          void 0,
          (_d = this.options) === null || _d === void 0 ? void 0 : _d.contractAbi
        );
        if (this.promiEvent.listenerCount("error") > 0) {
          this.promiEvent.emit("error", error);
        }
        throw error;
      } else {
        return receipt;
      }
    });
  }
};

// node_modules/web3-eth/lib/esm/rpc_method_wrappers.js
var __awaiter25 = function(thisArg, _arguments, P, generator) {
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
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var getProtocolVersion2 = (web3Context) => __awaiter25(void 0, void 0, void 0, function* () {
  return eth_rpc_methods_exports.getProtocolVersion(web3Context.requestManager);
});
var isSyncing = (web3Context) => __awaiter25(void 0, void 0, void 0, function* () {
  return eth_rpc_methods_exports.getSyncing(web3Context.requestManager);
});
var getCoinbase2 = (web3Context) => __awaiter25(void 0, void 0, void 0, function* () {
  return eth_rpc_methods_exports.getCoinbase(web3Context.requestManager);
});
var isMining = (web3Context) => __awaiter25(void 0, void 0, void 0, function* () {
  return eth_rpc_methods_exports.getMining(web3Context.requestManager);
});
function getHashRate2(web3Context, returnFormat) {
  return __awaiter25(this, void 0, void 0, function* () {
    const response = yield eth_rpc_methods_exports.getHashRate(web3Context.requestManager);
    return format({ format: "uint" }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
  });
}
function getGasPrice2(web3Context, returnFormat) {
  return __awaiter25(this, void 0, void 0, function* () {
    const response = yield eth_rpc_methods_exports.getGasPrice(web3Context.requestManager);
    return format({ format: "uint" }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
  });
}
function getMaxPriorityFeePerGas2(web3Context, returnFormat) {
  return __awaiter25(this, void 0, void 0, function* () {
    const response = yield eth_rpc_methods_exports.getMaxPriorityFeePerGas(web3Context.requestManager);
    return format({ format: "uint" }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
  });
}
function getBlockNumber2(web3Context, returnFormat) {
  return __awaiter25(this, void 0, void 0, function* () {
    const response = yield eth_rpc_methods_exports.getBlockNumber(web3Context.requestManager);
    return format({ format: "uint" }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
  });
}
function getBalance2(web3Context_1, address_1) {
  return __awaiter25(this, arguments, void 0, function* (web3Context, address, blockNumber = web3Context.defaultBlock, returnFormat) {
    const blockNumberFormatted = isBlockTag(blockNumber) ? blockNumber : format({ format: "uint" }, blockNumber, ETH_DATA_FORMAT);
    const response = yield eth_rpc_methods_exports.getBalance(web3Context.requestManager, address, blockNumberFormatted);
    return format({ format: "uint" }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
  });
}
function getStorageAt2(web3Context_1, address_1, storageSlot_1) {
  return __awaiter25(this, arguments, void 0, function* (web3Context, address, storageSlot, blockNumber = web3Context.defaultBlock, returnFormat) {
    const storageSlotFormatted = format({ format: "uint" }, storageSlot, ETH_DATA_FORMAT);
    const blockNumberFormatted = isBlockTag(blockNumber) ? blockNumber : format({ format: "uint" }, blockNumber, ETH_DATA_FORMAT);
    const response = yield eth_rpc_methods_exports.getStorageAt(web3Context.requestManager, address, storageSlotFormatted, blockNumberFormatted);
    return format({ format: "bytes" }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
  });
}
function getCode2(web3Context_1, address_1) {
  return __awaiter25(this, arguments, void 0, function* (web3Context, address, blockNumber = web3Context.defaultBlock, returnFormat) {
    const blockNumberFormatted = isBlockTag(blockNumber) ? blockNumber : format({ format: "uint" }, blockNumber, ETH_DATA_FORMAT);
    const response = yield eth_rpc_methods_exports.getCode(web3Context.requestManager, address, blockNumberFormatted);
    return format({ format: "bytes" }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
  });
}
function getBlock(web3Context_1) {
  return __awaiter25(this, arguments, void 0, function* (web3Context, block = web3Context.defaultBlock, hydrated = false, returnFormat) {
    var _a3;
    let response;
    if (isBytes(block)) {
      const blockHashFormatted = format({ format: "bytes32" }, block, ETH_DATA_FORMAT);
      response = yield eth_rpc_methods_exports.getBlockByHash(web3Context.requestManager, blockHashFormatted, hydrated);
    } else {
      const blockNumberFormatted = isBlockTag(block) ? block : format({ format: "uint" }, block, ETH_DATA_FORMAT);
      response = yield eth_rpc_methods_exports.getBlockByNumber(web3Context.requestManager, blockNumberFormatted, hydrated);
    }
    const res = format(blockSchema, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    if (!isNullish(res)) {
      const result = Object.assign(Object.assign({}, res), { transactions: (_a3 = res.transactions) !== null && _a3 !== void 0 ? _a3 : [] });
      return result;
    }
    return res;
  });
}
function getBlockTransactionCount(web3Context_1) {
  return __awaiter25(this, arguments, void 0, function* (web3Context, block = web3Context.defaultBlock, returnFormat) {
    let response;
    if (isBytes(block)) {
      const blockHashFormatted = format({ format: "bytes32" }, block, ETH_DATA_FORMAT);
      response = yield eth_rpc_methods_exports.getBlockTransactionCountByHash(web3Context.requestManager, blockHashFormatted);
    } else {
      const blockNumberFormatted = isBlockTag(block) ? block : format({ format: "uint" }, block, ETH_DATA_FORMAT);
      response = yield eth_rpc_methods_exports.getBlockTransactionCountByNumber(web3Context.requestManager, blockNumberFormatted);
    }
    return format({ format: "uint" }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
  });
}
function getBlockUncleCount(web3Context_1) {
  return __awaiter25(this, arguments, void 0, function* (web3Context, block = web3Context.defaultBlock, returnFormat) {
    let response;
    if (isBytes(block)) {
      const blockHashFormatted = format({ format: "bytes32" }, block, ETH_DATA_FORMAT);
      response = yield eth_rpc_methods_exports.getUncleCountByBlockHash(web3Context.requestManager, blockHashFormatted);
    } else {
      const blockNumberFormatted = isBlockTag(block) ? block : format({ format: "uint" }, block, ETH_DATA_FORMAT);
      response = yield eth_rpc_methods_exports.getUncleCountByBlockNumber(web3Context.requestManager, blockNumberFormatted);
    }
    return format({ format: "uint" }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
  });
}
function getUncle(web3Context_1) {
  return __awaiter25(this, arguments, void 0, function* (web3Context, block = web3Context.defaultBlock, uncleIndex, returnFormat) {
    const uncleIndexFormatted = format({ format: "uint" }, uncleIndex, ETH_DATA_FORMAT);
    let response;
    if (isBytes(block)) {
      const blockHashFormatted = format({ format: "bytes32" }, block, ETH_DATA_FORMAT);
      response = yield eth_rpc_methods_exports.getUncleByBlockHashAndIndex(web3Context.requestManager, blockHashFormatted, uncleIndexFormatted);
    } else {
      const blockNumberFormatted = isBlockTag(block) ? block : format({ format: "uint" }, block, ETH_DATA_FORMAT);
      response = yield eth_rpc_methods_exports.getUncleByBlockNumberAndIndex(web3Context.requestManager, blockNumberFormatted, uncleIndexFormatted);
    }
    return format(blockSchema, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
  });
}
function getTransaction(web3Context_1, transactionHash_1) {
  return __awaiter25(this, arguments, void 0, function* (web3Context, transactionHash, returnFormat = web3Context.defaultReturnFormat) {
    const transactionHashFormatted = format({ format: "bytes32" }, transactionHash, DEFAULT_RETURN_FORMAT);
    const response = yield eth_rpc_methods_exports.getTransactionByHash(web3Context.requestManager, transactionHashFormatted);
    return isNullish(response) ? response : formatTransaction(response, returnFormat, {
      transactionSchema: web3Context.config.customTransactionSchema,
      fillInputAndData: true
    });
  });
}
function getPendingTransactions2(web3Context, returnFormat) {
  return __awaiter25(this, void 0, void 0, function* () {
    const response = yield eth_rpc_methods_exports.getPendingTransactions(web3Context.requestManager);
    return response.map((transaction) => formatTransaction(transaction, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat, {
      transactionSchema: web3Context.config.customTransactionSchema,
      fillInputAndData: true
    }));
  });
}
function getTransactionFromBlock(web3Context_1) {
  return __awaiter25(this, arguments, void 0, function* (web3Context, block = web3Context.defaultBlock, transactionIndex, returnFormat) {
    const transactionIndexFormatted = format({ format: "uint" }, transactionIndex, ETH_DATA_FORMAT);
    let response;
    if (isBytes(block)) {
      const blockHashFormatted = format({ format: "bytes32" }, block, ETH_DATA_FORMAT);
      response = yield eth_rpc_methods_exports.getTransactionByBlockHashAndIndex(web3Context.requestManager, blockHashFormatted, transactionIndexFormatted);
    } else {
      const blockNumberFormatted = isBlockTag(block) ? block : format({ format: "uint" }, block, ETH_DATA_FORMAT);
      response = yield eth_rpc_methods_exports.getTransactionByBlockNumberAndIndex(web3Context.requestManager, blockNumberFormatted, transactionIndexFormatted);
    }
    return isNullish(response) ? response : formatTransaction(response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat, {
      transactionSchema: web3Context.config.customTransactionSchema,
      fillInputAndData: true
    });
  });
}
function getTransactionReceipt2(web3Context, transactionHash, returnFormat) {
  return __awaiter25(this, void 0, void 0, function* () {
    const transactionHashFormatted = format({ format: "bytes32" }, transactionHash, DEFAULT_RETURN_FORMAT);
    let response;
    try {
      response = yield eth_rpc_methods_exports.getTransactionReceipt(web3Context.requestManager, transactionHashFormatted);
    } catch (error) {
      if (typeof error === "object" && !isNullish(error) && "message" in error && error.message === "transaction indexing is in progress") {
        console.warn("Transaction indexing is in progress.");
      } else {
        throw error;
      }
    }
    return isNullish(response) ? response : format(transactionReceiptSchema, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
  });
}
function getTransactionCount2(web3Context_1, address_1) {
  return __awaiter25(this, arguments, void 0, function* (web3Context, address, blockNumber = web3Context.defaultBlock, returnFormat) {
    const blockNumberFormatted = isBlockTag(blockNumber) ? blockNumber : format({ format: "uint" }, blockNumber, ETH_DATA_FORMAT);
    const response = yield eth_rpc_methods_exports.getTransactionCount(web3Context.requestManager, address, blockNumberFormatted);
    return format({ format: "uint" }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
  });
}
function sendTransaction3(web3Context, transactionObj, returnFormat, options = { checkRevertBeforeSending: true }, transactionMiddleware) {
  const promiEvent = new Web3PromiEvent((resolve, reject) => {
    setImmediate(() => {
      (() => __awaiter25(this, void 0, void 0, function* () {
        const sendTxHelper = new SendTxHelper({
          web3Context,
          promiEvent,
          options,
          returnFormat
        });
        let transaction = Object.assign({}, transactionObj);
        if (!isNullish(transactionMiddleware)) {
          transaction = yield transactionMiddleware.processTransaction(transaction);
        }
        let transactionFormatted = formatTransaction(Object.assign(Object.assign({}, transaction), { from: getTransactionFromOrToAttr("from", web3Context, transaction), to: getTransactionFromOrToAttr("to", web3Context, transaction) }), ETH_DATA_FORMAT, {
          transactionSchema: web3Context.config.customTransactionSchema
        });
        try {
          transactionFormatted = yield sendTxHelper.populateGasPrice({
            transaction,
            transactionFormatted
          });
          yield sendTxHelper.checkRevertBeforeSending(transactionFormatted);
          sendTxHelper.emitSending(transactionFormatted);
          let wallet;
          if (web3Context.wallet && !isNullish(transactionFormatted.from)) {
            wallet = web3Context.wallet.get(transactionFormatted.from);
          }
          const transactionHash = yield sendTxHelper.signAndSend({
            wallet,
            tx: transactionFormatted
          });
          const transactionHashFormatted = format({ format: "bytes32" }, transactionHash, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
          sendTxHelper.emitSent(transactionFormatted);
          sendTxHelper.emitTransactionHash(transactionHashFormatted);
          const transactionReceipt = yield waitForTransactionReceipt(web3Context, transactionHash, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
          const transactionReceiptFormatted = sendTxHelper.getReceiptWithEvents(format(transactionReceiptSchema, transactionReceipt, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat));
          sendTxHelper.emitReceipt(transactionReceiptFormatted);
          resolve(yield sendTxHelper.handleResolve({
            receipt: transactionReceiptFormatted,
            tx: transactionFormatted
          }));
          sendTxHelper.emitConfirmation({
            receipt: transactionReceiptFormatted,
            transactionHash
          });
        } catch (error) {
          reject(yield sendTxHelper.handleError({
            error,
            tx: transactionFormatted
          }));
        }
      }))();
    });
  });
  return promiEvent;
}
function sendSignedTransaction(web3Context, signedTransaction, returnFormat, options = { checkRevertBeforeSending: true }) {
  const promiEvent = new Web3PromiEvent((resolve, reject) => {
    setImmediate(() => {
      (() => __awaiter25(this, void 0, void 0, function* () {
        const sendTxHelper = new SendTxHelper({
          web3Context,
          promiEvent,
          options,
          returnFormat
        });
        const signedTransactionFormattedHex = format({ format: "bytes" }, signedTransaction, ETH_DATA_FORMAT);
        const unSerializedTransaction = TransactionFactory.fromSerializedData(bytesToUint8Array(hexToBytes(signedTransactionFormattedHex)));
        const unSerializedTransactionWithFrom = Object.assign(Object.assign({}, unSerializedTransaction.toJSON()), {
          // Some providers will default `from` to address(0) causing the error
          // reported from `eth_call` to not be the reason the user's tx failed
          // e.g. `eth_call` will return an Out of Gas error for a failed
          // smart contract execution contract, because the sender, address(0),
          // has no balance to pay for the gas of the transaction execution
          from: unSerializedTransaction.getSenderAddress().toString()
        });
        try {
          const { v, r, s } = unSerializedTransactionWithFrom, txWithoutSigParams = __rest(unSerializedTransactionWithFrom, ["v", "r", "s"]);
          yield sendTxHelper.checkRevertBeforeSending(txWithoutSigParams);
          sendTxHelper.emitSending(signedTransactionFormattedHex);
          const transactionHash = yield trySendTransaction(web3Context, () => __awaiter25(this, void 0, void 0, function* () {
            return eth_rpc_methods_exports.sendRawTransaction(web3Context.requestManager, signedTransactionFormattedHex);
          }));
          sendTxHelper.emitSent(signedTransactionFormattedHex);
          const transactionHashFormatted = format({ format: "bytes32" }, transactionHash, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
          sendTxHelper.emitTransactionHash(transactionHashFormatted);
          const transactionReceipt = yield waitForTransactionReceipt(web3Context, transactionHash, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
          const transactionReceiptFormatted = sendTxHelper.getReceiptWithEvents(format(transactionReceiptSchema, transactionReceipt, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat));
          sendTxHelper.emitReceipt(transactionReceiptFormatted);
          resolve(yield sendTxHelper.handleResolve({
            receipt: transactionReceiptFormatted,
            tx: unSerializedTransactionWithFrom
          }));
          sendTxHelper.emitConfirmation({
            receipt: transactionReceiptFormatted,
            transactionHash
          });
        } catch (error) {
          reject(yield sendTxHelper.handleError({
            error,
            tx: unSerializedTransactionWithFrom
          }));
        }
      }))();
    });
  });
  return promiEvent;
}
function sign4(web3Context_1, message_1, addressOrIndex_1) {
  return __awaiter25(this, arguments, void 0, function* (web3Context, message, addressOrIndex, returnFormat = web3Context.defaultReturnFormat) {
    var _a3;
    const messageFormatted = format({ format: "bytes" }, message, DEFAULT_RETURN_FORMAT);
    if ((_a3 = web3Context.wallet) === null || _a3 === void 0 ? void 0 : _a3.get(addressOrIndex)) {
      const wallet = web3Context.wallet.get(addressOrIndex);
      const signed = wallet.sign(messageFormatted);
      return format(SignatureObjectSchema, signed, returnFormat);
    }
    if (typeof addressOrIndex === "number") {
      throw new SignatureError(message, 'RPC method "eth_sign" does not support index signatures');
    }
    const response = yield eth_rpc_methods_exports.sign(web3Context.requestManager, addressOrIndex, messageFormatted);
    return format({ format: "bytes" }, response, returnFormat);
  });
}
function signTransaction4(web3Context_1, transaction_1) {
  return __awaiter25(this, arguments, void 0, function* (web3Context, transaction, returnFormat = web3Context.defaultReturnFormat) {
    const response = yield eth_rpc_methods_exports.signTransaction(web3Context.requestManager, formatTransaction(transaction, ETH_DATA_FORMAT, {
      transactionSchema: web3Context.config.customTransactionSchema
    }));
    return isString(response) ? decodeSignedTransaction(response, returnFormat, {
      fillInputAndData: true
    }) : {
      raw: format({ format: "bytes" }, response.raw, returnFormat),
      tx: formatTransaction(response.tx, returnFormat, {
        transactionSchema: web3Context.config.customTransactionSchema,
        fillInputAndData: true
      })
    };
  });
}
function call2(web3Context_1, transaction_1) {
  return __awaiter25(this, arguments, void 0, function* (web3Context, transaction, blockNumber = web3Context.defaultBlock, returnFormat = web3Context.defaultReturnFormat) {
    const blockNumberFormatted = isBlockTag(blockNumber) ? blockNumber : format({ format: "uint" }, blockNumber, ETH_DATA_FORMAT);
    const response = yield eth_rpc_methods_exports.call(web3Context.requestManager, formatTransaction(transaction, ETH_DATA_FORMAT, {
      transactionSchema: web3Context.config.customTransactionSchema
    }), blockNumberFormatted);
    return format({ format: "bytes" }, response, returnFormat);
  });
}
function estimateGas2(web3Context_1, transaction_1) {
  return __awaiter25(this, arguments, void 0, function* (web3Context, transaction, blockNumber = web3Context.defaultBlock, returnFormat) {
    const transactionFormatted = formatTransaction(transaction, ETH_DATA_FORMAT, {
      transactionSchema: web3Context.config.customTransactionSchema
    });
    const blockNumberFormatted = isBlockTag(blockNumber) ? blockNumber : format({ format: "uint" }, blockNumber, ETH_DATA_FORMAT);
    const response = yield eth_rpc_methods_exports.estimateGas(web3Context.requestManager, transactionFormatted, blockNumberFormatted);
    return format({ format: "uint" }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
  });
}
function getLogs2(web3Context, filter, returnFormat) {
  return __awaiter25(this, void 0, void 0, function* () {
    let { toBlock, fromBlock } = filter;
    if (!isNullish(toBlock)) {
      if (typeof toBlock === "number" || typeof toBlock === "bigint") {
        toBlock = numberToHex(toBlock);
      }
    }
    if (!isNullish(fromBlock)) {
      if (typeof fromBlock === "number" || typeof fromBlock === "bigint") {
        fromBlock = numberToHex(fromBlock);
      }
    }
    const formattedFilter = Object.assign(Object.assign({}, filter), { fromBlock, toBlock });
    const response = yield eth_rpc_methods_exports.getLogs(web3Context.requestManager, formattedFilter);
    const result = response.map((res) => {
      if (typeof res === "string") {
        return res;
      }
      return format(logSchema, res, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
    return result;
  });
}
function getChainId2(web3Context, returnFormat) {
  return __awaiter25(this, void 0, void 0, function* () {
    const response = yield eth_rpc_methods_exports.getChainId(web3Context.requestManager);
    return format(
      { format: "uint" },
      // Response is number in hex formatted string
      response,
      returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat
    );
  });
}
function getProof2(web3Context_1, address_1, storageKeys_1) {
  return __awaiter25(this, arguments, void 0, function* (web3Context, address, storageKeys, blockNumber = web3Context.defaultBlock, returnFormat) {
    const storageKeysFormatted = storageKeys.map((storageKey) => format({ format: "bytes" }, storageKey, ETH_DATA_FORMAT));
    const blockNumberFormatted = isBlockTag(blockNumber) ? blockNumber : format({ format: "uint" }, blockNumber, ETH_DATA_FORMAT);
    const response = yield eth_rpc_methods_exports.getProof(web3Context.requestManager, address, storageKeysFormatted, blockNumberFormatted);
    return format(accountSchema, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
  });
}
function getFeeHistory2(web3Context_1, blockCount_1) {
  return __awaiter25(this, arguments, void 0, function* (web3Context, blockCount, newestBlock = web3Context.defaultBlock, rewardPercentiles, returnFormat) {
    const blockCountFormatted = format({ format: "uint" }, blockCount, ETH_DATA_FORMAT);
    const newestBlockFormatted = isBlockTag(newestBlock) ? newestBlock : format({ format: "uint" }, newestBlock, ETH_DATA_FORMAT);
    const rewardPercentilesFormatted = format({
      type: "array",
      items: {
        format: "uint"
      }
    }, rewardPercentiles, NUMBER_DATA_FORMAT);
    const response = yield eth_rpc_methods_exports.getFeeHistory(web3Context.requestManager, blockCountFormatted, newestBlockFormatted, rewardPercentilesFormatted);
    return format(feeHistorySchema, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
  });
}
function createAccessList2(web3Context_1, transaction_1) {
  return __awaiter25(this, arguments, void 0, function* (web3Context, transaction, blockNumber = web3Context.defaultBlock, returnFormat) {
    const blockNumberFormatted = isBlockTag(blockNumber) ? blockNumber : format({ format: "uint" }, blockNumber, ETH_DATA_FORMAT);
    const response = yield eth_rpc_methods_exports.createAccessList(web3Context.requestManager, formatTransaction(transaction, ETH_DATA_FORMAT, {
      transactionSchema: web3Context.config.customTransactionSchema
    }), blockNumberFormatted);
    return format(accessListResultSchema, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
  });
}
function signTypedData2(web3Context, address, typedData, useLegacy, returnFormat) {
  return __awaiter25(this, void 0, void 0, function* () {
    const response = yield eth_rpc_methods_exports.signTypedData(web3Context.requestManager, address, typedData, useLegacy);
    return format({ format: "bytes" }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
  });
}

// node_modules/web3-eth/lib/esm/filtering_rpc_method_wrappers.js
var __awaiter26 = function(thisArg, _arguments, P, generator) {
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
function createNewPendingTransactionFilter(web3Context, returnFormat) {
  return __awaiter26(this, void 0, void 0, function* () {
    const response = yield eth_rpc_methods_exports.newPendingTransactionFilter(web3Context.requestManager);
    return format({ format: "uint" }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
  });
}
function createNewFilter(web3Context, filter, returnFormat) {
  return __awaiter26(this, void 0, void 0, function* () {
    let { toBlock, fromBlock } = filter;
    if (!isNullish(toBlock)) {
      if (typeof toBlock === "number" || typeof toBlock === "bigint") {
        toBlock = numberToHex(toBlock);
      }
    }
    if (!isNullish(fromBlock)) {
      if (typeof fromBlock === "number" || typeof fromBlock === "bigint") {
        fromBlock = numberToHex(fromBlock);
      }
    }
    const formattedFilter = Object.assign(Object.assign({}, filter), { fromBlock, toBlock });
    const response = yield eth_rpc_methods_exports.newFilter(web3Context.requestManager, formattedFilter);
    return format({ format: "uint" }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
  });
}
function createNewBlockFilter(web3Context, returnFormat) {
  return __awaiter26(this, void 0, void 0, function* () {
    const response = yield eth_rpc_methods_exports.newBlockFilter(web3Context.requestManager);
    return format({ format: "uint" }, response, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
  });
}
function uninstallFilter2(web3Context, filterIdentifier) {
  return __awaiter26(this, void 0, void 0, function* () {
    const response = yield eth_rpc_methods_exports.uninstallFilter(web3Context.requestManager, numberToHex(filterIdentifier));
    return response;
  });
}
function getFilterChanges2(web3Context, filterIdentifier, returnFormat) {
  return __awaiter26(this, void 0, void 0, function* () {
    const response = yield eth_rpc_methods_exports.getFilterChanges(web3Context.requestManager, numberToHex(filterIdentifier));
    const result = response.map((res) => {
      if (typeof res === "string") {
        return res;
      }
      return format(logSchema, res, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
    return result;
  });
}
function getFilterLogs2(web3Context, filterIdentifier, returnFormat) {
  return __awaiter26(this, void 0, void 0, function* () {
    const response = yield eth_rpc_methods_exports.getFilterLogs(web3Context.requestManager, numberToHex(filterIdentifier));
    const result = response.map((res) => {
      if (typeof res === "string") {
        return res;
      }
      return format(logSchema, res, returnFormat !== null && returnFormat !== void 0 ? returnFormat : web3Context.defaultReturnFormat);
    });
    return result;
  });
}

// node_modules/web3-eth/lib/esm/web3_subscriptions.js
var LogsSubscription = class extends Web3Subscription {
  _buildSubscriptionParams() {
    return ["logs", this.args];
  }
  formatSubscriptionResult(data) {
    return format(logSchema, data, super.returnFormat);
  }
};
var NewPendingTransactionsSubscription = class extends Web3Subscription {
  // eslint-disable-next-line
  _buildSubscriptionParams() {
    return ["newPendingTransactions"];
  }
  formatSubscriptionResult(data) {
    return format({ format: "string" }, data, super.returnFormat);
  }
};
var NewHeadsSubscription = class extends Web3Subscription {
  // eslint-disable-next-line
  _buildSubscriptionParams() {
    return ["newHeads"];
  }
  formatSubscriptionResult(data) {
    return format(blockHeaderSchema, data, super.returnFormat);
  }
};
var SyncingSubscription = class extends Web3Subscription {
  // eslint-disable-next-line
  _buildSubscriptionParams() {
    return ["syncing"];
  }
  _processSubscriptionResult(data) {
    if (typeof data === "boolean") {
      this.emit("changed", data);
    } else {
      const mappedData = Object.fromEntries(Object.entries((data === null || data === void 0 ? void 0 : data.status) || data).map(([key, value]) => [
        key.charAt(0).toLowerCase() + key.substring(1),
        value
      ]));
      this.emit("changed", data.syncing);
      this.emit("data", format(syncSchema, mappedData, super.returnFormat));
    }
  }
};

// node_modules/web3-eth/lib/esm/web3_eth.js
var __awaiter27 = function(thisArg, _arguments, P, generator) {
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
var registeredSubscriptions = {
  logs: LogsSubscription,
  newPendingTransactions: NewPendingTransactionsSubscription,
  newHeads: NewHeadsSubscription,
  syncing: SyncingSubscription,
  pendingTransactions: NewPendingTransactionsSubscription,
  // the same as newPendingTransactions. just for support API like in version 1.x
  newBlockHeaders: NewHeadsSubscription
  // the same as newHeads. just for support API like in version 1.x
};
var Web3Eth = class _Web3Eth extends Web3Context {
  constructor(providerOrContext) {
    if (typeof providerOrContext === "string" || // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    isSupportedProvider(providerOrContext)) {
      super({
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        provider: providerOrContext,
        registeredSubscriptions
      });
      return;
    }
    if (providerOrContext.registeredSubscriptions) {
      super(providerOrContext);
      return;
    }
    super(Object.assign(Object.assign({}, providerOrContext), { registeredSubscriptions }));
    this.getFeeData = this.calculateFeeData;
  }
  setTransactionMiddleware(transactionMiddleware) {
    this.transactionMiddleware = transactionMiddleware;
  }
  getTransactionMiddleware() {
    return this.transactionMiddleware;
  }
  /**
   * @returns Returns the ethereum protocol version of the node.
   *
   * ```ts
   * web3.eth.getProtocolVersion().then(console.log);
   * > "63"
   * ```
   */
  getProtocolVersion() {
    return __awaiter27(this, void 0, void 0, function* () {
      return eth_rpc_methods_exports.getProtocolVersion(this.requestManager);
    });
  }
  // TODO Add returnFormat parameter
  /**
   * Checks if the node is currently syncing.
   *
   * @returns Either a {@link SyncingStatusAPI}, or `false`.
   *
   * ```ts
   * web3.eth.isSyncing().then(console.log);
   * > {
   *     startingBlock: 100,
   *     currentBlock: 312,
   *     highestBlock: 512,
   *     knownStates: 234566,
   *     pulledStates: 123455
   * }
   * ```
   */
  isSyncing() {
    return __awaiter27(this, void 0, void 0, function* () {
      return eth_rpc_methods_exports.getSyncing(this.requestManager);
    });
  }
  // TODO consider adding returnFormat parameter (to format address as bytes)
  /**
   * @returns Returns the coinbase address to which mining rewards will go.
   *
   * ```ts
   * web3.eth.getCoinbase().then(console.log);
   * > "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe"
   * ```
   */
  getCoinbase() {
    return __awaiter27(this, void 0, void 0, function* () {
      return eth_rpc_methods_exports.getCoinbase(this.requestManager);
    });
  }
  /**
   * Checks whether the node is mining or not.
   *
   * @returns `true` if the node is mining, otherwise `false`.
   *
   * ```ts
   * web3.eth.isMining().then(console.log);
   * > true
   * ```
   */
  isMining() {
    return __awaiter27(this, void 0, void 0, function* () {
      return eth_rpc_methods_exports.getMining(this.requestManager);
    });
  }
  /**
   * @deprecated Will be removed in the future, please use {@link Web3Eth.getHashRate} method instead.
   *
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The number of hashes per second that the node is mining with.
   *
   * ```ts
   * web3.eth.getHashrate().then(console.log);
   * > 493736n
   *
   * web3.eth.getHashrate({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0x788a8"
   * ```
   */
  getHashrate(returnFormat) {
    return __awaiter27(this, void 0, void 0, function* () {
      var _a3;
      if (returnFormat === void 0) {
        returnFormat = (_a3 = this.defaultReturnFormat) !== null && _a3 !== void 0 ? _a3 : DEFAULT_RETURN_FORMAT;
      }
      return this.getHashRate(returnFormat);
    });
  }
  /**
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The number of hashes per second that the node is mining with.
   *
   * ```ts
   * web3.eth.getHashRate().then(console.log);
   * > 493736n
   *
   * web3.eth.getHashRate({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0x788a8"
   * ```
   */
  getHashRate() {
    return __awaiter27(this, arguments, void 0, function* (returnFormat = this.defaultReturnFormat) {
      return getHashRate2(this, returnFormat);
    });
  }
  /**
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The gas price determined by the last few blocks median gas price.
   *
   * ```ts
   * web3.eth.getGasPrice().then(console.log);
   * > 20000000000n
   *
   * web3.eth.getGasPrice({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0x4a817c800"
   * ```
   */
  getGasPrice() {
    return __awaiter27(this, arguments, void 0, function* (returnFormat = this.defaultReturnFormat) {
      return getGasPrice2(this, returnFormat);
    });
  }
  /**
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns the current maxPriorityFeePerGas per gas in wei.
   *
   * ```ts
   * web3.eth.getMaxPriorityFeePerGas().then(console.log);
   * > 20000000000n
   *
   * web3.eth.getMaxPriorityFeePerGas({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0x4a817c800"
   * ```
   */
  getMaxPriorityFeePerGas() {
    return __awaiter27(this, arguments, void 0, function* (returnFormat = this.defaultReturnFormat) {
      return getMaxPriorityFeePerGas2(this, returnFormat);
    });
  }
  /**
   * Calculates the current Fee Data.
   * If the node supports EIP-1559, then `baseFeePerGas` and `maxPriorityFeePerGas` will be returned along with the calculated `maxFeePerGas` value.
   * `maxFeePerGas` is calculated as `baseFeePerGas` * `baseFeePerGasFactor` + `maxPriorityFeePerGas`.
   * If the node does not support EIP-1559, then the `gasPrice` will be returned and the other values will be undefined.
   *
   * @param baseFeePerGasFactor (optional) The factor to multiply the `baseFeePerGas` with when calculating `maxFeePerGas`, if the node supports EIP-1559. This can be a `bigint` for precise calculation or a `number` to support decimals. The default value is 2 (BigInt).
   * If a `number` is provided, it will be converted to `bigint` with three decimal precision.
   * @param alternativeMaxPriorityFeePerGas (optional) The alternative `maxPriorityFeePerGas` to use when calculating `maxFeePerGas`, if the node supports EIP-1559 but does not support the method `eth_maxPriorityFeePerGas`. The default value is 1 gwei.
   * @returns The current fee data.
   *
   * @example
   * web3.eth.calculateFeeData().then(console.log);
   * > {
   *     gasPrice: 20000000000n,
   *     maxFeePerGas: 60000000000n,
   *     maxPriorityFeePerGas: 20000000000n,
   *     baseFeePerGas: 20000000000n
   * }
   *
   * @example
   * // Using a `bigint` for baseFeePerGasFactor
   * web3.eth.calculateFeeData(1n).then(console.log);
   * > {
   *     gasPrice: 20000000000n,
   *     maxFeePerGas: 40000000000n,
   *     maxPriorityFeePerGas: 20000000000n,
   *     baseFeePerGas: 20000000000n
   * }
   *
   * @example
   * // Using a `number` for baseFeePerGasFactor (with decimals)
   * web3.eth.calculateFeeData(1.5).then(console.log);
   * > {
   *     gasPrice: 20000000000n,
   *     maxFeePerGas: 50000000000n,  // baseFeePerGasFactor is converted to BigInt(1.500)
   *     maxPriorityFeePerGas: 20000000000n,
   *     baseFeePerGas: 20000000000n
   * }
   *
   * @example
   * web3.eth.calculateFeeData(3n).then(console.log);
   * > {
   *     gasPrice: 20000000000n,
   *     maxFeePerGas: 80000000000n,
   *     maxPriorityFeePerGas: 20000000000n,
   *     baseFeePerGas: 20000000000n
   * }
   */
  calculateFeeData() {
    return __awaiter27(this, arguments, void 0, function* (baseFeePerGasFactor = BigInt(2), alternativeMaxPriorityFeePerGas = ethUnitMap.Gwei) {
      var _a3;
      const block = yield this.getBlock(void 0, false);
      const baseFeePerGas = (_a3 = block === null || block === void 0 ? void 0 : block.baseFeePerGas) !== null && _a3 !== void 0 ? _a3 : void 0;
      let gasPrice;
      try {
        gasPrice = yield this.getGasPrice();
      } catch (error) {
      }
      let maxPriorityFeePerGas;
      try {
        maxPriorityFeePerGas = yield this.getMaxPriorityFeePerGas();
      } catch (error) {
      }
      let maxFeePerGas;
      if (baseFeePerGas) {
        maxPriorityFeePerGas = maxPriorityFeePerGas !== null && maxPriorityFeePerGas !== void 0 ? maxPriorityFeePerGas : alternativeMaxPriorityFeePerGas;
        let baseFeeMultiplier;
        if (typeof baseFeePerGasFactor === "number") {
          baseFeeMultiplier = BigInt(Math.floor(baseFeePerGasFactor * 1e3)) / BigInt(1e3);
        } else {
          baseFeeMultiplier = baseFeePerGasFactor;
        }
        maxFeePerGas = baseFeePerGas * baseFeeMultiplier + maxPriorityFeePerGas;
      }
      return { gasPrice, maxFeePerGas, maxPriorityFeePerGas, baseFeePerGas };
    });
  }
  /**
   * @returns A list of accounts the node controls (addresses are checksummed).
   *
   * ```ts
   * web3.eth.getAccounts().then(console.log);
   * > ["0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe", "0xDCc6960376d6C6dEa93647383FfB245CfCed97Cf"]
   * ```
   */
  getAccounts() {
    return __awaiter27(this, void 0, void 0, function* () {
      var _a3;
      const hexAddresses = (_a3 = yield eth_rpc_methods_exports.getAccounts(this.requestManager)) !== null && _a3 !== void 0 ? _a3 : [];
      return hexAddresses.map((address) => toChecksumAddress(address));
    });
  }
  /**
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The current block number.
   *
   * ```ts
   * web3.eth.getBlockNumber().then(console.log);
   * > 2744n
   *
   * web3.eth.getBlockNumber({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0xab8"
   * ```
   */
  getBlockNumber() {
    return __awaiter27(this, arguments, void 0, function* (returnFormat = this.defaultReturnFormat) {
      return getBlockNumber2(this, returnFormat);
    });
  }
  /**
   * Get the balance of an address at a given block.
   *
   * @param address The address to get the balance of.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) Specifies what block to use as the current state for the balance query.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The current balance for the given address in `wei`.
   *
   * ```ts
   * web3.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
   * > 1000000000000n
   *
   * web3.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
   * > "0xe8d4a51000"
   * ```
   */
  getBalance(address_1) {
    return __awaiter27(this, arguments, void 0, function* (address, blockNumber = this.defaultBlock, returnFormat = this.defaultReturnFormat) {
      return getBalance2(this, address, blockNumber, returnFormat);
    });
  }
  /**
   * Get the storage at a specific position of an address.
   *
   * @param address The address to get the storage from.
   * @param storageSlot The index position of the storage.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) Specifies what block to use as the current state for the storage query.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The value in storage at the given position.
   *
   * ```ts
   * web3.eth.getStorageAt("0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234", 0).then(console.log);
   * > "0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"
   *
   * web3.eth.getStorageAt(
   *      "0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234",
   *      0,
   *      undefined,
   *      { number: FMT_NUMBER.HEX , bytes: FMT_BYTES.UINT8ARRAY }
   * ).then(console.log);
   * > Uint8Array(31) [
   *       3, 52,  86, 115,  33,  35, 255, 255,
   *       35, 66,  52,  45, 209,  35,  66,  67,
   *       67, 36,  35,  66,  52, 253,  35,  79,
   *       210, 63, 212, 242,  61,  66,  52
   *    ]
   * ```
   */
  getStorageAt(address_1, storageSlot_1) {
    return __awaiter27(this, arguments, void 0, function* (address, storageSlot, blockNumber = this.defaultBlock, returnFormat = this.defaultReturnFormat) {
      return getStorageAt2(this, address, storageSlot, blockNumber, returnFormat);
    });
  }
  /**
   * Get the code at a specific address.
   *
   * @param address The address to get the code from.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) Specifies what block to use as the current state for the code query.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The [data](https://ethereum.org/en/developers/docs/transactions/#the-data-field) at the provided `address`.
   *
   * ```ts
   * web3.eth.getCode("0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234").then(console.log);
   * > "0x600160008035811a818181146012578301005b601b6001356025565b8060005260206000f25b600060078202905091905056"
   *
   * web3.eth.getCode(
   *      "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
   *      undefined,
   *      { number: FMT_NUMBER.HEX , bytes: FMT_BYTES.UINT8ARRAY }
   * ).then(console.log);
   * > Uint8Array(50) [
   *   96,  1,  96,   0, 128, 53, 129, 26, 129, 129, 129,
   *   20, 96,  18,  87, 131,  1,   0, 91,  96,  27,  96,
   *   1, 53,  96,  37,  86, 91, 128, 96,   0,  82,  96,
   *   32, 96,   0, 242,  91, 96,   0, 96,   7, 130,   2,
   *   144, 80, 145, 144,  80, 86
   * ]
   * ```
   */
  getCode(address_1) {
    return __awaiter27(this, arguments, void 0, function* (address, blockNumber = this.defaultBlock, returnFormat = this.defaultReturnFormat) {
      return getCode2(this, address, blockNumber, returnFormat);
    });
  }
  /**
   * Retrieves a {@link Block} matching the provided block number, block hash or block tag.
   *
   * @param block The {@link BlockNumberOrTag} (defaults to {@link Web3Eth.defaultBlock}) or block hash of the desired block.
   * @param hydrated If specified `true`, the returned block will contain all transactions as objects. If `false` it will only contain transaction hashes.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted (does not format transaction objects or hashes).
   * @returns A {@link Block} object matching the provided block number or block hash.
   *
   * ```ts
   * web3.eth.getBlock(0).then(console.log);
   * > {
   *    hash: '0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d',
   *    parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
   *    miner: '0x0000000000000000000000000000000000000000',
   *    stateRoot: '0x5ed9882897d363c4632a6e67fba6203df61bd994813dcf048da59be442a9c6c4',
   *    transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *    difficulty: 1n,
   *    number: 0n,
   *    gasLimit: 30000000n,
   *    gasUsed: 0n,
   *    timestamp: 1658281638n,
   *    extraData: '0x',
   *    mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    nonce: 0n,
   *    totalDifficulty: 1n,
   *    baseFeePerGas: 1000000000n,
   *    size: 514n,
   *    transactions: [],
   *    uncles: []
   *  }
   *
   * web3.eth.getBlock(
   *      "0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d",
   *      false,
   *      { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > {
   *    hash: '0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d',
   *    parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
   *    miner: '0x0000000000000000000000000000000000000000',
   *    stateRoot: '0x5ed9882897d363c4632a6e67fba6203df61bd994813dcf048da59be442a9c6c4',
   *    transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *    difficulty: 1,
   *    number: 0,
   *    gasLimit: 30000000,
   *    gasUsed: 0,
   *    timestamp: 1658281638,
   *    extraData: '0x',
   *    mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    nonce: 0,
   *    totalDifficulty: 1,
   *    baseFeePerGas: 1000000000,
   *    size: 514,
   *    transactions: [],
   *    uncles: []
   *  }
   * ```
   */
  getBlock() {
    return __awaiter27(this, arguments, void 0, function* (block = this.defaultBlock, hydrated = false, returnFormat = this.defaultReturnFormat) {
      return getBlock(this, block, hydrated, returnFormat);
    });
  }
  /**
   * @param block The {@link BlockNumberOrTag} (defaults to {@link Web3Eth.defaultBlock}) or block hash of the desired block.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The number of transactions in the provided block.
   *
   * ```ts
   * web3.eth.getBlockTransactionCount("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
   * > 1n
   *
   * web3.eth.getBlockTransactionCount(
   *     "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > 1
   * ```
   */
  getBlockTransactionCount() {
    return __awaiter27(this, arguments, void 0, function* (block = this.defaultBlock, returnFormat = this.defaultReturnFormat) {
      return getBlockTransactionCount(this, block, returnFormat);
    });
  }
  /**
   * @param block The {@link BlockNumberOrTag} (defaults to {@link Web3Eth.defaultBlock}) or block hash of the desired block.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The number of [uncles](https://ethereum.org/en/glossary/#ommer) in the provided block.
   *
   * ```ts
   * web3.eth.getBlockUncleCount("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
   * > 1n
   *
   * web3.eth.getBlockUncleCount(
   *     "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > 1
   * ```
   */
  getBlockUncleCount() {
    return __awaiter27(this, arguments, void 0, function* (block = this.defaultBlock, returnFormat = this.defaultReturnFormat) {
      return getBlockUncleCount(this, block, returnFormat);
    });
  }
  /**
   *
   * @param block The {@link BlockNumberOrTag} (defaults to {@link Web3Eth.defaultBlock}) or block hash of the desired block.
   * @param uncleIndex The index position of the uncle.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns A blocks [uncle](https://ethereum.org/en/glossary/#ommer) by a given uncle index position.
   *
   * ```ts
   * web3.eth.getUncle(0, 1).then(console.log);
   * > {
   *    hash: '0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d',
   *    parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
   *    miner: '0x0000000000000000000000000000000000000000',
   *    stateRoot: '0x5ed9882897d363c4632a6e67fba6203df61bd994813dcf048da59be442a9c6c4',
   *    transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *    difficulty: 1n,
   *    number: 0n,
   *    gasLimit: 30000000n,
   *    gasUsed: 0n,
   *    timestamp: 1658281638n,
   *    extraData: '0x',
   *    mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    nonce: 0n,
   *    totalDifficulty: 1n,
   *    baseFeePerGas: 1000000000n,
   *    size: 514n,
   *    transactions: [],
   *    uncles: []
   *  }
   *
   * web3.eth.getUncle(
   *      "0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d",
   *      1,
   *      { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > {
   *    hash: '0x7dbfdc6a7a67a670cb9b0c3f81ca60c007762f1e4e598cb027a470678ff26d0d',
   *    parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
   *    miner: '0x0000000000000000000000000000000000000000',
   *    stateRoot: '0x5ed9882897d363c4632a6e67fba6203df61bd994813dcf048da59be442a9c6c4',
   *    transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
   *    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *    difficulty: 1,
   *    number: 0,
   *    gasLimit: 30000000,
   *    gasUsed: 0,
   *    timestamp: 1658281638,
   *    extraData: '0x',
   *    mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *    nonce: 0,
   *    totalDifficulty: 1,
   *    baseFeePerGas: 1000000000,
   *    size: 514,
   *    transactions: [],
   *    uncles: []
   *  }
   * ```
   */
  getUncle() {
    return __awaiter27(this, arguments, void 0, function* (block = this.defaultBlock, uncleIndex, returnFormat = this.defaultReturnFormat) {
      return getUncle(this, block, uncleIndex, returnFormat);
    });
  }
  /**
   * @param transactionHash The hash of the desired transaction.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The desired transaction object.
   *
   * ```ts
   * web3.eth.getTransaction('0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc').then(console.log);
   * {
   *    hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   *    type: 0n,
   *    nonce: 0n,
   *    blockHash: '0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00',
   *    blockNumber: 1n,
   *    transactionIndex: 0n,
   *    from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *    to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *    value: 1n,
   *    gas: 90000n,
   *    gasPrice: 2000000000n,
   *    input: '0x',
   *    v: 2709n,
   *    r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   *    s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
   *  }
   *
   * web3.eth.getTransaction(
   *     web3.utils.hexToBytes("0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"),
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * {
   *    hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   *    type: 0,
   *    nonce: 0,
   *    blockHash: '0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00',
   *    blockNumber: 1,
   *    transactionIndex: 0,
   *    from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *    to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *    value: 1,
   *    gas: 90000,
   *    gasPrice: 2000000000,
   *    input: '0x',
   *    v: 2709,
   *    r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   *    s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
   *  }
   * ```
   */
  getTransaction(transactionHash_1) {
    return __awaiter27(this, arguments, void 0, function* (transactionHash, returnFormat = this.defaultReturnFormat) {
      const response = yield getTransaction(this, transactionHash, returnFormat);
      if (!response)
        throw new TransactionNotFound();
      return response;
    });
  }
  /**
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns A list of pending transactions.
   *
   * ```ts
   * web3.eth.getPendingTransactions().then(console.log);
   * > [
   *      {
   *          hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   *          type: 0n,
   *          nonce: 0n,
   *          blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *          blockNumber: null,
   *          transactionIndex: 0n,
   *          from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *          to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *          value: 1n,
   *          gas: 90000n,
   *          gasPrice: 2000000000n,
   *          input: '0x',
   *          v: 2709n,
   *          r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   *          s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
   *      },
   *      {
   *          hash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
   *          type: 0n,
   *          nonce: 1n,
   *          blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *          blockNumber: null,
   *          transactionIndex: 0n,
   *          from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *          to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *          value: 1n,
   *          gas: 90000n,
   *          gasPrice: 2000000000n,
   *          input: '0x',
   *          v: 2710n,
   *          r: '0x55ac19fade21db035a1b7ea0a8d49e265e05dbb926e75f273f836ad67ce5c96a',
   *          s: '0x6550036a7c3fd426d5c3d35d96a7075cd673957620b7889846a980d2d017ec08'
   *      }
   *   ]
   *
   * * web3.eth.getPendingTransactions({ number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
   * > [
   *      {
   *          hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   *          type: 0,
   *          nonce: 0,
   *          blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *          blockNumber: null,
   *          transactionIndex: 0,
   *          from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *          to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *          value: 1,
   *          gas: 90000,
   *          gasPrice: 2000000000,
   *          input: '0x',
   *          v: 2709,
   *          r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   *          s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
   *      },
   *      {
   *          hash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
   *          type: 0,
   *          nonce: 1,
   *          blockHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
   *          blockNumber: null,
   *          transactionIndex: 0,
   *          from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *          to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *          value: 1,
   *          gas: 90000,
   *          gasPrice: 2000000000,
   *          input: '0x',
   *          v: 2710,
   *          r: '0x55ac19fade21db035a1b7ea0a8d49e265e05dbb926e75f273f836ad67ce5c96a',
   *          s: '0x6550036a7c3fd426d5c3d35d96a7075cd673957620b7889846a980d2d017ec08'
   *      }
   *   ]
   * ```
   */
  getPendingTransactions() {
    return __awaiter27(this, arguments, void 0, function* (returnFormat = this.defaultReturnFormat) {
      return getPendingTransactions2(this, returnFormat);
    });
  }
  /**
   * @param block The {@link BlockNumberOrTag} (defaults to {@link Web3Eth.defaultBlock}) or block hash of the desired block.
   * @param transactionIndex The index position of the transaction.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The desired transaction object.
   *
   * ```ts
   * web3.eth.getTransactionFromBlock('0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00', 0).then(console.log);
   * {
   *    hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   *    type: 0n,
   *    nonce: 0n,
   *    blockHash: '0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00',
   *    blockNumber: 1n,
   *    transactionIndex: 0n,
   *    from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *    to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *    value: 1n,
   *    gas: 90000n,
   *    gasPrice: 2000000000n,
   *    input: '0x',
   *    v: 2709n,
   *    r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   *    s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
   *  }
   *
   * web3.eth.getTransactionFromBlock(
   *     hexToBytes("0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"),
   *     0,
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * {
   *    hash: '0x73aea70e969941f23f9d24103e91aa1f55c7964eb13daf1c9360c308a72686dc',
   *    type: 0,
   *    nonce: 0,
   *    blockHash: '0x43202bd16b6bd54bea1b310736bd78bdbe93a64ad940f7586739d9eb25ad8d00',
   *    blockNumber: 1,
   *    transactionIndex: 0,
   *    from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *    to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *    value: 1,
   *    gas: 90000,
   *    gasPrice: 2000000000,
   *    input: '0x',
   *    v: 2709,
   *    r: '0x8b336c290f6d7b2af3ccb2c02203a8356cc7d5b150ab19cce549d55636a3a78c',
   *    s: '0x5a83c6f816befc5cd4b0c997a347224a8aa002e5799c4b082a3ec726d0e9531d'
   *  }
   * ```
   */
  getTransactionFromBlock() {
    return __awaiter27(this, arguments, void 0, function* (block = this.defaultBlock, transactionIndex, returnFormat = this.defaultReturnFormat) {
      return getTransactionFromBlock(this, block, transactionIndex, returnFormat);
    });
  }
  /**
   * @param transactionHash Hash of the transaction to retrieve the receipt for.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The desired {@link TransactionReceipt} object.
   *
   * ```ts
   * web3.eth.getTransactionReceipt("0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f").then(console.log);
   * > {
   *      transactionHash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
   *      transactionIndex: 0n,
   *      blockNumber: 2n,
   *      blockHash: '0xeb1565a08b23429552dafa92e32409f42eb43944f7611963c63ce40e7243941a',
   *      from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *      cumulativeGasUsed: 21000n,
   *      gasUsed: 21000n,
   *      logs: [],
   *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *      status: 1n,
   *      effectiveGasPrice: 2000000000n,
   *      type: 0n
   *  }
   *
   * web3.eth.getTransactionReceipt(
   *      "0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f",
   *      { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > {
   *      transactionHash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
   *      transactionIndex: 0,
   *      blockNumber: 2,
   *      blockHash: '0xeb1565a08b23429552dafa92e32409f42eb43944f7611963c63ce40e7243941a',
   *      from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *      cumulativeGasUsed: 21000,
   *      gasUsed: 21000,
   *      logs: [],
   *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *      status: 1,
   *      effectiveGasPrice: 2000000000,
   *      type: 0n
   *  }
   * ```
   */
  getTransactionReceipt(transactionHash_1) {
    return __awaiter27(this, arguments, void 0, function* (transactionHash, returnFormat = this.defaultReturnFormat) {
      const response = yield getTransactionReceipt2(this, transactionHash, returnFormat);
      if (!response)
        throw new TransactionNotFound();
      return response;
    });
  }
  /**
   * @param address The address to get the number of transactions for.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) Specifies what block to use as the current state for the query.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The number of transactions sent from the provided address.
   *
   * ```ts
   * web3.eth.getTransactionCount("0x407d73d8a49eeb85d32cf465507dd71d507100c1").then(console.log);
   * > 1n
   *
   * web3.eth.getTransactionCount(
   *     "0x407d73d8a49eeb85d32cf465507dd71d507100c1",
   *     undefined,
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > 1
   * ```
   */
  getTransactionCount(address_1) {
    return __awaiter27(this, arguments, void 0, function* (address, blockNumber = this.defaultBlock, returnFormat = this.defaultReturnFormat) {
      return getTransactionCount2(this, address, blockNumber, returnFormat);
    });
  }
  /**
   * @param transaction The {@link Transaction}, {@link TransactionWithFromLocalWalletIndex}, {@link TransactionWithToLocalWalletIndex} or {@link TransactionWithFromAndToLocalWalletIndex} to send. __Note:__ In the `to` and `from` fields when hex strings are used, it is assumed they are addresses, for any other form (number, string number, etc.) it is assumed they are wallet indexes.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @param options A configuration object used to change the behavior of the `sendTransaction` method.
   * @returns If `await`ed or `.then`d (i.e. the promise resolves), the transaction hash is returned.
   * ```ts
   * const transaction = {
   *   from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
   *   to: '0x6f1DF96865D09d21e8f3f9a7fbA3b17A11c7C53C',
   *   value: '0x1'
   * }
   *
   * const transactionReceipt = await web3.eth.sendTransaction(transaction);
   * console.log(transactionReceipt);
   * > {
   *      blockHash: '0x39cee0da843293ae3136cee0de4c0803745868b6e72b7cd05fba395bffa0ee85',
   *      blockNumber: 6659547n,
   *      cumulativeGasUsed: 1029036n,
   *      effectiveGasPrice: 6765796845n,
   *      from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
   *      gasUsed: 21000n,
   *      logs: [],
   *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *      status: 1n,
   *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *      transactionHash: '0x619de868dd73c07bd0c096adcd405c93c1e924fdf741e684a127a52324c28bb9',
   *      transactionIndex: 16n,
   *      type: 2n
   *}
   *
   * web3.eth.sendTransaction(transaction).then(console.log);
   * > {
   *      blockHash: '0x39cee0da843293ae3136cee0de4c0803745868b6e72b7cd05fba395bffa0ee85',
   *      blockNumber: 6659547n,
   *      cumulativeGasUsed: 1029036n,
   *      effectiveGasPrice: 6765796845n,
   *      from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
   *      gasUsed: 21000n,
   *      logs: [],
   *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *      status: 1n,
   *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *      transactionHash: '0x619de868dd73c07bd0c096adcd405c93c1e924fdf741e684a127a52324c28bb9',
   *      transactionIndex: 16n,
   *      type: 2n
   *}
   *
   * web3.eth.sendTransaction(transaction).catch(console.log);
   * > <Some TransactionError>
   *
   * // Example using options.ignoreGasPricing = true
   * web3.eth.sendTransaction(transaction, undefined, { ignoreGasPricing: true }).then(console.log);
   * > {
   *      blockHash: '0x39cee0da843293ae3136cee0de4c0803745868b6e72b7cd05fba395bffa0ee85',
   *      blockNumber: 6659547n,
   *      cumulativeGasUsed: 1029036n,
   *      effectiveGasPrice: 6765796845n,
   *      from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
   *      gasUsed: 21000n,
   *      logs: [],
   *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *      status: 1n,
   *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *      transactionHash: '0x619de868dd73c07bd0c096adcd405c93c1e924fdf741e684a127a52324c28bb9',
   *      transactionIndex: 16n,
   *      type: 2n
   *}
   * ```
   *
   *
   * Otherwise, a {@link Web3PromiEvent} is returned which has several events than can be listened to using the `.on` syntax, such as:
   * - `sending`
   * ```ts
   * web3.eth.sendTransaction(transaction).on('sending', transactionToBeSent => console.log(transactionToBeSent));
   * > {
   *      from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
   *      to: '0x6f1DF96865D09d21e8f3f9a7fbA3b17A11c7C53C',
   *      value: '0x1',
   *      gasPrice: '0x77359400',
   *      maxPriorityFeePerGas: undefined,
   *      maxFeePerGas: undefined
   * }
   * ```
   * - `sent`
   * ```ts
   * web3.eth.sendTransaction(transaction).on('sent', sentTransaction => console.log(sentTransaction));
   * > {
   *      from: '0x6E599DA0bfF7A6598AC1224E4985430Bf16458a4',
   *      to: '0x6f1DF96865D09d21e8f3f9a7fbA3b17A11c7C53C',
   *      value: '0x1',
   *      gasPrice: '0x77359400',
   *      maxPriorityFeePerGas: undefined,
   *      maxFeePerGas: undefined
   * }
   * ```
   * - `transactionHash`
   * ```ts
   * web3.eth.sendTransaction(transaction).on('transactionHash', transactionHash => console.log(transactionHash));
   * > 0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f
   * ```
   * - `receipt`
   * ```ts
   * web3.eth.sendTransaction(transaction).on('receipt', receipt => console.log(receipt));
   * > {
   *      transactionHash: '0xdf7756865c2056ce34c4eabe4eff42ad251a9f920a1c620c00b4ea0988731d3f',
   *      transactionIndex: 0n,
   *      blockNumber: 2n,
   *      blockHash: '0xeb1565a08b23429552dafa92e32409f42eb43944f7611963c63ce40e7243941a',
   *      from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *      to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *      cumulativeGasUsed: 21000n,
   *      gasUsed: 21000n,
   *      logs: [],
   *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *      status: 1n,
   *      effectiveGasPrice: 2000000000n,
   *      type: 0n
   * }
   * ```
   * - `confirmation`
   * ```ts
   * web3.eth.sendTransaction(transaction).on('confirmation', confirmation => console.log(confirmation));
   * > {
   *      confirmations: 1n,
   *      receipt: {
   *         transactionHash: '0xb4a3a35ae0f3e77ef0ff7be42010d948d011b21a4e341072ee18717b67e99ab8',
   *         transactionIndex: 0n,
   *         blockNumber: 5n,
   *         blockHash: '0xb57fbe6f145cefd86a305a9a024a4351d15d4d39607d7af53d69a319bc3b5548',
   *         from: '0x6e599da0bff7a6598ac1224e4985430bf16458a4',
   *         to: '0x6f1df96865d09d21e8f3f9a7fba3b17a11c7c53c',
   *         cumulativeGasUsed: 21000n,
   *         gasUsed: 21000n,
   *         logs: [],
   *         logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *         status: 1n,
   *         effectiveGasPrice: 2000000000n,
   *         type: 0n
   *      },
   *      latestBlockHash: '0xb57fbe6f145cefd86a305a9a024a4351d15d4d39607d7af53d69a319bc3b5548'
   * }
   * ```
   * - `error`
   * ```ts
   * web3.eth.sendTransaction(transaction).on('error', error => console.log);
   * > <Some TransactionError>
   * ```
   */
  sendTransaction(transaction, returnFormat = this.defaultReturnFormat, options) {
    return sendTransaction3(this, transaction, returnFormat, options, this.transactionMiddleware);
  }
  /**
   * @param transaction Signed transaction in one of the valid {@link Bytes} format.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @param options A configuration object used to change the behavior of the method
   * @returns If `await`ed or `.then`d (i.e. the promise resolves), the transaction hash is returned.
   * ```ts
   * const signedTransaction = "0xf86580843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a95a03a42d53ca5b71f845e1cd4c65359b05446a85d16881372d3bfaab8980935cb04a0711497bc8dd3b541152e2fed14fe650a647f1f0edab0d386ad9506f0e642410f"
   *
   * const transactionHash = await web3.eth.sendSignedTransaction(signedTransaction);
   * console.log(transactionHash);
   * > 0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700
   *
   * web3.eth.sendSignedTransaction(signedTransaction).then(console.log);
   * > 0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700
   *
   * web3.eth.sendSignedTransaction(signedTransaction).catch(console.log);
   * > <Some TransactionError>
   * ```
   *
   *
   * Otherwise, a {@link Web3PromiEvent} is returned which has several events than can be listened to using the `.on` syntax, such as:
   * - `sending`
   * ```ts
   * web3.eth.sendSignedTransaction(signedTransaction).on('sending', transactionToBeSent => console.log(transactionToBeSent));
   * > "0xf86580843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a95a03a42d53ca5b71f845e1cd4c65359b05446a85d16881372d3bfaab8980935cb04a0711497bc8dd3b541152e2fed14fe650a647f1f0edab0d386ad9506f0e642410f"
   * ```
   * - `sent`
   * ```ts
   * web3.eth.sendSignedTransaction(signedTransaction).on('sent', sentTransaction => console.log(sentTransaction));
   * > "0xf86580843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a95a03a42d53ca5b71f845e1cd4c65359b05446a85d16881372d3bfaab8980935cb04a0711497bc8dd3b541152e2fed14fe650a647f1f0edab0d386ad9506f0e642410f"
   * ```
   * - `transactionHash`
   * ```ts
   * web3.eth.sendSignedTransaction(signedTransaction).on('transactionHash', transactionHash => console.log(transactionHash));
   * > 0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700
   * ```
   * - `receipt`
   * ```ts
   * web3.eth.sendSignedTransaction(signedTransaction).on('receipt', receipt => console.log(receipt));
   * > {
   *      blockHash: '0xff2b1687995d81066361bc6affe4455746120a7d4bb75fc938211a2692a50081',
   *      blockNumber: 1n,
   *      cumulativeGasUsed: 21000n,
   *      effectiveGasPrice: 1000000001n,
   *      from: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
   *      gasUsed: 21000n,
   *      logs: [],
   *      logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *      status: 1n,
   *      to: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
   *      transactionHash: '0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700',
   *      transactionIndex: 0n,
   *      type: 0n
   * }
   * ```
   * - `confirmation`
   * ```ts
   * web3.eth.sendSignedTransaction(signedTransaction).on('confirmation', confirmation => console.log(confirmation));
   * > {
   *     confirmations: 1n,
   *     receipt: {
   *          blockHash: '0xff2b1687995d81066361bc6affe4455746120a7d4bb75fc938211a2692a50081',
   *          blockNumber: 1n,
   *          cumulativeGasUsed: 21000n,
   *          effectiveGasPrice: 1000000001n,
   *          from: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
   *          gasUsed: 21000n,
   *          logs: [],
   *          logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   *          status: 1n,
   *          to: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
   *          transactionHash: '0xed8c241ea44d57f4605dc22c63500de46254d6c7844fd65fa438b128c80cf700',
   *          transactionIndex: 0n,
   *          type: 0n
   *     },
   *     latestBlockHash: '0xff2b1687995d81066361bc6affe4455746120a7d4bb75fc938211a2692a50081'
   * }
   * ```
   * - `error`
   * ```ts
   * web3.eth.sendSignedTransaction(signedTransaction).on('error', error => console.log(error));
   * > <Some TransactionError>
   * ```
   */
  sendSignedTransaction(transaction, returnFormat = this.defaultReturnFormat, options) {
    return sendSignedTransaction(this, transaction, returnFormat, options);
  }
  /**
   * @param message Data to sign in one of the valid {@link Bytes} format.
   * @param address Address to sign data with, can be an address or the index of a local wallet.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns The signed `message`.
   *
   * ```ts
   * // Using an unlocked account managed by connected RPC client
   * web3.eth.sign("0x48656c6c6f20776f726c64", "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe").then(console.log);
   * > "0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"
   *
   * // Using an unlocked account managed by connected RPC client
   * web3.eth.sign("0x48656c6c6f20776f726c64", "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe", { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.UINT8ARRAY }).then(console.log);
   * > Uint8Array(65) [
   *    48, 117,  94, 214,  83, 150, 250, 207, 134, 197,  62,
   *    98,  23, 197,  43,  77, 174, 190, 114, 170,  73,  65,
   *   216, 150,  53,  64, 157, 228, 201, 199, 249,  70, 109,
   *    78, 154, 174, 199, 151, 127,   5, 233,  35, 136, 155,
   *    51, 192, 208, 221,  39, 215,  34, 107, 110, 111,  86,
   *   206, 115, 116, 101, 197, 207, 208,  75, 228,   0
   * ]
   * ```
   *
   * // Using an indexed account managed by local Web3 wallet
   * web3.eth.sign("0x48656c6c6f20776f726c64", 0).then(console.log);
   * > "0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"
   */
  sign(message_1, addressOrIndex_1) {
    return __awaiter27(this, arguments, void 0, function* (message, addressOrIndex, returnFormat = this.defaultReturnFormat) {
      return sign4(this, message, addressOrIndex, returnFormat);
    });
  }
  /**
   * @param transaction The transaction object to sign.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns {@link SignedTransactionInfoAPI}, an object containing the [RLP](https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp/#top) encoded signed transaction (accessed via the `raw` property) and the signed transaction object (accessed via the `tx` property).
   *
   * ```ts
   * const transaction = {
   *      from: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
   *      to: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
   *      value: '0x1',
   *      gas: '21000',
   *      gasPrice: await web3Eth.getGasPrice(),
   *      nonce: '0x1',
   *      type: '0x0'
   * }
   *
   * web3.eth.signTransaction(transaction).then(console.log);
   * > {
   *   raw: '0xf86501843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a96a0adb3468dbb4dce89fe1785ea9182e85fb56b399b378f82b93af7a8a12a4f9679a027d37d736e9bcf00121f78b2d10e4404fa5c45856d62b746574345f5cd278097',
   *   tx: {
   *      type: 0n,
   *      nonce: 1n,
   *      gasPrice: 1000000001n,
   *      gas: 21000n,
   *      value: 1n,
   *      v: 2710n,
   *      r: '0xadb3468dbb4dce89fe1785ea9182e85fb56b399b378f82b93af7a8a12a4f9679',
   *      s: '0x27d37d736e9bcf00121f78b2d10e4404fa5c45856d62b746574345f5cd278097',
   *      to: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
   *      data: '0x'
   *   }
   * }
   *
   * web3.eth.signTransaction(transaction, { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
   * > {
   *   raw: '0xf86501843b9aca0182520894e899f0130fd099c0b896b2ce4e5e15a25b23139a0180820a96a0adb3468dbb4dce89fe1785ea9182e85fb56b399b378f82b93af7a8a12a4f9679a027d37d736e9bcf00121f78b2d10e4404fa5c45856d62b746574345f5cd278097',
   *   tx: {
   *      type: 0,
   *      nonce: 1,
   *      gasPrice: 1000000001,
   *      gas: 21000,
   *      value: 1,
   *      v: 2710,
   *      r: '0xadb3468dbb4dce89fe1785ea9182e85fb56b399b378f82b93af7a8a12a4f9679',
   *      s: '0x27d37d736e9bcf00121f78b2d10e4404fa5c45856d62b746574345f5cd278097',
   *      to: '0xe899f0130fd099c0b896b2ce4e5e15a25b23139a',
   *      data: '0x'
   *   }
   * }
   * ```
   */
  signTransaction(transaction_1) {
    return __awaiter27(this, arguments, void 0, function* (transaction, returnFormat = this.defaultReturnFormat) {
      return signTransaction4(this, transaction, returnFormat);
    });
  }
  // TODO Decide what to do with transaction.to
  // https://github.com/ChainSafe/web3.js/pull/4525#issuecomment-982330076
  /**
   * Executes a message call within the EVM without creating a transaction.
   * It does not publish anything to the blockchain and does not consume any gas.
   *
   * @param transaction - A transaction object where all properties are optional except `to`, however it's recommended to include the `from` property or it may default to `0x0000000000000000000000000000000000000000` depending on your node or provider.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) - Specifies what block to use as the current state of the blockchain while processing the transaction.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns The returned data of the call, e.g. a smart contract function's return value.
   */
  call(transaction_1) {
    return __awaiter27(this, arguments, void 0, function* (transaction, blockNumber = this.defaultBlock, returnFormat = this.defaultReturnFormat) {
      return call2(this, transaction, blockNumber, returnFormat);
    });
  }
  /**
   * Simulates the transaction within the EVM to estimate the amount of gas to be used by the transaction.
   * The transaction will not be added to the blockchain, and actual gas usage can vary when interacting
   * with a contract as a result of updating the contract's state.
   *
   * @param transaction The {@link Transaction} object to estimate the gas for.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) - Specifies what block to use as the current state of the blockchain while processing the gas estimation.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns The used gas for the simulated transaction execution.
   *
   * ```ts
   * const transaction = {
   *       from: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
   *       to: '0xe899f0130FD099c0b896B2cE4E5E15A25b23139a',
   *       value: '0x1',
   *       nonce: '0x1',
   *       type: '0x0'
   * }
   *
   * web3.eth.estimateGas(transaction).then(console.log);
   * > 21000n
   *
   * web3.eth.estimateGas(transaction, { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
   * > 21000
   * ```
   */
  estimateGas(transaction_1) {
    return __awaiter27(this, arguments, void 0, function* (transaction, blockNumber = this.defaultBlock, returnFormat = this.defaultReturnFormat) {
      return estimateGas2(this, transaction, blockNumber, returnFormat);
    });
  }
  /**
   * Gets past logs, matching the provided `filter`.
   *
   * @param filter A {@link Filter} object containing the properties for the desired logs.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns {@link FilterResultsAPI}, an array of {@link Log} objects.
   *
   * ```ts
   * web3.eth.getPastLogs({
   *      address: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
   *      topics: ["0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"]
   *  }).then(console.log);
   * > [{
   *       data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
   *       topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
   *       logIndex: 0n,
   *       transactionIndex: 0n,
   *       transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
   *       blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
   *       blockNumber: 1234n,
   *       address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
   *   },
   *   {...}]
   *
   * web3.eth.getPastLogs(
   *     {
   *       address: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
   *       topics: ["0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"]
   *     },
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > [{
   *       data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
   *       topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
   *       logIndex: 0,
   *       transactionIndex: 0,
   *       transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
   *       blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
   *       blockNumber: 1234,
   *       address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
   *   },
   *   {...}]
   * ```
   */
  getPastLogs(filter_1) {
    return __awaiter27(this, arguments, void 0, function* (filter, returnFormat = this.defaultReturnFormat) {
      return getLogs2(this, filter, returnFormat);
    });
  }
  /**
   * Gets work for miners to mine on. Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target').
   *
   * @returns The mining work as an array of strings with the following structure:
   *
   * String 32 Bytes - at index 0: current block header pow-hash
   * String 32 Bytes - at index 1: the seed hash used for the DAG.
   * String 32 Bytes - at index 2: the boundary condition ('target'), 2^256 / difficulty.
   *
   * ```ts
   * web3.eth.getWork().then(console.log);
   * > [
   *     "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
   *     "0x5EED00000000000000000000000000005EED0000000000000000000000000000",
   *     "0xd1ff1c01710000000000000000000000d1ff1c01710000000000000000000000"
   * ]
   * ```
   */
  getWork() {
    return __awaiter27(this, void 0, void 0, function* () {
      return eth_rpc_methods_exports.getWork(this.requestManager);
    });
  }
  /**
   * Used for submitting a proof-of-work solution.
   *
   * @param nonce The nonce found (8 bytes).
   * @param hash  The header’s pow-hash (32 bytes).
   * @param digest The mix digest (32 bytes).
   * @returns Returns `true` if the provided solution is valid, otherwise `false`.
   *
   * ```ts
   * web3.eth.submitWork([
   *     "0x0000000000000001",
   *     "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
   *     "0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000"
   * ]).then(console.log);
   * > true
   * ```
   */
  submitWork(nonce, hash2, digest) {
    return __awaiter27(this, void 0, void 0, function* () {
      return eth_rpc_methods_exports.submitWork(this.requestManager, nonce, hash2, digest);
    });
  }
  // TODO - Format addresses
  /**
   * This method will request/enable the accounts from the current environment and for supporting [EIP 1102](https://eips.ethereum.org/EIPS/eip-1102)
   * This method will only work if you’re using the injected provider from a application like Metamask, Status or TrustWallet.
   * It doesn’t work if you’re connected to a node with a default Web3.js provider (WebsocketProvider, HttpProvider and IpcProvider).
   * For more information about the behavior of this method please read [EIP-1102](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1102.md): Opt-in account exposure.
   *
   * @returns An array of enabled accounts.
   *
   * ```ts
   * web3.eth.requestAccounts().then(console.log);
   * > ['0aae0B295369a9FD31d5F28D9Ec85E40f4cb692BAf', '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe']
   * ```
   */
  requestAccounts() {
    return __awaiter27(this, void 0, void 0, function* () {
      return eth_rpc_methods_exports.requestAccounts(this.requestManager);
    });
  }
  /**
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns The chain ID of the current connected node as described in the [EIP-695](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-695.md).
   *
   * ```ts
   * web3.eth.getChainId().then(console.log);
   * > 61n
   *
   * web3.eth.getChainId({ number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
   * > 61
   * ```
   */
  getChainId() {
    return __awaiter27(this, arguments, void 0, function* (returnFormat = this.defaultReturnFormat) {
      return getChainId2(this, returnFormat);
    });
  }
  /**
   * @returns The current client version.
   *
   * ```ts
   * web3.eth.getNodeInfo().then(console.log);
   * > "Mist/v0.9.3/darwin/go1.4.1"
   * ```
   */
  getNodeInfo() {
    return __awaiter27(this, void 0, void 0, function* () {
      return eth_rpc_methods_exports.getNodeInfo(this.requestManager);
    });
  }
  /**
   * @param address The Address of the account or contract.
   * @param storageKeys Array of storage-keys which should be proofed and included. See {@link web3.getStorageAt}.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) - Specifies what block to use as the current state of the blockchain while processing the gas estimation.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns The account and storage-values of the specified account including the Merkle-proof as described in [EIP-1186](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1186.md).
   *
   * ```ts
   * web3.eth.getProof(
   *     "0x1234567890123456789012345678901234567890",
   *     ["0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"],
   *     "latest"
   * ).then(console.log);
   * > {
   *     "address": "0x1234567890123456789012345678901234567890",
   *     "accountProof": [
   *         "0xf90211a090dcaf88c40c7bbc95a912cbdde67c175767b31173df9ee4b0d733bfdd511c43a0babe369f6b12092f49181ae04ca173fb68d1a5456f18d20fa32cba73954052bda0473ecf8a7e36a829e75039a3b055e51b8332cbf03324ab4af2066bbd6fbf0021a0bbda34753d7aa6c38e603f360244e8f59611921d9e1f128372fec0d586d4f9e0a04e44caecff45c9891f74f6a2156735886eedf6f1a733628ebc802ec79d844648a0a5f3f2f7542148c973977c8a1e154c4300fec92f755f7846f1b734d3ab1d90e7a0e823850f50bf72baae9d1733a36a444ab65d0a6faaba404f0583ce0ca4dad92da0f7a00cbe7d4b30b11faea3ae61b7f1f2b315b61d9f6bd68bfe587ad0eeceb721a07117ef9fc932f1a88e908eaead8565c19b5645dc9e5b1b6e841c5edbdfd71681a069eb2de283f32c11f859d7bcf93da23990d3e662935ed4d6b39ce3673ec84472a0203d26456312bbc4da5cd293b75b840fc5045e493d6f904d180823ec22bfed8ea09287b5c21f2254af4e64fca76acc5cd87399c7f1ede818db4326c98ce2dc2208a06fc2d754e304c48ce6a517753c62b1a9c1d5925b89707486d7fc08919e0a94eca07b1c54f15e299bd58bdfef9741538c7828b5d7d11a489f9c20d052b3471df475a051f9dd3739a927c89e357580a4c97b40234aa01ed3d5e0390dc982a7975880a0a089d613f26159af43616fd9455bb461f4869bfede26f2130835ed067a8b967bfb80",
   *         "0xf90211a0395d87a95873cd98c21cf1df9421af03f7247880a2554e20738eec2c7507a494a0bcf6546339a1e7e14eb8fb572a968d217d2a0d1f3bc4257b22ef5333e9e4433ca012ae12498af8b2752c99efce07f3feef8ec910493be749acd63822c3558e6671a0dbf51303afdc36fc0c2d68a9bb05dab4f4917e7531e4a37ab0a153472d1b86e2a0ae90b50f067d9a2244e3d975233c0a0558c39ee152969f6678790abf773a9621a01d65cd682cc1be7c5e38d8da5c942e0a73eeaef10f387340a40a106699d494c3a06163b53d956c55544390c13634ea9aa75309f4fd866f312586942daf0f60fb37a058a52c1e858b1382a8893eb9c1f111f266eb9e21e6137aff0dddea243a567000a037b4b100761e02de63ea5f1fcfcf43e81a372dafb4419d126342136d329b7a7ba032472415864b08f808ba4374092003c8d7c40a9f7f9fe9cc8291f62538e1cc14a074e238ff5ec96b810364515551344100138916594d6af966170ff326a092fab0a0d31ac4eef14a79845200a496662e92186ca8b55e29ed0f9f59dbc6b521b116fea090607784fe738458b63c1942bba7c0321ae77e18df4961b2bc66727ea996464ea078f757653c1b63f72aff3dcc3f2a2e4c8cb4a9d36d1117c742833c84e20de994a0f78407de07f4b4cb4f899dfb95eedeb4049aeb5fc1635d65cf2f2f4dfd25d1d7a0862037513ba9d45354dd3e36264aceb2b862ac79d2050f14c95657e43a51b85c80",
   *         "0xf90171a04ad705ea7bf04339fa36b124fa221379bd5a38ffe9a6112cb2d94be3a437b879a08e45b5f72e8149c01efcb71429841d6a8879d4bbe27335604a5bff8dfdf85dcea00313d9b2f7c03733d6549ea3b810e5262ed844ea12f70993d87d3e0f04e3979ea0b59e3cdd6750fa8b15164612a5cb6567cdfb386d4e0137fccee5f35ab55d0efda0fe6db56e42f2057a071c980a778d9a0b61038f269dd74a0e90155b3f40f14364a08538587f2378a0849f9608942cf481da4120c360f8391bbcc225d811823c6432a026eac94e755534e16f9552e73025d6d9c30d1d7682a4cb5bd7741ddabfd48c50a041557da9a74ca68da793e743e81e2029b2835e1cc16e9e25bd0c1e89d4ccad6980a041dda0a40a21ade3a20fcd1a4abb2a42b74e9a32b02424ff8db4ea708a5e0fb9a09aaf8326a51f613607a8685f57458329b41e938bb761131a5747e066b81a0a16808080a022e6cef138e16d2272ef58434ddf49260dc1de1f8ad6dfca3da5d2a92aaaadc58080",
   *         "0xf851808080a009833150c367df138f1538689984b8a84fc55692d3d41fe4d1e5720ff5483a6980808080808080808080a0a319c1c415b271afc0adcb664e67738d103ac168e0bc0b7bd2da7966165cb9518080"
   *     ],
   *     "balance": 0n,
   *     "codeHash": "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
   *     "nonce": 0n,
   *     "storageHash": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
   *     "storageProof": [
   *         {
   *             "key": "0x0000000000000000000000000000000000000000000000000000000000000000",
   *             "value": 0n,
   *             "proof": []
   *         },
   *         {
   *             "key": "0x0000000000000000000000000000000000000000000000000000000000000001",
   *             "value": 0n,
   *             "proof": []
   *         }
   *     ]
   * }
   *
   * web3.eth.getProof(
   *     "0x1234567890123456789012345678901234567890",
   *     ["0x0000000000000000000000000000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000000000000000000000000001"],
   *     undefined,
   *     { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }
   * ).then(console.log);
   * > {
   *     "address": "0x1234567890123456789012345678901234567890",
   *     "accountProof": [
   *         "0xf90211a090dcaf88c40c7bbc95a912cbdde67c175767b31173df9ee4b0d733bfdd511c43a0babe369f6b12092f49181ae04ca173fb68d1a5456f18d20fa32cba73954052bda0473ecf8a7e36a829e75039a3b055e51b8332cbf03324ab4af2066bbd6fbf0021a0bbda34753d7aa6c38e603f360244e8f59611921d9e1f128372fec0d586d4f9e0a04e44caecff45c9891f74f6a2156735886eedf6f1a733628ebc802ec79d844648a0a5f3f2f7542148c973977c8a1e154c4300fec92f755f7846f1b734d3ab1d90e7a0e823850f50bf72baae9d1733a36a444ab65d0a6faaba404f0583ce0ca4dad92da0f7a00cbe7d4b30b11faea3ae61b7f1f2b315b61d9f6bd68bfe587ad0eeceb721a07117ef9fc932f1a88e908eaead8565c19b5645dc9e5b1b6e841c5edbdfd71681a069eb2de283f32c11f859d7bcf93da23990d3e662935ed4d6b39ce3673ec84472a0203d26456312bbc4da5cd293b75b840fc5045e493d6f904d180823ec22bfed8ea09287b5c21f2254af4e64fca76acc5cd87399c7f1ede818db4326c98ce2dc2208a06fc2d754e304c48ce6a517753c62b1a9c1d5925b89707486d7fc08919e0a94eca07b1c54f15e299bd58bdfef9741538c7828b5d7d11a489f9c20d052b3471df475a051f9dd3739a927c89e357580a4c97b40234aa01ed3d5e0390dc982a7975880a0a089d613f26159af43616fd9455bb461f4869bfede26f2130835ed067a8b967bfb80",
   *         "0xf90211a0395d87a95873cd98c21cf1df9421af03f7247880a2554e20738eec2c7507a494a0bcf6546339a1e7e14eb8fb572a968d217d2a0d1f3bc4257b22ef5333e9e4433ca012ae12498af8b2752c99efce07f3feef8ec910493be749acd63822c3558e6671a0dbf51303afdc36fc0c2d68a9bb05dab4f4917e7531e4a37ab0a153472d1b86e2a0ae90b50f067d9a2244e3d975233c0a0558c39ee152969f6678790abf773a9621a01d65cd682cc1be7c5e38d8da5c942e0a73eeaef10f387340a40a106699d494c3a06163b53d956c55544390c13634ea9aa75309f4fd866f312586942daf0f60fb37a058a52c1e858b1382a8893eb9c1f111f266eb9e21e6137aff0dddea243a567000a037b4b100761e02de63ea5f1fcfcf43e81a372dafb4419d126342136d329b7a7ba032472415864b08f808ba4374092003c8d7c40a9f7f9fe9cc8291f62538e1cc14a074e238ff5ec96b810364515551344100138916594d6af966170ff326a092fab0a0d31ac4eef14a79845200a496662e92186ca8b55e29ed0f9f59dbc6b521b116fea090607784fe738458b63c1942bba7c0321ae77e18df4961b2bc66727ea996464ea078f757653c1b63f72aff3dcc3f2a2e4c8cb4a9d36d1117c742833c84e20de994a0f78407de07f4b4cb4f899dfb95eedeb4049aeb5fc1635d65cf2f2f4dfd25d1d7a0862037513ba9d45354dd3e36264aceb2b862ac79d2050f14c95657e43a51b85c80",
   *         "0xf90171a04ad705ea7bf04339fa36b124fa221379bd5a38ffe9a6112cb2d94be3a437b879a08e45b5f72e8149c01efcb71429841d6a8879d4bbe27335604a5bff8dfdf85dcea00313d9b2f7c03733d6549ea3b810e5262ed844ea12f70993d87d3e0f04e3979ea0b59e3cdd6750fa8b15164612a5cb6567cdfb386d4e0137fccee5f35ab55d0efda0fe6db56e42f2057a071c980a778d9a0b61038f269dd74a0e90155b3f40f14364a08538587f2378a0849f9608942cf481da4120c360f8391bbcc225d811823c6432a026eac94e755534e16f9552e73025d6d9c30d1d7682a4cb5bd7741ddabfd48c50a041557da9a74ca68da793e743e81e2029b2835e1cc16e9e25bd0c1e89d4ccad6980a041dda0a40a21ade3a20fcd1a4abb2a42b74e9a32b02424ff8db4ea708a5e0fb9a09aaf8326a51f613607a8685f57458329b41e938bb761131a5747e066b81a0a16808080a022e6cef138e16d2272ef58434ddf49260dc1de1f8ad6dfca3da5d2a92aaaadc58080",
   *         "0xf851808080a009833150c367df138f1538689984b8a84fc55692d3d41fe4d1e5720ff5483a6980808080808080808080a0a319c1c415b271afc0adcb664e67738d103ac168e0bc0b7bd2da7966165cb9518080"
   *     ],
   *     "balance": 0,
   *     "codeHash": "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
   *     "nonce": 0,
   *     "storageHash": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
   *     "storageProof": [
   *         {
   *             "key": "0x0000000000000000000000000000000000000000000000000000000000000000",
   *             "value": 0,
   *             "proof": []
   *         },
   *         {
   *             "key": "0x0000000000000000000000000000000000000000000000000000000000000001",
   *             "value": 0,
   *             "proof": []
   *         }
   *     ]
   * }
   * ```
   */
  getProof(address_1, storageKeys_1) {
    return __awaiter27(this, arguments, void 0, function* (address, storageKeys, blockNumber = this.defaultBlock, returnFormat = this.defaultReturnFormat) {
      return getProof2(this, address, storageKeys, blockNumber, returnFormat);
    });
  }
  // TODO Throwing an error with Geth, but not Infura
  // TODO gasUsedRatio and reward not formatting
  /**
   * @param blockCount Number of blocks in the requested range. Between `1` and `1024` blocks can be requested in a single query. Less than requested may be returned if not all blocks are available.
   * @param newestBlock Highest number block of the requested range.
   * @param rewardPercentiles A monotonically increasing list of percentile values to sample from each block’s effective priority fees per gas in ascending order, weighted by gas used. Example: `['0', '25', '50', '75', '100']` or `['0', '0.5', '1', '1.5', '3', '80']`
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns `baseFeePerGas` and transaction effective `priorityFeePerGas` history for the requested block range if available.
   * The range between `headBlock - 4` and `headBlock` is guaranteed to be available while retrieving data from the `pending` block and older history are optional to support.
   * For pre-EIP-1559 blocks the `gasPrice`s are returned as `rewards` and zeroes are returned for the `baseFeePerGas`.
   *
   * ```ts
   * web3.eth.getFeeHistory(4, 'pending', [0, 25, 75, 100]).then(console.log);
   * > {
   *     baseFeePerGas: [
   *         22983878621n,
   *         21417903463n,
   *         19989260230n,
   *         17770954829n,
   *         18850641304n
   *     ],
   *     gasUsedRatio: [
   *         0.22746546666666667,
   *         0.2331871,
   *         0.05610054885262125,
   *         0.7430227268212117
   *     ],
   *     oldestBlock: 15216343n,
   *     reward: [
   *         [ '0x3b9aca00', '0x53724e00', '0x77359400', '0x1d92c03423' ],
   *         [ '0x3b9aca00', '0x3b9aca00', '0x3b9aca00', '0xee6b2800' ],
   *         [ '0x3b9aca00', '0x4f86a721', '0x77d9743a', '0x9502f900' ],
   *         [ '0xcc8ff9e', '0x53724e00', '0x77359400', '0x1ec9771bb3' ]
   *     ]
   * }
   *
   * web3.eth.getFeeHistory(4, BlockTags.LATEST, [0, 25, 75, 100], { number: FMT_NUMBER.NUMBER , bytes: FMT_BYTES.HEX }).then(console.log);
   * > {
   *     baseFeePerGas: [
   *         22983878621,
   *         21417903463,
   *         19989260230,
   *         17770954829,
   *         18850641304
   *     ],
   *     gasUsedRatio: [
   *         0.22746546666666667,
   *         0.2331871,
   *         0.05610054885262125,
   *         0.7430227268212117
   *     ],
   *     oldestBlock: 15216343,
   *     reward: [
   *         [ '0x3b9aca00', '0x53724e00', '0x77359400', '0x1d92c03423' ],
   *         [ '0x3b9aca00', '0x3b9aca00', '0x3b9aca00', '0xee6b2800' ],
   *         [ '0x3b9aca00', '0x4f86a721', '0x77d9743a', '0x9502f900' ],
   *         [ '0xcc8ff9e', '0x53724e00', '0x77359400', '0x1ec9771bb3' ]
   *     ]
   * }
   * ```
   */
  getFeeHistory(blockCount_1) {
    return __awaiter27(this, arguments, void 0, function* (blockCount, newestBlock = this.defaultBlock, rewardPercentiles, returnFormat = this.defaultReturnFormat) {
      return getFeeHistory2(this, blockCount, newestBlock, rewardPercentiles, returnFormat);
    });
  }
  /**
   * This method generates an access list for a transaction.
   *
   * @param transaction - A transaction object where all properties are optional except `from`, however it's recommended to include the `to` property.
   * @param blockNumber ({@link BlockNumberOrTag} defaults to {@link Web3Eth.defaultBlock}) - Specifies what block to use as the current state of the blockchain while processing the transaction.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the createAccessList should be formatted.
   * @returns The returned data of the createAccessList,  e.g. The generated access list for transaction.
   * @example
   * ```ts
   * web3.eth.createAccessList({
   * from: '0xDe95305a63302C3aa4d3A9B42654659AeA72b694',
   * data: '0x9a67c8b100000000000000000000000000000000000000000000000000000000000004d0',
   * gasPrice: '0x3b9aca00',
   * gas: '0x3d0900',
   * to: '0x940b25304947ae863568B3804434EC77E2160b87'
   * })
   * .then(console.log);
   *
   * > {
   *  "accessList": [
   *     {
   *       "address": "0x15859bdf5aff2080a9968f6a410361e9598df62f",
   *       "storageKeys": [
   *         "0x0000000000000000000000000000000000000000000000000000000000000000"
   *       ]
   *     }
   *   ],
   *   "gasUsed": "0x7671"
   * }
   * ```
   */
  createAccessList(transaction_1) {
    return __awaiter27(this, arguments, void 0, function* (transaction, blockNumber = this.defaultBlock, returnFormat = this.defaultReturnFormat) {
      return createAccessList2(this, transaction, blockNumber, returnFormat);
    });
  }
  /**
   * This method sends EIP-712 typed data to the RPC provider to be signed.
   *
   * @param address The address that corresponds with the private key used to sign the typed data.
   * @param typedData The EIP-712 typed data object.
   * @param useLegacy A boolean flag determining whether the RPC call uses the legacy method `eth_signTypedData` or the newer method `eth_signTypedData_v4`
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the signed typed data should be formatted.
   * @returns The signed typed data.
   */
  signTypedData(address, typedData, useLegacy, returnFormat) {
    return __awaiter27(this, void 0, void 0, function* () {
      var _a3;
      if (useLegacy === void 0) {
        useLegacy = false;
      }
      if (returnFormat === void 0) {
        returnFormat = (_a3 = this.defaultReturnFormat) !== null && _a3 !== void 0 ? _a3 : DEFAULT_RETURN_FORMAT;
      }
      return signTypedData2(this, address, typedData, useLegacy, returnFormat);
    });
  }
  /**
   * Lets you subscribe to specific events in the blockchain.
   *
   * @param name - The subscription you want to subscribe to.
   * @param args - Optional additional parameters, depending on the subscription type.
   * @returns A subscription object of type {@link RegisteredSubscription}. The object contains:
   *  - subscription.id: The subscription id, used to identify and unsubscribing the subscription.
   *  - subscription.subscribe(): Can be used to re-subscribe with the same parameters.
   *  - subscription.unsubscribe(): Unsubscribes the subscription and returns TRUE in the callback if successful.
   *  - subscription.args: The subscription arguments, used when re-subscribing.
   *
   *
   * You can use the subscription object to listen on:
   *
   * - on("data") - Fires on each incoming log with the log object as argument.
   * - on("changed") - Fires on each log which was removed from the blockchain. The log will have the additional property "removed: true".
   * - on("error") - Fires when an error in the subscription occurs.
   * - on("connected") - Fires once after the subscription successfully connected. Returns the subscription id.
   *
   * @example **Subscribe to Smart Contract events**
   * ```ts
   * // Subscribe to `logs`
   * const logSubscription = web3.eth.subscribe('logs', {
   *     address: '0x1234567890123456789012345678901234567890',
   *     topics: ['0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234']
   * });
   * logSubscription.on('data', (data: any) => console.log(data));
   * logSubscription.on('error', (error: any) => console.log(error));
   *
   * ```
   *
   * @example **Subscribe to new block headers**
   * ```ts
   * // Subscribe to `newBlockHeaders`
   * const newBlocksSubscription = await web3.eth.subscribe('newBlockHeaders');
   *
   * newBlocksSubscription.on('data', async blockhead => {
   * 	console.log('New block header: ', blockhead);
   *
   * 	// You do not need the next line, if you like to keep notified for every new block
   * 	await newBlocksSubscription.unsubscribe();
   * 	console.log('Unsubscribed from new block headers.');
   * });
   * newBlocksSubscription.on('error', error =>
   * 	console.log('Error when subscribing to New block header: ', error),
   * );
   * ```
   *
   * 	### subscribe('pendingTransactions')
   *
   * Subscribes to incoming pending transactions.
   * You can subscribe to pending transactions by calling web3.eth.subscribe('pendingTransactions').
   *
   * ```ts
   * (await web3.eth.subscribe('pendingTransactions')).on('data', console.log);
   * ```
   *
   * ### subscribe('newHeads')
   * ( same as subscribe('newBlockHeaders'))
   * Subscribes to incoming block headers. This can be used as timer to check for changes on the blockchain.
   *
   * The structure of a returned block header is {@link BlockHeaderOutput}:
   *
   * ```ts
   * (await web3.eth.subscribe('newHeads')).on( // 'newBlockHeaders' would work as well
   *  'data',
   * console.log
   * );
   * >{
   * parentHash: '0x9e746a1d906b299def98c75b06f714d62dacadd567c7515d76eeaa8c8074c738',
   * sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
   * miner: '0x0000000000000000000000000000000000000000',
   * stateRoot: '0xe0f04b04861ecfa95e82a9310d6a7ef7aef8d7417f5209c182582bfb98a8e307',
   * transactionsRoot: '0x31ab4ea571a9e10d3a19aaed07d190595b1dfa34e03960c04293fec565dea536',
   * logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
   * difficulty: 2n,
   * number: 21n,
   * gasLimit: 11738125n,
   * gasUsed: 830006n,
   * timestamp: 1678797237n,
   * extraData: '0xd883010b02846765746888676f312e32302e31856c696e757800000000000000e0a6e93cf40e2e71a72e493272210c3f43738ccc7e7d7b14ffd51833797d896c09117e8dc4fbcbc969bd21b42e5af3e276a911524038c001b2109b63b8e0352601',
   * nonce: 0n
   * }
   * ```
   *
   * ### subscribe('syncing')
   * Subscribe to syncing events. This will return `true` when the node is syncing and when it’s finished syncing will return `false`, for the `changed` event.
   *
   * ```ts
   * (await web3.eth.subscribe('syncing')).on('changed', console.log);
   * > `true` // when syncing
   *
   * (await web3.eth.subscribe('syncing')).on('data', console.log);
   * > {
   *      startingBlock: 0,
   *      currentBlock: 0,
   *      highestBlock: 0,
   *      pulledStates: 0,
   *      knownStates: 0
   *   }
   * ```
   *
   * ### subscribe('logs', options)
   * Subscribes to incoming logs, filtered by the given options. If a valid numerical fromBlock options property is set, web3.js will retrieve logs beginning from this point, backfilling the response as necessary.
   *
   * options: You can subscribe to logs matching a given filter object, which can take the following parameters:
   * - `fromBlock`: (optional, default: 'latest') Integer block number, or `'latest'` for the last mined block or `'pending'`, `'earliest'` for not yet mined transactions.
   * - `address`: (optional) Contract address or a list of addresses from which logs should originate.
   * - `topics`: (optional) Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with `or` options.
   *
   * ```ts
   *  (await web3.eth.subscribe('logs', {
   *    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
   *   })).on('data', console.log);
   *
   * > {
   * removed: false,
   * logIndex: 119n,
   * transactionIndex: 58n,
   * transactionHash: '0x61533efa77937360215069d5d6cb0be09a22af9721e6dc3df59d957833ed8870',
   * blockHash: '0xe32bb97084479d32247f66f8b46d00af2fbc3c2db2bc6e5843fe2e4d1ca9b099',
   * blockNumber: 18771966n,
   * address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
   * data: '0x00000000000000000000000000000000000000000000000000000000d88b2e40',
   * topics: [
   * '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
   * '0x0000000000000000000000002fb2457f6ec1865dc0d4e7300c696b69c2a1b989',
   * '0x00000000000000000000000027fd43babfbe83a81d14665b1a6fb8030a60c9b4'
   * ]
   * }
   *```
   */
  subscribe(name2, args, returnFormat) {
    return __awaiter27(this, void 0, void 0, function* () {
      var _a3, _b;
      if (returnFormat === void 0) {
        returnFormat = (_a3 = this.defaultReturnFormat) !== null && _a3 !== void 0 ? _a3 : DEFAULT_RETURN_FORMAT;
      }
      const subscription = yield (_b = this.subscriptionManager) === null || _b === void 0 ? void 0 : _b.subscribe(name2, args, returnFormat);
      if (subscription instanceof LogsSubscription && name2 === "logs" && typeof args === "object" && !isNullish2(args.fromBlock) && Number.isFinite(Number(args.fromBlock))) {
        setImmediate(() => {
          this.getPastLogs(args).then((logs) => {
            for (const log of logs) {
              subscription._processSubscriptionResult(log);
            }
          }).catch((e) => {
            subscription._processSubscriptionError(e);
          });
        });
      }
      return subscription;
    });
  }
  static shouldClearSubscription({ sub }) {
    return !(sub instanceof SyncingSubscription);
  }
  /**
   * Resets subscriptions.
   *
   * @param notClearSyncing If `true` it keeps the `syncing` subscription.
   * @returns A promise to an array of subscription ids that were cleared.
   *
   * ```ts
   * web3.eth.clearSubscriptions().then(console.log);
   * > [...] An array of subscription ids that were cleared
   * ```
   */
  clearSubscriptions(notClearSyncing = false) {
    var _a3;
    return (_a3 = this.subscriptionManager) === null || _a3 === void 0 ? void 0 : _a3.unsubscribe(
      // eslint-disable-next-line
      notClearSyncing ? _Web3Eth.shouldClearSubscription : void 0
    );
  }
  /**
   * Creates a filter in the node, to notify when new pending transactions arrive. To check if the state has changed.
   *
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns A filter id.
   *
   * ```ts
   * web3.eth.createNewPendingTransactionFilter().then(console.log);
   * > 1n
   *
   * web3.eth.createNewPendingTransactionFilter({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0x1"
   * ```
   */
  createNewPendingTransactionFilter() {
    return __awaiter27(this, arguments, void 0, function* (returnFormat = this.defaultReturnFormat) {
      return createNewPendingTransactionFilter(this, returnFormat);
    });
  }
  /**
   * Creates a filter object, based on filter options, to notify when the state changes (logs)
   *
   * @param filter A {@link FilterParams} object containing the filter properties.
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns A filter id.
   *
   * ```ts
   * web3.eth.createNewFilter(filterParams).then(console.log);
   * > 1n
   *
   * web3.eth.createNewFilter(filterParams, { number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0x1"
   * ```
   */
  createNewFilter(filter_1) {
    return __awaiter27(this, arguments, void 0, function* (filter, returnFormat = this.defaultReturnFormat) {
      return createNewFilter(this, filter, returnFormat);
    });
  }
  /**
   * Creates a filter in the node, to notify when a new block arrives.
   *
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) Specifies how the return data should be formatted.
   * @returns A filter id.
   *
   * ```ts
   * web3.eth.createNewBlockFilter().then(console.log);
   * > 1n
   *
   * web3.eth.createNewBlockFilter({ number: FMT_NUMBER.HEX , bytes: FMT_BYTES.HEX }).then(console.log);
   * > "0x1"
   * ```
   */
  createNewBlockFilter() {
    return __awaiter27(this, arguments, void 0, function* (returnFormat = this.defaultReturnFormat) {
      return createNewBlockFilter(this, returnFormat);
    });
  }
  /**
   * Uninstalls a filter with given id. Should always be called when watch is no longer needed.
   *
   * @param filterIdentifier ({@link Numbers} filter id
   * @returns true if the filter was successfully uninstalled, otherwise false.
   *
   * ```ts
   * web3.eth.uninstallFilter(123).then(console.log);
   * > true
   *
   * web3.eth.uninstallFilter('0x123').then(console.log);
   * > true
   *
   * web3.eth.uninstallFilter(12n).then(console.log);
   * > true
   * ```
   */
  uninstallFilter(filterIdentifier) {
    return __awaiter27(this, void 0, void 0, function* () {
      return uninstallFilter2(this, filterIdentifier);
    });
  }
  /**
   *  Polling method for a filter, which returns an array of logs which occurred since last poll.
   *
   * @param filterIdentifier ({@link Numbers} filter id
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns {@link FilterResultsAPI}, an array of {@link Log} objects.
   *
   * ```ts
   * web3.eth.getFilterChanges(123).then(console.log);
   * > [{
   *       data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
   *       topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
   *       logIndex: 0n,
   *       transactionIndex: 0n,
   *       transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
   *       blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
   *       blockNumber: 1234n,
   *       address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
   *   },
   *   {...}]
   */
  getFilterChanges(filterIdentifier_1) {
    return __awaiter27(this, arguments, void 0, function* (filterIdentifier, returnFormat = this.defaultReturnFormat) {
      return getFilterChanges2(this, filterIdentifier, returnFormat);
    });
  }
  /**
   *  Returns an array of all logs matching filter with given id.
   *
   * @param filterIdentifier ({@link Numbers} filter id
   * @param returnFormat ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   * @returns {@link FilterResultsAPI}, an array of {@link Log} objects.
   *
   * ```ts
   * web3.eth.getFilterLogs(123).then(console.log);
   * > [{
   *       data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
   *       topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
   *       logIndex: 0n,
   *       transactionIndex: 0n,
   *       transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
   *       blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
   *       blockNumber: 1234n,
   *       address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
   *   },
   *   {...}]
   */
  getFilterLogs(filterIdentifier_1) {
    return __awaiter27(this, arguments, void 0, function* (filterIdentifier, returnFormat = this.defaultReturnFormat) {
      return getFilterLogs2(this, filterIdentifier, returnFormat);
    });
  }
};

// node_modules/web3-eth/lib/esm/validation.js
function isBaseTransaction(value) {
  if (!isNullish(value.to) && !isAddress(value.to))
    return false;
  if (!isHexStrict(value.type) && !isNullish(value.type) && value.type.length !== 2)
    return false;
  if (!isHexStrict(value.nonce))
    return false;
  if (!isHexStrict(value.gas))
    return false;
  if (!isHexStrict(value.value))
    return false;
  if (!isHexStrict(value.input))
    return false;
  if (value.chainId && !isHexStrict(value.chainId))
    return false;
  return true;
}
function isAccessListEntry(value) {
  if (!isNullish(value.address) && !isAddress(value.address))
    return false;
  if (!isNullish(value.storageKeys) && !value.storageKeys.every((storageKey) => isHexString32Bytes(storageKey)))
    return false;
  return true;
}
function isAccessList2(value) {
  if (!Array.isArray(value) || !value.every((accessListEntry) => isAccessListEntry(accessListEntry)))
    return false;
  return true;
}
function isTransaction1559Unsigned(value) {
  if (!isBaseTransaction(value))
    return false;
  if (!isHexStrict(value.maxFeePerGas))
    return false;
  if (!isHexStrict(value.maxPriorityFeePerGas))
    return false;
  if (!isAccessList2(value.accessList))
    return false;
  return true;
}
function isTransaction2930Unsigned(value) {
  if (!isBaseTransaction(value))
    return false;
  if (!isHexStrict(value.gasPrice))
    return false;
  if (!isAccessList2(value.accessList))
    return false;
  return true;
}
function isTransactionLegacyUnsigned(value) {
  if (!isBaseTransaction(value))
    return false;
  if (!isHexStrict(value.gasPrice))
    return false;
  return true;
}
function isTransactionWithSender(value) {
  if (!isAddress(value.from))
    return false;
  if (!isBaseTransaction(value))
    return false;
  if (!isTransaction1559Unsigned(value) && !isTransaction2930Unsigned(value) && !isTransactionLegacyUnsigned(value))
    return false;
  return true;
}
function validateTransactionWithSender(value) {
  if (!isTransactionWithSender(value))
    throw new InvalidTransactionWithSender(value);
}
function isTransactionCall(value) {
  if (!isNullish(value.from) && !isAddress(value.from))
    return false;
  if (!isAddress(value.to))
    return false;
  if (!isNullish(value.gas) && !isHexStrict(value.gas))
    return false;
  if (!isNullish(value.gasPrice) && !isHexStrict(value.gasPrice))
    return false;
  if (!isNullish(value.value) && !isHexStrict(value.value))
    return false;
  if (!isNullish(value.data) && !isHexStrict(value.data))
    return false;
  if (!isNullish(value.input) && !isHexStrict(value.input))
    return false;
  if (!isNullish(value.type))
    return false;
  if (isTransaction1559Unsigned(value))
    return false;
  if (isTransaction2930Unsigned(value))
    return false;
  return true;
}
function validateTransactionCall(value) {
  if (!isTransactionCall(value))
    throw new InvalidTransactionCall(value);
}
var validateCustomChainInfo = (transaction) => {
  if (!isNullish(transaction.common)) {
    if (isNullish(transaction.common.customChain))
      throw new MissingCustomChainError();
    if (isNullish(transaction.common.customChain.chainId))
      throw new MissingCustomChainIdError();
    if (!isNullish(transaction.chainId) && transaction.chainId !== transaction.common.customChain.chainId)
      throw new ChainIdMismatchError({
        txChainId: transaction.chainId,
        customChainId: transaction.common.customChain.chainId
      });
  }
};
var validateChainInfo = (transaction) => {
  if (!isNullish(transaction.common) && !isNullish(transaction.chain) && !isNullish(transaction.hardfork)) {
    throw new CommonOrChainAndHardforkError();
  }
  if (!isNullish(transaction.chain) && isNullish(transaction.hardfork) || !isNullish(transaction.hardfork) && isNullish(transaction.chain))
    throw new MissingChainOrHardforkError({
      chain: transaction.chain,
      hardfork: transaction.hardfork
    });
};
var validateBaseChain = (transaction) => {
  if (!isNullish(transaction.common)) {
    if (!isNullish(transaction.common.baseChain)) {
      if (!isNullish(transaction.chain) && transaction.chain !== transaction.common.baseChain) {
        throw new ChainMismatchError({
          txChain: transaction.chain,
          baseChain: transaction.common.baseChain
        });
      }
    }
  }
};
var validateHardfork = (transaction) => {
  if (!isNullish(transaction.common)) {
    if (!isNullish(transaction.common.hardfork)) {
      if (!isNullish(transaction.hardfork) && transaction.hardfork !== transaction.common.hardfork) {
        throw new HardforkMismatchError({
          txHardfork: transaction.hardfork,
          commonHardfork: transaction.common.hardfork
        });
      }
    }
  }
};
var validateLegacyGas = (transaction) => {
  if (
    // This check is verifying gas and gasPrice aren't less than 0.
    isNullish(transaction.gas) || !isUInt(transaction.gas) || isNullish(transaction.gasPrice) || !isUInt(transaction.gasPrice)
  )
    throw new InvalidGasOrGasPrice({
      gas: transaction.gas,
      gasPrice: transaction.gasPrice
    });
  if (!isNullish(transaction.maxFeePerGas) || !isNullish(transaction.maxPriorityFeePerGas))
    throw new UnsupportedFeeMarketError({
      maxFeePerGas: transaction.maxFeePerGas,
      maxPriorityFeePerGas: transaction.maxPriorityFeePerGas
    });
};
var validateFeeMarketGas = (transaction) => {
  if (!isNullish(transaction.gasPrice) && transaction.type === "0x2")
    throw new Eip1559GasPriceError(transaction.gasPrice);
  if (transaction.type === "0x0" || transaction.type === "0x1")
    throw new UnsupportedFeeMarketError({
      maxFeePerGas: transaction.maxFeePerGas,
      maxPriorityFeePerGas: transaction.maxPriorityFeePerGas
    });
  if (isNullish(transaction.maxFeePerGas) || !isUInt(transaction.maxFeePerGas) || isNullish(transaction.maxPriorityFeePerGas) || !isUInt(transaction.maxPriorityFeePerGas))
    throw new InvalidMaxPriorityFeePerGasOrMaxFeePerGas({
      maxPriorityFeePerGas: transaction.maxPriorityFeePerGas,
      maxFeePerGas: transaction.maxFeePerGas
    });
};
var validateGas = (transaction) => {
  const gasPresent = !isNullish(transaction.gas) || !isNullish(transaction.gasLimit);
  const legacyGasPresent = gasPresent && !isNullish(transaction.gasPrice);
  const feeMarketGasPresent = gasPresent && !isNullish(transaction.maxPriorityFeePerGas) && !isNullish(transaction.maxFeePerGas);
  if (!legacyGasPresent && !feeMarketGasPresent)
    throw new MissingGasError({
      gas: transaction.gas,
      gasPrice: transaction.gasPrice,
      maxPriorityFeePerGas: transaction.maxPriorityFeePerGas,
      maxFeePerGas: transaction.maxFeePerGas
    });
  if (legacyGasPresent && feeMarketGasPresent)
    throw new TransactionGasMismatchError({
      gas: transaction.gas,
      gasPrice: transaction.gasPrice,
      maxPriorityFeePerGas: transaction.maxPriorityFeePerGas,
      maxFeePerGas: transaction.maxFeePerGas
    });
  (legacyGasPresent ? validateLegacyGas : validateFeeMarketGas)(transaction);
  (!isNullish(transaction.type) && transaction.type > "0x1" ? validateFeeMarketGas : validateLegacyGas)(transaction);
};
var validateTransactionForSigning = (transaction, overrideMethod, options = { transactionSchema: void 0 }) => {
  if (!isNullish(overrideMethod)) {
    overrideMethod(transaction);
    return;
  }
  if (typeof transaction !== "object" || isNullish(transaction))
    throw new InvalidTransactionObjectError(transaction);
  validateCustomChainInfo(transaction);
  validateChainInfo(transaction);
  validateBaseChain(transaction);
  validateHardfork(transaction);
  const formattedTransaction = formatTransaction(transaction, ETH_DATA_FORMAT, {
    transactionSchema: options.transactionSchema
  });
  validateGas(formattedTransaction);
  if (isNullish(formattedTransaction.nonce) || isNullish(formattedTransaction.chainId) || formattedTransaction.nonce.startsWith("-") || formattedTransaction.chainId.startsWith("-"))
    throw new InvalidNonceOrChainIdError({
      nonce: transaction.nonce,
      chainId: transaction.chainId
    });
};

// node_modules/web3-eth/lib/esm/utils/prepare_transaction_for_signing.js
var __awaiter28 = function(thisArg, _arguments, P, generator) {
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
var getEthereumjsTxDataFromTransaction = (transaction) => {
  var _a3, _b;
  return Object.assign(Object.assign({}, transaction), { nonce: transaction.nonce, gasPrice: transaction.gasPrice, gasLimit: (_a3 = transaction.gasLimit) !== null && _a3 !== void 0 ? _a3 : transaction.gas, to: transaction.to, value: transaction.value, data: (_b = transaction.data) !== null && _b !== void 0 ? _b : transaction.input, type: transaction.type, chainId: transaction.chainId, accessList: transaction.accessList, maxPriorityFeePerGas: transaction.maxPriorityFeePerGas, maxFeePerGas: transaction.maxFeePerGas });
};
var getEthereumjsTransactionOptions = (transaction, web3Context) => {
  var _a3, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
  const hasTransactionSigningOptions = !isNullish(transaction.chain) && !isNullish(transaction.hardfork) || !isNullish(transaction.common);
  let common;
  if (!hasTransactionSigningOptions) {
    if (web3Context.defaultCommon) {
      common = Object.assign({}, web3Context.defaultCommon);
      if (isNullish(common.hardfork))
        common.hardfork = (_a3 = transaction.hardfork) !== null && _a3 !== void 0 ? _a3 : web3Context.defaultHardfork;
      if (isNullish(common.baseChain))
        common.baseChain = web3Context.defaultChain;
    } else {
      common = Common.custom({
        name: "custom-network",
        chainId: toNumber(transaction.chainId),
        networkId: !isNullish(transaction.networkId) ? toNumber(transaction.networkId) : void 0,
        defaultHardfork: (_b = transaction.hardfork) !== null && _b !== void 0 ? _b : web3Context.defaultHardfork
      }, {
        baseChain: web3Context.defaultChain
      });
    }
  } else {
    const name2 = (_f = (_e = (_d = (_c = transaction === null || transaction === void 0 ? void 0 : transaction.common) === null || _c === void 0 ? void 0 : _c.customChain) === null || _d === void 0 ? void 0 : _d.name) !== null && _e !== void 0 ? _e : transaction.chain) !== null && _f !== void 0 ? _f : "custom-network";
    const chainId = toNumber((_j = (_h = (_g = transaction === null || transaction === void 0 ? void 0 : transaction.common) === null || _g === void 0 ? void 0 : _g.customChain) === null || _h === void 0 ? void 0 : _h.chainId) !== null && _j !== void 0 ? _j : transaction === null || transaction === void 0 ? void 0 : transaction.chainId);
    const networkId = toNumber((_m = (_l = (_k = transaction === null || transaction === void 0 ? void 0 : transaction.common) === null || _k === void 0 ? void 0 : _k.customChain) === null || _l === void 0 ? void 0 : _l.networkId) !== null && _m !== void 0 ? _m : transaction === null || transaction === void 0 ? void 0 : transaction.networkId);
    const defaultHardfork = (_q = (_p = (_o = transaction === null || transaction === void 0 ? void 0 : transaction.common) === null || _o === void 0 ? void 0 : _o.hardfork) !== null && _p !== void 0 ? _p : transaction === null || transaction === void 0 ? void 0 : transaction.hardfork) !== null && _q !== void 0 ? _q : web3Context.defaultHardfork;
    const baseChain = (_t = (_s = (_r = transaction.common) === null || _r === void 0 ? void 0 : _r.baseChain) !== null && _s !== void 0 ? _s : transaction.chain) !== null && _t !== void 0 ? _t : web3Context.defaultChain;
    if (chainId && networkId && name2) {
      common = Common.custom({
        name: name2,
        chainId,
        networkId,
        defaultHardfork
      }, {
        baseChain
      });
    }
  }
  return { common };
};
var prepareTransactionForSigning = (transaction_1, web3Context_1, privateKey_1, ...args_1) => __awaiter28(void 0, [transaction_1, web3Context_1, privateKey_1, ...args_1], void 0, function* (transaction, web3Context, privateKey, fillGasPrice = false, fillGasLimit = true) {
  const populatedTransaction = yield transactionBuilder({
    transaction,
    web3Context,
    privateKey,
    fillGasPrice,
    fillGasLimit
  });
  const formattedTransaction = formatTransaction(populatedTransaction, ETH_DATA_FORMAT, {
    transactionSchema: web3Context.config.customTransactionSchema
  });
  validateTransactionForSigning(formattedTransaction, void 0, {
    transactionSchema: web3Context.config.customTransactionSchema
  });
  return TransactionFactory.fromTxData(getEthereumjsTxDataFromTransaction(formattedTransaction), getEthereumjsTransactionOptions(formattedTransaction, web3Context));
});

// node_modules/web3-eth-contract/lib/esm/index.js
var esm_exports13 = {};
__export(esm_exports13, {
  Contract: () => Contract,
  ContractLogsSubscription: () => ContractLogsSubscription,
  DeployerMethodClass: () => DeployerMethodClass,
  LogsSubscription: () => LogsSubscription2,
  create2ContractAddress: () => create2ContractAddress,
  createContractAddress: () => createContractAddress,
  decodeEventABI: () => decodeEventABI,
  decodeMethodParams: () => decodeMethodParams,
  decodeMethodReturn: () => decodeMethodReturn,
  default: () => esm_default3,
  encodeEventABI: () => encodeEventABI,
  encodeMethodABI: () => encodeMethodABI,
  getCreateAccessListParams: () => getCreateAccessListParams,
  getEstimateGasParams: () => getEstimateGasParams,
  getEthTxCallParams: () => getEthTxCallParams,
  getSendTxParams: () => getSendTxParams,
  isWeb3ContractContext: () => isWeb3ContractContext
});

// node_modules/web3-eth-contract/lib/esm/encoding.js
var encodeEventABI = ({ address }, event, options) => {
  var _a3, _b;
  const topics = options === null || options === void 0 ? void 0 : options.topics;
  const filter = (_a3 = options === null || options === void 0 ? void 0 : options.filter) !== null && _a3 !== void 0 ? _a3 : {};
  const opts = {};
  if (!isNullish2(options === null || options === void 0 ? void 0 : options.fromBlock)) {
    opts.fromBlock = format(blockSchema.properties.number, options === null || options === void 0 ? void 0 : options.fromBlock, {
      number: FMT_NUMBER.HEX,
      bytes: FMT_BYTES.HEX
    });
  }
  if (!isNullish2(options === null || options === void 0 ? void 0 : options.toBlock)) {
    opts.toBlock = format(blockSchema.properties.number, options === null || options === void 0 ? void 0 : options.toBlock, {
      number: FMT_NUMBER.HEX,
      bytes: FMT_BYTES.HEX
    });
  }
  if (topics && Array.isArray(topics)) {
    opts.topics = [...topics];
  } else {
    opts.topics = [];
    if (event && !event.anonymous && ![ALL_EVENTS, "allEvents"].includes(event.name)) {
      opts.topics.push((_b = event.signature) !== null && _b !== void 0 ? _b : encodeEventSignature(jsonInterfaceMethodToString(event)));
    }
    if (![ALL_EVENTS, "allEvents"].includes(event.name) && event.inputs) {
      for (const input of event.inputs) {
        if (!input.indexed) {
          continue;
        }
        const value = filter[input.name];
        if (!value) {
          opts.topics.push(null);
          continue;
        }
        if (Array.isArray(value)) {
          opts.topics.push(value.map((v) => encodeParameter(input.type, v)));
        } else if (input.type === "string") {
          opts.topics.push(keccak256Wrapper(value));
        } else {
          opts.topics.push(encodeParameter(input.type, value));
        }
      }
    }
  }
  if (!opts.topics.length)
    delete opts.topics;
  if (address) {
    opts.address = address.toLowerCase();
  }
  return opts;
};
var encodeMethodABI = (abi, args, deployData) => {
  const inputLength = Array.isArray(abi.inputs) ? abi.inputs.length : 0;
  if (abi.inputs && inputLength !== args.length) {
    throw new Web3ContractError(`The number of arguments is not matching the methods required number. You need to pass ${inputLength} arguments.`);
  }
  let params;
  if (abi.inputs) {
    params = encodeParameters(Array.isArray(abi.inputs) ? abi.inputs : [], args).replace("0x", "");
  } else {
    params = inferTypesAndEncodeParameters(args).replace("0x", "");
  }
  if (isAbiConstructorFragment(abi)) {
    if (!deployData)
      throw new Web3ContractError("The contract has no contract data option set. This is necessary to append the constructor parameters.");
    if (!deployData.startsWith("0x")) {
      return `0x${deployData}${params}`;
    }
    return `${deployData}${params}`;
  }
  return `${encodeFunctionSignature(abi)}${params}`;
};
var decodeMethodParams = decodeFunctionCall;
var decodeMethodReturn = decodeFunctionReturn;

// node_modules/web3-eth-contract/lib/esm/contract_log_subscription.js
var ContractLogsSubscription = class extends Web3Subscription {
  constructor(args, options) {
    super(args, options);
    this.address = args.address;
    this.topics = args.topics;
    this.abi = args.abi;
    this.jsonInterface = args.jsonInterface;
  }
  _buildSubscriptionParams() {
    return ["logs", { address: this.address, topics: this.topics }];
  }
  formatSubscriptionResult(data) {
    return decodeEventABI(this.abi, data, this.jsonInterface, super.returnFormat);
  }
};
var LogsSubscription2 = ContractLogsSubscription;

// node_modules/web3-eth-contract/node_modules/@ethereumjs/rlp/dist/esm/index.js
function encode(input) {
  if (Array.isArray(input)) {
    const output2 = [];
    let outputLength = 0;
    for (let i = 0; i < input.length; i++) {
      const encoded = encode(input[i]);
      output2.push(encoded);
      outputLength += encoded.length;
    }
    return concatBytes3(encodeLength(outputLength, 192), ...output2);
  }
  const inputBuf = toBytes2(input);
  if (inputBuf.length === 1 && inputBuf[0] < 128) {
    return inputBuf;
  }
  return concatBytes3(encodeLength(inputBuf.length, 128), inputBuf);
}
function safeSlice(input, start, end) {
  if (end > input.length) {
    throw new Error("invalid RLP (safeSlice): end slice of Uint8Array out-of-bounds");
  }
  return input.slice(start, end);
}
function decodeLength(v) {
  if (v[0] === 0) {
    throw new Error("invalid RLP: extra zeros");
  }
  return parseHexByte(bytesToHex3(v));
}
function encodeLength(len, offset) {
  if (len < 56) {
    return Uint8Array.from([len + offset]);
  }
  const hexLength = numberToHex2(len);
  const lLength = hexLength.length / 2;
  const firstByte = numberToHex2(offset + 55 + lLength);
  return Uint8Array.from(hexToBytes3(firstByte + hexLength));
}
function decode(input, stream = false) {
  if (typeof input === "undefined" || input === null || input.length === 0) {
    return Uint8Array.from([]);
  }
  const inputBytes = toBytes2(input);
  const decoded = _decode(inputBytes);
  if (stream) {
    return {
      data: decoded.data,
      remainder: decoded.remainder.slice()
    };
  }
  if (decoded.remainder.length !== 0) {
    throw new Error("invalid RLP: remainder must be zero");
  }
  return decoded.data;
}
function _decode(input) {
  let length, llength, data, innerRemainder, d;
  const decoded = [];
  const firstByte = input[0];
  if (firstByte <= 127) {
    return {
      data: input.slice(0, 1),
      remainder: input.subarray(1)
    };
  } else if (firstByte <= 183) {
    length = firstByte - 127;
    if (firstByte === 128) {
      data = Uint8Array.from([]);
    } else {
      data = safeSlice(input, 1, length);
    }
    if (length === 2 && data[0] < 128) {
      throw new Error("invalid RLP encoding: invalid prefix, single byte < 0x80 are not prefixed");
    }
    return {
      data,
      remainder: input.subarray(length)
    };
  } else if (firstByte <= 191) {
    llength = firstByte - 182;
    if (input.length - 1 < llength) {
      throw new Error("invalid RLP: not enough bytes for string length");
    }
    length = decodeLength(safeSlice(input, 1, llength));
    if (length <= 55) {
      throw new Error("invalid RLP: expected string length to be greater than 55");
    }
    data = safeSlice(input, llength, length + llength);
    return {
      data,
      remainder: input.subarray(length + llength)
    };
  } else if (firstByte <= 247) {
    length = firstByte - 191;
    innerRemainder = safeSlice(input, 1, length);
    while (innerRemainder.length) {
      d = _decode(innerRemainder);
      decoded.push(d.data);
      innerRemainder = d.remainder;
    }
    return {
      data: decoded,
      remainder: input.subarray(length)
    };
  } else {
    llength = firstByte - 246;
    length = decodeLength(safeSlice(input, 1, llength));
    if (length < 56) {
      throw new Error("invalid RLP: encoded list too short");
    }
    const totalLength = llength + length;
    if (totalLength > input.length) {
      throw new Error("invalid RLP: total length is larger than the data");
    }
    innerRemainder = safeSlice(input, llength, totalLength);
    while (innerRemainder.length) {
      d = _decode(innerRemainder);
      decoded.push(d.data);
      innerRemainder = d.remainder;
    }
    return {
      data: decoded,
      remainder: input.subarray(totalLength)
    };
  }
}
var cachedHexes = Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, "0"));
function bytesToHex3(uint8a) {
  let hex = "";
  for (let i = 0; i < uint8a.length; i++) {
    hex += cachedHexes[uint8a[i]];
  }
  return hex;
}
function parseHexByte(hexByte) {
  const byte = Number.parseInt(hexByte, 16);
  if (Number.isNaN(byte))
    throw new Error("Invalid byte sequence");
  return byte;
}
function hexToBytes3(hex) {
  if (typeof hex !== "string") {
    throw new TypeError("hexToBytes: expected string, got " + typeof hex);
  }
  if (hex.length % 2)
    throw new Error("hexToBytes: received invalid unpadded hex");
  const array = new Uint8Array(hex.length / 2);
  for (let i = 0; i < array.length; i++) {
    const j = i * 2;
    array[i] = parseHexByte(hex.slice(j, j + 2));
  }
  return array;
}
function concatBytes3(...arrays) {
  if (arrays.length === 1)
    return arrays[0];
  const length = arrays.reduce((a, arr) => a + arr.length, 0);
  const result = new Uint8Array(length);
  for (let i = 0, pad = 0; i < arrays.length; i++) {
    const arr = arrays[i];
    result.set(arr, pad);
    pad += arr.length;
  }
  return result;
}
function utf8ToBytes3(utf) {
  return new TextEncoder().encode(utf);
}
function numberToHex2(integer) {
  if (integer < 0) {
    throw new Error("Invalid integer as argument, must be unsigned!");
  }
  const hex = integer.toString(16);
  return hex.length % 2 ? `0${hex}` : hex;
}
function padToEven2(a) {
  return a.length % 2 ? `0${a}` : a;
}
function isHexPrefixed2(str) {
  return str.length >= 2 && str[0] === "0" && str[1] === "x";
}
function stripHexPrefix2(str) {
  if (typeof str !== "string") {
    return str;
  }
  return isHexPrefixed2(str) ? str.slice(2) : str;
}
function toBytes2(v) {
  if (v instanceof Uint8Array) {
    return v;
  }
  if (typeof v === "string") {
    if (isHexPrefixed2(v)) {
      return hexToBytes3(padToEven2(stripHexPrefix2(v)));
    }
    return utf8ToBytes3(v);
  }
  if (typeof v === "number" || typeof v === "bigint") {
    if (!v) {
      return Uint8Array.from([]);
    }
    return hexToBytes3(numberToHex2(v));
  }
  if (v === null || v === void 0) {
    return Uint8Array.from([]);
  }
  throw new Error("toBytes: received unsupported type " + typeof v);
}
var RLP4 = { encode, decode };

// node_modules/web3-eth-contract/lib/esm/utils.js
var dataInputEncodeMethodHelper = (txParams, abi, params, dataInputFill) => {
  var _a3, _b;
  const tx = {};
  if (!isNullish2(txParams.data) || dataInputFill === "both") {
    tx.data = encodeMethodABI(abi, params, (_a3 = txParams.data) !== null && _a3 !== void 0 ? _a3 : txParams.input);
  }
  if (!isNullish2(txParams.input) || dataInputFill === "both") {
    tx.input = encodeMethodABI(abi, params, (_b = txParams.input) !== null && _b !== void 0 ? _b : txParams.data);
  }
  if (isNullish2(tx.input) && isNullish2(tx.data)) {
    tx[dataInputFill] = encodeMethodABI(abi, params);
  }
  return { data: tx.data, input: tx.input };
};
var getSendTxParams = ({ abi, params, options, contractOptions }) => {
  var _a3, _b, _c;
  const deploymentCall = (_c = (_b = (_a3 = options === null || options === void 0 ? void 0 : options.input) !== null && _a3 !== void 0 ? _a3 : options === null || options === void 0 ? void 0 : options.data) !== null && _b !== void 0 ? _b : contractOptions.input) !== null && _c !== void 0 ? _c : contractOptions.data;
  if (!deploymentCall && !(options === null || options === void 0 ? void 0 : options.to) && !contractOptions.address) {
    throw new Web3ContractError("Contract address not specified");
  }
  if (!(options === null || options === void 0 ? void 0 : options.from) && !contractOptions.from) {
    throw new Web3ContractError('Contract "from" address not specified');
  }
  let txParams = mergeDeep({
    to: contractOptions.address,
    gas: contractOptions.gas,
    gasPrice: contractOptions.gasPrice,
    from: contractOptions.from,
    input: contractOptions.input,
    maxPriorityFeePerGas: contractOptions.maxPriorityFeePerGas,
    maxFeePerGas: contractOptions.maxFeePerGas,
    data: contractOptions.data
  }, options);
  const dataInput = dataInputEncodeMethodHelper(txParams, abi, params, options === null || options === void 0 ? void 0 : options.dataInputFill);
  txParams = Object.assign(Object.assign({}, txParams), { data: dataInput.data, input: dataInput.input });
  return txParams;
};
var getEthTxCallParams = ({ abi, params, options, contractOptions }) => {
  if (!(options === null || options === void 0 ? void 0 : options.to) && !contractOptions.address) {
    throw new Web3ContractError("Contract address not specified");
  }
  let txParams = mergeDeep({
    to: contractOptions.address,
    gas: contractOptions.gas,
    gasPrice: contractOptions.gasPrice,
    from: contractOptions.from,
    input: contractOptions.input,
    maxPriorityFeePerGas: contractOptions.maxPriorityFeePerGas,
    maxFeePerGas: contractOptions.maxFeePerGas,
    data: contractOptions.data
  }, options);
  const dataInput = dataInputEncodeMethodHelper(txParams, abi, params, options === null || options === void 0 ? void 0 : options.dataInputFill);
  txParams = Object.assign(Object.assign({}, txParams), { data: dataInput.data, input: dataInput.input });
  return txParams;
};
var getEstimateGasParams = ({ abi, params, options, contractOptions }) => {
  let txParams = mergeDeep({
    to: contractOptions.address,
    gas: contractOptions.gas,
    gasPrice: contractOptions.gasPrice,
    from: contractOptions.from,
    input: contractOptions.input,
    data: contractOptions.data
  }, options);
  const dataInput = dataInputEncodeMethodHelper(txParams, abi, params, options === null || options === void 0 ? void 0 : options.dataInputFill);
  txParams = Object.assign(Object.assign({}, txParams), { data: dataInput.data, input: dataInput.input });
  return txParams;
};
var isWeb3ContractContext = (options) => typeof options === "object" && !isNullish2(options) && Object.keys(options).length !== 0 && !isContractInitOptions(options);
var getCreateAccessListParams = ({ abi, params, options, contractOptions }) => {
  if (!(options === null || options === void 0 ? void 0 : options.to) && !contractOptions.address) {
    throw new Web3ContractError("Contract address not specified");
  }
  if (!(options === null || options === void 0 ? void 0 : options.from) && !contractOptions.from) {
    throw new Web3ContractError('Contract "from" address not specified');
  }
  let txParams = mergeDeep({
    to: contractOptions.address,
    gas: contractOptions.gas,
    gasPrice: contractOptions.gasPrice,
    from: contractOptions.from,
    input: contractOptions.input,
    maxPriorityFeePerGas: contractOptions.maxPriorityFeePerGas,
    maxFeePerGas: contractOptions.maxFeePerGas,
    data: contractOptions.data
  }, options);
  const dataInput = dataInputEncodeMethodHelper(txParams, abi, params, options === null || options === void 0 ? void 0 : options.dataInputFill);
  txParams = Object.assign(Object.assign({}, txParams), { data: dataInput.data, input: dataInput.input });
  return txParams;
};
var createContractAddress = (from, nonce) => {
  if (!isAddress(from))
    throw new InvalidAddressError(`Invalid address given ${from}`);
  let nonceValue = nonce;
  if (typeof nonce === "string" && isHexString(nonce))
    nonceValue = hexToNumber(nonce);
  else if (typeof nonce === "string" && !isHexString(nonce))
    throw new InvalidNumberError("Invalid nonce value format");
  const rlpEncoded = RLP4.encode([from, nonceValue]);
  const result = keccak256Wrapper(rlpEncoded);
  const contractAddress = "0x".concat(result.substring(26));
  return toChecksumAddress(contractAddress);
};
var create2ContractAddress = (from, salt, initCode) => {
  if (!isAddress(from))
    throw new InvalidAddressError(`Invalid address given ${from}`);
  if (!isHexString(salt))
    throw new InvalidMethodParamsError(`Invalid salt value ${salt}`);
  if (!isHexString(initCode))
    throw new InvalidMethodParamsError(`Invalid initCode value ${initCode}`);
  const initCodeHash = keccak256Wrapper(initCode);
  const initCodeHashPadded = initCodeHash.padStart(64, "0");
  const create2Params = ["0xff", from, salt, initCodeHashPadded].map((x) => x.replace(/0x/, ""));
  const create2Address = `0x${create2Params.join("")}`;
  return toChecksumAddress(`0x${keccak256Wrapper(create2Address).slice(26)}`);
};

// node_modules/web3-eth-contract/lib/esm/contract-deployer-method-class.js
var __awaiter29 = function(thisArg, _arguments, P, generator) {
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
var DeployerMethodClass = class {
  _contractMethodDeploySend(tx) {
    const returnTxOptions = {
      transactionResolver: (receipt) => {
        if (receipt.status === BigInt(0)) {
          throw new Web3ContractError("code couldn't be stored", receipt);
        }
        const newContract = this.parent.clone();
        newContract.options.address = receipt.contractAddress;
        return newContract;
      },
      contractAbi: this.parent.options.jsonInterface,
      // TODO Should make this configurable by the user
      checkRevertBeforeSending: false
    };
    return isNullish(this.parent.getTransactionMiddleware()) ? sendTransaction3(this.parent, tx, this.parent.defaultReturnFormat, returnTxOptions) : sendTransaction3(this.parent, tx, this.parent.defaultReturnFormat, returnTxOptions, this.parent.getTransactionMiddleware());
  }
  constructor(parent, deployOptions) {
    this.parent = parent;
    this.deployOptions = deployOptions;
    const { args, abi, contractOptions, deployData } = this.calculateDeployParams();
    this.args = args;
    this.constructorAbi = abi;
    this.contractOptions = contractOptions;
    this.deployData = deployData;
  }
  send(options) {
    const modifiedOptions = Object.assign({}, options);
    const tx = this.populateTransaction(modifiedOptions);
    return this._contractMethodDeploySend(tx);
  }
  populateTransaction(txOptions) {
    var _a3, _b;
    const modifiedContractOptions = Object.assign(Object.assign({}, this.contractOptions), { from: (_b = (_a3 = this.contractOptions.from) !== null && _a3 !== void 0 ? _a3 : this.parent.defaultAccount) !== null && _b !== void 0 ? _b : void 0 });
    const tx = getSendTxParams({
      abi: this.constructorAbi,
      params: this.args,
      options: Object.assign(Object.assign({}, txOptions), { dataInputFill: this.parent.contractDataInputFill }),
      contractOptions: modifiedContractOptions
    });
    if (tx.dataInputFill) {
      delete tx.dataInputFill;
    }
    return tx;
  }
  calculateDeployParams() {
    var _a3, _b, _c, _d, _e, _f;
    let abi = this.parent.options.jsonInterface.find((j) => j.type === "constructor");
    if (!abi) {
      abi = {
        type: "constructor",
        stateMutability: ""
      };
    }
    const _input = format({ format: "bytes" }, (_b = (_a3 = this.deployOptions) === null || _a3 === void 0 ? void 0 : _a3.input) !== null && _b !== void 0 ? _b : this.parent.options.input, DEFAULT_RETURN_FORMAT);
    const _data = format({ format: "bytes" }, (_d = (_c = this.deployOptions) === null || _c === void 0 ? void 0 : _c.data) !== null && _d !== void 0 ? _d : this.parent.options.data, DEFAULT_RETURN_FORMAT);
    if ((!_input || _input.trim() === "0x") && (!_data || _data.trim() === "0x")) {
      throw new Web3ContractError("contract creation without any data provided.");
    }
    const args = (_f = (_e = this.deployOptions) === null || _e === void 0 ? void 0 : _e.arguments) !== null && _f !== void 0 ? _f : [];
    const contractOptions = Object.assign(Object.assign({}, this.parent.options), { input: _input, data: _data });
    const deployData = _input !== null && _input !== void 0 ? _input : _data;
    return { args, abi, contractOptions, deployData };
  }
  estimateGas(options_1) {
    return __awaiter29(this, arguments, void 0, function* (options, returnFormat = this.parent.defaultReturnFormat) {
      const modifiedOptions = Object.assign({}, options);
      return this.parent.contractMethodEstimateGas({
        abi: this.constructorAbi,
        params: this.args,
        returnFormat,
        options: modifiedOptions,
        contractOptions: this.contractOptions
      });
    });
  }
  encodeABI() {
    return encodeMethodABI(this.constructorAbi, this.args, format({ format: "bytes" }, this.deployData, this.parent.defaultReturnFormat));
  }
  decodeData(data) {
    return Object.assign(Object.assign({}, decodeFunctionCall(this.constructorAbi, data.replace(this.deployData, ""), false)), { __method__: this.constructorAbi.type });
  }
};

// node_modules/web3-eth-contract/lib/esm/contract-subscription-manager.js
var __awaiter30 = function(thisArg, _arguments, P, generator) {
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
var ContractSubscriptionManager = class extends Web3SubscriptionManager {
  /**
   *
   * @param - Web3SubscriptionManager
   * @param - parentContract
   *
   * @example
   * ```ts
   * const requestManager = new Web3RequestManager("ws://localhost:8545");
   * const contract = new Contract(...)
   * const subscriptionManager = new Web3SubscriptionManager(requestManager, {}, contract);
   * ```
   */
  constructor(self2, parentContract) {
    super(self2.requestManager, self2.registeredSubscriptions);
    this.parentContract = parentContract;
  }
  /**
   * Will create a new subscription
   *
   * @param name - The subscription you want to subscribe to
   * @param args - Optional additional parameters, depending on the subscription type
   * @param returnFormat- ({@link DataFormat} defaults to {@link DEFAULT_RETURN_FORMAT}) - Specifies how the return data from the call should be formatted.
   *
   * Will subscribe to a specific topic (note: name)
   * @returns The subscription object
   */
  subscribe(name_1, args_1) {
    const _super = Object.create(null, {
      subscribe: { get: () => super.subscribe }
    });
    return __awaiter30(this, arguments, void 0, function* (name2, args, returnFormat = DEFAULT_RETURN_FORMAT) {
      return _super.subscribe.call(this, name2, args !== null && args !== void 0 ? args : this.parentContract.options, returnFormat);
    });
  }
};

// node_modules/web3-eth-contract/lib/esm/contract.js
var __awaiter31 = function(thisArg, _arguments, P, generator) {
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
var contractSubscriptions = {
  logs: ContractLogsSubscription,
  newHeads: NewHeadsSubscription,
  newBlockHeaders: NewHeadsSubscription
};
var Contract = class _Contract extends Web3Context {
  get subscriptionManager() {
    return this._subscriptionManager;
  }
  constructor(jsonInterface, addressOrOptionsOrContext, optionsOrContextOrReturnFormat, contextOrReturnFormat, returnFormat) {
    var _a3, _b, _c;
    const options = isContractInitOptions(addressOrOptionsOrContext) ? addressOrOptionsOrContext : isContractInitOptions(optionsOrContextOrReturnFormat) ? optionsOrContextOrReturnFormat : void 0;
    let contractContext;
    if (isWeb3ContractContext(addressOrOptionsOrContext)) {
      contractContext = addressOrOptionsOrContext;
    } else if (isWeb3ContractContext(optionsOrContextOrReturnFormat)) {
      contractContext = optionsOrContextOrReturnFormat;
    } else {
      contractContext = contextOrReturnFormat;
    }
    let provider;
    if (typeof addressOrOptionsOrContext === "object" && "provider" in addressOrOptionsOrContext) {
      provider = addressOrOptionsOrContext.provider;
    } else if (typeof optionsOrContextOrReturnFormat === "object" && "provider" in optionsOrContextOrReturnFormat) {
      provider = optionsOrContextOrReturnFormat.provider;
    } else if (typeof contextOrReturnFormat === "object" && "provider" in contextOrReturnFormat) {
      provider = contextOrReturnFormat.provider;
    } else {
      provider = _Contract.givenProvider;
    }
    super(Object.assign(Object.assign({}, contractContext), { provider, registeredSubscriptions: contractSubscriptions }));
    this.syncWithContext = false;
    this._functions = {};
    this._subscriptionManager = new ContractSubscriptionManager(super.subscriptionManager, this);
    if (contractContext === null || contractContext === void 0 ? void 0 : contractContext.wallet) {
      this._wallet = contractContext.wallet;
    }
    if (contractContext === null || contractContext === void 0 ? void 0 : contractContext.accountProvider) {
      this._accountProvider = contractContext.accountProvider;
    }
    if (!isNullish(options) && !isNullish(options.data) && !isNullish(options.input) && this.config.contractDataInputFill !== "both")
      throw new ContractTransactionDataAndInputError({
        data: options.data,
        input: options.input
      });
    this._overloadedMethodAbis = /* @__PURE__ */ new Map();
    const returnDataFormat = isDataFormat(contextOrReturnFormat) ? contextOrReturnFormat : isDataFormat(optionsOrContextOrReturnFormat) ? optionsOrContextOrReturnFormat : returnFormat !== null && returnFormat !== void 0 ? returnFormat : this.defaultReturnFormat;
    const address = typeof addressOrOptionsOrContext === "string" ? addressOrOptionsOrContext : void 0;
    this.config.contractDataInputFill = (_a3 = options === null || options === void 0 ? void 0 : options.dataInputFill) !== null && _a3 !== void 0 ? _a3 : this.config.contractDataInputFill;
    this._parseAndSetJsonInterface(jsonInterface, returnDataFormat);
    if (this.defaultReturnFormat !== returnDataFormat) {
      this.defaultReturnFormat = returnDataFormat;
    }
    if (!isNullish(address)) {
      this._parseAndSetAddress(address, returnDataFormat);
    }
    this.options = {
      address,
      jsonInterface: this._jsonInterface,
      gas: (_b = options === null || options === void 0 ? void 0 : options.gas) !== null && _b !== void 0 ? _b : options === null || options === void 0 ? void 0 : options.gasLimit,
      gasPrice: options === null || options === void 0 ? void 0 : options.gasPrice,
      from: options === null || options === void 0 ? void 0 : options.from,
      input: options === null || options === void 0 ? void 0 : options.input,
      data: options === null || options === void 0 ? void 0 : options.data
    };
    this.syncWithContext = (_c = options === null || options === void 0 ? void 0 : options.syncWithContext) !== null && _c !== void 0 ? _c : false;
    if (contractContext instanceof Web3Context) {
      this.subscribeToContextEvents(contractContext);
    }
    Object.defineProperty(this.options, "address", {
      set: (value) => this._parseAndSetAddress(value, returnDataFormat),
      get: () => this._address
    });
    Object.defineProperty(this.options, "jsonInterface", {
      set: (value) => this._parseAndSetJsonInterface(value, returnDataFormat),
      get: () => this._jsonInterface
    });
    if (contractContext instanceof Web3Context) {
      contractContext.on(Web3ConfigEvent.CONFIG_CHANGE, (event) => {
        this.setConfig({ [event.name]: event.newValue });
      });
    }
  }
  setTransactionMiddleware(transactionMiddleware) {
    this.transactionMiddleware = transactionMiddleware;
  }
  getTransactionMiddleware() {
    return this.transactionMiddleware;
  }
  /**
   * Subscribe to an event.
   *
   * ```ts
   * await myContract.events.MyEvent([options])
   * ```
   *
   * There is a special event `allEvents` that can be used to subscribe all events.
   *
   * ```ts
   * await myContract.events.allEvents([options])
   * ```
   *
   * @returns - When individual event is accessed will returns {@link ContractBoundEvent} object
   */
  get events() {
    return this._events;
  }
  /**
   * Creates a transaction object for that method, which then can be `called`, `send`, `estimated`, `createAccessList` , or `ABI encoded`.
   *
   * The methods of this smart contract are available through:
   *
   * The name: `myContract.methods.myMethod(123)`
   * The name with parameters: `myContract.methods['myMethod(uint256)'](123)`
   * The signature `myContract.methods['0x58cf5f10'](123)`
   *
   * This allows calling functions with same name but different parameters from the JavaScript contract object.
   *
   * \> The method signature does not provide a type safe interface, so we recommend to use method `name` instead.
   *
   * ```ts
   * // calling a method
   * const result = await myContract.methods.myMethod(123).call({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'});
   *
   * // or sending and using a promise
   * const receipt = await myContract.methods.myMethod(123).send({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'});
   *
   * // or sending and using the events
   * const sendObject = myContract.methods.myMethod(123).send({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'});
   * sendObject.on('transactionHash', function(hash){
   *   ...
   * });
   * sendObject.on('receipt', function(receipt){
   *   ...
   * });
   * sendObject.on('confirmation', function(confirmationNumber, receipt){
   *   ...
   * });
   * sendObject.on('error', function(error, receipt) {
   *   ...
   * });
   * ```
   *
   * @returns - Either returns {@link PayableMethodObject} or {@link NonPayableMethodObject} based on the definitions of the ABI of that contract.
   */
  get methods() {
    return this._methods;
  }
  /**
   * Clones the current contract instance. This doesn't deploy contract on blockchain and only creates a local clone.
   *
   * @returns - The new contract instance.
   *
   * ```ts
   * const contract1 = new web3.eth.Contract(abi, address, {gasPrice: '12345678', from: fromAddress});
   *
   * const contract2 = contract1.clone();
   * contract2.options.address = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
   *
   * (contract1.options.address !== contract2.options.address);
   * > true
   * ```
   */
  clone() {
    let newContract;
    if (this.options.address) {
      newContract = new _Contract([...this._jsonInterface, ...this._errorsInterface], this.options.address, {
        gas: this.options.gas,
        gasPrice: this.options.gasPrice,
        from: this.options.from,
        input: this.options.input,
        data: this.options.data,
        provider: this.currentProvider,
        syncWithContext: this.syncWithContext,
        dataInputFill: this.config.contractDataInputFill
      }, this.getContextObject());
    } else {
      newContract = new _Contract([...this._jsonInterface, ...this._errorsInterface], {
        gas: this.options.gas,
        gasPrice: this.options.gasPrice,
        from: this.options.from,
        input: this.options.input,
        data: this.options.data,
        provider: this.currentProvider,
        syncWithContext: this.syncWithContext,
        dataInputFill: this.config.contractDataInputFill
      }, this.getContextObject());
    }
    if (this.context)
      newContract.subscribeToContextEvents(this.context);
    return newContract;
  }
  /**
   * Call this function to deploy the contract to the blockchain. After successful deployment the promise will resolve with a new contract instance.
   *
   * ```ts
   * myContract.deploy({
   *   input: '0x12345...', // data keyword can be used, too.
   *   arguments: [123, 'My String']
   * })
   * .send({
   *   from: '0x1234567890123456789012345678901234567891',
   *   gas: 1500000,
   *   gasPrice: '30000000000000'
   * }, function(error, transactionHash){ ... })
   * .on('error', function(error){ ... })
   * .on('transactionHash', function(transactionHash){ ... })
   * .on('receipt', function(receipt){
   *  console.log(receipt.contractAddress) // contains the new contract address
   * })
   * .on('confirmation', function(confirmationNumber, receipt){ ... })
   * .then(function(newContractInstance){
   *   console.log(newContractInstance.options.address) // instance with the new contract address
   * });
   *
   *
   * // When the data is already set as an option to the contract itself
   * myContract.options.data = '0x12345...';
   *
   * myContract.deploy({
   *   arguments: [123, 'My String']
   * })
   * .send({
   *   from: '0x1234567890123456789012345678901234567891',
   *   gas: 1500000,
   *   gasPrice: '30000000000000'
   * })
   * .then(function(newContractInstance){
   *   console.log(newContractInstance.options.address) // instance with the new contract address
   * });
   *
   *
   * // Simply encoding
   * myContract.deploy({
   *   input: '0x12345...',
   *   arguments: [123, 'My String']
   * })
   * .encodeABI();
   * > '0x12345...0000012345678765432'
   *
   *
   * // decoding
   * myContract.deploy({
   *   input: '0x12345...',
   *   // arguments: [123, 'My Greeting'] if you just need to decode the data, you can skip the arguments
   * })
   * .decodeData('0x12345...0000012345678765432');
   * > {
   *      __method__: 'constructor',
   *      __length__: 2,
   *      '0': '123',
   *      _id: '123',
   *      '1': 'My Greeting',
   *      _greeting: 'My Greeting',
   *   }
   *
   *
   * // Gas estimation
   * myContract.deploy({
   *   input: '0x12345...',
   *   arguments: [123, 'My String']
   * })
   * .estimateGas(function(err, gas){
   *   console.log(gas);
   * });
   * ```
   *
   * @returns - The transaction object
   */
  deploy(deployOptions) {
    return new DeployerMethodClass(this, deployOptions);
  }
  getPastEvents(param1, param2, param3) {
    return __awaiter31(this, void 0, void 0, function* () {
      var _a3;
      const eventName = typeof param1 === "string" ? param1 : ALL_EVENTS;
      const options = (
        // eslint-disable-next-line no-nested-ternary
        typeof param1 !== "string" && !isDataFormat(param1) ? param1 : !isDataFormat(param2) ? param2 : {}
      );
      const returnFormat = isDataFormat(param1) ? param1 : isDataFormat(param2) ? param2 : param3 !== null && param3 !== void 0 ? param3 : this.defaultReturnFormat;
      const abi = eventName === "allEvents" || eventName === ALL_EVENTS ? ALL_EVENTS_ABI : this._jsonInterface.find((j) => "name" in j && j.name === eventName);
      if (!abi) {
        throw new Web3ContractError(`Event ${String(eventName)} not found.`);
      }
      const { fromBlock, toBlock, topics, address } = encodeEventABI(this.options, abi, options !== null && options !== void 0 ? options : {});
      const logs = yield getLogs2(this, { fromBlock, toBlock, topics, address }, returnFormat);
      const decodedLogs = logs ? logs.map((log) => typeof log === "string" ? log : decodeEventABI(abi, log, this._jsonInterface, returnFormat)) : [];
      const filter = (_a3 = options === null || options === void 0 ? void 0 : options.filter) !== null && _a3 !== void 0 ? _a3 : {};
      const filterKeys = Object.keys(filter);
      if (filterKeys.length > 0) {
        return decodedLogs.filter((log) => {
          if (typeof log === "string")
            return true;
          return filterKeys.every((key) => {
            var _a4;
            if (Array.isArray(filter[key])) {
              return filter[key].some((v) => String(log.returnValues[key]).toUpperCase() === String(v).toUpperCase());
            }
            const inputAbi = (_a4 = abi.inputs) === null || _a4 === void 0 ? void 0 : _a4.filter((input) => input.name === key)[0];
            if ((inputAbi === null || inputAbi === void 0 ? void 0 : inputAbi.indexed) && inputAbi.type === "string") {
              const hashedIndexedString = keccak256Wrapper(filter[key]);
              if (hashedIndexedString === String(log.returnValues[key]))
                return true;
            }
            return String(log.returnValues[key]).toUpperCase() === String(filter[key]).toUpperCase();
          });
        });
      }
      return decodedLogs;
    });
  }
  _parseAndSetAddress(value, returnFormat = this.defaultReturnFormat) {
    this._address = value ? toChecksumAddress(format({ format: "address" }, value, returnFormat)) : value;
  }
  decodeMethodData(data) {
    const methodSignature = data.slice(0, 10);
    const functionsAbis = this._jsonInterface.filter((j) => j.type !== "error");
    const abi = functionsAbis.find((a) => methodSignature === encodeFunctionSignature(jsonInterfaceMethodToString(a)));
    if (!abi) {
      throw new Web3ContractError(`The ABI for the provided method signature ${methodSignature} was not found.`);
    }
    return decodeFunctionCall(abi, data);
  }
  _parseAndSetJsonInterface(abis, returnFormat = this.defaultReturnFormat) {
    var _a3, _b;
    this._functions = {};
    this._methods = {};
    this._events = {};
    let result = [];
    const functionsAbi = abis.filter((abi) => abi.type !== "error");
    const errorsAbi = abis.filter((abi) => isAbiErrorFragment(abi));
    for (const a of functionsAbi) {
      const abi = Object.assign(Object.assign({}, a), { signature: "" });
      if (isAbiFunctionFragment(abi)) {
        const methodName = jsonInterfaceMethodToString(abi);
        const methodSignature = encodeFunctionSignature(methodName);
        abi.methodNameWithInputs = methodName;
        abi.signature = methodSignature;
        abi.constant = abi.stateMutability === "view" || abi.stateMutability === "pure" || abi.constant;
        abi.payable = abi.stateMutability === "payable" || abi.payable;
        this._overloadedMethodAbis.set(abi.name, [
          ...(_a3 = this._overloadedMethodAbis.get(abi.name)) !== null && _a3 !== void 0 ? _a3 : [],
          abi
        ]);
        const abiFragment = (_b = this._overloadedMethodAbis.get(abi.name)) !== null && _b !== void 0 ? _b : [];
        const contractMethod = this._createContractMethod(abiFragment, errorsAbi);
        const exactContractMethod = this._createContractMethod(abiFragment, errorsAbi, true);
        this._functions[methodName] = {
          signature: methodSignature,
          method: exactContractMethod
        };
        this._methods[abi.name] = contractMethod;
        this._methods[methodName] = exactContractMethod;
        this._methods[methodSignature] = exactContractMethod;
      } else if (isAbiEventFragment(abi)) {
        const eventName = jsonInterfaceMethodToString(abi);
        const eventSignature = encodeEventSignature(eventName);
        const event = this._createContractEvent(abi, returnFormat);
        abi.signature = eventSignature;
        if (!(eventName in this._events) || abi.name === "bound") {
          this._events[eventName] = event;
        }
        this._events[abi.name] = event;
        this._events[eventSignature] = event;
      }
      result = [...result, abi];
    }
    this._events.allEvents = this._createContractEvent(ALL_EVENTS_ABI, returnFormat);
    this._jsonInterface = [...result];
    this._errorsInterface = errorsAbi;
  }
  // eslint-disable-next-line class-methods-use-this
  _getAbiParams(abi, params) {
    var _a3;
    try {
      return utils_exports.transformJsonDataToAbiFormat((_a3 = abi.inputs) !== null && _a3 !== void 0 ? _a3 : [], params);
    } catch (error) {
      throw new Web3ContractError(`Invalid parameters for method ${abi.name}: ${error.message}`);
    }
  }
  _createContractMethod(abiArr, errorsAbis, exact = false) {
    const abi = abiArr[abiArr.length - 1];
    return (...params) => {
      var _a3, _b, _c;
      let abiParams;
      const abis = (_b = exact ? (_a3 = this._overloadedMethodAbis.get(abi.name)) === null || _a3 === void 0 ? void 0 : _a3.filter((_abi) => _abi.signature === abi.signature) : this._overloadedMethodAbis.get(abi.name)) !== null && _b !== void 0 ? _b : [];
      let methodAbi = abis[0];
      const internalErrorsAbis = errorsAbis;
      const arrayOfAbis = abis.filter((_abi) => {
        var _a4;
        return ((_a4 = _abi.inputs) !== null && _a4 !== void 0 ? _a4 : []).length === params.length;
      });
      if (abis.length === 1 || arrayOfAbis.length === 0) {
        abiParams = this._getAbiParams(methodAbi, params);
        validator.validate((_c = abi.inputs) !== null && _c !== void 0 ? _c : [], abiParams);
      } else {
        const errors = [];
        const applicableMethodAbi = [];
        for (const _abi of arrayOfAbis) {
          try {
            abiParams = this._getAbiParams(_abi, params);
            validator.validate(_abi.inputs, abiParams);
            applicableMethodAbi.push(_abi);
          } catch (e) {
            errors.push(e);
          }
        }
        if (applicableMethodAbi.length === 1) {
          [methodAbi] = applicableMethodAbi;
        } else if (applicableMethodAbi.length > 1) {
          [methodAbi] = applicableMethodAbi;
          console.warn(`Multiple methods found that is compatible with the given inputs.
	Found ${applicableMethodAbi.length} compatible methods: ${JSON.stringify(applicableMethodAbi.map((m) => `${m.methodNameWithInputs} (signature: ${m.signature})`))} 
	The first one will be used: ${methodAbi.methodNameWithInputs}`);
        }
        if (errors.length === arrayOfAbis.length) {
          throw new Web3ValidatorError(errors);
        }
      }
      const methods = {
        arguments: abiParams,
        call: (options, block) => __awaiter31(this, void 0, void 0, function* () {
          return this._contractMethodCall(methodAbi, abiParams, internalErrorsAbis, options, block);
        }),
        send: (options) => this._contractMethodSend(methodAbi, abiParams, internalErrorsAbis, options),
        populateTransaction: (options, contractOptions) => {
          var _a4, _b2;
          let modifiedContractOptions = contractOptions !== null && contractOptions !== void 0 ? contractOptions : this.options;
          modifiedContractOptions = Object.assign(Object.assign({}, modifiedContractOptions), { input: void 0, from: (_b2 = (_a4 = modifiedContractOptions === null || modifiedContractOptions === void 0 ? void 0 : modifiedContractOptions.from) !== null && _a4 !== void 0 ? _a4 : this.defaultAccount) !== null && _b2 !== void 0 ? _b2 : void 0 });
          const tx = getSendTxParams({
            abi,
            params,
            options: Object.assign(Object.assign({}, options), { dataInputFill: this.config.contractDataInputFill }),
            contractOptions: modifiedContractOptions
          });
          if (tx.dataInputFill) {
            delete tx.dataInputFill;
          }
          return tx;
        },
        estimateGas: (options_1, ...args_1) => __awaiter31(this, [options_1, ...args_1], void 0, function* (options, returnFormat = this.defaultReturnFormat) {
          return this.contractMethodEstimateGas({
            abi: methodAbi,
            params: abiParams,
            returnFormat,
            options
          });
        }),
        encodeABI: () => encodeMethodABI(methodAbi, abiParams),
        decodeData: (data) => decodeFunctionCall(methodAbi, data),
        createAccessList: (options, block) => __awaiter31(this, void 0, void 0, function* () {
          return this._contractMethodCreateAccessList(methodAbi, abiParams, internalErrorsAbis, options, block);
        })
      };
      if (methodAbi.stateMutability === "payable") {
        return methods;
      }
      return methods;
    };
  }
  _contractMethodCall(abi, params, errorsAbi, options, block) {
    return __awaiter31(this, void 0, void 0, function* () {
      var _a3;
      const tx = getEthTxCallParams({
        abi,
        params,
        options: Object.assign(Object.assign({}, options), { dataInputFill: this.config.contractDataInputFill }),
        contractOptions: Object.assign(Object.assign({}, this.options), { from: (_a3 = this.options.from) !== null && _a3 !== void 0 ? _a3 : this.config.defaultAccount })
      });
      try {
        const result = yield call2(this, tx, block, this.defaultReturnFormat);
        return decodeFunctionReturn(abi, result);
      } catch (error) {
        if (error instanceof ContractExecutionError) {
          decodeContractErrorData(errorsAbi, error.cause);
        }
        throw error;
      }
    });
  }
  _contractMethodCreateAccessList(abi, params, errorsAbi, options, block) {
    return __awaiter31(this, void 0, void 0, function* () {
      var _a3;
      const tx = getCreateAccessListParams({
        abi,
        params,
        options: Object.assign(Object.assign({}, options), { dataInputFill: this.config.contractDataInputFill }),
        contractOptions: Object.assign(Object.assign({}, this.options), { from: (_a3 = this.options.from) !== null && _a3 !== void 0 ? _a3 : this.config.defaultAccount })
      });
      try {
        return createAccessList2(this, tx, block, this.defaultReturnFormat);
      } catch (error) {
        if (error instanceof ContractExecutionError) {
          decodeContractErrorData(errorsAbi, error.cause);
        }
        throw error;
      }
    });
  }
  _contractMethodSend(abi, params, errorsAbi, options, contractOptions) {
    var _a3, _b;
    let modifiedContractOptions = contractOptions !== null && contractOptions !== void 0 ? contractOptions : this.options;
    modifiedContractOptions = Object.assign(Object.assign({}, modifiedContractOptions), { input: void 0, from: (_b = (_a3 = modifiedContractOptions.from) !== null && _a3 !== void 0 ? _a3 : this.defaultAccount) !== null && _b !== void 0 ? _b : void 0 });
    const tx = getSendTxParams({
      abi,
      params,
      options: Object.assign(Object.assign({}, options), { dataInputFill: this.config.contractDataInputFill }),
      contractOptions: modifiedContractOptions
    });
    const transactionToSend = isNullish(this.transactionMiddleware) ? sendTransaction3(this, tx, this.defaultReturnFormat, {
      // TODO Should make this configurable by the user
      checkRevertBeforeSending: false,
      contractAbi: this._jsonInterface
      // explicitly not passing middleware so if some one is using old eth package it will not break
    }) : sendTransaction3(this, tx, this.defaultReturnFormat, {
      // TODO Should make this configurable by the user
      checkRevertBeforeSending: false,
      contractAbi: this._jsonInterface
    }, this.transactionMiddleware);
    void transactionToSend.on("error", (error) => {
      if (error instanceof ContractExecutionError) {
        decodeContractErrorData(errorsAbi, error.cause);
      }
    });
    return transactionToSend;
  }
  contractMethodEstimateGas(_a3) {
    return __awaiter31(this, arguments, void 0, function* ({ abi, params, returnFormat, options, contractOptions }) {
      const tx = getEstimateGasParams({
        abi,
        params,
        options: Object.assign(Object.assign({}, options), { dataInputFill: this.config.contractDataInputFill }),
        contractOptions: contractOptions !== null && contractOptions !== void 0 ? contractOptions : this.options
      });
      return estimateGas2(this, tx, BlockTags.LATEST, returnFormat !== null && returnFormat !== void 0 ? returnFormat : this.defaultReturnFormat);
    });
  }
  // eslint-disable-next-line class-methods-use-this
  _createContractEvent(abi, returnFormat = this.defaultReturnFormat) {
    return (...params) => {
      var _a3;
      const { topics, fromBlock } = encodeEventABI(this.options, abi, params[0]);
      const sub = new ContractLogsSubscription({
        address: this.options.address,
        topics,
        abi,
        jsonInterface: this._jsonInterface
      }, {
        subscriptionManager: this.subscriptionManager,
        returnFormat
      });
      if (!isNullish(fromBlock)) {
        this.getPastEvents(abi.name, { fromBlock, topics }, returnFormat).then((logs) => {
          if (logs) {
            logs.forEach((log) => sub.emit("data", log));
          }
        }).catch((error) => {
          sub.emit("error", new SubscriptionError("Failed to get past events.", error));
        });
      }
      (_a3 = this.subscriptionManager) === null || _a3 === void 0 ? void 0 : _a3.addSubscription(sub).catch((error) => {
        sub.emit("error", new SubscriptionError("Failed to subscribe.", error));
      });
      return sub;
    };
  }
  subscribeToContextEvents(context) {
    const contractThis = this;
    this.context = context;
    if (contractThis.syncWithContext) {
      context.on(Web3ConfigEvent.CONFIG_CHANGE, (event) => {
        contractThis.setConfig({ [event.name]: event.newValue });
      });
    }
  }
};

// node_modules/web3-eth-contract/lib/esm/index.js
var esm_default3 = Contract;

// node_modules/web3-eth-ens/lib/esm/index.js
var esm_exports14 = {};
__export(esm_exports14, {
  ENS: () => ENS,
  registryAddresses: () => registryAddresses
});

// node_modules/web3-eth-ens/lib/esm/config.js
var interfaceIds = {
  addr: "0x3b3b57de",
  name: "0x691f3431",
  abi: "0x2203ab56",
  pubkey: "0xc8690233",
  text: "0x59d1d43c",
  contenthash: "0xbc1c58d1"
};
var methodsInInterface = {
  setAddr: "addr",
  addr: "addr",
  setPubkey: "pubkey",
  pubkey: "pubkey",
  setContenthash: "contenthash",
  contenthash: "contenthash",
  text: "text",
  name: "name"
};
var registryAddresses = {
  main: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  goerli: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
};
var networkIds = {
  "0x1": "main",
  "0x5": "goerli"
};

// node_modules/web3-eth-ens/lib/esm/abi/ens/ENSRegistry.js
var ENSRegistryAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "label",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "NewOwner",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "address",
        name: "resolver",
        type: "address"
      }
    ],
    name: "NewResolver",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "recordExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "resolver",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "ttl",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

// node_modules/web3-eth-ens/lib/esm/abi/ens/PublicResolver.js
var PublicResolverAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "address",
        name: "a",
        type: "address"
      }
    ],
    name: "AddrChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "coinType",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "newAddress",
        type: "bytes"
      }
    ],
    name: "AddressChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "hash",
        type: "bytes"
      }
    ],
    name: "ContenthashChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "name",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "resource",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "record",
        type: "bytes"
      }
    ],
    name: "DNSRecordChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "name",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "resource",
        type: "uint16"
      }
    ],
    name: "DNSRecordDeleted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "DNSZoneCleared",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "lastzonehash",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "zonehash",
        type: "bytes"
      }
    ],
    name: "DNSZonehashChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4"
      },
      {
        indexed: false,
        internalType: "address",
        name: "implementer",
        type: "address"
      }
    ],
    name: "InterfaceChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string"
      }
    ],
    name: "NameChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "x",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "y",
        type: "bytes32"
      }
    ],
    name: "PubkeyChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "string",
        name: "indexedKey",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string"
      }
    ],
    name: "TextChanged",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "contentTypes",
        type: "uint256"
      }
    ],
    name: "ABI",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "addr",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "coinType",
        type: "uint256"
      }
    ],
    name: "addr",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "contenthash",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32"
      },
      {
        internalType: "uint16",
        name: "resource",
        type: "uint16"
      }
    ],
    name: "dnsRecord",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32"
      }
    ],
    name: "hasDNSRecords",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4"
      }
    ],
    name: "interfaceImplementer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "pubkey",
    outputs: [
      {
        internalType: "bytes32",
        name: "x",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "y",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "string",
        name: "key",
        type: "string"
      }
    ],
    name: "text",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      }
    ],
    name: "zonehash",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "a",
        type: "address"
      }
    ],
    name: "setAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// node_modules/web3-eth-ens/lib/esm/utils.js
var normalize = (name2) => ens_normalize(name2);
var namehash = (inputName) => {
  let node = "";
  for (let i = 0; i < 32; i += 1) {
    node += "00";
  }
  if (inputName) {
    const name2 = normalize(inputName);
    const labels = name2.split(".");
    for (let i = labels.length - 1; i >= 0; i -= 1) {
      const labelSha = sha3Raw(labels[i]).slice(2);
      node = sha3Raw(`0x${node}${labelSha}`).slice(2);
    }
  }
  return `0x${node}`;
};

// node_modules/web3-eth-ens/lib/esm/registry.js
var __awaiter32 = function(thisArg, _arguments, P, generator) {
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
var Registry = class {
  constructor(context, customRegistryAddress) {
    this.contract = new Contract(ENSRegistryAbi, customRegistryAddress !== null && customRegistryAddress !== void 0 ? customRegistryAddress : registryAddresses.main, context);
    this.context = context;
  }
  getOwner(name2) {
    return __awaiter32(this, void 0, void 0, function* () {
      try {
        const result = this.contract.methods.owner(namehash(name2)).call();
        return result;
      } catch (error) {
        throw new Error();
      }
    });
  }
  getTTL(name2) {
    return __awaiter32(this, void 0, void 0, function* () {
      try {
        return this.contract.methods.ttl(namehash(name2)).call();
      } catch (error) {
        throw new Error();
      }
    });
  }
  recordExists(name2) {
    return __awaiter32(this, void 0, void 0, function* () {
      try {
        const promise = this.contract.methods.recordExists(namehash(name2)).call();
        return promise;
      } catch (error) {
        throw new Error();
      }
    });
  }
  getResolver(name2) {
    return __awaiter32(this, void 0, void 0, function* () {
      try {
        return this.contract.methods.resolver(namehash(name2)).call().then((address) => {
          if (typeof address === "string") {
            const contract = new Contract(PublicResolverAbi, address, this.context);
            return contract;
          }
          throw new Error();
        });
      } catch (error) {
        throw new Error();
      }
    });
  }
  get events() {
    return this.contract.events;
  }
};

// node_modules/web3-eth-ens/lib/esm/resolver.js
var __awaiter33 = function(thisArg, _arguments, P, generator) {
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
var Resolver = class {
  constructor(registry) {
    this.registry = registry;
  }
  getResolverContractAdapter(ENSName) {
    return __awaiter33(this, void 0, void 0, function* () {
      return this.registry.getResolver(ENSName);
    });
  }
  //  https://eips.ethereum.org/EIPS/eip-165
  // eslint-disable-next-line class-methods-use-this
  checkInterfaceSupport(resolverContract, methodName) {
    var _a3, _b;
    return __awaiter33(this, void 0, void 0, function* () {
      if (isNullish2(interfaceIds[methodName]))
        throw new ResolverMethodMissingError((_a3 = resolverContract.options.address) !== null && _a3 !== void 0 ? _a3 : "", methodName);
      const supported = yield resolverContract.methods.supportsInterface(interfaceIds[methodName]).call();
      if (!supported)
        throw new ResolverMethodMissingError((_b = resolverContract.options.address) !== null && _b !== void 0 ? _b : "", methodName);
    });
  }
  supportsInterface(ENSName, interfaceId) {
    var _a3;
    return __awaiter33(this, void 0, void 0, function* () {
      const resolverContract = yield this.getResolverContractAdapter(ENSName);
      let interfaceIdParam = interfaceId;
      if (!isHexStrict(interfaceIdParam)) {
        interfaceIdParam = (_a3 = sha3(interfaceId)) !== null && _a3 !== void 0 ? _a3 : "";
        if (interfaceId === "")
          throw new Error("Invalid interface Id");
        interfaceIdParam = interfaceIdParam.slice(0, 10);
      }
      return resolverContract.methods.supportsInterface(interfaceIdParam).call();
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  getAddress(ENSName, coinType = 60) {
    return __awaiter33(this, void 0, void 0, function* () {
      const resolverContract = yield this.getResolverContractAdapter(ENSName);
      yield this.checkInterfaceSupport(resolverContract, methodsInInterface.addr);
      return resolverContract.methods.addr(namehash(ENSName), coinType).call();
    });
  }
  getPubkey(ENSName) {
    return __awaiter33(this, void 0, void 0, function* () {
      const resolverContract = yield this.getResolverContractAdapter(ENSName);
      yield this.checkInterfaceSupport(resolverContract, methodsInInterface.pubkey);
      return resolverContract.methods.pubkey(namehash(ENSName)).call();
    });
  }
  getContenthash(ENSName) {
    return __awaiter33(this, void 0, void 0, function* () {
      const resolverContract = yield this.getResolverContractAdapter(ENSName);
      yield this.checkInterfaceSupport(resolverContract, methodsInInterface.contenthash);
      return resolverContract.methods.contenthash(namehash(ENSName)).call();
    });
  }
  setAddress(ENSName, address, txConfig) {
    return __awaiter33(this, void 0, void 0, function* () {
      const resolverContract = yield this.getResolverContractAdapter(ENSName);
      yield this.checkInterfaceSupport(resolverContract, methodsInInterface.setAddr);
      return resolverContract.methods.setAddr(namehash(ENSName), address).send(txConfig);
    });
  }
  getText(ENSName, key) {
    return __awaiter33(this, void 0, void 0, function* () {
      const resolverContract = yield this.getResolverContractAdapter(ENSName);
      yield this.checkInterfaceSupport(resolverContract, methodsInInterface.text);
      return resolverContract.methods.text(namehash(ENSName), key).call();
    });
  }
  getName(address, checkInterfaceSupport = true) {
    return __awaiter33(this, void 0, void 0, function* () {
      const reverseName = `${address.toLowerCase().substring(2)}.addr.reverse`;
      const resolverContract = yield this.getResolverContractAdapter(reverseName);
      if (checkInterfaceSupport)
        yield this.checkInterfaceSupport(resolverContract, methodsInInterface.name);
      return resolverContract.methods.name(namehash(reverseName)).call();
    });
  }
};

// node_modules/web3-eth-ens/lib/esm/ens.js
var __awaiter34 = function(thisArg, _arguments, P, generator) {
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
var ENS = class extends Web3Context {
  /**
   * Use to create an instance of ENS
   * @param registryAddr - (Optional) The address of the ENS registry (default: mainnet registry address)
   * @param provider - (Optional) The provider to use for the ENS instance
   * @example
   * ```ts
   * const ens = new ENS(
   * 	"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
   * 	"http://localhost:8545"
   * );
   *
   * console.log( ens.defaultChain);
   * > mainnet
   * ```
   */
  constructor(registryAddr, provider) {
    super(provider !== null && provider !== void 0 ? provider : "");
    this.registryAddress = registryAddr !== null && registryAddr !== void 0 ? registryAddr : registryAddresses.main;
    this._registry = new Registry(this.getContextObject(), registryAddr);
    this._resolver = new Resolver(this._registry);
  }
  /**
   * Returns the Resolver by the given address
   * @param name - The name of the ENS domain
   * @returns - An contract instance of the resolver
   *
   * @example
   * ```ts
   * const resolver = await ens.getResolver('resolver');
   *
   * console.log(resolver.options.address);
   * > '0x1234567890123456789012345678901234567890'
   * ```
   */
  getResolver(name2) {
    return __awaiter34(this, void 0, void 0, function* () {
      return this._registry.getResolver(name2);
    });
  }
  /**
   * Returns true if the record exists
   * @param name - The ENS name
   * @returns - Returns `true` if node exists in this ENS registry. This will return `false` for records that are in the legacy ENS registry but have not yet been migrated to the new one.
   * @example
   * ```ts
   * const exists = await web3.eth.ens.recordExists('ethereum.eth');
   * ```
   */
  recordExists(name2) {
    return __awaiter34(this, void 0, void 0, function* () {
      return this._registry.recordExists(name2);
    });
  }
  /**
   * Returns the caching TTL (time-to-live) of an ENS name.
   * @param name - The ENS name
   * @returns - Returns the caching TTL (time-to-live) of a name.
   * @example
   * ```ts
   * const owner = await web3.eth.ens.getTTL('ethereum.eth');
   * ```
   */
  getTTL(name2) {
    return __awaiter34(this, void 0, void 0, function* () {
      return this._registry.getTTL(name2);
    });
  }
  /**
   * Returns the owner by the given name and current configured or detected Registry
   * @param name - The ENS name
   * @returns - Returns the address of the owner of the name.
   * @example
   * ```ts
   * const owner = await web3.eth.ens.getOwner('ethereum.eth');
   * ```
   */
  getOwner(name2) {
    return __awaiter34(this, void 0, void 0, function* () {
      return this._registry.getOwner(name2);
    });
  }
  /**
   * Resolves an ENS name to an Ethereum address.
   * @param ENSName - The ENS name to resolve
   * @param coinType - (Optional) The coin type, defaults to 60 (ETH)
   * @returns - The Ethereum address of the given name
   * ```ts
   * const address = await web3.eth.ens.getAddress('ethereum.eth');
   * console.log(address);
   * > '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359'
   * ```
   */
  getAddress(ENSName, coinType = 60) {
    return __awaiter34(this, void 0, void 0, function* () {
      return this._resolver.getAddress(ENSName, coinType);
    });
  }
  /**
   * ERC-634 - Returns the text content stored in the resolver for the specified key.
   * @param ENSName - The ENS name to resolve
   * @param key - The key to resolve https://github.com/ethereum/ercs/blob/master/ERCS/erc-634.md#global-keys
   * @returns - The value content stored in the resolver for the specified key
   */
  getText(ENSNameOrAddr, key) {
    return __awaiter34(this, void 0, void 0, function* () {
      if (isAddress(ENSNameOrAddr))
        return this._resolver.getText(yield this._resolver.getName(ENSNameOrAddr, false), key);
      return this._resolver.getText(ENSNameOrAddr, key);
    });
  }
  /**
   * Resolves the name of an ENS node.
   * @param ENSName - The node to resolve
   * @returns - The name
   */
  getName(ENSName, checkInterfaceSupport = true) {
    return __awaiter34(this, void 0, void 0, function* () {
      return this._resolver.getName(ENSName, checkInterfaceSupport);
    });
  }
  /**
   * Returns the X and Y coordinates of the curve point for the public key.
   * @param ENSName - The ENS name
   * @returns - The X and Y coordinates of the curve point for the public key
   * @example
   * ```ts
   * const key = await web3.eth.ens.getPubkey('ethereum.eth');
   * console.log(key);
   * > {
   * "0": "0x0000000000000000000000000000000000000000000000000000000000000000",
   * "1": "0x0000000000000000000000000000000000000000000000000000000000000000",
   * "x": "0x0000000000000000000000000000000000000000000000000000000000000000",
   * "y": "0x0000000000000000000000000000000000000000000000000000000000000000"
   * }
   * ```
   */
  getPubkey(ENSName) {
    return __awaiter34(this, void 0, void 0, function* () {
      return this._resolver.getPubkey(ENSName);
    });
  }
  /**
   * Returns the content hash object associated with an ENS node.
   * @param ENSName - The ENS name
   * @returns - The content hash object associated with an ENS node
   * @example
   * ```ts
   * const hash = await web3.eth.ens.getContenthash('ethereum.eth');
   * console.log(hash);
   * > 'QmaEBknbGT4bTQiQoe2VNgBJbRfygQGktnaW5TbuKixjYL'
   * ```
   */
  getContenthash(ENSName) {
    return __awaiter34(this, void 0, void 0, function* () {
      return this._resolver.getContenthash(ENSName);
    });
  }
  /**
   * Checks if the current used network is synced and looks for ENS support there.
   * Throws an error if not.
   * @returns - The address of the ENS registry if the network has been detected successfully
   * @example
   * ```ts
   * console.log(await web3.eth.ens.checkNetwork());
   * > '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
   * ```
   */
  checkNetwork() {
    return __awaiter34(this, void 0, void 0, function* () {
      const now = Date.now() / 1e3;
      if (!this._lastSyncCheck || now - this._lastSyncCheck > 3600) {
        const syncInfo = yield isSyncing(this);
        if (!(typeof syncInfo === "boolean" && !syncInfo)) {
          throw new ENSNetworkNotSyncedError();
        }
        this._lastSyncCheck = now;
      }
      if (this._detectedAddress) {
        return this._detectedAddress;
      }
      const networkType = yield getId2(this, Object.assign(Object.assign({}, this.defaultReturnFormat), { number: FMT_NUMBER.HEX }));
      const addr = registryAddresses[networkIds[networkType]];
      if (typeof addr === "undefined") {
        throw new ENSUnsupportedNetworkError(networkType);
      }
      this._detectedAddress = addr;
      return this._detectedAddress;
    });
  }
  /**
   * Returns true if the related Resolver does support the given signature or interfaceId.
   * @param ENSName - The ENS name
   * @param interfaceId - The signature of the function or the interfaceId as described in the ENS documentation
   * @returns - `true` if the related Resolver does support the given signature or interfaceId.
   * @example
   * ```ts
   * const supports = await web3.eth.ens.supportsInterface('ethereum.eth', 'addr(bytes32');
   * console.log(supports);
   * > true
   * ```
   */
  supportsInterface(ENSName, interfaceId) {
    return __awaiter34(this, void 0, void 0, function* () {
      return this._resolver.supportsInterface(ENSName, interfaceId);
    });
  }
  /**
   * @returns - Returns all events that can be emitted by the ENS registry.
   */
  get events() {
    return this._registry.events;
  }
  /**
   * Sets the address of an ENS name in his resolver.
   * @param name - The ENS name
   * @param address - The address to set
   * @param txConfig - (Optional) The transaction config
   * @returns - The transaction receipt
   * ```ts
   * const receipt = await ens.setAddress('web3js.eth','0xe2597eb05cf9a87eb1309e86750c903ec38e527e');
   *```
   */
  setAddress(name2, address, txConfig) {
    return __awaiter34(this, void 0, void 0, function* () {
      return this._resolver.setAddress(name2, address, txConfig);
    });
  }
};

// node_modules/web3-eth-personal/lib/esm/index.js
var esm_exports15 = {};
__export(esm_exports15, {
  Personal: () => Personal,
  default: () => esm_default4
});

// node_modules/web3-eth-personal/lib/esm/rpc_method_wrappers.js
var __awaiter35 = function(thisArg, _arguments, P, generator) {
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
var getAccounts3 = (requestManager) => __awaiter35(void 0, void 0, void 0, function* () {
  const result = yield personal_rpc_methods_exports.getAccounts(requestManager);
  return result.map(toChecksumAddress);
});
var newAccount2 = (requestManager, password) => __awaiter35(void 0, void 0, void 0, function* () {
  validator.validate(["string"], [password]);
  const result = yield personal_rpc_methods_exports.newAccount(requestManager, password);
  return toChecksumAddress(result);
});
var unlockAccount2 = (requestManager, address, password, unlockDuration) => __awaiter35(void 0, void 0, void 0, function* () {
  validator.validate(["address", "string", "uint"], [address, password, unlockDuration]);
  return personal_rpc_methods_exports.unlockAccount(requestManager, address, password, unlockDuration);
});
var lockAccount2 = (requestManager, address) => __awaiter35(void 0, void 0, void 0, function* () {
  validator.validate(["address"], [address]);
  return personal_rpc_methods_exports.lockAccount(requestManager, address);
});
var importRawKey2 = (requestManager, keyData, passphrase) => __awaiter35(void 0, void 0, void 0, function* () {
  validator.validate(["string", "string"], [keyData, passphrase]);
  return personal_rpc_methods_exports.importRawKey(requestManager, keyData, passphrase);
});
var sendTransaction4 = (requestManager, tx, passphrase, config) => __awaiter35(void 0, void 0, void 0, function* () {
  const formattedTx = formatTransaction(tx, ETH_DATA_FORMAT, {
    transactionSchema: config === null || config === void 0 ? void 0 : config.customTransactionSchema
  });
  return personal_rpc_methods_exports.sendTransaction(requestManager, formattedTx, passphrase);
});
var signTransaction5 = (requestManager, tx, passphrase, config) => __awaiter35(void 0, void 0, void 0, function* () {
  const formattedTx = formatTransaction(tx, ETH_DATA_FORMAT, {
    transactionSchema: config === null || config === void 0 ? void 0 : config.customTransactionSchema
  });
  return personal_rpc_methods_exports.signTransaction(requestManager, formattedTx, passphrase);
});
var sign5 = (requestManager, data, address, passphrase) => __awaiter35(void 0, void 0, void 0, function* () {
  validator.validate(["string", "address", "string"], [data, address, passphrase]);
  const dataToSign = isHexStrict(data) ? data : utf8ToHex(data);
  return personal_rpc_methods_exports.sign(requestManager, dataToSign, address, passphrase);
});
var ecRecover2 = (requestManager, signedData, signature) => __awaiter35(void 0, void 0, void 0, function* () {
  validator.validate(["string", "string"], [signedData, signature]);
  const signedDataString = isHexStrict(signedData) ? signedData : utf8ToHex(signedData);
  return personal_rpc_methods_exports.ecRecover(requestManager, signedDataString, signature);
});

// node_modules/web3-eth-personal/lib/esm/personal.js
var __awaiter36 = function(thisArg, _arguments, P, generator) {
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
var Personal = class extends Web3Context {
  /**
   *Returns a list of accounts the node controls by using the provider and calling the RPC method personal_listAccounts. Using `web3.eth.accounts.create()` will not add accounts into this list. For that use `web3.eth.personal.newAccount()`.
   * @returns - An array of addresses controlled by the node.
   * @example
   * ```ts
   *  const accounts = await personal.getAccounts();
   * console.log(accounts);
   * >
   * [
   * 	'0x79D7BbaC53C9aF700d0B250e9AE789E503Fcd6AE',
   * 	'0xe2597eB05CF9a87eB1309e86750C903EC38E527e',
   * 	'0x7eD0e85B8E1E925600B4373e6d108F34AB38a401',
   * 	'0xE4bEEf667408b99053dC147Ed19592aDa0d77F59',
   * 	'0x7AB80aeB6bb488B7f6c41c58e83Ef248eB39c882',
   * 	'0x12B1D9d74d73b1C3A245B19C1C5501c653aF1af9',
   * 	'0x1a6075A263Ee140e00Dbf8E374Fc5A443d097894',
   * 	'0x4FEC0A51024B13030D26E70904B066C6d41157A5',
   * 	'0x03095dc4857BB26f3a4550c5651Df8b7f6b6B1Ef',
   * 	'0xac0B9b6e8A17991cb172B2ABAF45Fb5eb769E540'
   * ]
   * ```
   */
  getAccounts() {
    return __awaiter36(this, void 0, void 0, function* () {
      return getAccounts3(this.requestManager);
    });
  }
  /**
   * Creates a new account and returns its address.
   * **_NOTE:_**  This function sends a sensitive information like password. Never call this function over a unsecured Websocket or HTTP provider, as your password will be sent in plain text!
   * @param password - The password to encrypt the account with.
   * @returns - The address of the new account.
   * @example
   * ```ts
   * const addr = await web3.eth.personal.newAccount('password');
   * console.log(addr);
   * > '0x1234567891011121314151617181920212223456'
   * ```
   */
  newAccount(password) {
    return __awaiter36(this, void 0, void 0, function* () {
      return newAccount2(this.requestManager, password);
    });
  }
  /**
   * Unlocks an account for a given duration.
   * @param address - The address of the account to unlock.
   * @param password - The password of the account to unlock.
   * @param unlockDuration - The duration in seconds to unlock the account for.
   * @example
   * ```ts
   * await personal.unlockAccount(
   * 	"0x0d4aa485ecbc499c70860feb7e5aaeaf5fd8172e",
   * 	"123456",
   * 	600
   * );
   * ```
   */
  unlockAccount(address, password, unlockDuration) {
    return __awaiter36(this, void 0, void 0, function* () {
      return unlockAccount2(this.requestManager, address, password, unlockDuration);
    });
  }
  /**
   * Locks the given account
   * @param address - The address of the account to lock.
   * @returns - `true` if the account was locked, otherwise `false`.
   * @example
   * ```ts
   * await personal.lockAccount(
   * 	"0x0d4aa485ecbc499c70860feb7e5aaeaf5fd8172e"
   * );
   * ```
   */
  lockAccount(address) {
    return __awaiter36(this, void 0, void 0, function* () {
      return lockAccount2(this.requestManager, address);
    });
  }
  /**
   * Imports the given private key into the key store, encrypting it with the passphrase.
   * @param keyData - An unencrypted private key (hex string).
   * @param passphrase  - The password of the account
   * @returns - The address of the new account.
   * @example
   * ```ts
   * const accountAddress = await personal.importRawKey(
   * 	"abe40cb08850da918ee951b237fa87946499b2d8643e4aa12b0610b050c731f6",
   * 	"123456"
   * );
   *
   * console.log(unlockTx);
   * > 0x8727a8b34ec833154b72b62cac05d69f86eb6556
   * ```
   */
  importRawKey(keyData, passphrase) {
    return __awaiter36(this, void 0, void 0, function* () {
      return importRawKey2(this.requestManager, keyData, passphrase);
    });
  }
  /**
   * This method sends a transaction over the management API.
   * **_NOTE:_** Sending your account password over an unsecured HTTP RPC connection is highly unsecure.
   * @param tx - The transaction options
   * @param passphrase - The passphrase of the current account
   * @returns - The transaction hash
   * @example
   * ```ts
   * const txHash = personal
   * .sendTransaction({
   *  	from: "0x0d4aa485ecbc499c70860feb7e5aaeaf5fd8172e",
   * 	gasPrice: "20000000000",
   * 	gas: "21000",
   * 	to: "0x3535353535353535353535353535353535353535",
   * 	value: "1000000",
   * 	data: "",
   * 	nonce: 0,
   * },
   * "123456");
   *
   * console.log(txHash);
   * > 0x9445325c3c5638c9fe425b003b8c32f03e9f99d409555a650a6838ba712bb51b
   * ```
   */
  sendTransaction(tx, passphrase) {
    return __awaiter36(this, void 0, void 0, function* () {
      return sendTransaction4(this.requestManager, tx, passphrase, this.config);
    });
  }
  /**
   * Signs a transaction. This account needs to be unlocked.
   * **_NOTE:_** Sending your account password over an unsecured HTTP RPC connection is highly unsecure.
   * @param tx - The transaction data to sign. See sendTransaction  for more information.
   * @param passphrase - The password of the `from` account, to sign the transaction with.
   * @returns - The RLP encoded transaction. The `raw` property can be used to send the transaction using  sendSignedTransaction.
   * @example
   * ```ts
   * const tx = personal
   * .signTransaction({
   * 	from: "0x0d4aa485ecbc499c70860feb7e5aaeaf5fd8172e",
   * 	gasPrice: "20000000000",
   * 	gas: "21000",
   * 	to: "0x3535353535353535353535353535353535353535",
   * 	value: "1000000000000000000",
   * 	data: "",
   * 	nonce: 0,
   * },
   * "123456");
   *
   * console.log(tx);
   *
   * > {
   * 	raw: '0xf86e808504a817c800825208943535353535353535353535353535353535353535880de0b6b3a764000080820a95a0c951c03238fe930e6e69ab9d6af9f29248a514048e44884f0e60c4de40de3526a038b71399bf0c8925749ab79e91ce6cd2fc068c84c18ff6a197b48c4cbef01e00',
   * 	tx: {
   * 	type: '0x0',
   * 	nonce: '0x0',
   * 	gasPrice: '0x4a817c800',
   * 	maxPriorityFeePerGas: null,
   * 	maxFeePerGas: null,
   * 	gas: '0x5208',
   * 	value: '0xde0b6b3a7640000',
   * 	input: '0x',
   * 	v: '0xa95',
   * 	r: '0xc951c03238fe930e6e69ab9d6af9f29248a514048e44884f0e60c4de40de3526',
   * 	s: '0x38b71399bf0c8925749ab79e91ce6cd2fc068c84c18ff6a197b48c4cbef01e00',
   * 	to: '0x3535353535353535353535353535353535353535',
   * 	hash: '0x65e3df790ab2a32068b13cff970b26445b8995229ae4abbed61bd996f09fce69'
   * 	}
   * }
   * ```
   */
  signTransaction(tx, passphrase) {
    return __awaiter36(this, void 0, void 0, function* () {
      return signTransaction5(this.requestManager, tx, passphrase, this.config);
    });
  }
  /**
   * Calculates an Ethereum specific signature with:
   * sign(keccak256("\x19Ethereum Signed Message:\n" + dataToSign.length + dataToSign)))
   * Adding a prefix to the message makes the calculated signature recognisable as an Ethereum specific signature.
   *
   * If you have the original message and the signed message, you can discover the signing account address using web3.eth.personal.ecRecover
   * **_NOTE:_** Sending your account password over an unsecured HTTP RPC connection is highly unsecure.
   * @param data - The data to sign.
   * @param address - The address to sign with.
   * @param passphrase - The passphrase to decrypt the account with.
   * @returns - The signature.
   * @example
   * ```ts
   * const sig = await personal.sign("Hello world", "0x0D4Aa485ECbC499c70860fEb7e5AaeAf5fd8172E", "123456")
   * console.log(sig)
   * > 0x5d21d01b3198ac34d0585a9d76c4d1c8123e5e06746c8962318a1c08ffb207596e6fce4a6f377b7c0fc98c5f646cd73438c80e8a1a95cbec55a84c2889dca0301b
   * ```
   */
  sign(data, address, passphrase) {
    return __awaiter36(this, void 0, void 0, function* () {
      return sign5(this.requestManager, data, address, passphrase);
    });
  }
  /**
   * Recovers the account that signed the data.
   * @param signedData - Data that was signed. If String it will be converted using {@link utf8ToHex}
   * @param signature - The signature
   * @returns - The address of the account that signed the data.
   * @example
   * ```ts
   *  const address = await personal.ecRecover(
   * 	"Hello world",
   * 	"0x5d21d01b3198ac34d0585a9d76c4d1c8123e5e06746c8962318a1c08ffb207596e6fce4a6f377b7c0fc98c5f646cd73438c80e8a1a95cbec55a84c2889dca0301b"
   * );
   * console.log(address);
   * > 0x0d4aa485ecbc499c70860feb7e5aaeaf5fd8172e
   * ```
   */
  ecRecover(signedData, signature) {
    return __awaiter36(this, void 0, void 0, function* () {
      return ecRecover2(this.requestManager, signedData, signature);
    });
  }
};

// node_modules/web3-eth-personal/lib/esm/index.js
var esm_default4 = Personal;

// node_modules/web3-rpc-providers/lib/esm/types.js
var Transport;
(function(Transport2) {
  Transport2["HTTPS"] = "https";
  Transport2["WebSocket"] = "wss";
})(Transport || (Transport = {}));
var Network;
(function(Network2) {
  Network2["ETH_MAINNET"] = "eth_mainnet";
  Network2["ETH_SEPOLIA"] = "eth_sepolia";
  Network2["ETH_HOLESKY"] = "eth_holesky";
  Network2["POLYGON_MAINNET"] = "polygon_mainnet";
  Network2["POLYGON_AMOY"] = "polygon_amoy";
  Network2["AVALANCHE_C_MAINNET"] = "avalanche_c_mainnet";
  Network2["AVALANCHE_P_MAINNET"] = "avalanche_p_mainnet";
  Network2["AVALANCHE_X_MAINNET"] = "avalanche_x_mainnet";
  Network2["ARBITRUM_MAINNET"] = "arbitrum_mainnet";
  Network2["ARBITRUM_SEPOLIA"] = "arbitrum_sepolia";
  Network2["BASE_MAINNET"] = "base_mainnet";
  Network2["BASE_SEPOLIA"] = "base_sepolia";
  Network2["OPTIMISM_MAINNET"] = "optimism_mainnet";
  Network2["OPTIMISM_SEPOLIA"] = "optimism_sepolia";
  Network2["FANTOM_MAINNET"] = "fantom_mainnet";
  Network2["FANTOM_TESTNET"] = "fantom_testnet";
  Network2["DYMENSION_MAINNET"] = "dymension_mainnet";
  Network2["DYMENSION_TESTNET"] = "dymension_testnet";
  Network2["BNB_MAINNET"] = "bnb_mainnet";
  Network2["BNB_TESTNET"] = "bnb_testnet";
  Network2["BSC_MAINNET"] = "bsc_mainnet";
  Network2["BSC_TESTNET"] = "bsc_testnet";
  Network2["ARBITRUM_ONE"] = "arbitrum_one";
  Network2["ARBITRUM_NOVA"] = "arbitrum_nova";
  Network2["AVALANCHE_FUJI_C"] = "avalanche_fuji_c";
  Network2["AVALANCHE_FUJI_P"] = "avalanche_fuji_p";
  Network2["AVALANCHE_FUJI_X"] = "avalanche_fuji_x";
  Network2["BLAST_MAINNET"] = "blast_mainnet";
  Network2["OPBNB_MAINNET"] = "opbnb_mainnet";
  Network2["OPBNB_TESTNET"] = "opbnb_testnet";
  Network2["GNOSIS_MAINNET"] = "gnosis_mainnet";
  Network2["GNOSIS_CHIADO"] = "gnosis_chiado";
  Network2["PULSECHAIN_MAINNET"] = "pulsechain_mainnet";
  Network2["PULSECHAIN_TESTNET"] = "pulsechain_testnet";
  Network2["KAVA_MAINNET"] = "kava_mainnet";
  Network2["CRONOS_MAINNET"] = "cronos_mainnet";
  Network2["MANTLE_MAINNET"] = "mantle_mainnet";
  Network2["CHILIZ_MAINNET"] = "chiliz_mainnet";
  Network2["CHILIZ_SPICY"] = "chiliz_spicy";
  Network2["MOONBEAM_MAINNET"] = "moonbeam_mainnet";
  Network2["TAIKO_MAINNET"] = "taiko_mainnet";
  Network2["TAIKO_HEKLA"] = "taiko_hekla";
  Network2["LINEA_MAINNET"] = "linea_mainnet";
  Network2["LINEA_SEPOLIA"] = "linea_sepolia";
  Network2["BAHAMUT_MAINNET"] = "bahamut_mainnet";
  Network2["SCROLL_MAINNET"] = "scroll_mainnet";
  Network2["SCROLL_SEPOLIA"] = "scroll_sepolia";
  Network2["TRON_MAINNET"] = "tron_mainnet";
  Network2["SYSCOIN_MAINNET"] = "syscoin_mainnet";
  Network2["SYSCOIN_TANENBAUM"] = "syscoin_tanenbaum";
  Network2["MOONRIVER_MAINNET"] = "moonriver_mainnet";
  Network2["HAQQ_MAINNET"] = "haqq_mainnet";
  Network2["EVMOS_MAINNET"] = "evmos_mainnet";
  Network2["EVMOS_TESTNET"] = "evmos_testnet";
  Network2["BERACHAIN_TESTNET"] = "berachain_testnet";
})(Network || (Network = {}));

// node_modules/web3-rpc-providers/lib/esm/errors.js
var ERR_QUICK_NODE_RATE_LIMIT = 1300;
var QuickNodeRateLimitError = class extends BaseWeb3Error {
  constructor(error) {
    super(`You've reach the rate limit of free RPC calls from our Partner Quick Nodes. There are two options you can either create a paid Quick Nodes account and get 20% off for 2 months using WEB3JS referral code, or use Free public RPC endpoint.`, error);
    this.code = ERR_QUICK_NODE_RATE_LIMIT;
  }
};
var ERR_PROVIDER_CONFIG_OPTIONS = 1301;
var ProviderConfigOptionsError = class extends BaseWeb3Error {
  constructor(msg) {
    super(`Invalid provider config options given for ${msg}`);
    this.code = ERR_PROVIDER_CONFIG_OPTIONS;
  }
};

// node_modules/web3-rpc-providers/lib/esm/web3_provider.js
var __awaiter37 = function(thisArg, _arguments, P, generator) {
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
var Web3ExternalProvider = class extends Eip1193Provider {
  constructor(network, transport, token, host, providerConfigOptions) {
    super();
    if (providerConfigOptions !== void 0 && transport === Transport.HTTPS && !("providerOptions" in providerConfigOptions)) {
      throw new ProviderConfigOptionsError("HTTP Provider");
    } else if (providerConfigOptions !== void 0 && transport === Transport.WebSocket && !("socketOptions" in providerConfigOptions || "reconnectOptions" in providerConfigOptions)) {
      throw new ProviderConfigOptionsError("Websocket Provider");
    }
    this.transport = transport;
    if (transport === Transport.HTTPS) {
      this.provider = new HttpProvider(this.getRPCURL(network, transport, token, host), providerConfigOptions);
    } else if (transport === Transport.WebSocket) {
      this.provider = new WebSocketProvider(this.getRPCURL(network, transport, token, host), providerConfigOptions === null || providerConfigOptions === void 0 ? void 0 : providerConfigOptions.socketOptions, providerConfigOptions === null || providerConfigOptions === void 0 ? void 0 : providerConfigOptions.reconnectOptions);
    }
  }
  request(payload, requestOptions) {
    return __awaiter37(this, void 0, void 0, function* () {
      if (this.transport === Transport.HTTPS) {
        return yield this.provider.request(payload, requestOptions);
      }
      return this.provider.request(payload);
    });
  }
  getStatus() {
    return this.provider.getStatus();
  }
  supportsSubscriptions() {
    return this.provider.supportsSubscriptions();
  }
  once(_type, _listener) {
    var _a3;
    if ((_a3 = this.provider) === null || _a3 === void 0 ? void 0 : _a3.once) {
      this.provider.once(_type, _listener);
    }
  }
  removeAllListeners(_type) {
    var _a3;
    if ((_a3 = this.provider) === null || _a3 === void 0 ? void 0 : _a3.removeAllListeners)
      this.provider.removeAllListeners(_type);
  }
  connect() {
    var _a3;
    if ((_a3 = this.provider) === null || _a3 === void 0 ? void 0 : _a3.connect)
      this.provider.connect();
  }
  disconnect(_code, _data) {
    var _a3;
    if ((_a3 = this.provider) === null || _a3 === void 0 ? void 0 : _a3.disconnect)
      this.provider.disconnect(_code, _data);
  }
  reset() {
    var _a3;
    if ((_a3 = this.provider) === null || _a3 === void 0 ? void 0 : _a3.reset)
      this.provider.reset();
  }
  on(_type, _listener) {
    if (this.provider)
      this.provider.on(_type, _listener);
  }
  removeListener(_type, _listener) {
    if (this.provider)
      this.provider.removeListener(_type, _listener);
  }
};

// node_modules/web3-rpc-providers/lib/esm/web3_provider_quicknode.js
var __awaiter38 = function(thisArg, _arguments, P, generator) {
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
var isValid = (str) => str !== void 0 && str.trim().length > 0;
var QuickNodeProvider = class extends Web3ExternalProvider {
  // eslint-disable-next-line default-param-last
  constructor(network = Network.ETH_MAINNET, transport = Transport.HTTPS, token = "", host = "", providerConfigOptions) {
    super(network, transport, token, host, providerConfigOptions);
  }
  request(payload, requestOptions) {
    const _super = Object.create(null, {
      request: { get: () => super.request }
    });
    return __awaiter38(this, void 0, void 0, function* () {
      try {
        return yield _super.request.call(this, payload, requestOptions);
      } catch (error) {
        if (error instanceof ResponseError && error.statusCode === 429) {
          throw new QuickNodeRateLimitError(error);
        }
        throw error;
      }
    });
  }
  // eslint-disable-next-line class-methods-use-this
  getRPCURL(network, transport, _token, _host) {
    let host = "";
    let token = "";
    switch (network) {
      case Network.ETH_MAINNET:
        host = isValid(_host) ? _host : "powerful-holy-bush.quiknode.pro";
        token = isValid(_token) ? _token : "3240624a343867035925ff7561eb60dfdba2a668";
        break;
      case Network.ETH_SEPOLIA:
        host = isValid(_host) ? _host : "dimensional-fabled-glitter.ethereum-sepolia.quiknode.pro";
        token = isValid(_token) ? _token : "382a3b5a4b938f2d6e8686c19af4b22921fde2cd";
        break;
      case Network.ETH_HOLESKY:
        host = isValid(_host) ? _host : "yolo-morning-card.ethereum-holesky.quiknode.pro";
        token = isValid(_token) ? _token : "481ebe70638c4dcf176af617a16d02ab866b9af9";
        break;
      case Network.ARBITRUM_MAINNET:
        host = isValid(_host) ? _host : "autumn-divine-dinghy.arbitrum-mainnet.quiknode.pro";
        token = isValid(_token) ? _token : "a5d7bfbf60b5ae9ce3628e53d69ef50d529e9a8c";
        break;
      case Network.ARBITRUM_SEPOLIA:
        host = isValid(_host) ? _host : "few-patient-pond.arbitrum-sepolia.quiknode.pro";
        token = isValid(_token) ? _token : "3be985450970628c860b959c65cd2642dcafe53c";
        break;
      case Network.BNB_MAINNET:
        host = isValid(_host) ? _host : "purple-empty-reel.bsc.quiknode.pro";
        token = isValid(_token) ? _token : "ebf6c532961e21f092ff2facce1ec4c89c540158";
        break;
      case Network.BNB_TESTNET:
        host = isValid(_host) ? _host : "floral-rough-scion.bsc-testnet.quiknode.pro";
        token = isValid(_token) ? _token : "5b297e5acff5f81f4c37ebf6f235f7299b6f9d28";
        break;
      case Network.POLYGON_MAINNET:
        host = isValid(_host) ? _host : "small-chaotic-moon.matic.quiknode.pro";
        token = isValid(_token) ? _token : "847569f8a017e84d985e10d0f44365d965a951f1";
        break;
      case Network.POLYGON_AMOY:
        host = isValid(_host) ? _host : "prettiest-side-shape.matic-amoy.quiknode.pro";
        token = isValid(_token) ? _token : "79a9476eea661d4f82de614db1d8a895b14b881c";
        break;
      default:
        throw new Error("Network info not avalible.");
    }
    return `${transport}://${host}/${token}`;
  }
};

// node_modules/web3-rpc-providers/lib/esm/web3_provider_publicnode.js
var isValid2 = (str) => str !== void 0 && str.trim().length > 0;
var websocketExclusions = [
  Network.DYMENSION_MAINNET,
  Network.DYMENSION_TESTNET,
  Network.KAVA_MAINNET,
  Network.CRONOS_MAINNET,
  // deprecated
  Network.POLYGON_MAINNET
];
var PublicNodeProvider = class _PublicNodeProvider extends Web3ExternalProvider {
  // eslint-disable-next-line default-param-last
  constructor(network = Network.ETH_MAINNET, transport = Transport.HTTPS, host = "", providerConfigOptions) {
    super(network, transport, "", host, providerConfigOptions);
  }
  // eslint-disable-next-line class-methods-use-this
  getRPCURL(network, transport, _, _host) {
    if (!_PublicNodeProvider.networkHostMap[network]) {
      throw new Error("Network info not avalible.");
    }
    const defaultHost = `${_PublicNodeProvider.networkHostMap[network]}.publicnode.com`;
    const host = isValid2(_host) ? _host : defaultHost;
    if (websocketExclusions.includes(network) && transport === Transport.WebSocket) {
      return `${transport}://${host}/websocket`;
    }
    return `${transport}://${host}`;
  }
};
PublicNodeProvider.networkHostMap = {
  [Network.POLYGON_AMOY]: "polygon-amoy-bor-rpc",
  [Network.DYMENSION_MAINNET]: "dymension-evm-rpc",
  [Network.DYMENSION_TESTNET]: "dymension-testnet-evm-rpc",
  [Network.BLAST_MAINNET]: "blast-rpc",
  [Network.GNOSIS_MAINNET]: "gnosis-rpc",
  [Network.PULSECHAIN_MAINNET]: "pulsechain-rpc",
  [Network.PULSECHAIN_TESTNET]: "pulsechain-testnet-rpc",
  [Network.KAVA_MAINNET]: "kava-evm-rpc",
  [Network.CRONOS_MAINNET]: "cronos-evm-rpc",
  [Network.MANTLE_MAINNET]: "mantle-rpc",
  [Network.TAIKO_MAINNET]: "taiko-rpc",
  [Network.TAIKO_HEKLA]: "taiko-hekla-rpc",
  [Network.LINEA_MAINNET]: "linea-rpc",
  [Network.LINEA_SEPOLIA]: "linea-sepolia-rpc",
  [Network.SCROLL_MAINNET]: "scroll-rpc",
  [Network.SCROLL_SEPOLIA]: "scroll-sepolia-rpc",
  [Network.SYSCOIN_MAINNET]: "syscoin-evm-rpc",
  [Network.SYSCOIN_TANENBAUM]: "syscoin-tanenbaum-evm-rpc",
  [Network.HAQQ_MAINNET]: "haqq-evm-rpc",
  [Network.EVMOS_MAINNET]: "evmos-evm-rpc",
  [Network.EVMOS_TESTNET]: "evmos-testnet-evm-rpc",
  [Network.BERACHAIN_TESTNET]: "berachain-testnet-evm-rpc",
  [Network.ETH_MAINNET]: "ethereum-rpc",
  [Network.ETH_SEPOLIA]: "ethereum-sepolia-rpc",
  [Network.ETH_HOLESKY]: "ethereum-holesky-rpc",
  [Network.BSC_MAINNET]: "bsc-rpc",
  [Network.BSC_TESTNET]: "bsc-testnet-rpc",
  [Network.POLYGON_MAINNET]: "polygon-bor-rpc",
  [Network.BASE_MAINNET]: "base-rpc",
  [Network.BASE_SEPOLIA]: "base-sepolia-rpc",
  [Network.ARBITRUM_ONE]: "arbitrum-one-rpc",
  [Network.ARBITRUM_NOVA]: "arbitrum-nova-rpc",
  [Network.ARBITRUM_SEPOLIA]: "arbitrum-sepolia-rpc",
  [Network.AVALANCHE_C_MAINNET]: "avalanche-c-chain-rpc",
  [Network.AVALANCHE_P_MAINNET]: "avalanche-p-chain-rpc",
  [Network.AVALANCHE_X_MAINNET]: "avalanche-x-chain-rpc",
  [Network.AVALANCHE_FUJI_C]: "avalanche-fuji-c-chain-rpc",
  [Network.AVALANCHE_FUJI_P]: "avalanche-fuji-p-chain-rpc",
  [Network.AVALANCHE_FUJI_X]: "avalanche-fuji-x-chain-rpc",
  [Network.OPTIMISM_MAINNET]: "optimism-rpc",
  [Network.OPTIMISM_SEPOLIA]: "optimism-sepolia-rpc",
  [Network.FANTOM_MAINNET]: "fantom-rpc",
  [Network.FANTOM_TESTNET]: "fantom-testnet-rpc",
  [Network.OPBNB_MAINNET]: "opbnb-rpc",
  [Network.OPBNB_TESTNET]: "opbnb-testnet-rpc",
  [Network.GNOSIS_CHIADO]: "gnosis-chiado-rpc",
  [Network.CHILIZ_MAINNET]: "chiliz-rpc",
  [Network.CHILIZ_SPICY]: "chiliz-spicy-rpc",
  [Network.MOONBEAM_MAINNET]: "moonbeam-rpc",
  [Network.BAHAMUT_MAINNET]: "bahamut-rpc",
  [Network.TRON_MAINNET]: "tron-evm-rpc",
  [Network.MOONRIVER_MAINNET]: "moonriver-rpc"
};

// node_modules/web3-rpc-providers/lib/esm/index.js
var mainnet = new QuickNodeProvider();

// node_modules/web3/lib/esm/abi.js
var abi_default = {
  encodeEventSignature,
  encodeFunctionCall,
  encodeFunctionSignature,
  encodeParameter,
  encodeParameters,
  decodeParameter,
  decodeParameters: decodeParameters2,
  decodeLog
};

// node_modules/web3/lib/esm/accounts.js
var __awaiter39 = function(thisArg, _arguments, P, generator) {
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
var initAccountsForContext = (context) => {
  const signTransactionWithContext = (transaction, privateKey) => __awaiter39(void 0, void 0, void 0, function* () {
    const tx = yield prepareTransactionForSigning(transaction, context);
    const privateKeyBytes = format({ format: "bytes" }, privateKey, ETH_DATA_FORMAT);
    return signTransaction(tx, privateKeyBytes);
  });
  const privateKeyToAccountWithContext = (privateKey) => {
    const account = privateKeyToAccount(privateKey);
    return Object.assign(Object.assign({}, account), { signTransaction: (transaction) => __awaiter39(void 0, void 0, void 0, function* () {
      return signTransactionWithContext(transaction, account.privateKey);
    }) });
  };
  const decryptWithContext = (keystore, password, options) => __awaiter39(void 0, void 0, void 0, function* () {
    var _a3;
    const account = yield decrypt2(keystore, password, (_a3 = options === null || options === void 0 ? void 0 : options.nonStrict) !== null && _a3 !== void 0 ? _a3 : true);
    return Object.assign(Object.assign({}, account), { signTransaction: (transaction) => __awaiter39(void 0, void 0, void 0, function* () {
      return signTransactionWithContext(transaction, account.privateKey);
    }) });
  });
  const createWithContext = () => {
    const account = create();
    return Object.assign(Object.assign({}, account), { signTransaction: (transaction) => __awaiter39(void 0, void 0, void 0, function* () {
      return signTransactionWithContext(transaction, account.privateKey);
    }) });
  };
  const wallet = new Wallet({
    create: createWithContext,
    privateKeyToAccount: privateKeyToAccountWithContext,
    decrypt: decryptWithContext
  });
  return {
    signTransaction: signTransactionWithContext,
    create: createWithContext,
    privateKeyToAccount: privateKeyToAccountWithContext,
    decrypt: decryptWithContext,
    recoverTransaction,
    hashMessage,
    sign,
    recover,
    encrypt: encrypt2,
    wallet,
    privateKeyToAddress,
    parseAndValidatePrivateKey,
    privateKeyToPublicKey
  };
};

// node_modules/web3/lib/esm/version.js
var Web3PkgInfo = { version: "4.16.0" };

// node_modules/web3/lib/esm/web3_eip6963.js
var __awaiter40 = function(thisArg, _arguments, P, generator) {
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
var Eip6963EventName;
(function(Eip6963EventName2) {
  Eip6963EventName2["eip6963announceProvider"] = "eip6963:announceProvider";
  Eip6963EventName2["eip6963requestProvider"] = "eip6963:requestProvider";
})(Eip6963EventName || (Eip6963EventName = {}));
var eip6963ProvidersMap = /* @__PURE__ */ new Map();
var web3ProvidersMapUpdated = "web3:providersMapUpdated";
var requestEIP6963Providers = () => __awaiter40(void 0, void 0, void 0, function* () {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("window object not available, EIP-6963 is intended to be used within a browser"));
    }
    window.addEventListener(Eip6963EventName.eip6963announceProvider, (event) => {
      eip6963ProvidersMap.set(event.detail.info.uuid, event.detail);
      const newEvent = new CustomEvent(web3ProvidersMapUpdated, { detail: eip6963ProvidersMap });
      window.dispatchEvent(newEvent);
      resolve(eip6963ProvidersMap);
    });
    window.dispatchEvent(new Event(Eip6963EventName.eip6963requestProvider));
  });
});
var onNewProviderDiscovered = (callback) => {
  if (typeof window === "undefined") {
    throw new Error("window object not available, EIP-6963 is intended to be used within a browser");
  }
  window.addEventListener(web3ProvidersMapUpdated, callback);
};

// node_modules/web3/lib/esm/web3.js
var Web3 = class extends Web3Context {
  constructor(providerOrContext = mainnet) {
    var _a3;
    if (isNullish2(providerOrContext) || typeof providerOrContext === "string" && providerOrContext.trim() === "" || typeof providerOrContext !== "string" && !isSupportedProvider(providerOrContext) && !providerOrContext.provider) {
      console.warn("NOTE: web3.js is running without provider. You need to pass a provider in order to interact with the network!");
    }
    let contextInitOptions = {};
    if (typeof providerOrContext === "string" || isSupportedProvider(providerOrContext)) {
      contextInitOptions.provider = providerOrContext;
    } else if (providerOrContext) {
      contextInitOptions = providerOrContext;
    } else {
      contextInitOptions = {};
    }
    contextInitOptions.registeredSubscriptions = Object.assign(Object.assign({}, registeredSubscriptions), (_a3 = contextInitOptions.registeredSubscriptions) !== null && _a3 !== void 0 ? _a3 : {});
    super(contextInitOptions);
    const accounts = initAccountsForContext(this);
    this._wallet = accounts.wallet;
    this._accountProvider = accounts;
    this.utils = esm_exports4;
    const self2 = this;
    class ContractBuilder extends esm_default3 {
      constructor(jsonInterface, addressOrOptionsOrContext, optionsOrContextOrReturnFormat, contextOrReturnFormat, returnFormat) {
        if (isContractInitOptions(addressOrOptionsOrContext) && isContractInitOptions(optionsOrContextOrReturnFormat)) {
          throw new InvalidMethodParamsError("Should not provide options at both 2nd and 3rd parameters");
        }
        let address;
        let options = {};
        let context;
        let dataFormat;
        if (!isNullish2(addressOrOptionsOrContext) && typeof addressOrOptionsOrContext !== "object" && typeof addressOrOptionsOrContext !== "string") {
          throw new InvalidMethodParamsError();
        }
        if (typeof addressOrOptionsOrContext === "string") {
          address = addressOrOptionsOrContext;
        }
        if (isContractInitOptions(addressOrOptionsOrContext)) {
          options = addressOrOptionsOrContext;
        } else if (isContractInitOptions(optionsOrContextOrReturnFormat)) {
          options = optionsOrContextOrReturnFormat;
        } else {
          options = {};
        }
        if (addressOrOptionsOrContext instanceof Web3Context) {
          context = addressOrOptionsOrContext;
        } else if (optionsOrContextOrReturnFormat instanceof Web3Context) {
          context = optionsOrContextOrReturnFormat;
        } else if (contextOrReturnFormat instanceof Web3Context) {
          context = contextOrReturnFormat;
        } else {
          context = self2.getContextObject();
        }
        if (returnFormat) {
          dataFormat = returnFormat;
        } else if (isDataFormat(optionsOrContextOrReturnFormat)) {
          dataFormat = optionsOrContextOrReturnFormat;
        } else if (isDataFormat(contextOrReturnFormat)) {
          dataFormat = contextOrReturnFormat;
        }
        super(jsonInterface, address, options, context, dataFormat);
        super.subscribeToContextEvents(self2);
        if (!isNullish2(eth)) {
          const TxMiddleware = eth.getTransactionMiddleware();
          if (!isNullish2(TxMiddleware)) {
            super.setTransactionMiddleware(TxMiddleware);
          }
        }
      }
    }
    const eth = self2.use(Web3Eth);
    this.eth = Object.assign(eth, {
      // ENS module
      ens: self2.use(ENS, registryAddresses.main),
      // registry address defaults to main network
      // Iban helpers
      Iban,
      net: self2.use(Net),
      personal: self2.use(Personal),
      // Contract helper and module
      Contract: ContractBuilder,
      // ABI Helpers
      abi: abi_default,
      // Accounts helper
      accounts
    });
  }
};
Web3.version = Web3PkgInfo.version;
Web3.utils = esm_exports4;
Web3.requestEIP6963Providers = requestEIP6963Providers;
Web3.onNewProviderDiscovered = onNewProviderDiscovered;
Web3.modules = {
  Web3Eth,
  Iban,
  Net,
  ENS,
  Personal
};
var web3_default = Web3;

// node_modules/web3/lib/esm/eth.exports.js
var eth_exports_exports = {};
__export(eth_exports_exports, {
  ALL_EVENTS: () => ALL_EVENTS,
  ALL_EVENTS_ABI: () => ALL_EVENTS_ABI,
  LogsSubscription: () => LogsSubscription,
  NUMBER_DATA_FORMAT: () => NUMBER_DATA_FORMAT,
  NewHeadsSubscription: () => NewHeadsSubscription,
  NewPendingTransactionsSubscription: () => NewPendingTransactionsSubscription,
  SendTxHelper: () => SendTxHelper,
  SignatureObjectSchema: () => SignatureObjectSchema,
  SyncingSubscription: () => SyncingSubscription,
  Web3Eth: () => Web3Eth,
  abi: () => esm_exports12,
  accessListItemSchema: () => accessListItemSchema,
  accessListResultSchema: () => accessListResultSchema,
  accessListSchema: () => accessListSchema,
  accountSchema: () => accountSchema,
  accounts: () => esm_exports7,
  blockHeaderSchema: () => blockHeaderSchema,
  blockSchema: () => blockSchema,
  call: () => call2,
  chainSchema: () => chainSchema,
  contract: () => esm_exports13,
  createAccessList: () => createAccessList2,
  customChainSchema: () => customChainSchema,
  decodeEventABI: () => decodeEventABI,
  detectTransactionType: () => detectTransactionType,
  ens: () => esm_exports14,
  estimateGas: () => estimateGas2,
  feeHistorySchema: () => feeHistorySchema,
  formatTransaction: () => formatTransaction,
  getBalance: () => getBalance2,
  getBlock: () => getBlock,
  getBlockNumber: () => getBlockNumber2,
  getBlockTransactionCount: () => getBlockTransactionCount,
  getBlockUncleCount: () => getBlockUncleCount,
  getChainId: () => getChainId2,
  getCode: () => getCode2,
  getCoinbase: () => getCoinbase2,
  getFeeHistory: () => getFeeHistory2,
  getGasPrice: () => getGasPrice2,
  getHashRate: () => getHashRate2,
  getLogs: () => getLogs2,
  getMaxPriorityFeePerGas: () => getMaxPriorityFeePerGas2,
  getPendingTransactions: () => getPendingTransactions2,
  getProof: () => getProof2,
  getProtocolVersion: () => getProtocolVersion2,
  getStorageAt: () => getStorageAt2,
  getTransaction: () => getTransaction,
  getTransactionCount: () => getTransactionCount2,
  getTransactionFromBlock: () => getTransactionFromBlock,
  getTransactionFromOrToAttr: () => getTransactionFromOrToAttr,
  getTransactionReceipt: () => getTransactionReceipt2,
  getUncle: () => getUncle,
  hardforkSchema: () => hardforkSchema,
  iban: () => esm_exports8,
  isAccessList: () => isAccessList2,
  isAccessListEntry: () => isAccessListEntry,
  isBaseTransaction: () => isBaseTransaction,
  isMining: () => isMining,
  isSyncing: () => isSyncing,
  isTransaction1559Unsigned: () => isTransaction1559Unsigned,
  isTransaction2930Unsigned: () => isTransaction2930Unsigned,
  isTransactionCall: () => isTransactionCall,
  isTransactionLegacyUnsigned: () => isTransactionLegacyUnsigned,
  isTransactionWithSender: () => isTransactionWithSender,
  logSchema: () => logSchema,
  personal: () => esm_exports15,
  prepareTransactionForSigning: () => prepareTransactionForSigning,
  registeredSubscriptions: () => registeredSubscriptions,
  sendSignedTransaction: () => sendSignedTransaction,
  sendTransaction: () => sendTransaction3,
  sign: () => sign4,
  signTransaction: () => signTransaction4,
  signTypedData: () => signTypedData2,
  storageProofSchema: () => storageProofSchema,
  syncSchema: () => syncSchema,
  transactionBuilder: () => transactionBuilder,
  transactionInfoSchema: () => transactionInfoSchema,
  transactionReceiptSchema: () => transactionReceiptSchema,
  transactionSchema: () => transactionSchema,
  trySendTransaction: () => trySendTransaction,
  validateBaseChain: () => validateBaseChain,
  validateChainInfo: () => validateChainInfo,
  validateCustomChainInfo: () => validateCustomChainInfo,
  validateFeeMarketGas: () => validateFeeMarketGas,
  validateGas: () => validateGas,
  validateHardfork: () => validateHardfork,
  validateLegacyGas: () => validateLegacyGas,
  validateTransactionCall: () => validateTransactionCall,
  validateTransactionForSigning: () => validateTransactionForSigning,
  validateTransactionWithSender: () => validateTransactionWithSender,
  waitForTransactionReceipt: () => waitForTransactionReceipt,
  withdrawalsSchema: () => withdrawalsSchema
});

// node_modules/web3/lib/esm/providers.exports.js
var providers_exports_exports = {};
__export(providers_exports_exports, {
  Eip1193Provider: () => Eip1193Provider,
  Eip6963EventName: () => Eip6963EventName,
  SocketProvider: () => SocketProvider,
  eip6963ProvidersMap: () => eip6963ProvidersMap,
  http: () => esm_exports5,
  onNewProviderDiscovered: () => onNewProviderDiscovered,
  requestEIP6963Providers: () => requestEIP6963Providers,
  web3ProvidersMapUpdated: () => web3ProvidersMapUpdated,
  ws: () => esm_exports6
});

// node_modules/web3/lib/esm/index.js
var esm_default5 = web3_default;
export {
  AbiError,
  BaseWeb3Error,
  BlockTags,
  ChainIdMismatchError,
  ChainMismatchError,
  CommonOrChainAndHardforkError,
  ConfigChainMismatchError,
  ConfigHardforkMismatchError,
  ConnectionCloseError,
  ConnectionError,
  ConnectionNotOpenError,
  ConnectionTimeoutError,
  Contract,
  ContractCodeNotStoredError,
  ContractEventDoesNotExistError,
  ContractExecutionError,
  ContractInstantiationError,
  ContractMissingABIError,
  ContractMissingDeployDataError,
  ContractNoAddressDefinedError,
  ContractNoFromAddressDefinedError,
  ContractOnceRequiresCallbackError,
  ContractReservedEventError,
  ContractTransactionDataAndInputError,
  DEFAULT_RETURN_FORMAT,
  EIP1193ProviderRpcError,
  ENSCheckInterfaceSupportError,
  ENSNetworkNotSyncedError,
  ENSUnsupportedNetworkError,
  ERR_ABI_ENCODING,
  ERR_CONN,
  ERR_CONN_CLOSE,
  ERR_CONN_INVALID,
  ERR_CONN_MAX_ATTEMPTS,
  ERR_CONN_NOT_OPEN,
  ERR_CONN_PENDING_REQUESTS,
  ERR_CONN_TIMEOUT,
  ERR_CONTRACT,
  ERR_CONTRACT_ABI_MISSING,
  ERR_CONTRACT_EVENT_NOT_EXISTS,
  ERR_CONTRACT_EXECUTION_REVERTED,
  ERR_CONTRACT_INSTANTIATION,
  ERR_CONTRACT_MISSING_ADDRESS,
  ERR_CONTRACT_MISSING_DEPLOY_DATA,
  ERR_CONTRACT_MISSING_FROM_ADDRESS,
  ERR_CONTRACT_REQUIRED_CALLBACK,
  ERR_CONTRACT_RESERVED_EVENT,
  ERR_CONTRACT_RESOLVER_MISSING,
  ERR_CONTRACT_TX_DATA_AND_INPUT,
  ERR_CORE_CHAIN_MISMATCH,
  ERR_CORE_HARDFORK_MISMATCH,
  ERR_ENS_CHECK_INTERFACE_SUPPORT,
  ERR_ENS_NETWORK_NOT_SYNCED,
  ERR_ENS_UNSUPPORTED_NETWORK,
  ERR_EXISTING_PLUGIN_NAMESPACE,
  ERR_FORMATTERS,
  ERR_INVALID_ADDRESS,
  ERR_INVALID_BLOCK,
  ERR_INVALID_BOOLEAN,
  ERR_INVALID_BYTES,
  ERR_INVALID_CLIENT,
  ERR_INVALID_HEX,
  ERR_INVALID_INTEGER,
  ERR_INVALID_KEYSTORE,
  ERR_INVALID_LARGE_VALUE,
  ERR_INVALID_METHOD_PARAMS,
  ERR_INVALID_NIBBLE_WIDTH,
  ERR_INVALID_NUMBER,
  ERR_INVALID_PASSWORD,
  ERR_INVALID_PRIVATE_KEY,
  ERR_INVALID_PROVIDER,
  ERR_INVALID_RESPONSE,
  ERR_INVALID_SIGNATURE,
  ERR_INVALID_SIZE,
  ERR_INVALID_STRING,
  ERR_INVALID_TYPE,
  ERR_INVALID_TYPE_ABI,
  ERR_INVALID_UNIT,
  ERR_INVALID_UNSIGNED_INTEGER,
  ERR_IV_LENGTH,
  ERR_KEY_DERIVATION_FAIL,
  ERR_KEY_VERSION_UNSUPPORTED,
  ERR_METHOD_NOT_IMPLEMENTED,
  ERR_MULTIPLE_ERRORS,
  ERR_OPERATION_ABORT,
  ERR_OPERATION_TIMEOUT,
  ERR_PARAM,
  ERR_PBKDF2_ITERATIONS,
  ERR_PRIVATE_KEY_LENGTH,
  ERR_PROVIDER,
  ERR_RAW_TX_UNDEFINED,
  ERR_REQ_ALREADY_SENT,
  ERR_RESPONSE,
  ERR_RPC_INTERNAL_ERROR,
  ERR_RPC_INVALID_INPUT,
  ERR_RPC_INVALID_JSON,
  ERR_RPC_INVALID_METHOD,
  ERR_RPC_INVALID_PARAMS,
  ERR_RPC_INVALID_REQUEST,
  ERR_RPC_LIMIT_EXCEEDED,
  ERR_RPC_MISSING_RESOURCE,
  ERR_RPC_NOT_SUPPORTED,
  ERR_RPC_TRANSACTION_REJECTED,
  ERR_RPC_UNAVAILABLE_RESOURCE,
  ERR_RPC_UNSUPPORTED_METHOD,
  ERR_SCHEMA_FORMAT,
  ERR_SIGNATURE_FAILED,
  ERR_SUBSCRIPTION,
  ERR_TX,
  ERR_TX_BLOCK_TIMEOUT,
  ERR_TX_CHAIN_ID_MISMATCH,
  ERR_TX_CHAIN_MISMATCH,
  ERR_TX_CONTRACT_NOT_STORED,
  ERR_TX_DATA_AND_INPUT,
  ERR_TX_GAS_MISMATCH,
  ERR_TX_GAS_MISMATCH_INNER_ERROR,
  ERR_TX_HARDFORK_MISMATCH,
  ERR_TX_INVALID_CALL,
  ERR_TX_INVALID_CHAIN_INFO,
  ERR_TX_INVALID_FEE_MARKET_GAS,
  ERR_TX_INVALID_FEE_MARKET_GAS_PRICE,
  ERR_TX_INVALID_LEGACY_FEE_MARKET,
  ERR_TX_INVALID_LEGACY_GAS,
  ERR_TX_INVALID_NONCE_OR_CHAIN_ID,
  ERR_TX_INVALID_OBJECT,
  ERR_TX_INVALID_PROPERTIES_FOR_TYPE,
  ERR_TX_INVALID_RECEIVER,
  ERR_TX_INVALID_SENDER,
  ERR_TX_LOCAL_WALLET_NOT_AVAILABLE,
  ERR_TX_MISSING_CHAIN_INFO,
  ERR_TX_MISSING_CUSTOM_CHAIN,
  ERR_TX_MISSING_CUSTOM_CHAIN_ID,
  ERR_TX_MISSING_GAS,
  ERR_TX_MISSING_GAS_INNER_ERROR,
  ERR_TX_NOT_FOUND,
  ERR_TX_NO_CONTRACT_ADDRESS,
  ERR_TX_OUT_OF_GAS,
  ERR_TX_POLLING_TIMEOUT,
  ERR_TX_RECEIPT_MISSING_BLOCK_NUMBER,
  ERR_TX_RECEIPT_MISSING_OR_BLOCKHASH_NULL,
  ERR_TX_REVERT_INSTRUCTION,
  ERR_TX_REVERT_TRANSACTION,
  ERR_TX_REVERT_TRANSACTION_CUSTOM_ERROR,
  ERR_TX_REVERT_WITHOUT_REASON,
  ERR_TX_SEND_TIMEOUT,
  ERR_TX_SIGNING,
  ERR_TX_UNABLE_TO_POPULATE_NONCE,
  ERR_TX_UNSUPPORTED_EIP_1559,
  ERR_TX_UNSUPPORTED_TYPE,
  ERR_UNSUPPORTED_KDF,
  ERR_VALIDATION,
  ERR_WS_PROVIDER,
  ETH_DATA_FORMAT,
  Eip1559GasPriceError,
  Eip1559NotSupportedError,
  Eip6963EventName,
  Eip838ExecutionError,
  ExistingPluginNamespaceError,
  FMT_BYTES,
  FMT_NUMBER,
  FormatterError,
  GENESIS_BLOCK_NUMBER,
  HardforkMismatchError,
  HardforksOrdered,
  HexProcessingError,
  HttpProvider,
  IVLengthError,
  Iban,
  InternalError,
  InvalidAddressError,
  InvalidBlockError,
  InvalidBooleanError,
  InvalidBytesError,
  InvalidClientError,
  InvalidConnectionError,
  InvalidGasOrGasPrice,
  InvalidInputError,
  InvalidIntegerError,
  InvalidKdfError,
  InvalidLargeValueError,
  InvalidMaxPriorityFeePerGasOrMaxFeePerGas,
  InvalidMethodParamsError,
  InvalidNonceOrChainIdError,
  InvalidNumberError,
  InvalidNumberOfParamsError,
  InvalidParamsError,
  InvalidPasswordError,
  InvalidPrivateKeyError,
  InvalidPropertiesForTransactionTypeError,
  InvalidProviderError,
  InvalidRequestError,
  InvalidResponseError,
  InvalidSignatureError,
  InvalidSizeError,
  InvalidStringError,
  InvalidTransactionCall,
  InvalidTransactionObjectError,
  InvalidTransactionWithReceiver,
  InvalidTransactionWithSender,
  InvalidTypeAbiInputError,
  InvalidTypeError,
  InvalidUnitError,
  InvalidUnsignedIntegerError,
  InvalidValueError,
  JSONRPC_ERR_CHAIN_DISCONNECTED,
  JSONRPC_ERR_DISCONNECTED,
  JSONRPC_ERR_REJECTED_REQUEST,
  JSONRPC_ERR_UNAUTHORIZED,
  JSONRPC_ERR_UNSUPPORTED_METHOD,
  KeyDerivationError,
  KeyStoreVersionError,
  LimitExceededError,
  LocalWalletNotAvailableError,
  MaxAttemptsReachedOnReconnectingError,
  MethodNotFoundError,
  MethodNotImplementedError,
  MethodNotSupported,
  MissingChainOrHardforkError,
  MissingCustomChainError,
  MissingCustomChainIdError,
  MissingGasError,
  MissingGasInnerError,
  MultipleErrors,
  Net,
  NibbleWidthError,
  NoContractAddressFoundError,
  OperationAbortError,
  OperationTimeoutError,
  PBKDF2IterationsError,
  ParseError,
  PendingRequestsOnReconnectingError,
  Personal,
  PrivateKeyLengthError,
  ProviderError,
  RequestAlreadySentError,
  ResolverMethodMissingError,
  ResourceUnavailableError,
  ResourcesNotFoundError,
  ResponseError,
  RevertInstructionError,
  RpcError,
  RpcErrorMessages,
  SchemaFormatError,
  SignatureError,
  SubscriptionError,
  TransactionBlockTimeoutError,
  TransactionDataAndInputError,
  TransactionError,
  TransactionGasMismatchError,
  TransactionGasMismatchInnerError,
  TransactionMissingReceiptOrBlockHashError,
  TransactionNotFound,
  TransactionOutOfGasError,
  TransactionPollingTimeoutError,
  TransactionReceiptMissingBlockNumberError,
  TransactionRejectedError,
  TransactionRevertInstructionError,
  TransactionRevertWithCustomError,
  TransactionRevertedWithoutReasonError,
  TransactionSendTimeoutError,
  TransactionSigningError,
  TypedArray,
  UnableToPopulateNonceError,
  UndefinedRawTransactionError,
  UnsupportedFeeMarketError,
  UnsupportedTransactionTypeError,
  VersionNotSupportedError,
  web3_default as Web3,
  Web3BaseProvider,
  Web3BaseWallet,
  Web3Context,
  Web3ContractError,
  Web3Eth,
  Web3EthPluginBase,
  Web3PluginBase,
  Web3PromiEvent,
  Web3Validator,
  Web3WSProviderError,
  WebSocketProvider,
  esm_exports9 as core,
  esm_default5 as default,
  eip6963ProvidersMap,
  esm_exports as errors,
  eth_exports_exports as eth,
  genericRpcErrorMessageTemplate,
  esm_exports11 as net,
  onNewProviderDiscovered,
  providers_exports_exports as providers,
  requestEIP6963Providers,
  rpcErrorsMap,
  esm_exports10 as rpcMethods,
  esm_exports2 as types,
  esm_exports4 as utils,
  esm_exports3 as validator,
  web3ProvidersMapUpdated
};
/*! Bundled license information:

crc-32/crc32.js:
  (*! crc32.js (C) 2014-present SheetJS -- http://sheetjs.com *)

@noble/curves/esm/abstract/utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/modular.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/curve.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/weierstrass.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/_shortw_utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/secp256k1.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=web3.js.map
