import clientPromise from '../../../utils/dbConnect'

export default async function handler(req, res) {
  const client = await clientPromise

  // To connect to the database labelled 'typ' and the collection 'phrases'
  const db1 = client.db('galinato')
  switch (req.method) {
    case 'GET':
      try {
        const books = await db1.collection('books').find({}).toArray()
        res.status(200).json({ success: true, data: books })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
  }
}
