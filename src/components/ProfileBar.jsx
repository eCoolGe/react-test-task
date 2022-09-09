import React from 'react';
import profileBg from "../images/profile_bg.jpg";
import profileLogo from "../images/profile_logo.jpg";

const ProfileBar = () => {
    return (
        <div>
            <img className="profile__bg img-fluid" src={profileBg} alt=""/>

            <div className="container">
                <div className="row profile__bar">
                    <div className="col-sm-1 col-md-12 col-lg-1"></div>
                    <div className="col-5 col-sm-4 col-md-3 col-lg-2 col-xl-1 align-self-start">
                        <img className="profile__logo img-fluid" src={profileLogo} alt=""/>
                    </div>
                    <div className="col-7 col-sm-5 col-md-4 col-lg-5 col-xl-6 align-self-center">
                        <span className="m-xl-5 fs-3 fw-bold">Ricardo Cooper</span>
                    </div>
                    <div className="col-12 col-md-5 col-lg-4 align-self-end mt-5 mt-md-0 text-center">
                        <button type="button" className="btn btn-light m-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-envelope m-1" viewBox="0 0 16 16">
                                <path
                                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                            </svg>
                            Message
                        </button>
                        <button type="button" className="btn btn-light m-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-telephone-fill m-1" viewBox="0 0 16 16">
                                <path
                                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            Call
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileBar;