import { storage, db } from "./firebase-config.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

const uploadForm = document.getElementById("uploadForm");
const receiptGallery = document.getElementById("receiptGallery");

uploadForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const file = document.getElementById("receiptImage").files[0];
    const receiptName = document.getElementById("receiptName").value;

    if (file && receiptName) {
        try {
            const storageRef = ref(storage, `receipts/${file.name}`);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);

            await addDoc(collection(db, "receipts"), {
                name: receiptName,
                imageUrl: downloadURL
            });

            alert("Receipt uploaded successfully!");
            displayReceipts();
        } catch (error) {
            console.error("Error uploading receipt:", error);
        }
    }
});

async function displayReceipts() {
    receiptGallery.innerHTML = "";
    const querySnapshot = await getDocs(collection(db, "receipts"));
    querySnapshot.forEach((doc) => {
        const { name, imageUrl } = doc.data();
        receiptGallery.innerHTML += `
            <div>
                <h3>${name}</h3>
                <img src="${imageUrl}" alt="${name}">
            </div>`;
    });
}

window.onload = displayReceipts;
