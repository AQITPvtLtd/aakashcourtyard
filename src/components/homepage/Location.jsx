import React from 'react'

const Location = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 mt-16">
                <div className="col-span-12 lg:col-start-2 lg:col-span-10 px-4 lg:px-0">
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.315932259742!2d77.17814849999999!3d28.7101029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03108b2ef257%3A0x78b0adaad9a7b38d!2sAakash%20Courtyard!5e0!3m2!1sen!2sin!4v1756811432727!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            className="rounded-xl"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* <iframe  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
            </div>
        </div>
    )
}

export default Location