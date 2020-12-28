# SpinnerApp

This project is composed by the Back End and the Front End. Back End Service was developed with NodeJs, Front End was developed with Angular. MySQL was used as the data base service.


# Database MySQL

The app is configured to create automatically the database the first time it is run, taking the user `root` if this exists. However in some Cpanels this process will be have to be done manually. 
If this is the case you should go to `MySQL Database` on your Cpanel and create a new database with any custom name. Also, create a user with its password and add it to the recently created database. Once this is done go to the file `config.json` and type in your new user and database:
    "database": {
        "host": "localhost",
        "port": 3306,
        "user": "`New user`",
        "password": "`New Password`",
        "database": "`New database`"
    },

Once this is done, and you run the app on the server the MySQL tables will be automatically created.

# Running the App on the server

1) Acess your service via your CPanel or SSH. If you access via CPanel go to the terminal and access a convenient folder.

2) type wget `https://raw.githubusercontent.com/wnpower/NodeJS-Install/master/linux_install_nodejs.sh && bash linux_install_nodejs.sh`.

3) Select the version, `v11.x` and `v12.x` are recommended.

4) Place the whole project (BackEnd and Front End (Only Dist Folder) ) in a convenient folder.

5) Then access with the terminal `SpinnerApp/client/spinner-app/` and type `npm install`. In this case just for the BackEnd, the FrontEnd will be using the Dist folder which is already deployed.

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





# Running app locally

To run this project locally on your computer you require to install NodeJs `https://nodejs.org/en/`. 

1) Once installed get to the `SpinnerApp` folder with your Command Prompt and type `npm install` this will install the packages named in the package.json file, which are required to run the BackEnd servie. 

2) Also, in the `SpinnerApp/client/spinner-app/` folder open your Command Propt and type `npm install`.

3) With the two previous steps done go to the principal folder `SpinnerApp` and type in the Command Prompt `npm run dev`. This will run both BackEnd and FrontEnd on the terminals `http://localhost:5000/` and `http://localhost:4200/` respectively.


# Deploying

To deploy the FrontEnd into a `dist` folder go to the principal folder `SpinnerApp` and type in the Command Prompt `npm run client:build`. 

It is important to have into account if you want to run the project in a server with certain `baseURL`:

1) If the domain has a `baseURL` you have to put that into the front end so the `index.html` and the API calls to the BackEnd work correctly. In the service site you gave me: `http://104.244.125.12/~devsite`, the `baseURL` is `~devsite`.(If you do not have a `baseURL` then you can skip steps 2, 3 and 4)

2) In your Code Editor go to  `SpinnerApp/client/spinner-app/src/index.html` and put manually the `baseURL` in the href of the <base> tag in the <head> like this: <base href="baseURL">

3) Then, also with your Code Editor go to `SpinnerApp/client/spinner-app/src/app/shared/baseHref.ts` and put the `baseURL` into the `baseHref` constant like this: `export const baseHref = 'baseURL';`.

4) Take into account that is the `baseURL` do not match with the `baseURL` of the domain, your App will not run correctly.

5) Then you can run the `npm run client:build` in the Command Prompt in the folder `SpinnerApp`.
