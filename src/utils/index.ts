import { SESClient,SendEmailCommand  } from "@aws-sdk/client-ses";
import { S3_REGION, S3_ACCESS_KEY, S3_SECRET } from './config'

const sesClient  = new SESClient({
    credentials: {
        accessKeyId: S3_ACCESS_KEY,
        secretAccessKey: S3_SECRET
    },
  region: S3_REGION,
})

const createSendEmailCommand = ({toAddress, fromAddress, data, subject}: any) => {
    return new SendEmailCommand({
      Destination: {
        CcAddresses: [
        ],
        ToAddresses: [
          toAddress
        ],
      },
      Message: {
        /* required */
        Body: {
          /* required */
          Html: {
            Charset: "UTF-8",
            Data: data,
          },
        //   Text: {
        //     Charset: "UTF-8",
        //     Data: "TEXT_FORMAT_BODY",
        //   },
        },
        Subject: {
          Charset: "UTF-8",
          Data: subject,
        },
      },
      Source: fromAddress,
      ReplyToAddresses: [
        /* more items */
      ],
    });
  };

export const sendEmailAWS = async ({
  recipientEmail,
  subject,
  htmlToSend,
  emailObject,
}: any) => {
    const sendEmailCommand = createSendEmailCommand({
        toAddress: recipientEmail, 
        fromAddress: emailObject.from, 
        data: htmlToSend,
        subject
    });
    
      try {
        return await sesClient.send(sendEmailCommand);
      } catch (caught) {
        if (caught instanceof Error && caught.name === "MessageRejected") {
          /** @type { import('@aws-sdk/client-ses').MessageRejected} */
          const messageRejectedError = caught;
          return messageRejectedError;
        }
        throw caught;
      }
  
}
