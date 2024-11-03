

const Question = () => {
  return (
    <div>
        <section className="p-5" id="Questions">
<div className="container">
    <h2 className="text-center mb-4">
        Frequently Asked Questions
    </h2>
    <div className="accordion accordion-flush" id="questions">
        {/*  ITEM 1  */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" 
            type="button"
             data-bs-toggle="collapse"
              data-bs-target="#question-one">
      Where exactly are you located
            </button>
          </h2>
          <div id="question-one" 
          className="accordion-collapse collapse"
           data-bs-parent="#questions">
            <div className="accordion-body">Placeholder content for this accordion,
               which is intended to demonstrate the <code>.accordion-flush</code> className. 
               This is the first item's accordion body.</div>
          </div>
        </div>
         {/* ITEM 2  */}
        <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" 
              type="button"
               data-bs-toggle="collapse"
                data-bs-target="#question-two">
      How much does it cost to attend
              </button>
            </h2>
            <div id="question-two" 
            className="accordion-collapse collapse"
             data-bs-parent="#questions">
              <div className="accordion-body">Placeholder content for this accordion,
                 which is intended to demonstrate the <code>.accordion-flush</code> className. 
                 This is the first item's accordion body.</div>
            </div>
          </div>
         {/* ITEM 3 */}
        <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" 
              type="button"
               data-bs-toggle="collapse"
                data-bs-target="#question-three">
       What do i need to know
              </button>
            </h2>
            <div id="question-three" 
            className="accordion-collapse collapse"
             data-bs-parent="#questions">
              <div className="accordion-body">Placeholder content for this accordion,
                 which is intended to demonstrate the <code>.accordion-flush</code> className. 
                 This is the first item's accordion body.</div>
            </div>
          </div>
           {/* ITEM 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" 
              type="button"
               data-bs-toggle="collapse"
                data-bs-target="#question-four">
        How do i sign up
              </button>
            </h2>
            <div id="question-four" 
            className="accordion-collapse collapse"
             data-bs-parent="#questions">
              <div className="accordion-body">Placeholder content for this accordion,
                 which is intended to demonstrate the <code>.accordion-flush</code> className. 
                 This is the first item's accordion body.</div>
            </div>
          </div>
           {/* ITEM 5  */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" 
              type="button"
               data-bs-toggle="collapse"
                data-bs-target="#question-five">
     Will you help me find a job
              </button>
            </h2>
            <div id="question-five" 
            className="accordion-collapse collapse"
             data-bs-parent="#questions">
              <div className="accordion-body">Placeholder content for this accordion,
                 which is intended to demonstrate the <code>.accordion-flush</code> class
                 This is the first item's accordion body.</div>
            </div>
          </div>
      </div>
      
</div>
      </section>

    </div>
  )
}

export default Question