# ⚕️ Medicine Detection System ⚕️

The **Medicine Detection System** is a web application designed to help users search for detailed information about medicines. Users can input the name of a medicine into the search bar, and the system will provide information such as its purpose, usage, and possible side effects.

## 🌐 Project Structure

```
medication-detection
├── backend
│   ├── server.js         # Node.js server handling API requests
│   └── .env              # Environment variables for backend
├── frontend
│   ├── public/           # Static assets
│   ├── src/              # React components and pages
│   └── package.json      # Frontend dependencies
├── dataset
│   └── medicine_dataset.csv # Dataset containing medicine information
├── package.json          # Root dependencies
└── README.md             # Project documentation
```

## 🌐 Features

- ✔️ **Medicine Search Bar**: Allows users to search for medicines by name.
- ✔️ **Medicine Details**: Displays information about the selected medicine, including:
  - Purpose
  - Usage
  - Side effects
- ✔️ **Responsive Design**: Optimized for desktop and mobile devices.

## ⚡️ Technologies Used

### Frontend:
- 🔲 React.js
- 🔲 HTML, CSS, JavaScript

### Backend:
- 🔲 Node.js
- 🔲 Express.js

### Database:
- 🔲 Medicine dataset (CSV format)

### Hosting:
- GitHub repository: [Medicine Detection System](https://github.com/Avinashvstudio/Medicine-Detection-System)

## 🔄 Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Avinashvstudio/Medicine-Detection-System.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd medication-detection
   ```

3. **Backend Setup**:
   - Navigate to the backend folder:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the server:
     ```bash
     nodemon server.js
     ```

4. **Frontend Setup**:
   - Navigate to the frontend folder:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend:
     ```bash
     npm start
     ```

5. **Access the Application**:
   - Open your browser and navigate to `http://localhost:3000`.

## 📊 Dataset
The dataset is stored in a CSV file named `medicine_dataset.csv` in the `dataset` folder. It contains structured data about medicines, including their uses, side effects, and descriptions.

## ✨ Future Enhancements
- 🔄 **Integration with External APIs**: To fetch real-time medicine information.
- 🔄 **User Authentication**: Allow users to save their favorite medicines.
- 🔄 **Medicine Image Detection**: Add a feature to detect medicines via images using AI/ML.

## 🚀 Contribution
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## 🙏 Acknowledgements
- Thanks to the open-source community for libraries like React and Express.
- Inspired by real-world medical search engines.

---

Made with ❤️ by Avinash V.

