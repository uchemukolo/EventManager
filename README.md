# EventManager
Given you manage an events center, this app will help you accept applications to use your center / facilities, and will either decline events when the proposed day is already taken, or suggest an available day

TECHNOLOGIES USED

Back-end: Node/Expressjs
Libraries: ES6, Babel-CLI, eslint, Mocha/Chai
Postman

Usage

Clone or download the repo
npm install - to install the dependencies need by the app
npm run start:dev - to run the app
API ENDPOINTS

Request	End Point	Action	Data,
POST /events/  Creates an event,
PUT /events/<eventId>	Edit an event ,  	
DELETE /events/<eventId>	Delete an event,
POST /centers/	Add a new center,
GET /centers/	Get all centers,
GET /centers/<centerId>	Get a single center,
PUT /centers/<centerId>	Modify the details of center.