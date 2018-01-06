$(function() {
     var pattern = GeoPattern.generate('squares', {color: '#155799'});
     $('.page-header').css('background-image', pattern.toDataUrl());
});
