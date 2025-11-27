// Data for each week
const weekData = {
    1: {
        title: "Week 1 Content",
        text: `WEEK - 1

1. What are the differences between Core Java and Advanced Java?
   Core Java: Focuses on fundamental language concepts.
   Advanced Java: Uses advanced concepts to create complex applications.

2. What are the main important features of Applets in Java?
   Applets are used to build standalone applications in Java.

3. What are the key features of Java Servlets?
   Servlets are used to build web applications in Java.

4. What are the differences between Applets and Servlets in Java?
   Applets are client-side programs, while Servlets are server-side programs.

5. What are the major features of Java compared to other programming languages?
   Platform independence, OOP, automatic memory management,
   robust security, multithreading, and high performance.

6. What is the main role of JDBC and ODBC in database connectivity?
   JDBC: Java Database Connectivity
   ODBC: Open Database Connectivity
   Both act as communication APIs between applications and databases.

7. What are the differences between ODBC and JDBC?
   JDBC: Designed specifically for Java applications.
   ODBC: A general API, not tied to a specific language.

8. What are the differences between Cookies and Sessions in web applications?
   Cookies: User data stored in the browser.
   Sessions: User data stored on the server.

9. Differences between Spring Boot and traditional Spring Framework?
   Spring Boot: Built on top of the Spring framework with automation.
   Traditional Spring: Provides infrastructure support for enterprise apps.

10. Differences between standalone and web applications?
    Standalone: Runs on a user's computer without internet.
    Web applications: Accessed via browser and require internet.

11. What are the basic requirements for executing a web application?
    A web server, an application server, and a database system.`,
        pdf: "pdfs/week1.pdf"
    },


2: {
        title: "Week 2 Content",
        text: `WEEK - 2

AIM: To Create a Java Application using NetBeans

Step 1: Open NetBeans IDE
• Launch NetBeans on your computer.

Step 2: Start a New Project
• Click File → New Project
• Or click the New Project icon (a folder with a plus sign).

Step 3: Select Project Type
• In the New Project window:
  - Choose Java under Categories
  - Select Java Application under Projects
• Click Next

Step 4: Name Your Project
• Enter your project name (e.g., MyFirstApp)
• Choose the Project Location on your computer
• Ensure "Create Main Class" is checked
• Click Finish

Step 5: Write Your Java Code

CODE:

package Test;
import java.sql.*;
import java.util.*;

public class Test {
    public static void main(String args[]) {
        try {
            Class.forName("net.ucanaccess.jdbc.UcanaccessDriver");
            Connection con = DriverManager.getConnection("jdbc:ucanaccess://D:\\\\vrsec.accdb");
            Statement st = con.createStatement();

            ResultSet rs = st.executeQuery("select * from it");
            while (rs.next()) {
                System.out.println("emp Number is: " + rs.getInt(1));
                System.out.println("emp name is: " + rs.getString(2));
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}

Step 6: Build and Run Your Project
• Click the green Run button
• Or press Shift + F6
• Output will appear at the bottom

Output:

<img src="images/week2_output.png">`,
        pdf: "pdfs/week2.docx"
    },


3: {
    title: "Week 3 Content",
    text: `WEEK - 3

AIM: JDBC - MySQL Connection

Procedure:

1. Click the category as "Java" and in Projects select "Java Application", then click Next.
   (Creating a new Java project in NetBeans.)

   <img src="images/week3img1.png">
   <img src="images/week3img2.png">

2. Enter the file name and click Finish. Now your file setup is completed.

   <img src="images/week3img3.jpg">

3. Write the code for the MySql1 class in the project and run the code after adding the data.

   <img src="images/week3img4.jpg">

4. In your project Libraries, add the required JAR files:
   Right click Libraries → Add JAR/Folder → choose all required JDBC drivers and add them.

   <img src="images/week3img5.jpg">

5. Open MySQL server and create a database "welcome". 
   After creation, switch to the welcome database.
   Create a table with some student data and run the server.

6. After running the MySQL server, return to the project MySql1, run the program,
   and the output displays the records inserted in the table.

   <img src="images/week3img6.png">`,
    pdf: "pdfs/week3.docx" 
},

4: {
    title: "Week 4 Content",
    text: `WEEK - 4

Write a JDBC program to perform CRUD operations on student database.

Create a table Person with the following fields:
PersonID int,
FirstName varchar(255),
City varchar(255)

Write a JDBC program to connect to the database for inserting data into the Person table using CallableStatement.

Write a JDBC program using PreparedStatement to select the employee whose salary is greater than X (consider X as a random value).

Serial Number    Employee number    Employee name    Salary


CODE:

import java.sql.*;
public class EmployeeSalaryOutput {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/testdb";
        String user = "root";
        String pass = "root";
        double X = 30000;  
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection(url, user, pass);
            String sql = "SELECT serial_no, emp_no, emp_name, salary FROM Employee WHERE salary > ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setDouble(1, X);
            ResultSet rs = ps.executeQuery();

            System.out.println("\\n\\t1. Employee With Salary Greater Than X\\n");
            System.out.println("\\t(X = " + (int)X + ")\\n");

            System.out.printf("%-12s %-15s %-20s %-10s\\n",
                    "Serial No", "Employee No", "Employee Name", "Salary");

            while (rs.next()) {
                System.out.printf("%-12d %-15d %-20s %-10.0f\\n",
                        rs.getInt("serial_no"),
                        rs.getInt("emp_no"),
                        rs.getString("emp_name"),
                        rs.getDouble("salary"));
            }

            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

<img src="images/week4img1.png">


Create a Java Program to connect to a database which contains the following table:
Serial Number | Product number | Product name | Price


CODE:

import java.sql.*;
public class ProductInsertDisplay {
    static final String URL = "jdbc:mysql://localhost:3306/testdb";
    static final String USER = "root";
    static final String PASS = "root";

    public static void main(String[] args) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection(URL, USER, PASS);

            System.out.println("\\n2. Product Insert and Display (PreparedStatement)\\n");

            insertProduct(con, 1, 201, "Keyboard", 1200);
            insertProduct(con, 2, 202, "Mouse", 700);
            insertProduct(con, 3, 203, "Monitor", 8500);

            System.out.println("Product inserted successfully.\\n");

            displayProducts(con);

            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    static void insertProduct(Connection con, int serialNo, int productNo, String name, double price)
            throws SQLException {
        String sql = "INSERT INTO Product (serial_no, product_no, product_name, price) VALUES (?, ?, ?, ?)";
        PreparedStatement ps = con.prepareStatement(sql);
        ps.setInt(1, serialNo);
        ps.setInt(2, productNo);
        ps.setString(3, name);
        ps.setDouble(4, price);
        ps.executeUpdate();
        ps.close();
    }

    static void displayProducts(Connection con) throws SQLException {
        String sql = "SELECT * FROM Product";
        PreparedStatement ps = con.prepareStatement(sql);
        ResultSet rs = ps.executeQuery();

        System.out.printf("%-12s %-12s %-20s %-10s\\n",
                          "Serial No", "Product No", "Product Name", "Price");

        while (rs.next()) {
            System.out.printf("%-12d %-12d %-20s %-10.0f\\n",
                    rs.getInt("serial_no"),
                    rs.getInt("product_no"),
                    rs.getString("product_name"),
                    rs.getDouble("price"));
        }

        rs.close();
        ps.close();
    }
}

<img src="images/week4img2.png">


Write a program to insert data and display all the contents of a table using PreparedStatement.

Create a table Department with the following fields:
Department int,
DepartmentName varchar(255),
City varchar(255)

Write a JDBC program to delete a department record using CallableStatement.


Illustrate CRUD operations with a Book table:
Serial Number | Book Number | Book name | Price


CODE:

import java.sql.*;
public class BookTableCRUDOutput {
    static final String URL  = "jdbc:mysql://localhost:3306/testdb";
    static final String USER = "root";
    static final String PASS = "root";

    public static void main(String[] args) {
        Connection con = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(URL, USER, PASS);

            clearTable(con);

            System.out.println("\\n4. Book Table CRUD Operations Output\\n");

            insertBook(con, 1, 501, "Java", 450);
            insertBook(con, 2, 502, "DBMS", 500);

            System.out.println("After Insert:\\n");
            displayBooks(con);
            System.out.println();

            updateBookPriceByBookNo(con, 501, 550);
            System.out.println("After Update (Price changed for Book No 501):\\n");
            displayBooks(con);
            System.out.println();

            deleteBookByBookNo(con, 502);
            System.out.println("After Delete (Book No 502 deleted):\\n");
            displayBooks(con);
            System.out.println();

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try { if (con != null) con.close(); } catch (Exception e) {}
        }
    }

    static void clearTable(Connection con) throws SQLException {
        String sql = "DELETE FROM Book";
        PreparedStatement ps = con.prepareStatement(sql);
        ps.executeUpdate();
        ps.close();
    }

    static void insertBook(Connection con, int serialNo, int bookNo,
                           String name, double price) throws SQLException {
        String sql = "INSERT INTO Book(serial_no, book_no, book_name, price) VALUES(?, ?, ?, ?)";
        PreparedStatement ps = con.prepareStatement(sql);
        ps.setInt(1, serialNo);
        ps.setInt(2, bookNo);
        ps.setString(3, name);
        ps.setDouble(4, price);
        ps.executeUpdate();
        ps.close();
    }

    static void updateBookPriceByBookNo(Connection con, int bookNo, double newPrice)
            throws SQLException {
        String sql = "UPDATE Book SET price = ? WHERE book_no = ?";
        PreparedStatement ps = con.prepareStatement(sql);
        ps.setDouble(1, newPrice);
        ps.setInt(2, bookNo);
        ps.executeUpdate();
        ps.close();
    }

    static void deleteBookByBookNo(Connection con, int bookNo) throws SQLException {
        String sql = "DELETE FROM Book WHERE book_no = ?";
        PreparedStatement ps = con.prepareStatement(sql);
        ps.setInt(1, bookNo);
        ps.executeUpdate();
        ps.close();
    }

    static void displayBooks(Connection con) throws SQLException {
        String sql = "SELECT serial_no, book_no, book_name, price FROM Book ORDER BY serial_no";
        PreparedStatement ps = con.prepareStatement(sql);
        ResultSet rs = ps.executeQuery();

        System.out.printf("%-10s %-10s %-15s %-10s%n",
                "Serial No", "Book No", "Book Name", "Price");

        while (rs.next()) {
            System.out.printf("%-10d %-10d %-15s %-10.0f%n",
                    rs.getInt("serial_no"),
                    rs.getInt("book_no"),
                    rs.getString("book_name"),
                    rs.getDouble("price"));
        }

        rs.close();
        ps.close();
    }
}

<img src="images/week4img3.png">`,
    pdf: "pdfs/week4.docx"
},

5: {
    title: "Week 5 Content",
    text: `WEEK - 5

AIM: Write the program in Java using Scroll Insensitive ResultSet.

CODE:

package week5;
import java.sql.*;

public class Week5 {
    public static void main(String[] args) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            String url = "jdbc:mysql://localhost:3306/emp";
            String username = "root";
            String password = "";
            Connection con = DriverManager.getConnection(url, username, password);

            Statement st = con.createStatement(
                    ResultSet.TYPE_SCROLL_SENSITIVE,
                    ResultSet.CONCUR_UPDATABLE
            );

            ResultSet rs = st.executeQuery(
                    "SELECT eno, ename, salary FROM employee"
            );

            rs.moveToInsertRow();
            rs.updateInt("eno", 301);
            rs.updateString("ename", "Alice");
            rs.updateInt("salary", 47000);
            rs.insertRow();

            rs.moveToInsertRow();
            rs.updateInt("eno", 302);
            rs.updateString("ename", "Bob");
            rs.updateInt("salary", 52000);
            rs.insertRow();

            rs.moveToInsertRow();
            rs.updateInt("eno", 303);
            rs.updateString("ename", "Charlie");
            rs.updateInt("salary", 60000);
            rs.insertRow();

            System.out.println("Employees inserted successfully:\\n");

            rs.beforeFirst();
            while (rs.next()) {
                System.out.println(
                        rs.getInt("eno") + " | " +
                        rs.getString("ename") + " | " +
                        rs.getInt("salary")
                );
            }

            rs.close();
            st.close();
            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

OUTPUT:

<img src="images/week5img2.png">


AIM: Write the program in Java using Scroll Sensitive ResultSet.

CODE:

import java.sql.*;

public class Week5 {
    public static void main(String[] args) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            String url = "jdbc:mysql://localhost:3306/emp";
            String username = "root";
            String password = "";
            Connection con = DriverManager.getConnection(url, username, password);

            Statement st = con.createStatement(
                    ResultSet.TYPE_SCROLL_SENSITIVE,
                    ResultSet.CONCUR_UPDATABLE
            );

            ResultSet rs = st.executeQuery(
                    "SELECT eno, ename, salary FROM employee"
            );

            rs.moveToInsertRow();
            rs.updateInt("eno", 401);
            rs.updateString("ename", "David");
            rs.updateInt("salary", 55000);
            rs.insertRow();

            rs.moveToInsertRow();
            rs.updateInt("eno", 402);
            rs.updateString("ename", "Emma");
            rs.updateInt("salary", 62000);
            rs.insertRow();

            rs.moveToInsertRow();
            rs.updateInt("eno", 403);
            rs.updateString("ename", "Frank");
            rs.updateInt("salary", 70000);
            rs.insertRow();

            System.out.println("Employees inserted successfully:\\n");

            rs.beforeFirst();
            while (rs.next()) {
                System.out.println(
                        rs.getInt("eno") + " | " +
                        rs.getString("ename") + " | " +
                        rs.getInt("salary")
                );
            }

            rs.afterLast();
            System.out.println("\\nReading in reverse order:");

            while (rs.previous()) {
                System.out.println(
                        rs.getInt("eno") + " | " +
                        rs.getString("ename") + " | " +
                        rs.getInt("salary")
                );
            }

            rs.close();
            st.close();
            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

OUTPUT:

<img src="images/week5img2.png">`,
    pdf: "pdfs/week5.docx"
},

6: {
    title: "Week 6 Content",
    text: `WEEK - 6

HTTP Servlet

AIM: To create a HttpServlet that handles GET requests and displays "Hello" on a web browser using doGet() method.

CODE:

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Hello extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Set content type
        response.setContentType("text/html");

        // Print "Hello"
        PrintWriter out = response.getWriter();
        out.println("Hello");
    }
}

<img src="images/week6img1.png">


Generic Servlet

AIM: To create a GenericServlet that handles all types of requests using the service() method and prints "Hello from GenericServlet" on a webpage.

CODE:

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.GenericServlet;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class Genric_servlet extends GenericServlet {
    @Override
    public void service(ServletRequest request, ServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");

        // Print "Hello"
        PrintWriter out = response.getWriter();
        out.println("Hello from GenericServlet");
    }
}

OUTPUT:

<img src="images/week6img2.jpg">`,
    pdf: "pdfs/week6.docx"
},

7: {
    title: "Week 7 Content",
    text: `WEEK - 7

AIM: To develop a Java Servlet program that demonstrates cookies by creating, setting, and reading cookies from the client’s browser to maintain user-specific information across multiple requests.


ClearCookieServlet.java


package com.example.cookies;
import java.io.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/clear")
public class ClearCookieServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        Cookie cookie = new Cookie("username", "");
        cookie.setMaxAge(0);
        cookie.setPath(request.getContextPath().isEmpty() ? "/" : request.getContextPath());
        response.addCookie(cookie);

        response.sendRedirect(request.getContextPath() + "/");
    }
}
    

ReadCookieServlet.java


package com.example.cookies;
import java.io.*;
import java.net.URLDecoder;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/read")
public class ReadCookieServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String username = null;
        Cookie[] cookies = request.getCookies();

        if (cookies != null) {
            for (Cookie c : cookies) {
                if ("username".equals(c.getName())) {
                    username = URLDecoder.decode(c.getValue(), "UTF-8");
                    break;
                }
            }
        }

        response.setContentType("text/html;charset=UTF-8");

        try (PrintWriter out = response.getWriter()) {
            out.println("&lt;html&gt;&lt;body&gt;");

            if (username != null) {
                out.println("&lt;h3&gt;Found cookie! username = " + username + "&lt;/h3&gt;");
            } else {
                out.println("&lt;h3&gt;No 'username' cookie found&lt;/h3&gt;");
            }

            out.println("&lt;p&gt;&lt;a href=\\"" + request.getContextPath() + "/\\"&gt;Back&lt;/a&gt;&lt;/p&gt;");
            out.println("&lt;/body&gt;&lt;/html&gt;");
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        doGet(req, resp);
    }
}


SetCookieServlet.java


package com.example.cookies;
import java.io.*;
import java.net.URLEncoder;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/set")
public class SetCookieServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String user = request.getParameter("username");

        if (user == null || user.trim().isEmpty()) {
            user = "Guest";
        }

        String value = URLEncoder.encode(user, "UTF-8");
        Cookie cookie = new Cookie("username", value);

        cookie.setMaxAge(60 * 60 * 24);
        cookie.setPath(request.getContextPath().isEmpty() ? "/" : request.getContextPath());
        cookie.setHttpOnly(true);

        response.addCookie(cookie);

        response.setContentType("text/html;charset=UTF-8");

        try (PrintWriter out = response.getWriter()) {
            out.println("&lt;html&gt;&lt;body&gt;");
            out.println("&lt;h3&gt;Cookie created for user: " + user + "&lt;/h3&gt;");
            out.println("&lt;p&gt;&lt;a href=\\"" + request.getContextPath() + "/read\\"&gt;Read cookie&lt;/a&gt;&lt;/p&gt;");
            out.println("&lt;/body&gt;&lt;/html&gt;");
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        doGet(req, resp);
    }
}


index.html


&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="utf-8" /&gt;
&lt;title&gt;CookieDemo&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h2&gt;Cookie demo&lt;/h2&gt;

&lt;form action="set" method="get"&gt;
    Name: &lt;input name="username" /&gt;
    &lt;button type="submit"&gt;Set cookie&lt;/button&gt;
&lt;/form&gt;

&lt;p&gt;&lt;a href="read"&gt;Read cookie&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;&lt;a href="clear"&gt;Clear cookie&lt;/a&gt;&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;


Output:


<img src="images/week7img1.jpg">
<img src="images/week7img2.png">
<img src="images/week7img3.png">`,
    pdf: "pdfs/week7.docx"
},


8: {
    title: "Week 8 Content",
    text: `WEEK - 8

Spring Boot Lab Programs


Lab 1 – Hello World with Spring Boot
AIM: To create a simple “Hello World” web application using Spring Boot.

Steps / CODE:
1. Create a project using Spring Initializr with dependency: Spring Web.
2. Add the following controller:

DemoApplication.java:

package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoApplication {

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello World! Welcome to Spring Boot.";
    }

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}

OUTPUT:

<img src="images/week8img1.jpg">


Lab 2 – Using @RequestParam and @PathVariable
AIM: To pass parameters dynamically through URL and query.

CODE:

@RestController
@RequestMapping("/api")
public class WelcomeController {

    @GetMapping("/welcome")
    public String welcome(@RequestParam String name) {
        return "Welcome " + name + "!";
    }

    @GetMapping("/square/{num}")
    public String square(@PathVariable int num) {
        return "Square of " + num + " = " + (num * num);
    }
}

OUTPUT:

<img src="images/week8img2.png">
<img src="images/week8img3.png">


Lab 3 – Controller, Service, and Autowiring
AIM: To implement service layer using @Service and @Autowired.

CODE:

@Service
public class MathService {
    public int add(int a, int b) {
        return a + b;
    }
}

@RestController
@RequestMapping("/math")
public class MathController {

    @Autowired
    private MathService service;

    @GetMapping("/add")
    public String add(@RequestParam int x, @RequestParam int y) {
        return "Sum = " + service.add(x, y);
    }
}

OUTPUT:

<img src="images/week8img4.png">


Lab 4 – CRUD Operation with Spring Boot and MySQL
AIM: To create REST APIs for Create, Read, Update, Delete (CRUD).

Dependencies:
• Spring Web
• Spring Data JPA
• MySQL Driver


Model:

@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String dept;

    // + getters/setters
}


Repository:

public interface StudentRepository extends JpaRepository<Student, Integer> {}


Controller:

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentRepository repo;

    @PostMapping("/")
    public Student addStudent(@RequestBody Student s) {
        return repo.save(s);
    }

    @GetMapping("/")
    public List<Student> getAll() {
        return repo.findAll();
    }

    @PutMapping("/{id}")
    public Student update(@PathVariable int id, @RequestBody Student s) {
        s.setId(id);
        return repo.save(s);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        repo.deleteById(id);
    }
}


application.properties:

server.port=8085
spring.datasource.url=jdbc:mysql://localhost:3306/school
spring.datasource.username=root
spring.datasource.password=1234

OUTPUT:

<img src="images/week8img5.png">
<img src="images/week8img6.png">
<img src="images/week8img7.png">
<img src="images/week8img8.jpg">


RESULT:
Program executed successfully.`,
    pdf: "pdfs/week8.docx"
},


9: {
    title: "Week 9 Content",
    text: `WEEK - 9

Spring Boot — GET and POST APIs using @RequestParam and @RequestBody


► Create a Spring Boot project with dependency **Spring Web**.  
► Import the project into IDE (STS / IntelliJ / VS Code).  
► Create a Java file named **HelloController.java** inside:
  src/main/java/com/example/demo


HelloController.java
package com.example.demo;
import org.springframework.web.bind.annotation.*;
@RestController
public class HelloController {
    @GetMapping("/hello")
    public String sayHello(@RequestParam String name) {
        return "Hello, " + name + "!";
    }
    @PostMapping("/add")
    public String addNumbers(@RequestBody Numbers num) {
        int sum = num.a + num.b;
        return "Sum of numbers: " + sum;
    }
}

class Numbers {
    public int a;
    public int b;
}


Run the Application:


► Run the Spring Boot project  
► Default port: **8080**

Testing GET API in POSTMAN
GET:
http://localhost:8080/hello?name=Prasanna

OUTPUT:
Hello, Prasanna!

Testing POST API in POSTMAN

POST:
http://localhost:8080/add

Body (raw JSON):
{
    "a": 10,
    "b": 20
}

OUTPUT:
Sum of numbers: 30`,
    pdf: "pdfs/week9.docx"
},


10: {
    title: "Week 10 Content",
    text: `WEEK - 10

AIM:
• Implement basic CRUD (Create, Read, Update, Delete) operations on a MySQL database using JDBC / Spring.
• Explore Spring's stereotype annotations: @Component, @Service, @Repository, @Controller.
• Implement Spring JdbcTemplate to interact with a MySQL relational database.


application.properties:

spring.application.name=spring-crud-jdbc
spring.datasource.url=jdbc:mysql://localhost:3306/studentdb
spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.show-sql=true


JdbcConfig.java:

package com.example.demo.config;

import javax.sql.DataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;

@Configuration
public class JdbcConfig {

    @Bean
    public JdbcTemplate jdbcTemplate(DataSource dataSource) {
        return new JdbcTemplate(dataSource);
    }
}


StudentController.java:

package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.model.Student;
import com.example.demo.service.StudentService;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService service;

    @PostMapping("/add")
    public String add(@RequestBody Student s) {
        service.save(s);
        return "Student added!";
    }

    @GetMapping("/get")
    public List<Student> list() {
        return service.listAll();
    }

    @GetMapping("/{id}")
    public Student get(@PathVariable int id) {
        return service.get(id);
    }

    @PutMapping("/update")
    public String update(@RequestBody Student s) {
        service.update(s);
        return "Student updated!";
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        service.delete(id);
        return "Student deleted!";
    }
}


Student.java:

package com.example.demo.model;

public class Student {

    private int id;
    private String name;
    private String email;

    public Student() {}

    public Student(int id, String name, String email) {
        this.id   = id;
        this.name = name;
        this.email = email;
    }

    // Getters & Setters

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
}


StudentRepository.java:

package com.example.demo.repository;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Student;

@Repository
public class StudentRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public int save(Student s) {
        return jdbcTemplate.update(
            "INSERT INTO student(name, email) VALUES (?, ?)",
            s.getName(), s.getEmail()
        );
    }

    public List<Student> listAll() {
        return jdbcTemplate.query(
            "SELECT * FROM student",
            new BeanPropertyRowMapper<>(Student.class)
        );
    }

    public Student getById(int id) {
        return jdbcTemplate.queryForObject(
            "SELECT * FROM student WHERE id = ?",
            new BeanPropertyRowMapper<>(Student.class),
            id
        );
    }

    public int update(Student s) {
        return jdbcTemplate.update(
            "UPDATE student SET name = ?, email = ? WHERE id = ?",
            s.getName(), s.getEmail(), s.getId()
        );
    }

    public int delete(int id) {
        return jdbcTemplate.update(
            "DELETE FROM student WHERE id = ?",
            id
        );
    }
}


StudentService.java:

package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    public int save(Student s) {
        return repo.save(s);
    }

    public List<Student> listAll() {
        return repo.listAll();
    }

    public Student get(int id) {
        return repo.getById(id);
    }

    public int update(Student s) {
        return repo.update(s);
    }

    public int delete(int id) {
        return repo.delete(id);
    }
}


OUTPUT:

<img src="images/week10img1.png">
<img src="images/week10img2.png">
<img src="images/week10img3.png">
<img src="images/week10img4.png">
<img src="images/week10img5.png">
<img src="images/week10img6.png">


RESULTS:
• CRUD operations are successfully done.
• Spring's stereotype annotations @Component, @Service, @Repository, and @Controller are used.
• MySQL database is used.`,
    pdf: "pdfs/week10.docx"
},


11: {
    title: "Week 11 Content",
},

12: {
    title: "Week 12 Content",
},

};
const buttons = document.querySelectorAll(".week-tab");
const titleEl = document.getElementById("week-title");
const contentEl = document.getElementById("week-content");
const downloadBtn = document.getElementById("download-btn");

function loadWeek(weekNumber) {
    const data = weekData[weekNumber];
    if (!data) return;

    titleEl.textContent = data.title;
    contentEl.innerHTML = data.text; // IMPORTANT
    downloadBtn.href = data.pdf;
    downloadBtn.textContent = `Download Week ${weekNumber} DOCUMENT`;
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const weekNumber = btn.getAttribute("data-week");
        loadWeek(weekNumber);
    });
});

loadWeek(1);
