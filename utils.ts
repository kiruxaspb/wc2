import { secp256k1 } from "@noble/curves/secp256k1";
import { base16, base58 } from "@scure/base";
import { blake2bHex } from "blakejs";
import { keccak256 } from "js-sha3";
import { sha256 } from "js-sha256";

export const TOKENS = {
  firecap: {
    id: "000000",
    version: "00",
  },
};

interface Wallet {
  address: string;
  key: Uint8Array;
  hash: number;
}

export function hashAddress(address: string): number {
  const hash = sha256(address).slice(0, 12);
  const number = parseInt(hash, 16);
  return (number % 1000000) + 1;
}

export function generateKeyAndAddress(): Wallet {
  const privateKey = secp256k1.utils.randomPrivateKey();
  const publicKey = secp256k1.getPublicKey(privateKey, false);
  const publicKeyHash = keccak256(publicKey.slice(1)).slice(-40).toUpperCase();
  const ethHash = keccak256(base16.decode(publicKeyHash)).toUpperCase();
  const token = TOKENS.firecap.id;
  const version = TOKENS.firecap.version;
  const payload = `${token}${version}${ethHash}`;
  const payloadBytes = base16.decode(payload);
  const checksum = blake2bHex(payloadBytes, undefined, 32)
    .slice(0, 8)
    .toUpperCase();
  const revAddress = base58.encode(base16.decode(payload + checksum));
  return {
    address: revAddress,
    key: privateKey,
    hash: hashAddress(revAddress),
  };
}

export function printWallet(wallet: Wallet): void {
  console.log("=== WALLET DETAILS ===");
  console.log("Address:", wallet.address);
  console.log("Private Key:", base16.encode(wallet.key).toLowerCase());
  console.log("Hash:", wallet.hash);
  console.log("======================");
}

export function generateAndPrintWallet(): Wallet {
  const wallet = generateKeyAndAddress();
  printWallet(wallet);
  return wallet;
}

export function createWallet(): Wallet {
  const wallet = generateKeyAndAddress();
  console.log("Generated wallet:", {
    address: wallet.address,
    hash: wallet.hash,
    privateKey: base16.encode(wallet.key).toLowerCase(),
  });
  return wallet;
}

export { Wallet };
