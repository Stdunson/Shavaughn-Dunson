# Adding a blog post

1. Create a standalone HTML post in this folder, for example `my-post.html`.
2. Add an entry to `posts.json` with its publication date, title, description, and URL:

   ```json
   {
     "date": "YYYY-MM-DD",
     "title": "Post title",
     "description": "A short description of the post.",
     "url": "blog/posts/my-post.html"
   }
   ```

The blog page sorts entries newest-first by `date`. Keep dates in `YYYY-MM-DD` format.
