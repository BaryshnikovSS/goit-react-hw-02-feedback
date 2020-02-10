import React from "react";
import Notification from '../notification/Notification';

// Расширь функционал приложения так, чтобы блок статистики рендерился только после того, как был собран хотя бы один отзыв. 
// Сообщение об отсутствиии статистики вынеси в компонент <Notification message="No feedback given">.

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0) {
    return <Notification message={"No feedback given"}/>;
  }
  return (
    <>
      <ul style={{listStyle: "none", paddingLeft: 0}}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage || 0} %</li>
      </ul>
    </>
  );
};

export default Statistics;
