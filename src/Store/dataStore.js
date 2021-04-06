import { EventEmitter } from "events";
import dispatcher from '../Dispatcher/dispatcher'
class DataStore extends EventEmitter {
    constructor() {
        super()
        this.data = []
    }
    getAllData(data) {
        this.data = data;
        this.emit("change")
    }
    getAll() {
        return this.data;
    }
    handleActions(action) {
        switch (action.type) {
            case "GET_ALL_Data": {
                this.getAllData(action.data);
                break ;
            }
            default :
            break 
        
        }
    }
}
const dataStore = new DataStore();
dispatcher.register(dataStore.handleActions.bind(dataStore));
export default dataStore;