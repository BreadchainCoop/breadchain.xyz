import { ByteArray, Bytes } from "@graphprotocol/graph-ts/common/collections"
import {
  Approval as ApprovalEvent,
  Burned as BurnedEvent,
  ClaimedRewards as ClaimedRewardsEvent,
  ClaimedYield as ClaimedYieldEvent,
  Contract,
  Minted as MintedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent
} from "../generated/Contract/Contract"
import {
  Approval,
  Burned,
  ClaimedRewards,
  ClaimedYield,
  Minted,
  OwnershipTransferred,
  Transfer,
  Token,
  Account,
  AccountBalance
} from "../generated/schema"
import {
  BIGINT_ZERO,
  CONTRACT_ADDRESS,
  DEFAULT_DECIMALS,
  GENESIS_ADDRESS
} from "./constants"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { 
  // getOrCreateAccount,
   getOrCreateAccountBalance } from "./account"

export function handleApproval(event: ApprovalEvent): void {
  let approval = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  approval.owner = event.params.owner
  approval.spender = event.params.spender
  approval.value = event.params.value

  approval.blockNumber = event.block.number
  approval.blockTimestamp = event.block.timestamp
  approval.transactionHash = event.transaction.hash

  approval.save()
}

export function handleBurned(event: BurnedEvent): void {
  let burned = new Burned(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  burned.receiver = event.params.receiver
  burned.amount = event.params.amount

  burned.blockNumber = event.block.number
  burned.blockTimestamp = event.block.timestamp
  burned.transactionHash = event.transaction.hash

  burned.save()
}

export function handleClaimedRewards(event: ClaimedRewardsEvent): void {
  let entity = new ClaimedRewards(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.rewardsList = event.params.rewardsList.map<Bytes>(reward =>
    Bytes.fromHexString(reward.toHexString())
  )

  entity.claimedAmounts = event.params.claimedAmounts

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimedYield(event: ClaimedYieldEvent): void {
  let entity = new ClaimedYield(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinted(event: MintedEvent): void {
  let minted = new Minted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  minted.receiver = event.params.receiver
  minted.amount = event.params.amount

  minted.blockNumber = event.block.number
  minted.blockTimestamp = event.block.timestamp
  minted.transactionHash = event.transaction.hash

  // token.save()
  minted.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

function getOrCreateToken(tokenAddress: Address): Token {
  let token = Token.load(tokenAddress.toHexString())

  if (token != null) {
    return token
  }

  if (tokenAddress.toHexString() != CONTRACT_ADDRESS) {
    throw new Error(`${tokenAddress} no same as ${CONTRACT_ADDRESS}   !!!`)
  }

  token = new Token(tokenAddress.toHexString())

  token.minted = BigInt.fromI32(0)
  token.burned = BigInt.fromI32(0)
  token.supply = BigInt.fromI32(0)
  token.transfers = BigInt.fromI32(0)

  return token
}

function getOrCreateAccount(accountAddress: Address): Account {
  let account = Account.load(accountAddress.toHexString())

  if (account != null) {
    return account
  }

  account = new Account(accountAddress.toHexString())

  return account
}

export function handleTransfer(event: TransferEvent): void {
  let transfer = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  transfer.from = event.params.from
  transfer.to = event.params.to
  transfer.value = event.params.value

  transfer.blockNumber = event.block.number
  transfer.blockTimestamp = event.block.timestamp
  transfer.transactionHash = event.transaction.hash

  transfer.save()


  let token = getOrCreateToken(event.address)

  let amount = event.params.value
  if (amount == BIGINT_ZERO) {
    return
  }

  // token.transfers = token.transfers.plus(BigInt.fromI32(1))

  const toAddress = event.params.to.toHexString()
  const fromAddress = event.params.from.toHexString()

  let isBurn = toAddress == GENESIS_ADDRESS
  let isMint = fromAddress == GENESIS_ADDRESS
  let isTransfer = !isBurn && !isMint

  let toAccount = getOrCreateAccount(event.params.to)
  let fromAccount = getOrCreateAccount(event.params.from)

  if (isMint) {
    token.minted = token.minted.plus(BigInt.fromI32(1))
    let fromBalance = increaseAccountBalance(fromAccount, token, amount)
    fromBalance.blockNumber = event.block.number
    fromBalance.timestamp = event.block.timestamp
    // INCREASE token supply
    token.supply = token.supply.plus(amount)
    
    fromBalance.save()
    fromAccount.save()
    token.save()
  }
  if (isBurn) {
    token.burned = token.burned.plus(BigInt.fromI32(1))
    let fromBalance = decreaseAccountBalance(fromAccount, token, amount)
    fromBalance.blockNumber = event.block.number
    fromBalance.timestamp = event.block.timestamp
    // DECREASE token supply
    token.supply = token.supply.minus(amount)

    fromBalance.save()
    fromAccount.save()
    token.save()
  }
  if (isTransfer) {
    token.transfers = token.transfers.plus(BigInt.fromI32(1))
    let fromBalance = decreaseAccountBalance(fromAccount, token, amount)
    let toBalance = increaseAccountBalance(toAccount, token, amount)
    toBalance.blockNumber = event.block.number
    toBalance.timestamp = event.block.timestamp
    fromBalance.blockNumber = event.block.number
    fromBalance.timestamp = event.block.timestamp

    fromAccount.save()
    fromBalance.save()
    toBalance.save()
    toAccount.save()
    token.save()
  }

  // // let isEventProcessed = false

  // if (isBurn) {
  //   token.burned = token.burned.plus(new BigInt(1))
  // } else if (isMint) {
  //   token.minted = token.minted.plus(new BigInt(1))
  // } else {
  //   // In this case, it will be a normal transfer event.
  //   token.transfers = token.transfers.plus(new BigInt(1))
  // }

  // }

  
}

export function increaseAccountBalance(
  account: Account,
  token: Token,
  amount: BigInt
): AccountBalance {
  let balance = getOrCreateAccountBalance(account, token)
  balance.amount = balance.amount.plus(amount)

  return balance
}

export function decreaseAccountBalance(
  account: Account,
  token: Token,
  amount: BigInt
): AccountBalance {
  let balance = getOrCreateAccountBalance(account, token)
  balance.amount = balance.amount.minus(amount)
  if (balance.amount < BIGINT_ZERO) {
    balance.amount = BIGINT_ZERO
  }

  return balance
}
