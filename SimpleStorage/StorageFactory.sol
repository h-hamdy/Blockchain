// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "./SimpleStorage.sol";

contract StorageFactory is SimpleStorage {
    SimpleStorage[] public SimpleStorageArray;

    function CreateSimpleStorageContract () public {
        SimpleStorage simpleStorage = new SimpleStorage();
        SimpleStorageArray.push(simpleStorage);
    }

    function sfStore (uint256 _simpleStorageIndex, uint256 _favoriteStorageNumber) public {
        SimpleStorage(address(SimpleStorageArray[_simpleStorageIndex])).store(_favoriteStorageNumber);
    }

    function sfGet(uint256 _simpleStorageIndex) public view returns (uint256) {
        return SimpleStorageArray[_simpleStorageIndex].retrieve();
    }
}