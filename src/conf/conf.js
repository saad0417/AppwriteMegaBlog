// We are creating and importing all the environment variables in this file because some time if we directly write 'import.meta.env.VITE_APPWRITE_URL' it may not consider it's keys as string but now it will.

const conf = {
    appwriteURL:          String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:    String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId:   String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId:     String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tinymceKey:           String(import.meta.env.VITE_TINYMCE_API_KEY)
}

export default conf;