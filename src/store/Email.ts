import { makeAutoObservable } from "mobx";
import axios from "axios";

class EmailReports {
  email = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchEmail() {
    try {
      const authToken = localStorage.getItem("token");

      if (!authToken) {
        console.error("No token found in Local Storage.");
        return;
      }

      const response = await axios.get(
        "http://10.10.91.96:8085/api/reference/email",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      // console.log(response.data)
      this.email = response.data.response;
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

}

export default new EmailReports();
