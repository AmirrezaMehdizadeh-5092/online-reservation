// import packeges
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
//const { body, validationResult } = require('express-validator');
const { validate } = require('deep-email-validator');

// importnat variable and configuration
const app = express();
const port = 4100;
const secretKey = 'amirreza'
app.use(cors());
app.use(express.json())
app.use(bodyparser.urlencoded([extended = true]));

// database configuration
mongoose.connect('mongodb://127.0.0.1:27017/OnlineReservation').then(() => console.log('Database connected ...'));

// import models 
const User = require('./model/user');
const Doctor = require('./model/doctor');
const Reserve = require('./model/reserve');

// routes
app.get("/get_doctor", async (req, res) => {
	findDoctor = await Doctor.findOne({ code_nezam_pezeshki: 45123 })
	res.send(findDoctor)
})

app.post('/login_reg', async (req, res) => {
	let email = req.body.email
	let ress = await validate(email)
	if (ress['validators']['typo']['valid'] == false) {
		return res.status(400).send("not valid")
	}
	else {
		let findEmail = await User.findOne({ email: email })
		console.log(findEmail)
		if (findEmail) {
			let token = jwt.sign({ email: findEmail.email }, secretKey);
			let data = {
				token: token,
				status: "Login",
				emailValid  : 'ok'
			}
			res.status(200).send(data);
		}
		else {
			let NewUser = new User({
				email: email,
				reserve: ''
			})
			NewUser.save();
			let token = jwt.sign({ email: email }, secretKey);
			let data = {
				token: token,
				status: "Register",
				emailValid  : 'ok'
			}
			res.status(200).send(data);
		}
	}
})

app.post("/save_reserve", async (req, res) => {
	let rooz = req.body.rooz
	let daynumber = req.body.daynumber
	let month = req.body.month
	let clock = req.body.clock;
	let token = req.body.token
	let fname = req.body.fname;
	let lname = req.body.lname;
	let phone = req.body.phone;
	let code_meli = req.body.code_meli;
	let description = req.body.description

	decode = jwt.verify(token, secretKey)
	email = decode.email;

	findRooz = await Reserve.findOne({ rooz: rooz });

	if (findRooz && rooz == findRooz.rooz && daynumber == findRooz.daynumber && month == findRooz.month && clock == findRooz.clock) {
		return res.status(500).send("این تاریخ قبلا رزرو شده")
	}
	else {
		findCode = await Reserve.findOne({ code_meli: code_meli })
		findPhone = await Reserve.findOne({ phone: phone })
		findFname = await Reserve.findOne({ fname: fname })
		if (findCode && rooz == findRooz.rooz) {
			return res.status(500).send("هر کد ملی تنها یکبار می تواند در روز نوبت بگیرد")
		}
		else if (findPhone && phone == findRooz.phone) {
			return res.status(500).send("هر شماره تلفن تنها یکبار می تواند در روز نوبت بگیرد")
		}
		else if (findFname && fname == findFname.fname && lname == findFname.lname) {
			return res.status(500).send("این اسم و فامیل برای امروز نوبت گرفته است")
		}
		else {
			let NewReserve = new Reserve({
				rooz,
				daynumber,
				month,
				clock,
				email,
				fname,
				lname,
				code_meli,
				phone,
				description,
				status: "reserved",

			})
			NewReserve.save().then(() => {
				res.status(200).send("نوبت با موفقیت رزرو شد")
			});
		}
	}

})

app.post("/find_reserved", async (req, res) => {
	rooz = req.body.rooz;
	daynumber = req.body.daynumber;
	month = req.body.month;
	clock = req.body.clock;
	find = await Reserve.findOne({ rooz: rooz });
	if (find && rooz == find.rooz && daynumber == find.daynumber && month == find.month && clock == find.clock) {
		res.status(400).send("این نوبت قبلا رزرو شده است")
	}
	else res.status(200).send("ok")
})

// run server
app.listen(port, () => {
	console.log("server is running");
})

