---
title: "Miniprojekt elektro"
date: 2024-07-15
description: "Jednoduchá simulace semaforu"
tags: [portfolio, landing]
draft: false
---

Úkolem tohoto miniprojektu bylo vytvořit buďto obvod fyzický, nebo jeho simulaci v tinkercadu za použití Arduino UNO. Já jsem si pro svůj miniprojekt připravil simulaci semaforu.

## Popis
Jedná se o semafor u přechodu pro chodce, tudíž řídíme 2 semafory současně, jeden ze 3 žárovek, druhý ze 2. Je žádoucí, aby v běžném provozu byla zelená na semaforu pro silniční dopravu a červená pro chodce, po stisknutí aktivačního tlačítka pak chceme opak. Nemůžeme také ihned po stisknutí tlačítka změnit řád, neboť při velkém objemu chodců by se tvořila kolona. Taktéž musíme mít prodlevu pro bezpečné přecházení chodců, kteří vstoupili na přechod ke konci jejich vyhrazeného času.

<figure style="text-align:center; margin:.5rem 0 1rem;">
  <img src='{{ "images/elektroschema.jpg" | relURL }}'
       alt="Schéma obvodu"
       style="width:50%; height:auto; border-radius:6px;">
  
  <figcaption style="font-size:.9rem; color:var(--muted); margin-top:.25rem;">
    Schéma obvodu
  </figcaption>
</figure>



## Kód
Celé programování jsem tvořil za pomoci bloků, které ačkoliv nejsou "standardní" ani příliš efektivní, jsou přehledné a jednoduché na pochopení pro člověka, který nemá s programováním zkušenosti.

<figure style="text-align:center; margin:.5rem 0 1rem;">
  <img src='{{ "images/elektrokod.jpg" | relURL }}'
       alt="Kód obvodu"
       style="width:50%; height:auto; border-radius:6px;">
       
  <figcaption style="font-size:.9rem; color:var(--muted); margin-top:.25rem;">
    Kód obvodu
  </figcaption>
</figure>

