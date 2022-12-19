$(document).ready(function() {
  // Create a dictionary to store the Amenity IDs
  let amenities = {};

  // Listen for changes on each input checkbox tag
  $('input[type="checkbox"]').change(function() {
    // Get the Amenity ID
    let amenityId = $(this).data('name');

    // Check if the checkbox is checked or unchecked
    if ($(this).is(':checked')) {
      // Add the Amenity ID to the dictionary
      amenities[amenityId] = true;
    } else {
      // Remove the Amenity ID from the dictionary
      delete amenities[amenityId];
    }

    // Update the h4 tag with the list of Amenities checked
    let amenitiesList = '';
    
    for (let id in amenities) {
      if (amenitiesList === '') amenitiesList += id;
      else amenitiesList += ', ' +  id  ;
    }
    $('div.amenities h4').text(amenitiesList);
  });
});
