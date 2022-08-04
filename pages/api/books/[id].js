import clientPromise from '../../../utils/dbConnect'

export default async (req, res) => {
  const client = await clientPromise
  const db1 = client.db('galinato')
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET':
      try {
        const book = await db1
          .collection('books')
          .find({
            asin: id,
          })
          .toArray()

        res.status(200).json({ success: true, data: book })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
  }
}
