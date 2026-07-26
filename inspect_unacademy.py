from playwright.sync_api import sync_playwright
import json

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('https://unacademy.com', timeout=60000)
    page.wait_for_selector('body')

    styles = page.evaluate('''() => {
        const h1 = document.querySelector('h1');
        const p = document.querySelector('p');
        return {
            h1: h1 ? {
                fontFamily: window.getComputedStyle(h1).fontFamily,
                fontSize: window.getComputedStyle(h1).fontSize,
                color: window.getComputedStyle(h1).color,
            } : null,
            p: p ? {
                fontFamily: window.getComputedStyle(p).fontFamily,
                fontSize: window.getComputedStyle(p).fontSize,
                color: window.getComputedStyle(p).color,
            } : null,
            body: {
                fontFamily: window.getComputedStyle(document.body).fontFamily,
                fontSize: window.getComputedStyle(document.body).fontSize,
                color: window.getComputedStyle(document.body).color,
            }
        };
    }''')
    print(json.dumps(styles, indent=2))
    browser.close()
