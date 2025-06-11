import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TokenModule = buildModule("TokenModule", (m) => {
  const initialSupply = 1000n * 10n ** 18n;

  const token = m.contract("MyToken", [initialSupply]);

  return { token };
});

export default TokenModule;
