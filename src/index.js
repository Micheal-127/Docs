const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Отдаём статику из папки src (где лежит promoWidget.js)
app.use(express.static(path.join(__dirname, 'src')));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
