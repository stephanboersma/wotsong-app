import { doc, onSnapshot } from 'firebase/firestore';

import { db } from '.';

export const streamSession = (observer) => {
  return onSnapshot(doc(db, 'sessions', 'TEST'), observer);
};
