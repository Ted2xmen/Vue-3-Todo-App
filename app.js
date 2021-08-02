const app = Vue.createApp({

    data(){
        return {
            todoList : [
                {id: 1, title: 'Add New Task', completed: false}, 
                {id: 1, title: 'Add Some Styling', completed: false},
                {id: 1, title: 'Add Local Storage Option', completed: false}, 
            ],
            date : new Date().toLocaleDateString(),
            clock: new Date().getHours(),
        };
    },
 
    methods: {
        addTodo (event) {
            this.todoList.push({
                id: new Date().getTime(),
                title : event.target.value,
                 tarih : new Date().toLocaleDateString(), 
                // tarih: moment.locale("de").format('LLL'),
                completed: false
            });
            event.target.value = "";
        },
        removeItem(todoItem){
         
            this.todoList = this.todoList.filter(todo => todo !== todoItem)

        },
  
    },

    computed: {
        completedItemCount(){
            return this.todoList.filter(todo => todo.completed).length
        },
        unCompletedItemCount(){
            return this.todoList.filter(todo => !todo.completed).length
        },
        allItemCount(){
            return this.todoList.length
        },
    },




}).mount("#app");    


 