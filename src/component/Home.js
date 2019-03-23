import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
	state = {}
	render() {
		return (
			<div className='home'>
				<Image src='./img/redemption.jpg' className='home-img'/>
			</div>
		);
	}
}

export default Home;