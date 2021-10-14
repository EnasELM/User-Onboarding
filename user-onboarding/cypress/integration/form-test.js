// write tests here
describe('Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    // check the name
    const textInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const checkInput = () => cy.get('input[name=agree]');
    const submitBtn = () => cy.get("button[id='submitBtn']");
   
   

    it('the proper elements are showing', () => {
        textInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        checkInput().should('exist');
        submitBtn().should('exist');
    })

    describe('Filling out the inputs and submit', () => {
        
        

        
        it('submit button starts out disabled', () => {
            submitBtn().should('be.disabled');
        })

        // type in the email and password
        it('can type in the inputs', () => {
            textInput()
                .should('have.value', '')
                .type('ww@yahoo.com')
                .should('have.value', 'ww@yahoo.com');
            emailInput()
                .should('have.value', '')
                .type('ww@yahoo.com')
                .should('have.value', 'ww@yahoo.com');
            passwordInput()
                .should('have.value', '')
                .type('1234')
                .should('have.value', '1234');
            checkInput()
                .should('have.value', false)
                .type(true)
                .should('have.value', true);
        })
        
        // submit button is NOT disabled after typing in the inputs
        it('the submit button enables when both inputs are filled out', () => {
            passwordInput().type('123456');
            textInput().type('1234');
            emailInput().type('en@yahoo.com');
            submitBtn().should('not.be.disabled');
        })
        
         // submit button is  disabled after left in the input empty
         it('the submit button enables when both inputs are filled out', () => {
            passwordInput().type('123');
            textInput().type('1234');
            emailInput().type('1234');
            submitBtn().should('be.disabled');
        })
    })

    

        
    })

  
        