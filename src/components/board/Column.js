import React from 'react'
import PropTypes from 'prop-types'
import { Droppable, Draggable } from 'react-beautiful-dnd'

const grid = 8
const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  color: '#fff',
  background: isDragging ? '#db8f6b' : 'none',
  border: '1px solid rgba(255,255,255,0.2)',
  ...draggableStyle,
})
const getListStyle = isDraggingOver => ({
  backgroundColor: isDraggingOver ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
  boxShadow: '-8px 14px 40px 0px rgba(0, 0, 0, 0.2)',
  padding: grid,
  width: 250,
  minHeight: 500,
})

const Column = (props) => {
  const { id, list } = props
  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
        >
          {list.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => ( // eslint-disable-line no-shadow
                <div>
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style,
                    )}
                  >
                    {item.title}
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

Column.propTypes = {
  id: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default Column
