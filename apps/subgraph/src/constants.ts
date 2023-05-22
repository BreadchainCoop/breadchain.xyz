import { BigInt, BigDecimal } from "@graphprotocol/graph-ts"

// Constants

export const CONTRACT_ADDRESS = "0x11d9efdf4ab4a3bfabf5c7089f56aa4f059aa14c"

export const DEFAULT_DECIMALS = 18
export const GENESIS_ADDRESS = "0x0000000000000000000000000000000000000000"

export const SECONDS_PER_DAY = 60 * 60 * 24
export const SECONDS_PER_HOUR = 60 * 60

export const BIGINT_ZERO = BigInt.fromI32(0)
export const BIGINT_ONE = BigInt.fromI32(1)
export const BIGINT_TWO = BigInt.fromI32(2)
export const BIGDECIMAL_ZERO = new BigDecimal(BIGINT_ZERO)
export const BIGDECIMAL_ONE = new BigDecimal(BIGINT_ONE)
