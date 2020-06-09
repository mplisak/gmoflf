//! gmoflf
//! 
//! Game of Life je matematická hra vynalezená matematikem J. H. Conwayem v roce 1970. Algoritmus aplikuje pravidla hry při každém posunu o jednotku času a určuje, které buňky ve čtvercové síti zemřou, které zůstanou živé, a které se stanou živými. Výsledek může připomínat pohyb nebo reprodukci živých organismů, proto "Hra života".
//! 
//! Na počátku byly čtyři pravidla:
//! 
//!     Každá živá buňka s méně než dvěma živými sousedy zemře.
//!     Každá živá buňka se dvěma nebo třemi živými sousedy zůstává žít.
//!     Každá živá buňka s více než třemi živými sousedy zemře.
//!     Každá mrtvá buňka s právě třemi živými sousedy oživne.
//! 
//! Před spuštěním hry uživatel vybere několik polí, které budou živými buňkami. Po spuštění už hru nelze ovlivňovat, vyvíjí se sama.
//! 
//! Game of Life je postavená vlastně výhradně na algoritmu, který vykonává sadu příkazů (čtyři pravidla), proto myslím, že se hodí do zadání úkolu.

use web_view::*;

fn main() {
    let html_content = format!("
<!DOCTYPE html>
<html>
  <head>
	<meta charset=\"utf-8\">
	<style>{}</style>
  </head>
  <body>
	<div id=\"header\">
		<h1>Game of Life</h1>
	</div>
	<p>
		<canvas id=\"canvas\" width=\"600\" height=\"400\"></canvas>
	</p>
	<p id=\"btns\">
		<button class=\"button\" id=\"b1\" onclick=\"pauseGame()\"> run </button>
		<button class=\"button\" onclick=\"resetGame()\"> clear </button>
	</p>
	<div id=\"footer\">
	</div>
	<script>{}</script> 
  <body/>
</html>", include_str!("tres.css"), include_str!("dos.js"));

    web_view::builder()
        .title(env!("CARGO_PKG_NAME"))
        .content(Content::Html(html_content))
        .size(700, 650)
        .resizable(true)
        .debug(cfg!(debug_assertions))
        .user_data(())
        .invoke_handler(|_webview, _arg| Ok(()))
        .run()
        .unwrap();
}
