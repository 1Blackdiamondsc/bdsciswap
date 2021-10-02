// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.6.0;

interface AaveCoreInterface {
    function getReserveATokenAddress(address _reserve) external view returns (address);
}