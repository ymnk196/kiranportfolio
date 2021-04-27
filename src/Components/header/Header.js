import React, { Component } from 'react';
import image2 from '../../Components/portofolio/profile.jpg';
import Modal from 'react-bootstrap/Modal';
import  '../../Components/portofolio/Portofolio.css';
class Header extends Component {
     constructor(props) {
       super(props);
       this.state = {
          openPopUp : false
       } 
    }
    handleProfilePic = () => {
       this.setState({
            openPopUp : true
       },console.log(this.state.openPopUp));
    }
     handleProfilePicClose = () => {
       this.setState({
            openPopUp : false
       },console.log(this.state.openPopUp));
    }
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                       
                        </div>
                        <div class="col">
                            <center><h2 className="textColor headerAdjustment">Portfolio</h2></center>
                        </div>
                        <div class="col">
                            <div className="profileView">
                                <img className="headerProfileimageStyle" src={image2} onClick={this.handleProfilePic} alt="profilePic"/>
                            </div>
                             <center>
                            <div>
                               
                                <Modal
                                size="lg" 
                                show={this.state.openPopUp} 
                                onHide={this.handleProfilePicClose}
                                className="headerPopup"
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>Details</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="centerAdjustment">
                                             <img className="headerImageStylingForProfileExpanding" src={image2} alt="profilePic"/>
                                        </div>
                                        <div className="centerAdjustment">
                                            <h5>Kiran y</h5>
                                            <h5>ymnk196@gmail.com</h5>
                                            <h5>+918892646353</h5>
                                        </div>
                                    </Modal.Body>
                                </Modal> 
                                      
                            </div>
                            </center>
                         </div>
                    </div>
                </div>
            </div>   
        );
    }
}

export default Header;