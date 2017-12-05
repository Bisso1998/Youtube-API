import React from "react";
import {render} from "react-dom";
const APIKey = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA';
const channelID = 'UCqwUrj10mAEsqezcItqvwEw';
var maxRes;
var API;
class App extends React.Component {
      constructor(props){
            super(props);
            this.state = {
                  resultyt: [],
                  maxRes: null
            };
      }
      clicked()
      {
       fetch(API)
      .then((response) => response.json())
      .then((responseJson) => {
            console.log(responseJson);
            const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
            console.log("resultyt: " + resultyt);
            this.setState({resultyt: resultyt});
            // console.log(resultyt);
      })
      .catch((error) => {
        console.error(error);
      });
            console.log("Clcked");
      }
      changeMaxRes(event)
      {
            this.setState({
                  maxRes:  event.target.value,
            });
            console.log("maxRes1 = " + this.state.maxRes);
      }
      render() {
            console.log("Max is :" + this.state.maxRes);
            API = `https://www.googleapis.com/youtube/v3/search?key=${APIKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${this.state.maxRes}`;
            console.log("API is: " + API);

            // console.log(this.state.resultyt);
            return (
                  <div className="container text text-center" >
                  <br/>
                  <br/>
                  <input type="number" value= {this.state.value} onChange = {this.changeMaxRes.bind(this)} /> 
                  <br/>
                  <br/>
                  <button className="btn btn-success" onClick = {this.clicked.bind(this)}>Get Vines </button>
                  <br/> <br/>
                  {
                        this.state.resultyt.map((link,i) => {
                              console.log(link);
                              var frame = <div className="container" key={i}><iFrame  width="560" height="315" src= {link} frameBorder="0"  allowFullScreen></iFrame></div>
                              return frame;
                        })
                  }
                  {this.frame}
                  </div>
            );
      }
}
render(<App/>,window.document.getElementById('app'));