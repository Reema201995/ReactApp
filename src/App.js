import React, {Component} from 'react';
import Info from './Info';

class App extends React.Component {
    state = {
        list: [
            'React is a free and open-source front-end JavaScript library  - one of the most popular ones.',
            'React is not a framework (unlike Angular).',
            'React is an open-source project created by Facebook.',
            'React was created by Jordan Walke, a software engineer at Facebook on 29th May 2013.',
            'React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js.'
        ]
    };

    removeData = (index) => {
        const { list } = this.state;
    
        this.setState({
            list: list.filter((list, i) => { 
                return i !== index;
            })
        });
    }

    render() {

        return (
            <div className="App">
            <h1>Hello, React!</h1>
            <Info infoData={this.state.list} removeData={this.removeData} />
            </div>
        );
    }
}

export default App;