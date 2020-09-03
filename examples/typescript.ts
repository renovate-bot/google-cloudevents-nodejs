import {MessagePublishedData} from '@google/events/src/google/events/cloud/pubsub/v1';

const obj = {
    message: {
        data: atob('Pub/Sub data'),
        messageId: 'my-message-id',
        publishTime: "2020-08-14T20:50:04.994Z",
    },
    subscription: 'projects/my-project/subscriptions/cre-us-central1-pubsub-trigger-5-sub-000'
};

const tsExample: MessagePublishedData = obj;
console.log(tsExample.message.messageId);