const db = require("../models");
const User = db.user;
const sequelize = require('sequelize');

const bcrypt = require("bcryptjs");

const authController = {
    register: async (req,res) =>{
        try{
        const { username, email, phone, password } = req.body;

        const checkUsername = await User.findOne({
            where:{
                username
            }
        });

        if(checkUsername){
            return res.status(402).json({
                message: `${username} sudah ada!!. Silahkan ganti username`
            })
        }

        const checkEmail = await User.findOne({
            where:{
                email
            }
        });

        if(checkEmail){
            return res.status(402).json({
                message: `${email} sudah ada!!. Silahkan ganti email`
            })
        }

        const checkPhone = await User.findOne({
            where:{
                phone
            }
        });

        if(checkPhone){
            return res.status(402).json({
                message: `${phone} sudah ada!!. Silahkan ganti nomor HP`
            })
        }

        // if (password !== confirm_pass) {
        //     return res.status(402).json({
        //       message: "Penulisan password tidak sama!!"
        //     });
        //   }

          if (password.length < 8) {
            return res.status(400).json({
              message: "Minimal password 8 karakter!!"
            });
          }

          const salt = await bcrypt.genSalt(10);
          const hashPassword = await bcrypt.hash(password, salt);

          await User.create({username, email, phone, password: hashPassword});

          return res.status(200).json({
            message: "registrasi akun berhasil"
          })

        }catch (err){
            console.log(err);
            return res.status(err.statusCode || 500).json({
                message: err.message
            })
        }
    }
}
module.exports = authController;