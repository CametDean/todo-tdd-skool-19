const { it, expect } = require("@jest/globals")

const TodoList = require("./Todolist")

describe('TodoList', () => {

    it('exists', () => {
        //given
        let todolist = new TodoList()
        //then
        expect(todolist).toBeTruthy()
    })

    it('can save a new item', () => {
        //given
        let todolist = new TodoList([])
        //when
        todolist.addNewItem('new item!')
        //then
        expect(todolist.myItems).toEqual(['new item!'])
    })

    it('can save two items', () => {
        //given
        let todolist = new TodoList([])
        //when
        todolist.addNewItem('faire les courses')
        todolist.addNewItem('aller a la piscine')
        //then
        expect(todolist.myItems.length).toEqual(2)

    }
    
    )

})