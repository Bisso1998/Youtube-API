import React from "react";
import {render} from "react-dom";
const APIKey = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA';
const channelID = 'UCqwUrj10mAEsqezcItqvwEw';
var  maxRes;
var API; 
class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			resultyt: [],
			maxRes: null,
		};
	}
	clicked(event)
	{
	 fetch(API)
      .then((response) => response.json())
      .then((responseJson) => {
      	console.log(responseJson);
      	const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
      	console.log("resultyt: " + resultyt);
      	this.setState({resultyt: resultyt, maxRes: event.target.value});
      	// console.log(resultyt);
      })
      .catch((error) => {
        console.error(error);
      });
		console.log("Clcked");
	}
	render() {
		API = `https://www.googleapis.com/youtube/v3/search?key=${APIKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${maxRes}`;
			console.log(API);
      	// console.log(this.state.resultyt);
		return (
			<div className="container text text-center" >
			<br/>
			<br/>
			<input type="number" onChange = {this.clicked.bind(this)} /> 
			<br/>
			<br/>
			<button className="btn btn-success" onClick = {this.clicked.bind(this)}>Get Vines </button>
			<br/> <br/>
			{
				this.state.resultyt.map((link,i) => {
					console.log(link);
					var frame = <div className="container"><iFrame key={i} width="560" height="315" src= {link} frameBorder="0"  allowFullScreen></iFrame></div>
					return frame;
				})
			}
			{this.frame}
			</div>
		);
	}
}
render(<App/>,window.document.getElementById('app'));
