import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'get_exchange_rate' : ActorMethod<[string], number>,
}
