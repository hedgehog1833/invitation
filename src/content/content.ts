type Content = { header: string; content: string[] };

export const timeTableContent: Content[] = [
  { header: "Location",
    content: [
        "Hammesmühle 1, 56727 Mayen",
        "Die Anreise kann selbstverständlich nicht vollständig mit öffentlichen Verkehrsmitteln erfolgen. Der letzte Bahhof befindet sich in Mayen, die Hammesmühle selbst liegt ein wenig außerhalb, sodass die letzten Kilometer leider mit einem Auto erfolgen müssen.",
    ] },
  {
    header: "Ablauf",
    content: [
      "Um 13.00 Uhr findet die Trauung im engen familiären Kreis statt (die Räumlichkeiten des Standesamtes lassen nur eine kleine Personenzahl zu).",
      "Ab 15:00 Uhr treffen wir uns dann an der Hammesmühle. Gegen 16:00 Uhr wird es Kaffee und Kuchen geben, bevor wir dann um 18:30 Uhr zum Abendessen übergehen.",
      "Werft gern hin und wieder einen Blick auf diese Seite. Sollten sich Änderungen ergeben, werden wir das hier mitteilen.",
    ],
  },
];

export const accommodationContent: Content[] = [
  { header: "Unterkunft",
    content: ["Wenn ihr plant, hier zu übernachten, sprecht uns an und wir helfen euch bei der Suche nach einer passenden Unterkunft!"]
  },
];
