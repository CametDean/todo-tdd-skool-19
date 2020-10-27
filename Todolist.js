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

    renameItem(itemOldName, itemNewName) {
        const index = this.myItems.indexOf(itemOldName)
        this.myItems[index] = itemNewName
    }
}

module.exports = TodoList