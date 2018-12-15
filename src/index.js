import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';
import Title from './Title';

class App extends Component {
   
    render() {
        return(
            <Title />
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));