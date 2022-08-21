import React,{ useState} from 'react'
import { Parallax } from 'react-parallax'
import images from './image'






const Menu = () => {
   
    return (
     <div>
<div className="container-fluid">
    <div className="row">
        <div className="col-md-12">
       <Parallax strength={300} bgImage={images.banner4}>
                                <div className="content">
                                    <div className="text-content">
                                        <h4>You want to find some delicious food,find your favourite food below</h4>
                                    </div>
                                </div>
                            </Parallax>
                        </div>
  
        </div>
        

        <div className="text">
            <h3>Many delicious food here</h3>
        </div>
        <div className="card">
                    <div className="row">
                        <div className="col-md-8">
                            <Parallax strength={-300} bgImage={images.banner5}>
                                <div className="content">
                                    <div className="text-content">
                                    </div>
                                </div>
                            </Parallax>
                        </div>

                        <div className="col-md-4">
                            <Parallax strength={300} bgImage={images.img2}>
                                <div className="content">
                                    <div className="text-content">
                                        <h4>Crispy pizza with black olive</h4>
                                    </div>
                                </div>
                            </Parallax>
                        </div>
                    </div>
<p>Fast food item</p>
         <div className="row">
            
         </div>

         </div>
        <div className="row">
           
            <div className="col-md-3">
 <img className='img-fluid' src={images.card3} alt="" />
  <p className='text-2'>Two layer burger is so much delicious</p>
  
  <button type="button" class="btn btn-secondary">price:3$</button>
  <p>auto</p>
        </div>
        
        <div className="col-md-4">
        <img className='img-fluid' src={images.card6} alt="" />
        </div>
        <div className="col-md-3">
        <img className='img-fluid' src={images.side1} alt="" />
        <p className='text-2'>Its a sea food,fresh and flavourful with lemon</p>
        </div>
        <div className="col-md-2">
        <img className='img-fluid' src={images.side2} alt="" />
        <p className='text-2'>Its a chinese food,with chicken momo,fresh vegetable,lemon and spanish,its use many ypes of spices like cinamon,blackpaper.</p>
        <button type="button" class="btn btn-secondary">price:7$</button>
        </div>
        <p >Another-part</p>
        <div className="col-md-2">
        <img className='img-fluid' src={images.side4} alt="" />
        <p className='text-2'>Its a crispy chicken sabsabil with delicious chockolate cookie.Its mainly serve with many delicious sauces like tomato sauce.</p>
        <button type="button" class="btn btn-secondary">price:4$</button>
        <p>auto</p>
        </div>
        <div className="col-md-4">
        <img className='img-fluid' src={images.side5} alt="" />
        <p className='text-2'>Its a tango flavour potato with beeef stack</p>
        <button type="button" class="btn btn-secondary">price:7$</button>
        <p>auto</p>
        </div>
        <div className="col-md-6">
        <img className='img-fluid' src={images.side6} alt="" />
        </div>
        <p >Another-part</p>
        <div className="col-md-6">
        <img className='img-fluid' src={images.side7} alt="" />
        <p className='text-2'>Its a healthy food for breakfast.Its mainly coded bread,spash potato and eggs fillet,it has use light spices,its good gor baby. </p>
        <button type="button" class="btn btn-secondary">price:3$</button>
        <p>auto</p>
        </div>
        <div className="col-md-6">
        <img className='img-fluid' src={images.side8} alt="" />
        </div>
        </div>
        <p className="text-2">Our Special food</p>
        <div className="card">
                    <div className="row">
                        <div className="col-md-6">
                            <Parallax strength={-300} bgImage={images.img6}>
                                <div className="content">
                                    <div className="text-content">
                                    </div>
                                </div>
                            </Parallax>
                        </div>

                        <div className="col-md-6">
                            <Parallax strength={300} bgImage={images.img4}>
                                <div className="content">
                                    <div className="text-content">
                                        <h4>crab masala with redchilli</h4>
                                    </div>
                                </div>
                            </Parallax>
                        </div>
                    </div>
 <p>Authentic food</p>
         <div className="row">
         <div className="col-md-4">
        <img className='img-fluid' src={images.img11} alt="" />
        </div>
        <div className="col-md-3">
        <img className='img-fluid' src={images.img3} alt="" />
        <p className='text-2'>Its a spagetti,fresh and flavourful with pron and vegetable</p>
        <button type="button" class="btn btn-secondary">price:8$</button>
        <p>...</p>
        </div>
        <div className="col-md-4">
        <img className='img-fluid' src={images.img9} alt="" />
        <p className='text-2'>Its a chinese stick,with pron, chicken momo,fresh vegetable,lemon and spanish.</p>
        <button type="button" class="btn btn-secondary">price:10$</button>
        </div>
         </div>
<p>Thanks for visit</p>
         </div>
       
            </div>
           
        
    </div>

    
    )
}

export default Menu