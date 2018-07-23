import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component{
    
    constructor(){
        //call super first if you are extending from a class.
        super();
        this.state ={
            homeLink : 'Home'
        };
        // we can now have access to this in onChangeLinkName
    }

    onGreet(){
        alert('Hello!');
    }

    onChangeLinkName(newName){
    // update homeLink to be the value of newName
        this.setState({
            homeLink: newName
        })
    }

    render(){
        return(
        <div className = 'container'>
            <div className = 'row'>
                <div className='col-xs-10 col-xs-offset-1'>
                    {/* <Header homeLink='Home'/> we don't send a string anymore, instead the value of homeLink in state. */}
                    <Header homeLink={this.state.homeLink}/>
                    
                </div>
            </div>
            <div className = 'row'>
                <div className='col-xs-10 col-xs-offset-1'>
                    <Home 
                        name = {'Max'} 
                        initialAge = {27} 
                         /* we don't need to bind to 'this' b/c 'this' is not used in the onGreet function */
                        greet={this.onGreet}
                        // pass a reference to the onChangeLinkName method to the Home Component
                        changeLink={this.onChangeLinkName.bind(this)}
                        initialLinkName={this.state.homeLink}
                    />
                    
                </div>
            </div>
        </div>
        );
    }
}


//render the App component in the app div in the index.html page.
render(<App/>, window.document.getElementById("app"));