# Backend Engineer Interview Project

### **High level spec**

Your task is to build a REST API using TypeScript with Node.js that returns data from sqlite database.

The `database.sqli` file is a database that includes 3 tables:
- *users* - each row represents a single user
- *albums* - albums of a user
- *images* - images of an album

The `entities_sample.txt` file includes the structure of the tables and sample data of each table.

The API should have the following endpoints:
- Get User by user Id
- Get User and Albums by user Id
- Get Albums and Images by user Id
    - Endpoint should include support for pagination
    - Endpoint should include support for sorting by album title

-----

### **How to run this test?**
- [ ] Start Application using ```npm start``.
- [ ] Copy and Paste swagger.yaml to [https://editor.swagger.io/][Swagger Editor]
- [ ] Now you can test the API.


[Swagger Editor]: https://editor.swagger.io/
