import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'




export class cards extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.title,
            name: this.name,
            btag: this.btag,
            teams: this.teams,
            imagelink:this.Image,
            isShown: true
        }
        this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            this.setState(state => ({
                isShown: !state.isShown
            }));
  }
    render() {

        return (
            <div style={{padding:"10px"}}>
                <img style={{height:"auto",width:"auto",maxWidth:"100%" , margin:"0px"} } src={this.props.imagelink}/>

              </div>
        )
    }
}

export default cards
