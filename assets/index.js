'use strict';
/* Реализовать класс RangeValidator. Обьекты, созданные им должны обладать следующими свойcтвами:
from(число) 5
to(число) 50

Реализовать геттеры и сеттеры для обоих свойств.
Реализовать getter range, который будет возвращать массив, состоящий из границ диапазона from и to.
Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон. Метод возвращает это же число, если оно входит в диапазон. И кинет ошибку, если не входит.


Bonus tasks:
Создать проверки которые убедятся, что число во from меньше числа to и наоборот.
Создать проверки, которые помогут избежать попадание неправильных типов данных в from и to. */

class RangeValidator {
  #initialRangeValue;
  #finalRangeValue;

  constructor(initialRangeValue, finalRangeValue) {
    this.initialRangeValue = initialRangeValue;
    this.finalRangeValue = finalRangeValue;

  }
  get initialRangeValue() {
    return this.#initialRangeValue;
  }
  get finalRangeValue() {
    return this.#finalRangeValue;
  }
  get range(){
    return Array(this.#initialRangeValue, this.#finalRangeValue);
  }
  set initialRangeValue(value) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new TypeError('Range value must be a number')
    }
    if (value < 5 || value > 50) {
      throw new TypeError('Value must be in range from 5 to 50')
    }
    if (value > this.finalRangeValue) {
      throw new Error('Initial range value must be smaller then final range value')
    }
    this.#initialRangeValue = value;
  }
  
  set finalRangeValue(value) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new TypeError('Range value must be a number')
    }
    if (value < 5 || value > 50) {
      throw new TypeError('Value must be in range from 5 to 50')
    }

    if (value < this.initialRangeValue) {
      throw new Error('Final range value must be bigger then initial range value')
    }
    this.#finalRangeValue = value;
  }
  validate(numberInRange) {
    if (numberInRange < this.initialRangeValue || numberInRange > this.finalRangeValue) {
      throw new Error(`Value is out of range. Use value from ${this.initialRangeValue} to ${this.finalRangeValue}`);
    }
    return numberInRange;
  }
}

const firstRange = new RangeValidator(6, 47);
const secondRange = new RangeValidator(18, 22);
// const thirdRange = new RangeValidator(0, 49);
// const fourthRange = new RangeValidator(36, 6);
// const fifthRange = new RangeValidator('6', NaN);

