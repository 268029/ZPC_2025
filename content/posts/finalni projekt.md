---
date: 2025-09-22T14:36:37+02:00
# description: ""
# image: ""
lastmod: 2025-09-22
showTableOfContents: false
# tags: ["",]
title: "Finální projekt"
type: "post"
---
# RC letadlo
Cílem tohoto projektu je vytvořit funkční RC letadlo za účelem tréninku pro jiné RC modely. Vztlak bude produkovat za pomoci konvenčního křídla a je žádoucí, aby byla zachována co nejmenší hmotnost.

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