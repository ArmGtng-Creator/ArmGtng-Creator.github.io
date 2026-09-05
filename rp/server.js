cat << 'EOF' > server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'RP.html');

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('File RP.html nggak ketemu! Pastiin nama filenya bener.');
      return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
EOF
