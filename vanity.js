const ethWallet = require('ethereumjs-wallet').default;

(function main(str) {
  let lastStr, address, key
  while (lastStr !== str) {
    const wallet = ethWallet.generate()
    address = (wallet.getAddressString())
    key = (wallet.getPrivateKeyString())
    lastStr = address.slice(-(str.length))
  }
  console.log({ address, key });

})('8888')