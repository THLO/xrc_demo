# Exchange Rate Canister

This sample code illustrates how to interact with the
[exchange rate canister](https://forum.dfinity.org/t/new-exchange-rate-mechanism/14543)
on the [Internet Computer](https://internetcomputer.org/).

## Installation

Note that [dfx](https://github.com/dfinity/sdk) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) need to be installed first.

Clone the repository, get the node dependencies, and build the canisters.

```bash
it clone git@github.com:THLO/xrc_demo.git
cd xrc_demo/
npm install
dfx build
```

## Deployment

If you want to test the demo locally, you can use the following commands:

```bash
# Starts the replica, running in the background.
dfx start --background

# Deploys the canisters to the replica and generates the candid interface.
dfx deploy --with-cycles 10000000000000
```

Note that the `--with-cycles` parameter is required because must be sent with
every message to the exchange rate canister.

Open the link for the `xrc_demo_backend` to get to the Candid interface.
