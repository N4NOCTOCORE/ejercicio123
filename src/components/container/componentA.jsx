import React from 'react';
import { Contact } from '../../models/contact.class';
import ComponentB from '../pure/componentB';


const ComponentA = () => {

    const defaultContact = new Contact('Emmanuel','CM','ecm@cdsd.com',false); 

    return (
        <div>
            <h1>
                CONTACTO:
            </h1>
            <ComponentB contact={defaultContact}></ComponentB>
        </div>
    );
};



export default ComponentA;
