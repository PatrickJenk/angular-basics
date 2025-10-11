# Instructions

> Now hegenerated the `components`, `models`, and `services` we have to wire them up to brig our app alive

## Angular Wiringup

```
        ┌Models────────────────────┐         
        │                          │         
        │   ┌──────┐   ┌─────────┐ │         
┌───────┼───┼  Cv  │   │ AboutMe ┼─┼────────┐
│       │   └──────┘   └─────────┘ │        │
│       └──────────────────────────┘        │
│                                           │
│                                           │
│    ┌Services─────────────────────────┐    │
│    │                                 │    │
└────►┌───────────┐ ┌────────────────┐◄┼────┘
     ││ CvService │ │ AboutMeService │ │     
┌────┼┴───────────┘ └────────────────┴─┼────┐
│    └─────────────────────────────────┘    │
│                                           │
│                                           │
│    ┌Components────────────────────────┐   │
│    │                                  │   │
│    │┌─────────────┐┌─────────────────┐│   │
└────┼► CvComponent ││ AboutMeComponent◄┼───┘
     │└─────────────┘└─────────────────┘│    
     └──────────────────────────────────┘    
```

### Define the Models

> The model is the definition of an object. We can degine fields and its types. At the end we want to display those models in our component.

#### `src/app/models/about-me.ts`

```ts
export class AboutMe {
  constructor(
    public name: string, 
    public imagePath: string
  ) {}
}
```

#### `src/app/models/cv.ts`

```ts
export class Cv {
  constructor(
    public employer: string,
    public start: number,
    public end?: number
  ) {}
}
```

### Define the components

> The component ist what the user will be seeing in the browser, so we will need some of our models here :)

#### `src/app/components/about-me-component`

`.ts`

```ts
import { Component } from "@angular/core";
import { AboutMe } from "../../models/about-me";

@Component({
  selector: "app-about-me-component",
  imports: [],
  templateUrl: "./about-me-component.html",
  styleUrl: "./about-me-component.css",
})
export class AboutMeComponent {
  public aboutMe?: AboutMe;
  ngOnInit(): void {
    this.aboutMe = new AboutMe(
      "Roy Manigley",
      "https://avatars.githubusercontent.com/u/7741279?v=4"
    );
  }
}
```

`.html`

```html
<h1>About me</h1>
<p>{{ aboutMe?.name }}</p>
<img [src]="aboutMe?.imagePath" />
```

#### `src/app/components/cv-component`

`.ts`

```ts
import { Component } from "@angular/core";
import { Cv } from "../../models/cv";

@Component({
  selector: "app-cv-component",
  imports: [],
  templateUrl: "./cv-component.html",
  styleUrl: "./cv-component.css",
})
export class CvComponent {
  cvs: Cv[] = [];

  ngOnInit(): void {
    this.cvs = [
      new Cv("Nasa", 2000, 2004),
      new Cv("FBI", 2004, 2010),
      new Cv("CIA", 2010, 2023),
      new Cv("Eutima", 2024),
    ];
  }
}
```

`html`

```html
<h1>CV</h1>
<ul>
    @for (cv of cvs; track cv.employer) {
        <li>{{ cv.employer }} {{ cv.start }} - {{ cv.end }}</li>
    }
</ul
```

### Define the services

> The service provides the data needed. Actually we could have all defined in the component, but this wouldnt be maintanable and scaleable. We will introduce the service so we can reuse it later. 

#### `src/app/services/about-me-service.ts`

```ts
import { Injectable } from '@angular/core';
import { AboutMe } from '../models/about-me';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
 
  getAboutMe(): AboutMe {
    return new AboutMe(
      'Roy Manigley', 'https://avatars.githubusercontent.com/u/7741279?v=4'
    )
  }
}
```
> then adapt the [src/app/components/about-me-component/about-me-component.ts](portfolio/src/app/components/about-me-component/about-me-component.ts) to use the service

#### `src/app/services/cv-service.ts`

```ts
import { Injectable } from '@angular/core';
import { AboutMe } from '../models/about-me';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
 
  getAboutMe(): AboutMe {
    return new AboutMe(
      'Roy Manigley', 'https://avatars.githubusercontent.com/u/7741279?v=4'
    )
  }
}
```
> then adapt the [src/app/components/about-me-component/about-me-component.ts](portfolio/src/app/components/about-me-component/about-me-component.ts) to use the service

## Result
> And when you run your app using `ng serve` you should see your protfolio all in one page  
![result](docs/result.png)