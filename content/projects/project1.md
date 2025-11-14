---
title: "Semestrální projekt"
date: 2025-01-01
description: "Cvičné RC letadlo"
tags: [portfolio, demo]
draft: false
featured: true
image: "/images/project1.svg"
weight: 1
---

Semestrální práce spočívá v návrhu a výrobě RC letadla pro výcvik na jiná letadla.

## Průběh práce

- Responsive design
- Accessible controls
- Clean, minimal UI

## Časový plán
**22.09.-28.09.**
- Pochopení programu XFLR5 a vytvoření základního modelu

**29.09.-05.10.**
- Získání veškerých podkladů ke zjištění rozměrů ocasních a kontrolních ploch

**06.10.-12.10.**

- Iterace modelu v XFLR5, výpočet stability

**13.10.-19.10.**

- Vytvoření 3D modelu letadla

**20.10.-26.10.**

- Vytvoření souborů pro výrobu (3D tisk/laserové řezání)

**27.10.-02.11.**

- Nákup a výroba potřebných dílů

**03.11.-09.11.**

- Výroba dílů

**10.11.-16.11.**

- Sestavení konstrukce

**17.11.-23.11.**

- Instalace elektroniky

**24.11.-30.11.**

- Prostor pro řešení problémů/odladění

**1.12.-7.12.**

- Prostor pro řešení problémů/odladění





 **Průběh práce 22.09.-29.09.**


Vytvořil jsem prvotní model s profilem NACA 2415 a rozpětím 1000 mm jako základ, který budu iterovat. Rozpětí jsem volil dle předešlých zkušeností v týmu chickenwings jako kompromis mezi letovými vlastnostmi a náročností výroby. Profil NACA 2415 jsem volil po rešerši a jedná se o běžně využívaný profil pro RC letadla. Dále jsem vytvořil tabulku s výpočty pro potřebnou rychlost ke vzletu.
### Model pro aerodynamickou analýzu
![XFLR layout](/images/XFLR_layout_1.0.png)

### Použitý profil NACA 2415
![Profil NACA](/images/NACA2415_profil.jpg)

### Vstupní hodnoty prostředí a křídla
![Excel vstup](/images/Vstupní_data_excel.jpg)

### Výstup (vztlaková síla)
![Excel výstup](/images/Výstup_excel.jpg)

### Graf celkové vztlakové síly
![Vztlaková síla graf](/images/Vztlaková_síla_graf.jpg)

### Rozložení vztlaku na křídle
![Vztlaková síla graf](/images/Rozložení_vztlaku.jpg)






**Průběh práce 30.09.-05.10.**

Po zjištění, že budu potřebovat hmotnosti jednotlivých komponent v softwaru XFLR5, jsem začal modelovat křídlo v programu Autodesk Inventor

Dále jsem se rozhodl navýšit rozpětí křídla na 1,5m ke zlepšení letových vlastností. K tomuto závěru mne vedly výpočty vzletové rychlosti, která byla pro letadlo určené k tréninku až příliš vysoká.

Po konzultaci se studenty leteckého ústavu jsem došel k závěru, že ačkoliv můj způsob výpočtu parametrů by byl dostatečný, rozhodně nebyl ideální, proto jsem se rozhodl se vrátit ke koncepčnímu návrhu, tentokrát s optimálním postupem.
Začal jsem novým výpočtem pro plochu křídla, po úpravě vzorce pro vztlakovou sílu lze získat hodnota plochy křídla, pro zadané požadavky. Mé odhady a požadavky byly:

- Pádová rychlost 8 m/s
- Vzletová váha 1,5 kg
- Odhadované Clmax 1,25

Došel jsem k závěru, že v ideálním stavu by postačovala plocha křídla 0,3 m čtverečných, vzhledem k nezapočteným ztrátám a nepřesnosti při výrobě jsem zvolil plochu o něco vyšší. Za předpokladu, že jako kompromis mezi indukovaným odporem a konstrukční a výrobní složitostí jsem volil rozpětí křídla 1,5m, vyšla mi délka tětivy 0,22 m.

