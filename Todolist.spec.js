const { it, expect } = require("@jest/globals")

const TodoList = require("./Todolist")
let todolist

describe('TodoList', () => {

    beforeEach(() => {
        todolist = new TodoList([])
      });

    it('exists', () => {
        //given
        //then
        expect(todolist).toBeTruthy()
    })

    it('can save a new item', () => {
        //given
        //when
        todolist.addNewItem('new item!')
        //then
        expect(todolist.myItems).toEqual(['new item!'])
    })

    it('can save two items', () => {
        //given
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
    it('can modify the name of an item', () => {
        //given
        todolist.addNewItem('faire de la plongée')
        todolist.renameItem('faire de la plongée','faire de lapnée')
        //then
        expect(todolist.myItems).toEqual(['faire de lapnée'])
    });
})