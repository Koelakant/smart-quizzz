const { createApp } = Vue;

createApp({
    data() {
        return {
            currentStep: 0,
            answers: {
                type: '',      // Шаг 1
                zones: [],     // Шаг 2
                area: 60,      // Шаг 3
                style: '',     // Шаг 4
                budget: '',    // Шаг 5
                name: '',
                phone: '',
                email: '',
                comment: '',
                agreement: true
            },
            questions: [
                {
                    id: 'type',
                    title: 'Какое помещение вы планируете оформить?',
                    hint: 'Выберите один вариант ответа',
                    type: 'single',
                    options: [
                        { id: 1, text: 'Квартира', value: 'flat' },
                        { id: 2, text: 'Частный дом', value: 'house' },
                        { id: 3, text: 'Офис', value: 'office' },
                        { id: 4, text: 'Другое', value: 'other' }
                    ]
                },
                {
                    id: 'zones',
                    title: 'Какие зоны нужно включить в дизайн-проект?',
                    hint: 'Выберите несколько вариантов ответа',
                    type: 'multiple',
                    options: [
                        { id: 1, text: 'Кухня', value: 'kitchen' },
                        { id: 2, text: 'Гостиная', value: 'living' },
                        { id: 3, text: 'Спальня', value: 'bedroom' },
                        { id: 4, text: 'Санузел', value: 'bathroom' }
                    ]
                },
                {
                    id: 'area',
                    title: 'Укажите примерную площадь помещения',
                    hint: '',
                    type: 'slider'
                },
                {
                    id: 'style',
                    title: 'Какой стиль интерьера вам ближе?',
                    hint: 'Выберите один вариант ответа',
                    type: 'style',
                    options: [
                        { id: 1, text: 'Современный', value: 'modern', img: 'assets/modern.jpg' },
                        { id: 2, text: 'Классика', value: 'classic', img: 'assets/classic.jpg' },
                        { id: 3, text: 'Минимализм', value: 'minimal', img: 'assets/minimal.jpg' },
                        { id: 4, text: 'Лофт', value: 'loft', img: 'assets/loft.jpg' }
                    ]
                },
                {
                    id: 'budget',
                    title: 'Какой бюджет на реализацию?',
                    hint: 'Выберите один вариант ответа',
                    type: 'single',
                    options: [
                        { id: 1, text: 'До 500 000 ₽', value: 'low' },
                        { id: 2, text: '500 000 – 1 000 000 ₽', value: 'medium' },
                        { id: 3, text: 'От 1 000 000 ₽', value: 'high' }
                    ]
                },
                {
                    id: 'form',
                    title: 'Оставьте контакты',
                    hint: 'Мы свяжемся с вами по вашему проекту',
                    type: 'form'
                }
            ]
        }
    },
    computed: {
        progressWidth() {
            return ((this.currentStep + 1) / 6) * 100;
        },
        isStepValid() {
            const step = this.questions[this.currentStep];
            if (step.type === 'single') return this.answers[step.id] !== '';
            if (step.type === 'multiple') return this.answers[step.id].length > 0;
            if (step.type === 'style') return this.answers.style !== '';
            if (step.type === 'slider') return true;
            if (step.type === 'form') return this.answers.phone.length > 5 && this.answers.agreement;
            return false;
        }
    },
    methods: {
        nextStep() {
            if (this.currentStep < 5) {
                this.currentStep++;
            } else {
                this.submitQuiz();
            }
        },
        prevStep() {
            if (this.currentStep > 0) this.currentStep--;
        },
        selectSingle(key, val) {
            this.answers[key] = val;
        },
        toggleMultiple(key, val) {
            const index = this.answers[key].indexOf(val);
            if (index > -1) {
                this.answers[key].splice(index, 1);
            } else {
                this.answers[key].push(val);
            }
        },
        isSelected(key, val) {
            return this.answers[key].includes(val);
        },
        submitQuiz() {
            alert('Форма отправлена!');
            console.log(this.answers);
        }
    }
}).mount('#app');