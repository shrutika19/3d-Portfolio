import { EmailJSResponseStatus } from '@emailjs/browser';
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formref = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [isloading, setIsLoading] = useState(false)

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleFocus = () => { }

    const handleBlur = () => { }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: 'Shrutika Jaiswal',
                from_email: form.email,
                to_email: 'shrutika19j@gmail.com',
                message: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KAY
        ).then(() => {
            setIsLoading(false);
            setForm({ name: '', email: '', message: '' })
        }).catch((error) => {
            setIsLoading(false);
            console.log(error)
        })
    }

    return (
        <section className='relative flex lg:flex-row flex-col max-container'>
            <div className='flex-1 min-w-[50%] flex flex-col'>
                <h1 className='head-text'>Get in Touch</h1>
                <form
                    className='w-full flex flex-col gap-7 mt-14'
                    onSubmit={handleSubmit}
                >
                    <label className='text-black-500 font-semibold'>
                        Name
                        <input
                            type='text'
                            name='name'
                            className='input'
                            placeholder='Enter your name..'
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Email
                        <input
                            type='email'
                            name='email'
                            className='input'
                            placeholder='Enter your mail..'
                            required
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Your Message
                        <textarea
                            name='message'
                            rows={4}
                            className='textarea'
                            placeholder='Let me know how I can help you!'
                            required
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <button
                        type='submit'
                        className='btn'
                        disabled={isloading}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        {isloading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact