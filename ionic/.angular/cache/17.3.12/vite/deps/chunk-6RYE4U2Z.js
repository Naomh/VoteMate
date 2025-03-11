import {
  BlockTags,
  ConnectionError,
  ConnectionNotOpenError,
  DEFAULT_RETURN_FORMAT,
  EIP1193ProviderRpcError,
  FMT_BYTES,
  FMT_NUMBER,
  FormatterError,
  HexProcessingError,
  InvalidAddressError,
  InvalidBlockError,
  InvalidBooleanError,
  InvalidBytesError,
  InvalidClientError,
  InvalidIntegerError,
  InvalidLargeValueError,
  InvalidNumberError,
  InvalidResponseError,
  InvalidSizeError,
  InvalidStringError,
  InvalidUnitError,
  InvalidUnsignedIntegerError,
  MaxAttemptsReachedOnReconnectingError,
  NibbleWidthError,
  OperationTimeoutError,
  PendingRequestsOnReconnectingError,
  RequestAlreadySentError,
  TypedArray,
  Web3BaseProvider,
  Web3WSProviderError,
  bigintPower,
  bytesToUtf8,
  checkAddressCheckSum,
  isAddress,
  isBlockTag,
  isBloom,
  isContractAddressInBloom,
  isHex,
  isHexStrict,
  isInBloom,
  isInt,
  isNullish,
  isObject,
  isTopic,
  isTopicInBloom,
  isUInt,
  isUserEthereumAddressInBloom,
  keccak256,
  randomBytes,
  rpcErrorsMap,
  utf8ToBytes,
  utils_exports,
  validator
} from "./chunk-NXXPBRY6.js";
import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-KTESVR3Q.js";

// node_modules/web3-utils/node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/web3-utils/node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__) prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();
      else delete emitter._events[evt];
    }
    function EventEmitter3() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter3.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0) return names;
      for (name in events = this._events) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter3.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter3.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    EventEmitter3.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter3.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter3.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter3.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter3.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter3.prototype.off = EventEmitter3.prototype.removeListener;
    EventEmitter3.prototype.addListener = EventEmitter3.prototype.on;
    EventEmitter3.prefixed = prefix;
    EventEmitter3.EventEmitter = EventEmitter3;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter3;
    }
  }
});

// node_modules/web3-utils/lib/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  ChunkResponseParser: () => ChunkResponseParser,
  Eip1193Provider: () => Eip1193Provider,
  EventEmitter: () => EventEmitter2,
  SocketProvider: () => SocketProvider,
  Web3DeferredPromise: () => Web3DeferredPromise,
  asciiToHex: () => asciiToHex,
  bytesToHex: () => bytesToHex,
  bytesToUint8Array: () => bytesToUint8Array,
  checkAddressCheckSum: () => checkAddressCheckSum2,
  compareBlockNumbers: () => compareBlockNumbers,
  convert: () => convert,
  convertScalarValue: () => convertScalarValue,
  encodePacked: () => encodePacked,
  ethUnitMap: () => ethUnitMap,
  format: () => format,
  fromAscii: () => fromAscii,
  fromDecimal: () => fromDecimal,
  fromTwosComplement: () => fromTwosComplement,
  fromUtf8: () => fromUtf8,
  fromWei: () => fromWei,
  getStorageSlotNumForLongString: () => getStorageSlotNumForLongString,
  hexToAscii: () => hexToAscii,
  hexToBytes: () => hexToBytes,
  hexToNumber: () => hexToNumber,
  hexToNumberString: () => hexToNumberString,
  hexToString: () => hexToString,
  hexToUtf8: () => hexToUtf8,
  isAddress: () => isAddress2,
  isBatchRequest: () => isBatchRequest,
  isBatchResponse: () => isBatchResponse,
  isBloom: () => isBloom2,
  isContractAddressInBloom: () => isContractAddressInBloom2,
  isContractInitOptions: () => isContractInitOptions,
  isDataFormat: () => isDataFormat,
  isHex: () => isHex2,
  isHexStrict: () => isHexStrict2,
  isInBloom: () => isInBloom2,
  isNullish: () => isNullish2,
  isPromise: () => isPromise,
  isResponseRpcError: () => isResponseRpcError,
  isResponseWithError: () => isResponseWithError,
  isResponseWithNotification: () => isResponseWithNotification,
  isResponseWithResult: () => isResponseWithResult,
  isSubscriptionResult: () => isSubscriptionResult,
  isTopic: () => isTopic2,
  isTopicInBloom: () => isTopicInBloom2,
  isUint8Array: () => isUint8Array,
  isUserEthereumAddressInBloom: () => isUserEthereumAddressInBloom2,
  isValidResponse: () => isValidResponse,
  jsonRpc: () => json_rpc_exports,
  keccak256: () => keccak256Wrapper,
  keccak256Wrapper: () => keccak256Wrapper,
  leftPad: () => leftPad,
  mergeDeep: () => mergeDeep,
  numberToHex: () => numberToHex,
  padLeft: () => padLeft,
  padRight: () => padRight,
  pollTillDefined: () => pollTillDefined,
  pollTillDefinedAndReturnIntervalId: () => pollTillDefinedAndReturnIntervalId,
  processSolidityEncodePackedArgs: () => processSolidityEncodePackedArgs,
  randomBytes: () => randomBytes2,
  randomHex: () => randomHex,
  rejectIfConditionAtInterval: () => rejectIfConditionAtInterval,
  rejectIfTimeout: () => rejectIfTimeout,
  rightPad: () => rightPad,
  setRequestIdStart: () => setRequestIdStart,
  sha3: () => sha3,
  sha3Raw: () => sha3Raw,
  soliditySha3: () => soliditySha3,
  soliditySha3Raw: () => soliditySha3Raw,
  stringToHex: () => stringToHex,
  toAscii: () => toAscii,
  toBatchPayload: () => toBatchPayload,
  toBigInt: () => toBigInt,
  toBool: () => toBool,
  toChecksumAddress: () => toChecksumAddress,
  toDecimal: () => toDecimal,
  toHex: () => toHex,
  toNumber: () => toNumber,
  toPayload: () => toPayload,
  toTwosComplement: () => toTwosComplement,
  toUtf8: () => toUtf8,
  toWei: () => toWei,
  uint8ArrayConcat: () => uint8ArrayConcat,
  uint8ArrayEquals: () => uint8ArrayEquals,
  utf8ToBytes: () => utf8ToBytes2,
  utf8ToHex: () => utf8ToHex,
  uuidV4: () => uuidV4,
  validateResponse: () => validateResponse,
  waitWithTimeout: () => waitWithTimeout
});

