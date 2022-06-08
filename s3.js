import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import fs from 'fs';


export function uploadDiary() {
    const filename = 'diary.txt';
    const file = fs.createReadStream(filename);

    const client = new S3Client({
        region: 'us-east-1',
        credentials: {
            accessKeyId: '',
            secretAccessKey: '',
        },
    });

    const command = new PutObjectCommand({
        Body: file,
        Bucket: '',
        Key: filename
    });

    const response = await client.send(command);
    console.log('resp', response);
}
