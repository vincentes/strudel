$: note("<[e f e f [g a]]>").sound("piano").delay(0.2).room(2);

$: s("bd sd [~ bd] sd, misc").lpf("800,300");

$: s("hh*16,[~ cp*2]")
  .gain(0.4)
  .sometimesBy(0.5, (x) => x.speed(2));

$: note("[bb c#]")
  .sound("piano")
  .gain(3)
  .sometimesBy(0.6, (x) => x.hush());