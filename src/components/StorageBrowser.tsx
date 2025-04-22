import {
    createAmplifyAuthAdapter,
    createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser'
import '@aws-amplify/ui-react-storage/styles.css'

export const { StorageBrowser } = createStorageBrowser({
    config: createAmplifyAuthAdapter(),
});
