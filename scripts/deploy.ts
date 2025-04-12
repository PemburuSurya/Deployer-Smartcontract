import { ethers } from "hardhat";

async function main() {
  // Compile contract
  const ETHTransfer = await ethers.getContractFactory("ETHTransfer");
  
  // Deploy contract
  const ethTransfer = await ETHTransfer.deploy();
  
  // Tunggu hingga deploy selesai (format untuk ethers v5)
  await ethTransfer.deployed();
  
  console.log(`
    =============================================
    🚀 Contract berhasil dideploy!
    📌 Alamat Contract: ${ethTransfer.address}
    🔗 Explorer: https://swanscan.com/address/${ethTransfer.address}
    =============================================
  `);
}

main().catch((error) => {
  console.error("❌ Gagal deploy:", error);
  process.exitCode = 1;
});