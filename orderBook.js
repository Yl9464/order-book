const existingBook = []
const incomingOrder = []
const updatedBook = [existingBook, incomingOrder]

const reconcileOrder = () => {

}

//When book is empty: 
//Start: empty array, existingBook
//Pass in: seller of 10 BTC at price of 6150
//End: With updatedBook "deeply equaling" the sell type, amount of BTC purchased and the price

//Sell with no buys:
//Start with existingBook containing: Sell, 10 BTC, price 6150 (from the pass in above)
//Pass in: An incomingOrder having a seller of 12 BTC sold at price of 6000
//End With:  updatedBook "deeply equaling" the previous and current sell stats:
//sell, 10, 6150 (1st passed in) & sell, 12, 6000 (2nd passed in)


//different types:
//start with: existingBook having a buyer of 10 BTC at price of 6000
//Pass in: incomingOrder having a seller with 1 2BTC at price of 6150
//End with: updatedBook equaling the buyer and seller attributes:
//Buyer: 10 BTC for 600 & Seller 12 BTC for 6150

//fulfills an order then removes that order when book contatin a dupilcate order of same amount
//start with: existingBook having a buyer of 10 BTC for 6150 and a seller of 12 BTC for 6250
//Pass in: incomdingOrder of a seller with 10 BTC for 6150
//End with: updatedBook equalling a seller of 12 BTC at 6250

//fulfills an order and reduces the matching order when the book contains a matching order of a larger amount
//start with: existingBook having a buyer of 15 BTC at 6150 and a seller of 12 BTC at 6950
//Pass in: incomingOrder of a seller with 10 BTC for 6150



module.exports = reconcileOrder

