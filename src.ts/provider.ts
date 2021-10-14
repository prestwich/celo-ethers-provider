import { providers, utils } from 'ethers';
import { _VERSION } from './_version';
import { Formatter } from './formatter';
import { getNetwork } from './networks';

const logger = new utils.Logger(_VERSION);

let defaultFormatter: null | Formatter = null;

export class CeloJsonRpcProvider extends providers.JsonRpcProvider {
  static getFormatter(): Formatter {
    console.log('Using mine');
    if (defaultFormatter == null) {
      defaultFormatter = new Formatter();
    }

    return defaultFormatter;
  }

  static getNetwork(networkish: providers.Networkish): providers.Network {
    const network = getNetwork(networkish == null ? 'celo' : networkish);
    if (network == null) {
      return logger.throwError(
        `unknown network: ${JSON.stringify(network)}`,
        utils.Logger.errors.UNSUPPORTED_OPERATION,
        {
          operation: 'getNetwork',
          value: networkish,
        },
      );
    }
    return network;
  }
}

export class CeloWebsocketProvider extends providers.WebSocketProvider {
  static getFormatter(): Formatter {
    console.log('Using mine');
    if (defaultFormatter == null) {
      defaultFormatter = new Formatter();
    }

    return defaultFormatter;
  }

  static getNetwork(networkish: providers.Networkish): providers.Network {
    const network = getNetwork(networkish == null ? 'celo' : networkish);
    if (network == null) {
      return logger.throwError(
        `unknown network: ${JSON.stringify(network)}`,
        utils.Logger.errors.UNSUPPORTED_OPERATION,
        {
          operation: 'getNetwork',
          value: networkish,
        },
      );
    }
    return network;
  }
}

// MIT License

// Copyright (c) 2021 Richard Moore

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
