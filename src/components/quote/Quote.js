import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
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
    console.log(`this.state.quotes`, this.state.quotes)
    return this.state.quotes.quote[this.state.index].text;
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
    console.log(`this.state.index`, this.state.index)
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
        <button className="quote-button"
          onClick={this.getPreviousQuote} >

        </button>
        <p className="quote-text">
          {'"'}{this.getCurrentQuote()}{'"'}
        </p>
        <button className="quote-button"
          onClick={this.getNextQuote}>
        </button>
      </Container >
    )
  }
}
