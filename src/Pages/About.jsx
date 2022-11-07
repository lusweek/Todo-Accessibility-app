import React, { useEffect, useState } from 'react'
import blindfold_img from '../img/blindfolded-low-res.webp'
import {HiExternalLink} from 'react-icons/hi'
import {BsArrowUpRight} from 'react-icons/bs'

function About({ setFormInfo }) {

  const [fName, setFname] = useState('')
  const [SName, setSname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {

    if (fName.length !== 0 || SName.length !== 0 || email.length !== 0 || phone.length !== 0 || message.length !== 0) {
      setFormInfo(true)
    } else {
      setFormInfo(false)
    }

  }, [fName, SName, email, phone, message])

  useEffect(() => {

    const Fname = document.getElementById('Fname');
    const Sname = document.getElementById('Sname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    const form = document.getElementById('form');

    const FnameError = document.getElementById('FnameError');
    const LastNameError = document.getElementById('SnameError');
    const emailError = document.getElementById('emailError');
    const PhoneError = document.getElementById('phoneError');
    const MessageError = document.getElementById('messageError');




    form.addEventListener('submit', (e) => {
      let NameMessage = []
      let LastNameMessage = []
      let EmailMessage = []
      let PhoneMessages = []
      let MessageMessage = []
      let fail = false

// first name error
      if (Fname.value === '' || Fname.value == null){
        NameMessage.push('Name is required')
      }
      if (NameMessage.length > 0) {
        e.preventDefault()
        FnameError.style.display='block'
        FnameError.innerHTML = NameMessage.join(', ')
        fail = true
      } else {
        FnameError.style.display='none'
      }


// second mane error
      if (Sname.value === '' || Sname.value == null){
        LastNameMessage.push('Last name is required')
      }
      if (LastNameMessage.length > 0) {
        e.preventDefault()
        LastNameError.style.display='block'
        LastNameError.innerHTML = LastNameMessage.join(', ')
        fail = true
      } else {
        LastNameError.style.display='none'
      }


// email error
      if (email.value === '' || email.value == null){
        EmailMessage.push('Email is required')
      }
      if (EmailMessage.length > 0) {
        e.preventDefault()
        emailError.style.display='block'
        emailError.innerHTML = EmailMessage.join(', ')
        fail = true
      } else {
        emailError.style.display='none'
      }

// phone error
      if (phone.value === '' || phone.value == null){
        PhoneMessages.push('Phone number is required')
      }
      if (PhoneMessages.length > 0) {
        e.preventDefault()
        PhoneError.style.display='block'
        PhoneError.innerHTML = PhoneMessages.join(', ')
        fail = true
      } else {
        PhoneError.style.display='none'
      }

// message error
      if (message.value.length < 10){
        MessageMessage.push('Message must be at least 10 characters long')
      }
      if (MessageMessage.length > 0) {
        e.preventDefault()
        MessageError.style.display='block'
        MessageError.innerHTML = MessageMessage.join(', ')
        fail = true
      } else {
        MessageError.style.display='none'
      }

      if (fail === false) {
        e.preventDefault()
        document.querySelector("#set-component").style.display="flex"

        document.getElementById('modal-btn').focus()
       
        setFname('')
        setSname('')
        setEmail('')
        setPhone('')
        setMessage('')

      }
      
})

  }, [])



  useEffect(() => {
    if (window.innerWidth < 480) {
      document.querySelector('#resize').style.display="none"
    }
  }, [])

  return (
   <section className='component-section'>
      <header>
        <h1 className='h1-title margin-top'>About Accessibility</h1>
        <h2 className='h2-title'>This page is about why its so impotent to make websites and apps that are accessible to those who have vision issues or other disabilities</h2>
      </header>

      <div className='line'></div>

      <article className='about-article'>
        <h1 className='h1-title'>Try using an iphone blindfolded</h1>
        <p>It’s hard for people with good eyesight to understand the challenges that people with visual impairment have to face. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Things that are particularly difficult for people with bad eyesight is: </p>
        <ul>
          <li>How people treat you</li>
          <li>Using public transport</li>
          <li>preparing food</li>
        </ul>

        <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
      
        <img src={blindfold_img} alt="Blindfolded man looking at his phone. Phone is in the way of his face" />

        <p>Todays smartphons have ways to let people with visual impairment and even completly blind people use them. <br /><br /> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      </article>

      <article className='about-article'>
        <h1 className='h1-title'>Understanding people with visual impairment</h1>

        <p>To create a better understanding of the difficulties visual impairment creates: Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>


        <h2 className='h2-title'>What every sighted person should know about blindness</h2>
        
        <a className='margin-20' href="https://www.youtube.com/watch?v=F5z6fQE79mI">Watch with subtitles < HiExternalLink /> </a>
        
        <iframe src="https://www.youtube.com/embed/F5z6fQE79mI" title="What every sighted person should know about blindness" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        <div id='captions-wrapper'>

          <h2>Videos captions</h2>

          <p>
          Can you tell me, what do you most want sighted people to understand about your world? I knew
          this question was coming. Everyone asks it. It's fine, I'm not like saying it's a bad
          thing, I'm just making fun of it.
          Ever since I was little, when people would know that
          I was visually impaired, they would automatically assume I was slower, like mentally, and that's not
          the case. I understand the visual impairment can be kind of a stone in the way but, like,
          to treat me as best they can like any other person. Well they really just want to be treated
          like everybody else, so treat them like everybody else. Don't assume that they need more of
          your help than they really do. That they're very strong and independent people. I want
          to be treated like everybody else. It's important for them to have that sense of empowerment
          and independence. You know, it's kind of natural for us to want to jump in and help when we
          see someone struggling with something, especially if they have a disability. But it's important
          to give them the space to be independent first and let them try to figure it out. How amazingly
          capable they are. Their outcome or their product doesn't always look the same, but they're
          able to get there, just like their sighted peers. I love this job. I love that we get
          to empower students. We get to give families hope. And we get to say these kids are just
          kids and they're going to achieve great things, they're just going to do it in a different
          way. I want people to know that everyone is different. And my ears work way better than
          my eyes, and so do my hands. So, if you put them together, they're both my eye. And my
          cane is basically my eye, which helps me get around. I'm a regular kid, I can do things,
          like I can play the piano, I can dance. I can do normal things. I just do some things
          differently. Learn more about our Visual Services Program at spokaneschools.org/specialeducation,
          or call 509-354-5323.
          
          </p>
        </div>
        <p id='resize' className='drag-resize'>Drag to resize <BsArrowUpRight /> </p>
      </article>

      <div className='line'></div>


      <article className='contact-article'>
        <h1 className='h1-title'>Contact us</h1>

        <form id='form' className='contact-grid'>
          <div className='pair-wrapper'>
            <div className='form-div'>
                <label htmlFor="Fname">First Name*</label>
                <input type="text" id='Fname' name='Fname' onChange={(e) => setFname(e.target.value)} />
                <div className='error-message' id='FnameError'></div>
              </div>
            

              <div className='form-div'>
                <label htmlFor="Sname">Last Name*</label>
                <input type="text" id='Sname' name='Sname' onChange={(e) => setSname(e.target.value)} />
                <div className='error-message' id='SnameError'></div>
              </div>
          </div>
         
         <div className='pair-wrapper'>
            <div className='form-div'>
              <label htmlFor="email">Email*</label>
              <input type="email" id='email' name='email' onChange={(e) => setEmail(e.target.value)} />
              <div className='error-message' id='emailError'></div>
            </div>
            <div className='form-div'>
              <label htmlFor="phone">Phone number*</label>
              <input type="tel" id='phone' name='phone' onChange={(e) => setPhone(e.target.value)} />
              <div className='error-message' id='phoneError'></div>
            </div>
         </div>
          
          <div className='message-form-div'>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" onChange={(e) => setMessage(e.target.value)}></textarea>
            <div className='error-message' id='messageError'></div>
          </div>
          <button className='button' type='submit'>Send</button>
        </form>
      </article>

   </section>
  )
}

export default About