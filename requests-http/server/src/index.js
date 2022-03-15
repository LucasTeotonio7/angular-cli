const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const multipart = require('connect-multiparty');

const app = express();

// TODO: BODY-PARSE
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))

// TODO: CORS
// const corsOptions = {
//   origin: '*',
//   optionSuccessStatus: 200,

// };

// app.use(cors(corsOptions));

// TODO: MULTIPART
const multipartMiddleware = multipart({ uploadDir: './uploads' });
app.post('/upload', multipartMiddleware, (req, res) => {
  const files = req.files;
  console.log(files);
  res.json({ message: files });
});

app.get('/downloadExcel', (req, res) =>{
  res.download('./uploads/report.xlsx');
});

app.get('/downloadPDF', (req, res) =>{
  res.download('./uploads/report.pdf');
});

app.use((err, res, req, next) => res.json({ error: err.message }))

app.listen(8000, () => {
  console.log('Servidor porta 8000');
});
