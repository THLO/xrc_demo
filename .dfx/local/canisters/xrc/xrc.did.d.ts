import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Asset { 'class' : AssetClass, 'symbol' : string }
export type AssetClass = { 'Cryptocurrency' : null } |
  { 'FiatCurrency' : null };
export interface ExchangeRate {
  'metadata' : ExchangeRateMetadata,
  'rate' : bigint,
  'timestamp' : bigint,
  'quote_asset' : Asset,
  'base_asset' : Asset,
}
export type ExchangeRateError = { 'CryptoQuoteAssetNotFound' : null } |
  { 'FailedToAcceptCycles' : null } |
  { 'ForexBaseAssetNotFound' : null } |
  { 'CryptoBaseAssetNotFound' : null } |
  { 'StablecoinRateTooFewRates' : null } |
  { 'ForexAssetsNotFound' : null } |
  { 'InconsistentRatesReceived' : null } |
  { 'RateLimited' : null } |
  { 'StablecoinRateZeroRate' : null } |
  { 'Other' : { 'code' : number, 'description' : string } } |
  { 'ForexInvalidTimestamp' : null } |
  { 'NotEnoughCycles' : null } |
  { 'ForexQuoteAssetNotFound' : null } |
  { 'StablecoinRateNotFound' : null };
export interface ExchangeRateMetadata {
  'decimals' : number,
  'quote_asset_num_received_rates' : bigint,
  'base_asset_num_received_rates' : bigint,
  'base_asset_num_queried_sources' : bigint,
  'standard_deviation' : bigint,
  'quote_asset_num_queried_sources' : bigint,
}
export interface GetExchangeRateRequest {
  'timestamp' : [] | [bigint],
  'quote_asset' : Asset,
  'base_asset' : Asset,
}
export type GetExchangeRateResult = { 'Ok' : ExchangeRate } |
  { 'Err' : [] | [ExchangeRateError] };
export interface _SERVICE {
  'get_exchange_rate' : ActorMethod<
    [GetExchangeRateRequest],
    GetExchangeRateResult,
  >,
}
