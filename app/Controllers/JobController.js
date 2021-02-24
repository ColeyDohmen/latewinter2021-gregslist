import { ProxyState } from "../AppState.js"
import { jobService } from "../Services/JobService.js"

  function _draw(){
    let jobs = ProxyState.jobs
    let template = ""
    jobs.forEach(j=> template += j.Template)
    // console.log(template)
    document.getElementById('jobs').innerHTML = template
    console.log(ProxyState.jobs)
  }

export default class JobController{
  constructor(){
    console.log("job controller working")
    console.log(ProxyState.jobs)
    _draw()
    ProxyState.on("jobs", _draw)
  }

  createJob(event){
    event.preventDefault();
    let form = event.target
    console.log(form)
    let rawJob = {
        jobTitle: form.jobTitle.value,
      hours: form.hours.value,
      company:form.company.value,
      rate: form.rate.value,
      description: form.description.value
    }
    console.log(rawJob)
    jobService.createJob(rawJob)
  }

//   bid(id){
//     console.log('bidding ' + id)
//     jobService.bid(id)
//   }

//   deleteJob(id){
//     console.log(id)
//     jobService.deleteJob(id)
//   }

}