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
