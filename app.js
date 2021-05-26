Vue.createApp({
    data: () => ({
        time: new Date()
    }),
    mounted() {
        this.interval = setInterval(() => {
            this.time = new Date()
        }, 1000)
    },
    methods: {
        dateFilter(value) {
            const options = {}
            options.hour = '2-digit'
            options.minute = '2-digit'

            return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
        }
    }
}).mount('#app')

let mychat = new FakeChat('#mychat', {
    messages: [
        {
            text:  `Задания по дисциплине<br/> «Проектирование и анализ языков<br> веб-решений»`,
            timer: 500,
        },
        {
            text: `Преподаватель:<br/> Государев Илья Борисович`,
            timer: 1200,
        },
        {
            text: `Задания:<br/>`,
            timer: 2400,
        },
        {
            text: `MathMl from XML:<br/>` +
                    `<a href="https://mellen-gh.github.io/XML/sigma.xml" target="_blank">Перейти -></a>`,
            timer: 3600,
        },
        {
            text: 'Задания по дисциплине<br/> ',
            timer: 6800,
        }, {
            text: 'Задания по дисциплине<br/> «Проектирование и анализ языков<',
            timer: 8000,
        },
        {
            text:  `Задания по дисциплине<br/> «Проектирование и анализ языков`,
            timer: 9000,
        },
        {
            text:  `Задания по дисциплине`,
            timer: 11000,
        },
        {
            text:  `Задания по дисциплине веб-решений»`,
            timer: 13000,
        },{
            text:  `Задания по дисциплине языков веб-решений»`,
            timer: 15000,
        },
        {
            text:  `Задания по дисциплине<br/> «Проектирование и анализ языков<br> веб-решений»`,
            timer: 17000,
        },{
            text:  `Задания по дисциплине<br/> «Проектирование и анализ языков<br> веб-решений»`,
            timer: 18000,
        },
        {
            text:  `Задания по дисциплине<br/> «Проектирование и анализ языков<br> веб-решений»`,
            timer: 20000,
        },
        {
            text:  `Задания по дисциплине<br/> «Проектирование и анализ языков<br> веб-решений»`,
            timer: 22000,
        },




    ],
    visible: false,
    adding: 'beforeend',
    theme: {

        angle: 'rounded ',
    },
    animation: {
        class: 'animation_class',
        function: 'animation_func',
    }
})