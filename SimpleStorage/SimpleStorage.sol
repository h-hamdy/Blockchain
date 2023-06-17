// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract SimpleStorage {
    uint256 public favoritNumber;

    struct People {
        uint256 favoritNumber;
        string  name;
    }

    People[] public people;
    mapping(string => uint256) public nameToFavoriteNumber;

    function store(uint256 _favoriteNumber) public {
        favoritNumber = _favoriteNumber;
    }

    function retrieve () public view returns (uint256) {
        return (favoritNumber);
    }

    function addPerson (string memory _name, uint256 _favoriteNumber) public {
        people.push(People({favoritNumber: _favoriteNumber, name: _name}));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}