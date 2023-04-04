## Section 01
- What is an automated test?
- Tests of automated tests
- Jest vs RTL
- React project setup using CRA
- Anatomy of a test
- Write our first test
- Test Driven Development

## Test Driven Development (TDD)::
Test driven development is a software development process where you write tests before writing the software code.

Once the tests have been written, you then write the code to ensure the test pass...

#### Three phases of Test Driven Development::
- Create tests that verify the functionality of a specific feature.
- Write Software code that will run the tests successfully when re-executed.
- Refactor the code for optimization while ensuring the test continue pass.

Also called **red-green** testing as all the tests go from a red failed state to a green passed state.


## Section 02
- Jest Watch Mode

### Jest Watch Mode
Watch mode is an option that we can pass to Jest asking to watch files that have changed since the last commit and execute tests related only to those changed files.

An optimization designed to make your tests run fast regardless of how many test you have.