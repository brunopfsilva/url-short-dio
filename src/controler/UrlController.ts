import {Request,Response}from 'express';
import shortid from 'shortid';
import shortURL from '../config/Constant';

export class urlShort {
    public async short(req: Request,resp: Response): promisse<watch>{
        const {originUrl} = req.body;
        const hash = shortid.generate();
        const shortURL = `${config.API_url}/${hash}`;

        response.json({originUrl,hash,shortURL});
    }
}