// node_modules/web3-utils/lib/esm/uint8array.js
function isUint8Array(data) {
  var _a2, _b;
  return data instanceof Uint8Array || ((_a2 = data === null || data === void 0 ? void 0 : data.constructor) === null || _a2 === void 0 ? void 0 : _a2.name) === "Uint8Array" || ((_b = data === null || data === void 0 ? void 0 : data.constructor) === null || _b === void 0 ? void 0 : _b.name) === "Buffer";
}
function uint8ArrayConcat(...parts) {
  const length = parts.reduce((prev, part) => {
    const agg = prev + part.length;
    return agg;
  }, 0);
  const result = new Uint8Array(length);
  let offset = 0;
  for (const part of parts) {
    result.set(part, offset);
    offset += part.length;
  }
  return result;
}
function uint8ArrayEquals(a, b) {
  if (a === b) {
    return true;
  }
  if (a.byteLength !== b.byteLength) {
    return false;
  }
  for (let i = 0; i < a.byteLength; i += 1) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

// node_modules/web3-utils/lib/esm/converters.js
var ethUnitMap = {
  noether: BigInt(0),
  wei: BigInt(1),
  kwei: BigInt(1e3),
  Kwei: BigInt(1e3),
  babbage: BigInt(1e3),
  femtoether: BigInt(1e3),
  mwei: BigInt(1e6),
  Mwei: BigInt(1e6),
  lovelace: BigInt(1e6),
  picoether: BigInt(1e6),
  gwei: BigInt(1e9),
  Gwei: BigInt(1e9),
  shannon: BigInt(1e9),
  nanoether: BigInt(1e9),
  nano: BigInt(1e9),
  szabo: BigInt(1e12),
  microether: BigInt(1e12),
  micro: BigInt(1e12),
  finney: BigInt(1e15),
  milliether: BigInt(1e15),
  milli: BigInt(1e15),
  ether: BigInt("1000000000000000000"),
  kether: BigInt("1000000000000000000000"),
  grand: BigInt("1000000000000000000000"),
  mether: BigInt("1000000000000000000000000"),
  gether: BigInt("1000000000000000000000000000"),
  tether: BigInt("1000000000000000000000000000000")
};
var PrecisionLossWarning = "Warning: Using type `number` with values that are large or contain many decimals may cause loss of precision, it is recommended to use type `string` or `BigInt` when using conversion methods";
var bytesToUint8Array = (data) => {
  validator.validate(["bytes"], [data]);
  if (isUint8Array(data)) {
    return data;
  }
  if (Array.isArray(data)) {
    return new Uint8Array(data);
  }
  if (typeof data === "string") {
    return utils_exports.hexToUint8Array(data);
  }
  throw new InvalidBytesError(data);
};
var { uint8ArrayToHexString } = utils_exports;
var bytesToHex = (bytes) => uint8ArrayToHexString(bytesToUint8Array(bytes));
var hexToBytes = (bytes) => {
  if (typeof bytes === "string" && bytes.slice(0, 2).toLowerCase() !== "0x") {
    return bytesToUint8Array(`0x${bytes}`);
  }
  return bytesToUint8Array(bytes);
};
var hexToNumber = (value) => {
  validator.validate(["hex"], [value]);
  return utils_exports.hexToNumber(value);
};
var toDecimal = hexToNumber;
var numberToHex = (value, hexstrict) => {
  if (typeof value !== "bigint")
    validator.validate(["int"], [value]);
  let updatedValue = utils_exports.numberToHex(value);
  if (hexstrict) {
    if (!updatedValue.startsWith("-") && updatedValue.length % 2 === 1) {
      updatedValue = "0x0".concat(updatedValue.slice(2));
    } else if (updatedValue.length % 2 === 0 && updatedValue.startsWith("-"))
      updatedValue = "-0x0".concat(updatedValue.slice(3));
  }
  return updatedValue;
};
var fromDecimal = numberToHex;
var hexToNumberString = (data) => hexToNumber(data).toString();
var utf8ToHex = (str) => {
  validator.validate(["string"], [str]);
  let strWithoutNullCharacter = str.replace(/^(?:\u0000)/, "");
  strWithoutNullCharacter = strWithoutNullCharacter.replace(/(?:\u0000)$/, "");
  return bytesToHex(new TextEncoder().encode(strWithoutNullCharacter));
};
var fromUtf8 = utf8ToHex;
var stringToHex = utf8ToHex;
var hexToUtf8 = (str) => bytesToUtf8(hexToBytes(str));
var toUtf8 = (input) => {
  if (typeof input === "string") {
    return hexToUtf8(input);
  }
  validator.validate(["bytes"], [input]);
  return bytesToUtf8(input);
};
var utf8ToBytes2 = utf8ToBytes;
var hexToString = hexToUtf8;
var asciiToHex = (str) => {
  validator.validate(["string"], [str]);
  let hexString = "";
  for (let i = 0; i < str.length; i += 1) {
    const hexCharCode = str.charCodeAt(i).toString(16);
    hexString += hexCharCode.length % 2 !== 0 ? `0${hexCharCode}` : hexCharCode;
  }
  return `0x${hexString}`;
};
var fromAscii = asciiToHex;
var hexToAscii = (str) => {
  const decoder = new TextDecoder("ascii");
  return decoder.decode(hexToBytes(str));
};
var toAscii = hexToAscii;
var toHex = (value, returnType) => {
  if (typeof value === "string" && isAddress(value)) {
    return returnType ? "address" : `0x${value.toLowerCase().replace(/^0x/i, "")}`;
  }
  if (typeof value === "boolean") {
    return returnType ? "bool" : value ? "0x01" : "0x00";
  }
  if (typeof value === "number") {
    return returnType ? value < 0 ? "int256" : "uint256" : numberToHex(value);
  }
  if (typeof value === "bigint") {
    return returnType ? "bigint" : numberToHex(value);
  }
  if (isUint8Array(value)) {
    return returnType ? "bytes" : bytesToHex(value);
  }
  if (typeof value === "object" && !!value) {
    return returnType ? "string" : utf8ToHex(JSON.stringify(value));
  }
  if (typeof value === "string") {
    if (value.startsWith("-0x") || value.startsWith("-0X")) {
      return returnType ? "int256" : numberToHex(value);
    }
    if (isHexStrict(value)) {
      return returnType ? "bytes" : value;
    }
    if (isHex(value) && !isInt(value) && !isUInt(value)) {
      return returnType ? "bytes" : `0x${value}`;
    }
    if (isHex(value) && !isInt(value) && isUInt(value)) {
      return returnType ? "uint" : numberToHex(value);
    }
    if (!Number.isFinite(value)) {
      return returnType ? "string" : utf8ToHex(value);
    }
  }
  throw new HexProcessingError(value);
};
var toNumber = (value) => {
  if (typeof value === "number") {
    if (value > 1e20) {
      console.warn(PrecisionLossWarning);
      return BigInt(value);
    }
    return value;
  }
  if (typeof value === "bigint") {
    return value >= Number.MIN_SAFE_INTEGER && value <= Number.MAX_SAFE_INTEGER ? Number(value) : value;
  }
  if (typeof value === "string" && isHexStrict(value)) {
    return hexToNumber(value);
  }
  try {
    return toNumber(BigInt(value));
  } catch (_a2) {
    throw new InvalidNumberError(value);
  }
};
var toBigInt = (value) => {
  if (typeof value === "number") {
    return BigInt(value);
  }
  if (typeof value === "bigint") {
    return value;
  }
  if (typeof value === "string" && isHex(value)) {
    if (value.startsWith("-")) {
      return -BigInt(value.substring(1));
    }
    return BigInt(value);
  }
  throw new InvalidNumberError(value);
};
var fromWei = (number, unit) => {
  let denomination;
  if (typeof unit === "string") {
    denomination = ethUnitMap[unit];
    if (!denomination) {
      throw new InvalidUnitError(unit);
    }
  } else {
    if (unit < 0 || !Number.isInteger(unit)) {
      throw new InvalidIntegerError(unit);
    }
    denomination = bigintPower(BigInt(10), BigInt(unit));
  }
  const value = String(toNumber(number));
  const numberOfZerosInDenomination = denomination.toString().length - 1;
  if (numberOfZerosInDenomination <= 0) {
    return value.toString();
  }
  const zeroPaddedValue = value.padStart(numberOfZerosInDenomination, "0");
  const integer = zeroPaddedValue.slice(0, -numberOfZerosInDenomination);
  const fraction = zeroPaddedValue.slice(-numberOfZerosInDenomination).replace(/\.?0+$/, "");
  if (integer === "") {
    return fraction ? `0.${fraction}` : "0";
  }
  if (fraction === "") {
    return integer;
  }
  const updatedValue = `${integer}.${fraction}`;
  return updatedValue.slice(0, integer.length + numberOfZerosInDenomination + 1);
};
var toWei = (number, unit) => {
  validator.validate(["number"], [number]);
  let denomination;
  if (typeof unit === "string") {
    denomination = ethUnitMap[unit];
    if (!denomination) {
      throw new InvalidUnitError(unit);
    }
  } else {
    if (unit < 0 || !Number.isInteger(unit)) {
      throw new InvalidIntegerError(unit);
    }
    denomination = bigintPower(BigInt(10), BigInt(unit));
  }
  let parsedNumber = number;
  if (typeof parsedNumber === "number") {
    if (parsedNumber < 1e-15) {
      console.warn(PrecisionLossWarning);
    }
    if (parsedNumber > 1e20) {
      console.warn(PrecisionLossWarning);
      parsedNumber = BigInt(parsedNumber);
    } else {
      parsedNumber = parsedNumber.toLocaleString("fullwide", {
        useGrouping: false,
        maximumFractionDigits: 20
      });
    }
  }
  const [integer, fraction] = String(typeof parsedNumber === "string" && !isHexStrict(parsedNumber) ? parsedNumber : toNumber(parsedNumber)).split(".").concat("");
  const value = BigInt(`${integer}${fraction}`);
  const updatedValue = value * denomination;
  const decimals = fraction.length;
  if (decimals === 0) {
    return updatedValue.toString();
  }
  return updatedValue.toString().slice(0, -decimals);
};
var toChecksumAddress = (address) => {
  if (!isAddress(address, false)) {
    throw new InvalidAddressError(address);
  }
  const lowerCaseAddress = address.toLowerCase().replace(/^0x/i, "");
  const hash = utils_exports.uint8ArrayToHexString(keccak256(utils_exports.ensureIfUint8Array(utf8ToBytes2(lowerCaseAddress))));
  if (isNullish(hash) || hash === "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470")
    return "";
  let checksumAddress = "0x";
  const addressHash = hash.replace(/^0x/i, "");
  for (let i = 0; i < lowerCaseAddress.length; i += 1) {
    if (parseInt(addressHash[i], 16) > 7) {
      checksumAddress += lowerCaseAddress[i].toUpperCase();
    } else {
      checksumAddress += lowerCaseAddress[i];
    }
  }
  return checksumAddress;
};
var toBool = (value) => {
  if (typeof value === "boolean") {
    return value;
  }
  if (typeof value === "number" && (value === 0 || value === 1)) {
    return Boolean(value);
  }
  if (typeof value === "bigint" && (value === BigInt(0) || value === BigInt(1))) {
    return Boolean(value);
  }
  if (typeof value === "string" && !isHexStrict(value) && (value === "1" || value === "0" || value === "false" || value === "true")) {
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    return Boolean(Number(value));
  }
  if (typeof value === "string" && isHexStrict(value) && (value === "0x1" || value === "0x0")) {
    return Boolean(toNumber(value));
  }
  throw new InvalidBooleanError(value);
};

// node_modules/web3-utils/node_modules/eventemitter3/index.mjs
var import_index = __toESM(require_eventemitter3(), 1);
var eventemitter3_default = import_index.default;

// node_modules/web3-utils/lib/esm/event_emitter.js
var EventEmitter2 = class extends eventemitter3_default {
  constructor() {
    super(...arguments);
    this.maxListeners = Number.MAX_SAFE_INTEGER;
  }
  setMaxListeners(maxListeners) {
    this.maxListeners = maxListeners;
    return this;
  }
  getMaxListeners() {
    return this.maxListeners;
  }
};

// node_modules/web3-utils/lib/esm/validation.js
var isHexStrict2 = isHexStrict;
var isHex2 = isHex;
var checkAddressCheckSum2 = checkAddressCheckSum;
var isAddress2 = isAddress;
var isBloom2 = isBloom;
var isInBloom2 = isInBloom;
var isUserEthereumAddressInBloom2 = isUserEthereumAddressInBloom;
var isContractAddressInBloom2 = isContractAddressInBloom;
var isTopic2 = isTopic;
var isTopicInBloom2 = isTopicInBloom;
var compareBlockNumbers = (blockA, blockB) => {
  const isABlockTag = typeof blockA === "string" && isBlockTag(blockA);
  const isBBlockTag = typeof blockB === "string" && isBlockTag(blockB);
  if (blockA === blockB || (blockA === "earliest" || blockA === 0) && (blockB === "earliest" || blockB === 0)) {
    return 0;
  }
  if (blockA === "earliest") {
    return -1;
  }
  if (blockB === "earliest") {
    return 1;
  }
  if (isABlockTag && isBBlockTag) {
    const tagsOrder = {
      [BlockTags.EARLIEST]: 1,
      [BlockTags.FINALIZED]: 2,
      [BlockTags.SAFE]: 3,
      [BlockTags.LATEST]: 4,
      [BlockTags.PENDING]: 5
    };
    if (tagsOrder[blockA] < tagsOrder[blockB]) {
      return -1;
    }
    return 1;
  }
  if (isABlockTag && !isBBlockTag || !isABlockTag && isBBlockTag) {
    throw new InvalidBlockError("Cannot compare blocktag with provided non-blocktag input.");
  }
  const bigIntA = BigInt(blockA);
  const bigIntB = BigInt(blockB);
  if (bigIntA < bigIntB) {
    return -1;
  }
  if (bigIntA === bigIntB) {
    return 0;
  }
  return 1;
};
var isContractInitOptions = (options) => typeof options === "object" && !isNullish(options) && Object.keys(options).length !== 0 && [
  "input",
  "data",
  "from",
  "gas",
  "gasPrice",
  "gasLimit",
  "address",
  "jsonInterface",
  "syncWithContext",
  "dataInputFill"
].some((key) => key in options);
var isNullish2 = isNullish;

// node_modules/web3-utils/lib/esm/objects.js
var isIterable = (item) => typeof item === "object" && !isNullish(item) && !Array.isArray(item) && !(item instanceof TypedArray);
var mergeDeep = (destination, ...sources) => {
  if (!isIterable(destination)) {
    return destination;
  }
  const result = Object.assign({}, destination);
  for (const src of sources) {
    for (const key in src) {
      if (isIterable(src[key])) {
        if (!result[key]) {
          result[key] = {};
        }
        result[key] = mergeDeep(result[key], src[key]);
      } else if (!isNullish(src[key]) && Object.hasOwnProperty.call(src, key)) {
        if (Array.isArray(src[key]) || src[key] instanceof TypedArray) {
          result[key] = src[key].slice(0);
        } else {
          result[key] = src[key];
        }
      }
    }
  }
  return result;
};

// node_modules/web3-utils/lib/esm/string_manipulation.js
var padLeft = (value, characterAmount, sign = "0") => {
  if (typeof value === "string") {
    if (!isHexStrict(value)) {
      return value.padStart(characterAmount, sign);
    }
    return utils_exports.padLeft(value, characterAmount, sign);
  }
  validator.validate(["int"], [value]);
  return utils_exports.padLeft(value, characterAmount, sign);
};
var padRight = (value, characterAmount, sign = "0") => {
  if (typeof value === "string" && !isHexStrict(value)) {
    return value.padEnd(characterAmount, sign);
  }
  const hexString = typeof value === "string" && isHexStrict(value) ? value : numberToHex(value);
  const prefixLength = hexString.startsWith("-") ? 3 : 2;
  validator.validate([hexString.startsWith("-") ? "int" : "uint"], [value]);
  return hexString.padEnd(characterAmount + prefixLength, sign);
};
var rightPad = padRight;
var leftPad = padLeft;
var toTwosComplement = (value, nibbleWidth = 64) => {
  validator.validate(["int"], [value]);
  const val = toNumber(value);
  if (val >= 0)
    return padLeft(toHex(val), nibbleWidth);
  const largestBit = bigintPower(BigInt(2), BigInt(nibbleWidth * 4));
  if (-val >= largestBit) {
    throw new NibbleWidthError(`value: ${value}, nibbleWidth: ${nibbleWidth}`);
  }
  const updatedVal = BigInt(val);
  const complement = updatedVal + largestBit;
  return padLeft(numberToHex(complement), nibbleWidth);
};
var fromTwosComplement = (value, nibbleWidth = 64) => {
  validator.validate(["int"], [value]);
  const val = toNumber(value);
  if (val < 0)
    return val;
  const largestBit = Math.ceil(Math.log(Number(val)) / Math.log(2));
  if (largestBit > nibbleWidth * 4)
    throw new NibbleWidthError(`value: "${value}", nibbleWidth: "${nibbleWidth}"`);
  if (nibbleWidth * 4 !== largestBit)
    return val;
  const complement = bigintPower(BigInt(2), BigInt(nibbleWidth) * BigInt(4));
  return toNumber(BigInt(val) - complement);
};

// node_modules/web3-utils/lib/esm/formatter.js
var { parseBaseType } = utils_exports;
var isDataFormat = (dataFormat) => typeof dataFormat === "object" && !isNullish(dataFormat) && "number" in dataFormat && "bytes" in dataFormat;
var findSchemaByDataPath = (schema, dataPath, oneOfPath = []) => {
  let result = Object.assign({}, schema);
  let previousDataPath;
  for (const dataPart of dataPath) {
    if (result.oneOf && previousDataPath) {
      const currentDataPath = previousDataPath;
      const path = oneOfPath.find(([key]) => key === currentDataPath);
      if (path && path[0] === previousDataPath) {
        result = result.oneOf[path[1]];
      }
    }
    if (!result.properties && !result.items) {
      return void 0;
    }
    if (result.properties) {
      result = result.properties[dataPart];
    } else if (result.items && result.items.properties) {
      const node = result.items.properties;
      result = node[dataPart];
    } else if (result.items && isObject(result.items)) {
      result = result.items;
    } else if (result.items && Array.isArray(result.items)) {
      result = result.items[parseInt(dataPart, 10)];
    }
    if (result && dataPart)
      previousDataPath = dataPart;
  }
  return result;
};
var convertScalarValue = (value, ethType, format2) => {
  try {
    const { baseType, baseTypeSize } = parseBaseType(ethType);
    if (baseType === "int" || baseType === "uint") {
      switch (format2.number) {
        case FMT_NUMBER.NUMBER:
          return Number(toBigInt(value));
        case FMT_NUMBER.HEX:
          return numberToHex(toBigInt(value));
        case FMT_NUMBER.STR:
          return toBigInt(value).toString();
        case FMT_NUMBER.BIGINT:
          return toBigInt(value);
        default:
          throw new FormatterError(`Invalid format: ${String(format2.number)}`);
      }
    }
    if (baseType === "bytes") {
      let paddedValue;
      if (baseTypeSize) {
        if (typeof value === "string")
          paddedValue = padLeft(value, baseTypeSize * 2);
        else if (isUint8Array(value)) {
          paddedValue = uint8ArrayConcat(new Uint8Array(baseTypeSize - value.length), value);
        }
      } else {
        paddedValue = value;
      }
      switch (format2.bytes) {
        case FMT_BYTES.HEX:
          return bytesToHex(bytesToUint8Array(paddedValue));
        case FMT_BYTES.UINT8ARRAY:
          return bytesToUint8Array(paddedValue);
        default:
          throw new FormatterError(`Invalid format: ${String(format2.bytes)}`);
      }
    }
    if (baseType === "string") {
      return String(value);
    }
  } catch (error) {
    return value;
  }
  return value;
};
var convertArray = ({ value, schemaProp, schema, object, key, dataPath, format: format2, oneOfPath = [] }) => {
  var _a2, _b;
  if (Array.isArray(value)) {
    let _schemaProp = schemaProp;
    if ((schemaProp === null || schemaProp === void 0 ? void 0 : schemaProp.oneOf) !== void 0) {
      schemaProp.oneOf.forEach((oneOfSchemaProp, index) => {
        var _a3, _b2;
        if (!Array.isArray(schemaProp === null || schemaProp === void 0 ? void 0 : schemaProp.items) && (typeof value[0] === "object" && ((_a3 = oneOfSchemaProp === null || oneOfSchemaProp === void 0 ? void 0 : oneOfSchemaProp.items) === null || _a3 === void 0 ? void 0 : _a3.type) === "object" || typeof value[0] === "string" && ((_b2 = oneOfSchemaProp === null || oneOfSchemaProp === void 0 ? void 0 : oneOfSchemaProp.items) === null || _b2 === void 0 ? void 0 : _b2.type) !== "object")) {
          _schemaProp = oneOfSchemaProp;
          oneOfPath.push([key, index]);
        }
      });
    }
    if (isNullish(_schemaProp === null || _schemaProp === void 0 ? void 0 : _schemaProp.items)) {
      delete object[key];
      dataPath.pop();
      return true;
    }
    if (isObject(_schemaProp.items) && !isNullish(_schemaProp.items.format)) {
      for (let i = 0; i < value.length; i += 1) {
        object[key][i] = convertScalarValue(
          value[i],
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          (_a2 = _schemaProp === null || _schemaProp === void 0 ? void 0 : _schemaProp.items) === null || _a2 === void 0 ? void 0 : _a2.format,
          format2
        );
      }
      dataPath.pop();
      return true;
    }
    if (!Array.isArray(_schemaProp === null || _schemaProp === void 0 ? void 0 : _schemaProp.items) && ((_b = _schemaProp === null || _schemaProp === void 0 ? void 0 : _schemaProp.items) === null || _b === void 0 ? void 0 : _b.type) === "object") {
      for (const arrObject of value) {
        convert(arrObject, schema, dataPath, format2, oneOfPath);
      }
      dataPath.pop();
      return true;
    }
    if (Array.isArray(_schemaProp === null || _schemaProp === void 0 ? void 0 : _schemaProp.items)) {
      for (let i = 0; i < value.length; i += 1) {
        object[key][i] = convertScalarValue(value[i], _schemaProp.items[i].format, format2);
      }
      dataPath.pop();
      return true;
    }
  }
  return false;
};
var convert = (data, schema, dataPath, format2, oneOfPath = []) => {
  var _a2;
  if (!isObject(data) && !Array.isArray(data)) {
    return convertScalarValue(data, schema === null || schema === void 0 ? void 0 : schema.format, format2);
  }
  const object = data;
  if (Array.isArray(object) && (schema === null || schema === void 0 ? void 0 : schema.type) === "array" && ((_a2 = schema === null || schema === void 0 ? void 0 : schema.items) === null || _a2 === void 0 ? void 0 : _a2.type) === "object") {
    convertArray({
      value: object,
      schemaProp: schema,
      schema,
      object,
      key: "",
      dataPath,
      format: format2,
      oneOfPath
    });
  } else {
    for (const [key, value] of Object.entries(object)) {
      dataPath.push(key);
      let schemaProp = findSchemaByDataPath(schema, dataPath, oneOfPath);
      if (isNullish(schemaProp)) {
        delete object[key];
        dataPath.pop();
        continue;
      }
      if (isObject(value)) {
        convert(value, schema, dataPath, format2, oneOfPath);
        dataPath.pop();
        continue;
      }
      if (convertArray({
        value,
        schemaProp,
        schema,
        object,
        key,
        dataPath,
        format: format2,
        oneOfPath
      })) {
        continue;
      }
      if ((schemaProp === null || schemaProp === void 0 ? void 0 : schemaProp.format) === void 0 && (schemaProp === null || schemaProp === void 0 ? void 0 : schemaProp.oneOf) !== void 0) {
        for (const [_index, oneOfSchemaProp] of schemaProp.oneOf.entries()) {
          if ((oneOfSchemaProp === null || oneOfSchemaProp === void 0 ? void 0 : oneOfSchemaProp.format) !== void 0) {
            schemaProp = oneOfSchemaProp;
            break;
          }
        }
      }
      object[key] = convertScalarValue(value, schemaProp.format, format2);
      dataPath.pop();
    }
  }
  return object;
};
var format = (schema, data, returnFormat = DEFAULT_RETURN_FORMAT) => {
  let dataToParse;
  if (isObject(data)) {
    dataToParse = mergeDeep({}, data);
  } else if (Array.isArray(data)) {
    dataToParse = [...data];
  } else {
    dataToParse = data;
  }
  const jsonSchema = isObject(schema) ? schema : utils_exports.ethAbiToJsonSchema(schema);
  if (!jsonSchema.properties && !jsonSchema.items && !jsonSchema.format) {
    throw new FormatterError("Invalid json schema for formatting");
  }
  return convert(dataToParse, jsonSchema, [], returnFormat);
};

// node_modules/web3-utils/lib/esm/hash.js
var SHA3_EMPTY_BYTES = "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
var keccak256Wrapper = (data) => {
  let processedData;
  if (typeof data === "bigint" || typeof data === "number") {
    processedData = utf8ToBytes(data.toString());
  } else if (Array.isArray(data)) {
    processedData = new Uint8Array(data);
  } else if (typeof data === "string" && !isHexStrict(data)) {
    processedData = utf8ToBytes(data);
  } else {
    processedData = bytesToUint8Array(data);
  }
  return bytesToHex(keccak256(utils_exports.ensureIfUint8Array(processedData)));
};
var sha3 = (data) => {
  let updatedData;
  if (typeof data === "string") {
    if (data.startsWith("0x") && isHexStrict(data)) {
      updatedData = hexToBytes(data);
    } else {
      updatedData = utf8ToBytes(data);
    }
  } else {
    updatedData = data;
  }
  const hash = keccak256Wrapper(updatedData);
  return hash === SHA3_EMPTY_BYTES ? void 0 : hash;
};
var sha3Raw = (data) => {
  const hash = sha3(data);
  if (isNullish(hash)) {
    return SHA3_EMPTY_BYTES;
  }
  return hash;
};
var getType = (arg) => {
  if (Array.isArray(arg)) {
    throw new Error("Autodetection of array types is not supported.");
  }
  let type;
  let value;
  if (typeof arg === "object" && ("t" in arg || "type" in arg) && ("v" in arg || "value" in arg)) {
    type = "t" in arg ? arg.t : arg.type;
    value = "v" in arg ? arg.v : arg.value;
    type = type.toLowerCase() === "bigint" ? "int" : type;
  } else if (typeof arg === "bigint") {
    return ["int", arg];
  } else {
    type = toHex(arg, true);
    value = toHex(arg);
    if (!type.startsWith("int") && !type.startsWith("uint")) {
      type = "bytes";
    }
  }
  if ((type.startsWith("int") || type.startsWith("uint")) && typeof value === "string" && !/^(-)?0x/i.test(value)) {
    value = toBigInt(value);
  }
  return [type, value];
};
var elementaryName = (name) => {
  if (name.startsWith("int[")) {
    return `int256${name.slice(3)}`;
  }
  if (name === "int") {
    return "int256";
  }
  if (name.startsWith("uint[")) {
    return `uint256'${name.slice(4)}`;
  }
  if (name === "uint") {
    return "uint256";
  }
  return name;
};
var parseTypeN = (value, typeLength) => {
  const typesize = /^(\d+).*$/.exec(value.slice(typeLength));
  return typesize ? parseInt(typesize[1], 10) : 0;
};
var bitLength = (value) => {
  const updatedVal = value.toString(2);
  return updatedVal.length;
};
var solidityPack = (type, val) => {
  const value = val.toString();
  if (type === "string") {
    if (typeof val === "string")
      return utf8ToHex(val);
    throw new InvalidStringError(val);
  }
  if (type === "bool" || type === "boolean") {
    if (typeof val === "boolean")
      return val ? "01" : "00";
    throw new InvalidBooleanError(val);
  }
  if (type === "address") {
    if (!isAddress(value)) {
      throw new InvalidAddressError(value);
    }
    return value;
  }
  const name = elementaryName(type);
  if (type.startsWith("uint")) {
    const size = parseTypeN(name, "uint".length);
    if (size % 8 || size < 8 || size > 256) {
      throw new InvalidSizeError(value);
    }
    const num = toNumber(value);
    if (bitLength(num) > size) {
      throw new InvalidLargeValueError(value);
    }
    if (num < BigInt(0)) {
      throw new InvalidUnsignedIntegerError(value);
    }
    return size ? leftPad(num.toString(16), size / 8 * 2) : num.toString(16);
  }
  if (type.startsWith("int")) {
    const size = parseTypeN(name, "int".length);
    if (size % 8 || size < 8 || size > 256) {
      throw new InvalidSizeError(type);
    }
    const num = toNumber(value);
    if (bitLength(num) > size) {
      throw new InvalidLargeValueError(value);
    }
    if (num < BigInt(0)) {
      return toTwosComplement(num.toString(), size / 8 * 2);
    }
    return size ? leftPad(num.toString(16), size / 4) : num.toString(16);
  }
  if (name === "bytes") {
    if (value.replace(/^0x/i, "").length % 2 !== 0) {
      throw new InvalidBytesError(value);
    }
    return value;
  }
  if (type.startsWith("bytes")) {
    if (value.replace(/^0x/i, "").length % 2 !== 0) {
      throw new InvalidBytesError(value);
    }
    const size = parseTypeN(type, "bytes".length);
    if (!size || size < 1 || size > 64 || size < value.replace(/^0x/i, "").length / 2) {
      throw new InvalidBytesError(value);
    }
    return rightPad(value, size * 2);
  }
  return "";
};
var processSolidityEncodePackedArgs = (arg) => {
  const [type, val] = getType(arg);
  if (Array.isArray(val)) {
    const hexArg2 = val.map((v) => solidityPack(type, v).replace("0x", ""));
    return hexArg2.join("");
  }
  const hexArg = solidityPack(type, val);
  return hexArg.replace("0x", "");
};
var encodePacked = (...values) => {
  const hexArgs = values.map(processSolidityEncodePackedArgs);
  return `0x${hexArgs.join("").toLowerCase()}`;
};
var soliditySha3 = (...values) => sha3(encodePacked(...values));
var soliditySha3Raw = (...values) => sha3Raw(encodePacked(...values));
var getStorageSlotNumForLongString = (mainSlotNumber) => sha3(`0x${(typeof mainSlotNumber === "number" ? mainSlotNumber.toString() : mainSlotNumber).padStart(64, "0")}`);

// node_modules/ethereum-cryptography/esm/random.js
function getRandomBytesSync(bytes) {
  return randomBytes(bytes);
}

// node_modules/web3-utils/lib/esm/random.js
var randomBytes2 = (size) => getRandomBytesSync(size);
var randomHex = (byteSize) => bytesToHex(randomBytes2(byteSize));

// node_modules/web3-utils/lib/esm/promise_helpers.js
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
function isPromise(object) {
  return (typeof object === "object" || typeof object === "function") && // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  typeof object.then === "function";
}
function waitWithTimeout(awaitable, timeout, error) {
  return __awaiter(this, void 0, void 0, function* () {
    let timeoutId;
    const result = yield Promise.race([
      awaitable instanceof Promise ? awaitable : awaitable(),
      new Promise((resolve, reject) => {
        timeoutId = setTimeout(() => error ? reject(error) : resolve(void 0), timeout);
      })
    ]);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (result instanceof Error) {
      throw result;
    }
    return result;
  });
}
function pollTillDefinedAndReturnIntervalId(func, interval) {
  let intervalId;
  const polledRes = new Promise((resolve, reject) => {
    intervalId = setInterval(
      function intervalCallbackFunc() {
        (() => __awaiter(this, void 0, void 0, function* () {
          try {
            const res = yield waitWithTimeout(func, interval);
            if (!isNullish(res)) {
              clearInterval(intervalId);
              resolve(res);
            }
          } catch (error) {
            clearInterval(intervalId);
            reject(error);
          }
        }))();
        return intervalCallbackFunc;
      }(),
      // this will immediate invoke first call
      interval
    );
  });
  return [polledRes, intervalId];
}
function pollTillDefined(func, interval) {
  return __awaiter(this, void 0, void 0, function* () {
    return pollTillDefinedAndReturnIntervalId(func, interval)[0];
  });
}
function rejectIfTimeout(timeout, error) {
  let timeoutId;
  const rejectOnTimeout = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(error);
    }, timeout);
  });
  return [timeoutId, rejectOnTimeout];
}
function rejectIfConditionAtInterval(cond, interval) {
  let intervalId;
  const rejectIfCondition = new Promise((_, reject) => {
    intervalId = setInterval(() => {
      (() => __awaiter(this, void 0, void 0, function* () {
        const error = yield cond();
        if (error) {
          clearInterval(intervalId);
          reject(error);
        }
      }))();
    }, interval);
  });
  return [intervalId, rejectIfCondition];
}

