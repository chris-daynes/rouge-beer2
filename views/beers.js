var html = require('yo-yo')
var Beer = require('./beer')
var callAPI = require('../api')

module.exports = loadBeers

function loadBeers({beers, isLoading, isFilterNZ}, dispatch) {
  var filteredBeers = isFilterNZ
    ? beers.filter(function (beer) {
        return beer.country === 'New Zealand'
    })
    : beers
  var customClass = isLoading ? 'hide': ''
  return html`
    <div class="beer-container">
      <button class=${customClass} onclick=${() => {
        dispatch({type: 'LOADING'})
        callAPI(dispatch)
        }
      }>Refresh</button>
      ${isLoading ? html`<div class ='loading'>Loading...</div>` : ''}
      <div class='side-bar'>
        <button class='nz' onclick = ${() => dispatch({type: 'NZ_BEERS'})}> NZ beers </button>
      </div>
      ${filteredBeers.map(beer => Beer(beer, dispatch))}
    </div>
    `
}

  //
  // <button class='allBeers' onclick = ${() => dispatch({type: 'ALL_BEERS'})}>All Beers </button>
