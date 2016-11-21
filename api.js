var request = require('superagent')

function callAPI(dispatch) {
request
  .get('http://rogue-beers.herokuapp.com/api/v1/beers')
  .end(function (err, res) {
    console.log(res.body)
    if (err) return
    dispatch({type: 'RECEIVE_BEERS', payload: res.body.beers})
  })
}

module.exports = callAPI
