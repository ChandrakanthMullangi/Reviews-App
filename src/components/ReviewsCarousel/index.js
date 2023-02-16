// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  onClickLeftArrowButton = () => {
    const {id} = this.state

    if (id !== 0) {
      this.setState(prevState => ({id: prevState.id - 1}))
    }
  }

  onClickRightArrowButton = len => {
    const {id} = this.state

    if (id !== len - 1) {
      this.setState(prevState => ({id: prevState.id + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props

    const {id} = this.state

    const len = reviewsList.length

    const filteredReviewsList = reviewsList.filter(
      eachReview => reviewsList.indexOf(eachReview) === id,
    )

    const {imgUrl, username, companyName, description} = filteredReviewsList[0]

    return (
      <div className="app-container">
        <button
          type="button"
          className="arrow-button"
          data-testid="leftArrow"
          onClick={this.onClickLeftArrowButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow-image"
          />
        </button>
        <div className="review-container">
          <h1 className="heading"> Reviews </h1>
          <img src={imgUrl} alt={username} />
          <p className="username"> {username} </p>
          <p className="company-name"> {companyName} </p>
          <p className="review"> {description} </p>
        </div>
        <button
          type="button"
          className="arrow-button"
          data-testid="rightArrow"
          onClick={() => this.onClickRightArrowButton(len)}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="arrow-image"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
