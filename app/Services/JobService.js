import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";
import { api } from "./AxiosService.js";

class JobService{

 
  constructor(){
    console.log("job service");
    this.getJobs();
  }


  async getJobs(){
   try{
       const res = await api.get('jobs')
       ProxyState.jobs = res.data.map(rawJobData=> new Job(rawJobData))
   } catch(error){
       console.error(error)
   }
  }
  async createJob(rawJob) {
    try{
        const res = await api.post('jobs',rawJob)
        this.getJobs()
    }   catch(error){
        console.error(error)
    }

  

  }

//   async bid(id) {
//     let house = ProxyState.houses.find(h=> h.id === id)
//     house.price += 1000
//     try {
//       const res = await api.put('houses/'+id, house)
//       ProxyState.houses = ProxyState.houses
//     }
//     catch(error){
//       console.error(error)
//     }
//   }

//   async deleteHouse(id) {
//     try{
//       const res = await api.delete(`houses/${id}`)
//       this.getHouses()
//     }
//     catch (error){
//       console.error(error)
//     }
    
//   }
 }

export const jobService = new JobService()