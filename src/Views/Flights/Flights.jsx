
import React, { memo } from "react";
import { Carousel } from 'react-carousel-minimal';

const Flights = () => {
    const data = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
            caption: "San Francisco"
        },
        {
            image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
            caption: "Scotland"
        },
        {
            image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
            caption: "Darjeeling"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
            caption: "San Francisco"
        },
        {
            image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
            caption: "Scotland"
        },
        {
            image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
            caption: "Darjeeling"
        },
        {
            image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
            caption: "San Francisco"
        },
        {
            image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
            caption: "Scotland"
        },
        {
            image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
            caption: "Darjeeling"
        }
    ];

    const slides = [
        {
            city: 'Paris',
            country: 'France',
            img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
        },
        {
            city: 'Singapore',
            img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
        },
        {
            city: 'Prague',
            country: 'Czech Republic',
            img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
        },
        {
            city: 'Amsterdam',
            country: 'Netherlands',
            img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
        },
        {
            city: 'Moscow',
            country: 'Russia',
            img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
        },
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (

        <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <h2>React Carousel Minimal</h2>
            <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
            <div style={{
                padding: "0 20px"
            }}>
                <Carousel
                    data={data}
                    time={2000}
                    width="80vw"
                    height="50vh"
                    captionStyle={captionStyle}
                    radius="5px"
                    slideNumber={false}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="center"
                    automatic={false}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={true}
                    thumbnailWidth="100px"
                    style={{
                        textAlign: "center",
                        maxWidth: "850px",
                        maxHeight: "500px",
                        margin: "40px auto",
                    }}
                />
            </div>
        </div>
    );
}

export const FlightsScreen = memo(Flights)
