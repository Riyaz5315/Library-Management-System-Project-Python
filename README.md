# Library Management Project

## Project Overview
The **Library Management Project** is a web application designed to manage various operations of a library system. It allows the library admin to manage books, authors, categories, racks, users, and more. Users can also issue and return books, track lost books, and manage fines. This project is developed using a combination of modern web technologies and a Python Flask backend, with MySQL as the database for storing all relevant information.

## Database Setup

To set up the database for this project, follow these steps:

1. **Create a new database**:
   - Open MySQL from the command line or MySQL Workbench.
   - Use the following command to create a new database (replace `your_database_name` with the name you want):

     ```sql
     CREATE DATABASE your_database_name;
     ```

2. **Import the SQL dataset (`library-system.sql`)**:

   - If using MySQL Workbench:
     1. Open MySQL Workbench.
     2. Select your database.
     3. Go to **File** > **Run SQL Script...**.
     4. Navigate to the folder where `library-system.sql` is located and select it.
     5. Click **Start** to import the data.

   **(or)**

   - Another option using MySQL Workbench:
     1. Open MySQL Workbench.
     2. Go to the **Server** menu and select **Data Import**.
     3. Under the **Import Options**, choose **Import from self-contained file**.
     4. Browse and select the `library-system.sql` file.
     5. In the **Default Target Schema** section, select the database you just created (`your_database_name`).
     6. Click on **Start Import**.
     7. MySQL Workbench will begin importing the SQL file, and your database tables will be created and populated with data.


    
3. **Verify the import**:
   - After importing the SQL file, ensure that the tables and data have been added by running the following command in MySQL:

     ```sql
     SHOW TABLES;
     ```

   - This will list the tables created from the `library-system.sql` file.


## To open this project
Email : project@gmail.com
password : 123

## Features
- **Authentication**: User login system for secure access.
- **Manage Books**: Add, update, delete, and view books.
- **Books Issued**: Track books issued to users.
- **Lost Books**: Add and manage lost books.
- **Manage Categories, Authors, and Publishers**: Organize books with categories, authors, and publishers.
- **Manage Users**: Admin can add, update, and delete users.
- **Dynamic Dashboard**: Shows statistics such as total books, books issued, and fines collected.
- **Fine Management**: Track and update fines for lost or overdue books.
  
## Technologies Used
- **Frontend**:
  - HTML
  - CSS
  - JavaScript
  - Bootstrap 5
- **Backend**:
  - Python
  - Flask
- **Database**:
  - MySQL

### Prerequisites
- Python 3.x
- Flask
- MySQL


