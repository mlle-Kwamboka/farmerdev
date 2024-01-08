# Orchard
> Orchard is a platform that uses the power of Web5 to ensure a secure sharing of  records between Farm Specialists and Farmers, hence the name Orchard, signifying Farm Specialist-to-Farmer interaction

## 🪧 Problem statement
In the agricultural domain, effective communication and seamless sharing of information between Farm Specialists and Farmers are essential for maximizing crop yield and promoting sustainable farming practices. However, the current systems lack the integration and security required for efficient collaboration. To address this gap, Orchard, a groundbreaking platform, leverages the capabilities of Web5 to establish a secure and dynamic channel for sharing records between Farm Specialists and Farmers.

The challenge lies in developing a robust platform that not only facilitates real-time communication but also ensures the confidentiality and integrity of the shared data. Orchard aims to revolutionize the Farm Specialist-to-Farmer interaction by harnessing the potential of Web5 technologies, enabling a transformative shift towards a more connected and informed agricultural community.

## ⚙ Key features
The application offers the following key features:
- **Profile Creation:** 
  Both Farmers and Farm Specialists can easily create and manage their profiles based on their user type.

- **Farmer Dashboard:** 
  Farm Specialists have access to a dedicated dashboard where they can view incoming requests from onboarded Farmers.

- **Appointment Management:** 
  Farm Specialists can efficiently manage appointments, including viewing recently booked appointments.

- **Record Management:** 
  Farm Specialists can write and manage records securely within the platform.

- **Farmers Appointment Booking:** 
  Farmers can conveniently book appointments with their preferred Farm Specialists through the platform.

- **Record Access:** 
  Farmers can easily access and view their records, ensuring transparency and convenience.

## 🚦 Getting Started
To get a local copy up and running, follow these steps.
### Prerequisites
To run this project you need:

- Node.js and npm:
Ensure that Node.js, a JavaScript runtime, is installed on your machine.
npm (Node Package Manager) is typically included with Node.js.

- Text Editor:
Choose a preferred text editor for code editing. Popular choices include Visual Studio Code, Sublime Text, or Atom.

- Web Browser:
Have a modern web browser installed (e.g., Google Chrome, Mozilla Firefox, or Microsoft Edge) to launch and interact with the application.

## 🗝️ Set up

Step 1: Clone this repository to your desired path:
```
git clone https://github.com/vigehi/farmerdev.git
```

Step 2: Change the directory (dir) to farmerdev path
```
cd farmerdev
```

Step 3: Install all the required dependencies (using npm in our case)
```
npm install
```

Step 4: Run the project locally by starting the server
```
npm run dev
``` 

## 🎲 Configuration

To ensure optimal functionality of the application, create a `.env` file in the root of your repository and add the following variables:

```
VITE_PUBLIC_DID=did:ion:EiCXbwh...JnIn19
VITE_PROTOCOL_URL=http://localhost:5000/
```

**Note:** 
To generate a token for `VITE_PUBLIC_DID`, navigate to `Web5Context.jsx` file and add the `console.log(did)` statement at the end of the `useEffect` where the `did` is set.
Generate the token from the browser console, and paste the token into your variable.

## 🌎 Deployment

To run the application in a production environment, you can access the live version using the following URL:
- [Orchard farm]()


## 👥 Contributors

- **👤 Edith oga**
- **👤 Ruth Kwamboka**

## 🪪 License
This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.
