import { ADD_TODO, REMOVE_TODO, TOOGLE_TODO } from './../actions/actions';

const initState = [
    {
        id: 0,
        text: 'gg',
        completed: true
    },
    {
        id: 1,
        text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
        completed: false
    },
]
const todos = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case REMOVE_TODO:
            return state.filter(({ id }) => id !== action.id )
        case TOOGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id) 
                ? {...todo, completed: !todo.completed}
                : todo
            )
        default:
            return state
    }
}
  
export default todos