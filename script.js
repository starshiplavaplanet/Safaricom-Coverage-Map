// Define the initMap function
function initMap() {
    const kenya = { lat: 0.0236, lng: 37.9062 }; // Center of Kenya
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: kenya
    });

    // Locations of cities covered by Safaricom's 5G and Fiber network
    const cities = [
        { name: 'Eldoret', position: { lat: 0.5143, lng: 35.2698 } },
        { name: 'Embu', position: { lat: -0.5373, lng: 37.4510 } },
        { name: 'Garissa', position: { lat: -0.4497, lng: 39.6461 } },
        { name: 'Kakamega', position: { lat: 0.2844, lng: 34.7523 } },
        { name: 'Kisumu', position: { lat: -0.0917, lng: 34.7676 } },
        { name: 'Lamu', position: { lat: -2.2700, lng: 40.9006 } },
        { name: 'Meru', position: { lat: 0.0617, lng: 37.6413 } },
        { name: 'Mombasa', position: { lat: -4.0435, lng: 39.6682 } },
        { name: 'Nairobi', position: { lat: -1.2864, lng: 36.8172 } },
        { name: 'Nakuru', position: { lat: -0.3031, lng: 36.0800 } },
        { name: 'Nyeri', position: { lat: -0.4256, lng: 36.9532 } },
        { name: 'Thika', position: { lat: -1.0331, lng: 37.0699 } }
    ];

    // Loop through cities array to add markers
    cities.forEach(city => {
        new google.maps.Marker({
            position: city.position,
            map: map,
            title: city.name,
            icon: {
                url: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png' // Green marker
            }
        });
    });
}

// Load Google Maps API script
document.addEventListener('DOMContentLoaded', function() {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD0vihV9_QtGb4kwySD1XKb47LfAsoPgE8&callback=initMap';
    script.defer = true;
    script.async = true;

    // Handle script loading error
    script.onerror = function() {
        console.error('Failed to load Google Maps API script.');
    };

    // Append script to the document
    document.head.appendChild(script);
});
