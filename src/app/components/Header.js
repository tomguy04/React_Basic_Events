import React from 'react';

// export class Header extends React.Component {
// make it stateless!
export const Header = (props) => {
    // render(){
        return(
            <div className='container'>
                <nav className='navbar navbar-default'>
                    <div className='navbar-header'>
                        <ul className='nav navbar-nav'>
                            <li><a href='#'>{props.homeLink}</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
// }