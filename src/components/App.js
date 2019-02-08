import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { actionHere } from '../actions'

const PageOne = () => {
    return (
        <div>
            <p>Page One</p>
            <Link to="/pagetwo">Go to Page Two</Link>
        </div>
    )
}

const PageTwo = () => {
    return (
        <div>
            <p>Page Two</p>
            <Link to="/">Go to Page One</Link>
        </div>
    )
}

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={PageOne} />
                        <Route path="/pagetwo" component={PageTwo} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, { actionHere })(App)