# React-Portfolio-ITY-2525

A portfolio created using React to share/collaborate projects with other developers.

## User Story
```
AS AN employer looking for canidates with experience building single-page applications

I WANT to view a potential employee's deployed React portfolio of work samples

SO THAT I can assess whether they're a good canidate for an open position
```

## Acceptance Criteria
```
GIVEN a single-page application portfolio for a web developer:

- WHEN I load the portfolio

- THEN I am presented with a page containing a header, a    section for content, and a footer

- WHEN I view the header

- THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio

- WHEN I view the navigation titles

- THEN I am presented with the titles:
    * About Me
    * Portfolio
    * Contact
    * Resume
and the title corresponding to the current section is highlighted

- WHEN I click on a navigation title

- THEN I am presented with the corresponding section below the navigation without the page reloading and the title has been highlighted

- WHEN I load the portfolio the first time

- THEN the About Me title and section are selected by default

- WHEN I am presented with the About Me section

- THEN I see a recent photo or avatar of the developer and a short bio about them

- WHEN I am presented with the Portfolio section

- THEN I see titled images of six of the developer's applications with links to both the deployed applications and the corresponding GitHub repositories

- WHEN I am presented with the Content section

- THEN I see a contact form with fields for a name, an email address, and a message

- WHEN I move my cursor out of one of the form fields without entering text

- THEN I receive a notification that this field is required

- WHEN I enter text into the email address field

- THEN I receive a notification if I have entered an invalid email address

- WHEN I am presented with the Resume section

- THEN I see a link to a downloadable resume and a list of the developer's proficiencies

- WHEN I view the footer

- THEN I am presented with text or icon links to the developer's: 
    * GitHub profile
    * LinkedIn profile
    * Third-platform profile (ex. Stack Overflow, Twitter)
```

## Getting Started

1. use `npx create-react-app (name of your app)` to build the portfolio

2. Components: 
    * A single `Header` component that appears on multiple pages

    * A single `Navigation` component within the header that will be used to conditionally render the different sections of your portfolio

    * A single `Project` component that will be used multiple times in the Portfolio section

    * A single `Footer` component that appears on multiple pages

3. Projects:
    * For each project that is featured in the porfolio, include the following:

        - An image of the deployed application (either a short animated GIF or screenshot)

        - The title of the project

        - A link to the deployed application

        - A link to the corresponding GitHub repository


4. Design:
    * Use mobile-first design

    * Choose a color palette that distinguishes your site from the default Bootstrap them and unstyled HTML sites

    * Ensure the font size is large enough to read and that the colors don't cause eye strain