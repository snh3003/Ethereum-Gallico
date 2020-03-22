if (window.ethereum) {
    metamaskWeb3 = new Web3(ethereum);
    try {
      // Request account access if needed
      await ethereum.enable();
    } catch (error) {
      // User denied account access...
    }
  }
  else if (window.web3) {
    metamaskWeb3 = new Web3(web3.currentProvider);
  }
  account = await metamaskWeb3.eth.getAccounts()
  function getGallicoContract() {
  GallicoContract = GallicoContract || new metamaskWeb3.eth.Contract(GallicoABI.abi, GallicoContractAddress)
  return GallicoContract
}
totalPrice = 5;
const prop = await getGallicoContract().methods.buy(name, email, phone, object, account).send({
    from: account[0],
    value: totalPrice,
  })
  alert('YOu already paid for this')

const didPay = await getGallicoContract().methods.didPay(account).send({
    from: account[0],
  })
  alert('Property Booked Successfully')