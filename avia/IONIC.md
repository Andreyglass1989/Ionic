IONIC

1. Getting Started with Ionic
	npm install -g ionic

   Start new project:
	ionic start /nameApp/


2. Generate Component
	`ionic g`
	`ionic generate component / ionic g component`
	`ionic g component statusDetail`

3. Component Module

4. Iterating in a Ionic Component
	ERROR: Can't bind to 'ngForOf'

5. Ionic List Component
	ERROR: 'ion-list' is not a known element

6. Navigation from a Component
	`ionic g `

7.login page
	`ionic g page login`

8.Bind a Form to a Model with ngModel
	`ionic g component auth`

9.logout page
	`ionic g page logout`

10.Create a Provider for HTTP Requests
	`ionic g provider backendAPI`

11. Adjust JWT Expiration
	в проекте django/cfeapi/restconf/main.py

	'JWT_EXPIRATION_DELTA': datetime.timedelta(days=7), //add this text
    'JWT_ALLOW_REFRESH': True,
    'JWT_REFRESH_EXPIRATION_DELTA': datetime.timedelta(days=7),