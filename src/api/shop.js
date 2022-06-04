/**
 * Mocking client-server processing
 */
const _products = [
  { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2 },
  { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
  { 'id': 3, 'title': 'Charli XCX - Sucker CD 1', 'price': 19.99, 'inventory': 5 },
  { 'id': 4, 'title': 'Charli XCX - Sucker CD 2', 'price': 19.99, 'inventory': 7 },
  { 'id': 5, 'title': 'Charli XCX - Sucker CD 3', 'price': 19.99, 'inventory': 8 },
  { 'id': 6, 'title': 'Charli XCX - Sucker CD 4','price': 19.99, 'inventory': 1 },
  { 'id': 7, 'title': 'Charli XCX - Sucker CD 5', 'price': 19.99, 'inventory': 3 },
  { 'id': 8, 'title': 'Charli XCX - Sucker CD 6','price': 19.99, 'inventory': 4 },
]

export default {async getProducts () {
    await wait(100)
    return _products
  },

  async buyProducts () {
    await wait(100)
    if (
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.webdriver)
    ) {
      return
    } else {
      throw new Error('Checkout error')
    }
  }
}

function wait (ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
