import React, { useEffect } from 'react';

const AdsComponent = (props) => {
    const {image} = props;
    useEffect(() => {
        try {
            // Load the Google AdSense script asynchronously
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            // Handle any errors if necessary
            console.error('Error loading AdSense script:', e);
        }
    }, []);

    return (
        <>
            <ins class="adsbygoogle" style={{display: 'block', height: '280px'
        
        
        }} data-ad-client="ca-pub-123456789" data-ad-slot="5720086888" data-ad-format="auto" data-full-width-responsive="true">
           <marquee direction='right' behavior='scroll' scrollAmount='30' >
           {/* <img src="https://i.pinimg.com/originals/6d/e6/6d/6de66d49a49bfbab11144caaa0321bf3.gif" style={{ height: '280px', width: '30%' }} /> */}
            {/* <img src="https://i.pinimg.com/originals/06/9d/61/069d617dca720be2d65014963515d28e.gif" style={{ height: '280px', width: '30%' }} /> */}
           <img src={image} style={{ height: '280px', width: '30%' }} />
           </marquee>

            </ins>
           
            
        </>
    );
};

export default AdsComponent;
