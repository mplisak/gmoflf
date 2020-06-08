# gmoflf

## [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

*Game of Life* je matematická hra vynalezená matematikem J. H. Conwayem v roce 1970. Algoritmus aplikuje pravidla hry při každém posunu o jednotku času a určuje, které buňky ve čtvercové síti zemřou, které zůstanou živé, a které se stanou živými. Výsledek může připomínat pohyb nebo reprodukci živých organismů, proto "Hra života".

Na počátku byly čtyři pravidla:
1.    **Každá živá buňka s méně než dvěma živými sousedy zemře.**
2.    **Každá živá buňka se dvěma nebo třemi živými sousedy zůstává žít.**
3.    **Každá živá buňka s více než třemi živými sousedy zemře.**
4.    **Každá mrtvá buňka s právě třemi živými sousedy oživne.**

Před spuštěním hry uživatel vybere několik polí, které budou živými buňkami. Po spuštění už hru nelze ovlivňovat, vyvíjí se sama.

*Game of Life* je postavená vlastně výhradně na algoritmu, který vykonává sadu příkazů (čtyři pravidla), proto myslím, že se hodí do zadání úkolu.

## Ovládání

Uživatel bude počáteční pole vybírat **levým tlačítkem myši**, **pravým tlačítkem myši** bude moct svůj výběr zrušit. Simulaci započne stiskem **mezerníku**, stejně tak ji pozastaví, a resetuje klávesou **R**.

**EDIT:** Výbraná buňka bude moct být zrušena opětovným kliknutím levého tlačítka myši, mezerník a klávesa 'R' bude nahrazen html buttony.

## Kód

V **JavaScriptu** bude samotný algoritmus pracující s buňkami. Spolu s **CSS** a **html** bude také vykreslovat "chování" buněk. Díky **Rustu** pak bude celá věc fungovat jako aplikace.
