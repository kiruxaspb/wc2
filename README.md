# Create wallet

## Requirements

1. Node.js version 18 or higher
2. Rust version 1.88.0 (or latest)

## Install Rust

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

#### Check installation
```bash
rustc --version
```

## Install Node.js
```
https://nodejs.org/en/download
```

#### Git clone this repo and install dependencies
```bash
npm install
```

#### Run script for create private key and address
```bash
npx ts-node wallet.ts
```

```
=== WALLET DETAILS ===
Address: 1111wzXLjCy4fCGwj3uQazjrN6ZjWrsvSaZmKr2mKnMSEapVj4SgP
Private Key: c826a0e544dcb8f1359d0831ba65bc8bd98add1ca32e7b4834a733c315116004
Hash: 396962
======================
```

## Download and install node_cli
#### In other directory clone repo
```bash
git clone https://github.com/F1R3FLY-io/f1r3fly.git
```

#### Switch branch
```bash
git checkout preston/rholang_rust
```


#### Go to cli directory
```bash
cd node_cli
```

#### Build cli
```bash
cargo build --release
```

#### Generate public key by private key
```bash
cargo run -- generate-public-key -p c106c7a68caa507657b04141e7cdf084fc09c4018b0fcbe0120e7be82a034a59
```
```
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.32s
     Running `target/debug/node_cli generate-public-key -p c106c7a68caa507657b04141e7cdf084fc09c4018b0fcbe0120e7be82a034a59`
Public key (uncompressed): 04050a8b05c9c6155f5faf5cec998ebb7ac60c9b1e73599d01b2abe63773f75e43f877c34d5b4f6f434f9d15838bc2edfc876e42dcd8b2b676c17f6fb8ed8f4fe6
```
or
```bash
./target/release/node_cli generate-public-key -p c106c7a68caa507657b04141e7cdf084fc09c4018b0fcbe0120e7be82a034a59
```
```
Public key (uncompressed): 04050a8b05c9c6155f5faf5cec998ebb7ac60c9b1e73599d01b2abe63773f75e43f877c34d5b4f6f434f9d15838bc2edfc876e42dcd8b2b676c17f6fb8ed8f4fe6
```


#### You have successfully generated all keys:

Address: `1111wzXLjCy4fCGwj3uQazjrN6ZjWrsvSaZmKr2mKnMSEapVj4SgP`

Private Key: `c826a0e544dcb8f1359d0831ba65bc8bd98add1ca32e7b4834a733c315116004`

Public key: `04050a8b05c9c6155f5faf5cec998ebb7ac60c9b1e73599d01b2abe63773f75e43f877c34d5b4f6f434f9d15838bc2edfc876e42dcd8b2b676c17f6fb8ed8f4fe6`
