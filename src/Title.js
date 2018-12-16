import React, {Component} from 'react';


class Title extends Component{
    
//    HowToPlay = () => {
//        console.log('hi')
//        return (
//            <div>Hello how are u</div>
//        )
//    }
state = {
    message: ''
}

thing = (state) => {
    console.log(state)
    this.setState({message: 'hello'})
    console.log(state)
    return state
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
             
                    <button type="submit" value={this.state.term} className="title-button1" onClick={this.thing} >How To Play</button>
                    <button type="submit" className="title-button2">Play</button>
                    {/* <this.HowToPlay /> */}
                </div>
            </div>
        </div>
    )
   }
        
    }
    

export default Title;