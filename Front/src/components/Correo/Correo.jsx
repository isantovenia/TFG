import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import Sidebar from '../Sidebar/Sidebar.jsx';

function Correo(){
    const refForm = useRef();

    const handleLogout = () => {
        // Eliminar el token de autenticación u otra información relacionada con la sesión
        localStorage.removeItem('token');
        // Redirigir a la página de inicio de sesión u otra página después de cerrar sesión
        window.location.href = '/login'; // Redirige a la página de inicio de sesión
      };
  
      const username = localStorage.getItem('user');
      const rol = localStorage.getItem('rol');

    const handleSubmit = (event) => {
        event.preventDefault();
        const serviceId = 'service_x4hqjvo'
        const templateId = 'template_ue2ekuz'
        const apiKey = 'QVlmPuPPgI69VALco'

        emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
        .then(result => console.log(result.text))
        .catch(error => console.error(error))
    }

    return (
        <div>
            <Sidebar username={username} rol={rol} handleLogout={handleLogout} /> {/* Usando el componente Sidebar */}
            <form ref={refForm} action ="" onSubmit={handleSubmit}>
                <div className='hearder-contact'>
                    <h2>Contact us</h2>
                    <p>Please fill this form</p>
                </div>
                <fieldset className='field-name'>
                    <label className='symbol-required name' htmlFor='Name'></label>
                    <input name='username' type='text' placeholder='NOMBRE' required></input>
                </fieldset>
                <fieldset className='field-email'>
                    <label className='symbol-required' name='email'>Email</label>
                    <input name='email' type='email' placeholder='EMAIL' id='email' required></input>
                </fieldset>
                <fieldset className='field-message'>
                    <label className='symbol-required'>Email</label>                       
                    <input  maxLength='500' name='message' placeholder='MENSAJE' id='' cols='30'  raws='30' required></input>
                </fieldset>
                <button className='btn-send'>Send</button>
            </form>
        </div>
    );
}

export default Correo;