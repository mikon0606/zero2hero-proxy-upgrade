const { ethers } = require("hardhat")

async function main() {
    const Logic1 = await ethers.getContractFactory("Logic1")
    const logic1 = await Logic1.deploy()
    const logic1Address = logic1.address
    console.log("Logic1 Contract deployed to :", logic1.address)

    const Logic2 = await ethers.getContractFactory("Logic2")
    const logic2 = await Logic2.deploy()
    const logic2Address = logic2.address
    console.log("Logic2 Contract deployed to :", logic2.address)

    const SimpleUpgrade = await ethers.getContractFactory("SimpleUpgrade")
    const simpleUpgrade = await SimpleUpgrade.deploy(logic1Address)
    await simpleUpgrade.deployed()
    console.log("SimpleUpgrade Contract deployed to:", simpleUpgrade.address)

    const [adminSigner] = await ethers.getSigners()

    await simpleUpgrade.connect(adminSigner).foo({
        to: logic1Address,
        data: ethers.utils.id("foo()").slice(0, 10),
    })

    await simpleUpgrade.connect(adminSigner).upgrade(logic2Address)

    await simpleUpgrade.connect(adminSigner).foo({
        to: logic2Address,
        data: ethers.utils.id("foo()").slice(0, 10),
    })
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
