import {generateId} from "../Utils/GenerateId.js"

export default class House{
constructor({bedrooms, bathrooms, levels, imgUrl, year, price}){
  this.bedrooms = bedrooms
  this.bathrooms = bathrooms
  this.levels = levels
  this.imgUrl = imgUrl
  this.year = year
  this.price = price
  this.id = generateId()
}

get Template(){
  return /*html*/`<div class="card col-2">
  <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.houseController.deleteHouse('${this.id}')" aria-hidden="true"></i>
  <img class="card-img-top" src="${this.imgUrl}" alt="">
  <div class="card-body">
      <h4 class="card-title">${this.bedrooms} bedroom - ${this.bathrooms} bath</h4>
      <p class="card-text">Year: ${this.year}</p>
      <p>Levels : ${this.levels}</p>
      <p>Price: ${this.price}</p>
      <button class="btn btn-success" onclick="app.houseController.bid('${this.id}')">Bid</button>
  </div>
</div>`
}

}
