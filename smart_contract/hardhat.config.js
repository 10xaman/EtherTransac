//https://eth-ropsten.alchemyapi.io/v2/hB5i-OY2SOZ3j-HTAvYzAWCzlW5UQ96q
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/hB5i-OY2SOZ3j-HTAvYzAWCzlW5UQ96q',
      accounts: ['40e46a956f28292f0b26b03fbe9c5ec66e17a2eda6585ef69bfe0a9621dc1b59'],
    },
  },
};