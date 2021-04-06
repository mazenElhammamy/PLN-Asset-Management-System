import dispatcher from "../Dispatcher/dispatcher";
import axios from "axios"

export function getAll() {

   const options = {
      method: 'GET',
      url: 'http://localhost:3000/system',
   };
   axios(options)
      .then((res) => {
          console.log(res.data)
        dispatcher.dispatch({
            type: "GET_ALL_Data",
            data: res.data,
         });
      })
      .catch((err) => {
         console.log(err)
      });
}

