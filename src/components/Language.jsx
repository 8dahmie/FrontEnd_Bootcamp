import Card from 'react-bootstrap/Card';
import tml from '../assets/HTML5.jpg';
import ss from '../assets/CSS3.jpg';
import boot from '../assets/BOOTSTRAP.jpg';
import java from '../assets/JS.jpg';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Language = () => {
  return (
    <div>
        <section className="p-5 bg-primary">
            <div className="container">
                <h2 className="text-center text-white"> 
                    OUR INSTRUCTORS
                </h2>
                <p className="lead text-center text-white mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, impedit. 
                    Ipsa, qui beatae mollitia nam suscipit itaque ipsam dolores tenetur!
                </p>
                <div className="row g-4">
                    {/* HTML */}
                    <div className="col-md-6 col-lg-3">
                    <Card className='bg-ligt'>
                    <Card.Img src={tml} className='mb-3'/>
                    <Card.Body>
                    <Card.Title>
                        <ol>
                        <dl style={{ marginLeft:"-39px", 
                        marginTop:"-20px",
                        color:"rgb(0, 71, 171)"
                    }} 
                        className='text-center text-decoration-underline h3'> HTML </dl>
                        <dd className='mt-3'
                        style={{color:"rgb(100, 149, 237)"}}> HYPER TEXT MARKUP LANGUAGE </dd>
                        </ol>
                         </Card.Title>
                         <h3 className='ms-3' style={{color:'skyblue'}}> 
                         <a href='#'> <FaFacebook /> </a>
                         <a href='#'> <FaXTwitter className='ms-3' /></a>
                         <a href='#'>   <FaWhatsapp className='ms-3'/></a>
                         <a href='#'> <FaInstagram className='ms-3' />   </a>  
                            </h3>
                    </Card.Body>
                    </Card>
                    </div>
                    {/* CSS */}
                    <div className="col-md-6 col-lg-3">
                    <Card className='bg-ligt'>
                    <Card.Img src={ss} className='mb-3'/>
                    <Card.Body>
                    <Card.Title>
                        <ol>
                        <dl style={{ marginLeft:"-39px", 
                        marginTop:"-20px",
                        color:"rgb(0, 71, 171)"
                    }} 
                        className='text-center text-decoration-underline h3'> CSS </dl>
                        <dd className='mt-3'
                        style={{color:"rgb(100, 149, 237)"}}> CASCADING STYLE SHEET </dd>
                    
                        </ol>
                         </Card.Title>
                         <h3 className='ms-3' style={{color:'skyblue'}}> 
                         <a href='#'> <FaFacebook /> </a>
                         <a href='#'> <FaXTwitter className='ms-3' /></a>
                         <a href='#'>   <FaWhatsapp className='ms-3'/></a>
                         <a href='#'> <FaInstagram className='ms-3' />   </a>  
                            </h3>
                    </Card.Body>
                        </Card>
                        </div>
                        {/* BOOTSTRAP */}
                   
                    <div className="col-md-6 col-lg-3">
                    <Card className='bg-ligt'>
                    <Card.Img src={boot} className='mb-3'/>
                    <Card.Body>
                    <Card.Title>
                        <ol>
                        <dl style={{ marginLeft:"-39px", 
                        marginTop:"-20px",
                        color:"rgb(0, 71, 171)"
                    }} 
                        className='text-center text-decoration-underline h3'>BOOTSTRAP </dl>
                        <dd className='mt-3 text-uppercase'
                        style={{color:"rgb(100, 149, 237)"}}> a feature-packed TOOLKIT..
                       very Powerful, extensible, </dd>
                    
                        </ol>
                         </Card.Title>
                         <h3 className='ms-3' style={{color:'skyblue'}}> 
                         <a href='#'> <FaFacebook /> </a>
                         <a href='#'> <FaXTwitter className='ms-3' /></a>
                         <a href='#'>   <FaWhatsapp className='ms-3'/></a>
                         <a href='#'> <FaInstagram className='ms-3' />   </a>  
                            </h3>
                    </Card.Body>
                        </Card>
                    </div>

                    {/* JAVASCRIPT */}
                    <div className="col-md-6 col-lg-3">
                    <Card className='bg-ligt'>
                    <Card.Img src={java} className='mb-3'/>
                    <Card.Body>
                    <Card.Title>
                        <ol>
                        <dl style={{ marginLeft:"-39px", 
                        marginTop:"-20px",
                        color:"rgb(0, 71, 171)"
                    }} 
                        className='text-center text-decoration-underline h5'>JAVASCRIPT </dl>
                        <dd className='mt-3'
                        style={{color:"rgb(100, 149, 237)"}}> REACT.JS</dd>
                    
                        </ol>
                         </Card.Title>
                         <h3 className='ms-3' style={{color:'skyblue'}}> 
                         <a href='#'> <FaFacebook /> </a>
                         <a href='#'> <FaXTwitter className='ms-3' /></a>
                         <a href='#'>   <FaWhatsapp className='ms-3'/></a>
                         <a href='#'> <FaInstagram className='ms-3' />   </a>  
                            </h3>
                    </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Language