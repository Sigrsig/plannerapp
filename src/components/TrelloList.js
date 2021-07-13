import React from 'react'
import TrelloCard from './TrelloCard'
import TrelloActionButton from './TrelloActionButton'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const ListContainer = styled.div`
    background-color: #ebecef;
    border-radius: 3px;
    width: 300px;
    padding: 8px;
    height: 100%;
    margin-right: 8px;
`

const TrelloList = ({ title, cards, listId, index }) => {
    return (
        <Draggable draggableId={String(listId)} index={index}>
            {provided => (
                <ListContainer 
                    {...provided.draggableProps} 
                    ref={provided.innerRef} 
                    {...provided.dragHandleProps} >
                <Droppable droppableId={String(listId) }>
                {provided => (
                    <div {...provided.dragHandleProps} ref={provided.innerRef}>
                        <h4>{title}</h4>
                        { cards.map((card, index) => (
                        <TrelloCard 
                            key={card.id} 
                            index={index} 
                            text={card.text} 
                            id={card.id} />
                        ))}
                        
                        {provided.placeholder}
                        <TrelloActionButton listId={listId} />
                    </div>
                )}              
            </Droppable>
            </ListContainer>
            )}
            
        </Draggable>

             
    )
}

export default TrelloList
