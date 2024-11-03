import './Newsletter.css'


const Newsletter = () => {
  return (
    <div>
<section className="bg-primary text-light p-5">
    <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
            <h3 className="mb-3 mb-md-0"> Sign up for Our Newsletter</h3>
            <div className="input-group news-input">
            <input type="text"
            className="form-control"
            placeholder="Enter Email"/>
            <button className="btn btn-dark btn-lg"
            type="button">Button</button>
        </div>
        </div>
    </div>
 </section>

    </div>
  )
}

export default Newsletter