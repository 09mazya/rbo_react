import { makeAutoObservable, toJS } from "mobx";
import axios, { AxiosResponse } from "axios";


class Reports {
  setSelectedReports(item: any): void {
    throw new Error("Method not implemented.");
  }
  filteredReports = [] as any;

  constructor() {
    makeAutoObservable(this);
  }

  async filterReportsByType(type: string) {
    try {
      const authToken = localStorage.getItem("token");

      if (!authToken) {
        console.error("No token found in Local Storage.");
        return;
      }

      const response:  AxiosResponse<any> = await axios.get(
        `http://10.10.91.96:8085/api/reports-list/type?type=${type}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if(response.data){
        this.filteredReports = response.data;
      }
      
    } catch (error) {
      console.error("Error fetching categories:", error);
    };
  }
}

export default new Reports();
