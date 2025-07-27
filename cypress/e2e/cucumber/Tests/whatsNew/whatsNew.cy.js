import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the What's New page", () => {
  cy.visit("https://magento.softwaretestingboard.com/what-is-new.html");
});

Then("I print all categories under New in women's section", () => {
  cy.get("strong").contains("New in women's") // العنصر اللي فيه العنوان
    .parent() // نرجع لـ div اللي يحتوي على القائمة
    .next("ul") // نروح على قائمة التصنيفات
    .find("a") // نجيب الروابط داخل التصنيفات
    .each(($el) => {
      cy.log($el.text()); // نطبع اسم التصنيف
    });
});
