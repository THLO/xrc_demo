/// This is a simple example showing how to interact with the
/// exchange rate canister (XRC).

import XRC "canister:xrc";
import Cycles "mo:base/ExperimentalCycles";
import Nat32 "mo:base/Nat32";
import Nat64 "mo:base/Nat64";
import Float "mo:base/Float";
import Time "mo:base/Time";
import Dbg "mo:base/Debug";

actor {

  /// Extract the current exchange rate for the given symbol.
  public func get_exchange_rate(symbol : Text) : async Float {

    let request : XRC.GetExchangeRateRequest = {
      base_asset = {
        symbol = symbol;
        class_ = #Cryptocurrency;
      };
      quote_asset = {
        symbol = "USDT";
        class_ = #Cryptocurrency;
      };
      // Get the current rate.
      timestamp = null;
    };

    // Every XRC call needs 10B cycles.
    Cycles.add(10_000_000_000);
    let response = await XRC.get_exchange_rate(request);
    // Print out the response to get a detailed view.
    Dbg.print(debug_show(response));
    // Return 0.0 if there is an error for the sake of simplicity.
    switch(response) {
      case (#Ok(rate_response)) {
        let float_rate = Float.fromInt(Nat64.toNat(rate_response.rate));
        let float_divisor = Float.fromInt(Nat32.toNat(10**rate_response.metadata.decimals));
        return float_rate / float_divisor;
      };
      case _ {
        return 0.0;
      };
    }
  };
};
