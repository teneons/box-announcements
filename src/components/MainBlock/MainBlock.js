import React, { Component } from 'react';

import CardAnnouncement from '../CardAnnouncement/CardAnnouncement';

export default class MainBlock extends Component {

    AnnouncementEx = {
        idCard: 1,
        titleCard: 'Customers a chance chance cha',
        dateCard: '14.05.2020',
        descriptionCard: 'We are offering all Doe customers a chance to save up to 45% on computer software this Saturday, March 15, from 8:00 a.m. to 9:00 p.m., at our Main Street store. Receive discounts on all the latest software packages by bringing canned food for the homeless. The more food you bring the more you',
        contactCard: 'mail@mail.com'
    }
    
    render() {
        return (
            <div className='d-flex aling-items-center flex-fill flex-column'>

                <CardAnnouncement idCard={this.AnnouncementEx.idCard}
                                titleCard={this.AnnouncementEx.titleCard}
                                descriptionCard={this.AnnouncementEx.descriptionCard}
                                dateCard={this.AnnouncementEx.dateCard}
                                contactCard={this.AnnouncementEx.contactCard} />
                                                <CardAnnouncement idCard={this.AnnouncementEx.idCard}
                                titleCard={this.AnnouncementEx.titleCard}
                                descriptionCard={this.AnnouncementEx.descriptionCard}
                                dateCard={this.AnnouncementEx.dateCard}
                                contactCard={this.AnnouncementEx.contactCard} />
                                                <CardAnnouncement idCard={this.AnnouncementEx.idCard}
                                titleCard={this.AnnouncementEx.titleCard}
                                descriptionCard={this.AnnouncementEx.descriptionCard}
                                dateCard={this.AnnouncementEx.dateCard}
                                contactCard={this.AnnouncementEx.contactCard} />

            </div>
        )
    }
}
