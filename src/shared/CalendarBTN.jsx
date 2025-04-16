

import { calendarIcon } from '../Functions/themes/icons';
import formatDateForGoogleCalendar from '../Functions/Utils/formatDateForGoogleCalendar';

const CalendarBTN = ({event}) => {

     const {
        title = undefined,
        startTime = undefined,
        endTime = undefined,
        address = undefined,
        description = undefined
      } = event;

      const params = [];

      if (title) params.push(`text=${encodeURIComponent(title)}`);
      if (description) params.push(`details=${encodeURIComponent(description)}`);
      if (startTime && endTime)
        params.push(`dates=${formatDateForGoogleCalendar(startTime)}/${formatDateForGoogleCalendar(endTime)}`);
      if (address) params.push(`location=${encodeURIComponent(address)}`);

      if(params.length < 4) return;
      
      const googleCalendarUrl = `https://calendar.google.com/calendar/r/eventedit?${params.join('&')}`;
   

  return (
    <div>
      <a href={googleCalendarUrl} rel="noopener noreferrer" target="_blank" aria-label='Esemény hozzáadása a naptárhoz'>{calendarIcon}</a>
    </div>
  );
};

export default CalendarBTN;
