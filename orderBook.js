
// existingBook = ['type', 'quantity', 'price']
// incomingOrder =  ['type', 'quantity', 'price']

// type= ['sell', 'buy']
// quantity= [5, 10, 12, 15, 25]
// price = [5900, 5950, 6000, 6150, 6250, 6950]

// updatedBook === ['existingBook', 'incomingOrder']
// return the updatedBook


const reconcileOrder = (existingBook) => {
// let existingBook = ['type', 'quantity', 'price']
  let updatedBook = []

  for (let i = 0; i < existingBook.length; i++) {
    if (updatedBook.indexOf(existingBook[1] < 0)) updatedBook.push(existingBook[i])
  }

  return updatedBook
}


module.exports = reconcileOrder
