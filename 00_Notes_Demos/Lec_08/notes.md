# Custom api response and error handling | chai aur backend

we use req.params mostly 

cookie parser middleware

another package is cors

when we use middleware we use .use syntax like app.use
we use three .use primilarly like urlencoded static and express.json

Middleware

![middleware](image.png)

.next is used to have multiple middleware cascaded

when we write these error handlers and Apiresponse ErrorResponse we need to write middleware for them so they get passed to these api before intracting with backend 
