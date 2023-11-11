import { makeAutoObservable, toJS } from "mobx";
import axios from "axios";

class Reports {
  reports = [] as any;
  filteredReports = [] as any;

  constructor() {
    makeAutoObservable(this);
  }

  filterReportsByType(type: string) {
    this.filteredReports = this.reports.filter((reportArray: any) => {
      return reportArray.reports.filter((item: any) => {
        return (item.type = type);
      });
    });
    console.log(toJS(this.reports));
    console.log(toJS(this.filteredReports));
  }

  addReport(report: any, key: string) {
    // Проверяем, существует ли уже элемент с заданным ключом
    const existingReportIndex = this.reports.findIndex(
      (item: any) => item.key === key
    );    

    if (existingReportIndex !== -1) {
      // Если элемент с таким ключом уже существует, добавляем новый report к существующему элементу
      this.reports[existingReportIndex].reports.push(report);
    } else {
      // Если элемент с таким ключом не существует, создаем новый элемент с массивом reports, содержащим только новый report
      const newReport = { key: key, reports: [report] };
      this.reports.push(newReport);
    }
  }
  
  async getAllReports() {
    try {
      const authToken = localStorage.getItem("token");

      if (!authToken) {
        console.error("No token found in Local Storage.");
        return;
      }

      const response = await axios.get(
        "http://10.10.91.96:8085/api/reports-list",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      // console.log(response.data.response.reports[0]);
      if (response) {
        const dataInReports = response.data.response.reports[0];
        for (const key in dataInReports) {
          // console.log(toJS(dataInReports[key]));

          console.log(dataInReports)
          dataInReports[key].map((report: any) => {
            this.addReport(report, key);
          });
        }
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }
}

export default new Reports();
