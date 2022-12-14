import React from "react";
import './index.css';
const Contact = ()=>
{
    return(
      <div className="contact">
      <h1 className='conH1'>CONTACT ME</h1>

      <div class="form-box">
  <form>
    <div class="form-group">
      <label>Name</label>
      <input class="form-control" id="name" type="text" name="Name"/>
    </div>
    <div class="form-group">
      <label>Email</label>
      <input class="form-control" id="email" type="email" name="Email"/>
    </div>
    <div class="form-group">
      <label>Message</label>
      <textarea class="form-control" id="message" name="Message"></textarea>
    </div>
    <input class="btn btn-primary" type="submit" value="Submit" />
    
  </form>
</div>

      </div>
  
    )
}
export default Contact;