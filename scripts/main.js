/* variable to hold first and last name */
const firstName = "Banapat";
const lastName = "Dorsey";

/* variable to combine first and last name*/
let fullName = firstName + " " + lastName;

/* display full name in h1 */
const h1 = document.querySelector("h1");
h1.textContent = fullName;

/* variable to hold age */
let age = 14;

/* display age 20 years from now */
let futureAge = age + 20;

/* display age and future age in differentparagraphs */
const section = document.querySelector("section");
const para2 = document.createElement("p");
const para1 = document.querySelector("p");
para1.textContent = "Age:" + age;
para2.textContent = "In twenty years, your age will be " + futureAge + " years old.";
section.appendChild(para1);
section.appendChild(para2);