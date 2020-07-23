import React from 'react';
import { MDBCard, MDBInput, MDBCol, MDBRow } from 'mdbreact';

export const Header = (props) => {
    const { message1, message2 } = props
    return (<div className="header" style={{ background: `url(${require('../Assets/mapGraphic.png')}) no-repeat`, minHeight: 350, marginTop: 60 }}>
        <h2 className={'header_content'}>
            <span >{message1}</span> <br />
            <span >{message2}</span>
            {/* <span className="line" ></span> */}
        </h2>
        <SearchCard />
    </div>)
}

export const SearchCard = (props) => {
    return (<MDBCard className="search_card" >
        <MDBRow >
            <MDBCol lg={4}>
            <div className="search_input" >
                    <span>Search and Find</span> <br/>
                    <span>Title, Keyword, address, zip or property id..</span>
                    </div>
            </MDBCol>
            <MDBCol lg={4}>
            <div className="search_input" >
                    <span>Location</span> <br/>
                    <span>Singapore, Singapore</span>
                    </div>
            </MDBCol>
            <MDBCol lg={4}>
                <div className="search_input" >
                    <span>Type</span> <br/>
                    <span>Select</span>
                    </div>
            </MDBCol>
        </MDBRow>
        <div className="search_btn">
            <img src={require('../Assets/Icons/iconSearch_2.png')} />
        </div>
    </MDBCard>)
}