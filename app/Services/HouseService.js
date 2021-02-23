import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";

class HouseService{

 
  constructor(){
    console.log("house service");
  }

  createHouse(rawHouse) {
  //  let newCar = new Car(rawCar)
  //  console.log(newCar)
  //  ProxyState.cars = [...ProxyState.cars, newCar]

    let temp = ProxyState.houses
    temp.push(new House(rawHouse))
    ProxyState.houses = temp

  }

  bid(id) {
    let temp = ProxyState.houses
    let house = temp.find(h=> h.id === id)
    house.price += 1000
    ProxyState.houses = temp
  }

  deleteHouse(id) {
    let temp = ProxyState.houses
    let houseIndex = temp.findIndex(h =>  h.id == id)
    temp.splice(houseIndex, 1)
    ProxyState.houses = temp
  }
}

export const houseService = new HouseService()