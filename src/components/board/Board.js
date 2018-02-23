import React, { Component } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import LevelUp from '../levelup/LevelUp'
import Nav from '../nav/Nav'
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
          title: 'Call Gary',
        },
        {
          id: 'item-2',
          title: 'Make pancakes for Sally',
        },
      ],
      inProgress: [
        {
          id: 'item-3',
          title: 'Complete back propogation',
        },
        {
          id: 'item-4',
          title: 'Start animated logo sequence',
        },
      ],
      needsReview: [
        // {
        //   id: 'item-5',
        //   title: 'Sketch Ronald\'s website',
        // },
        // {
        //   id: 'item-6',
        //   title: 'Edit Sandwich photography',
        // },
      ],
      approved: [
        {
          id: 'item-7',
          title: 'Design typography',
        },
        {
          id: 'item-8',
          title: 'Get new draft',
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
        <div id="board_wrapper">
          <div id="board_container">
            <div className="board_column-container">
              <div className="board_column-heading">ON HOLD</div>
              <Column id="onHold" list={onHold} />
            </div>
            <div className="board_column-container">
              <div className="board_column-heading">IN PROGRESS</div>
              <Column id="inProgress" list={inProgress} />
            </div>
            <div className="board_column-container">
              <div className="board_column-heading">NEEDS REVIEW</div>
              <Column id="needsReview" list={needsReview} />
            </div>
            <div className="board_column-container">
              <div className="board_column-heading">APPROVED</div>
              <Column id="approved" list={approved} />
            </div>
          </div>
          <div>
            <button onClick={() => console.log('CLICKDE HERE')}>
            </button>
          </div>
        </div>
      </DragDropContext>
    )
  }
}

export default Board
