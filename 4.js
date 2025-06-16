$: note("[e f e f [g a]]").sound("piano").delay(0.2).room(2);

$: s("bd sd [~ bd] sd,hh*16, misc").lpf("800,200,300");

$: note("[bb c#]")
  .sound("piano")
  .gain(3)
  .sometimesBy(0.6, (x) => x.hush());
