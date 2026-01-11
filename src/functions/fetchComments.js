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

        // Helper to pick up to 'count' unique random items from an array
        const pickRandomItems = (arr, count) => {
            if (!Array.isArray(arr) || arr.length === 0) return [];
            const target = Math.min(count, arr.length);
            const indices = new Set();
            while (indices.size < target) {
                indices.add(Math.floor(Math.random() * arr.length));
            }
            return Array.from(indices).map(i => arr[i]);
        };

        // Fetch three random comments from each category
        const positiveThree = pickRandomItems(commentsData.positive_comments, 3);
        const negativeThree = pickRandomItems(commentsData.negative_comments, 3);

        // Return a flat array of 6 items: first 3 positive, next 3 negative
        return {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([...positiveThree, ...negativeThree])
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