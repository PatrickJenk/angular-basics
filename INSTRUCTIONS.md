# Instructions

> Now we want to be able to edit our CV entries by using forms and then we will call a REST API to Create, Read, Update and Delete the records (CRUD)

## Setup Http Client
Add the `provider` for the Http Client in `src/app/app.config.ts`  
```ts
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideHttpClient(),
  ]
};
```

## HTTP Proxy
> To work around the `CORS` issue we will setup the HTTP proxy to map the calls to the API  

create a file `proxy.conf.json` in the root directory of your Angular project:
```json
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false,
    "pathRewrite": {"^/api" : ""}
  }
}
```
this will forward all http calls from `http://localhost:4200/api` to `http://localhost:3000` (wich will be our REST API).  

But we need to let angular know that we want this to be applied, so we adapt the file `angular.json`
```json
...
"serve": {
  "options": {
    "proxyConfig": "proxy.conf.json"
  }
}
...
```

## Setup the REST API

### Create the initial database
create a file `db.json`
```json
{
  "about-me": [
    {
      "id": "detail",
    	"name": "Roy Manigley",
    	"imagePath": "https://avatars.githubusercontent.com/u/7741279?v=4"
  	}
  ],
  "cv": []
}
```

### Start the REST API
we want to add a script to start the rest-api, therefore we have to adapt the `package.json` file
```json
{
  ...
  "scripts": {
    ...
    "rest-api": "npx json-server db.json"
  },
}
```
now we can run the api using `npm`
```
npm run rest-api
```

### Test the REST API
- http://localhost:3000/about-me
- http://localhost:3000/cv

### Test the Proxy config
open an other terminal and run `ng serve` (dont turn off the REST API)

- http://localhost:4200/api/about-me
- http://localhost:4200/api/cv

## Fetch data from the API
now we can fetch the data for `about-me` from the API instead of having i hard coded

### Adapt `src/app/services/about-me-service.ts`
```ts
@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  constructor(
    private http: HttpClient 
  ) {}
 
  getAboutMe(): Observable<AboutMe> {
    return this.http.get<AboutMe>('/api/about-me/detail');
  }
}
```
### Adapt `src/app/components/about-me-component.ts`
```ts
  ngOnInit(): void {
    this.aboutMeService.getAboutMe().subscribe(aboutMe => this.aboutMe = aboutMe)
  }
```