var redux = require('redux')
var h = require('hyperscript')
var morphdom = require('morphdom')
var html = require('yo-yo')
var reducer = require('./reducer')
var request = require('superagent')

var beersTemplate = require('./views/beers')

var main = document.querySelector('main')
var app = document.createElement('div')
main.appendChild(app)

// var initialState = {
//   "beers": [
//   {
//   "name":"The Beast",
//   "brewery":"Te Aro Brewing Company",
//   "country":"New Zealand",
//   "style":"Pinot Barrel Aged Russian Imperial Stout",
//   "abv":"11.7%"
//   }, {
//   "name":"Brewdog Black Hammer",
//   "brewery":"BrewDog Brewery",
//   "country":"Scotland",
//   "style":"Black IPA",
//   "abv":"7.2%"
//   }]
// }

var initialState = { beers: [] }

var store = redux.createStore(reducer, initialState)
const dispatch = store.dispatch

const updateView = () => {
  const state = store.getState()
  const newView = beersTemplate(state, dispatch)
  morphdom(view, newView)
}
const view = beersTemplate(initialState, dispatch)

document.body.appendChild(view)

store.subscribe(updateView)


function callAPI(state, dispatch) {
request
  .get('http://rogue-beers.herokuapp.com/api/v1/beers')
  .end(function (err, res) {
    console.log(res.body)
    if (err) return
    dispatch({type: 'RECEIVE_BEERS', payload: res.body.beers})
  })
}
