import React, { Component } from 'react';

import AnnouncementsBlock from '../AnnouncementsBlock/AnnouncementsBlock';

export default class MainBlock extends Component {
    
    render() {
        return (
            <div className='d-flex col-12 vh-60 bg-dark'>
                <AnnouncementsBlock />
            </div>
        )
    }
}