// node_modules/web3-utils/lib/esm/json_rpc.js
var json_rpc_exports = {};
__export(json_rpc_exports, {
  isBatchRequest: () => isBatchRequest,
  isBatchResponse: () => isBatchResponse,
  isResponseRpcError: () => isResponseRpcError,
  isResponseWithError: () => isResponseWithError,
  isResponseWithNotification: () => isResponseWithNotification,
  isResponseWithResult: () => isResponseWithResult,
  isSubscriptionResult: () => isSubscriptionResult,
  isValidResponse: () => isValidResponse,
  setRequestIdStart: () => setRequestIdStart,
  toBatchPayload: () => toBatchPayload,
  toPayload: () => toPayload,
  validateResponse: () => validateResponse
});

// node_modules/web3-utils/lib/esm/uuid.js
var uuidV4 = () => {
  const bytes = randomBytes2(16);
  bytes[6] = bytes[6] & 15 | 64;
  bytes[8] = bytes[8] & 63 | 128;
  const hexString = bytesToHex(bytes);
  return [
    hexString.substring(2, 10),
    hexString.substring(10, 14),
    hexString.substring(14, 18),
    hexString.substring(18, 22),
    hexString.substring(22, 34)
  ].join("-");
};

// node_modules/web3-utils/lib/esm/json_rpc.js
var isResponseRpcError = (rpcError) => {
  const errorCode = rpcError.error.code;
  return rpcErrorsMap.has(errorCode) || errorCode >= -32099 && errorCode <= -32e3;
};
var isResponseWithResult = (response) => !Array.isArray(response) && !!response && response.jsonrpc === "2.0" && // JSON RPC consider "null" as valid response
"result" in response && isNullish(response.error) && (typeof response.id === "number" || typeof response.id === "string");
var isResponseWithError = (response) => !Array.isArray(response) && response.jsonrpc === "2.0" && !!response && isNullish(response.result) && // JSON RPC consider "null" as valid response
"error" in response && (typeof response.id === "number" || typeof response.id === "string");
var isResponseWithNotification = (response) => !Array.isArray(response) && !!response && response.jsonrpc === "2.0" && !isNullish(response.params) && !isNullish(response.method);
var isSubscriptionResult = (response) => !Array.isArray(response) && !!response && response.jsonrpc === "2.0" && "id" in response && // JSON RPC consider "null" as valid response
"result" in response;
var validateResponse = (response) => isResponseWithResult(response) || isResponseWithError(response);
var isValidResponse = (response) => Array.isArray(response) ? response.every(validateResponse) : validateResponse(response);
var isBatchResponse = (response) => Array.isArray(response) && response.length > 0 && isValidResponse(response);
var requestIdSeed;
var setRequestIdStart = (start) => {
  requestIdSeed = start;
};
var toPayload = (request) => {
  var _a2, _b, _c, _d;
  if (typeof requestIdSeed !== "undefined") {
    requestIdSeed += 1;
  }
  return {
    jsonrpc: (_a2 = request.jsonrpc) !== null && _a2 !== void 0 ? _a2 : "2.0",
    id: (_c = (_b = request.id) !== null && _b !== void 0 ? _b : requestIdSeed) !== null && _c !== void 0 ? _c : uuidV4(),
    method: request.method,
    params: (_d = request.params) !== null && _d !== void 0 ? _d : void 0
  };
};
var toBatchPayload = (requests) => requests.map((request) => toPayload(request));
var isBatchRequest = (request) => Array.isArray(request) && request.length > 0;

