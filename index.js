import {ethers} from 'ethers';
import deploy from './deploy';
import addContract from './addContract';
import "./index.scss";

let contracts = 0;
async function newContract() {
  const beneficiary = document.getElementById("beneficiary").value;
  const arbiter = document.getElementById("arbiter").value;
  console.log(document.getElementById("ether").value)
  const ether = ethers.utils.parseEther(document.getElementById("ether").value,"ether");
  const contract = await deploy (arbiter, beneficiary, ether);

  console.log(ether);

  addContract(++contracts, contract, arbiter, beneficiary, ether);
}

document.getElementById("deploy").addEventListener("click", newContract);
