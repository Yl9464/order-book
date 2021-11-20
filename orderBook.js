

const reconcileOrder = (existingBook, incomingOrder) => {
  if (existingBook.length < 1) existingBook.push(incomingOrder)

  let type = ['sell', 'buy']
  let quantity = [5, 10, 12, 15, 25]
  let price = [5900, 5950, 6000, 6150, 6250, 6950]
  const updatedBook = [existingBook, incomingOrder]

  if (incomingOrder.type === type[0]) {
    type = 'sell'
  }

  if (incomingOrder.quantity === quantity[1]) {
    quantity = 10
  }

  if (incomingOrder.price === price[3]) {
    price = 6150
  }

  return updatedBook
}

module.exports = reconcileOrder