// node_modules/web3-utils/lib/esm/web3_deferred_promise.js
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
var _a;
var Web3DeferredPromise = class {
  /**
   *
   * @param timeout - (optional) The timeout in milliseconds.
   * @param eagerStart - (optional) If true, the timer starts as soon as the promise is created.
   * @param timeoutMessage - (optional) The message to include in the timeout erro that is thrown when the promise times out.
   */
  constructor({ timeout, eagerStart, timeoutMessage } = {
    timeout: 0,
    eagerStart: false,
    timeoutMessage: "DeferredPromise timed out"
  }) {
    this[_a] = "Promise";
    this._state = "pending";
    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this._timeoutMessage = timeoutMessage;
    this._timeoutInterval = timeout;
    if (eagerStart) {
      this.startTimer();
    }
  }
  /**
   * Returns the current state of the promise.
   * @returns 'pending' | 'fulfilled' | 'rejected'
   */
  get state() {
    return this._state;
  }
  /**
   *
   * @param onfulfilled - (optional) The callback to execute when the promise is fulfilled.
   * @param onrejected  - (optional) The callback to execute when the promise is rejected.
   * @returns
   */
  then(onfulfilled, onrejected) {
    return __awaiter2(this, void 0, void 0, function* () {
      return this._promise.then(onfulfilled, onrejected);
    });
  }
  /**
   *
   * @param onrejected - (optional) The callback to execute when the promise is rejected.
   * @returns
   */
  catch(onrejected) {
    return __awaiter2(this, void 0, void 0, function* () {
      return this._promise.catch(onrejected);
    });
  }
  /**
   *
   * @param onfinally - (optional) The callback to execute when the promise is settled (fulfilled or rejected).
   * @returns
   */
  finally(onfinally) {
    return __awaiter2(this, void 0, void 0, function* () {
      return this._promise.finally(onfinally);
    });
  }
  /**
   * Resolves the current promise.
   * @param value - The value to resolve the promise with.
   */
  resolve(value) {
    this._resolve(value);
    this._state = "fulfilled";
    this._clearTimeout();
  }
  /**
   * Rejects the current promise.
   * @param reason - The reason to reject the promise with.
   */
  reject(reason) {
    this._reject(reason);
    this._state = "rejected";
    this._clearTimeout();
  }
  /**
   * Starts the timeout timer for the promise.
   */
  startTimer() {
    if (this._timeoutInterval && this._timeoutInterval > 0) {
      this._timeoutId = setTimeout(this._checkTimeout.bind(this), this._timeoutInterval);
    }
  }
  _checkTimeout() {
    if (this._state === "pending" && this._timeoutId) {
      this.reject(new OperationTimeoutError(this._timeoutMessage));
    }
  }
  _clearTimeout() {
    if (this._timeoutId) {
      clearTimeout(this._timeoutId);
    }
  }
};
_a = Symbol.toStringTag;

