var html = require('yo-yo')
var Beer = require('./beer')
var callAPI = require('../api')

module.exports = ({beers}, dispatch) =>
  html`
    <div id="beer-container">
      <button onclick=${() => callAPI(dispatch)}>Refresh </button>
      ${beers.map(beer => Beer(beer, dispatch))}
    </div>
  `
