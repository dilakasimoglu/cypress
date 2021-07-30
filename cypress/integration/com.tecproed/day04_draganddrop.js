import '@4tw/cypress-drag-drop'
describe('drag and drop', ()=>{
    it('double click', ()=>{
        cy.visit('https://www.testandquiz.com/selenium/testing.html')
        cy.get('#dblClkBtn').dblclick()
        //cift tiklama
        cy.get('#dblClkBtn').rightclick()
        //sag tiklama
    })
})