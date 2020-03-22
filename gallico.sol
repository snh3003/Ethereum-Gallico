pragma solidity ^0.6.0;

contract MyContract{
    
    string name;
    string email;
    string phone;
    string object;
    mapping(address => uint256) buyer;
    address public deployer;
    
    constructor() public {
        deployer = msg.sender;
    }
    
    function buy (string memory _name, string memory _email, string memory _phone, string memory _object, address _payee) public payable {
        uint256 amount = msg.value;
        buyer[_payee] += amount;
        name = _name;
        email = _email;
        phone = _phone;
        object = _object;
    }
    
    function didPay(address payee) public view returns (bool success){
        if(buyer[payee]>0) {
            return true;
        }
    }
}
