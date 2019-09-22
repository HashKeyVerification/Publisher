pragma solidity ^0.5.8;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";

contract MyNFT is ERC721Full {

  struct Structure{
      string name;
      uint id;
  }
  Structure[] public listOfStructure;
  address public owner;
  constructor() public{
      owner = msg.sender;
  }

  //Publisher meta data
  string public publisher;
  string public component;
  string public version;
  //Hash of file and metadata
  string public key;
  string public fileHash;

  function create(string memory _name) public{
      uint id = listOfStructure.length;
      listOfStructure.push(Structure(_name, id));
      _mint(owner, id);
  }

}