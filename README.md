Habit Tracker

A simple and visually appealing Habit Tracker application built with React, allowing you to monitor and log your habits throughout the year using a heatmap view and detailed monthly logs.

Table of Contents

	•	Features
	•	Screenshots
	•	Demo
	•	Installation
	•	Usage
	•	Technologies Used
	•	Project Structure
	•	Contributing
	•	License
	•	Contact

Features

	•	Yearly Heatmap View: Visual representation of habit completion over the year with an interactive heatmap.
	•	Monthly View: Detailed logging of habits for each day of the selected month.
	•	Customizable Habits: Predefined habits like Reading, Exercise, and Study (easily customizable).
	•	Data Persistence: Habit data is stored in localStorage, ensuring your data is retained across sessions.
	•	Responsive Design: Application is responsive and works well on various screen sizes.
	•	Interactive UI: Hover effects, tooltips, and smooth transitions enhance user experience.
	•	Notes Section: Write daily notes or journal entries for each day.

Screenshots

Year View

 

Month View

 

Demo

You can view a live demo of the application here:

Live Demo Link 

Installation

	1.	Clone the repository:

git clone https://github.com/yourusername/habit-tracker.git
cd habit-tracker


	2.	Install dependencies:

npm install



Usage

	1.	Start the development server:

npm start


	2.	Open the app in your browser:
Navigate to http://localhost:3000/ in your web browser.
	3.	Interact with the App:
	•	Year View: View your habit completion over the year. Click on any month to navigate to the monthly view.
	•	Month View: Log your habits for each day. Check the habits you completed and write notes.

Technologies Used

	•	React: Front-end JavaScript library for building user interfaces.
	•	Date-fns: Modern JavaScript date utility library for date manipulation.
	•	CSS: Styling the application components for a clean and responsive design.

Project Structure

habit-tracker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── App.css
│   │   ├── MonthView.css
│   │   ├── MonthView.js
│   │   ├── YearView.css
│   │   └── YearView.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
└── README.md

Contributing

Contributions are welcome! If you’d like to contribute, please follow these steps:

	1.	Fork the repository
	2.	Create a new branch

git checkout -b feature/YourFeature


	3.	Commit your changes

git commit -m "Add YourFeature"


	4.	Push to the branch

git push origin feature/YourFeature


	5.	Open a pull request

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

If you have any questions, suggestions, or feedback, feel free to reach out:

	•	Email: your-email@example.com
	•	GitHub: yourusername

Acknowledgements

	•	Date-fns: For providing an excellent library for date manipulation.
	•	Google Fonts: For the ‘Open Sans’ font used in the application.

Customization

Adding or Modifying Habits

To customize the habits being tracked:

	1.	Open src/components/MonthView.js.
	2.	Modify the habitsList array:

const habitsList = ['Reading', 'Exercise', 'Study', 'Meditation', 'Sleep'];


	3.	Save the file. The new habits will now appear in the Month View.

Changing Color Schemes

You can adjust the color scheme by modifying the CSS files located in src/components/.

For example, to change the colors of the day cells:

	•	Open YearView.css.
	•	Modify the getColorForDay function in YearView.js to return your desired colors.

Troubleshooting

	•	Heatmap Misalignment: If the heatmap appears misaligned, ensure that your browser zoom level is set to 100% and that you’re using a modern browser.
	•	Data Not Saving: If your habit data isn’t saving between sessions, check that your browser allows localStorage.

Future Enhancements

	•	User Authentication: Implement user accounts to allow syncing data across devices.
	•	Custom Habit Creation: Allow users to add and manage their own habits dynamically.
	•	Statistics Dashboard: Provide visual charts and statistics for habit tracking over time.
	•	Export/Import Data: Enable users to export their data to CSV or import existing data.

Thank you for using the Habit Tracker! We hope it helps you stay on track with your goals.

Feel free to contribute or reach out with any ideas or improvements.

Happy Habit Tracking! 🎯
