// import { BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts"
// import { Token, TransferEvent } from "../generated/schema"

// export function handleTransferEvent(
//   token: Token | null,
//   amount: BigInt,
//   source: Bytes,
//   destination: Bytes,
//   event: ethereum.Event
// ): TransferEvent {
//   let transferEvent = new TransferEvent(
//     event.address.toHex() +
//       "-" +
//       event.transaction.hash.toHex() +
//       "-" +
//       event.logIndex.toString()
//   )
//   transferEvent.hash = event.transaction.hash.toHex()
//   transferEvent.logIndex = event.logIndex.toI32()
//   transferEvent.token = event.address.toHex()
//   transferEvent.nonce = event.transaction.nonce.toI32()
//   transferEvent.amount = amount
//   transferEvent.to = destination.toHex()
//   transferEvent.from = source.toHex()
//   transferEvent.blockNumber = event.block.number
//   transferEvent.timestamp = event.block.timestamp

//   transferEvent.save()

//   // Track total token transferred
//   if (token != null) {
//     let FromBalanceToZeroNum = BIGINT_ZERO
//     let balance = getOrCreateAccountBalance(getOrCreateAccount(source), token)
//     if (balance.amount == amount) {
//       // It means the sender's token balance will be 0 after transferal.
//       FromBalanceToZeroNum = BIGINT_ONE
//     }

//     let toAddressIsNewHolderNum = BIGINT_ZERO
//     let toBalanceIsZeroNum = BIGINT_ZERO
//     if (isNewAccount(destination)) {
//       // It means the receiver is a new holder
//       toAddressIsNewHolderNum = BIGINT_ONE
//     } else {
//       balance = getOrCreateAccountBalance(
//         getOrCreateAccount(destination),
//         token
//       )
//       if (balance.amount == BIGINT_ONE) {
//         // It means the receiver's token balance is 0 before transferal.
//         toBalanceIsZeroNum = BIGINT_ONE
//       }
//     }

//     token.currentHolderCount = token.currentHolderCount
//       .minus(FromBalanceToZeroNum)
//       .plus(toAddressIsNewHolderNum)
//       .plus(toBalanceIsZeroNum)
//     token.cumulativeHolderCount = token.cumulativeHolderCount.plus(
//       toAddressIsNewHolderNum
//     )
//     token.transferCount = token.transferCount.plus(BIGINT_ONE)

//     let dailySnapshot = getOrCreateTokenDailySnapshot(token, event.block)
//     dailySnapshot.currentHolderCount = dailySnapshot.currentHolderCount
//       .minus(FromBalanceToZeroNum)
//       .plus(toAddressIsNewHolderNum)
//       .plus(toBalanceIsZeroNum)
//     dailySnapshot.cumulativeHolderCount = dailySnapshot.cumulativeHolderCount.plus(
//       toAddressIsNewHolderNum
//     )
//     dailySnapshot.dailyEventCount += 1
//     dailySnapshot.dailyTransferCount += 1
//     dailySnapshot.dailyTransferAmount = dailySnapshot.dailyTransferAmount.plus(
//       amount
//     )
//     dailySnapshot.blockNumber = event.block.number
//     dailySnapshot.timestamp = event.block.timestamp

//     let hourlySnapshot = getOrCreateTokenHourlySnapshot(token, event.block)
//     hourlySnapshot.currentHolderCount = hourlySnapshot.currentHolderCount
//       .minus(FromBalanceToZeroNum)
//       .plus(toAddressIsNewHolderNum)
//       .plus(toBalanceIsZeroNum)
//     hourlySnapshot.cumulativeHolderCount = hourlySnapshot.cumulativeHolderCount.plus(
//       toAddressIsNewHolderNum
//     )
//     hourlySnapshot.hourlyEventCount += 1
//     hourlySnapshot.hourlyTransferCount += 1
//     hourlySnapshot.hourlyTransferAmount = hourlySnapshot.hourlyTransferAmount.plus(
//       amount
//     )
//     hourlySnapshot.blockNumber = event.block.number
//     hourlySnapshot.timestamp = event.block.timestamp

//     token.save()
//     dailySnapshot.save()
//     hourlySnapshot.save()
//   }

//   return transferEvent
// }
