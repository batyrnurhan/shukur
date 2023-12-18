// PrayerTimesPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/PrayerTimesPage.css';

const PrayerTimesPage = () => {
    const [prayerTimes, setPrayerTimes] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch prayer times
    const fetchPrayerTimes = () => {
        const apiURL = `https://namaztimes.kz/api/praytimes`;
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setPrayerTimes(data);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchPrayerTimes();
    }, []);

    const getCurrentPrayer = () => {
        const now = new Date();
        const currentTime = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

        const prayerSchedule = prayerTimes.praytimes;
        const prayers = Object.keys(prayerSchedule).map(key => {
            return { name: key, time: prayerSchedule[key] };
        });

        for (let i = 0; i < prayers.length - 1; i++) {
            if (currentTime >= prayers[i].time && currentTime < prayers[i + 1].time) {
                return `${prayers[i].name} - ${prayers[i].time}`;
            }
        }

        return `${prayers[prayers.length - 1].name} - ${prayers[prayers.length - 1].time}`; // Default to last prayer if none match
    };

    if (isLoading) {
        return <div className="loading">Loading prayer times...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    // Determine the current prayer time and highlight it
    const currentPrayerInfo = prayerTimes ? getCurrentPrayer() : 'Loading...';

    return (
        <div className="prayer-times-container">
            <h1>Prayer Times in {prayerTimes.attributes.CityName}</h1>
            <div className="current-prayer-time">
                {currentPrayerInfo}
            </div>
            <ul className="month-tabs clearfix">
                {/* Generate month tabs */}
                <li><a href="#january" className="active">Январь</a></li>
                {/* ... other months */}
            </ul>
            <div className="monthly-prayer-times">
                <table>
                    <thead>
                    <tr>
                        <th>Prayer</th>
                        <th>Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.entries(prayerTimes.praytimes).map(([key, value]) => (
                        <tr key={key} className={currentPrayerInfo.startsWith(key) ? 'active-time' : ''}>
                            <td>{key}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PrayerTimesPage;
