import { EmailJSResponseStatus } from '@emailjs/browser';
import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Fox from '../models/Fox';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
    const formref = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [isloading, setIsLoading] = useState(false)
    const [currentAnimation, setcurrentAnimation] = useState('idle');

    const { alert, showAlert, hideAlert } = useAlert();

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleFocus = () => {
        setcurrentAnimation('walk');
    }

    const handleBlur = () => {
        setcurrentAnimation('idle');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setcurrentAnimation('hit');

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
            showAlert({
                show: true,
                text: 'Message sent successfully!',
                type: 'success'
            })
            setTimeout(() => {
                hideAlert();
                setcurrentAnimation('idle');
                setForm({ name: '', email: '', message: '' })
            }, [3000])
        }).catch((error) => {
            setIsLoading(false);
            setcurrentAnimation('idle');
            console.log(error);
            showAlert({
                show: true,
                text: 'Informatiuon Incorrect!',
                type: 'danger'
            })
        })
    }

    return (
        <section className='relative flex lg:flex-row flex-col max-container h-full'>
            {alert.show && <Alert {...alert} />}
            {/* <Alert text="test" /> */}
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
            <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
                <Canvas
                    camera={{
                        position: [0, 0, 5],
                        fov: 75,
                        near: 0.1,
                        far: 1000
                    }}
                >
                    <directionalLight intensity={2.5} position={[0, 0, 1]} />
                    <ambientLight intensity={0.5} />
                    <Suspense fallback={<Loader />}>
                        <Fox
                            currentAnimation={currentAnimation}
                            position={[0.5, 0.35, 0]}
                            rotation={[12.6, -0.6, 0]}
                            scale={[0.5, 0.5, 0.5]}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Contact