// node_modules/web3-utils/lib/esm/chunk_response_parser.js
var ChunkResponseParser = class {
  constructor(eventEmitter, autoReconnect) {
    this.eventEmitter = eventEmitter;
    this.autoReconnect = autoReconnect;
    this.chunkTimeout = 1e3 * 15;
  }
  clearQueues() {
    if (typeof this._clearQueues === "function") {
      this._clearQueues();
    }
  }
  onError(clearQueues) {
    this._clearQueues = clearQueues;
  }
  parseResponse(data) {
    const returnValues = [];
    const dechunkedData = data.replace(/\}[\n\r]?\{/g, "}|--|{").replace(/\}\][\n\r]?\[\{/g, "}]|--|[{").replace(/\}[\n\r]?\[\{/g, "}|--|[{").replace(/\}\][\n\r]?\{/g, "}]|--|{").split("|--|");
    dechunkedData.forEach((_chunkData) => {
      let chunkData = _chunkData;
      if (this.lastChunk) {
        chunkData = this.lastChunk + chunkData;
      }
      let result;
      try {
        result = JSON.parse(chunkData);
      } catch (e) {
        this.lastChunk = chunkData;
        if (this.lastChunkTimeout) {
          clearTimeout(this.lastChunkTimeout);
        }
        this.lastChunkTimeout = setTimeout(() => {
          if (this.autoReconnect)
            return;
          this.clearQueues();
          this.eventEmitter.emit("error", new InvalidResponseError({
            id: 1,
            jsonrpc: "2.0",
            error: { code: 2, message: "Chunk timeout" }
          }));
        }, this.chunkTimeout);
        return;
      }
      clearTimeout(this.lastChunkTimeout);
      this.lastChunk = void 0;
      if (result)
        returnValues.push(result);
    });
    return returnValues;
  }
};

