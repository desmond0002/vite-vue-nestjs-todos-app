import { IForm } from "../types/form"
import API from "./api"

export default {
    getMocks() {return API().get<IForm[]>("/getMocks").then((res) => res.data)},

    getTodos() {return API().get<IForm[]>("/getTodos").then((res) => res.data)},

    pushTodo(props: IForm) {return API().post("/pushTodo", props)},

    updateTodo(props: { id: string; done: boolean }) {return API().post('/update', props)},

    
    removeTodo(id: string) {return API().delete(`${id}`)},

    
    
}
