

var num = Math.floor(Math.random() * 4) + 1;



$("#card").wScratchPad({
  size: 100, // The size of the brush/scratch.
  
  
  bg: 'girl.jpg', // Background image path.
  fg: '2024Prankgender.jpg', // Foreground image path.
  cursor: 'pointer' // Cursor type.

 
});

$("#card2").wScratchPad({
  size: 100, // The size of the brush/scratch.
  
  
  bg: `Gpay_Card ${num}.jpg`, // Background image path.
  fg: '2024blankcalendarNew Projectexpecting_3.jpg', // Foreground image path.
  cursor: 'pointer' // Cursor type.

 
})

;
