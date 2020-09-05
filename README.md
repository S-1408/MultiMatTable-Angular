# Angula Multi MatTable
![Screenshot (294)](https://user-images.githubusercontent.com/60258353/92306733-04f98c80-efaf-11ea-90f8-7099b8c54ddd.png)


## Content Steps
1. update @angular/cli @angular/core
2.ng add @angular/material
3. ng g c home
4. update the app routing.module.ts by adding path
5. clean-up app.component.html & add <router-outlet>
6. create Material table in component
7.update app.module.ts by adding material modules
8.update component class.
  
  ## For Addding multiple table we need to take care of following
  1.Sorting- we need to define a template variable (#TableOneSort :matSort).
  2.Paginator - we need to define a template variable (#TableOnePaginator: matPaginator.
  3.Filter -we have to define key with applyFilterOne for table A and For table B use diffrent key like applyFiltertwo.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
