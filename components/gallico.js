// convert price from ETH to Wei
const weiValue = web3().utils.toWei(this.price, 'ether');

// call utils.postProperty
postProperty(this.title, this.description, weiValue)