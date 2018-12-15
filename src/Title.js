import React, {Component} from 'react';
import HowToPlay from './HowToPlay';

class Title extends Component {

    howToPlay = () => {
      
        console.log('hi')
        return (
            <div>
                hello how are you
            </div>
        )
    }

    render() {
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
                    <form onSubmit={this.HowToPlay}>
                        <button type="submit" className="title-button1">How To Play</button>
                        <button type="submit" className="title-button2">Play</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Title;