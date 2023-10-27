import React from "react";
import s from "./InstructionsBlock.module.scss";

const InstructionsBlock = () => {
  return (
    <div className={s.InstructionsBlock}>
      <h2>Правила формирования отчёта:</h2>

      <p>
        Дата начала и дата закрытия – выбирается пользователем. Дата закрытия
        может быть больше сегодняшнего дня на 14 дней. При недельных отчетах
        Пользователь может задать диапазон только 1 неделю: с понедельника по
        воскресенье
      </p>
    </div>
  );
};

export default InstructionsBlock;
