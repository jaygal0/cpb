import clientPromise from '../../../utils/dbConnect'

export default async function handler(req, res) {
  const client = await clientPromise

  // To connect to the database labelled 'typ' and the collection 'phrases'
  const db1 = client.db('typ')
  switch (req.method) {
    case 'GET':
      const phrase = await db1.collection('phrases').find({}).toArray()
      res.json(phrase)
      break
  }
}
