import React, { Component } from 'react';

import ModalAdd from '../BtnAdd/ModalAdd';

export default class BtnAdd extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-lg btn-warning font-weight-bold text-uppercase" data-toggle="modal" data-target="#ModalAdd"><i class="fa fa-plus"></i>Add</button>
                <ModalAdd />
             </div>
        )
    }
}
