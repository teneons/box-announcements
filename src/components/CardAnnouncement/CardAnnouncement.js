import React, { Component } from 'react'

export default class CardAnnouncement extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        const {idCard, titleCard, descriptionCard, dateCard, contactCard} = this.props;

        return (
            <div className='card container col-sm-4 m-3' id={idCard}>
                <div className='card-body d-flex flex-column'>
                    <span className='card-title text-uppercase font-weight-bold' style={{fontSize: '3vh'}}>{titleCard}</span>
                    <span className='card-subtitle text-muted'><i className="fa fa-calendar"></i> <span className='font-weight-bold'>{dateCard}</span></span>
                    <p className='card-text'>{descriptionCard}</p>
                    <span className='card-text'><i className="fa fa-comments"></i> {contactCard}</span>
                    <div className='d-flex flex-a'>
                        <button type='button' className='btn btn-outline-secondary mt-2 col-2'><i className="fa fa-pencil"></i></button>
                        <button type='button' className='btn btn-outline-secondary mt-2 col-2 ml-2'><i className="fa fa-trash"></i></button>
                    </div>
                </div>
                
            </div>
        )
    }
}
