$: n("<2 2>/2")
  .sound("530_kit")
  .begin("<0 0.5>/2")
  .end("<0.5 1>/2")
  .cut(1)
  .speed("<1.5 1.3>")
  .lpf(500)
  .room(1.3);

$: s("bd sd [~ bd] sd, misc").lpf("800,300");

$: s("hh*16,[~ cp*2]")
  .gain("0.2 0.3")
  .sometimesBy(0.5, (x) => x.speed(1.5));
