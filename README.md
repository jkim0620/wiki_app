# Project #2: Wiki App

### Overview

#### Inspirational Wiki App - A web based CRUD application

https://project2-wikiapp.herokuapp.com/articles

--

**My project is an inspirational wiki app for designers and artists or anyone who is in need of artistic inspiration.**
* User can **READ** inspirational articles to be inspired.
* User can **CREATE** a new article to share their inspiration and insights.
* User can **UPDATE** the article by editing, or **DELETE** the ones they no longer want.
* User can **SORT** by categories :
Art and Design / Architecture / Culture / People

--


##### Screenshot

![screen shot 2017-06-10 at 2 37 33 pm](https://user-images.githubusercontent.com/18605009/27005544-504215ec-4dee-11e7-950e-5d094bb0fa6e.png)

##### Color swatches

![swatch1](https://user-images.githubusercontent.com/18605009/27005497-a26fc2c0-4ded-11e7-9fff-fa37ae1928f7.png)  - #3a3947


![swatch2](https://user-images.githubusercontent.com/18605009/27005513-ba758fda-4ded-11e7-9370-1456599f14e9.png)  - #eaff0a


![swatch3](https://user-images.githubusercontent.com/18605009/27005518-c96b0e34-4ded-11e7-9bbd-9fcf55274820.png)  - #ffffff

---

### ERD Setup

![screen shot 2017-06-05 at 9 48 44 am](https://user-images.githubusercontent.com/18605009/27005554-88b5847c-4dee-11e7-8273-c087a98d9842.png)

---

### Route Path Whiteboarding

![fullsizerender](https://git.generalassemb.ly/storage/user/6270/files/4f18b138-4df0-11e7-8a5e-02822a2ca3ed)

---

### CRUD and AJAX

* GET method - to READ all the data and render on home page
* POST method - to CREATE new data
* PUT method - to UPDATE data
* DELETE ajax call - to DELETE data from the database

---

### Instructions
##### How to download the code and run it on localhost

1. Fork repository.
2. Once forked, click on 'clone or download' and copy the link.
3. In your terminal ```cd``` into the folder you wish to save the files and ```$ git clone copiedLink```.
4. In terminal, stay inside your root folder and ```$ psql -f database/migration.sql```.
5. In terminal command ```$ nodemon``` and on your browser ```localhost:3000/articles``` will take you to the app.

---

### Built with

##### Front End
* **jQuery**
* **HTML5**
* **SCSS**
* **Materialize** for grid system and responsive web page

##### Back End
* **SQL**
* **Node.js** with **Express**
