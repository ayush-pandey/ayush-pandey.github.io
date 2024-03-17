const { app } = require('@azure/functions');

app.http('fetchComments', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        // Example comments data
        const commentsData = [
            "This course was really helpful!",
            "The pacing of the class was great and I learned a lot.",
            "I found the material challenging but rewarding.",
            "More examples in the future would be great!",
            "Excellent course, well taught and clearly presented."
        ];

        // You can add logic here to select specific comments, randomize them, etc.
        // For simplicity, we're just returning the entire array as is

        return { 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(commentsData) 
        };
    }
});
