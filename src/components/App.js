import React,{ Component } from 'react';
// import Meetups from './Meetups';
import Login from './Login';

class App extends Component {
    render () {
        return (
            <div className='app'>
                {/* <Meetups /> */}
                <Login />
            </div>
        );
    }
}

export default App;