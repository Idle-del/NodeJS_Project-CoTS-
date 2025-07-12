import nodemailer from "nodemailer"



const sendMail = async(data)=>{
    const transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : "magarkiran436@gmail.com",
        pass : "osrhmzfsdidqtrwx"
    }
});

    try {
    const send = await transporter.sendMail(data)
    } catch (error) {
        console.log(error.message);
    }
}
export default sendMail;

