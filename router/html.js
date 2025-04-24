const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: 회원가입
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [userid, password, email, name, phone]
 *             properties:
 *               userid:
 *                 type: string
 *                 description: 아이디
 *               password:
 *                 type: string
 *                 description: 비밀번호
 *               email:
 *                 type: string
 *                 description: 이메일
 *               name:
 *                 type: string
 *                 description: 이름
 *               phone:
 *                 type: string
 *                 description: 전화번호
 *     responses:
 *       201:
 *         description: 회원가입 성공
 *
 * /login:
 *   post:
 *     summary: 로그인
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [userid, password]
 *             properties:
 *               userid:
 *                 type: string
 *                 description: 아이디
 *               password:
 *                 type: string
 *                 description: 비밀번호
 *     responses:
 *       200:
 *         description: 로그인 성공
 *
 * /user:
 *   put:
 *     summary: 회원 정보 수정
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [userid, email, name, phone]
 *             properties:
 *               userid:
 *                 type: string
 *                 description: 아이디
 *               email:
 *                 type: string
 *                 description: 이메일
 *               name:
 *                 type: string
 *                 description: 새 이름
 *               phone:
 *                 type: string
 *                 description: 새 전화번호
 *     responses:
 *       200:
 *         description: 회원 정보 수정 성공
 *
 *   delete:
 *     summary: 회원 탈퇴
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [userid]
 *             properties:
 *               userid:
 *                 type: string
 *                 description: 아이디
 *     responses:
 *       200:
 *         description: 회원 탈퇴 성공
 */



router.post("/signup", (req, res) => {
    const { userid, email, name, phone } = req.body;
    res
      .status(200)
      .send(`POST: /signup 회원정보: ${userid} ${email} ${name} ${phone}`);
  });
  router.post("/login", (req, res) => {
    const { userid, password } = req.body;
    res.status(201).send(`POST: /login 로그인: ${userid} ${password}`);
  });
  router.put("/user/:userid", (req, res) => {
    const { email, name, phone } = req.body;
    const { userid } = req.params;
    res.status(200).send(`${userid} 정보 수정: ${email} ${name} ${phone}`);
  });
  router.delete("/user/:userid", (req, res) => {
    const { userid } = req.params;
    res.status(200).send(`${userid} 회원 탈퇴 완료`);
  });
  module.exports = router;