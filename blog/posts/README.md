# Adding a blog post

1. Create a folder for the post, for example `my-post/`, with an `index.html` file inside it.
2. Add an entry to `posts.json` with its publication date, title, description, and URL:

   ```json
   {
     "date": "YYYY-MM-DD",
     "title": "Post title",
     "description": "A short description of the post.",
     "url": "posts/my-post/"
   }
   ```

The blog page sorts entries newest-first by `date`. Keep dates in `YYYY-MM-DD` format.
