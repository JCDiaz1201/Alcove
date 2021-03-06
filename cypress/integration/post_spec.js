describe('Post Page Step 1', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3030/post');
    });
    it('should navigate to step 2 on extra space click', function() {
        cy.get('img[id="postPropertyImage"]').click()
        cy.contains('Contact Info')
    })
    it('should navigate to step 2 on extra items click', function() {
        cy.get('img[id="postItemImage"]').click()
        cy.contains('Contact Info')
    })
})

describe('Post Page Step 2', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3030/post')
        cy.get('img[id="postPropertyImage"]').click()
    })
    it('should navigate to step 3 on valid form submission', function() {
        cy.get('input[placeholder="Name"]').type('Mark')
        cy.get('input[placeholder="Email"]').type('fuechec.mark@gmail.com')
        cy.get('input[placeholder="Phone"]').type('5129719303')
        cy.get('input[placeholder="Zipcode"]').type('78745')
        cy.get('input[aria-label="Amount (to the nearest dollar)"]').type('50')
        cy.get('Form').submit()
        cy.contains('Features')
    })
    it('should navigate to step 1 on back button click', function() {
        cy.contains('Back').click()
        cy.get('img[id="postItemImage"]')
    })
    it('should not navigate to step 3 without name entered', function() {
        cy.get('input[placeholder="Email"]').type('fuechec.mark@gmail.com')
        cy.get('input[placeholder="Phone"]').type('5129719303')
        cy.get('input[placeholder="Zipcode"]').type('78745')
        cy.get('input[aria-label="Amount (to the nearest dollar)"]').type('50')
        cy.contains('Next').click()
        cy.contains('Contact Info')
    })
    it('should not navigate to step 3 with invalid Email entered', function() {
        cy.get('input[placeholder="Name"]').type('Mark')
        cy.get('input[placeholder="Phone"]').type('5129719303')
        cy.get('input[placeholder="Zipcode"]').type('78745')
        cy.get('input[aria-label="Amount (to the nearest dollar)"]').type('50')
        cy.contains('Next').click()
        cy.contains('Contact Info')
    })
    it('should not navigate to step 3 with invalid phone number entered', function() {
        cy.get('input[placeholder="Name"]').type('Mark')
        cy.get('input[placeholder="Email"]').type('fuechec.mark@gmail.com')
        cy.get('input[placeholder="Zipcode"]').type('78745')
        cy.get('input[aria-label="Amount (to the nearest dollar)"]').type('50')
        cy.contains('Next').click()
        cy.contains('Contact Info')
    })
    it('should not navigate to step 3 with invalid zipcode entered', function() {
        cy.get('input[placeholder="Name"]').type('Mark')
        cy.get('input[placeholder="Email"]').type('fuechec.mark@gmail.com')
        cy.get('input[placeholder="Phone"]').type('5129719303')
        cy.get('input[aria-label="Amount (to the nearest dollar)"]').type('50')
        cy.contains('Next').click()
        cy.contains('Contact Info')
    })
    it('should not navigate to step 3 without price entered', function() {
        cy.get('input[placeholder="Name"]').type('Mark')
        cy.get('input[placeholder="Email"]').type('fuechec.mark@gmail.com')
        cy.get('input[placeholder="Phone"]').type('5129719303')
        cy.get('input[placeholder="Zipcode"]').type('78745')
        cy.contains('Next').click()
        cy.contains('Contact Info')
    })
})

describe('Post Page Step 3', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3030/post')
        cy.get('img[id="postPropertyImage"]').click()
        cy.get('input[placeholder="Name"]').type('Mark')
        cy.get('input[placeholder="Email"]').type('fuechec.mark@gmail.com')
        cy.get('input[placeholder="Phone"]').type('5129719303')
        cy.get('input[placeholder="Zipcode"]').type('78745')
        cy.get('input[aria-label="Amount (to the nearest dollar)"]').type('50')
        cy.get('Form').submit()
    })
    it('should navigate to step 4 on successful click', function() {
        cy.contains('Extra Small').click()
        cy.contains('Never').click()
        cy.contains('Duration').click()
        cy.contains('Less than a week').click()
        cy.contains('Next').click()
        cy.get('#postImageLoader')
        })
    it('should navigate to step 2 if back button clicked', function() {
        cy.contains('Back').click()
        cy.contains('Contact Info')
    })
    it('should not navigate to step 4 if no size selected', function() {
        cy.contains('Never').click()
        cy.contains('Less than a week').click()
        cy.contains('Next').click()
        cy.contains('Features')
    })
    it('should not navigate to step 4 if no frequency selected', function() {
        cy.contains('Extra Small').click()
        cy.contains('Less than a week').click()
        cy.contains('Next').click()
        cy.contains('Features')
    })
    it('should not navigate to step 4 if no duration selected', function() {
        cy.contains('Extra Small').click()
        cy.contains('Never').click()
        cy.contains('Next').click()
        cy.contains('Features')
    })
})

