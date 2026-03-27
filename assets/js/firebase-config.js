// ============================================================
// FIREBASE CONFIGURATION
// ============================================================

var firebaseConfig = {
  apiKey: "AIzaSyCLj86zY98VNvdog9p7GpV6jdpcd5_2dK4",
  authDomain: "astro-a25d7.firebaseapp.com",
  databaseURL: "https://astro-a25d7-default-rtdb.firebaseio.com",
  projectId: "astro-a25d7",
  storageBucket: "astro-a25d7.firebasestorage.app",
  messagingSenderId: "600139992772",
  appId: "1:600139992772:web:c1bb85e9db028751bf4391",
  measurementId: "G-XL7SS3VCMC"
};

// ============================================================
// Firebase Initialize karein (Firebase v8 Compat SDK)
// ============================================================
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Firestore Database aur Analytics
const db = firebase.firestore();
// const analytics = firebase.analytics(); // Disabled temporarily to prevent local file:// errors

console.log("✅ Firebase Connected Successfully!");

// ============================================================
// HELPER FUNCTIONS
// ============================================================

// Blogs fetch karne ka function
async function fetchBlogs() {
  try {
    const querySnapshot = await db.collection("blogs").orderBy("createdAt", "desc").get();
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);
    return [];
  }
}

// Contact form submit karne ka function
async function submitContactForm(name, email, message) {
  try {
    // Timeout logic: agar 5 second mein Firestore na chal paaye toh error de de.
    const addPromise = db.collection("contact_submissions").add({
      name: name,
      email: email,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Network ya Firebase connection timeout ho gaya. Data send nahi ho raha.")), 5000);
    });

    await Promise.race([addPromise, timeoutPromise]);
    console.log("✅ Contact form submitted!");
    return true;
  } catch (error) {
    console.error("❌ Error submitting form:", error);
    alert("Exact Error: " + error.message); // <-- Added for debugging
    return false;
  }
}

// Horoscope data fetch karne ka function
async function fetchHoroscope(sign) {
  try {
    const doc = await db.collection("horoscopes").doc(sign.toLowerCase()).get();
    if (doc.exists) {
      return doc.data();
    } else {
      console.warn("No horoscope found for:", sign);
      return null;
    }
  } catch (error) {
    console.error("❌ Error fetching horoscope:", error);
    return null;
  }
}

// 📚 Global helper to fetch blogs for the website
window.fetchBlogs = async function() {
  try {
    const snapshot = await db.collection("blogs").orderBy("createdAt", "desc").get();
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);
    return [];
  }
}
