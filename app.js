const app = Vue.createApp({

    data(){
        return {
            filteredList : [],
            
            todoList : [
              {id: 1, title: 'Add New Task', completed: false}, 
            //    {id: 1, title: 'Ted Some Styling', completed: false},
            //      {id: 1, title: 'Sad Local Storage Option', completed: false}, 
            ],
            search : '',
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

        searchItem(){

            this.filteredList =  this.todoList.filter(
                 todo => todo.title.toLowerCase().includes(this.search.toLowerCase(todo => todo !== todoItem))
            );

            



        },

    },




}).mount("#app");    


