import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Process a POST request
    const { name, email, subject, message } = req.body

    // Here you would typically send an email or save to a database
    // For this example, we'll just log the data and return a success response
    console.log("Form submission:", { name, email, subject, message })

    // TODO: Add your email sending logic here

    res.status(200).json({ message: "Message sent successfully" })
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

