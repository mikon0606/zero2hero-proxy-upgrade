// 导入 Hardhat 库
const { ethers } = require("hardhat")

async function main() {
    // 部署逻辑合约
    const Logic1 = await ethers.getContractFactory("Logic1")
    const logic1 = await Logic1.deploy()

    // 等待合约部署完成
    await logic1.deployed()

    // 输出合约地址
    console.log("Logic1 deployed to:", logic1.address)
}

// 执行部署函数
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
