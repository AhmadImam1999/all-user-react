1 - Folder structure 
    - node_modules 
    - public
        * index.html
    - src
        / assets -> image / fonts / etc..
        / components  -> react reusble component

            / card -> take user data thorw props and render ant desgin component 
            / loading -> spainner component to deteremine loading
            / map -> google map jsx to display maps
            / navbar -> top nav empty just for style
            / table
              * columns ->  table columns with render functions and logic manuipulate filter sort etc..
              * table -> take data and loading as props and display data in table otherwise loading or error
            
        / pages -> page to render
           - AllUser -> select all user from redux store then pass it to table component to render it
           - UserDetail -> select spcific user from url params using router-dom then get it with his id from redux store then pass it thorw props to card 
        / redux -> state management
            / user -> user slice logic to fetch data using axios and manuipulate data with reducer and extrareducer sort data in redux using adapter
            - root_reducer -> combine slice to pass it to store using react-redux
            - store -> take rootReducer and devtools option then pass it to provider
        * App.js -> main folder
            contain dispatch action on top level to make sure data avalbile throw all pages
            switch between page and render page based on path url

        * index.js 
            app.js with provider wrapper to pass redux state throw all component 
            browserrouter to route between components
    package.json
        package and script container 
    




