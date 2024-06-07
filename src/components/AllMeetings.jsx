import React, {useState, useEffect} from "react";
import axios from 'axios';

const AllMeetings = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() =>{
    fetchMeetings();
  }, []);

  const fetchMeetings = async () => {
    try {
      const response = await axios.get('api/meetings');
      setMeetings(response.data);
    } catch (error) {
      console.error("Error fetching meetings", error);
    }
  };

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  };

  return (
  <section className="px-5 py-10 ">
    <div className="text-secondary px-16">
      <h1 className="font-bold text-6xl py-5">All Meetings</h1>
    </div>

    <div className="py-10 grid-cols-1 gap-2">
      <div className="py-10">
        {meetings.map((meeting) => (
          <div key={meeting._id} className="p-10 bg-white shadow-md rounded-lg m-5">
            <h3 className="font-bold text-4xl py-2">{meeting.topic}</h3>
            <p className="text-gray-600 text-2xl py-2">{meeting.company}</p>
            <div className="text-xl">
              {`Meeting Time: ${formatTime(meeting.startTime)} - ${formatTime(meeting.endTime)}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default AllMeetings;