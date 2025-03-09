import http.server
import socketserver
import mimetypes

PORT = 3002

# Ensure `.js` files are served with `text/javascript`
mimetypes.add_type("text/javascript", ".js")

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    httpd.serve_forever()
