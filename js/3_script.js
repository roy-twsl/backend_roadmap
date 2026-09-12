// ==========================================
// JavaScript Code Structure
// Based on: https://fa.javascript.info/structure
// ==========================================

// ------------------------------------------
// Statements
// ------------------------------------------
// Statements are commands that make something happen.
// We have already seen a statement: alert('Hello, World!') which shows the message.

alert('Hello, World!');

// We can have as many statements as we want in our code.
// Statements are separated by semicolons (;).

alert('Hello'); alert('World');

// Usually, statements are written on separate lines for readability.

alert('Hello');
alert('World');


// ------------------------------------------
// Semicolons
// ------------------------------------------
// A semicolon may be omitted at the end of a line break.
// This code will work:

alert('Hello')
alert('World')

// Here, JavaScript interprets the line break as an implicit semicolon.
// This is called "Automatic Semicolon Insertion" (ASI).

// But keep in mind: a line break is NOT always a semicolon.

// Example:
let result = 1 +
             2 +
             3;

console.log(result); // 6

// The output is 6 because JavaScript does not insert a semicolon at the end of each line break.
// As you can see, when "+" is at the end of a line, the expression is not complete,
// so no semicolon is needed.

// But there are cases where JavaScript "fails" in places where a semicolon is needed.
// Errors that occur in such situations are hard to find and fix.

// Example (this will cause an error):
// let a = 1
// [1, 2].forEach(alert)

// JavaScript sees this as: let a = 1[1, 2].forEach(alert)
// Which is wrong.

// We recommend putting a semicolon at the end of each statement,
// even if they are on separate lines.
// This rule is widely accepted in the JavaScript community.
// Once again: it is possible to omit the semicolon in most cases.
// But putting it is safer, especially for beginners.


// ------------------------------------------
// Comments
// ------------------------------------------
// As our program grows, it becomes more complex,
// and adding comments to clarify the code becomes necessary.

// Comments can be placed anywhere in the script and do not affect execution,
// because they are simply ignored by the JavaScript engine.

// A single-line comment starts with two forward slashes (//).

// From the place where // is placed, to the end of the line is ignored.
// A comment can also come after a statement.

alert('Hello'); // This is a comment after a statement

// Multi-line comments start with /* and end with */.

/*
   This is a multi-line comment.
   It can span multiple lines.
*/

// As we said, statements inside comments are not executed.
// Sometimes this method is used to disable part of the code.

// alert('This alert is disabled');
alert('This alert is active');

// ------------------------------------------
// Use Keyboard Shortcuts
// ------------------------------------------
// Some editors have the ability to comment code using keyboard shortcuts.
// Usually Ctrl + / in Windows creates single-line comments,
// and Ctrl + Shift + / can create multi-line comments
// (you need to select part of the code first).
// On Mac, you can use Cmd instead of Ctrl.

// Please do not hesitate to use comments in your code.

// Comments increase the size of the code, but this is not a problem.
// Various tools exist that minify code and remove comments before publishing.
// So comments do not affect the final output.

// In the following lessons, in the "Code Style" section,
// we will learn how to write better comments.


// ------------------------------------------
// Common Error Example (ASI Failure)
// ------------------------------------------
// ⚠️ WARNING: The following code causes an ERROR!
// ⚠️ DO NOT RUN IT unless you want to see the error.

// let a = 1
// [1, 2].forEach(alert)

// If you uncomment the above code, you will get an error like:
// "TypeError: Cannot read properties of undefined (reading '2')"

// Why? Because JavaScript interprets the code as:
// let a = 1[1, 2].forEach(alert)
// Which is wrong.

// The fix is to add a semicolon:
// let a = 1;
// [1, 2].forEach(alert);


// ------------------------------------------
// End of Educational File
// ------------------------------------------