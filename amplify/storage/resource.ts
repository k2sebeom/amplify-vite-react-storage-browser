import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'hansalim-amplify-bucket',
  access: (allow) => ({
    'public/*': [
        allow.guest.to(['read']),
    ]
  })
});
