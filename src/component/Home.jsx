import React,{ useState } from 'react'
import Calendar from 'react-calendar';
import images from '../component/image'
import { Parallax } from 'react-parallax'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();




const Home = () => {
   
        const [value, onChange] = useState(new Date());

    return (
        <div>
            {/*///// Banner part //////*/}
            <div className="container">
                <Parallax strength={300} bgImage={images.banner3}>
                    <div className="content">
                        <div className="text-content">
                            <h1>IT'S FOOD HUNTER</h1>
                        </div>
                    </div>
                </Parallax>
                {/* <Parallax strength={300} blur={{ min:-10 , max:15}} bgImage={images.banner1}></Parallax> */}

                {/*////////////// Banner end ////////*/}

                {/*/////////// Paragraph part//////// */}
                <Parallax className='text-home'>
                    <div  className="content">
                        <div  className="text-content">
                            <h1 data-aos="fade-up" >Welcome to FOOD HUNTER</h1>
                            <p data-aos="fade-up">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
                            <a href="/#" class="btn btn-primary "><span className="explore-menu">Explore Menu</span> </a>
                        </div>
                    </div>
                </Parallax>

                {/*/////////// Paragraph end//////// */}

                {/* /////////Card part one////////// */}
                <div className="card">
                    <div className="row">
                        <div className="col-md-8">
                            <Parallax strength={-600} bgImage={images.banner2}>
                                <div className="content">
                                    <div className="text-content">
                                    </div>
                                </div>
                            </Parallax>
                        </div>

                        <div className="col-md-4">
                            <Parallax strength={300} bgImage={images.card7}>
                                <div className="content">
                                    <div className="text-content">
                                        <h4>Crispy Spanish with black olive</h4>
                                    </div>
                                </div>
                            </Parallax>
                        </div>
                    </div>

         <div className="row">
            
         </div>

         </div>



</div>
<div className="container-fluid">
<div  className="row part-three ">
    <div className="col-md-4 col-12">
     <img className='img-fluid' src={images.card1} alt="" />
    </div>
    <div className="ms-auto col-md-6 col-10 text">
       <h1 data-aos="fade-up" >An Innovative Concept from Chef Brenda Pío</h1>
       <p data-aos="fade-up">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
    </div>
</div>
</div>


    
<div className="container-fluid">
<div className="row">
            <div className="col-md-6">
            <Parallax strength={-300}  bgImage={images.card5}>
            <div className="content">
                <div className="text-content">
                   
                </div>
            </div>
        </Parallax>
            </div>
        
      <div className="col-md-6">
      <Parallax strength={300}  bgImage={images.card8}>
            <div className="content">
                <div className="text-content">
                   <h4>Egg Cribics</h4>
                </div>
            </div>
        </Parallax>
      </div>
      <h3 className="color">“Every plate is a masterpiece, fresh and flavorful”</h3>
      <div className="col-md-3 part-three">
            <Parallax strength={-300}  bgImage={images.card6}>
            <div className="content">
                <div className="text-content">
                   <h2>fish fillet</h2>
                </div>
            </div>
        </Parallax>
            </div>
      <div className="col-md-3 part-three">
            <Parallax strength={300} blur={{ min:10 , max:-10}} bgImage={images.side8}>
            <div className="content">
                <div className="text-content">
                   {/* <h2>chicken Cabsa</h2> */}
                </div>
            </div>
        </Parallax>
            </div>
      <div className="col-md-6 part-three">
            <Parallax strength={300}  bgImage={images.side2}>
            <div className="content">
                <div className="text-content">
                   
                </div>
            </div>
        </Parallax>
            </div>
      </div>
</div>



                

        </div>
    )
}

export default Home