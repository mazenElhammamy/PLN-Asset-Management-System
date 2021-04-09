import dispatcher from "../Dispatcher/dispatcher";
import axios from "axios"

export function getAll() {
   const options = {
      method: 'GET',
      url: 'http://localhost:3000/system',
   };
   axios(options)
      .then((res) => {
        dispatcher.dispatch({
            type: "GET_ALL_DATA",
            data: res.data,
         });
      })
      .catch((err) => {
         console.log(err)
      });
}

export function deleteOne(id) {
   const options = {
      method: 'DELETE',
      url: 'http://localhost:3000/system/'+id,
   };
   axios(options)
      .then((res) => {
         console.log(res)
         const options2 = {
            method: 'GET',
            url: 'http://localhost:3000/system',
         };
         axios(options2)
            .then((res) => {
               console.log(res)
              dispatcher.dispatch({
                  type: "GET_ALL_DATA",
                  data: res.data,
               });
            })
            .catch((err) => {
               console.log(err)
            });
      })
      .catch((err) => {
         console.log(err)
      });
}
export async function updateOne(data) {
   console.log(" from action",data)
   const options = {
      method: 'PUT',
      url: 'http://localhost:3000/system/'+data.id , data
   };
   axios(options)
      .then((res) => {
         const options2 = {
            method: 'GET',
            url: 'http://localhost:3000/system',
         };
         axios(options2)
            .then((res) => {
               console.log(res)
              dispatcher.dispatch({
                  type: "GET_ALL_DATA",
                  data: res.data,
               });
            })
            .catch((err) => {
               console.log(err)
            });
      })
      .catch((err) => {
         console.log(err)
      });
}
