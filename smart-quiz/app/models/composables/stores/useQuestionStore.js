import { defineStore } from 'pinia'

export const useQuestionStore = defineStore('question', () => {

  const questions = ref({
    q1: {
      id: 'q1',
      text: 'Какое помещение вы планируете оформить?',
      selectionText: 'Выберите один вариант ответа',
      options: ['Квартира', 'Частный дом', 'Офис', 'Коммерческое помещение', 'Студия / апартаменты', 'Другое'],
      isAnswered: false,
      userAnswer: null,
      step: 1
    },
    q2: {
      id: 'q2',
      text: 'Какие зоны нужно включить в дизайн-проект?',
      selectionText: 'Выберите несколько вариантов ответа',
      options: ['Кухня', 'Гостиная', 'Спальня', 'Санузел', 'Прихожая', 'Детская', 'Кабинет', 'Гардеробная', 'Балкон / лоджия', 'Полностью всё помещение'],
      isAnswered: false,
      userAnswer: null,
      step: 2
    },
    q3: {
      id: 'q3',
      text: 'Укажите примерную площадь помещения',
      options: [],
      selectionText: '',
      isAnswered: false,
      userAnswer: null,
      step: 3
    },
    q4: {
      id: 'q4',
      text: 'Какой стиль интерьера вам ближе?',
      selectionText: 'Выберите один вариант ответа',
      options: ['Современный', 'Минимализм', 'Скандинавский', 'Неоклассика', 'Классика', 'Лофт', 'Пока не определился'],
      isAnswered: false,
      userAnswer: null,
      step: 4
    },
    q5: {
      id: 'q5',
      text: 'Какой бюджет на реализацию интерьера вы рассматриваете?',
      selectionText: 'Выберите один вариант ответа',
      options: ['До 500 000 ₽', '1 000 000 ₽ - 2 000 000 ₽', '500 000 ₽ - 1 000 000 ₽', 'От 2 000 000 ₽', 'Пока не знаю'],
      isAnswered: false,
      userAnswer: null,
      step: 5
    },
    q6: {
      id: 'q6',
      text: 'Оставьте контакты и мы свяжемся с вами по вашему проекту',
      isAnswered: false,
      userAnswer: null,
      step: 6
    }
  })

  const totalQuestions = computed(() => {
    return Object.keys(questions.value).length
  })

  return {
    questions,

    totalQuestions
  }
})