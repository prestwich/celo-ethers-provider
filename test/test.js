const {
  CeloJsonRpcProvider,
  StaticCeloJsonRpcProvider,
  CeloWebsocketProvider,
} = require('../dist');

async function testJsonRpc() {
  const provider = new CeloJsonRpcProvider(
    'https://alfajores-forno.celo-testnet.org',
  );
  const num = await provider.getBlockNumber();
  await provider.getBlock(num);
  console.log('Json RPC Ok');
}

async function testStaticJsonRpc() {
  const provider = new StaticCeloJsonRpcProvider(
    'https://alfajores-forno.celo-testnet.org',
  );
  const num = await provider.getBlockNumber();
  await provider.getBlock(num);
  console.log('Static Json RPC Ok');
}

async function testWsRpc() {
  const provider = new CeloWebsocketProvider(
    'wss://alfajores-forno.celo-testnet.org/ws',
  );
  const num = await provider.getBlockNumber();
  await provider.getBlock(num);
  console.log('Websocket Ok');
}

async function test() {
  await testJsonRpc();
  await testStaticJsonRpc();
  await testWsRpc();
  process.exit();
}

test();
