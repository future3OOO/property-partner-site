# Deployment Documentation

This guide details the tech stack and deployment requirements for the Property Partner website. It is intended to assist in deploying the application to a Hetzner VPS or Dedicated Server.

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Runtime**: Node.js (Development & Build only)
- **Output**: Static HTML/CSS/JS (Single Page Application)

## Build Instructions

To generate the production build:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Build Project**:
    ```bash
    npm run build
    ```

3.  **Output**:
    The build artifacts will be generated in the `/dist` directory.

## Server Requirements (Hetzner)

You can serve this application using any static file server (Nginx, Apache, Caddy).

### Nginx Configuration Example

Since this is a Single Page Application (SPA) using client-side routing, you must configure the server to redirect all 404 requests to `index.html`.

```nginx
server {
    listen 80;
    server_name example.com;

    root /var/www/property-partner-site/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Optional: Cache control for static assets
    location /assets {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }
}
```

## Deployment Steps

1.  Provision a Hetzner server (Ubuntu/Debian recommended).
2.  Install Node.js 18+ and Nginx.
3.  Clone the repository to the server.
4.  Run `npm install` and `npm run build`.
5.  Configure Nginx to point to the `dist` folder (see example above).
6.  Set up SSL (Certbot/Let's Encrypt).
