import { v4 as uuid } from 'uuid';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { HttpException, HttpStatus } from '@nestjs/common';

export function MulterOptions(dest: string) {
    return {
        fileFilter: (req: any, file: any, cb: any) => {
            if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
                // Allow storage of file
                cb(null, true);
            } else {
                // Reject file
                cb(new HttpException(`Unsupported file type ${extname(file.originalname)}`, HttpStatus.BAD_REQUEST), false);
            }
        },
        storage: diskStorage({
            destination: dest,
            filename: (req, file, cb) => {
                cb(null, `${uuid()}${extname(file.originalname)}`);
            }
        })
    }
}