import { assert } from "chai";
import { ethers } from "hardhat";
import { SimpleStorage } from "../typechain-types";
describe("s2", () => {
  let simpleStorageFactory;
  let simpleStorage: SimpleStorage;

  beforeEach(async () => {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("should start with 0", async () => {
    const currentValue = await simpleStorage.retrieve();
    assert.equal(currentValue.toString(), "0");
  });
  it("should update when we call store", async () => {
    const expectedValue = "7";
    const trxResponse = await simpleStorage.store(expectedValue);
    await trxResponse.wait(1);
    const currentValue = await simpleStorage.retrieve();

    assert.equal(currentValue.toString(), expectedValue);
  });
  it("should add a people", async () => {
    const name = "dima";
    const expectedValue = "42";
    const trxResponse = await simpleStorage.addPerson(name, "42");
    await trxResponse.wait(1);
    const currentValue = await simpleStorage.nameToFavoriteNumber(name);
    assert.equal(currentValue.toString(), expectedValue);
  });
});
