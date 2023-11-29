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


  function getCategory(category: string){
    reportsStore.filterReportsByType(category)
  }

  const categoryItems = Object.keys(categoryData).map((key: any) => {
    return (
      <li key={key} onClick={() => getCategory(categoryData[key])}>
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
