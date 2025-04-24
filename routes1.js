const express = require("express");
const swaggerJSDoc = require('swagger-jsdoc');
const app = express()
const port = 3000

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: '회원가입',
      version: '1.0.0',
      description: '회원가입 페이지입니다.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./router/*.js'], // 주석으로부터 API 문서 생성
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;