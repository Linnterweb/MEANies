# MEANies

WHAT IS DONE:
 - QUESTIONS:
    ON CLICK:
        - PC moves directly to question
        - Pop-up window appears on screen with correct question
        - Pop-up window disappears on click whether or not its been answered

WHAT NEEDS DOIN:


WISHLIST:


END PRODUCT:
MEANies.com = '/'
    - Has a working login field
        - On successful login, redirects to game page ('/board'), with Player Character automatically moved to current "progress" div.
            Or redirects to boss if applicable.
    - Has a "Create User" button that redirects to Create User page
        - On successful creation, redirects to game page ('/board'), with Player Character at start of path.
    - Player Character moves through questions in order, then has a "Boss Fight" consisting of more questions.
    - Upon defeating a boss, a specific back-end event is fired, such as an email, a text, or a payment process.
    - On defeating final boss, player receives a text ('Congratulations!') and an email ('Congratulations!').
        - On success, redirect to 'Congratulations!' page