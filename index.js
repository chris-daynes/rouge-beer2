var redux = require('redux')
var h = require('hyperscript')
var morphdom = require('morphdom')
var html = require('yo-yo')
var reducer = require('./reducer')
var request = require('superagent')

var beersTemplate = require('./views/beers')

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

var initialState = { beers: [], isFilterNZ: false, isLoading: false }

var store = redux.createStore(reducer, initialState)
const {dispatch, subscribe, getState} = store

var main = document.querySelector('main')
var app = document.createElement('div')
main.appendChild(app)

subscribe(() => {
  const state = getState()
  html.update(app, beersTemplate(state, dispatch))
})

dispatch({type: 'INIT'})
