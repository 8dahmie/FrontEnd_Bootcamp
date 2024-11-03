import './Showcase.css'
import dev from '../assets/DEV.jpg'

const Showcase = () => {
  return (
    <div>
        <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
    <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
            <div>
                <h1> Become a <span className="text-warning"> Web Developer</span></h1>
                <p className="lead my-4">
                    We focus on teaching our students the fundamentals of the latest
                    and greatest technologies to prepare them for their first dev role in a great company
                </p>
                <button className="btn btn-primary btn-lg"> Start the Enrollment</button> 
            </div>
            <img src={dev} className="img-fluid w-50 d-none d-sm-block"/>
        </div>
    </div>
 </section>
    </div>
  )
}

export default Showcase