import hash from './cyrb53'; 

export function getHashFromUserIds(id1, id2) {
    const h1 = hash(id1);
    const h2 = hash(id2);
    const xor = h1 ^ h2; // equivalent to h2 ^ h1
    return hash(xor.toString());
}