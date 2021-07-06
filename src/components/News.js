import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, { Autoplay,Pagination,Navigation } from 'swiper/core';
import { BsArrowReturnRight } from 'react-icons/bs'

SwiperCore.use([Autoplay,Pagination,Navigation]);

const News = () => {
    return (
        <Div>
            <Swiper 
            smooth = {true}
            spaceBetween={40} 
            centeredSlides={true} 
            autoplay={{
                "delay": 4500,
                "disableOnInteraction": false
            }} 
            pagination={{
                "clickable": true
                
            }} 
            navigation={true} 
            className="mySwiper"
            >
            <SwiperSlide className="swiper-container">
                <div>
                    <H2>The five 'It' Plants of 2021</H2>
                    <P>Aglaonemas, monsteras, philodendrons, pothos, ZZ plants, and other aroids topped the houseplant popularity lists in 2020 due to their exciting foliage colors, shapes, and ease of care. 
                    <p>
                        <a 
                            href="https://www.thespruce.com/the-5-it-plants-of-2021-according-to-plant-pros-5094273" 
                            target="_blank" 
                            rel="noopener noreferrer"> 
                            <BsArrowReturnRight size = '1.5rem'/>
                            Read more 
                        </a>
                    </p>
                    </P>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <H2>Tips for moving with plants</H2>
                    <P>By nature, plants grow into the space where they are planted – the fact that we can pick them up and move them is a compromise so that we humans can conveniently have them in the places where WE live.
                    <p>
                        <a 
                            href="https://www.houseplantjournal.com/tips-for-moving-with-plants/" 
                            target="_blank" 
                            rel="noopener noreferrer"> 
                            <BsArrowReturnRight size = '1.5rem'/>
                            Read more 
                        </a>
                    </p>
                    </P>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <H2>How To Get New Leaves on Ficus Lyrata</H2>
                    <P>Fiddle leaf figs, or ficus lyrata, love to be fed! Their large leaves and relatively fast growth demand plenty of nutrition. But how often should you fertilize?
                    <p>
                        <a 
                            href="https://invinciblehouseplants.com/blog/how-to-get-new-leaves-ficus-lyrata-fiddle-leaf-fig-plant" 
                            target="_blank" 
                            rel="noopener noreferrer"> 
                            <BsArrowReturnRight size = '1.5rem'/>
                            Read more 
                        </a>
                    </p>
                    </P>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <H2>DIY Propagation Wall</H2>
                    <P>Propagation stations are all the rave in the planty world as you may know. Propagation stations off the shelf means… more space for potted plants.
                    <p>
                        <a 
                            href="https://www.greenobsessions.com/my-diy-propagation-wall/" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <BsArrowReturnRight size = '1.5rem'/> 
                            Read more
                        </a>
                    </p>
                    </P>
                </div>
            </SwiperSlide>
        </Swiper>
        </Div>
    )
}

const Div = styled.div`
    height:40vh;
    width: 100vw;
    background-color: #918EA4;
    opacity: 0.9;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    text-align: center;
    padding: 7rem;
    margin-top: .2rem;
    .swiper-button-next{
        color: #323144;
    }
    .swiper-button-prev{
        color: #323144;
        
    }
    .swiper-pagination > .swiper-pagination-bullet {
    opacity: 0.9;
    border: #323144 solid 1.8px;
    background-color: transparent;
    }
    .swiper-pagination > .swiper-pagination-bullet-active {
        background-color: #323144;
    }
@media (min-width: 767px) {
    width: 100vw; 
    height: 45vh;
    padding: 4rem;
    margin-top: .1rem;
    }
@media (min-width: 340px) {
    height: 40vh;
    padding: 0.6rem;
    margin-top: .1rem;
}
`

const H2 = styled.h2 `
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 4rem;
    color: whitesmoke; 
    padding: 0 4rem 1rem;
@media (min-width: 767px) {
    font-size: 2rem;
    padding: 5rem;
}
@media (min-width: 340px) {
    padding: .1rem 1.8rem 0rem 2rem;
    margin-top: 1rem;
    font-size: 1.9rem;
}
`

const P = styled.p `
    margin: 1.7rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;  
    color: whitesmoke;
    padding: 0 4rem 2rem;
    p{
        margin-top: 1rem;
        
    }
    a{
        color: #323144;
        font-size: 1.2rem;
        font-weight: 500;
        text-decoration: none;
        border-bottom: .5rem solid #83a46f;
        
    
    }

@media (min-width: 767px) {
    font-size: 1.5rem;
} 
@media (min-width: 340px) {
    padding: .5rem 1.8rem 1rem 2rem;
    font-size: 1.1rem;
}
`

export default News;