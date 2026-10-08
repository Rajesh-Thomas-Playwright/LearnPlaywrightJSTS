All about keywords and identifiers.

Keywords are reserved, built-in words with fixed meanings defined by a programming language, while identifiers are custom names created by a programmer to label variables, functions, and other elements. 

Keywords

    Definition: Reserved words that form the core syntax and structure of a programming language.
    Predefined: Their meanings are fixed by the compiler or interpreter and cannot be changed.
    Case and Format: Usually written entirely in lowercase letters (with rare exceptions like True or False in Python).
         No case exceptions JavaScript: There are no exceptions to the case sensitivity of JavaScript keywords in the core language specification
    
    keywords cannot be used as identifiers


Main Categories of Keywords

    Variable & Constant Declarations: var, let, const
    Control Flow & Conditions: if, else, switch, case, default
    Loops & Iteration: for, while, do, break, continue
    Functions & Scope: function, return, this, yield, async, await
    Object-Oriented & Classes: class, extends, new, super, static
    Error Handling: try, catch, finally, throw
    Modules: import, export
    Operators & Types: typeof, instanceof, delete, in, void
    Literals & Values: null, true, false

According to the MDN Web Docs Lexical Grammar, core and reserved keywords in JavaScript include:

await, break, case, catch, class, const, continue, debugger, default, delete, do, else, enum, export, extends, false, finally, for, function, if, implements, import, in, instanceof, interface, let, new, null, package, private, protected, public, return, super, switch, static, this, throw, try, true, typeof, var, void, while, with, yield

Keywords explained
https://medium.com/@wisdomiberi832/javascript-keywords-explained-eb5ad10d9bb1


Identifiers



Definition: User-defined names given to program components like variables, arrays, and functions.
Purpose: Help identify and reference specific items uniquely during program execution.
Naming Rules: Must start with a letter or an underscore (_), can include numbers, and cannot be a reserved keyword.



Mandatory Naming Rules

For the JavaScript engine to parse your code without throwing a SyntaxError, every identifier must strictly follow these rules:

    Allowed Characters: Identifiers can contain letters (including full Unicode characters like å or ü), digits (0-9), underscores (_), and dollar signs ($).
    
    The First Character Rule: An identifier must begin with a letter, an underscore, or a dollar sign. It cannot start with a digit; this restriction prevents the engine from confusing identifiers with numeric values.

    No Spaces or Special Characters: You cannot include spaces, hyphens, or other punctuation symbols (like @, #, !).

    Case Sensitivity: JavaScript is completely case-sensitive. This means userName, username, and Username are treated as three completely separate identifiers.

    No Reserved Keywords: You cannot name an identifier after a reserved language keyword (such as let, const, if, break, or function) because they are already used to identify language actions.



Best Practices & Style Conventions

    While the rules above dictate what the language allows, the development community relies on specific style conventions to keep code clean and readable:

    Use camelCase for Variables and Functions: Start with a lowercase letter and capitalize the first letter of each subsequent word (e.g., let userProfilePic;).

    Use PascalCase for Classes: Capitalize every word, including the first letter, to visually distinguish classes from standard variables (e.g., class SmartProduct;).

    Use UPPER_SNAKE_CASE for Constants: For values that shouldn't change throughout the application's lifecycle, use all capital letters separated by underscores (e.g., const MAX_RETRY_LIMIT = 5;).

    Be Descriptive: Prefer self-explanatory names like daysUntilExpiration over vague, short names like d or x, unless used as brief loop counters.