# Instructions

> Now we can finaly create the forms for `cv` and `about-me`

## Adapt AboutMe Service
add following methods to the CV Service
```ts
  updateAboutMe(name: string): Observable<AboutMe> {
    return this.http.patch<AboutMe>('/api/about-me/detail/',  { name });
  }
```
## Adapt CV Service
add following methods to the CV Service
```ts
  constructor(
    private http: HttpClient
  ) { }

  getCVs(): Observable<Cv[]> {
    return this.http.get<Cv[]>('/api/cv/');
  }

  getCV(id: string): Observable<Cv> {
    return this.http.get<Cv>(`/api/cv/${id}`);
  }

  createCV(cv: Cv): Observable<Cv> {
    return this.http.post<Cv>(`/api/cv/`, cv);
  }

  updateCV(id: string, cv: Cv): Observable<Cv> {
    return this.http.put<Cv>(`/api/cv/${id}/`, cv);
  }

  deleteCV(id: string): Observable<void> {
    return this.http.delete<void>(`/api/cv/${id}/`);
  }
```
## Adapt CV Model
add the `id` to the model, this will be needed for interactions with the API
```ts
export class Cv {
    public id?: string
    constructor(
        public employer?: string,
        public start?: number,
        public end?: number
    ) {
    }
}
```
## AboutMe form (`TemplateForm`)
### `about-me-component`
> Here we will add links to the Create Edit page and add the delete functionality  
- [src/app/components/about-me-component/about-me-component.ts](/portfolio/src/app/components/about-me-component/about-me-component.ts)
- [src/app/components/about-me-component/about-me-component.html](/portfolio/src/app/components/about-me-component/about-me-component.html)


## CV form (`ReactiveForm`)

### Generate new CV component
```
ng generate component components/cv-edit-component
```
### `cv-edit-component`
> Here we will define the form and handle the update and creation of Cv records  

- [src/app/components/cv-edit-component/cv-edit-component.ts](/portfolio/src/app/components/cv-edit-component/cv-edit-component.ts)
- [src/app/components/cv-edit-component/cv-edit-component.html](/portfolio/src/app/components/cv-edit-component/cv-edit-component.html)

### `cv-component`
> Here we will add links to the Create Edit page and add the delete functionality  
- [src/app/components/cv-component/cv-component.ts](/portfolio/src/app/components/cv-component/cv-component.ts)
- [src/app/components/cv-component/cv-component.html](/portfolio/src/app/components/cv-component/cv-component.html)

### Adapt the route in `src/app/app.routers.ts`
```ts
export const routes: Routes = [
    ...
    {path: 'cv', component: CvComponent},
    {path: 'cv/new', component: CvEditComponent},
    {path: 'cv/:id', component: CvEditComponent},
    ...
];
```