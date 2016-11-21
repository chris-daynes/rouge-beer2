var clone = require('clone')

module.exports = function reducer (state, action) {
  var newState = clone(state)
  switch (action.type) {
    case 'RECEIVE_BEERS':
      newState.beers = action.payload
      console.log('getting the beers', newState)
      return newState
    default:
      return newState
  }

}
