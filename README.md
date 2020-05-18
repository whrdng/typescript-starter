# typescript-starter
Baseline project for Node.js with some best practices.


## Git

## Rules for commit messages

1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line
6. Wrap the body at 72 characters
7. Use the body to explain what and why vs. how

## Semantic Git Messages

1. feat: (new feature for the user, not a new feature for build script)
2. fix: (bug fix for the user, not a fix to a build script)
3. docs: (changes to the documentation)
4. style: (formatting, missing semi colons, etc; no production code change)
5. refactor: (refactoring production code, eg. renaming a variable)
6. test: (adding missing tests, refactoring tests; no production code change)
7. chore: (updating grunt tasks etc; no production code change)

## Message Template

```
Summarize changes in around 50 characters or less

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together.

Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequences of this
change? Here's the place to explain them.

Further paragraphs come after blank lines.

 - Bullet points are okay, too

 - Typically a hyphen or asterisk is used for the bullet, preceded
   by a single space, with blank lines in between, but conventions
   vary here

If you use an issue tracker, put references to them at the bottom,
like this:

Resolves: #123
See also: #456, #789
```