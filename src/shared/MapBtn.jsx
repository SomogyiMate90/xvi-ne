import { mapIcon } from "../Functions/themes/icons";

const MapBtn = ({address}) =>{

    if((typeof address !== 'string')) return;

    const query = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

    return(
    <div>
      <a href={googleMapsUrl} rel="noopener noreferrer" target="_blank" aria-label='Esemény hozzáadása a naptárhoz'>{mapIcon}</a>
    </div>
    )
}

export default MapBtn;