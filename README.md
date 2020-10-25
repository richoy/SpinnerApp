# SpinnerApp

This project is composed by the Back End and the Front End. Back End Service was developed with NodeJs, Front End was developed with Angular. MongoDB was used as the data base service.

# Running app locally

To run this project locally on your computer you require to install NodeJs `https://nodejs.org/en/`. 

1) Once installed get to the `SpinnerApp` folder with your Command Prompt and type `npm install` this will install the packages named in the package.json file, which are required to run the BackEnd servie. 

2) Also, in the `SpinnerApp/client/spinner-app/` folder open your Command Propt and type `npm install`.

3) With the two previous steps done go to the principal folder `SpinnerApp` and type in the Command Prompt `npm run dev`. This will run both BackEnd and FrontEnd on the terminals `http://localhost:5000/` and `http://localhost:4200/` respectively.


# Deploying

To deploy the FrontEnd into a `dist` folder go to the principal folder `SpinnerApp` and type in the Command Prompt `npm run client:build`. 

It is important to have into account if you want to run the project in a server with certain `baseURL`:

1) If the domain has a `baseURL` you have to put that into the front end so the `index.html` and the API calls to the BackEnd work correctly. In the service site you gave me: `http://104.244.125.12/~devsite`, the `baseURL` is `~devsite`.

2) In your Code Editor go to  `SpinnerApp/client/spinner-app/src/index.html` and put manually the `baseURL` in the href of the <base> tag in the <head> like this: <base href="baseURL">

3) Then, also with your Code Editor go to `SpinnerApp/client/spinner-app/src/app/shared/baseHref.ts` and put the `baseURL` into the `baseHref` constant like this: `export const baseHref = 'baseURL';`.

4) Take into account that is the `baseURL` do not match with the `baseURL` of the domain, your App will not run correctly.

5) Then you can run the `npm run client:build` in the Command Prompt in the folder `SpinnerApp`.



# Running the App on the server

If you want to run the project in a server your FrontEnd will not require anything else. However, the backend service requires that the server
has installed nodeJs. One way of install it is like this:

1) Acess your service via your CPanel or SSH. If you access vie CPanel go to the terminal and access a convenient folder.

2) type wget `https://raw.githubusercontent.com/wnpower/NodeJS-Install/master/linux_install_nodejs.sh && bash linux_install_nodejs.sh`.

3) Select the version, `v11.x` and `v12.x` are recommended.

4) Place the whole project (BackEnd and Front End (Only Dist Folder) ) in a convenient folder.

5) Then just as into your PC with the terminal access `SpinnerApp/client/spinner-app/` and type `npm install`. In this case just for the BackEnd, the FrontEnd will be using just the Dist folder which is already deployed.

6) Afterwards you can run the backend typing in the terminal `node server.js` (placed in the folder `SpinnerApp/client/spinner-app/`) which will run the `server.js` file in the port `5000`. IMPORTANT NOTE: If you close the terminal the app will close as well, so if you want to keep the app running you had better type: `nohup node server.js &`, with this the app will keep running when you close the terminal. you can type `ps aux` to see all the running apps with their respective ports.

7) Then to be able to visualize it on the web, with your cPanel file manager or SSH terminal go to you `home/public_html` folder and create a file called `.htaccess` and paste the following:

    DirectoryIndex ""
    RewriteEngine On
    RewriteCond %{REQUEST_URI} ^.*/index.*
    RewriteRule ^(.*)$ http://127.0.0.1:XXXXX/ [P,L]
    RewriteRule ^$ http://127.0.0.1:XXXXX/ [P,L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.*)$ http://127.0.0.1:XXXXX/$1 [P,L]

Where you must change the XXXXX for the port your backend service is runnig. In this case 5000. IMPORTANT NOTE, if you have a `baseURL` sush as `~devsite` you have to include it after the port, like this: `RewriteRule ^(.*)$ http://127.0.0.1:5000/~devsite/ [P,L]`.

8) Your side should be running.

9) If you want to close the app you have to go with your termina to the app folder and type `pkill node`. for resetting it type again  `node server.js` or `nohup node server.js &`.


# Database MongoDB

The database selected for this app was the cloud service mongoDB: `https://www.mongodb.com/`. The data is already set how ever you can access the data via web signing in

1) Acess your account and get into Cluster. Press Collections.

2) Here you can see all the JSON Files of the Spinner App. You can set the user to administrator or not, changing the `admin` field from `false` to `true`.


# Creating another user

Using postman or a similar program make a post on:

`https://Your_current_Domain/Your_BaseURL_In_case_it_exists/users/signup`

and type in the body:

`{"username": "your username", "password": "your password", "firstname": "name", "lastname": "last"}`

If you want to make it admin you will have to go to your mongo cluster and change the `admin` field from `false` to `true`.