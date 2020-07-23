import React from 'react';
import NavBar from '../Components/navBar';
import { Header } from '../Components/header';
import { Section, Section2, Section3 } from '../Components/section';

const data1 = [
    {
    name: 'Robinson 77',
    address: '77 Robinson Road, Sheton',
    address2: 'Way-Robinson Rd-Cecil St, Singapore',
    YearsOfCompletion: 2019,
    LandTenure: '99 Years',
    SiteArea: '27,281',
    NLA9: '3,700,000',
    CarparkLots: 900,
    Component: 'Office, Retail, Hotel',
    MajorTenants: 'CITI Bank, Allianz Mitsui'
},
    {
    name: 'Mapletree Business City',
    address: '77 Robinson Road, Sheton',
    address2: 'Way-Robinson Rd-Cecil St, Singapore',
    YearsOfCompletion: 2019,
    LandTenure: '99 Years',
    SiteArea: '27,281',
    NLA9: '3,700,000',
    CarparkLots: 900,
    Component: 'Office, Retail, Hotel',
    MajorTenants: 'CITI Bank, Allianz Mitsui'
},
    {
    name: 'Marina One East Tower',
    address: '77 Robinson Road, Sheton',
    address2: 'Way-Robinson Rd-Cecil St, Singapore',
    YearsOfCompletion: 2019,
    LandTenure: '99 Years',
    SiteArea: '27,281',
    NLA9: '3,700,000',
    CarparkLots: 900,
    Component: 'Office, Retail, Hotel',
    MajorTenants: 'CITI Bank, Allianz Mitsui'
}
]

const data2 = [
    {
        name: 'Singapore',
        properties: 218 
    },
    {
        name: 'Sydney',
        properties: 100 
    },
    {
        name: 'Japan',
        properties: 50 
    }
]

export default class SearchPage extends React.Component {
    render() {
        return(<div>
            <NavBar />
            <Header message1={'Looking...'} message2={'for the right house for you!'} />
            <Section heading="Deals Closing" content={data1} button="Register To Bid" />
            <hr />
            <Section2 heading="Explore Country Opportunities" content={data2} />
            <Section3 content={data1.concat(data1)} />
            <Section heading="Invest Around The World" content={data1.concat(data1)} button="Execute NDA"/>
        </div>)
    }
}