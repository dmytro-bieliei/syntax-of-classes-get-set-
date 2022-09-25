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
    this.#initialRangeValue = initialRangeValue;
    this.#finalRangeValue = finalRangeValue;

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
  set initialRangeValue(initialValue) {
    if (typeof initialValue !== 'number' || isNaN(initialValue)) {
      throw new TypeError('Range value must be a number')
    }

    if (initialRangeValue > finalRangeValue) {
      this.#initialRangeValue = finalRangeValue;
    }
    this.#initialRangeValue = value;
  }
  
  set finalRangeValue(finalValue) {
    if (typeof finalValue !== 'number' || isNaN(finalValue)) {
      throw new TypeError('Range value must be a number')
    }

    if (initialRangeValue > finalRangeValue) {
      this.#finalRangeValue = initialRangeValue;
    }
    this.#finalRangeValue = value;
  }
 
  validate(numberInRange){
    if (numberInRange < 5 || numberInRange > 50) {
      throw new Error('Value is out of range. Use value from 5 to 50');
    }
    return numberInRange;
  }
  
}

const firstRange = new RangeValidator(6, 47);
const secondRange = new RangeValidator(-5, 67);
const thirdRange = new RangeValidator(0, 49);
const fourthRange = new RangeValidator(36, 6);
const fifthRange = new RangeValidator('6', NaN);

