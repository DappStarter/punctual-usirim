require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remind purpose harvest nation forget gesture'; 
let testAccounts = [
"0x5a4e3162a978c1f48e9219b4c7addc352e24a566733af8f0aaab1ae455a85ad5",
"0xcb1a081f4dea5ad4586bc1884321b6bf2bf6afe0be8b176d5380a2a717b6c0c1",
"0x2922413f4320c90f8e57802f164d84848a1192da8a7909a7addfed92db8eddd2",
"0xb59b2b311f36645515600a8734f711810ee93da5294d16828781ce21cd9de1cc",
"0x6bea2c6ee683ea3729bd1160dda1275e74ad5ef818a3702d749b94e17bdec234",
"0xd63e2d80c6470769b0dab48a2ea99bdd40a2208bf410dd65629440ae6a3a5e98",
"0x90100244b9ebd6506fcaa7230521f9ba041c2ef6318b6b302f37e69d9f646058",
"0xcf07916ea0448daa64e0d8b52b32e548e0611ac3a7a50277b5c2dd84b5f060c2",
"0xa2fdb51f31a662be8613a3b71ed36937c8768711314d52ecfde3b1f310450fde",
"0xdcd144bfcb00e46a1028cce1619adb534a22a1b176240e48557052992b2877fd"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
