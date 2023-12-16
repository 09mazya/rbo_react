import { makeAutoObservable } from "mobx";

class DateAndSheetName {
    dateFrom = null;
    dateTo = null;
    sheetName = "";
    isCleared = false



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
        this.isCleared = true;
    }
}

const dateAndSheetName = new DateAndSheetName();

export default dateAndSheetName;


