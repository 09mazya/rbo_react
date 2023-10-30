import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import categoryStore from "../../store/Category";
import s from "./Category.module.scss";
import reportsStore from "../../store/ReportsStore";

const Category = observer(() => {
  useEffect(() => {
    categoryStore.fetchCategory();
  }, []);
  const categoryData = categoryStore.category;

  const categoryItems = Object.keys(categoryData).map((key: any) => {
    let type = "";

    switch (key) {
      case "dailyReports":
        type = "суточный";
        break;
      case "weeklyReports":
        type = "недельный";
        break;
      case "monthlyReports":
        type = "месячный";
        break;
      case "quarterlyReports":
        type = "квартальный";
        break;
      case "annualReports":
        type = "годовой";
        break;
      default:
        type = ""; // Если ключ не соответствует ни одному case
        break;
    }
    return (
      <li key={key} onClick={() => reportsStore.filterReportsByType(type)}>
        {categoryData[key]}
      </li>
    );
  });

  return (
    <div className={s.category_block}>
      <div className={s.title}>Категории отчетов:</div>
      <ul>{categoryItems}</ul>
    </div>
  );
});

export default Category;
