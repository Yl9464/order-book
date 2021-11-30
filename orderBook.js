const reconcileOrder = (existingBook, incomingOrder, updatedBook) => {
  const orderOne = firstOrder(existingBook, incomingOrder, updatedBook)

  console.log(orderOne)
}

const firstOrder = (existingBook, incomingOrder, updatedBook) => {
  const orderOne = { ...incomingOrder }
  console.log(orderOne)

}

module.exports = reconcileOrder
