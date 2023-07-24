Frontend is deployed on Vercel and the link is given below

https://lal10.vercel.app/

The backend is deployed on cyclic and the routes are the following :

Sign up as a new user if your account does exist.

To signup make a post request using the URL https://tasty-gold-seagull.cyclic.app/api/newuser and pass the request body 

sample request body:{
    "firstName" : "tanvi",
    "lastName" : "Mathur",
    "email" :"tanvimathur@gmail.com",
    "userName" : "tanvimathur",
    "password" : "Jaimahakal56@"
}

To Login into the app make a post request using the URL https://tasty-gold-seagull.cyclic.app/api/user and pass the request body 

sample request body : {
    "email" : "tanvimathur@gmail.com",
    "password" : "Jaimahakal56@"
}

After that you can login into the app with same email and password.

Validation from backend and frontend is also added so if anything is incorrect it throw error and all fields are required.



