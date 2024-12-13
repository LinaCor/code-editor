const tasks = [
  {
    text: 'Получаете массив чисел, возвращаете сумму всех положительных единиц.', example: '[1, -4, 7, 12] => 1+ 7+12=20'
  },
  {
    text: 'Дан массив целых чисел.Верните массив, где первый элемент — это количество положительных чисел, а второй элемент — сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным.Если входные данные — пустой массив или равны нулю, верните пустой массив.', example: 'Для входных данных [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] следует вернуть [10, -65].'
  },
  {
    text: 'Дан массив целых чисел, удалить наименьшее значение. Не изменять исходный массив/список. Если есть несколько элементов с одинаковым значением, удалить элемент с наименьшим индексом. Если вы получили пустой массив/список, вернуть пустой массив/список. Не изменять порядок оставшихся элементов.', example: '* Input: [5,3,2,1,4], output = [5,3,2,4]'
  },
  {
    text: 'Нам нужна функция, которая может преобразовать строку в число. Какие способы достижения этого вы знаете?Примечание: не волнуйтесь, все входные данные будут строками, и каждая строка является совершенно допустимым представлением целого числа.', example: '"1234" --> 1234'
  }
]

export function Tasks() {
  return (
    <div className="field-task">
      <div className="field-task__text">
        <h3>
          Задача:
        </h3>
        <p>
          {tasks[0].text}
        </p>
      </div>
      <div className="field-task__example">
        <h3>
          Пример:
        </h3>
        <p>
          {tasks[0].example}
        </p>
      </div>
    </div>
  )
}