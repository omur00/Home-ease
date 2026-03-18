FROM nginx:alpine

# Use a clean slate
RUN rm -rf /usr/share/nginx/html/*

# Copy everything from current directory into the Nginx folder
COPY . /usr/share/nginx/html

EXPOSE 80