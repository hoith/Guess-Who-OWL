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
            <div style={{ margin:"5px", borderWidth:"1px", borderStyle: "solid", borderColor: "white"}}>
                {console.log(this.state.isShown)}
            {this.state.isShown==false
                ? <img style={{visibility:"hidden", width:"125px", margin:"10px"}} src={this.props.imagelink}/>
                :  <img onClick={this.handleClick} style={{width:"125px", margin:"10px"} } src={this.props.imagelink}/>
              }
              </div>
        )
    }
}

export default cards
