const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// For addresses, see https://docs.story.foundation/developers/deployed-smart-contracts
const AENEID_TESTNET_CONFIG = {
  IP_ASSET_REGISTRY: "0x77319B4031e6eF1250907aa00018B8B1c67a244b",
  LICENSING_MODULE: "0x04fbd8a2e56dd85CFD5500A4A4DfA955B9f1dE6f",
  PIL_TEMPLATE: "0x2E896b0b2Fdb7457499B56AAaA4AE55BCB4Cd316",
  ROYALTY_POLICY_LAP: "0xBe54FB168b3c982b7AaE60dB6CF75Bd8447b390E",
  WIP: "0x1514000000000000000000000000000000000000",
};

module.exports = buildModule("IPAssetManagerModule", (m) => {
  const {
    IP_ASSET_REGISTRY,
    LICENSING_MODULE,
    PIL_TEMPLATE,
    ROYALTY_POLICY_LAP,
    WIP,
  } = AENEID_TESTNET_CONFIG;

  const ipAssetManager = m.contract("IPAssetManager", [
    IP_ASSET_REGISTRY,
    LICENSING_MODULE,
    PIL_TEMPLATE,
    ROYALTY_POLICY_LAP,
    WIP,
  ]);

  return { ipAssetManager };
});