describe('Post Page Step 4', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3030/post')
        cy.get('img[id="postPropertyImage"]').click()
        cy.get('input[placeholder="Name"]').type('Mark')
        cy.get('input[placeholder="Email"]').type('fuechec.mark@gmail.com')
        cy.get('input[placeholder="Phone"]').type('5129719303')
        cy.get('input[placeholder="Zipcode"]').type('78745')
        cy.get('input[aria-label="Amount (to the nearest dollar)"]').type('50')
        cy.get('Form').submit()
        cy.contains('Extra Small').click()
        cy.contains('Never').click()
        cy.contains('Less than a week').click()
        cy.contains('Next').click()
    })
    it('should open the preview modal on valid click', function() {
        cy.get('input[id="postTitle"]').type('Test title')
        cy.get('textarea[id="postDescription"]').type('Test description')
        cy.get('button[id="openPreviewButton"]').click()
        cy.contains('Save Changes and Submit')
    })
    it('should not open the preview modal without a title', function() {
        cy.get('textarea[id="postDescription"]').type('Test description')
        cy.get('button[id="openPreviewButton"]').click()
        cy.contains('Preview of Your Post').should('not.be.visible')
        })
    it('should not open the preview modal without a description', function() {
        cy.get('input[id="postTitle"]').type('Test title')
        cy.get('button[id="openPreviewButton"]').click()
        cy.contains('Preview of Your Post').should('not.be.visible')
    })
})

describe('Post Page Modal', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3030/post')
        cy.get('img[id="postPropertyImage"]').click()
        cy.get('input[placeholder="Name"]').type('Mark')
        cy.get('input[placeholder="Email"]').type('fuechec.mark@gmail.com')
        cy.get('input[placeholder="Phone"]').type('5129719303')
        cy.get('input[placeholder="Zipcode"]').type('78745')
        cy.get('input[aria-label="Amount (to the nearest dollar)"]').type('50')
        cy.get('Form').submit()
        cy.contains('Extra Small').click()
        cy.contains('Never').click()
        cy.contains('Less than a week').click()
        cy.contains('Next').click()
        cy.get('input[id="postTitle"]').type('Test title')
        cy.get('textarea[id="postDescription"]').type('Test description')
        cy.get('button[id="openPreviewButton"]').click()
    })
    it('should close on x  click', function() {
        cy.get('.close > [aria-hidden="true"]').click()
        cy.contains('Preview of Your Post').should('not.be.visible')
    })
    // it('should close on off-modal click', function() {
    //     cy.get('.modal').click()
    //     cy.contains('Preview of Your Post').should('not.be.visible')
    // })
    it('should navigate to confirmation page on submit', function() {
        cy.contains('Save Changes and Submit').click()
        cy.contains('Your form has been submitted!')
    })
})

describe('Post confirmation page', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3030/post')
        cy.get('img[id="postPropertyImage"]').click()
        cy.get('input[placeholder="Name"]').type('Mark')
        cy.get('input[placeholder="Email"]').type('fuechec.mark@gmail.com')
        cy.get('input[placeholder="Phone"]').type('5129719303')
        cy.get('input[placeholder="Zipcode"]').type('78745')
        cy.get('input[aria-label="Amount (to the nearest dollar)"]').type('50')
        cy.get('Form').submit()
        cy.contains('Extra Small').click()
        cy.contains('Never').click()
        cy.contains('Less than a week').click()
        cy.contains('Next').click()
        cy.get('input[id="postTitle"]').type('Test title')
        cy.get('textarea[id="postDescription"]').type('Test description')
        cy.get('button[id="openPreviewButton"]').click()
        cy.contains('Save Changes and Submit').click()
    })
    it('should navigate to home page on click', function() {
        cy.contains('Home Page').click()
        cy.url().should('eq', 'http://localhost:3030/')
    })
    it('should navigate to post page on click', function() {
        cy.contains('Post another item?').click()
        cy.contains('Have extra space?')
    })
})