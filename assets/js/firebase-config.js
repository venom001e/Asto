// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

console.log("Firebase Client Initialized Successfully!");

// Example function to fetch blogs
async function fetchBlogs() {
  try {
    const querySnapshot = await db.collection("blogs").get();
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return null;
  }
}

// Example function: Add Contact Form Submission
async function submitContactForm(name, email, message) {
  try {
    await db.collection("contact_submissions").add({
      name: name,
      email: email,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error("Error submitting form:", error);
    return false;
  }
}
