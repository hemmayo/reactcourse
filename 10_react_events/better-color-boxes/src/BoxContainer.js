import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
	static defaultProps = {
		numBoxes  : 18,
		allColors : [
			'#BA68C8',
			'#9575CD',
			'#7986CB',
			'#9C27B0',
			'#673AB7',
			'#3F51B5',
			'#7B1FA2',
			'#512DA8',
			'#303F9F',
			'#E91E63',
			'#F06292',
			'#C2185B'
		]
	};
	render() {
		const boxes = Array.from({ length: this.props.numBoxes }).map(() => <Box colors={this.props.allColors} />);
		return <div className='BoxContainer'>{boxes}</div>;
	}
}

export default BoxContainer;
