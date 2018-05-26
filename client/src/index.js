import React, { Component } from 'react';
import { render } from 'react-dom';




class App extends Component {
    state = {
        events: [],
    }

    getData = () => {
        console.log('hello there')
        fetch('/api/events')
            .then(res => res.json())
            .then(res => this.setState((prevState) => ({
                events: prevState.events.concat(res),
            }))
        );
    }

    componentDidMount() {
        this.getData();
    }

    render () {
        const { events } = this.state;
        return (
            <div>
                <h1>Here is my project</h1>
                <ul>
                    {!events.length ? 
                        <h1>Sorry no data</h1> : 
                        events.map((event) => <li key={event.id}>{event.function}</li> )
                    }
                </ul>
            </div>
        );
    }
}
    

render(
    <App />,
    document.getElementById('root')
);