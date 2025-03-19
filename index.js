const { expect } = require("chai");
const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

// Load index.html into JSDOM
const filePath = path.join(__dirname, "../index.html");
const html = fs.readFileSync(filePath, "utf-8");
const { window } = new JSDOM(html);
const { document } = window;

describe("within index.html", () => {
  it("contains a <body> tag", () => {
    expect(document.querySelector("html").innerHTML).to.include("<body>");
  });

  it("contains a </body> tag", () => {
    expect(document.querySelector("html").innerHTML).to.include("</body>");
  });

  it("contains an <h1> tag", () => {
    expect(document.querySelector("body").innerHTML).to.include("<h1>");
  });

  it("contains a <p> tag", () => {
    expect(document.querySelector("body").innerHTML).to.include("<p>");
  });

  it("within the <p>, it contains a <strong> tag", () => {
    expect(document.querySelector("p").innerHTML).to.include("<strong>");
  });

  it("within the <p>, it contains an <em> tag", () => {
    expect(document.querySelector("p").innerHTML).to.include("<em>");
  });

  it("within the <p>, it contains an <a> tag", () => {
    expect(document.querySelector("p").innerHTML).to.include(
      '<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">'
    );
  });

  it("within the <body>, it contains a <table> tag", () => {
    expect(document.querySelector("body").innerHTML).to.include("<table>");
  });
});
