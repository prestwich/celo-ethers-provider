const { CeloJsonRpcProvider } = require('../dist');

async function doThing() {
  const provider = new CeloJsonRpcProvider('https://forno.celo.org');
  const num = await provider.getBlockNumber();
  await provider.getBlock(num);
  console.log('Ok');
}

doThing();
