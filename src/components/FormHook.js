import React, { Component, Fragment } from 'react'
import { useForm } from 'react-hook-form'

const FormHook = () => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name="titulo"
                    className="form-control my-2"
                    ref={
                        register({
                            required: {value: true, message: 'Titulo obligatorio'}
                        })
                    }
                />
                <span className="text-danger text-small d-block mb-2" >
                    {errors?.titulo?.message}
                </span>
                <button>
                    Enviar
                </button>
            </form>
        </Fragment>
    )
}

export default FormHook