import React, { useState } from 'react'

const Profile = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobileNumber: '',
        gender: '',
        dob: '',
        address: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted: ', formData);
    };

    return (
        <section className='account-settings-section profile-section'>
            <div className='section-heading'>
                <div className="profile-breadcrumb">
                    <span>Profile & Settings / <span className='breadcrumb-active-page'>Notification Settings</span></span>
                </div>
                <div className='mediumHeading'>
                    <span>Profile</span>
                </div>
            </div>


            {/* profile section container  */}

            <div className="profile-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="profile-picture-upload">
                        <div className="profile-picture-placeholder"></div>
                        <button type="button" className="upload-btn">Upload Profile Picture</button>
                    </div>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Mobile Number</label>
                        <input
                            type="text"
                            name="mobileNumber"
                            placeholder="Mobile Number"
                            value={formData.mobileNumber}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Gender</label>
                        <div className="radio-group">
                            {['Male', 'Female', 'Others'].map((option) => (
                                <label key={option} className="radio-label">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={option}
                                        checked={formData.gender === option}
                                        onChange={handleInputChange}
                                    />
                                    <span className="radio-custom"></span>
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <textarea
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button type="submit" className="save-btn">Save</button>
                </form>
            </div>
        </section>
    )
}

export default Profile