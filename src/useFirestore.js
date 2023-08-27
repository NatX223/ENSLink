import { doc, addDoc, setDoc, getDoc, collection, getDocs, query, orderBy, limit, where } from "firebase/firestore";
import { db } from "./config";

export async function storeLinks (userAddress, ENSName, twitterLink, instagramLink, threadsLink, website) {
        try {
            await addDoc(collection(db, "LinkTrees"), {
                Address: userAddress,
                ENSName: ENSName,
                Instagram: instagramLink,
                Threads: threadsLink,
                Twitter: twitterLink,
                Website: website
            });
          console.log("created successfully");
        } catch (error) {
          console.log(error);
        }
};

export async function getLinks(ENSName) {
  const projectsRef = collection(db, "LinkTrees");
  const q = query(projectsRef, where("ENSName", "==", ENSName));
  const docs = [];
  try {
      const tree = await getDocs(q);
      tree.forEach((doc) => {
          docs.push(doc.data());
        });
      console.log("returned successfully");
      console.log(docs);
      return docs;
  } catch (error) {
    console.log(error);
  }
};