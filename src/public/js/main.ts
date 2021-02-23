import Vue from "vue";
import axios from "axios";
import * as BO from '../../BO';

console.log('client side scripting support / soporte de secuencias de comandos del lado del cliente');

// // tslint:disable no-unused-expression
new Vue({ // eslint-disable-line no-new
    computed: {    },
    data() {
        return {
            todos: []
        }
    },
    el: "#app",
    methods: {    },
    mounted() {

        // axios.get('/api/todos').then(response => {
        //     this.todos = response.data;
        // })

        // sin utilizar todos
        // this.todos = [{
        //     "id": 1,
        //     "title": "Integrate Vue.js",
        //     "isDone": true
        // }, 
        // {
        //     "id": 2,
        //     "title": "Refactor this later",
        //     "isDone": false
        // }, 
        // {
        //     "id": 3,
        //     "title": "Write an API",
        //     "isDone": false
        // }, 
        // {
        //     "id": 4,
        //     "title": "Get data from a database",
        //     "isDone": false
        // }];  

        let todos: BO.Todo[] = [{
            "id": 1,
            "title": "Integrate Vue.js",
            "isDone": true
        }, {
            "id": 2,
            "title": "Refactor this later",
            "isDone": false
        }, {
            "id": 3,
            "title": "Write an API",
            "isDone": false
        }, {
            "id": 4,
            "title": "Get data from a database",
            "isDone": false
        }];
        ( <BO.Todo[]>this.todos) = todos;

    }
});
