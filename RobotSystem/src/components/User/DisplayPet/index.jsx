import React, { Component } from 'react'
import Petitem from './RobotItem';
import PetService from '../../../Services/RobotService';
import { Row } from 'react-bootstrap';
import { MdCancel } from 'react-icons/md';

import './index.css'
import RobotService from '../../../Services/RobotService';

export default class DisplayRobot extends Component {
    constructor(props) {
        super(props)

        this.state = {
            det: [],
            breed : ""
        };

        this.onChangePets = this.onChangePets.bind(this);
        this.searchFrom = this.searchFrom.bind(this);
       
    }

    componentDidMount() {
        this.retrieveDetails();

    }

    retrieveDetails = () => {
        RobotService.getall().then(response => {
            this.setState({
                det: response.data.data
            });
            console.log(response.data);
        })
            .catch(e => {
                console.log(e);
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {

    }

    onChangePets(e) {
        const breed = e.target.value;

        this.setState({
            breed: breed
        });
    }

    cancel = () =>{
        this.retrieveDetails();
    }

    searchFrom = () => {
        RobotService.findByname(this.state.name)
            .then(response => {
                this.setState({
                    det: response.data.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { breed } = this.state;

        return (
            <div className="container" >
                <div className="col-md-8">
                    <div classname="col-md-8">
                        <div classname="input-group mb-3">
                        </div>
                    </div></div>
                    <Row>
                    <div class="text-center">
                        <h1 class="head-title">Robots</h1>
                    </div>
                </Row>
                {/* Search bar & search button */}
                <Row>
                    <div className="col-md-4" style={{ marginTop: "0%", marginLeft: "65%" }}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search By name"
                                value={breed}
                                onChange={this.onChangePets}
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-outline-primary"
                                    type="button"
                                    onClick={this.searchFrom}
                                >
                                    Search
                                </button>
                                <i>
                                 <button class="btn btn-outline-primary" style = {{marginLeft : "5px"}}
                                  onClick={this.cancel}><MdCancel  size="24"/></button>
                                </i>
                            </div>
                        </div>
                    </div>
                </Row>
                <main className="grid" style={{ marginTop: '0cm' }}>
                    {
                        this.state.det.map((data, id) => {

                            return <Petitem data={data} key={id} />
                        })
                    }
                </main>
            </div>

        )
    }
}
