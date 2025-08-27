import React from 'react'

const Location = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 mt-16 pb-5">
                <div className="col-span-12 lg:col-start-2 lg:col-span-10 px-4 lg:px-0">
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.319340947474!2d77.1780242!3d28.710001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d021de87463dd%3A0x12c3881483b2c666!2sAkash%20Cinema!5e0!3m2!1sen!2sin!4v1756196903622!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            className="rounded-xl"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location