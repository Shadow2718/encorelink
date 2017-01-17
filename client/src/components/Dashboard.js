import React from 'react';
import OrganizerDashboard from './OrganizerDashboard';
import EventsAttendingContainer from '../containers/EventsAttendingContainer';

const Dashboard = ({ isMusician }) => {
  if (isMusician) {
    return <EventsAttendingContainer />;
  }

  return <OrganizerDashboard />;
};

export default Dashboard;
