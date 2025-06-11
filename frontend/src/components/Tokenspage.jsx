import React from "react";
import { ethers } from "ethers";
import { abi } from '../assets/MyToken.json'

const TokenCreator = () => {
  const handleCreateToken = async () => {
    if (!window.ethereum) {
      alert("MetaMask not found!");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const contract = new ethers.Contract(
      import.meta.env.VITE_CONTRACT_ADDRESS,
      abi,
      signer
    );

    try {
      const recipientAddress = "0xB43eaa51C02bd052e959df6cC8c045575ff52987";  
      const amount = ethers.parseUnits("1000", 18);  

      const tx = await contract.createToken(recipientAddress, amount);
      await tx.wait();
      alert("Token created successfully!");
    } 
    catch (error) {
      console.error(error);
      alert("Error creating token");
    }
  };

  return (
    <div className='flex justify-center'>
      <button onClick={handleCreateToken} className="text-xl p-3  border border-4 border-indigo-900 rounded-md font-semibold text-green-800 text-center mt-[30px] hover:bg-indigo-300">Create Token</button>
    </div>
  );
};

export default TokenCreator;