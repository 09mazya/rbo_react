export interface ICategory {
  annualReports: string;
  dailyReports: string;
  monthlyReports: string;
  quarterlyReports: string;
  weeklyReports: string;
}

export interface IAuth {
  setIsAuth: (value: string) => void;
}