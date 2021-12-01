const reconcileOrder = (existingBook, incomingOrder) => {
  const firstOrder = { ...incomingOrder }

  if (existingBook.length === 0) {
    existingBook.push(firstOrder)

    return existingBook
  }
  // looping over book
  let updatedBook = []
  let notUpdated = []

  for (let i = 0; i < existingBook.length; i++) {
    let existingOrder = existingBook[i]

    if (dealOrNoDeal(existingOrder, incomingOrder)) {
      const lowestNum = Math.min(existingOrder.quantity, incomingOrder.quantity)

      existingOrder.quantity = existingOrder.quantity - lowestNum
      incomingOrder.quantity = incomingOrder.quantity - lowestNum


      if (existingOrder.quantity > 0) updatedBook.push(existingOrder)
    }
    else {
      notUpdated.push(existingOrder)
    }
  }

  if (incomingOrder.quantity > 0) updatedBook.push(incomingOrder)

  return [...notUpdated, ...updatedBook]
}

//extra credit if statements in here
const dealOrNoDeal = (existingOrder, incomingOrder) => {
  if (existingOrder.type !== incomingOrder.type && existingOrder.price === incomingOrder.price) {
    return true
  }

  return false
}

module.exports = reconcileOrder
