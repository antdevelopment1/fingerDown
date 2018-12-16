import React, {Component} from 'react';
import Text from './Text';


class Title extends Component{

    constructor () {
        super();
        this.state = {printText:false};
     } 
    
   howToPlay = () => {
    this.setState({printText:true});
   }

   render () {
    
    return (
        <div className="title-container">
            <div>    
                <div className="title-h1-container">
                    <h1 className="title-h1">Finger Down!</h1>
                </div>
                <div className="title-p-container">
                    <p className="title-p">From the makers of Heads Up!</p>
                </div>
                <div className="title-button-container">
                    <button className="title-button1" onClick={this.howToPlay} >How To Play</button>
                    <button className="title-button2">Play</button>
                </div>
                <div className="">{this.state.printText && <Text></Text> }</div>
            </div>
        </div>
    )
   }
        
    }
    

export default Title;