import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';
import Title from './Title';

class App extends Component {
    state = {
        howToPlayMessage: ''
    }

    onClickSubmit = () => {

         this.setState({
            howToPlayMessage: 'hello how are you'
        })
        // return (
        //     <div>
        //         this.state.howToPlayMessage;
        //     </div>
        // )
        
        
    }
    render() {
        return(
            <div>
                  <Title howtoplay={this.onClickSubmit}/>

            </div>
          

        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));