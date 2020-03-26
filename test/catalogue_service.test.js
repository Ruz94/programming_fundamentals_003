const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });
});

describe("catalogueService.checkBookByTitle", () => {
  test("returns true if the book exists", () => {
    expect(catalogueService.checkBookByTitle("The Assassination of Margaret Thatcher")).toBe(true);
  });
});

describe("catalogueService.countBooksByFirstLetter", () => {
  test("returns number of books with give letter", () => {
    expect(catalogueService.countBooksByFirstLetter("T")).toBe(5);
    expect(catalogueService.countBooksByFirstLetter("t")).toBe(5);
  });
});

describe("catalogueService.getQuantity", () => {
  test("return the quantity of given book item which is in stock", () => {
    expect(catalogueService.getQuantity("The Origin of Species")).toBe(50);
    expect(catalogueService.getQuantity("Dracula")).toBe(0);
  });
});

describe("catalogueService.getBooksByAuthor", () => {
  test("returns a list of books by a given author", () => {
    expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual([
  {title: "A Tale of Two Cities", author: "Charles Dickens", quantity: 3},
  {title: "Oliver Twist", author: "Charles Dickens", quantity: 7},
  {title: "Great Expectations", author: "Charles Dickens", quantity: 1}
]);
});
});

describe("catalogueService.checkQuantity", () => {
  test("return true if there are at least as many books in stock as the given quantity otherwise false.", () => {
    expect(catalogueService.checkQuantity("By Night In Chile", 4)).toBe(true);
    expect(catalogueService.checkQuantity("By Night In Chile", 100)).toBe(false);
  });
}); 