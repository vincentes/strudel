$: n("2 2 2 ~").s("field_trip_kit").gain("1 1.4 1.8 ~");

$: n("~ ~ 8 ~").s("field_trip_kit");

$: n("3 ~ ~ <[3 ~] [[8 8] ~] [3 ~] [8 8 8 8]>")
  .lpf("400 <400 10000 500 10000>")
  .pan("0.5 <0.5 [1 0] 0.5 [1 0 1 0]>")
  .s("field_trip_kit");

$: n("<1 1 1 0> ~ ~ <4 4 [2 2] [2 4]>")
  .scale("D:minor")
  .s("gm_piano")
  .room(0.2)
  ._pianoroll();

$: n("<[2 [2 2]] [~ [3 4]]>")
  .scale("D:minor")
  .s("gm_electric_guitar_jazz")
  .octave("1")
  .hush();

$: n("<[2 [~ <6 [7 6]>]] [~ [<3 2> <4 1 3>]]>")
  .scale("D:minor")
  .s("gm_overdriven_guitar")
  .room(1);

$: n("<[2 [~ <6 [7 6]>]] [~ [<3 2> <4 1 3>]]>")
  .scale("D:minor")
  .s("gm_overdriven_guitar")
  .room(1);

$: n("<7 <6 [6 5] [6 3]>>")
  .scale("D:minor")
  .s("gm_orchestra_hit")
  .octave("6")
  .room(1);
