import './Card.css';

import mapPinIcon from '../assets/map-pin-icon.png';

function Card(props) {
	const style = {
		backgroundImage: `url(${props.imageUrl})`,
	};

	return (
		<div className="card">
			<div className="card__image" style={style}></div>
			<div className="card__info">
				<p className="country-name">
					<img src={mapPinIcon} alt="Map pin icon" />
					{props.location.toUpperCase()}
				</p>
				<a href={props.googleMapsUrl} className="map-link" target="_blank" rel="noreferrer">
					View on Google Maps
				</a>
				<h2 className="venue__name">{props.title}</h2>
				<p className="date-interval">
					{props.startDate} - {props.endDate}
				</p>
				<p className="venue__description">{props.description}</p>
			</div>
		</div>
	);
}

export default Card;
