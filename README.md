# Happy Birthday Interactive Website

This is a highly interactive, responsive single-page application built using pure HTML, CSS, and plain JavaScript. It is designed to be a special birthday gift for your friend!

## How to Customize It

This website is meant to be completely personalized by you. Here is exactly how and where to make your changes:

### 1. The Main Message (Landing Page)
1. Open `index.html`.
2. Look around **line 15**, right under `<!-- EDIT YOUR MAIN MESSAGE HERE -->`.
3. Change the text inside the `<p class="main-message">` tag to say whatever you like.

### 2. The YouTube Video (Gift Page)
1. Find the YouTube video you want to show (e.g., a birthday song or a special message).
2. Get the "Embed URL" for the video. (It usually looks like `https://www.youtube.com/embed/VIDEO_ID`).
3. Open `index.html`.
4. Look around **line 35**, right under `<!-- EDIT YOUTUBE VIDEO ID HERE -->`.
5. Change the `src=""` attribute in the `<iframe>` tag to your YouTube embed URL. For example: `src="https://www.youtube.com/embed/dQw4w9WgXcQ"`.

### 3. The Images (Memories Page)
1. Find 10 photos you want to use.
2. Rename them to `pic1.jpg`, `pic2.jpg`, up to `pic10.jpg`.
3. Place these 10 renamed photos in this exact folder, replacing the grey placeholder images already here.

### 4. The Memory Captions
1. Open `index.html`.
2. Scroll down to the `<!-- SECTION 3: MEMORIES PAGE -->` (around **line 43**).
3. Under each image, you will see `<!-- EDIT TEXT FOR PIC X HERE -->`.
4. Change the text inside the `<p class="memory-caption hidden-data">` tag for each of the 10 images. This text will appear below the image when your friend clicks on it to view it full-size.

## How to View and Host It

* **To View Locally:** Just double-click the `index.html` file in your file explorer. It will open in your default web browser!
* **To Host Online for Free:** You can upload this entire folder to **GitHub Pages** or **Netlify**. Since it is pure HTML/CSS/JS with no build steps, it will work immediately out of the box!
