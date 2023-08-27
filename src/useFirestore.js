import { doc, addDoc, setDoc, getDoc, collection, getDocs, query, orderBy, limit, where } from "firebase/firestore";
import { db } from "./config";

export async function storeLinks (userAddress, ENSName, twitterLink, instagramLink, threadsLink, website) {
        try {
            await addDoc(collection(db, "LinkTress"), {
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

export async function getProjects () {
    const projectsRef = collection(db, "projects");
    const q = query(projectsRef, orderBy("id"), limit(7));
    const docs = [];
    try {
        const projectsDocs = await getDocs(q);
        // check if the doc exists and is
        projectsDocs.forEach((doc) => {
            docs.push(doc.data());
          });
        console.log("returned successfully");
        console.log(projectsDocs, docs);
        return docs;
    } catch (error) {
      console.log(error);
    }
};

export async function getProject (projectAddress) {
  const projectsRef = collection(db, "projects");
  const q = query(projectsRef, where("DAOAddress", "==", projectAddress));
  const docs = [];
  try {
      const projectsDocs = await getDocs(q);
      // check if the doc exists and is
      projectsDocs.forEach((doc) => {
          docs.push(doc.data());
        });
      console.log("returned successfully");
      console.log(projectsDocs, docs);
      return docs;
  } catch (error) {
    console.log(error);
  }
};