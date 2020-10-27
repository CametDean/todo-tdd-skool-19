const TodoList = class TodoList{
    
    constructor(items) {
        this.myItems = items
    }

    addNewItem(item) {
        this.myItems.push(item)
    }
}

module.exports = TodoList