

import { calendarIcon } from '../Functions/themes/icons';
import formatDateForGoogleCalendar from '../Functions/Utils/formatDateForGoogleCalendar';

const CalendarBTN = ({classStyle,event}) => {

  console.log(event)

    const now = Date.now();

    const actualISOTime = new Date(now).toISOString();


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
      
      const googleCalendarUrl = `https://calendar.google.com/calendar/r/eventedit?${params.join('&')}`;
      
   

 

  return (
    <div className={classStyle || "text-danger"}>
      <a className='' href={googleCalendarUrl} rel="noopener noreferrer" target="_blank" aria-label='Esemény hozzáadása a naptárhoz'>{calendarIcon}</a>
    </div>
  );
};

export default CalendarBTN;



/*
import { calendarIcon } from '../Functions/themes/icons';

const CalendarBTN = ({ event }) => {
  // Aktuális időpont lekérése
  const now = new Date();
  const currentISOTime = now.toISOString();

  // Esemény adatok destrukturálása alapértelmezett értékekkel
  const {
    title = '',
    startTime = currentISOTime, // Alapértelmezett érték: aktuális idő
    endTime = currentISOTime,   // Alapértelmezett érték: aktuális idő
    location = '',
    description = ''
  } = event;

  // Dátum formázása a Google Naptár számára
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getUTCFullYear();
    const month = String(d.getUTCMonth() + 1).padStart(2, '0');
    const day = String(d.getUTCDate()).padStart(2, '0');
    const hours = String(d.getUTCHours()).padStart(2, '0');
    const minutes = String(d.getUTCMinutes()).padStart(2, '0');
    const seconds = String(d.getUTCSeconds()).padStart(2, '0');
    return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
  };

  // URL paraméterek összeállítása
  const baseUrl = 'https://calendar.google.com/calendar/r/eventedit?';
  const params = new URLSearchParams();

  if (title) params.append('text', encodeURIComponent(title));
  const formattedStartTime = formatDate(startTime);
  const formattedEndTime = formatDate(endTime);
  if (formattedStartTime && formattedEndTime) {
    params.append('dates', `${formattedStartTime}/${formattedEndTime}`);
  }
  if (description) params.append('details', encodeURIComponent(description));
  if (location) params.append('location', encodeURIComponent(location));

  // Teljes Google Naptár URL
  const googleCalendarUrl = baseUrl + params.toString();

  return (
    <div className="calendar float-end pe-3 pt-2">
      <a
        className="text-danger"
        href={googleCalendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Esemény hozzáadása a naptárhoz"
      >
        {calendarIcon}
      </a>
    </div>
  );
};

export default CalendarBTN;


*/