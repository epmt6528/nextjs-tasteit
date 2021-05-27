import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("API 'upload img' is called 🍙 ")
  // This method needs: img
  // Validation

  if (!req.file) {
    res.status(400).send('Image is not presented!')
    return
  }

  try {
    res.json({ message: "'add menu' call succeed!" })
    return
  } catch (e) {
    console.log(e.stack)
    res.status(500).send({ message: 'Request Faild' })
    return
  }
}
