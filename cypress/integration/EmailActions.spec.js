describe('Email Actions', () => {
  const emailListTableSelector = 'table[data-testid="email-list"]';

  it('Marks emails read and unread', () => {
    cy.visit('http://localhost:3000');
    // helpful for css testing: https://www.cypress.io/blog/2020/03/17/how-to-test-an-application-that-changes-css-variable/

    // did the row background highlight when selected
    cy.get(`${emailListTableSelector} tr`).first().should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    cy.get(`${emailListTableSelector} input[type="checkbox"]`).first().click();
    cy.get(`${emailListTableSelector} input[type="checkbox"]`).eq(1).click();
    cy.get(`${emailListTableSelector} tr`).first().should('have.css', 'background-color', 'rgb(194, 219, 255)');

    // did the row's text become unbolded when marked read
    cy.get(`${emailListTableSelector} tr`).first().should('have.css', 'font-weight', '700');
    cy.get(`${emailListTableSelector} tr`).eq(1).should('have.css', 'font-weight', '700');
    cy.get('button[data-testid="toggle-unread"]').click();
    cy.get(`${emailListTableSelector} tr`).first().should('have.css', 'font-weight', '400');
    cy.get(`${emailListTableSelector} tr`).eq(1).should('have.css', 'font-weight', '400');

    // did it go back to bold after marked unread
    cy.get('button[data-testid="toggle-unread"]').click();
    cy.get(`${emailListTableSelector} tr`).first().should('have.css', 'font-weight', '700');
  });

  it('Adds a label/tag to the selected email', () => {
    cy.visit('http://localhost:3000');

    // select first email
    cy.get(`${emailListTableSelector} input[type="checkbox"]`).first().click();

    // add label
    const testLabelInput = 'test label';
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(testLabelInput);
    });
    cy.get('button[data-testid="add-label"]').click();

    // did label appear on email and in label list on left
    cy.get('.labels').first().should(($p) => {
      expect($p).to.contain(testLabelInput);
    });
    cy.get('.label-link').contains(testLabelInput).should('exist');
  });

  it('Deletes an email and removes it from the inbox list and shows it in the deleted list', () => {
    cy.visit('http://localhost:3000');

    cy.get(`${emailListTableSelector} input[type="checkbox"]`).first().click();
    cy.get(`${emailListTableSelector} tr`).should('have.length', 10);
    cy.get('button[aria-label="Delete Email"]').first().click();
    cy.get(`${emailListTableSelector} tr`).should('have.length', 9);

    cy.get('a').contains('Trash').click();
    cy.get(`${emailListTableSelector} tr`).should('have.length', 1);

    cy.get('a').contains('Inbox').click();
    cy.get(`${emailListTableSelector} tr`).should('have.length', 9);
  });
});
