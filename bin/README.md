# CinemaProject
## Instuctions to run frontend
[MongoDB](https://www.mongodb.com/download-center/community) must be installed as well as [Node.js](https://nodejs.org/en/download/).
In the project directory open the command prompt and run the following commands:

### `npm install`

This will import all the dependencies.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Instuctions to run backend
Assuming you have Maven and Java installed, in the project directory open the command prompt and run the following commands:

### `mvn install`

This will build the project and create an java artefact (.jar) file.

You now need to cd into the /target folder where the jar file has been created.

### `java -jar {name of the jarfile}`

The name of the jar file may change  but should be CinemaProject-0.0.1-SNAPSHOT.jar
