'use client'

import React, { useState } from 'react'
import Image from 'next/image'
const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  })
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <>
      <section className='mt-[350px] desktop:mt-[450px] contact_bg-img container_dynamic'>
        <div className='container contact_glass_bg translate-y-[-100px] py-[96px]'>
          <div className='flex flex-col items-center justify-between text-center'>
            <h2 className='title_small'>Lets get in touch!</h2>
            <p className='body max-w-[432px] mt-[32px]'>
              If you have any inquiries, project ideas, or if you'd like to
              collaborate, please don't hesitate to get in touch using the form
              below. I'll do my best to respond as soon as possible.
            </p>

            <form
              onSubmit={handleSubmit}
              className='flex flex-col items-center justify-between  w-full h-auto max-w-[700px] mt-[54px] tablet:mt-[64px] '
            >
              <label htmlFor='email'></label>
              <input
                className='input_styles'
                required
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
                type='email'
              />
              <label htmlFor='subject'></label>
              <input
                className='input_styles'
                required
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                placeholder='Subject'
                type='text'
              />
              <label htmlFor='message'></label>
              <textarea
                className='input_styles'
                required
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Message'
                rows={6}
              />
              <button className='submit_btn mt-[16px]' type='submit'>
                Send
                <Image
                  className='pl-[5px] '
                  src='icons/sendarrow.svg'
                  height={16}
                  width={16}
                  alt='send'
                />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Form
