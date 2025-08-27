import React from 'react'
import Form from './Form'
import Moviecard from './Moviecard'

const Contact = () => {
    return (
        <section className="px-4 lg:px-10">
            <div className="lg:grid lg:grid-cols-12 lg:gap-10 items-center">
                {/* Moviecard */}
                <div className="col-span-6 flex justify-center">
                    <Moviecard />
                </div>

                {/* Form */}
                <div className="col-span-6 flex justify-center">
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default Contact
