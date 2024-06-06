import React, {useState, useEffect} from "react";
import axios from 'axios';

const Hero = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() =>{
    fetchMeetings();
  }, []);

  const fetchMeetings = async () => {
    try {
      const response = await axios.get('/api/meetings');
      setMeetings(response.data);
    } catch (error) {
      console.error("Error fetching meetings", error);
    }
  };

  return (
    <section className="px-5">
    <div className="text-secondary px-16">
      <h1 className="font-bold text-4xl py-5">Welcome, User!</h1>
      <h2 className="font-semibold text-2xl">Today's Meetings</h2>
    </div>

    <div className="py-10 grid-cols-1 gap-2">
      {meetings.map((meeting) => (
        <div key={meeting._id} className="p-10 bg-white shadow-md rounded-lg">
          <h3 className="font-bold text-xl">{meeting.topic}</h3>
          <p className="text-gray-600">{meeting.company}</p>
          <ul className="grid grid-cols-2 gap-2">
            {meeting.availability.map((schedule, index) => (
              <li key={index} className="text-sm">{schedule.day} {schedule.time}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
  );
};

export default Hero;