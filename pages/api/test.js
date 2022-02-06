import dbConnect from "../../utils/dbConnect";
import Products from '../../models/Products';

dbConnect();

export default async (req, res) => {

    const {method} = req;

    switch (method) {
        case 'GET':
            try {
                const notes = await Products.find({});
                res.status(200).json({test: notes});
            } catch (e) {
                res.status(400).json({status: false});
            }
            break;
        case 'POST':
            try{
                const note = await Products.create(req.body);
                res.status(201).json({status: note});
            } catch (e) {
                res.status(400).json({status: false, data: e});
            }
    }
}