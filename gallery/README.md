# Instructions

User Stories
🐿️ As a developer, I want the application to use the useState hook so that user interactions (like selecting an image) are smooth and the gallery’s state is managed effectively.
🐿️ As a developer, I want to use the useEffect hook to perform side effects, such as fetching image data from an external API.
🐿️ As a developer, I want to create separate files that return JSX instead of including all JSX within App.jsx so that the code is well-organized, making the app more maintainable and reliable for the user.
🐿️ As a user, I want to see a collection of image thumbnails displayed clearly on the page.
🐿️ As a user, I want to be able to click on an image thumbnail to view a larger version of that image, possibly in a modal or a dedicated view.
🐿️ As a user who relies on assistive technologies, I want images to have descriptive alt text so I can understand their content.
🐿️ As a user who navigates with a keyboard, I want to be able to tab through the interactive elements (like thumbnails and buttons) in a logical order.

# Requirements

🎯 Implement the useState hook to manage gallery state (e.g. selected image).
🎯 Use useEffect for initial fetching of images from an external API.
🎯 Return JSX from multiple components (e.g., an ImageItem component for each image and a Gallery component to display them).
🎯 Use the .map() function to render an array of images dynamically
🎯 Implement functionality to display a larger version of an image when its thumbnail is clicked.
🎯 Ensure all images have meaningful alt text.
🎯 Ensure basic keyboard navigation for image selection (e.g., thumbnails should be focusable and activatable with Enter/Space).

# Stretch Goals

## Stretch User Stories

🐿️ As a user, I want to be able to change the images in the gallery using a search bar.
🐿️ As a developer, I want to be able to fetch images from an API with a larger amount of data, such as Unsplash.
🐿️ As a developer I don’t want anyone to know my API keys from code.
🐿️ As a user I want the app to look pleasing.

## Stretch Requirements

🏹 Use useEffect and the dependancy array to update the images when the user types in an input field.
🏹 Set up an Unsplash application that you can fetch from your React app.
🏹 Use .env to hide your API keys and tokens from the code.
🏹 Style the application excellently, using grid or flex and positioning.

# Reflection
