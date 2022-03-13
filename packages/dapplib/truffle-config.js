require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name return stereo snow install person equal gesture'; 
let testAccounts = [
"0x3290b017b3598e51d76139aef17f078bb88374c0eba483d54822c21d8aade8e2",
"0xb88be511e251c5b31942cc4f2b099974a6a4a04ba09ab1703f3c481bf7522bd0",
"0x8521071045d7d95649bcc295c4713f0b5b3e5115eac3cb73284a5d7fa5de7ca4",
"0x0ab13a326bbfc54041a92711e6d9d1efc4f7387f0cc0d724629f3bd00f4eccc5",
"0x4406df8a1b474f4bf8efcfbf1fd0f87cb29d1b6cdf81b2623762105a7e9d3ffc",
"0x1c4797574c8d769397adea8bf7ab854b9d3361bb846fdcd1555980c9fe45d8f6",
"0xed0ca02e30b78dcce908031b521c9357a62510864da3d5c3a607659037a50a54",
"0xa84e56af2bfcdb82e29806f3cd75be8d1c5dc7fcd29c0e7866f05413e06672da",
"0x6e588b0677f4976fc8b5a55a7b1200f9ca8d294fcf4b0040af74ab9b5c7f7a29",
"0xcc878dd4f33aa473a6b4d1da0d0ea34be2522106508274ff49f48483b4fa9b6a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


