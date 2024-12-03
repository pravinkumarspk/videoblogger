const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



const uri = 'mongodb+srv://pravin:spking2005@cluster0.c3yai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';



// this one is connecting to the mongodb
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection failed:', err);
    throw err;
  });


// this is the schema 
const blogSchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
  description: String,
  department: String, 
  blogType: String
});
const Blog = mongoose.model('blogs', blogSchema); 

const staffSchema = new mongoose.Schema({
  email: String,
  password: String
});
const Staff = mongoose.model('staff_details', staffSchema);

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Staff.findOne({ email, password }); 

    if (user) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'Invalid login credentials.' });
    }
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ success: false, message: 'Login failed. Please try again.' });
  }
});



//here post are fetched and given to the viewing page
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Blog.find({});
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Failed to fetch posts' });
  }
});

//here post will be created and stored in the database
app.post('/create-blog', async (req, res) => {
  const { title, videoUrl, description, blogType, department } = req.body;

  const newBlog = new Blog({
    title,
    videoUrl,
    description,
    department, 
    blogType
  });

  try {
    await newBlog.save(); 
    res.json({ success: true, message: 'Blog post created successfully' });
  } catch (error) {
    console.error('Error saving blog post:', error);
    res.status(500).json({ success: false, message: 'Failed to create blog post' });
  }
});

app.use(express.static(path.join(__dirname, 'build')));



//he is the main one
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
