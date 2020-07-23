import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardImage, MDBCardBody, MDBTableBody, MDBTable, MDBBtn } from 'mdbreact';
import img1 from '../Assets/Section-1/imageA.png'
import img2 from '../Assets/Section-1/imageB.png'
import img3 from '../Assets/Section-1/imageC.png'
// section 2
import img4 from '../Assets/Section-2/hongkong.png'
import img5 from '../Assets/Section-2/japan.png'
import img6 from '../Assets/Section-2/singapore.png'
// section 3
import img7 from '../Assets/Section-3/imageSmall_1.png';
import img8 from '../Assets/Section-3/imageSmall_2.png';
import img9 from '../Assets/Section-3/imageSmall_3.png';
import img10 from '../Assets/Section-3/imageSmall_4.png';
import img11 from '../Assets/Section-3/imageSmall_5.png';
import img12 from '../Assets/Section-3/imageSmall_6.png';

export const Section = (props) => {
    const { heading, content, button } = props;

    return (<MDBContainer className="section">
        <h1 className="section_heading">{heading}</h1>
        <MDBRow style={{ marginTop: 40 }}>
            {content.map((data, index) => {
                return <MDBCol lg={4} md={4} sm={10}>
                    <MDBCard style={content.length > 3 ? {marginTop: 15} : {}}>
                        <MDBCardImage className="img-fluid" src={index == 1 ? img1 : index == 2 ? img2 : img3} waves />
                        <MDBCardBody>
                            <h1>{data.name}</h1>
                            <p>
                                {data.address1}
                                {data.address2}
                            </p>
                            <hr />
                            <MDBTable>
                                <MDBTableBody>
                                    <tr>
                                        <td>Year of Completion</td>
                                        <td>{data.YearsOfCompletion}</td>
                                    </tr>
                                    <tr>
                                        <td>Land Tenure</td>
                                        <td>{data.LandTenure}</td>
                                    </tr>
                                    <tr>
                                        <td>Site Area (sqft)</td>
                                        <td>{data.SiteArea}</td>
                                    </tr>
                                    <tr>
                                        <td>NLA 9 (sqft)</td>
                                        <td>{data.NLA9}</td>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable>
                            <hr />
                            <MDBTable>
                                <MDBTableBody>
                                    <tr>
                                        <td>Carpart Lots</td>
                                        <td>{data.CarparkLots}</td>
                                    </tr>
                                    <tr>
                                        <td>Components</td>
                                        <td>{data.Component}</td>
                                    </tr>
                                    <tr>
                                        <td>Major Tenants</td>
                                        <td>{data.MajorTenants}</td>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable>
                            <div style={{ textAlign: 'center' }}>
            <MDBBtn className="section_btn" href="#" >{button}</MDBBtn>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            })}
        </MDBRow>
    </MDBContainer>)
}

export const Section2 = (props) => {
    const { heading, content } = props;

    return (<MDBContainer className="section">
        <h1 className="section_heading">{heading}</h1>
        <MDBRow style={{ marginTop: 40 }}>
            {content.map((data, index) => {
                return (<MDBCol lg={4} sm={6} >
                    <MDBCard>
                        <MDBCardImage className="section2_img img-fluid" src={index == 1 ? img4 : index == 2 ? img5 : img6} waves />
                        <MDBCardBody style={{ background: '#f3f5f5' }}>
                            <h1 style={{fontWeight: 600}}>{data.name}</h1>
                            <p>
                                ({data.properties}) properties
                            </p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>)
            })}
        </MDBRow>
    </MDBContainer>)
}

export const Section3 = (props) => {
    const { content } = props

    return (<div className="green_card" >
        <MDBContainer className="section" >
            <MDBRow style={{ marginTop: 40 }}>
                {content.map((data, index) => {
                    return (<MDBCol lg={6} sm={10} >
                        <MDBCard className="section3_card" >
                            <MDBRow>
                                <MDBCol lg={4} sm={4} >
                                    <img className="section3_img" src={index == 1 ? img8 : index == 2 ? img9 : index == 3 ? img10 : index == 4 ? img11 : img10} waves />
                                </MDBCol>
                                <MDBCol lg={8} sm={8} >
                                    <h4 style={{ fontWeight: 500 }}>{data.name}</h4>
                                    <p style={{ fontSize: 13, color: 'gray' }}>
                                        {data.address1}
                                        {data.address2}
                                    </p>
                                    <span className="red" >
                                            Year of Completion
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            {data.YearsOfCompletion}
                                    </span>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol lg={4} style={{ borderRight: '1px solid lightgray' }}>
                                            <span style={{ color: 'gray', fontSize: 13 }}>{data.LandTenure}</span>
                                            <br />
                                            <span style={{ color: 'gray', fontSize: 10, fontWeight: 500 }}>Land Tenure</span>
                                        </MDBCol>
                                        <MDBCol lg={4} style={{ borderRight: '1px solid lightgray' }}>
                                            <span style={{ color: 'gray', fontSize: 13 }}>{data.SiteArea}</span>
                                            <br />
                                            <span style={{ color: 'gray', fontSize: 10, fontWeight: 500 }}>Site Area (sqft)</span>
                                        </MDBCol>
                                        <MDBCol lg={4} >
                                            <span style={{ color: 'gray', fontSize: 13 }}>{data.NLA9}</span>
                                            <br />
                                            <span style={{ color: 'gray', fontSize: 10, fontWeight: 500 }}>NLA 9 (sqft)</span>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>)
                })}
            </MDBRow>
            <br />
            <div style={{textAlign: 'center'}}>
                <MDBBtn className="btn_outline">View All</MDBBtn>
            </div>
        </MDBContainer>
    </div >)
}