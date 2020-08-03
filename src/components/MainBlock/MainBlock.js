import React, { Component } from 'react';

import CardAnnouncement from '../CardAnnouncement/CardAnnouncement';

export default class MainBlock extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             AnnouncementData: []
        }
    }

    
    
    AnnouncementObjData = {
        idCard: 1,
        titleCard: 'Customers a chance chance cha',
        dateCard: '14.05.2020',
        descriptionCard: 'We are offering all Doe customers a chance to save up to 45% on computer software this Saturday, March 15, from 8:00 a.m. to 9:00 p.m., at our Main Street store. Receive discounts on all the latest software packages by bringing canned food for the homeless. The more food you bring the more you',
        contactCard: 'mail@mail.com'
    }
    
    render() {
        return (
            <div className='d-flex aling-items-center flex-fill flex-column'>
                <CardAnnouncement idCard={this.AnnouncementObjData.idCard}
                                titleCard={this.AnnouncementObjData.titleCard}
                                descriptionCard={this.AnnouncementObjData.descriptionCard}
                                dateCard={this.AnnouncementObjData.dateCard}
                                contactCard={this.AnnouncementObjData.contactCard} />
            </div>
        )
    }
}
