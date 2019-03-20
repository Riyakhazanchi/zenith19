import React, { Component } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import './ScrollingHorizontally.css';
import Event1 from '../Components/EventList/Event1.js';
 
class ScrollingHorizontally extends Component {
  render() {
    const child = { width: `300em`, height: `100%`}
    return (
      <body className="events">
        <HorizontalScroll>
          

        </HorizontalScroll>
      </body>
 
    )
  }
}

export default ScrollingHorizontally;