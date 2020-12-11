import React, { Fragment } from 'react'
import Avatar from './Avatar'

const Comentario = ({sujeto}) => {
    return ( 
        <Fragment>
            <h1>Comentarios</h1>
            <hr/>
            <div className="media">
                {/* <img src={sujeto.urlImage} alt="" className="mr-3"/> */}
                <Avatar urlImage={sujeto.urlImage} />
                <div className="media-body">
                    <h5 className="mt-0">{sujeto.nombre}</h5>
                    {sujeto.texto}
                </div>
            </div>
        </Fragment>
     );
}
 
export default Comentario;