// node_modules/web3-utils/lib/esm/web3_eip1193_provider.js
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
var Eip1193Provider = class extends Web3BaseProvider {
  constructor() {
    super(...arguments);
    this._eventEmitter = new import_index.default();
    this._chainId = "";
    this._accounts = [];
  }
  _getChainId() {
    return __awaiter3(this, void 0, void 0, function* () {
      var _a2;
      const data = yield this.request(toPayload({
        method: "eth_chainId",
        params: []
      }));
      return (_a2 = data === null || data === void 0 ? void 0 : data.result) !== null && _a2 !== void 0 ? _a2 : "";
    });
  }
  _getAccounts() {
    return __awaiter3(this, void 0, void 0, function* () {
      var _a2;
      const data = yield this.request(toPayload({
        method: "eth_accounts",
        params: []
      }));
      return (_a2 = data === null || data === void 0 ? void 0 : data.result) !== null && _a2 !== void 0 ? _a2 : [];
    });
  }
  _onConnect() {
    Promise.all([
      this._getChainId().then((chainId) => {
        if (chainId !== this._chainId) {
          this._chainId = chainId;
          this._eventEmitter.emit("chainChanged", this._chainId);
        }
      }).catch((err) => {
        console.error(err);
      }),
      this._getAccounts().then((accounts) => {
        if (!(this._accounts.length === accounts.length && accounts.every((v) => accounts.includes(v)))) {
          this._accounts = accounts;
          this._onAccountsChanged();
        }
      }).catch((err) => {
        console.error(err);
      })
    ]).then(() => this._eventEmitter.emit("connect", {
      chainId: this._chainId
    })).catch((err) => {
      console.error(err);
    });
  }
  // todo this must be ProvideRpcError with a message too
  _onDisconnect(code, data) {
    this._eventEmitter.emit("disconnect", new EIP1193ProviderRpcError(code, data));
  }
  _onAccountsChanged() {
    this._eventEmitter.emit("accountsChanged", this._accounts);
  }
};

