// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract Logic1 {
    address public implementation;
    address public admin;
    string public words;

    function foo() public {
        words = "old";
    }
}
