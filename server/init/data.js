
const transports = [
  {
  transportName: "Route 1",
  type: "BRT",
  fare: 120,
  stops: [
    { name: "Khokrapar", lat: 24.9036432, lng: 67.21253779999999 },
    { name: "Saudabad", lat: 24.8934726, lng: 67.19421179999999 },
    { name: "RCD Ground", lat: 24.8992561, lng: 67.1980024 },
    { name: "Kalaboard", lat: 24.8877906, lng: 67.1879592 },
    { name: "Malir Halt", lat: 24.884567, lng: 67.1753509 },
    { name: "Colony Gate", lat: 24.8871214, lng: 67.14968449999999 },
    { name: "Nata Khan Bridge", lat: 24.887157, lng: 67.1344242 },
    { name: "Drigh Road Station", lat: 24.8863155, lng: 67.12597840000001 },
    { name: "PAF Base Faisal", lat: 24.8797519, lng: 67.1157236 },
    { name: "Lal Kothi Stop", lat: 24.8612199, lng: 67.0695211 },
    { name: "Karsaz", lat: 24.8904129, lng: 67.0911409 },
    { name: "Nursery", lat: 24.8615147, lng: 67.0617251 },
    { name: "FTC", lat: 24.8584457, lng: 67.0522474 },
    { name: "Regent Plaza", lat: 24.8556108, lng: 67.0389292 },
    { name: "Metropole", lat: 24.8510439, lng: 67.0307411 },
    { name: "Fawara Chowk", lat: 24.8790498, lng: 67.0202258 },
    { name: "Arts Council", lat: 24.8530063, lng: 67.0208892 },
    { name: "Shaheen Complex", lat: 24.8510544, lng: 67.0194896 },
    { name: "I.I.Chundrigar", lat: 24.8498732, lng: 67.0087249 },
    { name: "Tower", lat: 24.8489421, lng: 66.99736639999999 },
    { name: "Fisheries", lat: 24.8720196, lng: 67.0584288 },
    { name: "Dockyard", lat: 24.8396202, lng: 66.97542059999999 }
  ]
},
 {
  transportName: "Route 2",
  type: "BRT",
  fare: 120,
 stops: [
  { name: "Power House", lat: 24.949551, lng: 67.0731423 },
  { name: "UP More", lat: 24.9728003, lng: 67.06675349999999 },
  { name: "Nagan Chowrangi", lat: 24.9664702, lng: 67.06705029999999 },
  { name: "Shafiq Morr", lat: 24.9571187, lng: 67.0761386 },
  { name: "Sohrab Goth", lat: 24.945024, lng: 67.085698 },
  { name: "Gulshan Chowrangi", lat: 24.9219249, lng: 67.0941101 },
  { name: "NIPA", lat: 24.9175697, lng: 67.0970104 },
  { name: "Johar Morr", lat: 24.9044737, lng: 67.1135489 },
  { name: "COD", lat: 24.891534, lng: 67.132846 },
  { name: "Drigh Road Station", lat: 24.8863155, lng: 67.12597840000001 },
  { name: "Colony Gate", lat: 24.8871214, lng: 67.14968449999999 },
  { name: "Shah Faisal Colony", lat: 24.8773062, lng: 67.1591053 },
  { name: "Singer Chowrangi", lat: 24.8634624, lng: 67.0258101 },
  { name: "Khaddi Stop", lat: 25.6303029, lng: 67.09377309999999 },
  { name: "Indus Hospital", lat: 24.8173888, lng: 67.11129489999999 }
]
}
,
 {
  transportName: "Route 3",
  type: "BRT",
  fare: 120,
 stops: [
  { name: "Power House", lat: 24.949551, lng: 67.0731423 },
  { name: "UP More", lat: 24.9728003, lng: 67.0667535 },
  { name: "Nagan Chowrangi", lat: 24.9664702, lng: 67.0670503 },
  { name: "Sakhi Hasan", lat: 24.953974, lng: 67.0575571 },
  { name: "5 Star Chowrangi", lat: 24.9423257, lng: 67.0476951 },
  { name: "KDA Chowrangi", lat: 24.931101, lng: 67.0379466 },
  { name: "Board Office", lat: 24.9128349, lng: 67.0456011 },
  { name: "Nazimabad Eid Gah Ground", lat: 24.9114842, lng: 67.0298902 },
  { name: "Liaquatabad 10 Number", lat: 24.9087744, lng: 67.0510034 },
  { name: "Essa Nagri", lat: 24.9017243, lng: 67.0658209 },
  { name: "Civic Center", lat: 24.8994201, lng: 67.0726186 },
  { name: "National Stadium", lat: 24.8959345, lng: 67.0815241 },
  { name: "Karsaz", lat: 24.8904129, lng: 67.0911409 },
  { name: "Nursery", lat: 24.8615147, lng: 67.0617251 },
  { name: "FTC", lat: 24.8584457, lng: 67.0522474 },
  { name: "Korangi Road", lat: 24.8424899, lng: 67.1390562 },
  { name: "KPT Interchange upto Shan Chowrangi", lat: 24.8296638, lng: 67.0796477 },
  { name: "Nasir Jump", lat: 24.8231093, lng: 67.1246897 }
]

},
 {
  transportName: "Route 4",
  type: "BRT",
  fare: 120,
 stops: [
  { name: "Power House", lat: 24.949551, lng: 67.0731423 },
  { name: "UP Mor", lat: 24.9728003, lng: 67.0667535 },
  { name: "Nagan Chowrangi", lat: 24.9664702, lng: 67.0670503 },
  { name: "Shafiq Mor", lat: 24.9571187, lng: 67.0761386 },
  { name: "Sohrab Goth", lat: 24.945024, lng: 67.085698 },
  { name: "Water Pump", lat: 25.064596, lng: 67.2705509 },
  { name: "Ayesha Manzil", lat: 24.9310299, lng: 67.0792604 },
  { name: "Karimabad", lat: 24.9195384, lng: 67.0591187 },
  { name: "Liaqautabad 10", lat: 24.9087744, lng: 67.0510034 },
  { name: "Laloo Khait", lat: 24.9076665, lng: 67.0527889 },
  { name: "Teen Hati", lat: 24.893172, lng: 67.0436269 },
  { name: "Jehangir Road", lat: 24.886554, lng: 67.0413851 },
  { name: "Numaish", lat: 24.8723158, lng: 67.0352924 },
  { name: "Mobile Market", lat: 24.8607343, lng: 67.0011364 },
  { name: "Urdu Bazar", lat: 24.882117, lng: 66.9855025 },
  { name: "Civil Hospital", lat: 24.8589392, lng: 67.0101439 },
  { name: "City Court", lat: 24.8607343, lng: 67.0011364 },
  { name: "Light House", lat: 24.8555485, lng: 67.0103228 },
  { name: "Bolton Market", lat: 24.8516438, lng: 67.0006627 },
  { name: "Tower", lat: 24.8489421, lng: 66.9973664 },
  { name: "Keamari", lat: 24.8683678, lng: 66.9181265 }
]

},
 {
   transportName: "Route 8",
  type: "BRT",
  fare: 120,
  stops: [
    { name: "Yousuf Goth", lat: 24.9560244, lng: 66.93476509999999 },
    { name: "Naval Colony", lat: 24.9453192, lng: 66.9377434 },
    { name: "Baldia", lat: 24.9525409, lng: 66.9549567 },
    { name: "Sher Shah", lat: 24.8850391, lng: 66.99731179999999 },
    { name: "Gulbai", lat: 24.8764217, lng: 66.9678993 },
    { name: "Agra Taj Colony", lat: 24.8714301, lng: 66.9824193 },
    { name: "Daryabad", lat: 24.8622617, lng: 66.9906101 },
    { name: "Jinnah Bridge", lat: 24.8458046, lng: 66.9930287 },
    { name: "Tower", lat: 24.8489421, lng: 66.99736639999999 }
  ]
}

];

 module.exports = { data: transports };
