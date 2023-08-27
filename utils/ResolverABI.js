export const ResolverABI = [
    'function addr(bytes32 node) external view returns (address)',
    'function text(bytes32 node, string calldata key) external view returns (string memory)',
    'function setText(bytes32 node, string calldata key, string calldata value) external'
]