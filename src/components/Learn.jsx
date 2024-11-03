import React from 'react'
import shoe from '../assets/HTMLANDCSS.jpg'
import logo from '../assets/JAVASCRIPT.jpg'

const Learn = () => {
  return (
    <div>
        <section id="learn" className="p-5">
        <div className="container">
            <div className="row align-items-center justify-content-between">
               <div className="col-md">
                <img src={logo} className="img-fluid" />
               </div> 
               <div className="col-md p-5 text-secondary">
                <h2 className="mt-5"> Learn The Fundamentals</h2>
                <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Corrupti beatae cumque veritatis fuga possimus nisi molestias excepturi officiis nostrum fugiat
                     tempora ipsam ullam, eius facilis.
                </p>
                <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Corrupti beatae cumque veritatis fuga possimus nisi molestias excepturi officiis nostrum fugiat
                     tempora ipsam ullam, eius facilis.
                </p>
                <a href="#" className="btn btn-ligt mt-3">
                    Read more
                </a>
               </div>
            </div>
        </div>
    </section>

    <section id="learn" className="p-5 bg-dark">
        <div className="container">
            <div className="row align-items-center justify-content-between">
               <div className="col-md p-5 text-info">
                <h2 className="mt-5"> Learn The Fundamentals</h2>
                <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Corrupti beatae cumque veritatis fuga possimus nisi molestias excepturi officiis nostrum fugiat
                     tempora ipsam ullam, eius facilis.
                </p>
                <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Corrupti beatae cumque veritatis fuga possimus nisi molestias excepturi officiis nostrum fugiat
                     tempora ipsam ullam, eius facilis.
                </p>
                <a href="#" className="btn btn-ligt mt-3">
                    Read more
                </a>
               </div>
               <div className="col-md">
                <img src={shoe} className="img-fluid" />
               </div> 
            </div>
        </div>
    </section>

    </div>
  )
}

export default Learn