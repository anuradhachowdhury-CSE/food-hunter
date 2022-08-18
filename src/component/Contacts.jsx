import React from 'react'
import video2 from '../vendor/assets/video2.mp4'
import video3 from '../vendor/assets/video3.mp4'
import video5 from '../vendor/assets/video5.mp4'
import video6 from '../vendor/assets/video6.mp4'
import video7 from '../vendor/assets/video7.mp4'
import video8 from '../vendor/assets/video8.mp4'

const Contacts = () => {
  return (
    <div className='menu'>
    
    <div className="ParaImage bg1">
        <div className="container">
            <h1>Contact with us</h1>
            <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control bg-" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    </div>
    <div className="ParaContent">
        <div className="container">
            <h3>Parallax effect</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed velit consequuntur optio, eum id omnis soluta placeat repudiandae neque, consectetur eius. Corporis laborum vitae molestiae eligendi expedita modi veniam!</p>
        </div>
    </div>

<div className="ParaVedio">
    <div className="container">
    <div className="row">
        <div className="col-md-6 col-8 ">
        <video src={video3} autoPlay loop muted />
        </div>
        <div className="col-md-6 col-8 ">
        <video src={video8} autoPlay loop muted />
        {/* <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt possimus beatae qui labore? Voluptates fugit nihil eveniet qui quasi iusto. Alias expedita voluptatibus sequi possimus accusantium vel quia similique error commodi libero iure nesciunt cum ipsum vero ut, totam perspiciatis minima provident dolorem voluptates reprehenderit repellat. Ipsa aliquam repudiandae tempora rem ut distinctio soluta dolorem. Soluta non incidunt possimus velit eos rerum laboriosam minus laborum magni officia, et architecto vel iure voluptates inventore dolorem odio molestias nihil, error eligendi amet ipsum. Natus laudantium molestiae quisquam soluta ad dolor, sequi amet porro illum alias veniam hic voluptatum ipsa suscipit. Quam, quas?</h3> */}
        </div>
        {/* <div className="col-md-3 col-8">
        <video src={video6} autoPlay loop muted />
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet id veniam perferendis harum velit culpa quia rem porro veritatis, voluptates corporis, sint ducimus perspiciatis! Corrupti quisquam deleniti temporibus quia unde magnam animi aliquam error laboriosam facilis consequatur sed similique dolore voluptates sint voluptas alias, delectus reiciendis omnis at! Facere cumque dolor autem, impedit id recusandae molestiae. Amet necessitatibus ipsam facere in, exercitationem aliquid itaque eum perferendis dolor! Recusandae, nostrum sapiente adipisci ipsam placeat non animi quam voluptate hic, ullam mollitia dolorem dicta explicabo aspernatur illum. Earum excepturi rerum nisi necessitatibus quod consequuntur, maxime laboriosam non esse cum tempora est natus.</h3>
        </div> */}
       
    </div>
    </div>
   
</div>
<div className="ParaContent">
        <div className="container">
            <h3>Parallax effect</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed velit consequuntur optio, eum id omnis soluta placeat repudiandae neque, consectetur eius. Corporis laborum vitae molestiae eligendi expedita modi veniam!</p>
        </div>
    </div>
    <div className="ParaImage bg2">
        <div className="container">
            <h1>Thanks For Visit Us</h1>
        </div>
    </div>







</div>
  )
}

export default Contacts