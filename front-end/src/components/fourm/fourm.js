import React, { Component } from 'react';
import './fourm.css';

class Fourm extends Component {
    state = {}
    render() { 
        return ( 
            <div>
                <h1>Fourm Page</h1>
                <div>
                    <form className="form-inline">
                        <input
                            // value={this.state.}
                            // onChange={e => this.setState({  })}
                            type="text" className="form-control post-input" placeholder="Post!" />
                        <button
                            className="btn btn-primary fourm-button form-control"
                            // onClick={(e)=>this.matchPasswords(e)}
                        >Share</button>
                    </form>
                </div>
                <div id="section">
                    <h1>post comment combo</h1>
                    <div>
                        <h3 id="mapped-post">Mapped Post</h3>
                    </div>
                    <div>
                        <h4 id="comment-section">Comment Section</h4>
                    </div>
                </div>
                <div>
                    <h1>Spacing</h1>
                </div>
            </div>
         );
    }
}
 
export default Fourm;