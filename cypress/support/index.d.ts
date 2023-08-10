declare namespace Cypress {
   //namespace Cypress {
       interface Chainable<Subject = any> {
           login(email:any, password:any): Chainable<void>
           logOut(): Chainable<any>
           validateUrl(url: any): Chainable<any>
           fillRegisterInfo(firstName: any, lastName: any, email: any, password: any): Chainable<any>
           fillEmptyRegisterInfo(): Chainable<any>
       }
   }
//}