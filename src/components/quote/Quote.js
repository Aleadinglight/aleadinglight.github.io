import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import myQuotes from '../../static/quote.json'
import "./Quote.css"

export default class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: myQuotes,
      index: 0
    }
  }

  getCurrentQuote = () => {
    return this.state.quotes.quote[this.state.index].text;
  }

  getCurrentAuthor = () => {
    return this.state.quotes.quote[this.state.index].author;
  }

  getNextQuote = () => {
    if (this.state.index < this.state.quotes.quote.length - 1) {
      this.setState({
        index: this.state.index + 1
      })
    }
    else {
      this.setState({
        index: 0
      })
    }
  }

  getPreviousQuote = () => {
    let maxLength = this.state.quotes.quote.length - 1;

    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1
      })
    }
    else {
      this.setState({
        index: maxLength
      })
    }
  }

  render() {
    return (
      <Container className="quote-container">
        <Row>
          <Col md={2} className="quote-left-container">
            <button className="quote-button"
              onClick={this.getPreviousQuote} >
              {"<"}
            </button>
          </Col>
          <Col>
            <p className="quote-text">
              {'"'}{this.getCurrentQuote()}{'"'}
            </p>
          </Col>
          <Col md={2} className="quote-right-container">
            <button className="quote-button"
              onClick={this.getNextQuote}>
              {">"}
            </button>
          </Col>
        </Row>
      </Container >
    )
  }
}
