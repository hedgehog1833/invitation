type Content = { header: string; content: string[] };
type AccomodationContent = {
  header: string;
  links: { title: string; url: string }[];
};
export const timeTableContent: Content[] = [
  {
    header: "Location",
    content: [
      "Hammesmühle 1, 56727 Mayen",
      "Die Anreise kann selbstverständlich nicht vollständig mit öffentlichen Verkehrsmitteln erfolgen. Der letzte Bahhof befindet sich in Mayen, die Hammesmühle selbst liegt ein wenig außerhalb, sodass die letzten Kilometer leider mit einem Auto erfolgen müssen.",
    ],
  },
  {
    header: "Ablauf",
    content: [
      "Um 13.00 Uhr findet die Trauung im engen familiären Kreis statt (die Räumlichkeiten des Standesamtes lassen nur eine kleine Personenzahl zu).",
      "Ab 15:00 Uhr treffen wir uns dann an der Hammesmühle. Gegen 16:00 Uhr wird es Kaffee und Kuchen geben, bevor wir dann um 18:30 Uhr zum Abendessen übergehen.",
      "Werft gern hin und wieder einen Blick auf diese Seite. Sollten sich Änderungen ergeben, werden wir das hier mitteilen.",
    ],
  },
];

export const accommodationContent: AccomodationContent[] = [
  {
    header: "Pensionen und Gasthäuser im nahen Umfeld der Hammesmühle",
    links: [
      {
        title: "Gasthaus am Hochsimmer",
        url: "https://www.booking.com/hotel/de/gastehaus-am-hochsimmer.de.html?aid=2127502&label=metagha-link-MRDE-hotel-2358180_dev-desktop_los-1_bw-65_dow-Saturday_defdate-0_room-0_gstadt-2_rateid-0_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20250412_ppt-&sid=dc674151f25a54829f15c9c8dd66fdd8&all_sr_blocks=235818001_403048216_2_2_0&checkin=2025-04-12&checkout=2025-04-13&dest_id=-1768062&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=235818001_403048216_2_2_0&hpos=1&matching_block_id=235818001_403048216_2_2_0&no_rooms=1&req_adults=2&req_children=0&room1=A,A&sb_price_type=total&sr_order=popularity&sr_pri_blocks=235818001_403048216_2_2_0__9600&srepoch=1738836677&srpvid=db6047985d2600fa&type=total&ucfs=1&",
      },
      {
        title: "Zum Anker",
        url: "https://www.booking.com/hotel/de/landgasthof-zum-anker.de.html?aid=2127502&label=metagha-link-MRDE-hotel-10302297_dev-desktop_los-1_bw-65_dow-Saturday_defdate-0_room-0_gstadt-2_rateid-public_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20250412_ppt-&sid=dc674151f25a54829f15c9c8dd66fdd8&all_sr_blocks=1030229706_375719062_2_2_0&checkin=2025-04-12&checkout=2025-04-13&dest_id=-1815729&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1030229706_375719062_2_2_0&hpos=1&matching_block_id=1030229706_375719062_2_2_0&no_rooms=1&req_adults=2&req_children=0&room1=A,A&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1030229706_375719062_2_2_0__6500&srepoch=1738837038&srpvid=e86a484d634703a2&type=total&ucfs=1&",
      },
      {
        title: "Landhaus Kürrenberg",
        url: "https://www.booking.com/searchresults.de.html?aid=2127502&label=metagha-link-MRDE-hotel-4828532_dev-desktop_los-1_bw-64_dow-Saturday_defdate-0_room-0_gstadt-2_rateid-0_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20250412_ppt-&utm_medium=mapresults&hca=m&no_rooms=1&show_room=482853201_156497313_2_2_0&utm_content=dev-desktop_los-1_bw-64_dow-Saturday_defdate-0_room-0_gstadt-2_rateid-0_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20250412_ppt-&utm_campaign=DE&utm_term=hotel-4828532&ext_price_total=98.00&utm_source=metagha&ts=1738915805&highlighted_hotels=4828532&checkin=2025-04-12&redirected=1&city=-1824196&hlrd=with_dates&group_adults=2&source=hotel&group_children=0&checkout=2025-04-13&keep_landing=1&sid=dc674151f25a54829f15c9c8dd66fdd8",
      },
    ],
  },
  {
    header: "Gehobeneres Hotel, Fahrtzeit ca 25 Min.",
    links: [
      {
        title: "Purs",
        url: "https://www.booking.com/hotel/de/gastehaus-am-hochsimmer.de.html?aid=2127502&label=metagha-link-MRDE-hotel-2358180_dev-desktop_los-1_bw-65_dow-Saturday_defdate-0_room-0_gstadt-2_rateid-0_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20250412_ppt-&sid=dc674151f25a54829f15c9c8dd66fdd8&all_sr_blocks=235818001_403048216_2_2_0&checkin=2025-04-12&checkout=2025-04-13&dest_id=-1768062&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=235818001_403048216_2_2_0&hpos=1&matching_block_id=235818001_403048216_2_2_0&no_rooms=1&req_adults=2&req_children=0&room1=A,A&sb_price_type=total&sr_order=popularity&sr_pri_blocks=235818001_403048216_2_2_0__9600&srepoch=1738836677&srpvid=db6047985d2600fa&type=total&ucfs=1&",
      },
    ],
  },
];
