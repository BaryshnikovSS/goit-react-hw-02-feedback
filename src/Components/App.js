import React, { Component } from "react";
import Section from "./section/Section";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Statistics from "./statistics/Statistics";

// Выполни рефакторинг приложения. Состояние приложения должно оставаться в корневом компоненте <App>.

// Состояние приложения обязательно должно быть следующего вида, добавлять новые свойства нельзя.

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
// };

// Добавь отображение общего количества собранных отзывов из всех категорий и процент положительных отзывов.
// Для этого создай вспомогательные методы countTotalFeedback() и countPositiveFeedbackPercentage(), подсчитывающие эти значения
// основываясь на данных в состоянии (вычисляемые данные).

// Вынеси отображение статистики в отдельный компонент <Statistics good={} neutral={} bad={} total={} positivePercentage={}/>.
// Вынеси блок кнопок в компонент <FeedbackOptions options={} onLeaveFeedback={}>.
// Создай компонент <Section title=""/>, который рендерит секцию с заголовком и детей (children).
// Оберни каждый из <Statistics> и <FeedbackOptions> в созданный компонент секции.

let total = 0;

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };
  handleClick = e => {
    e.preventDefault();
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (total = good + neutral + bad);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title={"Statistics"}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
