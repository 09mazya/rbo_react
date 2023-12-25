import { makeAutoObservable } from "mobx";


class DateAndSheetName {
    dateFrom = null;
    dateTo = null;
    sheetName = "";
    isCleared = false;
    checkboxSelected = false; // Добавьте это свойство

    constructor() {
        makeAutoObservable(this);
    }

    setStart(date: any) {
        this.dateFrom = date;
    }

    setEnd(date: any) {
        this.dateTo = date;
    }

    setSheetName(code: string) {
        this.sheetName = code;
    }

    setCheckboxSelected(value: boolean) {
        this.checkboxSelected = value;
    }

    toJSON() {
        return {
            dateFrom: this.dateFrom,
            dateTo: this.dateTo,
            sheetName: this.sheetName,
            checkboxSelected: this.checkboxSelected,
        };
    }

    clear() {
        this.dateFrom = null;
        this.dateTo = null;
        this.sheetName = "";
        this.checkboxSelected = false; // Сброс состояния чекбокса при очистке
        this.isCleared = true;
    }
}

const dateAndSheetName = new DateAndSheetName();

export default dateAndSheetName;