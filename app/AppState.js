import Car from "./Models/Car.js"
import Job from "./Models/Job.js"
import House from "./Models/House.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  //NOTE adding a type to your collections with jsdocs gives additional intellisense when referencing that collection.
  /**@type {Car[]} */
  cars = []
  // cars = [new Car({make: "Jeep", model: "Wrangler", price: 20, imgUrl: 'http://images.thetruthaboutcars.com/2011/11/Wrangler-front-quarter.jpg', year: 2012, description: "Its nice", miles: 75000}), new Car({make: "Jeep", model: "Rango", price: 1500, imgUrl: 'http://images.thetruthaboutcars.com/2011/11/Wrangler-front-quarter.jpg', year: 2012, description: "Its very nice", miles: 5000})]

  /**@type {House[]} */
  houses = []
  // houses = [new House ({bedrooms: 6, bathrooms: 2, levels: 2, imgUrl:`https://i.pinimg.com/originals/9b/cf/80/9bcf80905381b887e41fa445761bc634.jpg`, year:1998, price:10}), new House ({bedrooms: 1, bathrooms: 1, levels: 1, imgUrl:`https://img.buzzfeed.com/buzzfeed-static/static/2019-10/2/19/asset/05bac3b2732a/sub-buzz-461-1570045127-1.png?crop=667%3A667%3B97%2C0&resize=720%3A720`, year:2000, price:8000000})]

  /**@type {Job[]} */
  jobs = []
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
