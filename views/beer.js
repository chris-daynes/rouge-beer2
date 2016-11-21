var html = require('yo-yo')

module.exports = (beer, dispatch) =>
  html `
   <div class ="one-beer">
      <div class="beer-name">
        ${beer.name}
      </div>
      <div>
        ${beer.brewery}
      </div>
      <div>
        ${beer.country}
      </div>
      <div>
        ${beer.style}
      </div>
      <div>
        ${beer.abv}
      </div>
   </div>`
