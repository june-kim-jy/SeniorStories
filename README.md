# SeniorStories

SeniorStories is a senior-friendly web app demo that guides users from a video idea to a TikTok-ready draft.

## What it includes

- Landing page with product framing and clear next steps
- Topic recommendation screen with guided prompts
- Video upload screen with local browser preview
- AI editing simulation with generated title, hook, captions, and hashtags
- Final review and TikTok publish simulation

## Run locally

Because this is a dependency-free front-end demo, you can open [index.html](/Users/junekim/Documents/SeniorStories/index.html) directly in a browser.

If you prefer a local server:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow at [.github/workflows/deploy-pages.yml](/Users/junekim/Documents/SeniorStories/.github/workflows/deploy-pages.yml) that publishes the site to GitHub Pages whenever `main` is pushed.

After the repository is pushed to GitHub:

1. Open the repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Build and deployment`, choose `GitHub Actions` as the source.
4. Push to `main` again if GitHub has not already started the workflow.

The live site URL will be shown in the Pages settings and in the workflow run once deployment finishes.
