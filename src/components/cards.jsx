import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'



function myFunction() {
    document.getElementById("ThisCard").style.visibility = "hidden";
  }

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

        }
    render() {
        return (
        <Card id="ThisCard"style={{ width: '10rem',border:'dark',bg:'dark' }}>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Img  variant="top" src={`${this.props.imagelink}`}/>
            <Card.Body >
                    <Card.Text>
                    {this.props.btag}
                    </Card.Text>
                    <Card.Text>
                    {this.props.Teams.map((key)=> <il>{key}</il>)}
                    </Card.Text>
                    </Card.Body>
                    </Card>
        )
    }
}

export default cards
