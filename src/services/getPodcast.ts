import axios from 'axios'
import { API } from '../API'

export const getPodcast = () =>{
  return axios.get(API.urlGetPodcasts).then((res)=>{
      return res.data.feed.entry
  }).catch((err)=>{
      console.log(err)
      return null
  })
}