## <code style="color:green"> Website Name: SuperMarket</code>

### <code style="color:aqua"> Live Link:</code>

```bash
https://scic-task-two.netlify.app
```

## Tech

Super Market uses a number of open source projects to work properly:

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/)
- [Firebase](https://firebase.google.com/)
- [tanstack query](https://tanstack.com/query/latest)

Get Full docs

- [Google Docs](https://docs.google.com/document/d/1qiLyHctbrCHIK4VbgtUnY6OK6iOHvPegZNeYiN80BZI/edit?usp=sharing)

## Installation

To set up the client locally, follow these steps:

**Clone the repository:**

```bash
   > git clone  https://github.com/AKsamrat/task-two.git
   > task-two
   > npm install
   > Create a .env file in the root directory and add the required environment variables (see the Environment Variables section).
   > npm run dev
```

## Environment Variables

The client requires several environment variables to be set. Create a .env.local
file in the root directory and add the following:

```bash
VITE_API_URL = "http://localhost:5000"
VITE_APIKEY= Your firebase code
VITE_AUTHDOMAIN= Your firebase code
VITE_PROJECTID= Your firebase code
VITE_STORAGEBUCKET= Your firebase code
VITE_MESSAGINGSENDERID= Your firebase code
VITE_APPID= Your firebase code

VITE_IMAGE_HOSTING_KEY=Your ibb hosting key
```

## Deployment

1.  **Deploying to Firebas**

Create a new project in firebase:

1. Install Firebase CLI:
   ```bash
    npm install -g firebase-tools
   ```
2. Login to firebae :
   ```bash
   firebase login
   ```
3. Initialize firebase

   ```bash
   firebase init
   ```

   Select "Hosting" and choose the project you want to deploy. Set 'dist' as the
   public directory. Configure as a single-page app by answering Yes.

4. Build the project: **Before build make sure to change the env file . The URL
   will be your live server links**
   ```bash
     npm run build
   ```
5. Deploy to Firebase:
   ```bash
   firebase deploy
   ```
