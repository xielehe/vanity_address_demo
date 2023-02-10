const rlp = require('rlp')
const keccak = require('keccak');
const ethWallet = require('ethereumjs-wallet').default;

(function main(str) {
  const nonce = 0x00
  let lastStr, address, key, constract_addr

  while (lastStr !== str) {
    const wallet = ethWallet.generate()
    key = (wallet.getPrivateKeyString())
    address = (wallet.getAddressString())
    const input_arr = [address, nonce]
    constract_addr = keccak('keccak256')
      .update(rlp.encode(input_arr))
      .digest('hex')
      .substring(24)

    lastStr = constract_addr.slice(-(str.length))
  }
  console.log({ key, address, constract_addr });

})('88')