# Assignment 3 - The Book Corner: Online Book Shop (Customer Site)


## A) Summary
- Create a frontend web application using Vue.js which allows customers to view available books for sale and purchase them
- Deployed URL: https://relaxed-hoover-d0cdd0.netlify.app/


## B) UI /UX
- User Stories (Customers)
    1. As a customer of The Book Corner, I want to create an account so that I can purchase books
    2. As a customer of The Book Corner, I want to add items to my cart so that I can view the total amount of my cart before checking out
    3. As a customer of The Book Corner, I want my shopping cart to be the way I left it during the the next occasion that I log in
    4. As a customer of The Book Corner, I want to filter for specific books based on various criteria so that I can find the book I am interested in
    5. As a customer of The Book Corner, I want to be able to remove items from my cart so that I can get rid of items I am no longer interested in
    6. As a customer of The Book Corner, I want to update the quantity of particular items in my cart so I can purchase the intended quantity
    7. As a customer of The Book Corner, I want to checkout the items in my cart so that I can purchase them
    8. As a customer of The Book Corner,  I want to see all the orders I have made so far

- Colour and font choice
    - San Serif font are chosen are they enhance readability and look clean
    - This is important as the information stands out more to the user
    - Turquoise nav bar and buttons is a bright colour that represents wisdom and knowledge
    - This is in line with the purpose of the store with is to sell books


## C) Use Cases / Feature List
|  <br>Use Case                         |  <br>Objective (from user’s POV)                                                         |  <br>Steps                                                                                                                                                                                                                                      |
|---------------------------------------|------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  <br>Register                         |  <br>To create an account                                                                |  <br>1. Click register button<br>2. Fill up form <br>3. Click submit button                                                                                                                                         |
|  <br>Login                            |  <br>To log into account                                                                 |  <br>1. Click log in on top right hand corner<br>2. Fill up username and password <br>>3. Submit form                                                                                                                |
|  <br>View / Search Books              |  <br>To find a specific book                                                             |  <br>1. Type in a title into the text input                                                                                                                                                                                                     |
|  <br>Add book to cart                 |  <br>Earmark books for potential  purchase                                               |  <br>1. Click on a specific book at the home page<br>2. Click add to cart                                                                                                                                                         |
|  <br>Remove book from cart            |  <br>Discard book as a potential purchase                                                |  <br>1. Click on trash icon in an item in the cart                                                                                                                                                                                              |
|  <br>Update quantity of book in cart  |  <br>Increase or decrease the quantity of the book that has been earmarked for purchase  |  <br>1. Go to the cart by clicking on the cart icon at the top right of the Nav Bar<br>2. Click checkout                                                                                                                          |
|  <br>Checkout                         |  <br>Attempt to pay for all the intended purchases has been placed in the cart           |  <br>1. Click checkout at the cart page<br>2. Type in payment details and shipping options at the stripe page<br>3. Click go to orders once redirected back to orders page                                          |
|  <br>View Orders Placed               |  <br>Review orders made                                                                  |  <br>1. Click on the orders tab<br>2. Click on paid<br>3. If payment is not successful, order will be under the cancelled tab<br>4. Shipped and completed order will be under their respective tabs.  |


## D) Testing
|  <br>Test Case  |  <br>Test Case Description                                                        |  <br>Test Steps                                                                                                                                                                                                                                                      |  <br>Expected Result                                                                                                                                                                                                                                                                        |
|-----------------|-----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  <br>1.         |  <br>Test that a customer can create an account                                   |  <br>1. Click on register at the home page<br>2. Fill up form and submit                                                                                                                                                                               |  <br>1. Customer is directed to the login page                                                                                                                                                                                                                                              |
|  <br>2.         |  <br>Test that a customer can log in and out of their account                     |  <br>1. Click on log in<br>2. Fill up form and submit                                                                                                                                                                                                  |  <br>1. Customer is logged in successfully<br>2. The orders tab is visible int the nav bar<br>3. The top right hand corner of the nav bar has a dropdown with the customer’s username                                                                           |
|  <br>3.         |  <br>Test that a customer can search for a specific book                          |  <br>1. Key in a the title of a book e.g. Harry Potter                                                                                                                                                                                                               |  <br>1. Only books containing that title will be shown                                                                                                                                                                                                                                      |
|  <br>4.         |  <br>Test that a customer can add to, update and remove from their shopping cart  |  <br>1. Click add to cart for a specific book<br>2. Click add to cart again<br>3. In the quantity input box, change the quantity to 5 and click the update button<br>4. Click the trash button  |  <br>1. The book should appear as a cart item in the shopping cart and the quantity should be 1.<br>2.  The quantity should increase to 2<br>3. The number in the input box should be 5. <br>4. The cart item should disappear  |
|  <br>5.         |  <br>Test that a customer can checkout and make payment successfully              |  <br>1. Click on checkout<br>3. Fill in the payment and choose the shipping detail. e.g. $15 option. Click pay.<br>4. Click go to orders                                                                                        |  <br>1. Customer should be directed to stripe checkout page<br>2.  Customer is directed back the store page that says the order was made successfully<br>3. Go to the paid tab. Their latest order is shown                                                     |
|  <br>6.         |  <br>Test that a customer can cancel their checkout                               |  <br>1. At the stripe checkout page, click on the back button<br>2. Click go to orders                                                                                                                                                                 |  <br>1. Customer is directed back the store page that says the order was cancelled<br>2. Go to the cancelled tab, the cancelled order will be shown.                                                                                                                          |
|  <br>7.         |  <br>Test that a customer can view their orders                                   |  <br>1. Go to the orders tab                                                                                                                                                                                                                                         |  <br>1. If the order has shipped, the order will be in the shipped tab<br>2. If the order has been completed, the order will be in the completed tab                                                                                                                          |


## E) Technologies Used
    - Vue 2
    - Vue Router
    - VueX
    - Vue Formulate
    - Bootstrap 4
    - Bootstrap Vue
    - Vue Stripe
    - Bootstrap Vue Icons
Resources:
    - https://www.nytimes.com/2020/12/02/books/times-critics-top-books-of-2020.html
    - https://www.nytimes.com/2019/09/26/books/new-october-books.html
    - https://www.facebook.com/humansofnewyork/


