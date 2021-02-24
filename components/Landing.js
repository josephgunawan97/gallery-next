import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../styles/Landing.module.css'


const Landing = ({ children }) => {
    return (
        <div class={styles.landing}>
            <div className={styles.landingDesktop}>
                <Carousel
                    indicators={false}
                    prevIcon={<span aria-hidden="true" className={styles.controlIcon} />}
                    nextIcon={<span aria-hidden="true" className={styles.controlIcon} />}
                    fade
                    interval={null}
                >
                    <Carousel.Item>
                        <Row>
                            <Col xs={12} md={5}>
                                <div className={styles.landingContent}>
                                    <h5 className={styles.landingTitle}>
                                        APOCALYPSE NOW
                                </h5>
                                    <h5 className={styles.landingDate}>
                                        25.07.2020
                                </h5>
                                    <h5 className={styles.landingCrew}>
                                        IRWAN AHMEETT <br />
                                        TITA SALINA
                                </h5>
                                </div>
                            </Col>
                            <Col xs={12} md={7}>
                                <div>
                                    <img
                                        className={styles.landingImage2}
                                        src="/Assets/Images/Apocalyptic Smile_Photo by Davy Linggar (2).JPG"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>

                        <Row>
                            <Col xs={12} md={5}>
                                <div className={styles.landingContent}>
                                    <h5 className={styles.landingTitle}>
                                        EXHIBITION TITLE
                                </h5>
                                    <h5 className={styles.landingDate}>
                                        10.11.2020
                                </h5>
                                    <h5 className={styles.landingCrew}>
                                        ADITYA NOVALI <br />
                                    ARIN SUNARYO <br />
                                    BAGUS PANDEGA <br />
                                    FAISAL HABIBI <br />
                                    SYAGINI RATNA WULAN <br />
                                    SYAIFUL GARIBALDI <br />
                                    UJI "HAHAN" HANDOKO <br />
                                    KEI IMAZU
                                </h5>
                                </div>
                            </Col>
                            <Col xs={12} md={7}>
                                <div>
                                    <img
                                        className={styles.landingImage}
                                        src="/Assets/Images/_DSC1575.jpg"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Row>
                            <Col xs={12} md={5}>
                                <div className={styles.landingContent}>
                                    <h5 className={styles.landingTitle}>
                                        MARIA TANEGUCHI
                                    </h5>
                                    <h5 className={styles.landingDate}>
                                        THE WORK OF SCAVANGERS, <br />
                                        SEISMOGRAPHERS AND <br />
                                        SOCIAL ACTORS
                                    </h5>
                                    <h5 className={styles.landingCrew}>
                                        ADITYA NOVALI <br />
                                        ARIN SUNARYO <br />
                                        BAGUS PANDEGA <br />
                                        FAISAL HABIBI <br />
                                        SYAGINI RATNA WULAN <br />
                                        SYAIFUL GARIBALDI <br />
                                        UJI "HAHAN" HANDOKO <br />
                                        KEI IMAZU
                                    </h5>
                                </div>
                            </Col>
                            <Col xs={12} md={7}>
                                <div>
                                    <img
                                        className={styles.landingImage3}
                                        src="/Assets/Images/Maria Taniguchi.jpg"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* Tablet Display */}
            <div className={styles.landingTablet}>
                <Carousel
                    indicators={false}
                    prevIcon={<span aria-hidden="true" className={styles.controlIcon} />}
                    nextIcon={<span aria-hidden="true" className={styles.controlIcon} />}
                    fade
                    interval={null}
                >
                    <Carousel.Item>
                        <Row>
                            <Col xs={12} md={5}>
                                <div className={styles.landingContent}>
                                    <h5 className={styles.landingTitle}>
                                        APOCALYPSE NOW
                                    </h5>
                                    <h5 className={styles.landingDate}>
                                        25.07.2020
                                    </h5>
                                    <h5 className={styles.landingCrew}>
                                        IRWAN AHMEETT <br />
                                        TITA SALINA
                                    </h5>
                                </div>
                            </Col>
                            <Col xs={12} md={7}>
                                <div>
                                    <img
                                        className={styles.landingImage2}
                                        src="/Assets/Images/Apocalyptic Smile_Photo by Davy Linggar (2).JPG"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Row>
                            <Col xs={12} md={5}>
                                <div className={styles.landingContent}>
                                    <h5 className={styles.landingTitle}>
                                        MARIA TANEGUCHI
                                        </h5>
                                    <h5 className={styles.landingDate}>
                                        THE WORK OF SCAVANGERS, <br />
                                            SEISMOGRAPHERS AND <br />
                                            SOCIAL ACTORS
                                        </h5>
                                    <h5 className={styles.landingCrew}>
                                        ADITYA NOVALI <br />
                                            ARIN SUNARYO <br />
                                            BAGUS PANDEGA <br />
                                            FAISAL HABIBI <br />
                                            SYAGINI RATNA WULAN <br />
                                            SYAIFUL GARIBALDI <br />
                                            UJI "HAHAN" HANDOKO <br />
                                            KEI IMAZU
                                        </h5>
                                </div>
                            </Col>
                            <Col xs={12} md={7}>
                                <div>
                                    <img
                                        className={styles.landingImage3}
                                        src="/Assets/Images/Maria Taniguchi.jpg"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>

                    <Carousel.Item>

                        <Row>
                            <Col xs={12} md={5}>
                                <div className={styles.landingContent}>
                                    <h5 className={styles.landingTitle}>
                                        EXHIBITION TITLE
                                    </h5>
                                    <h5 className={styles.landingDate}>
                                        10.11.2020
                                    </h5>
                                    <h5 className={styles.landingCrew}>
                                        ADITYA NOVALI <br />
                                        ARIN SUNARYO <br />
                                        BAGUS PANDEGA <br />
                                        FAISAL HABIBI <br />
                                        SYAGINI RATNA WULAN <br />
                                        SYAIFUL GARIBALDI <br />
                                        UJI "HAHAN" HANDOKO <br />
                                        KEI IMAZU
                                    </h5>
                                </div>
                            </Col>
                            <Col xs={12} md={7}>
                                <div>
                                    <img
                                        className={styles.landingImage}
                                        src="/Assets/Images/_DSC1575.jpg"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col xs={12} md={5}>
                                <div className={styles.landingContent}>
                                    <h5 className={styles.landingTitle}>
                                        ART FAIR TITLE
                                        </h5>
                                    <h5 className={styles.landingDate}>
                                        10.11.2020
                                        </h5>

                                    <h5 className={styles.landingCrew}>
                                        ADITYA NOVALI <br />
                                        ARIN SUNARYO <br />
                                        BAGUS PANDEGA <br />
                                        FAISAL HABIBI <br />
                                        SYAGINI RATNA WULAN <br />
                                        SYAIFUL GARIBALDI <br />
                                        UJI "HAHAN" HANDOKO <br />
                                        KEI IMAZU
                                        </h5>
                                </div>
                            </Col>
                            <Col xs={12} md={7}>
                                <div>
                                    <img
                                        className={styles.landingImage4}
                                        src="/Assets/Images/ROH_WB19_Installation_05.jpg"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* Mobile Display */}
            <div className={styles.landingMobile, `vh-100`}>
                <Carousel
                    indicators={false}
                    prevIcon={<span aria-hidden="true" className={styles.controlIcon} />}
                    nextIcon={<span aria-hidden="true" className={styles.controlIcon} />}
                    fade
                    interval={null}
                >
                    <Carousel.Item>
                        <Row>
                            <Col xs={12} md={5}>
                                <div className={styles.landingContent}>
                                    <h5 className={styles.landingTitle}>
                                        APOCALYPSE NOW
                                    </h5>
                                    <h5 className={styles.landingDate}>
                                        25.07.2020
                                    </h5>
                                    <h5 className={styles.landingCrew}>
                                        IRWAN AHMEETT <br />
                                        TITA SALINA
                                    </h5>
                                </div>
                            </Col>
                            <Col xs={12} md={7}>
                                <div className={styles.imageContainer}>
                                    <img
                                        className={styles.landingImage2}
                                        src="/Assets/Images/Apocalyptic Smile_Photo by Davy Linggar (2).JPG"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row >
                            <Col xs={12} md={5}>
                                <div className={styles.landingContent}>
                                    <h5 className={styles.landingTitle}>
                                        ART FAIR TITLE
                                        </h5>
                                    <h5 className={styles.landingDate}>
                                        10.11.2020
                                        </h5>
                                    <h5 className={styles.landingCrew}>
                                        ADITYA NOVALI <br />
                                        ARIN SUNARYO <br />
                                        BAGUS PANDEGA <br />
                                        FAISAL HABIBI <br />
                                        SYAGINI RATNA WULAN <br />
                                        SYAIFUL GARIBALDI <br />
                                        UJI "HAHAN" HANDOKO <br />
                                        KEI IMAZU
                                        </h5>
                                </div>
                            </Col>
                            <Col xs={12} md={7} >
                                <div className={styles.imageContainer}>
                                    <img
                                        className={styles.landingImage4}
                                        src="/Assets/Images/ROH_WB19_Installation_05.jpg"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Row>
                            <Col xs={12} md={5}>
                                <div className={styles.landingContent}>
                                    <h5 className={styles.landingTitle}>
                                        MARIA TANEGUCHI
                                        </h5>
                                    <h5 className={styles.landingDate}>
                                        THE WORK OF SCAVANGERS, <br />
                                            SEISMOGRAPHERS AND <br />
                                            SOCIAL ACTORS
                                        </h5>
                                    <h5 className={styles.landingCrew}>
                                        ADITYA NOVALI <br />
                                            ARIN SUNARYO <br />
                                            BAGUS PANDEGA <br />
                                            FAISAL HABIBI <br />
                                            SYAGINI RATNA WULAN <br />
                                            SYAIFUL GARIBALDI <br />
                                            UJI "HAHAN" HANDOKO <br />
                                            KEI IMAZU
                                        </h5>
                                </div>
                            </Col>
                            <Col xs={12} md={7}>
                                <div className={styles.imageContainer}>
                                    <img
                                        className={styles.landingImage3}
                                        src="/Assets/Images/Maria Taniguchi.jpg"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>

                    <Carousel.Item>

                        <Row>
                            <Col xs={12} md={5}>
                                <div className={styles.landingContent}>
                                    <h5 className={styles.landingTitle}>
                                        EXHIBITION TITLE
                                        </h5>
                                    <h5 className={styles.landingDate}>
                                        10.11.2020
                                        </h5>
                                    <h5 className={styles.landingCrew}>
                                        ADITYA NOVALI <br />
                                            ARIN SUNARYO <br />
                                            BAGUS PANDEGA <br />
                                            FAISAL HABIBI <br />
                                            SYAGINI RATNA WULAN <br />
                                            SYAIFUL GARIBALDI <br />
                                            UJI "HAHAN" HANDOKO <br />
                                            KEI IMAZU
                                        </h5>
                                </div>
                            </Col>
                            <Col xs={12} md={7}>
                                <div className={styles.imageContainer}>
                                    <img
                                        className={styles.landingImage}
                                        src="/Assets/Images/_DSC1575.jpg"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
    )
}

export default Landing