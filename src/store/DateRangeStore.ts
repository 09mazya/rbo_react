import { makeAutoObservable } from "mobx";

class DateRangeStore {
    dateFrom = null;
    dateTo = null;
    sheetName = "";



    constructor() {
        makeAutoObservable(this);
    }

    setStart(date: any) {
        this.dateFrom = date
        // console.log(date)
    }

    setEnd(date: any) {
        this.dateTo = date
    }

    setSheetName(code: string){
        this.sheetName = code
    }

    toJSON() {
        return {
            dateFrom: this.dateFrom,
            dateTo: this.dateTo,
            sheetName: this.sheetName
        };
    }
    clear() {
        this.dateFrom = null;
        this.dateTo = null;
        this.sheetName = "";
    }
}

const dateRangeStore = new DateRangeStore();

export default dateRangeStore;


