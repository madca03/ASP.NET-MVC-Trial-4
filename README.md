# ASP.NET-MVC-Trial-4

RESTful CRUD using ASP.NET MVC and VueJS as Frontend

## No 'Access-Control-Allow-Origin' header is present on the requested resource

- Had this issue when fetching data from the API routes of ASP.NET MVC. I tried to resolve it by adding this XML code in web.config which adds some HTTP headers in the REST API server's response. For more information, see this [link](https://stackoverflow.com/questions/27504256/mvc-web-api-no-access-control-allow-origin-header-is-present-on-the-requested)

```XML
<system.webServer>
  <httpProtocol>
    <customHeaders>
      <add name="Access-Control-Allow-Origin" value="*" />
      <add name="Access-Control-Allow-Headers" value="Content-Type" />
      <add name="Access-Control-Allow-Methods" value="GET, POST, PUT, DELETE, OPTIONS" />
    </customHeaders>
  </httpProtocol>
</system.webServer>
```

## Notes for testing

- The ASP.NET MVC RESTful service is deployed on a local IIS at port 8080
- The VueJS runs at port 3000 and fetches data from localhost:8080

## Todo

- Refactor MVC App as per the suggestions of sir marc
- The current VueJS file structure seems disorganized. There are also lots of repeating HTML which can be made into finer components
- Use **pug** as the view engine for the HTML templates in VueJS to declutter the template code.
- Enhance **Show** page of the student resource
- Learn more about devServer proxy, vue-cli

## Current Progress

- Index page
  ![index_page](./images/index_page.png "index page")
- Edit page
  ![edit_page](./images/edit_page.png "edit page")
- Show page
  ![show_page](./images/show_page.png "show page")