// node_modules/web3-utils/lib/esm/socket_provider.js
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
var DEFAULT_RECONNECTION_OPTIONS = {
  autoReconnect: true,
  delay: 5e3,
  maxAttempts: 5
};
var NORMAL_CLOSE_CODE = 1e3;
var SocketProvider = class extends Eip1193Provider {
  get SocketConnection() {
    return this._socketConnection;
  }
  /**
   * This is an abstract class for implementing a socket provider (e.g. WebSocket, IPC). It extends the EIP-1193 provider {@link EIP1193Provider}.
   * @param socketPath - The path to the socket (e.g. /ipc/path or ws://localhost:8546)
   * @param socketOptions - The options for the socket connection. Its type is supposed to be specified in the inherited classes.
   * @param reconnectOptions - The options for the socket reconnection {@link ReconnectOptions}
   */
  constructor(socketPath, socketOptions, reconnectOptions) {
    super();
    this._connectionStatus = "connecting";
    this._onMessageHandler = this._onMessage.bind(this);
    this._onOpenHandler = this._onConnect.bind(this);
    this._onCloseHandler = this._onCloseEvent.bind(this);
    this._onErrorHandler = this._onError.bind(this);
    if (!this._validateProviderPath(socketPath))
      throw new InvalidClientError(socketPath);
    this._socketPath = socketPath;
    this._socketOptions = socketOptions;
    this._reconnectOptions = Object.assign(Object.assign({}, DEFAULT_RECONNECTION_OPTIONS), reconnectOptions !== null && reconnectOptions !== void 0 ? reconnectOptions : {});
    this._pendingRequestsQueue = /* @__PURE__ */ new Map();
    this._sentRequestsQueue = /* @__PURE__ */ new Map();
    this._init();
    this.connect();
    this.chunkResponseParser = new ChunkResponseParser(this._eventEmitter, this._reconnectOptions.autoReconnect);
    this.chunkResponseParser.onError(() => {
      this._clearQueues();
    });
    this.isReconnecting = false;
  }
  _init() {
    this._reconnectAttempts = 0;
  }
  /**
   * Try to establish a connection to the socket
   */
  connect() {
    try {
      this._openSocketConnection();
      this._connectionStatus = "connecting";
      this._addSocketListeners();
    } catch (e) {
      if (!this.isReconnecting) {
        this._connectionStatus = "disconnected";
        if (e && e.message) {
          throw new ConnectionError(`Error while connecting to ${this._socketPath}. Reason: ${e.message}`);
        } else {
          throw new InvalidClientError(this._socketPath);
        }
      } else {
        setImmediate(() => {
          this._reconnect();
        });
      }
    }
  }
  // eslint-disable-next-line class-methods-use-this
  _validateProviderPath(path) {
    return !!path;
  }
  /**
   *
   * @returns the pendingRequestQueue size
   */
  // eslint-disable-next-line class-methods-use-this
  getPendingRequestQueueSize() {
    return this._pendingRequestsQueue.size;
  }
  /**
   *
   * @returns the sendPendingRequests size
   */
  // eslint-disable-next-line class-methods-use-this
  getSentRequestsQueueSize() {
    return this._sentRequestsQueue.size;
  }
  /**
   *
   * @returns `true` if the socket supports subscriptions
   */
  // eslint-disable-next-line class-methods-use-this
  supportsSubscriptions() {
    return true;
  }
  on(type, listener) {
    this._eventEmitter.on(type, listener);
  }
  once(type, listener) {
    this._eventEmitter.once(type, listener);
  }
  removeListener(type, listener) {
    this._eventEmitter.removeListener(type, listener);
  }
  _onDisconnect(code, data) {
    this._connectionStatus = "disconnected";
    super._onDisconnect(code, data);
  }
  /**
   * Disconnects the socket
   * @param code - The code to be sent to the server
   * @param data - The data to be sent to the server
   */
  disconnect(code, data) {
    const disconnectCode = code !== null && code !== void 0 ? code : NORMAL_CLOSE_CODE;
    this._removeSocketListeners();
    if (this.getStatus() !== "disconnected") {
      this._closeSocketConnection(disconnectCode, data);
    }
    this._onDisconnect(disconnectCode, data);
  }
  /**
   * Safely disconnects the socket, async and waits for request size to be 0 before disconnecting
   * @param forceDisconnect - If true, will clear queue after 5 attempts of waiting for both pending and sent queue to be 0
   * @param ms - Determines the ms of setInterval
   * @param code - The code to be sent to the server
   * @param data - The data to be sent to the server
   */
  safeDisconnect(code_1, data_1) {
    return __awaiter4(this, arguments, void 0, function* (code, data, forceDisconnect = false, ms = 1e3) {
      let retryAttempt = 0;
      const checkQueue = () => __awaiter4(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
          const interval = setInterval(() => {
            if (forceDisconnect && retryAttempt >= 5) {
              this.clearQueues();
            }
            if (this.getPendingRequestQueueSize() === 0 && this.getSentRequestsQueueSize() === 0) {
              clearInterval(interval);
              resolve(true);
            }
            retryAttempt += 1;
          }, ms);
        });
      });
      yield checkQueue();
      this.disconnect(code, data);
    });
  }
  /**
   * Removes all listeners for the specified event type.
   * @param type - The event type to remove the listeners for
   */
  removeAllListeners(type) {
    this._eventEmitter.removeAllListeners(type);
  }
  _onError(event) {
    if (this.isReconnecting) {
      this._reconnect();
    } else {
      this._eventEmitter.emit("error", event);
    }
  }
  /**
   * Resets the socket, removing all listeners and pending requests
   */
  reset() {
    this._sentRequestsQueue.clear();
    this._pendingRequestsQueue.clear();
    this._init();
    this._removeSocketListeners();
    this._addSocketListeners();
  }
  _reconnect() {
    if (this.isReconnecting) {
      return;
    }
    this.isReconnecting = true;
    if (this._sentRequestsQueue.size > 0) {
      this._sentRequestsQueue.forEach((request, key) => {
        request.deferredPromise.reject(new PendingRequestsOnReconnectingError());
        this._sentRequestsQueue.delete(key);
      });
    }
    if (this._reconnectAttempts < this._reconnectOptions.maxAttempts) {
      this._reconnectAttempts += 1;
      setTimeout(() => {
        this._removeSocketListeners();
        this.connect();
        this.isReconnecting = false;
      }, this._reconnectOptions.delay);
    } else {
      this.isReconnecting = false;
      this._clearQueues();
      this._removeSocketListeners();
      this._eventEmitter.emit("error", new MaxAttemptsReachedOnReconnectingError(this._reconnectOptions.maxAttempts));
    }
  }
  /**
   *  Creates a request object to be sent to the server
   */
  request(request) {
    return __awaiter4(this, void 0, void 0, function* () {
      if (isNullish2(this._socketConnection)) {
        throw new Error("Connection is undefined");
      }
      if (this.getStatus() === "disconnected") {
        this.connect();
      }
      const requestId = isBatchRequest(request) ? request[0].id : request.id;
      if (!requestId) {
        throw new Web3WSProviderError("Request Id not defined");
      }
      if (this._sentRequestsQueue.has(requestId)) {
        throw new RequestAlreadySentError(requestId);
      }
      const deferredPromise = new Web3DeferredPromise();
      deferredPromise.catch((error) => {
        this._eventEmitter.emit("error", error);
      });
      const reqItem = {
        payload: request,
        deferredPromise
      };
      if (this.getStatus() === "connecting") {
        this._pendingRequestsQueue.set(requestId, reqItem);
        return reqItem.deferredPromise;
      }
      this._sentRequestsQueue.set(requestId, reqItem);
      try {
        this._sendToSocket(reqItem.payload);
      } catch (error) {
        this._sentRequestsQueue.delete(requestId);
        this._eventEmitter.emit("error", error);
      }
      return deferredPromise;
    });
  }
  _onConnect() {
    this._connectionStatus = "connected";
    this._reconnectAttempts = 0;
    super._onConnect();
    this._sendPendingRequests();
  }
  _sendPendingRequests() {
    for (const [id, value] of this._pendingRequestsQueue.entries()) {
      try {
        this._sendToSocket(value.payload);
        this._pendingRequestsQueue.delete(id);
        this._sentRequestsQueue.set(id, value);
      } catch (error) {
        this._pendingRequestsQueue.delete(id);
        this._eventEmitter.emit("error", error);
      }
    }
  }
  _onMessage(event) {
    const responses = this._parseResponses(event);
    if (isNullish2(responses) || responses.length === 0) {
      return;
    }
    for (const response of responses) {
      if (isResponseWithNotification(response) && response.method.endsWith("_subscription")) {
        this._eventEmitter.emit("message", response);
        return;
      }
      const requestId = isBatchResponse(response) ? response[0].id : response.id;
      const requestItem = this._sentRequestsQueue.get(requestId);
      if (!requestItem) {
        return;
      }
      if (isBatchResponse(response) || isResponseWithResult(response) || isResponseWithError(response)) {
        this._eventEmitter.emit("message", response);
        requestItem.deferredPromise.resolve(response);
      }
      this._sentRequestsQueue.delete(requestId);
    }
  }
  clearQueues(event) {
    this._clearQueues(event);
  }
  _clearQueues(event) {
    if (this._pendingRequestsQueue.size > 0) {
      this._pendingRequestsQueue.forEach((request, key) => {
        request.deferredPromise.reject(new ConnectionNotOpenError(event));
        this._pendingRequestsQueue.delete(key);
      });
    }
    if (this._sentRequestsQueue.size > 0) {
      this._sentRequestsQueue.forEach((request, key) => {
        request.deferredPromise.reject(new ConnectionNotOpenError(event));
        this._sentRequestsQueue.delete(key);
      });
    }
    this._removeSocketListeners();
  }
};

