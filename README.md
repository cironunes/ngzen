# ngzen
> CLI tool to improve the worflow for Angular apps

## API

- **module [module_name]:**
  Create a module folder and the module registration file.

  `
  $ zen module auth
  `
  
  ```
  - auth
    - auth.module.js
  ```
  
- **controller [controller_name] [module_name]:**
  `
  $ zen controller auth auth
  `
  
  ```
  - auth
    - auth.controller.js
  ```
 
- **service [service_name] [module_name]:**
  `
  $ zen service auth auth
  `
  
  ```
  - auth
    - auth.service.js
  ```
 
- **directive [controller_name] [module_name]:**

