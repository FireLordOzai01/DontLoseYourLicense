import React, { Component } from 'react';
import accounticon from '../../Assets/accounticon.jpg'
import './uploadPhoto.css';


class UploadPhoto extends Component {

    state = {
        image: accounticon
    }


    onChange(e) {
        let files=e.target.files;

        let reader = new FileReader();
        if (files.length === 0) {
            return
        }

        reader.readAsDataURL(files[0]); 
        reader.onload=(e)=> {
            
            this.setState({ image: e.target.result })  
            
        }
        
    }
    

    render() {
        return (
            <div>
                <div className ="textcenter" onSubmit={this.onFormSubmit}>
                    <h1 className ="textcenter font"> User Picture Upload </h1>
                    <input type="file" name="file" id="file" className="nav-item inputfile" onChange={(e)=>this.onChange(e)}/>
                    <label className="nav-item" for="file">Choose a file</label>
                    <div >
                        <img className ="imgresize"  src={this.state.image} alt=""/>
                    </div>
                    <input type="submit"/>
                    
                </div>
            </div>
        )

    }
}

export default UploadPhoto;
