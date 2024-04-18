This README file provides a step-by-step guide to set up the project environment and resolve common challenges.
# Cloning the Repository
 ## To clone the repository, use the following command:
          git clone <repository_url>

# Dockerfiles and Docker Commands:
The project contains Dockerfiles for the frontend, backend, and MySQL. Additionally, a script.sql file is available.
# MySQL Container
  ## To create a MySQL container, run the following command:
          sudo docker run -it -d --name mysqlcontainer -p 3306:3306 mysql:latest
# Frontend and Backend Containers
   ## To create frontend and backend containers, use the following commands:
           sudo docker run -d --name backend-container -p 8000:8000 --link mysqlcontainer:mysql backend
           sudo docker run -d --name frontend-container -p 5000:5000 --link mysqlcontainer:mysql frontend

# Challenges
## Challenge 1:Resolving Port 3306 Issue
   ## To resolve the challenge related to port 3306, use the following commands:
         ss -tuln | grep 3306
         sudo systemctl stop mysql
         sudo docker start mysqlcontainer
## Challenge 2:Application Not Showing Submitted Data
 If the application does not show submitted data, follow these steps:
   ## 1.Access the MySQL container's bash:
             sudo docker exec -it mysqlcontainer /bin/bash
   ## 2.Log in to MySQL:
                 mysql -u root -p
   ## 3. Follow the table creation steps available in the GitHub repository. No need to restart the container.
# Network Creation (Optional)
   ## To create a Docker network, use the following command:
          sudo docker network create mynetwork
  ## Connect frontend and backend containers to the network:
          sudo docker connect mynetwork frontend-container
          sudo docker connect mynetwork backend-container
   ## Inspect the network:
          sudo docker inspect mynetwork

# Files to Be Changed
 ## 1.FrontEnd/views/listEmployee.ejs:
  ## Update the listEmployee.ejs file in the frontend views directory to reflect changes in data display.
       <%- include('./layouts/head.ejs') %>

    </head>

     <body>
    <%- include('./layouts/navbar.ejs') %>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">Emp. Code</th>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <% if (data && data.length) { %>
                <% for (let emp of data) { %>
                    <tr>
                        <th scope="row"><%= emp.emp_id %> </th>
                        <td><%= emp.emp_name %> </td>
                        <td><%= emp.emp_contact %> </td>
                        <td><%= emp.emp_add %> </td>
                        <td><a href="/delete/<%= emp.emp_id %> "><button class="btn-sm btn-danger">Delete</button></a></td>
                    </tr>
                <% } %>
            <% } else { %>
                <tr>
                    <td colspan="5">No employee data available</td>
                </tr>
            <% } %>
        </tbody>
    </table>

    <% -include('./layouts/end.ejs') %>    
   ## 2.ROUTES.js:
   Update the ROUTES.js file to change the host field to the internal IP address of the VM.
   ## 3.backend/db/conn.js:
   Update the conn.js file in the backend db directory to replace the hostname with the MySQL container's name and update the database username and password.

           
# Rebuild the frontend image and backend image also start the container.






    



