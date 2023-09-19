# Exchange Rate Canister

This sample code illustrates how to interact with the
[exchange rate canister](https://forum.dfinity.org/t/new-exchange-rate-mechanism/14543)
on the [Internet Computer](https://internetcomputer.org/).

## Installation

Note that [dfx](https://github.com/dfinity/sdk) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) need to be installed first.

Clone the repository, get the node dependencies, and build the canisters.

```bash
git clone git@github.com:THLO/xrc_demo.git
cd xrc_demo/
npm install
dfx build --network ic
```

## Deployment

If you want to test the demo locally, you can use the following commands:

```bash
# Starts the replica, running in the background.
dfx start --background

# Deploys the canisters to the replica and generates the candid interface.
dfx deploy
```

Note that the replica is defined as running as part of a system subnet in `dfx.json`, which is required because the exchange rate canister itself must run on a system subnet as it does not attach cycles to HTTPS outcalls.

Open the link for the `xrc_demo` to get to the Candid interface.
