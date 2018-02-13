import React, { Component } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Column from './Column'
import './Board.css'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onHold: [
        {
          id: 'item-1',
          content: 'Call Gary',
        },
        {
          id: 'item-2',
          content: 'Make pancakes for Sally',
        },
      ],
      inProgress: [
        {
          id: 'item-3',
          content: 'Complete back propogation',
        },
        {
          id: 'item-4',
          content: 'Start animated logo sequence',
        },
      ],
      needsReview: [
        // {
        //   id: 'item-5',
        //   content: 'Sketch Ronald\'s website',
        // },
        // {
        //   id: 'item-6',
        //   content: 'Edit Sandwich photography',
        // },
      ],
      approved: [
        {
          id: 'item-7',
          content: 'Design typography',
        },
        {
          id: 'item-8',
          content: 'Get new draft',
        },
      ],
    }
    this.onDragEnd = this.onDragEnd.bind(this)
  }

  onDragEnd(result) {
    const { source, destination } = result
    if (!destination) {
      return null
    }

    // DROP IN SAME LIST
    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.state[destination.droppableId],
        source.index,
        destination.index,
      )
      return this.setState({
        [destination.droppableId]: items,
      })
    }

    // DROP IN DIFFERENT LIST
    if (source.droppableId !== destination.droppableId) {
      const updatedSource = this.state[source.droppableId].filter((_, i) => i !== source.index)
      const movedItem = this.state[source.droppableId].find((_, i) => i === source.index)
      const destLength = this.state[destination.droppableId].length
      this.setState({
        [source.droppableId]: updatedSource,
      })
      // SPECIAL CASE: if destination list is currently empty
      if (destLength === 0) {
        return this.setState({
          [destination.droppableId]: [movedItem],
        })
      }
      const updatedDestination = this.state[destination.droppableId]
        .reduce((acc, existingItem, i) => {
          if (destination.index === i) {
            acc.push(movedItem)
          }
          acc.push(existingItem)
          // SPECIAL CASE: if dropping item on the end of the list
          if (i === (destLength - 1) && destination.index === destLength) {
            acc.push(movedItem)
          }
          return acc
        }, [])
      return this.setState({
        [destination.droppableId]: updatedDestination,
      })
    }
    return null
  }

  render() {
    const {
      onHold, inProgress, needsReview, approved,
    } = this.state
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div>
              <div>ON HOLD</div>
              <Column id="onHold" list={onHold} />
            </div>
            <div>
              <div>IN PROGRESS</div>
              <Column id="inProgress" list={inProgress} />
            </div>
            <div>
              <div>NEEDS REVIEW</div>
              <Column id="needsReview" list={needsReview} />
            </div>
            <div>
              <div>APPROVED</div>
              <Column id="approved" list={approved} />
            </div>
          </div>
        </div>
      </DragDropContext>
    )
  }
}

export default Board
