# Warehouse Management System

## Overview

This project is a Warehouse Management System built using React and Redux Toolkit. It allows users to view a list of warehouses, filter them based on various attributes, and view or edit the details of a specific warehouse. 

## Features

- **Warehouse List**: Displays a list of warehouses with search functionality.
- **Filtering**: Users can filter warehouses by name, city, cluster, or available space.
- **Warehouse Details**: Users can view detailed information about a specific warehouse and edit its attributes.
- **Real-Time Updates**: Changes made to warehouse details are updated in the list immediately.

## Screenshots

### Warehouse List
![Warehouse List](./images/warehouse-list.png)

### Warehouse Detail
![Warehouse Detail](./images/warehouse-detail.png)

## Functionalities

1. **Search and Filter**:
   - Users can input search terms to filter warehouses based on name, city, cluster, or available space.

2. **Edit Warehouse Details**:
   - Users can click on an edit button next to each attribute to modify warehouse details.
   - Changes are saved and reflected in the warehouse list.

3. **Responsive Design**:
   - The application is designed to be responsive and user-friendly.

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **Redux Toolkit**: State management library for managing the warehouse data.
- **React Router**: For routing between different components.
- **CSS**: Basic styling for layout and design.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/warehouse-management-system.git

   cd warehouse-management-system

   npm install

   npm run dev


## Learning Outcomes

- **State Management**: Gained a deeper understanding of Redux Toolkit, including creating slices, reducers, and managing state in a React application.
- **Dynamic Forms**: Improved skills in building dynamic forms and handling user input effectively, including managing controlled components.
- **Search and Filter Logic**: Learned how to implement efficient search and filtering functionality using array methods.
- **Responsive Design**: Enhanced knowledge of creating user-friendly interfaces that adapt to different screen sizes.

## Future Improvements

- **User Authentication**: Integrate user authentication to provide different access levels for warehouse management.
- **Data Persistence**: Set up a backend service (e.g., using Node.js) to persist warehouse data and manage it through an API.
- **Advanced Filtering**: Enhance filtering options to include range queries for available space and more detailed search criteria.
- **Unit Testing**: Implement unit tests for components and Redux slices to ensure code reliability and maintainability.
- **Styling Improvements**: Revamp the UI with modern design practices and potentially a UI library like Material-UI or Bootstrap.

## License

This project is licensed under the MIT License.