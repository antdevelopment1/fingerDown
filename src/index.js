import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';
import Title from './Title';

class App extends Component {
    
    render() {
        return(
            <div>
                  <Title />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));