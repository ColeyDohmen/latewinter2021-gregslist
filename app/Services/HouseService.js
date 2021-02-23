import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "./AxiosService.js";

class HouseService{

 
  constructor(){
    console.log("house service");
    this.getHouses();
  }


  async getHouses(){
    try{
      const res = await api.get('houses')
      ProxyState.houses = res.data.map(rawHouseData => new House(rawHouseData))
    } catch (error){
      console.error(error)
    }
  }
  async createHouse(rawHouse) {

    try {
      await api.post('houses',rawHouse)
      this.getHouses()
    }
    catch (error){
      console.error(error)
    }

    // let temp = ProxyState.houses
    // temp.push(new House(rawHouse))
    // ProxyState.houses = temp

  }

  async bid(id) {
    let house = ProxyState.houses.find(h=> h.id === id)
    house.price += 1000
    try {
      const res = await api.put('houses/'+id, house)
      ProxyState.houses = ProxyState.houses
    }
    catch(error){
      console.error(error)
    }
  }

  async deleteHouse(id) {
    try{
      const res = await api.delete(`houses/${id}`)
      this.getHouses()
    }
    catch (error){
      console.error(error)
    }
    // let temp = ProxyState.houses
    // let houseIndex = temp.findIndex(h =>  h.id == id)
    // temp.splice(houseIndex, 1)
    // ProxyState.houses = temp
  }
}

export const houseService = new HouseService()