// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware để xử lý JSON
app.use(express.json());

// Route GET đơn giản
app.get('/', (req, res) => {
  res.send('WebService đang hoạt động!');
});

// Route GET trả JSON
app.get('/api/user', (req, res) => {
  res.json({ id: 1, name: 'Nguyen Van A' });
});

// Route POST nhận dữ liệu từ client
app.post('/api/user', (req, res) => {
  const data = req.body;
  res.json({ message: 'Đã nhận dữ liệu', received: data });
});

// Khởi động server
app.listen(port, () => {
  console.log(`✅ WebService chạy tại http://localhost:${port}`);
});
