

export default class Job{
constructor({company, jobTitle, imgUrl, hours, rate, description, _id, id}){
  this.company = company
  this.jobTitle = jobTitle
    this.imgUrl = imgUrl
  this.hours = hours
  this.rate = rate
  this.description = description
  this.id = _id || id
}

get Template(){
  return /*html*/`<div class="card col-2">
  <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.jobController.deleteJob('${this.id}')" aria-hidden="true"></i>
  <div class="card-body">
  <h5 class="card-title">Job Title:${this.jobTitle}</h5>
  <p class="card-text">Hours: ${this.hours}</p>
  <p>Description:${this.description}</p>
  <p>Company:${this.company}</p>
  <p>Rate:${this.rate}</p>
  <button class="btn btn-primary" onclick="app.jobController.bid('${this.id}')">Apply</button>
  </div>
  </div>`
}

}
//   <img class="card-img-top" src="${this.imgUrl}" alt="">