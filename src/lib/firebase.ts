import * as admin from 'firebase-admin';

// Prevent reinitializing Firebase Admin
if (!admin.apps.length) {
    if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
        throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set');
    }

    try {
        const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
        });
    } catch (error) {
        console.error('Error initializing Firebase Admin:', error);
        throw error;
    }
}

const auth = admin.auth();
const db = admin.firestore();

const verifyFirebaseToken = async (token: string) => {
    try {
        const decodedToken = await auth.verifyIdToken(token);
        return decodedToken;
    } catch (error) {
        console.error('Error verifying Firebase token:', error);
        throw error;
    }
};

export { admin, auth, db, verifyFirebaseToken };