export {
  isUint8Array,
  uint8ArrayConcat,
  uint8ArrayEquals,
  ethUnitMap,
  bytesToUint8Array,
  bytesToHex,
  hexToBytes,
  hexToNumber,
  toDecimal,
  numberToHex,
  fromDecimal,
  hexToNumberString,
  utf8ToHex,
  fromUtf8,
  stringToHex,
  hexToUtf8,
  toUtf8,
  utf8ToBytes2 as utf8ToBytes,
  hexToString,
  asciiToHex,
  fromAscii,
  hexToAscii,
  toAscii,
  toHex,
  toNumber,
  toBigInt,
  fromWei,
  toWei,
  toChecksumAddress,
  toBool,
  EventEmitter2 as EventEmitter,
  isHexStrict2 as isHexStrict,
  isHex2 as isHex,
  checkAddressCheckSum2 as checkAddressCheckSum,
  isAddress2 as isAddress,
  isBloom2 as isBloom,
  isInBloom2 as isInBloom,
  isUserEthereumAddressInBloom2 as isUserEthereumAddressInBloom,
  isContractAddressInBloom2 as isContractAddressInBloom,
  isTopic2 as isTopic,
  isTopicInBloom2 as isTopicInBloom,
  compareBlockNumbers,
  isContractInitOptions,
  isNullish2 as isNullish,
  mergeDeep,
  padLeft,
  padRight,
  rightPad,
  leftPad,
  toTwosComplement,
  fromTwosComplement,
  isDataFormat,
  convertScalarValue,
  convert,
  format,
  keccak256Wrapper,
  sha3,
  sha3Raw,
  processSolidityEncodePackedArgs,
  encodePacked,
  soliditySha3,
  soliditySha3Raw,
  getStorageSlotNumForLongString,
  randomBytes2 as randomBytes,
  randomHex,
  isPromise,
  waitWithTimeout,
  pollTillDefinedAndReturnIntervalId,
  pollTillDefined,
  rejectIfTimeout,
  rejectIfConditionAtInterval,
  uuidV4,
  isResponseRpcError,
  isResponseWithResult,
  isResponseWithError,
  isResponseWithNotification,
  isSubscriptionResult,
  validateResponse,
  isValidResponse,
  isBatchResponse,
  setRequestIdStart,
  toPayload,
  toBatchPayload,
  isBatchRequest,
  json_rpc_exports,
  Web3DeferredPromise,
  ChunkResponseParser,
  Eip1193Provider,
  SocketProvider,
  esm_exports
};
//# sourceMappingURL=chunk-6RYE4U2Z.js.map
