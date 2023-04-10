// 导入 Hardhat 库
const { ethers } = require("hardhat")

async function main() {
    // 部署逻辑合约
    const Logic2 = await ethers.getContractFactory("Logic2")
    const logic2 = await Logic2.deploy()

    // 等待合约部署完成
    await logic2.deployed()

    // 输出合约地址
    console.log("Logic2 deployed to:", logic2.address)
}

// 执行部署函数
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
