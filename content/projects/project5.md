---
title: "Miniprojekt 3D tisk"
date: 2025-04-20
description: Jednoduchý mechanismus
tags: [portfolio, accessibility]
draft: false
---

<div style="text-align:center;">

Zadáním tohoto miniprojektu je vytvořit mechanismus s 1 stupněm volnosti obsahující minimálně jedno uložení s přesahem a jedno s vůlí. Dále bylo požadavkem, aby celá sestava spotřebovala maximálně 100g filamentu.

Vzhledem k požadavkům jsem se rozhodl udělat malý klikový mechanismus s otevřeným rámem.

<figure style="text-align:center; margin:.5rem 0 1rem;">
	<img src="../../images/miniprojekt3dmodel.jpg"
	     alt="Ruční kresba" title="Ruční kresba"
	     style="width:50%; height:auto; border-radius:4px;" />
	<figcaption style="font-size:.85rem; color:var(--muted); margin-top:.25rem;">
		Model klikového mechanismu
	</figcaption>
</figure>

Po vytvoření modelu v Inventoru bylo nutné jednotlivé části sestavy přenést do sliceru a správně je orientovat.
Vzhledem k jednoduchosti dílů jsem se rozhodl nepřidávat podpory a funkční díry upravit až po tisku.

<figure style="text-align:center; margin:.5rem 0 1rem;">
	<img src="../../images/miniprojekt3dslicer.jpg"
	     alt="Ruční kresba" title="Ruční kresba"
	     style="width:35%; height:auto; border-radius:4px;" />
	<figcaption style="font-size:.85rem; color:var(--muted); margin-top:.25rem;">
		Části modelu vyskládané ve sliceru
	</figcaption>
</figure>

Zde je k vidění tabulka použitého filamentu a potřebného času tisku na tiskárně Mk4

<figure style="text-align:center; margin:.5rem 0 1rem;">
	<img src="../../images/miniprojekt3dcas.jpg"
	     alt="Ruční kresba" title="Ruční kresba"
	     style="width:50%; height:auto; border-radius:4px;" />
	<figcaption style="font-size:.85rem; color:var(--muted); margin-top:.25rem;">
		Informace o tisku
	</figcaption>
</figure>

Hotové díly byly odejmuty z podložky a bylo na čase je složit dohromady.

<figure style="text-align:center; margin:.5rem 0 1rem;">
	<img src="../../images/miniprojekt3dcas.jpg"
	     alt="Ruční kresba" title="Ruční kresba"
	     style="width:50%; height:auto; border-radius:4px;" />
	<figcaption style="font-size:.85rem; color:var(--muted); margin-top:.25rem;">
		Informace o tisku
	</figcaption>
</figure>

<figure style="text-align:center; margin:.5rem 0 1rem;">
	<img src="../../images/miniprojekt3ddily.jpg"
	     alt="Ruční kresba" title="Ruční kresba"
	     style="width:50%; height:auto; border-radius:4px;" />
	<figcaption style="font-size:.85rem; color:var(--muted); margin-top:.25rem;">
		Vytištěné díly mechanismu
	</figcaption>
</figure>

Níže je vidět složený mechanismus v obou krajních polohách

</div>

<div style="display:flex; gap:1rem; justify-content:center; margin:1rem 0;">
	<figure style="text-align:center; flex:1;">
		<img src="../../images/miniprojekt3dzasunuty.png"
		     alt="Zasunutý stav"
		     style="width:100%; height:auto; border-radius:4px;" />
		<figcaption style="font-size:.85rem; color:var(--muted); margin-top:.25rem;">
			Zasunutý stav
		</figcaption>
	</figure>


<figure style="text-align:center; flex:1;">
		<img src="../../images/miniprojekt3dvysunuty.png"
		     alt="Vysunutý stav"
		     style="width:100%; height:auto; border-radius:4px;" />
		<figcaption style="font-size:.85rem; color:var(--muted); margin-top:.25rem;">
			Vysunutý stav
		</figcaption>
	</figure>
</div>

<figure style="text-align:center; margin:.5rem 0 1rem;">
  <video controls
         style="width:60%; height:auto; border-radius:6px;">
    <source src="../../videos/3dvideo.mp4" type="video/mp4">
    Váš prohlížeč nepodporuje přehrávání videa.
  </video>

  <figcaption style="font-size:.85rem; color:var(--muted); margin-top:.25rem;">
    Ukázka pohybu mechanismu
  </figcaption>
</figure>

## Nedostatky mechanismu
Při návrhu jsem zvolil tenkou stěnu, což by samo o sobě problém nebylo, ale bylo by nutné udělat delší vedení pohyblivé části, která se díky krátkému vedení nepohybuje plynule.