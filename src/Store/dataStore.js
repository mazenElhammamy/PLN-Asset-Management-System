import { EventEmitter } from "events";
import dispatcher from '../Dispatcher/dispatcher'
class DataStore extends EventEmitter {
    constructor() {
        super()
        this.data = [];
        this.dateMap = {};
        this.currentData = ""
    }
    getAllData(data) {
        this.data = data;
        this.dateMap = {};
        data.forEach(element => {
            const key = element.date;
            if(!this.dateMap[key]){
                this.dateMap[key] = [];
            }
            this.dateMap[key].push(element);
        });
        this.emit("change");

    }
    currentData(currentData) {
        this.currentData = currentData;
        this.emit("change")
    }
    getCurrentData() {
        return this.currentData;
    }
    getAll() {
        return {
            dataLength: this.data.length,
           dateMap: this.dateMap
        };
    }
    handleActions(action) {
        switch (action.type) {
            case "GET_ALL_DATA": {
                this.getAllData(action.data);
                break;
            }
            case "GET_CURRENT_DATA": {
                console.log("currentData from store",action.data)
                this.currentData(action.data);
                break;
            }
            default:
                break

        }
    }
}
const dataStore = new DataStore();
dispatcher.register(dataStore.handleActions.bind(dataStore));
export default dataStore;