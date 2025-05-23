const emailTransporter = require("../services/transporterEmail");
const User = require("../models/user.model");
const AppError = require("../utils/appError");
const asyncHandler = require("../middleware/asyncHandler");
const { VERIFICATION_EMAIL_TEMPLATE, SUCCESS_REGISTER_TEMPLATE, APPROVE_REGISTER_TEMPLATE } = require("../mail_templates/emailTemplates");
const { formatDateVN } = require("../utils/formatDateVN");
require('dotenv').config();

exports.sendVerificationLink = async (
   verificationLink,
   email
 ) => {
   try {
     await emailTransporter.sendMail({
       from: process.env.EMAIL_USERNAME,
       to: email,
       subject: "Xác thực tài khoản",
       html: VERIFICATION_EMAIL_TEMPLATE
         .replace("{verificationLink}", verificationLink)
         .replace("{currentYear}", new Date().getFullYear())
     });
      console.log("Đã gửi email")
   } catch (error) {
      console.log(error)
   }
};

exports.sendSuccessRegisterEvent = async (
   userName,
   email,
   eventName,
   eventStartAt,
   eventEndAt,
   eventLocation,
   eventDetailsLink
) => {  
   try {
      await emailTransporter.sendMail({
         from: process.env.EMAIL_USERNAME,
         to: email,
         subject: "Xác nhận ghi danh sự kiện",
         html: SUCCESS_REGISTER_TEMPLATE
         .replace("{userName}", userName)
         .replace("{eventName}", eventName)
         .replace("{eventStartAt}", formatDateVN(eventStartAt))
         .replace("{eventEndAt}", formatDateVN(eventEndAt))
         .replace("{eventLocation}", eventLocation)
         .replace("{eventDetailsLink}", eventDetailsLink)
         .replace("{currentYear}", new Date().getFullYear())
      });
      console.log("Đã gửi email cảm ơn")
   } catch (error) {
      console.log(error)
   }
};

exports.sendApproveRequest = async (   
   userName,
   email,
   eventName,
   eventStartAt,
   eventEndAt, 
   eventLocation,
) => {
   try {
      await emailTransporter.sendMail({
         from: process.env.EMAIL_USERNAME,
         to: email,
         subject: "Xác nhận tham gia sự kiện",
         html: APPROVE_REGISTER_TEMPLATE
         .replace("{userName}", userName)
         .replace("{eventName}", eventName)
         .replace("{eventStartAt}", formatDateVN(eventStartAt))
         .replace("{eventEndAt}", formatDateVN(eventEndAt))
         .replace("{eventLocation}", eventLocation)
         .replace("{currentYear}", new Date().getFullYear())
      });
      console.log("Đã gửi email duyệt yêu cầu thành công");
   } catch (error) {
      console.log(error)
   }
}


