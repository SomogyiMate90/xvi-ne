

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


      if(startTime){
        const now = Date.now();

        const validStartTime = new Date(startTime).getTime()

        if(isNaN(validStartTime)) return;
        
        
        console.log(now)
        console.log(validStartTime)

        if((validStartTime - now) < 0) return

      }

      const validEndTime = endTime === '' ? startTime : endTime;
      const validAddress = address === '' ? 'Hungary' : address;
      const params = [];

      if (title) params.push(`text=${encodeURIComponent(title)}`);
      if (description) params.push(`details=${encodeURIComponent(description)}`);
      if (startTime)
        params.push(`dates=${formatDateForGoogleCalendar(startTime)}/${formatDateForGoogleCalendar(validEndTime)}`);
      
      params.push(`location=${encodeURIComponent(validAddress)}`);

      if(params.length < 4) return;
      
      const googleCalendarUrl = `https://calendar.google.com/calendar/r/eventedit?${params.join('&')}`;
   

  return (
    <div>
      <a href={googleCalendarUrl} rel="noopener noreferrer" target="_blank" aria-label='Esemény hozzáadása a naptárhoz'>{calendarIcon}</a>
    </div>
  );
};

export default CalendarBTN;
