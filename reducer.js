var clone = require('clone')

module.exports = function reducer (state, action) {
  var newState = clone(state)
  switch (action.type) {
    case 'RECEIVE_BEERS':
      newState.beers = action.payload
      console.log('getting the beers', newState)
      newState.isLoading = false
      return newState
    case 'LOADING':
      newState.isLoading = true
      return newState
    case 'NZ_BEERS':
      newState.isFilterNZ = !newState.isFilterNZ 
      return newState
    case 'ALL_BEERS':
      return newState
    default:
      return newState
  }
}


// function nzBeer(beer) {
//   if(beer.country === 'New Zealand'){
//     return beer
//   }
// }

// newState.beers = newState.beers.filter(nzBeer)
// console.log('this is the newState ', newState);
// return newState
