# Chatbot


The full project is a simple web application built using Django, which displays a table of users and their call counts. The project consists of the following components:

**Model**: The project includes a Django model called ButtonCall with fields for the user's name and call count. This model represents the data structure that will be stored in the database.

**View**: The project has a Django view called ButtonCall, which fetches all the users and their call counts from the database using the User model. It passes this data to a template for rendering.

**Template**: The template file index.html defines the HTML structure of the web page. It includes a table that iterates over the user data received from the view and displays each user's name and call count.

**URL Configuration**: The project's urls.py file maps the ButtonCall view to a specific URL (e.g., http://127.0.0.1:8000/). When the user visits this URL, the view is invoked, and the template is rendered.

**Running the Server**: The Django development server is started, allowing the web application to be accessed through a web browser. When the appropriate URL is visited, the table of users and call counts is displayed.

Overall, this simple project demonstrates the basic structure of a Django application, including models, views, templates, and URL configurations. It showcases how data can be retrieved from a database, passed to a template, and rendered in a web page.

