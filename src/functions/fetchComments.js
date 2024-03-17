const app = require('@azure/functions').app;
const { BlobServiceClient } = require('@azure/storage-blob');

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const containerName = 'comments-container';

app.http('fetchComments', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
        const containerClient = blobServiceClient.getContainerClient(containerName);
        const blobClient = containerClient.getBlobClient('comments.json');
        const downloadBlockBlobResponse = await blobClient.download(0);
        const downloadedContent = await streamToString(downloadBlockBlobResponse.readableStreamBody);

        const commentsData = JSON.parse(downloadedContent);

        // Fetch two random comments, one from each category
        const positiveComment = commentsData.positive_comments[Math.floor(Math.random() * commentsData.positive_comments.length)];
        const negativeComment = commentsData.negative_comments[Math.floor(Math.random() * commentsData.negative_comments.length)];

        return { 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([positiveComment, negativeComment]) 
        };
    }
});

// A helper function used to read a readable stream into a string
async function streamToString(readableStream) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        readableStream.on('data', (data) => {
            chunks.push(data.toString());
        });
        readableStream.on('end', () => {
            resolve(chunks.join(''));
        });
        readableStream.on('error', reject);
    });
}