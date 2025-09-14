---
title: ""
description: "Baneoversikt og booking for Haugerud IF Fotball"
---

<iframe src="https://location.rubic.no/public/organization/33975/calendar/mobile?type=week&mode=light&showHeader=false&locationIds=33975%3A47aa9065-488f-4dd2-a1e3-db5a381d2884&locationIds=33975%3A18c84a99-7b4b-4c3d-a208-2eeb014e1f1f&locationIds=33975%3A47cee538-07a6-4a54-aa1f-02ae71b686bb&locationIds=33975%3Ac1a3a6a1-b608-4f70-81a8-8e0007ddcf29&locationIds=33975%3A560858de-9087-44e4-a8aa-9c4c11f0beec&locationIds=33975%3A59c1f342-78d5-4af4-9143-5b5c07895fe4&locationIds=33975%3A259c2717-1299-4637-b00c-3e159fef4324&enableEmbed=true" width="100%" height="1000" style="border: none;"></iframe>

Seriekamper har alltid førsteprioritet til banen, og disse settes opp av Fotballkretsen. Da må andre aktiviteter vike. Vi oppfordrer alle trenere og lagledere til å sjekke denne kalenderen i forkant av planlagte treninger i seriesesongen.

## Inndeling av banen

**Hvitt**: 11er-banen.

**Blått**: To 9er-baner på tvers. Åpent felt på begge sider av midtstripa. Mål, «16-meter» og midtpunkt er markert med blå punkter.

**Gult**: Fire 7er-baner, to på langs av hver banehalvdel. Mål, «16-meter» og midtpunkt er markert med gule punkter. Banen går fra hvit kortlinje til blå linje på midten. To gule linjer på midten i hele banens lengde skiller banene med et åpent felt mellom.

**Rødt**: Åtte 5er-baner på tvers av banen. Kortlinjer: Hvit sidelinje og gul linje på midten. Linje på langsidene er enten hvit kortlinje eller blå midtlinje. Røde punkter markerer den andre sidelinja, midtpunktet og plassering av målene.

Følger man dette, blir banene plassert slik:

{{< image-gallery
    img1="/images/banen/Baneinndeling-med-nye-merker-719x495.jpg"
    alt1="Baneinndeling med nye merker"
    img2="/images/banen/Merkene-på-banen-fra-2016-719x495.jpg"
    alt2="Merkene på banen fra 2016" >}}

## Regler for bruk av Haugerudbanen

Det er stor aktivitet med kamper og treninger på Haugerudbanen. For at alle skal få avviklet sine kamper og treninger, og det også skal være plass for uorganisert lek og moro her på banen, gjelder disse reglene:

- Seriekamper som er satt opp av fotballkretsen, har alltid førsterett – til banen og til de målene som trengs. Vi må også regne med at lag som skal spille kamp, kommer i god tid før avspark og vil bruke deler av banen til oppvarming. Vi oppfordrer lag som skal spille kamp, til å bruke arealet rundt banen til deler av oppvarmingen.
- Banen er merket for 5er-, 7er-, 9er- og 11er-kamper. Dette er vist i en skisse som alle lagene har fått tilsendt og som er slått opp på Bua.
- Alle Haugerud IFs egne lag, og lag som har avtalt å leie treningstid med Haugerud IF, har retten til sine deler av banen på de oppsatte tidene for trening. Se oversikten over faste treningstider.
- Når deler av banen er opptatt til kamp, må trenerne for de lagene som har treningstid, bli enige seg imellom om deling av resten av banen, evt. bruke andre områder rundt banen. Alle lag må bidra til en løsning slik at flest mulig får trene.
- Trenerne bestemmer hvor stor del av «sitt område» de vil bruke når de har treningstid – og om de evt. vil la andre få bruke det som blir til overs til lek, oppvarming eller trening.
- Lag som har avtalt treningstid, har rett til å be andre flytte seg fra banen. Vi oppfordrer samtidig alle trenere til å vise fleksibilitet, slik at det om mulig blir plass til lek og uorganisert trening der det er ledig plass.
- Alle som bruker banen, har ansvar for å rydde søppel etter seg og passe på at mål, gjerder, nett og annet utstyr ikke blir ødelagt.
- Lysene på Haugerudbanen blir normalt slått på manuelt av Haugerud Fotball når det begynner å mørkne. Lysene blir automatisk slått av kl. 22.15 hver dag. Dette styres ikke av klubben.

Hvis lyset ikke er på, har Noreldin Gamal (988 46 800), Kjetil Støback (975 32 755), Mustafa Hayd (484 36 886) og Dag Endal (911 84 388) kode til å slå det på via sine mobiler.

<p><strong>Tvetenveien 181, 0673 Oslo</strong></p>

<div id="map" style="width: 100%; height: 400px; margin-top: 2rem;"></div>

<link href='https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css' rel='stylesheet' />
<script src='https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js'></script>

<script>
mapboxgl.accessToken = 'pk.eyJ1Ijoic2lya3RlayIsImEiOiJjbWZpczgzaXowcGppMm1zZ3puNXAxZG5qIn0.I--vUnpXaX0gSKAz0z8ysQ';

// Coordinates for Tvetenveien 181, 0673 Oslo
var longitude = 10.858768120321114;
var latitude = 59.92349986271992;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [longitude, latitude],
    zoom: 14
});

// Add navigation controls
map.addControl(new mapboxgl.NavigationControl());

// Add a marker at the location
new mapboxgl.Marker({ color: '#e52a32' })
    .setLngLat([longitude, latitude])
    .setPopup(new mapboxgl.Popup().setHTML('<h3>Haugerud IF</h3><p>Tvetenveien 181<br>0673 Oslo</p>'))
    .addTo(map);
</script>