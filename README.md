# TIKTOK App Clone

Tutorial reference from<br/>
[https://www.youtube.com/watch?v=g8yGxDMyGiE&t=2767s](https://www.youtube.com/watch?v=g8yGxDMyGiE&t=2767s)

#### `npm start`

Open [http://localhost:3000](http://localhost:3000) to

#### `npm test`

## FRONTEND

- REACT
- Material UI
- Flexbox
- 3rd party Ticker, Scroll snap
- Firebase Hosting

## BACKEND

- NodeJS
- ExpressJS
- MongoDB
- Mongoose
- Heroku Hosting

1. Create React project `$ npx create-react-app .`
2. Create Firebase project with named project is `react-clone-wilden`
3. Install MATERIAL-UI [https://material-ui.com/getting-started/installation/](https://material-ui.com/getting-started/installation/)

- `$ npm install @material-ui/core`

4. Install Material-UI ICONS [https://material-ui.com/components/icons/#icons](https://material-ui.com/components/icons/#icons)

- `$ npm install @material-ui/icons`

5. Find and click `search the full list of these icons` will going to [https://material-ui.com/components/material-icons/](https://material-ui.com/components/material-icons/)

6. Fill `Search Icons...` bar with `music note` and Click `MusicNote` and then copy `import MusicNoteIcon from '@material-ui/icons/MusicNote';`

7. Install react-ticker `$ npm i react-ticker`
8. Install Axios `$ npm i axios`
9. Firebase Config

- `$ npm install -g firebase-tools`
- `$ firebase login`
- `$ firebase init`

- Are you ready to procees?
  `Jawab Y`
- Pilih `Hosting: Configure and deploy Firebase Hosting sites`
- What do you want to use as your public directory?
  `(awalnya public ganti jadi build)`
- Configure as a single-page app (rewrite all urls to /index.html)? (y/N)
  `jawab YES aja`
- `$ npm run build`
- `$ firebase deploy`
- Cara cepat `$ npm run build && firebase deploy`
