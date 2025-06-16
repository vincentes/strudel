stack(
  note("e4 e3 eb5*3 eb4 db5*3 db4 a4*2 ab4 e5")
    .sound("piano")
    .gain(0.2)
    .room(0.5)
    .delay(0.3)
    .add(note("0,.1,.2"))
    .lpf(800)
);
