var html = require('yo-yo')

module.exports = (beer, dispatch) =>
  html `
   <div>
      <div>
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
