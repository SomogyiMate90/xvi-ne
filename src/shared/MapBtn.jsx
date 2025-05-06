import { mapIcon } from "../Functions/themes/icons";

const MapBtn = ({className, address}) =>{

    if((typeof address !== 'string' || address === '')) return;

    const query = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

    return(
    <div className={className}>
      <a href={googleMapsUrl} rel="noopener noreferrer" target="_blank" aria-label='Navigálás a Google térképre'>{mapIcon}</a>
    </div>
    )
}

export default MapBtn;