import React, { Component } from 'react';
import './quote.css'

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: ["The purpose of our lives is to be happy.",
                     "Life is what happens when you’re busy making other plans.",
                     "Get busy living or get busy dying.",
                     "You only live once, but if you do it right, once is enough.",
                     "Many of life’s failures are people who did not realize how close they were to success when they gave up."],
            quote: "",
            authors: [" Dalai Lama", "John Lennon", "Stephen King", "Mae West", "Thomas A. Edison"],
            author:""
         }
    }

    handleClick = () => this.setState({
        
        quote: this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)],
        author: this.state.authors[this.state.quotes.indexOf(this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)])],
        
    })


    render() {
        const gen = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
        const colors = ["Red", "lightGreen", " lightBlue", "yellow", "Purple", "pink", "cyan"]
        const setColor = colors[Math.floor(Math.random() * colors.length)]
        const styles = {
            color:setColor
        }
        const backStyle = {
            backgroundColor:setColor
        }

        return (
            
            <div >
                <div style={backStyle} id="quote-box">
                    
                    <h4 id="text">{gen}</h4>
                    <h4  id="author">--{this.state.authors[this.state.quotes.indexOf(gen)]}</h4>
                    
                    <button  className="" id="new-quote" onClick={this.handleClick}>New Quote</button>
                    <a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote">twitter</a>
                </div>
            </div>
         );
    }
   
}
 
export default Quote;