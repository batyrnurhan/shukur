import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./user_profile.css";
import "../products/products.css";
import pen from "./bi_vector-pen.svg";
import photo_2 from "./Group 136.svg";
import checked from "./el_ok-circle.svg";
import arrow from "./Group 94.svg";
import product from "../products/pngegg (36) 1.png";
import LogoutButton from "../Logout";

function User_Profile({ authToken }) {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize the navigate function
    const [editMode, setEditMode] = useState(false);
    const [updatedProfile, setUpdatedProfile] = useState({});

    useEffect(() => {
        const authToken = localStorage.getItem('authToken'); // Retrieve the token from local storage
        if (!authToken) {
            setError('No auth token found');
            navigate('/login'); // Redirect to login page
            return;
        }

        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/accounts/user_profile', {
                    headers: { Authorization: `Token ${authToken}` },
                });
                setProfile(response.data);
            } catch (error) {
                setError('Error fetching profile');
                console.error('Error fetching profile', error);
            }
        };

        fetchProfile();
    }, []);

    const toggleEditMode = () => {
        setEditMode(!editMode);
        setUpdatedProfile(profile); // Initialize updatedProfile with current profile
    };

    const handleChange = (event) => {
        setUpdatedProfile({ ...updatedProfile, [event.target.name]: event.target.value });
    };

    const saveProfile = async () => {
    try {
        const response = await axios.put('http://localhost:8000/api/accounts/user_profile/update/', updatedProfile, {
            headers: { Authorization: `Token ${authToken}` },
        });
        setProfile(response.data);
        setEditMode(false);
    } catch (error) {
        console.error('Error updating profile', error);
    }
};


    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!profile) {
        return <div>Loading profile...</div>;
    }
    return (
        <div>
            <div className="User_profile_header">
                <h2 className="UP_h2">Личный кабинет</h2>
            </div>
            <div className="User_profile">
                <div className="row">
                    <div className="col-lg-4 UP_1_container">
                        {profile.avatar === null ? <img src={photo_2} alt="Profile" /> : <img src={profile.avatar} alt="Profile" />}
                    </div>
                    <div className="col-lg-8 UP_2_container">
                        <h3 className="UP_brim">
                            {profile.username}
                            <img src={pen} className="UP_pen" alt="Edit" />
                            <div className="UP_pen_text">Ред.</div>
                        </h3>
                        <div className="UP_brim">
                            <img src={checked} alt="Checked" />
                            <div className="UP_brim_text"><span>E-mail:</span>{profile.email}</div>
                            <img src={pen} className="UP_pen" alt="Edit" />
                            <div className="UP_pen_text">Ред.</div>
                        </div>
                        <div className="UP_brim">
                            <img src={checked} alt="Checked" />
                            <div className="UP_brim_text"><span>Телефон:</span>{profile.phoneNumber}</div>
                            <img src={pen} className="UP_pen" alt="Edit" />
                            <div className="UP_pen_text">Ред.</div>
                        </div>
                        <div className="UP_brim">
                            <div className="UP_brim_text"><span>Адрес:</span>{profile.adres}</div>
                            <img src={pen} className="UP_pen" alt="Edit" />
                            <div className="UP_pen_text">Ред.</div>
                        </div>
                    </div>
                </div>
            </div>
            <LogoutButton />
        </div>
    );
}

export default User_Profile;
