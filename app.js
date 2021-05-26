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
            text: `MathML<br/>` +
                    `<a href="https://mellen-gh.github.io/XML/sigma.xml" target="_blank">Перейти -></a>`,
            timer: 3600,
        },
        {
            text: `SVG:<br/>` +
                `<a href="https://mellen-gh.github.io/XML/svg.xml" target="_blank">Перейти -></a>`,
            timer: 4600,
        },
        {
            text: `Fetch:<br/>` +
                `<a href="https://mellen-gh.github.io/fetch/index.html" target="_blank">Перейти -></a>`,
            timer: 5600,
        },
         {
            text: `Func **:<br/>` +
                `<a href="https://mellen-gh.github.io/func/index.html" target="_blank">Перейти -></a>`,
            timer: 6600,
        },
          {
            text: `Chain of prototype: <br/>` +
                `<a href="https://mellen-gh.github.io/prot/index.html" target="_blank">Перейти -></a>`,
            timer: 7600,
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