const constructor=class{constructor(Provider){this.Provider=Provider;
const abi=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"airdropActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"amountAirdrop","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"amountPresale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"amountSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"_merkles","type":"bytes32[]"},{"internalType":"address","name":"_caller","type":"address"}],"name":"canClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref_address","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"percentRefRewards","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePresale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountAirdrop","type":"uint256"},{"internalType":"uint256","name":"_amountPresale","type":"uint256"},{"internalType":"uint256","name":"_amountSale","type":"uint256"}],"name":"setAirdropSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_newMerkleRoot","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pricePresale","type":"uint256"},{"internalType":"uint256","name":"_priceSale","type":"uint256"},{"internalType":"uint32","name":"_percentRefRewards","type":"uint32"}],"name":"setPriceSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_setActive","type":"bool"}],"name":"setSaleActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const c_address="0xA59af353E423F54D47F2Ce5F85e3e265d95282Cd";this.contract=new Provider.eth.Contract(abi,c_address);}



totalSupply(){return this.contract.methods.totalSupply().call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}}).catch(function(error){return error;});}

balanceOf(address){return this.contract.methods.balanceOf(address).call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}}).catch(function(error){return error;});}

Claimcheck(merkles,account){return this.contract.methods.canClaim(merkles,account).call((err,result)=>{if(err){console.error('Error: ',err);return err;}else{return result;}}).catch(function(error){return error;});}


Claim_check_gas(ref_address,mint_quantity,merkle,account,value){
console.log(mint_quantity);
console.log(value);
	return this.contract.methods.mint(ref_address,mint_quantity,merkle)
  .estimateGas({from:account,value:value})
  .then(function(gasAmount){ return gasAmount;
    }).catch(function(error){
	if(String(error).indexOf("Maximum")!== -1){
  $("#error_modal").modal("show");
  $("#error_text").html("<div style='height:20px;'></div><center><span class='badge bg-danger mt-2 p-2 m-0' style='font-size:1rem;display:block;'>Maximum 500 mints per wallet.</center>");
		} else if(String(error).indexOf("not active")!== -1){
  $("#error_modal").modal("show");
  $("#error_text").html("<div style='height:20px;'></div><center><span class='badge bg-danger mt-2 p-2 m-0' style='font-size:1rem;display:block;'>Mint hasn't started yet.</center>");
		} else {
  $("#error_modal").modal("show");
  $("#error_text").html("<div style='height:20px;'></div><center><span class='badge bg-danger mt-2 p-2 m-0' style='font-size:1rem;display:block;'>Insufficient balance on your wallet.</center>");
	}
  });
}

Claim(ref_address,mint_quantity,merkle,account,value,gasAmount) {
	gasAmount=Math.round(gasAmount*0.9);
	var gasPrice="260000000";
  return this.contract.methods.mint(ref_address,mint_quantity,merkle).send({gasLimit: String(gasAmount),gasPrice: String(gasPrice),from: account,value: value}).once("error", (err) => {
      console.log(err);
    })
    .then((receipt) => {
    return receipt;
  }).catch(function(error){
    return error;
  });
}


}
