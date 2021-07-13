import { StarRate } from '@material-ui/icons'
import { CONSTANTS } from '../actions/'

let listId = 2
let cardId = 5

const initialState = [
    {
        title: "To-Do",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "Buy some hummus for platter",
            },
            {
                id: `card-${1}`,
                text: "Pick up bike at the shop"
            }
        ]
    },
    {
        title: "Next Week",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: "Tue - Grandma's 50th birthday",
            },
            {
                id: `card-${3}`,
                text: "Fri - Doctor's appointment"
            },
            {
                id: `card-${4}`,
                text: "Weekend - Camping trip"
            }
        ]
    }
]



const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.ADD_LIST:
            const newList ={
                title: action.payload,
                cards: [],
                id: `list-${listId}`
            }
            listId += 1
            return [...state, newList]

        case CONSTANTS.ADD_CARD:  {
            const newCard = {
                text: action.payload.text,
                id: `card-${cardId}`
            }
            cardId += 1

            const newState = state.map(list => {
                if(list.id === action.payload.listId){
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list
                }
            })
            return newState
        }
        
        case CONSTANTS.DRAG_HAPPENED:
            const {droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId,
                type} = action.payload
            const newState = [...state]

            //dragging lists
            if(type==="list") {
                const list = newState.splice(droppableIndexStart, 1)
                newState.splice(droppableIndexEnd, 0, ...list)
                return newState
            }

            //in same list
            if(droppableIdStart === droppableIdEnd) {
                const list = state.find(list => droppableIdStart === list.id)
                const card = list.cards.splice(droppableIndexStart, 1)
                list.cards.splice(droppableIndexEnd, 0, ...card)
            }

            //in other list
            if(droppableIdStart !== droppableIdEnd) {
                const listStart = state.find(list => droppableIdStart === list.id)

                const card = listStart.cards.splice(droppableIndexStart, 1)

                const listEnd = state.find(list => droppableIdEnd === list.id)

                listEnd.cards.splice(droppableIndexEnd, 0, ...card)
            }

            return newState
        
        default: 
            return state;
    }
}

export default listsReducer