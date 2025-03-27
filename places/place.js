// header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
}) 


// function showInfo(country) {
//     const infoData = {
//       'Australia': {
//         reason: 'Beautiful landscapes and diverse wildlife.',
//         travel: 'Fly to Sydney or Melbourne, then explore by car or domestic flights.',
//         places: 'Great Barrier Reef, Sydney Opera House, Uluru.'
//       },
//       'Japan': {
//         reason: 'Blend of tradition and modernity.',
//         travel: 'Fly to Tokyo or Osaka, then use Japan Rail Pass for travel.',
//         places: 'Mount Fuji, Kyoto Temples, Tokyo Tower.'
//       },
//       'New Zealand': {
//         reason: 'Stunning nature and adventure sports.',
//         travel: 'Fly to Auckland or Christchurch, then rent a car.',
//         places: 'Milford Sound, Hobbiton, Rotorua.'
//       },
//       'Italy': {
//         reason: 'Rich history, culture, and cuisine.',
//         travel: 'Fly to Rome or Milan, then use trains for travel.',
//         places: 'Colosseum, Venice Canals, Florence Art Museums.'
//       },
//       'France': {
//         reason: 'Art, culture, and world-class cuisine.',
//         travel: 'Fly to Paris or take the Eurostar from London.',
//         places: 'Eiffel Tower, Louvre Museum, French Riviera.'
//       }
//     };
  
//     const data = infoData[country];
//     document.getElementById('info-title').innerText = country;
//     document.getElementById('reason').innerText = data.reason;
//     document.getElementById('travel').innerText = data.travel;
//     document.getElementById('places').innerText = data.places;
//     document.getElementById('info').style.display = 'block';
//   }
  
//   function closeInfo() {
//     document.getElementById('info').style.display = 'none';
//   }