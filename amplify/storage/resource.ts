import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'hansalim-amplify-bucket',
  access: (allow) => ({
    'hansalim/*': [
        allow.authenticated.to(['read', 'write', 'delete']),
    ]
  })
});
