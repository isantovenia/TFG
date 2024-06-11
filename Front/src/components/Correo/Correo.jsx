import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Sidebar from '../Sidebar/Sidebar.jsx';
import './Correo.css'

function Correo() {
    const refForm = useRef();

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    const username = localStorage.getItem('user');
    const rol = localStorage.getItem('rol');

    const handleSubmit = (event) => {
        event.preventDefault();
        const serviceId = 'service_x4hqjvo';
        const templateId = 'template_ue2ekuz';
        const apiKey = 'QVlmPuPPgI69VALco';

        // Obtenemos el valor del campo de mensaje
        const message = event.target.message.value;
        const asunto = event.target.asunto.value;

        // Aquí puedes usar la variable 'username' directamente
        emailjs.send(serviceId, templateId, { username, asunto, message }, apiKey)
            .then(result => console.log(result.text))
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Sidebar username={username} rol={rol} handleLogout={handleLogout} />
            <form ref={refForm} action="" onSubmit={handleSubmit}>
                <div className='hearder-contact'>
                    <h2>Contactanos</h2>
                </div>
                <fieldset className='field-asunto'>
                    <label className='symbol-required'>Asunto</label>
                    <input maxLength='500' name='asunto' placeholder='Asunto' id='' cols='30' raws='30' required></input>
                </fieldset>
                <fieldset className='field-message'>
                    <label className='symbol-required'>Cuerpo</label>
                    <input maxLength='500' name='message' placeholder='MENSAJE' id='' cols='30' raws='30' required></input>
                </fieldset>
                <button className='btn-send'>Send</button>
            </form>
        </div>
    );
}

export default Correo;
