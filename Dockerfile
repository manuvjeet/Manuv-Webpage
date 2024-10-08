# Use an official Nginx image to serve the static files
FROM nginx:alpine

# Copy the current directory's content (your webpage files) to the Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80 (the default port for Nginx)
EXPOSE 80
