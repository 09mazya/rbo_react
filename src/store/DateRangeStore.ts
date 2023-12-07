import { makeAutoObservable } from "mobx";

class DateRangeStore {
    selectedReports = [];
    dateFrom = null;
    dateTo = null;

    constructor() {
        makeAutoObservable(this);
    }

    setSelectedReports(item: any) {
        this.selectedReports = item.sheetName
    }

    setStart(date: any) {
        this.dateFrom = date
        // console.log(date)
    }

    setEnd(date: any) {
        this.dateTo = date
    }

    toJSON() {
        return {
            sheetName: this.selectedReports,
            dateFrom: this.dateFrom,
            dateTo: this.dateTo
        };
    }
    clear() {
        console.log("rabotaet")
        this.selectedReports = [];
        this.dateFrom = null;
        this.dateTo = null;
    }
}

const dateRangeStore = new DateRangeStore();

export default dateRangeStore;


