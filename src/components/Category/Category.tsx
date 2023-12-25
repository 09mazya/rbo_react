import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import categoryStore from "../../store/Category";
import s from "./Category.module.scss";
import reportsStore from "../../store/ReportsStore";

const Category = observer(() => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    categoryStore.fetchCategory();
  }, []);

  const categoryData = categoryStore.category;

  function getCategory(category: string) {
    reportsStore.filterReportsByType(category);
    setSelectedCategory(category);
  }

  const categoryItems = Object.keys(categoryData).map((key: any) => {
    return (
      <li
        key={key}
        onClick={() => getCategory(categoryData[key])}
        className={categoryData[key] === selectedCategory ? s.selected : ""}
      >
        {categoryData[key]}
      </li>
    );
  });

  return (
    <div>
      <div className={s.category_block}>
        <div className={s.title}>Категории отчетов:</div>
        <ul>{categoryItems}</ul>
      </div>
    </div>
  );
});

export default Category;