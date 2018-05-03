import React, { Component } from 'react'
import Modal from './Modal'
import featuredWork from './features.config'
import Testimonials from './Testimonials'
import '../Landing.css'


class WhatWeDo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeCategory: 'viewAll',
      enlargedPhoto: null,
      isModalOpen: false,
    }
  }

  handleSetActiveCategory = (activeCategory) => {
    return this.setState({ activeCategory })
  }

  handleEnlargedPhoto = (enlargedPhoto) => {
    return this.setState(prevState => ({
      enlargedPhoto,
      isModalOpen: !prevState.isModalOpen,
    }))
  }

  renderCategories = () => {
    const { activeCategory } = this.state
    const getCategoryList = collectionWithDuplicates => ([
      ...new Set(collectionWithDuplicates.map(f => f.category)),
    ])
    return (
      <div id="whatWeDo_grid_categories">
        <button
          className={(activeCategory === 'viewAll')
            ? 'whatWeDo_grid_categories-button isActiveCategory'
            : 'whatWeDo_grid_categories-button'}
          onClick={() => this.handleSetActiveCategory('viewAll')}
        >
          VIEW ALL
        </button>
        {getCategoryList(featuredWork).map(category => (
          <button
            className={(category === activeCategory)
              ? 'whatWeDo_grid_categories-button isActiveCategory'
              : 'whatWeDo_grid_categories-button'}
            onClick={() => this.handleSetActiveCategory(category)}
            key={category}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>
    )
  }

  renderFeatures = () => {
    const { activeCategory } = this.state
    if (activeCategory === 'viewAll') {
      return featuredWork.map(feature => (
        <button
          className="whatWeDo_grid_feature-button"
          onClick={() => this.handleEnlargedPhoto(feature.image)}
          key={feature.label}
        >
          <div className="whatWeDo_grid_feature">
            <div className="whatWeDo_grid_feature-photoWrapper">
              <div className="whatWeDo_grid_feature-overlay" />
              <img
                className="whatWeDo_grid_feature-photo"
                src={feature.image}
                alt={feature.label}
              />
            </div>
          </div>
        </button>
      ))
    }
    return featuredWork
      .filter(feature => feature.category === activeCategory)
      .map(feature => (
        <button
          className="whatWeDo_grid_feature-button"
          onClick={() => this.handleEnlargedPhoto(feature.image)}
          key={feature.label}
        >
          <div className="whatWeDo_grid_feature" key={feature.label}>
            <div className="whatWeDo_grid_feature-photoWrapper">
              <div className="whatWeDo_grid_feature-overlay" />
              <img
                className="whatWeDo_grid_feature-photo"
                src={feature.image}
                alt={feature.label}
              />
            </div>
          </div>
        </button>
      ))
  }

  render() {
    const { enlargedPhoto, isModalOpen } = this.state
    return (
      <div id="whatWeDo">
        <h1 className="darkHeader">WHAT WE DO</h1>
        <div id="whatWeDo_grid-container">
          {this.renderCategories()}
          <div id="whatWeDo_grid">
            {this.renderFeatures()}
            <Modal
              show={isModalOpen}
              onClose={() => this.handleEnlargedPhoto()}
            >
              <img
                className="whatWeDo_grid_feature-photo"
                src={enlargedPhoto}
                alt="Enlarged Version"
              />
            </Modal>
          </div>
        </div>
        <h4 id="whatWeDo_testimonials-subheading">
          TESTIMONIALS
        </h4>
        <Testimonials />
      </div>
    )
  }
}

export default WhatWeDo
