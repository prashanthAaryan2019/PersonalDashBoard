Project Name : Personal Dahshboard.
I used Create React App to creeate this Project
Once the React application is cloned, navigate to  this React application directory in your terminal and run npm install and then run npm start.
This Application Utilizes client-side routing  and Redux for state management . The root component is used to display three navigation links(NavLink)called View Profile, To-Do-List and Weather . Onload UserProfile Component is loaded. and these three links are used to navigate to their respective components i.e.               view Profile - UserProfileComponent, To_Do_List - ToDoListComponent, weater -WeatherComponent. Every Component page has a Go To Home button to go back to root page except rootpage as onload  we see the UserProfileComponent and we use NavLinks to navigate to respective pages.
I stored the profile pic in assets folder under src folder as it is non executable code 
Created components folder to store all components
created styles folder to store  styles of respective components
Creates store folder to store redux files ( Actions, reducer and store)
Created a seperate file called userData.js and had my userInfo  which helps us to manage and maintain user-related functionalities and also it enhances security  and makes it easy to integrate and also it improves readability and maintainability.
GoHomeButton component is created as it is commonly used in weather component and ToDoListComponent.

#   P e r s o n a l D a s h B o a r d  
 