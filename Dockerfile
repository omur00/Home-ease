FROM nginx:alpine

# 2. Copy your files (index.html, styles.css, images, etc.)
# into the folder Nginx uses to serve content
COPY . /usr/share/nginx/html

# 3. Nginx uses port 80 by default
EXPOSE 80