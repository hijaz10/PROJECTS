/*Create a function that accepts an array of objects representing songs and sorts them based on their duration.
Sample input: [
  { title: 'Song 1', duration: 180 },
  { title: 'Song 2', duration: 240 },
  { title: 'Song 3', duration: 200 }
]
Expected output: [
  { title: 'Song 1', duration: 180 },
  { title: 'Song 3', duration: 200 },
  { title: 'Song 2', duration: 240 }
]
*/
function sort(songs) {
  
  var sortedSongs=songs.sort((a, b) => a.duration - b.duration);

  return sortedSongs;
}

var sample = [
  { title: 'Song 1', duration: 180 },
  { title: 'Song 2', duration: 240 },
  { title: 'Song 3', duration: 200 }
];

var result = sort(sample);
console.log(result); 
