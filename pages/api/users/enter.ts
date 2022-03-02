import twilio from "twilio";
import mail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
mail.setApiKey(process.env.SENDGRID_API_KEY!);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const loginType = phone ? { phone: phone } : email ? { email } : null;
  if (!loginType) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: { ...loginType },
          create: {
            name: "Anonymous",
            ...loginType,
          },
        },
      },
    },
  });
  if (phone) {
    /* const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_SERVICE_SID,
      to: process.env.PHONE_NUM!,
      body: `Your login token is ${payload}`,
    });
    console.log(message); */
  } else if (email) {
    /* const email = await mail.send({
      from: "hunman89@gmail.com",
      to: "hunman89@gmail.com",
      subject: "Your carrot market verification Email",
      text: `Your token is ${payload}`,
      html: `<strong>Your token is ${payload}</strong>`,
    });
    console.log(email); */
  }
  return res.json({
    ok: true,
  });
}

export default withHandler({ methods: ["POST"], handler, isPrivate: false });
