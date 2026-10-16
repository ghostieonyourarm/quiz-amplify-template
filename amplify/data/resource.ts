import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Question: a.model({
    text: a.string().required(),
    optionA: a.string().required(),
    optionB: a.string().required(),
    optionC: a.string().required(),
    optionD: a.string().required(),
    correctAnswer: a.string().required(),
  }).authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
