const reconcileOrder = (existingBook, incomingOrder, updatedBook) => {
  const startBook = startingOrder(existingBook, incomingOrder, updatedBook)

  console.log(startBook)
}

const startingOrder = (existingBook, incomingOrder, updatedBook) => {
  const firstOrder = { ...incomingOrder }

  if (existingBook.length === 0) {
    return updatedBook = firstOrder
  }

  return updatedBook
}

module.exports = reconcileOrder
