

const reconcileOrder = (existingBook, incomingOrder) => {
  let type = ['sell', 'buy']
  let updatedBook = [existingBook, incomingOrder]

  if (existingBook.length < 1) {
    incomingOrder.push(existingBook)
  }
  if (incomingOrder === type) {
    type = 'sell'
    updatedBook.push(incomingOrder)
  }

  else {
    return updatedBook
  }
}



module.exports = reconcileOrder
