import React from 'react';

import './Sections.css'
import secBackgroung from "./resources/SectionsBackground.png"
import sec1Img from "./resources/sec1.png"
import sec2Img from "./resources/sec2.png"
import sec12Img from "./resources/sec12.png"
import sec14Img from "./resources/sec14.png"
import sec15Img from "./resources/sec15.png"

const imgStyle = {
	display: 'block',
	zIndex:-1,
	position: 'absolute',
	width:'100%'
};

const ulStyle = {
  	zIndex:2,
  	position: 'absolute'
};

const sec1Style = {
  	marginTop: '15vh',
  	marginLeft: '9vh'
};
const sec2Style = {
  	marginTop: '15vh',
  	marginLeft: '9vh'
};
const sec12Style = {
  	marginTop: '15vh',
  	marginLeft: '13vh'
};
const sec14Style = {
  	marginTop: '15vh',
  	marginLeft: '18vh'
};
const sec15Style = {
  	marginTop: '15vh',
  	marginLeft: '19vh'
};
class Sections extends React.Component {

	render() {
		return (
			<div>
				<img src={secBackgroung} style={imgStyle} />
				<div>
				<img class="hvr-grow" src={sec1Img} style={sec1Style}/>
				<img class="hvr-grow" src={sec2Img} style={sec2Style}/>
				<img class="hvr-grow" src={sec12Img} style={sec12Style}/>
				<img class="hvr-grow" src={sec14Img} style={sec14Style}/>
				<img class="hvr-grow" src={sec15Img} style={sec15Style}/>
				</div>
			</div>
		);
	}
}

// <ul style={ulStyle}>
// 					<li>Mador 1</li>
// 					<li>Mador 2</li>
// 					<li>Mador 12</li>
// 					<li>Mador 14</li>
// 					<li>Mador 15</li>
// 				</ul> 

export default Sections;
