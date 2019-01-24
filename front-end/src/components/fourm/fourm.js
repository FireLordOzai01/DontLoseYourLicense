import React, { Component } from 'react';
import './fourm.css';

class Fourm extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Fourm Page</h1>
                <div>
                    <form className="form-inline">
                    <div className="container input-button-combo">
                        <div className="row">
                            <div classname="col-md-8">
                                <input
                                    // value={this.state.}
                                    // onChange={e => this.setState({  })}
                                    type="text" className="form-control post-input" placeholder="Post!" />
                            </div>
                            <div classname="col=">
                                <button
                                    className="btn btn-primary input-button"
                                    // onClick={(e)=>this.matchPasswords(e)}
                                >Share</button>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
                <div>
                    <h3 id="mapped-post">Mapped Post</h3>
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