### Analýza v XFLR
Pro samotnou analýzu jsem vybral dva profily
- Pro křídlo NACA 2415
- Pro ocasní plochy NACA 0014

S těmito profily jsem nadále prováděl výpočty.
Prvním krokem bylo profily "virtuálně ofoukat" a dostat tím data o jejich charakteristikách při různých reynoldsových číslech.


Dále jsem analyzoval při jaké kombinaci úhlu náběhu a rychlosti je letadlo schopné horizontálního letu. Poté jsem řešil při jakém úhlu náběhu má letadlo ideální poměr Koeficientu vztlaku ke koeficientu odporu, to ve zkratce znamená, jak efektivní let bude při daném úhlu náběhu. Podle těchto dat jsem křídlo "natočil" už v konstrukci.
Jako poslední bod, který jsem řešil u polár, byl klopivý moment, který křídlo vyvolá, ten jsem se snažil balancovat co nejblíže k nule při nulovém úhlu náběhu, vyrovnává se ocasními plochami a pozicí těžiště, ale je nutné brát v potaz mohutnost ocasních ploch (poměr ploch a ramen vůči křídlu)



# Časový plán

## 22.09.–28.09. – Pochopení programu XFLR5 a vytvoření základního modelu

**Plán:**  
Pochopení principů programu XFLR5, vytvoření základního modelu pro analýzu aerodynamiky.  

**Skutečně provedeno:**  
Vytvořil jsem prvotní model s profilem NACA 2415 a rozpětím 1000 mm jako základ, který budu iterovat. Rozpětí jsem volil dle předešlých zkušeností v týmu chickenwings jako kompromis mezi letovými vlastnostmi a náročností výroby. Profil NACA 2415 jsem volil po rešerši a jedná se o běžně využívaný profil pro RC letadla. Dále jsem vytvořil tabulku s výpočty pro potřebnou rychlost ke vzletu. 

---

## 29.09.–05.10. – Získání podkladů pro rozměry ocasních a kontrolních ploch

**Plán:**  
Získání všech potřebných údajů k určení rozměrů ocasních a kontrolních ploch.  

**Skutečně provedeno:**  
Po zjištění, že budu potřebovat hmotnosti jednotlivých komponent v softwaru XFLR5, jsem začal modelovat křídlo v programu Autodesk Inventor

Dále jsem se rozhodl navýšit rozpětí křídla na 1,5m ke zlepšení letových vlastností. K tomuto závěru mne vedly výpočty vzletové rychlosti, která byla pro letadlo určené k tréninku až příliš vysoká.

Po konzultaci se studenty leteckého ústavu jsem došel k závěru, že ačkoliv můj způsob výpočtu parametrů by byl dostatečný, rozhodně nebyl ideální, proto jsem se rozhodl se vrátit ke koncepčnímu návrhu, tentokrát s optimálním postupem. Začal jsem novým výpočtem pro plochu křídla, po úpravě vzorce pro vztlakovou sílu lze získat hodnota plochy křídla, pro zadané požadavky. Mé odhady a požadavky byly:

- Pádová rychlost 8 m/s
- Vzletová váha 1,5 kg
- Odhadované Clmax 1,25

Došel jsem k závěru, že v ideálním stavu by postačovala plocha křídla 0,3 m čtverečných, vzhledem k nezapočteným ztrátám a nepřesnosti při výrobě jsem zvolil plochu o něco vyšší. Za předpokladu, že jako kompromis mezi indukovaným odporem a konstrukční a výrobní složitostí jsem volil rozpětí křídla 1,5m, vyšla mi délka tětivy 0,22 m.

**Analýza v XFLR**

Pro samotnou analýzu jsem vybral dva profily

Pro křídlo NACA 2415
Pro ocasní plochy NACA 0014
S těmito profily jsem nadále prováděl výpočty. Prvním krokem bylo profily “virtuálně ofoukat” a dostat tím data o jejich charakteristikách při různých reynoldsových číslech.

