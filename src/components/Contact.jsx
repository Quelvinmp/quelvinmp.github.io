export default function Contact() {
  return (
    <div>
  <form target="_blank" noValidate action="https://formsubmit.co/quelvinmp@gmail.com" method="POST">
  <input type="hidden" name="_captcha" value="false"/>
  <input type="hidden" name="_next" value="http://localhost:5173/feedback"
  // value="https://quelvinmp.github.io/feedback"
  />
    <div className="form-group">
      <div className="form-row">
        <div className="col">
          <input type="text" name="name" className="form-control" placeholder="Full Name" required/>
        </div>
        <div className="col">
          <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
        </div>
      </div>
    </div>
    <div className="form-group">
      <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
  </form>
    </div>
  )
}
