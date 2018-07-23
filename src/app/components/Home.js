import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            age: props.initialAge, //don't assign props to state unless it is the initial value.
            status: 0,
            homeLink:props.initialLinkName
        };
    }
    onMakeOlder(){
        this.setState({ //allows us to change the state and checks to see if we need to re-render the page.
            age: this.state.age + 3
        }); 

    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event){
        this.setState({
            homeLink:event.target.value
        });
    }

    render(){
        console.log(this.props); //log the data passed to this component
        return(
            <div>
                <p>In a new component!</p>
                {/* <p>Your name is {this.props.name}, your age is {this.props.age}</p> */}
                {/* since we have stored props in the constructor, we don't need to refer to props for this */}
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)}className='btn btn-primary'>Make me older!</button>
                <hr />
                <button onClick={this.props.greet} className='btn btn-primary'>Greet</button>
                <hr/>
                {/* <input type = 'text' value={this.props.initialLinkName}/>  */}
                {/* two way binding requires onChange handler */}
                {/* default javascript event object is passed and available*/}
                <input type = 'text' value={this.state.homeLink} 
                    onChange={(event) => this.onHandleChange(event)}/>

                <button onClick={this.onChangeLink.bind(this)} className='btn btn-primary'>Change Header Link</button>
            </div>
        );
    }
}

Home.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName:PropTypes.string
};

