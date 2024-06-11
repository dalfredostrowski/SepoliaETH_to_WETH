require("@nomicfoundation/hardhat-toolbox");

module.exports = {
        networks: {
                sepolia: {
                        url: "https://sepolia.infura.io/v3/16791f3a2d0f4a568461b0c3f287107a"
            ,           chainID:  11155111
            ,           accounts: ['xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx']
                }
,

   },

        solidity: "0.8.18",
};
