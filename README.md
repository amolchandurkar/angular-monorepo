# AngularMonorepo
This monorepo project builds example application(covid tracker application). It uses some of the existng APIs available to gather data. We will use Angular for the front end and Nest for back end.

## Project Setup

This project was generated using [Nx Dev Tool](README-Nx.md)

## Prerequisite modules and packages
### Node
You can download Node from [node](https://nodejs.org/en/download/)

Current stable release, as of now is 12.16.1.

Command to check version: node --version

v12.16.1

### NPM:
Command to check version: npm --version

6.14.4

### Angular CLI: 
- Install the Angular CLI globally and check the version
  - Command to install: `npm i -g @angular/cli`
  - Command to check version: `ng --version`

    Angular CLI: 9.1.0

### TypeScript: 
- Command to install: `npm i -g typescript`
- Command to check version: `tsc --version`

  3.8.3

### NestJS
- Command to install: `npm i -g @nestjs/cli`
- Command to check version: `nest --version`

  6.14.2

### NX:
Command to install: `npm i -g @nrwl/cli`

## Creating Project
  - `npm init nx-workspace angular-monorepo` 
    - Select empty workspace option
    - Select Angular CLI for CLI option
  - After workspace creation go to workspace location
  - Add Angular capability to workspace -   
    - `ng add @nrwl/angular`
    - `ng add @nrwl/nest`
## Creating angular UI application with nx
  - `ng g @nrwl/angular:application tracker --directory=ui`
    - Select SASS when prompted. It is a CSS pre-processor which makes CSS more developer friendly. 
    - For all other prompted question go with defaults
  - Add "start": "ng serve --open" change to package.json to run application with 
    `npm start` 
  - The application can be access in browser with URL: http://localhost:4200
## Creating Nest Service application with nx
  - Create the server API application -  `ng g @nrwl/nest:application trackerapi --directory=server`
  - Run the server app using - `ng serve server-trackerapi`
  - The API can be access in browser with URL: http://localhost:3333/api/
  - In main.ts, change api to api/v1, so we can version the APIs.
    - `const globalPrefix = ‘api/v1’;`
  - Enable cors, so the UI layer can call the APIs. Read up on that [NestJS CORS Security](https://docs.nestjs.com/techniques/security#cors).
    - `app.enableCors();`

## Workpsace Package json changes
  - Add scripts in the package.json to make application invocation easier during development. 
  - Add following in the scripts section.
    - `"start:tracker": "ng serve ui-tracker — open"`
    - `"start:trackerapi": "ng serve server-trackerapi"`
  - Run both the UI and server applications: 
    - `npm run start:tracker` and
    - `npm run start:trackerapi`
## Creating Shared Library 
  - `ng g @nrwl/angular:library commonlib --directory=ui` 
  - `ng g @nrwl/nest:lib commonlib --directory=server` 
## Creating Client Service Consumer
  - `ng g service tracker --project=ui-tracker --dry-run`
  - `ng g service tracker --project=ui-tracker`
## Creating Client UI

## Check Dependency Graph
  npm run dep-graph

## Application Build
  Update the package.json scripts with the following to build the UI/Server apps and libraries easily.

  - The builds are generated in dist folder.
    -  `"build:tracker”: “ng build ui-tracker --prod",`
    - `"build:trackerdapi”: “ng build server-trackerapi — prod",`
  - To create the UI app build, run the following command
    - `npm run build:tracker`
  - To create the server app build, run the following command
    - `npm run build:trackerapi`
## Running Application
  - `npm run start:trackerapi`
  - `npm run start:tracker`

