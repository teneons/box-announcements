import React, { Component } from 'react';

import CardAnnouncement from '../CardAnnouncement/CardAnnouncement';

export default class MainBlock extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             AnnouncementData: [this.o1, this.o2, this.o3]
        }
    }

    // addNewAnnouncement = () => {

    // }
    
    o1 = {
        idCard: 1,
        titleCard: 'Customers a chance chance cha',
        dateCard: '14.05.2020',
        descriptionCard: 'We are offering all Doe customers a chance to save up to 45% on computer software this Saturday, March 15, from 8:00 a.m. to 9:00 p.m., at our Main Street store. Receive discounts on all the latest software packages by bringing canned food for the homeless. The more food you bring the more you',
        contactCard: 'mail@mail.com'
    }
    o2 = {
        idCard: 2,
        titleCard: 'Customers a chance chance cha',
        dateCard: '20.06.2020',
        descriptionCard: 'We are offering all Doe customers a chance to save up to 45% on computer software this Saturday, March 15, from 8:00 a.m. to 9:00 p.m., at our Main Street store. Receive discounts on all the latest software packages by bringing canned food for the homeless. The more food you bring the more you',
        contactCard: 'mail@mail.com'
    }
    o3 = {
        idCard: 3,
        titleCard: 'Customers a chance chance cha',
        dateCard: '27.06.2020',
        descriptionCard: 'We are offering all Doe customers a chance to save up to 45% on computer software this Saturday, March 15, from 8:00 a.m. to 9:00 p.m., at our Main Street store. Receive discounts on all the latest software packages by bringing canned food for the homeless. The more food you bring the more you',
        contactCard: 'mail@mail.com'
    }
    
    render() {
        const out = this.state.AnnouncementData.map((data)=> {

            return(
                <CardAnnouncement idCard={data.idCard} titleCard={data.titleCard} dateCard={data.dateCard}
                                descriptionCard={data.descriptionCard} contactCard={data.contactCard} />
            )
        })

        return (
            <div className='d-flex aling-items-center flex-fill flex-column'>
                {out}
            </div>
        )
    }
}
