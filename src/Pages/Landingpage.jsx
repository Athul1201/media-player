import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Landingpage() {

const navigateByUrl =useNavigate()

    return (
        <>
            <Row className="mt-5 align-item-center justify-content-between w-100">
                <Col></Col>
                <Col lg={5}>
                    <h1 style={{ color: "blueviolet", fontSize: "40px" }}>Welcome to <span className='text-Warning'>Media-Player </span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et repellat voluptatem enim dolore quod vitae soluta earum voluptates facere eos voluptate tenetur eaque corporis neque laudantium pariatur ullam, in magnam.</p>
                    <Button onClick={()=>navigateByUrl('/home')} className='btn btn-info'>Get Started</Button>
                </Col>
                <Col lg={5}>
                    <img src="https://www.androidauthority.com/wp-content/uploads/2021/02/Plex-best-media-player-apps-for-Android.jpg" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                </Col>
                <Col></Col>

            </Row>
            <div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100">
                <h5 className='text-Warning' style={{ fontSize: "40px" }}>Features</h5>
                <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
                    <Card style={{ width: '18rem' }} className='bg-info'>
                        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.V8U-bv22uPzOVdOZDgG0GwHaEp?rs=1&pid=ImgDetMain" />
                        <Card.Body className='text-danger fw-bolder'>
                            <Card.Title>Managing videos</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className='bg-info'>
                        <Card.Img variant="top" src="https://images.pond5.com/music-equalizer-equalizer-48-hd-footage-000918928_prevstill.jpeg" />
                        <Card.Body className='text-danger fw-bolder'>
                            <Card.Title>Categorized video</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className='bg-info'>
                        <Card.Img variant="top" src="https://img.freepik.com/premium-photo/vibrant-music-background_1044916-4560.jpg" />
                        <Card.Body className='text-danger fw-bolder'>
                            <Card.Title>Watch History</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                    </Card>

                </div>

            </div>

            <div className='container border rounded p-4 border-light mt-5 d-flex justify-content-center align-items-center'>

                <div className="col-lg-5">
                    <h4 className='text-warning'>Simple,Powerful & Fast</h4>
                    <h6 className='mb-5 mt-4'><span className='text-warning'>Play Everything</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas praesentium earum quibusdam eius libero sed laboriosam temporibus corporis, laudantium veniam adipisci magnam ipsam cupiditate iusto ab molestiae sequi vero vel!</h6>
                    <h6 className='mb-5 mt-4'><span className='text-warning'>Categorize Videos</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas praesentium earum quibusdam eius libero sed laboriosam temporibus corporis, laudantium veniam adipisci magnam ipsam cupiditate iusto ab molestiae sequi vero vel!</h6>
                    <h6 className='mb-5 mt-4'><span className='text-warning'>Managing Videos</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas praesentium earum quibusdam eius libero sed laboriosam temporibus corporis, laudantium veniam adipisci magnam ipsam cupiditate iusto ab molestiae sequi vero vel!</h6>

                </div>


                <div className="col-lg-5 ms-5">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/zYvWizoxHfA?si=V4CYVGSgkETm5rYO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </div>

            </div>
        </>
    )
}

export default Landingpage
