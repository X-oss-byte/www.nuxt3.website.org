import authors from '~~/data/authors';

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', async (file) => {
    if (file._id.endsWith('.md') && file._path.startsWith('/blog/posts')) {
      const author = authors[file.authorId];

      file.author = author;
    }
  });
});
