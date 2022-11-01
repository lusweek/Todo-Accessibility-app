import React from 'react'
import blindfold_img from '../img/blindfolded-low-res.webp'

function About() {
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

        <a className='margin-20' href="https://www.youtube.com/watch?v=F5z6fQE79mI">Watch video on youtube</a>

        <iframe src="https://www.youtube.com/embed/F5z6fQE79mI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <div className='captions-wrapper'>

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

      </article>

      <div className='line'></div>


      <article className='contact-article'>

      </article>

   </section>
  )
}

export default About