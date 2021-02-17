import { ProxyState } from "../AppState.js"
import { houseService } from "../Services/HouseService.js"

  function _draw(){
    let houses = ProxyState.houses
    let template = ""
    houses.forEach(house=> template += house.Template)
    // console.log(template)
    document.getElementById('houses').innerHTML = template
    console.log(ProxyState.houses)
  }

export default class HouseController{
  constructor(){
    console.log("house controller working")
    console.log(ProxyState.houses)
    _draw()
    ProxyState.on("houses", _draw)
  }

  createHouse(event){
    event.preventDefault();
    console.log('creating house yo')
    let form = event.target
    console.log(form)
    let rawHouse = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      year: form.year.value,
      price: parseFloat(form.price.value),
      imgUrl: form.imgUrl.value,
      levels: form.levels.value
    }
    console.log(rawHouse)
    houseService.createHouse(rawHouse)
  }

  bid(id){
    console.log('bidding ' + id)
    houseService.bid(id)
  }

  deleteHouse(id){
    console.log(id)
    houseService.deleteHouse(id)
  }

}