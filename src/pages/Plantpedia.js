import React from "react";
import styled from "styled-components";
import bg from "../assets/bgimg/plantpediapage.png";
import WateringButton from "../components/plantpedia/WateringButton";


const ExternalFrame = styled.div`
width:100vw;
height: 74vh;
padding-top: 7vh;
padding-bottom: 7vh;
background-image:url(${bg});
background-size: cover;
background-repeat:no-repeat;
@media (max-width: 340px) {
    height: 75vh;
}
@media (max-width: 770px) {
    height: 80vh;
}
`
const InternalFrame = styled.div`
width:80vw;
height: 60vh;
margin: auto ;
border-radius: 5rem;
box-shadow: 0 0 20px black;
justify-content: space-around; 
display: grid;
grid-template-columns: auto auto auto;
background-color: #918EA4;
padding: 10px;


@media (max-width: 770px) {
    grid-template-columns: auto auto;
    height: 70vh;

}
@media (max-width: 375px) {
    grid-template-columns: auto auto ;
    height: 70vh;


}
`

const Plantpedia = () => {




    return(
        <ExternalFrame>
            <InternalFrame>
                <WateringButton/>
                <WateringButton/>
                <WateringButton/>
                <WateringButton/>
                <WateringButton/>
                <WateringButton/>
            </InternalFrame>
        </ExternalFrame>
    )

}

export default Plantpedia;