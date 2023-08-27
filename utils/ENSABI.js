export const ABI = [
    'function rentPrice(string memory name, uint duration) view public returns(uint)',
    'function available(string memory name) public view returns(bool)',
    'function makeCommitmentWithConfig(string memory name, address owner, bytes32 secret, address resolver, address addr) pure public returns(bytes32)',
    'function commit(bytes32 commitment) public',
    'function registerWithConfig(string memory name, address owner, uint duration, bytes32 secret, address resolver, address addr) public payable',
    'function minCommitmentAge() public view returns(uint)',
    'function renew(string memory name, uint duration) external returns(uint)'
]

