import styled from "styled-components";


const WateringCard=styled.div`
width:14vw;
height:18vh;
background-color: #725490;
margin: auto;
border-radius: 2rem;
display: flex;

@media (max-width: 770px) {
    grid-template-columns: auto auto;
    width:22vw;
    height:18vh;

}
@media (max-width: 375px) {
    grid-template-columns: auto auto ;
    width:30vw;
    height:14vh;
    
}
`

const InnerBlackFrame=styled.div`
height:6vh;
width: 14vw;
background-color: #323144;
border-radius: 0 0 2rem 2rem;
margin-top:15vh;
@media (max-width: 770px) {
    grid-template-columns: auto auto;
    width:180px;
    margin-top:130px;


}
@media (max-width: 375px) {
    grid-template-columns: auto auto;
    width:120px;
    height:40px;
    margin-top: 80px;
    z-index: 1;
}


`

const WateringButton = () => {
    return (
        <WateringCard>
            <InnerBlackFrame>

            </InnerBlackFrame>
        </WateringCard>
    );
};
export default WateringButton;