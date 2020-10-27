const { it, expect } = require("@jest/globals")

const TodoList = require("./Todolist")

describe('TodoList', () => {

    it('exists', () => {
        //given
        let todolist = new TodoList()
        //then
        expect(todolist).toBeTruthy()
    })

})