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

    })
    it('can delete last added item', () => {
        //given
        let todolist = new TodoList(['faire les courses','se confiner'])
        //when
        todolist.deleteLastItem()
        //then
        expect(todolist.myItems).toEqual(['faire les courses'])
    })
})