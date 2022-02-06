import dbConnect from "../../utils/dbConnect";
import Note from '../../models/Note';

dbConnect();

export default async (req, res) => {

    const {method} = req;

    switch (method) {
        case 'GET':
            try {
                const notes = await Note.find({});
                res.status(200).json({test: notes});
            } catch (e) {
                res.status(400).json({status: false});
            }
            break;
        case 'POST':
            try{
                const note = await Note.create(req.body);
                res.status(201).json({status: note});
            } catch (e) {
                res.status(400).json({status: false, data: e});
            }
    }
}