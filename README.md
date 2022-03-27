# GYANT - Case label assignment

## Overview
The project is divided in two repositories:
  - [gyant-case-label-api](https://github.com/nunopeixoto/gyant-case-label-api) NestJS w/ TypeScript <br>
  - [gyant-case-label-client](https://github.com/nunopeixoto/gyant-case-label-client) React w/ TypeScript

## Project setup instructions
#### gyant-case-label-api
```bash
git clone https://github.com/nunopeixoto/gyant-case-label-api.git
cd gyant-case-label-api
npm install

# Update .env as you desire. Note that I will provide you with a database connection URI that already contains some seeded data.
cp .env.example .env
vi .env

npm run start
```
___

#### Setup gyant-case-label-client
```bash
git clone https://github.com/nunopeixoto/gyant-case-label-client.git
cd gyant-case-label-client
npm install

# Optional - update port
cp .env.example .env
vi .env
# If you used a port different than 3001 on the gyant-case-label-api, edit the line 5 of the package.json**
vi package.json

npm run start

```
** This change is needed to avoid cors errors
___

#### Database
- I will provide you a database connection URI to add on the gyant-case-label-api 
- This already has a signed up user (e-mail: user@test.com password: 123)

___

## General notes about the assignment
- I didn't find a way to create a command to seed the database, so I will provide you with a database connection URI so you can connect to an already seeded database (hosted on the cloud). However, if you want to try the projects out in a local database [here are the collections to import](https://www.dropbox.com/scl/fo/xl0c2dajt7pqoew6y9r3k/h?dl=0&rlkey=jdhecuypnqjgu4q6sst3j0o3y)
- Given the time constraints, I opted not to go with 100% test coverage. With that said, I still developed tests for the UsersModule (both unit and e2e).
- This was my first experience with NestJS and React and even though I made the effort to read some documentation and find good tutorials, to be able to finish the assignment in a timely fashion I'm sure that missed a lot of key concepts, design patterns and best practices on both.
- I used httpOnly cookie so the session is not persistent.
