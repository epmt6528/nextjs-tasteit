exports.createContact = async (req, res) => {
  const AWS = require('aws-sdk')
  // This method needs: name, phoneNumber, email, message
  // Validation
  const values = req.body
  if (!values.name || !values.phoneNumber || !values.email || !values.message) {
    res.status(400).send('More Pamaraters are Required')
    return
  }

  const params = {
    Destination: {
      ToAddresses: ['epmt6528@gmail.com'],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `<html>
                    <head>
                      <meta charset="utf-8">
                    </head>
                    <body>
                      <h2>Thank you for reaching out to Taste It!</h2>
                      <p>We have received your message and will be in touch as sson as possible.</p>
                      <br/>
                      <hr/>
                      <h3>Name</h3><br/>
                      <p>${values.name}</p><br/>
                      <h3>Phone Number</h3><br/>
                      <p>${values.phoneNumber}</p><br/>
                      <h3>Email</h3><br/>
                      <p>${values.email}</p><br/>
                      <h3>Message</h3><br/>
                      <p>${values.message}</p>
                    </body>
                </html>`,
        },
        Text: {
          Charset: 'UTF-8',
          Data: `Name: ${values.name} \n
                  Phone Number:${values.phoneNumber} \n
                  Email Address: ${values.email} \n
                  Message: ${values.message}`,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Hello from Taste It',
      },
    },
    Source: 'epmt6528@gmail.com',
  }

  const ses = new AWS.SES()
  try {
    await ses.sendEmail(params).promise()
    res.json({ message: 'Post call succeed!' })
    return
  } catch (e) {
    console.log(e.stack)
    res.status(500).send({ message: 'Request Faild' })
    return
  }
}
