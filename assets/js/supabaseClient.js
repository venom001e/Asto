// supabaseClient.js
// Initialize Supabase Client

// TODO: Replace these with your own Supabase project details from https://supabase.com/dashboard/
const SUPABASE_URL = 'https://kvijmouqonzkzddhebva.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_1duh6TI6alJa2Mq_FpLKgw_J6jwEX-Z';

// Create a single supabase client for interacting with your database
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log("Supabase Client Initialized Successfully!");

// Example function to fetch blogs
async function fetchBlogs() {
    const { data, error } = await supabase
        .from('blogs') // Assuming you create a table named 'blogs'
        .select('*');

    if (error) {
        console.error("Error fetching blogs:", error);
        return null;
    }
    return data;
}

// Example function: Add Contact Form Submission
async function submitContactForm(name, email, message) {
    const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
            { name: name, email: email, message: message }
        ]);

    if (error) {
        console.error("Error submitting form:", error);
        return false;
    }
    return true;
}
