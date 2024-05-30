import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore/lite';

const firebaseConfig = {
	apiKey: 'AIzaSyCR9B5o774SiliT9b5yu7KC3G_bMpPcnHE',
	authDomain: 'vanlife-project-d4d46.firebaseapp.com',
	projectId: 'vanlife-project-d4d46',
	storageBucket: 'vanlife-project-d4d46.appspot.com',
	messagingSenderId: '77591264986',
	appId: '1:77591264986:web:473ed7aa2ff4f3ef93afe3',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, 'vans');

export async function getVans() {
	const querySnapshot = await getDocs(vansCollectionRef);
	const dataArr = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}));
	return dataArr;
}

export async function getVan(id) {
	const docRef = doc(db, 'vans', id);
	const vanSnapshot = await getDoc(docRef);
	return {
		...vanSnapshot.data(),
		id: vanSnapshot.id,
	};
}

export async function getHostVans() {
	const q = query(vansCollectionRef, where('hostId', '==', '123'));
	const querySnapshot = await getDocs(q);
	const dataArr = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}));
	return dataArr;
}

export async function loginUser(creds) {
	const res = await fetch('/api/login', { method: 'post', body: JSON.stringify(creds) });

	const data = await res.json();

	if (!res.ok) {
		throw {
			message: data.message,
			statusText: res.statusText,
			status: res.status,
		};
	}

	return data;
}
