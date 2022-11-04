import React from 'react'

function MessageSent() {

  const closeModal = () => {

    const Fname = document.getElementById('Fname');
    const Sname = document.getElementById('Sname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    const form = document.getElementById('form');

    document.querySelector('#set-component').style.display="none";
    
    
    Fname.value=''
    Sname.value=''
    email.value=''
    phone.value=''
    message.value=''
    form.value=''

  }

  return (
    <section id='set-component' className='modal-wrapper'>
        <div className='modal-box'>
            <div className='modal-content'>
                <h1>Message sent!</h1>
                <button id='modal-btn' onClick={closeModal}>
                    Perfect!    
                </button>
            </div>  
        </div>
    </section>
  ) 
}

export default MessageSent