Dále jsem analyzoval při jaké kombinaci úhlu náběhu a rychlosti je letadlo schopné horizontálního letu. Poté jsem řešil při jakém úhlu náběhu má letadlo ideální poměr Koeficientu vztlaku ke koeficientu odporu, to ve zkratce znamená, jak efektivní let bude při daném úhlu náběhu. Podle těchto dat jsem křídlo “natočil” už v konstrukci. Jako poslední bod, který jsem řešil u polár, byl klopivý moment, který křídlo vyvolá, ten jsem se snažil balancovat co nejblíže k nule při nulovém úhlu náběhu, vyrovnává se ocasními plochami a pozicí těžiště, ale je nutné brát v potaz mohutnost ocasních ploch (poměr ploch a ramen vůči křídlu)

---

## 06.10.–12.10. – Iterace modelu v XFLR5, výpočet stability

**Plán:**  
Provést úpravy a iterace modelu v XFLR5, vypočítat statickou a dynamickou stabilitu.  

**Skutečně provedeno:**  
Iterace modelu probíhaly převážně v upřesnění hmotností pro výpočet stability, musel jsem tedy vytvářet 3D model dříve, než bylo plánované, abych dostal dostatečně přesný odhad hmotnosti, aby pro mě byly výsledky analýzy relevantní. Hlavní polárou, která mne v tuto chvíli zajímala, byl graf klopivého momentu vůči úhlu náběhu. 

---

## 13.10.–19.10. – Vytvoření 3D modelu letadla

**Plán:**  
Zpracování kompletního 3D modelu letadla podle výsledků z XFLR5.  

**Skutečně provedeno:**  
Jak jsem avizoval v poznatcích z minulého týdne, základní model jsem již vytvořil, nyní bylo podstatné vše zkompletovat do finální podoby, celý model jsem tvořil z 1,5 mm letecké překližky, 3 mm balsy, uhlíkových trubek a 3D tisknutých přechodů.

**Technické specifikace modelu**
- Váha:
- Délka vrtule-ocas:
- Rozpětí křídla:
- Rozpětí horizontálních ocasních ploch:
- Počet nosníků v trupu:
- Počet přepážek v trupu:
- Počet balsových žeber:
- Počet žeber z překližky:

---

## 20.10.–26.10. – Příprava výrobní dokumentace

**Plán:**  
Vytvoření souborů pro výrobu – 3D tisk a laserové řezání.  

**Skutečně provedeno:**  
Hlavní pracovním úkonem pro tento týden, bylo vytvořit podklady pro laser na vyřezání všech dílů z balsy a překližky, to vše bylo provedeno a zbývalo vytvořit G-kód pro 3D tiskárnu na přechody motor-trup a ocas-trup, což jsem přesunul na další týden vzhledem k faktu, že budu tisknout další součásti do miniprojektu 3D tisk.  

---

## 27.10.–02.11. – Nákup a výroba potřebných dílů

**Plán:**  
Zajištění všech komponent a zahájení výroby jednotlivých částí.  

**Skutečně provedeno:**  
Vzhledem k faktu, že jsem si během vytváření modelu vše pečlivě zapisoval do excelové tabulky, nalezení zboží u dostupných výrobců a následná objednávka byla jednoduchým krokem.

---

## 03.11.–09.11. – Výroba dílů

**Plán:**  
Dokončení výroby všech dílů pro sestavení konstrukce.  

**Skutečně provedeno:**  
*(doplnit)*  

---

## 10.11.–16.11. – Sestavení konstrukce

**Plán:**  
Montáž konstrukčních částí do celku.  

**Skutečně provedeno:**  
*(doplnit)*  

---

## 17.11.–23.11. – Instalace elektroniky

**Plán:**  
Instalace serv, pohonného systému a elektroniky řízení.  

**Skutečně provedeno:**  
*(doplnit)*  

---

## 24.11.–30.11. – Odladění a řešení problémů

**Plán:**  
Testování, opravy a dolaďování případných problémů.  

**Skutečně provedeno:**  
*(doplnit)*  

---

## 01.12.–07.12. – Závěrečné ladění a rezervní čas

**Plán:**  
Finální úpravy, příprava k testovacímu letu, časová rezerva.  

**Skutečně provedeno:**  
*(doplnit)*  
