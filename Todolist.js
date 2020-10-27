const TodoList = class TodoList{
    
    constructor(items) {
        this.myItems = items
    }

    addNewItem(item) {
        this.myItems.push(item)
    }

    deleteLastItem() {
        this.myItems.pop()
    }
}

module.exports = TodoList