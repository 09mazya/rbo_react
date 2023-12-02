import React from "react";
import s from "./InstructionsBlock.module.scss";

const InstructionsBlock = () => {
  return (
    <div>
      <div className={s.InstructionsBlock}>
        <h2>Правила формирования отчёта:</h2>
        <ol>
          <li>Выберите необходимую форму отчёта</li>
          <li>Укажите дату</li>
          <li>Нажмите на кнопку "Сформировать"</li>
        </ol>
      </div>
    </div>
  );
};


export default InstructionsBlock;



        {/* <p>
          Дата начала и дата закрытия – выбирается пользователем. Дата закрытия
          может быть больше сегодняшнего дня на 14 дней. При недельных отчетах
          Пользователь может задать диапазон только 1 неделю: с понедельника по
          воскресенье
        </p> */}