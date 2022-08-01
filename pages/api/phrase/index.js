import clientPromise from '../../../utils/dbConnect'

export default async function handler(req, res) {
  const client = await clientPromise

  // To connect to the database labelled 'typ' and the collection 'phrases'
  const db1 = client.db('typ')
  switch (req.method) {
    case 'GET':
      try {
        const phrase = await db1.collection('phrases').find({}).toArray()
        res.status(200).json({ success: true, data: phrase })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
  }
}

// try {
//   const todos = await Book.find({})
//   res.status(200).json({ success: true, data: todos })
// } catch (error) {
//   res.status(400).json({ success: false })
// }
