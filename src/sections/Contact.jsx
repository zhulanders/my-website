import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const formRef = useRef();
    const [form,setForm] = useState({name:'',email:'',message:''});
    const [loading,setLoading] = useState(false);
     const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
     };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            await emailjs.send('service_4ishoq9', "template_6kmzut1", {name: form.name, email:form.email, message:form.message}, 'OpJ3JzQAXvLaTEsCI');
            setLoading(false);
            alert('Your message has been sent!');
            setForm({name:'',email:'',message:''})
        } catch( error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong.')
        }
      
    }
    
    return (
        <section id='contact'className="c-space my-20">
          
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen' />
                <div className='contact-container'>
                    <h3 className='head-text'>Let's Talk</h3>
                    <p className='text-lg text-white-600 mt-3'>I'm always open to new opportunities and conversations.<br/>I'd love to hear from you!</p>
                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                            <input type="text" name="name" value={form.name} onChange={handleChange} required className='field-input' placeholder='Your Name'/>
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Email</span>
                            <input type="email" name="email" value={form.email} onChange={handleChange} required className='field-input' placeholder='yourname@gmail.com'/>
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Your Message</span>
                            <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className='field-input' placeholder='Hi, I wanna give you a job...'/>
                        </label>
                        <button className='field-btn' type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src='/assets/arrow-up.png' alt='arrow-up' className='field-btn_arrow' />
                        </button>
                    </form>
                </div>
            </div>
           
        </section>
    )
}
export default Contact;