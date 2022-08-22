import React from 'react'


const Footer = () => {
    const date= new Date();
    const year = date.getFullYear();
    return (
        <div>


            <footer>
                <div className="container">


                    <div className="row">
                        <div className="col-md-3">
                            <h5>Fooddys</h5>
                            {/* <p>Feed your skill</p>
                            <p>Innovation,Impact,Inspire</p> */}
                        </div>
                        <div className="row col-md-2">
                            <a href="/">Home</a>
                            <a href="/menu">Menu</a>
                            <a href="/contact">Contact</a>
                            <a href="">Services</a>
                            <a href="">Contact</a>
                        </div>
                        <div className="row col-md-2">
                            <a href="">Clients</a>
                            <a href="">Team</a>
                            <a href="">Career</a>
                            <a href="">Testimonial</a>
                            <a href="">Journal</a>
                        </div>
                        <div className="row col-md-2">
                            <a href="">Privacy Policy</a>
                            <a href="">Teams & Conditions</a>
                            <a href="">Partners</a>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <a href="/"> <i class="fa-brands fa-instagram" ></i></a>
                                <a href="/"> <i class="fa-brands fa-twitter" ></i></a>
                                <a href="https://www.facebook.com/groups/1623529167810001"> <i class="fa-brands fa-facebook-f"></i></a>
                                <a href="/"> <i class="fa-brands fa-pinterest" ></i></a>
                                <a href="/"><i class="fa-brands fa-google-plus-g" href="/"></i></a>
                            </div>
                            <div>
                                <a href="" className='btn contact-btn'>Contact Us</a>
                            </div>
                        </div>

                    </div>
                    <hr />
                    <h6 className='last-portion'>&copy;{year} All Right Reserved</h6>
                </div>
            </footer>

        </div>
    )
}

export default Footer