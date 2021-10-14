import { ethers } from 'ethers';
import { _VERSION } from './_version';

const logger = new ethers.utils.Logger(_VERSION);

const networks = [
  {
    name: 'celo',
    chainId: 42220,
  },
  {
    name: 'alfajores',
    chainId: 44787,
  },
  {
    name: 'baklava',
    chainId: 62320,
  },
];

export function getNetwork(
  network?: ethers.providers.Networkish,
): null | ethers.providers.Network {
  {
    if (network == null) {
      return null;
    }

    // Chain ID
    if (typeof network === 'number') {
      const matches = networks.filter((n) => n.chainId === network);
      if (matches.length) {
        return { name: matches[0].name, chainId: matches[0].chainId };
      }

      return {
        name: 'unknown',
        chainId: network,
      };
    }

    // Chain name
    if (typeof network === 'string') {
      const matches = networks.filter((n) => n.name === network);
      if (matches.length) {
        return { name: matches[0].name, chainId: matches[0].chainId };
      }
      return null;
    }

    if (
      typeof network.name === 'string' &&
      typeof network.chainId === 'number'
    ) {
      const byName = getNetwork(network.name);
      const byChainId = getNetwork(network.chainId);

      // Nothing standard; valid custom network
      if (byName == null && byChainId == null) {
        return {
          name: network.name,
          chainId: network.chainId,
        };
      }

      // Make sure if it is a standard chain the parameters match
      if (
        byName &&
        byChainId &&
        byName.name === byChainId.name &&
        byName.chainId === byChainId.chainId
      ) {
        return byName;
      }
    }

    return logger.throwArgumentError(
      'network chainId mismatch',
      'network',
      network,
    );
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
