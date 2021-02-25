import Head from 'next/head'
import styles from '../styles/Menu.module.css'
import React, { useState, useEffect  } from 'react';
import window from 'global'
// React.initializeTouchEvents(true)

export default function Home() {
    var { height, width } = useWindowDimensions();
    const [hovered, setHovered] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [hovered3, setHovered3] = useState(false);
    const [hovered4, setHovered4] = useState(false);
    const toggleHover = () => {
        setHovered(!hovered);
        setHovered2(false)
        setHovered3(false)
        setHovered4(false)
    };
    const toggleHover2 = () => {
        setHovered(false);
        setHovered2(!hovered2)
        setHovered3(false)
        setHovered4(false)
    };
    const toggleHover3 = () => {
        setHovered(false);
        setHovered2(false)
        setHovered3(!hovered3)
        setHovered4(false)
    };
    const toggleHover4 = () => {
        setHovered(false);
        setHovered2(false)
        setHovered3(false)
        setHovered4(!hovered4)
    };
    return (
        <div className={
            hovered ? styles.background1 : 
            hovered2 ? styles.background2 : 
            hovered3 ? styles.background3 : 
            hovered4 ? styles.background4 : 
            styles.background
            }>
            <Head>
                <title>R O H</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div className={styles.listContainer}>
                    <div>
                        <h5 
                            style={{color: hovered2 || hovered3 || hovered4 ? 'gray' : 'black'}} 
                            className={styles.menuSelection}
                            onMouseEnter={ width > 1024 ? toggleHover : null}
                            onMouseLeave={ width > 1024 ? toggleHover : null}
                            onClick={ width <= 1024 ? toggleHover : null} 
                        >ARTISTS</h5>

                        <h5 
                            style={{color: hovered || hovered3 || hovered4 ? 'gray' : 'black'}} 
                            className={styles.menuSelection}
                            onMouseEnter={ width > 1024 ? toggleHover2 : null}
                            onMouseLeave={ width > 1024 ? toggleHover2 : null}
                            onClick={ width <= 1024 ? toggleHover2 : null} 
                        >EXHIBITION</h5>

                        <h5 
                            style={{color: hovered || hovered2 || hovered4 ? 'gray' : 'black'}} 
                            className={styles.menuSelection}
                            onMouseEnter={ width > 1024 ? toggleHover3 : null}
                            onMouseLeave={ width > 1024 ? toggleHover3 : null}
                            onClick={ width <= 1024 ? toggleHover3 : null} 
                        >INFO</h5>

                    </div>
                    <div className={styles.search}>
                        <h5 
                            style={{color: hovered || hovered2 || hovered3 ? 'gray' : 'black'}} 
                            className={styles.menuSelection}
                            onMouseEnter={ width > 1024 ? toggleHover4 : null}
                            onMouseLeave={ width > 1024 ? toggleHover4 : null}
                            onClick={ width <= 1024 ? toggleHover4 : null} 
                        >SEARCH</h5>
                    </div>
                </div>
            </div>
            <div>
                <p style={{display: !hovered && !hovered2 && !hovered3 && !hovered4 ? 'block' : 'none'}} className={styles.footer}>LUCIO FONTANA. Spatial Environment / Ambienti Spaziali (1968). Installation view at ROH</p>
                <p style={{display: hovered && !hovered2 && !hovered3 && !hovered4 ? 'block' : 'none'}} className={styles.footer1}>WOLFGANG LAIB. <i>Pollen from Hazelnut</i> (2021). Installation progress at ROH</p>
                <p style={{display: !hovered && hovered2 && !hovered3 && !hovered4 ? 'block' : 'none'}} className={styles.footer2}>ROH Installation view at S.E.A Focus, Singapore (2020)</p>
                <p style={{display: !hovered && !hovered2 && hovered3 && !hovered4 ? 'block' : 'none'}} className={styles.footer3}>ADITYA NOVALI. <i>AcrylicilyrcA</i> (2021). Details</p>
                <p style={{display: !hovered && !hovered2 && !hovered3 && hovered4 ? 'block' : 'none'}} className={styles.footer4}>
                    ELMGREEN & DRAGSET. <i>Black Socks</i>, (2019) <br/>
                    aluminum, steel, lacquer, sock, 46-7/8" x 24-7/16" x 31-1/2" (119.1cm x 62.1cm x 80cm) unique
                </p>
            </div>
        </div>
    )
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };

  }
  
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return windowDimensions;

  }
  