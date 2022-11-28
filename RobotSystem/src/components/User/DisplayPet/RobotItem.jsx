import React, { Component } from 'react'
import './RobotItem.css'
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';



export default class Petitem extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {

    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() { }

    navigateUpdatePage(e) {
        window.location = `/shopping-cart`
    }


    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return (
            <Card border="primary" style={{ color: "blue", width: '100%' , marginBottom: '-0.5cm'}} >

                <div className="product-tumb" style={{ marginTop: '0.5cm' }}>
                    <img width="200" height="200" src={this.props.data.image} alt="" />
                </div>
                <div className="product-details" >
                    <span className="product-catagory"> <h5>{this.props.data.name}</h5></span>
                    <h5><a href="#name">Available : {this.props.data.stock}</a></h5>
                    <p>{this.props.data.createdAt}</p>
                    <div className=" product-bottom-details">RS.{this.props.data.price}.00</div>
                     <Button onClick={e => this.navigateUpdatePage(e, this.props.data.id)} variant="primary" type="submit" >
                       Add To Cart
                    </Button> {''}
                    <div className="product-bottom-details">

                        <div className="product-links">
                            <a href="#name"><i className="fa fa-heart" /></a>
                        </div>

                    </div>
                </div>
            </Card >
        )
    }
}
