# LTRR Collection web site

Automatic maintenance of a static web site in an AWS S3 bucket,
visible at <https://collection.ltrr.arizona.edu/> through CloudFront.

## Local runtime

This project now requires Node `22.12.0` or newer because it uses `astro@6`.

If your shell is still on an older system Node, use a Node 22 toolchain before
running project commands. In this workspace, the verified build command was:

```bash
PATH=/tmp/node22/node-v22.12.0-linux-x64/bin:$PATH npm run build
```
