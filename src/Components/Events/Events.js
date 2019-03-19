import React from 'react';
import 'tachyons';
import './Events.css';
import EventList from '../EventList/EventList.js'





const Events = () =>{
	return(
		<div >
		 <div className="events2">
		  <p className="title">
		     Events
		  </p>
		  <p className="heading">
		    We have series of interesting and engaging fun and coding events in this year’s edition of zenith. Here is the list :-
		  </p>
		  </div>
          <EventList/>
		</div>

		);
}


export default Events;