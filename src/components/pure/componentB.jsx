import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ComponentB = ({contact}) => {
    return (
        <div>
            <h2>
                Nombre: {contact.nombre}
            </h2>
            <h3>
                Apellido: {contact.apelido}
            </h3>
            <h4>
                Email: {contact.email}
            </h4>
            <h5>
                El usuario esta: {contact.estado ? 'Conectado':'Desconectado'}
            </h5>
        </div>
    );
};


ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ComponentB;
